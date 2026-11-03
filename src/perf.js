/* =========================================================
 * 性能档位管理（low / mid / high，参数见 GameData.battle.perfTiers / autoTier）
 *  - 初始档位：设置里手动选择则锁定；“自动”时先看上局结束时的档位，否则按设备线索
 *    （hardwareConcurrency、deviceMemory、是否触屏、屏幕像素数）选择
 *  - 运行中：按 3s 窗口统计 fps，持续偏低自动降档；长时间富余自动升档（有滞回，每局最多升 1 次）
 *  - 统计 update / draw 耗时（环形缓冲），供 tests/stress.js 读取
 * ========================================================= */
window.Perf = (function () {
  const ORDER = ['low', 'mid', 'high'];
  const P = { tier: 'mid', mode: 'auto', log: [], cfg: null };
  const N = 4096, upd = new Float32Array(N), drw = new Float32Array(N), frm = new Float32Array(N);
  let ni = 0, nfill = 0;
  let winT = 0, winF = 0, winWork = 0, bad = 0, goodT = 0, ups = 0, lastSwitch = -1e9, runT = 0;
  const B = () => GameData.battle;
  function setCfg() { P.cfg = B().perfTiers[P.tier] || B().perfTiers.mid; }

  P.hintTier = function () {
    const nav = typeof navigator !== 'undefined' ? navigator : {};
    const cores = nav.hardwareConcurrency || 4, mem = nav.deviceMemory || 4;
    const touch = !!((typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches) || (typeof window !== 'undefined' && 'ontouchstart' in window));
    const dpr = (typeof devicePixelRatio === 'number' && devicePixelRatio) || 1;
    const px = (typeof screen !== 'undefined' ? screen.width * screen.height : 0) * dpr * dpr;
    let t = touch ? 'mid' : 'high';                       // 触屏设备从“中”开始，桌面从“高”开始（design 12.2）
    if (cores <= 4 || mem <= 2) t = touch ? 'low' : 'mid';
    if (touch && cores <= 6 && px > 3.5e6) t = 'low';     // 高分屏 + 核心少：合成放大开销更大
    return t;
  };
  P.init = function () {
    const s = (typeof Save !== 'undefined' && Save.data && Save.data.settings) || {};
    const m = s.perfTier || 'auto';
    if (ORDER.includes(m)) { P.mode = m; P.tier = m; }
    else { P.mode = 'auto'; P.tier = ORDER.includes(s.perfTierLast) ? s.perfTierLast : P.hintTier(); }
    setCfg();
    return P.tier;
  };
  P.setTier = function (t, lock) {
    if (!ORDER.includes(t)) return;
    if (lock) P.mode = t;
    if (t !== P.tier) { P.log.push({ t: +runT.toFixed(1), from: P.tier, to: t, why: lock ? 'manual' : 'auto' }); P.tier = t; lastSwitch = runT; }
    setCfg(); bad = 0; goodT = 0;
  };
  P.startRun = function () { P.init(); P.log = []; ups = 0; runT = 0; lastSwitch = -1e9; bad = 0; goodT = 0; winT = winF = winWork = 0; };
  P.endRun = function () {
    try { if (P.mode === 'auto' && Save.data) { Save.data.settings.perfTierLast = P.tier; Save.save(); } } catch (e) { }
  };
  /** 每帧调用：frameMs = 与上一帧的间隔，updMs/drawMs = 本帧耗时。返回是否切换了档位 */
  P.sample = function (frameMs, updMs, drawMs) {
    upd[ni] = updMs; drw[ni] = drawMs; frm[ni] = frameMs; ni = (ni + 1) % N; if (nfill < N) nfill++;
    if (frameMs <= 0 || frameMs > 250) return false;      // 切后台/卡死恢复的帧不计
    runT += frameMs / 1000;
    if (P.mode !== 'auto') return false;
    const A = B().autoTier;
    winT += frameMs; winF++; winWork += updMs + drawMs;
    if (winT < A.downWindowSec * 1000) return false;
    const fps = winF * 1000 / winT, work = winWork / winF;
    winT = winF = winWork = 0;
    const i = ORDER.indexOf(P.tier);
    if (fps < A.downFps) {
      goodT = 0;
      if (++bad >= A.downConsecutive && i > 0) { P.setTier(ORDER[i - 1]); return true; }
      return false;
    }
    bad = 0;
    if (fps >= A.upFps && work < A.upWorkMs) goodT += A.downWindowSec; else goodT = 0;
    if (goodT >= A.upWindowSec && i < ORDER.length - 1 && ups < A.maxUpsPerRun && runT - lastSwitch >= A.minSecBetween) {
      ups++; P.setTier(ORDER[i + 1]); return true;
    }
    return false;
  };
  function stat(a, q) {
    const n = nfill; if (!n) return 0;
    if (q == null) { let s = 0; for (let i = 0; i < n; i++) s += a[i]; return s / n; }
    const c = Array.from(a.subarray(0, n)).sort((x, y) => x - y); return c[Math.min(n - 1, Math.floor(n * q))];
  }
  P.reset = () => { ni = 0; nfill = 0; };
  P.avgUpdate = () => stat(upd); P.avgDraw = () => stat(drw);
  P.p99Update = () => stat(upd, 0.99); P.p99Draw = () => stat(drw, 0.99);
  P.workSamples = () => { const r = []; for (let i = 0; i < nfill; i++) r.push(upd[i] + drw[i]); return r; };
  P.ORDER = ORDER;
  return P;
})();
