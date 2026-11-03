/* =========================================================
 * 战斗核心（像素风，低分辨率 canvas 放大显示）
 * ========================================================= */
window.Game = (function () {
  const D = window.GameData;
  const VW = 256;   // 内部分辨率宽（BVN 精灵约为旧精灵 1.5 倍高，216 过挤；288 在 4x 降速压测下掉帧，取 256）
  let VH = 384;
  let cv, ctx, raf = 0, lastT = 0;
  let st = null;
  const G = { onEnd: null };
  const input = { active: false, sx: 0, sy: 0, cx: 0, cy: 0, jx: 0, jy: 0, keys: {} };
  const $ = id => document.getElementById(id);
  const rand = (a, b) => a + Math.random() * (b - a);
  const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
  const TAU = Math.PI * 2;

  /* ---------------- 性能：档位 / 对象池 / 原地压缩 ---------------- */
  const TIER = () => (window.Perf && Perf.cfg) || D.battle.perfTiers.mid;
  const capNow = () => TIER().cap;   // 同屏硬上限 = 当前性能档位 cap（low 350 / mid 550 / high 800）
  const POOL = { e: [], pr: [], q: [], n: [], g: [] };
  // 原地压缩：保留存活对象顺序，死亡对象回收到池（无新数组分配、无 splice）
  function compact(arr, pool, dead) {
    let w = 0;
    for (let i = 0; i < arr.length; i++) { const o = arr[i]; if (dead(o)) { if (pool && pool.length < 2048) pool.push(o); } else arr[w++] = o; }
    arr.length = w;
  }
  const deadE = e => e.dead, deadPr = o => o.dead, deadQ = q => q.life <= 0, deadN = n => n.t >= 0.7, deadG = g => g.dead, deadB = b => b.life <= 0, deadK = k => k.dead;
  const deadFx = f => { if (f.t >= f.dur) { if (f.img) releaseBolt(f.img); return true; } return false; };
  let frameNo = 0;

  /* ---------------- 初始化/输入 ---------------- */
  G.init = function (canvas) {
    cv = canvas; ctx = cv.getContext('2d', { alpha: false });   // 地面铺满画布 → 不透明画布，合成更省
    resize();
    window.addEventListener('resize', resize);
    const area = $('battle');
    const toLocal = e => { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left) / r.width * VW, (e.clientY - r.top) / r.height * VH]; };
    area.addEventListener('pointerdown', e => {
      if (!st || st.paused || e.target.closest('.no-joy')) return;
      const [x, y] = toLocal(e);
      input.active = true; input.id = e.pointerId; input.sx = input.cx = x; input.sy = input.cy = y;
      try { area.setPointerCapture(e.pointerId); } catch (_) { }
    });
    area.addEventListener('pointermove', e => {
      if (!input.active || e.pointerId !== input.id) return;
      const [x, y] = toLocal(e);
      input.cx = x; input.cy = y;
      const dx = x - input.sx, dy = y - input.sy, d = Math.hypot(dx, dy), R = 22;
      if (d > R) { input.sx = x - dx / d * R; input.sy = y - dy / d * R; } // 跟随式摇杆
    });
    const up = e => { if (e.pointerId === input.id) { input.active = false; } };
    area.addEventListener('pointerup', up); area.addEventListener('pointercancel', up);
    window.addEventListener('keydown', e => { input.keys[e.key.toLowerCase()] = true; if (e.key === 'Escape' && st && !st.over) G.togglePause(); });
    window.addEventListener('keyup', e => { input.keys[e.key.toLowerCase()] = false; });
    // 切后台自动暂停由 src/mobile.js 统一处理（visibilitychange / pagehide / blur → G.pauseForBackground）
  };
  function resize() {
    if (!cv) return;
    // 以画布自身的 CSS 尺寸为准（画布已按安全区内缩，见 css #game）
    const r = cv.getBoundingClientRect();
    if (r.width < 10) return;
    VH = clamp(Math.round(VW * r.height / r.width), 356, 616);   // 上下限随 VW 等比（原 216 宽时为 300–520）
    cv.width = VW; cv.height = VH;
    ctx.imageSmoothingEnabled = false;
  }
  G.resize = resize;

  /* ---------------- 开局 ---------------- */
  function xpFor(lv) { const X = D.battle.xpCurve; return Math.floor(X.a + lv * X.b + Math.pow(lv, X.p)); }

  G.start = function (charId) {
    resize();
    if (window.Perf) Perf.startRun();
    const ch = D.charById[charId];
    const stars = (Save.data.owned[charId] || { stars: 1 }).stars;
    const p = {
      x: 0, y: 0, r: 5, hp: 1, maxHp: 0, inv: 0, dirX: 1, dirY: 0, face: 1, moving: false, animT: 0,
      level: 1, xp: 0, xpNext: xpFor(1), weapons: [], passives: {}, revives: Save.data.upgrades.revive ? metaPer('revive') : 0,
      char: ch, starMul: 1 + D.battle.starBonus * (stars - 1), dash: null, regenAcc: 0
    };
    st = {
      p, t: 0, kills: 0, coinsRun: 0, enemies: [], projs: [], ebullets: [], gems: [], pickups: [], effects: [], nums: [],
      clones: [], parts: [], spawnT: 0, bossIdx: 0, bossesKilled: 0, shake: 0, flash: 0, levelQueue: 0,
      swarmT: D.battle.swarm.first, hudT: 0, nextId: 1, boss: null, paused: false, over: false, chests: 0,
      cullAcc: 0, recycled: 0
    };
    G.state = st;
    addWeapon(ch.startSkill);
    if (ch.trait.id === 'copy') {
      const pool = Object.keys(D.weapons).filter(k => !D.weapons[k].evolved && k !== ch.startSkill);
      addWeapon(pool[Math.floor(Math.random() * pool.length)]);
    }
    recalc(); p.hp = p.maxHp;
    $('levelup').classList.add('hidden'); $('pause-menu').classList.add('hidden'); $('result').classList.add('hidden');
    $('boss-bar').classList.add('hidden');
    buildSkillHud();
    toast('拖动屏幕任意位置移动 · 忍术自动释放', 2600);
    Sfx.music('battle');
    cancelAnimationFrame(raf);
    lastT = performance.now();
    raf = requestAnimationFrame(loop);
  };
  G.stop = function () { cancelAnimationFrame(raf); st = null; G.state = null; };

  // 局外强化 / 被动道具的每级效果（数值在 src/data/upgrades.js metaUpgrades[].per 与 skills.js passives[].per）
  const metaPer = id => { const u = D.metaUpgrades.find(x => x.id === id); return u ? u.per : 0; };
  const pasPer = id => D.passives[id].per;
  function recalc() {
    const p = st.p, ch = p.char, up = Save.data.upgrades, pa = p.passives, lv = k => up[k] || 0, PB = D.battle.player;
    p.might = ch.stats.might * (1 + metaPer('atk') * lv('atk')) * (1 + pasPer('whetstone') * (pa.whetstone || 0)) * p.starMul;
    p.cdMul = ch.stats.cd * (1 - metaPer('cd') * lv('cd')) * (1 - pasPer('chakra') * (pa.chakra || 0));
    p.area = ch.stats.area * (1 + pasPer('wind') * (pa.wind || 0));
    p.speed = PB.speed * ch.stats.speed * (1 + metaPer('spd') * lv('spd')) * (1 + pasPer('sandals') * (pa.sandals || 0));
    const old = p.maxHp;
    p.maxHp = Math.round((ch.stats.hp + metaPer('hp') * lv('hp') + pasPer('pill') * (pa.pill || 0)) * p.starMul);
    if (old) p.hp += Math.max(0, p.maxHp - old);
    p.pickup = PB.pickup * (1 + metaPer('magnet') * lv('magnet')) * (1 + pasPer('magnet') * (pa.magnet || 0));
    p.xpMul = 1 + metaPer('xp') * lv('xp');
    p.coinMul = 1 + metaPer('coin') * lv('coin');
    p.regen = ch.stats.regen || 0;
    p.crit = ch.stats.crit || PB.crit;
  }

  function addWeapon(id) {
    const p = st.p;
    let w = p.weapons.find(x => x.id === id);
    if (w) { w.lv = Math.min(w.lv + 1, D.weapons[id].levels.length); }
    else { w = { id, lv: 1, t: 0.4, t2: 1, ang: 0, balls: [] }; p.weapons.push(w); }
    if (id === 'clone') syncClones(w);
  }
  function syncClones(w) {
    const L = D.weapons.clone.levels[w.lv - 1];
    while (st.clones.length < L.count) {
      const c = { x: st.p.x, y: st.p.y, t: Math.random(), animT: 0 };
      st.clones.push(c); poof(c.x, c.y);
    }
  }

  /* ---------------- 主循环 ---------------- */
  function loop(now) {
    raf = requestAnimationFrame(loop);
    // dt 钳制：切后台/锁屏后 rAF 暂停，回来时 now-lastT 可能是几十秒，必须钳制避免时间跳跃
    let dt = (now - lastT) / 1000; lastT = now;
    if (!(dt >= 0)) dt = 0;
    if (dt > 0.05) dt = 0.05;
    if (dt < 0) dt = 0;
    if (!st) return;
    const active = !st.paused && !st.over, t0 = performance.now();
    if (active) update(dt);
    const t1 = performance.now();
    render();
    const t2 = performance.now();
    if (window.Perf) {
      const fms = now - (G._lastFrame || now); G._lastFrame = now;
      if (active) Perf.sample(fms, t1 - t0, t2 - t1); else G._lastFrame = 0;
    }
  }

  function update(dt) {
    const p = st.p;
    st.t += dt;
    buildGrid();
    updatePlayer(dt);
    spawner(dt);
    p.weapons.forEach(w => WU[w.id] && WU[w.id](w, D.weapons[w.id].levels[w.lv - 1], dt));
    updateClones(dt);
    updateProjs(dt);
    updateEnemies(dt);
    updateEBullets(dt);
    updateGems(dt);
    updateFx(dt);
    compact(st.enemies, POOL.e, deadE);
    frameNo++;
    st.shake = Math.max(0, st.shake - dt * 18);
    st.flash = Math.max(0, st.flash - dt);
    st.hudT -= dt;
    if (st.hudT <= 0) { st.hudT = 0.1; updateHud(); }
    if (st.t >= D.battle.duration) return end(true);
    if (st.levelQueue > 0 && !st.paused) openLevelUp();
  }

  /* ---------------- 空间网格（预分配定长网格 + 计数排序，每帧零分配） ----------------
   * 以主角为中心 64×64 格（16px/格，覆盖约 ±512px）；网格外的敌人归入边缘格（查询时仍做精确距离判断）。
   * 网格在 update 开头建立，记录的是 st.enemies 的下标；本帧中途新生成的敌人下一帧才进网格。 */
  const CELL = 16, GW = 64, GN = GW * GW, PAD = 12;
  const cellStart = new Int32Array(GN + 1), cellCur = new Int32Array(GN);
  let cellItems = new Int32Array(1024), cellOf = new Int32Array(1024), gridN = 0, gx0 = 0, gy0 = 0;
  const gcx = x => { let c = Math.floor((x - gx0) / CELL); return c < 0 ? 0 : c >= GW ? GW - 1 : c; };
  const gcy = y => { let c = Math.floor((y - gy0) / CELL); return c < 0 ? 0 : c >= GW ? GW - 1 : c; };
  function buildGrid() {
    const es = st.enemies, n = es.length;
    if (cellItems.length < n) { cellItems = new Int32Array(n * 2); cellOf = new Int32Array(n * 2); }
    gx0 = Math.floor(st.p.x / CELL) * CELL - (GW / 2) * CELL; gy0 = Math.floor(st.p.y / CELL) * CELL - (GW / 2) * CELL;
    cellStart.fill(0);
    for (let i = 0; i < n; i++) {
      const e = es[i];
      if (e.dead) { cellOf[i] = -1; continue; }
      const c = gcy(e.y) * GW + gcx(e.x); cellOf[i] = c; cellStart[c + 1]++;
    }
    for (let c = 0; c < GN; c++) { cellStart[c + 1] += cellStart[c]; cellCur[c] = cellStart[c]; }
    for (let i = 0; i < n; i++) { const c = cellOf[i]; if (c >= 0) cellItems[cellCur[c]++] = i; }
    gridN = n;
  }
  // 圆形范围查询：对与 (x,y) 距离 < r + e.r 的存活敌人调用 cb；cb 返回 false 提前结束
  function query(x, y, r, cb) {
    const es = st.enemies;
    const x0 = gcx(x - r - PAD), x1 = gcx(x + r + PAD), y0 = gcy(y - r - PAD), y1 = gcy(y + r + PAD);
    for (let cy = y0; cy <= y1; cy++) for (let cx = x0; cx <= x1; cx++) {
      const c = cy * GW + cx;
      for (let k = cellStart[c], ke = cellStart[c + 1]; k < ke; k++) {
        const e = es[cellItems[k]];
        if (e.dead) continue;
        const dx = e.x - x, dy = e.y - y, rr = r + e.r;
        if (dx * dx + dy * dy < rr * rr) { if (cb(e) === false) return; }
      }
    }
  }
  // 最近 n 个敌人：以所在格为中心一圈圈向外搜索，凑够 n 个且下一圈不可能更近时停止；结果数组复用（调用方需立即使用）
  const NR = [], ND = [];
  function nearest(x, y, n, maxD) {
    NR.length = 0; ND.length = 0;
    const es = st.enemies, m2 = maxD * maxD;
    const fx = (x - gx0) / CELL, fy = (y - gy0) / CELL, cx0 = Math.floor(fx), cy0 = Math.floor(fy);
    const maxRing = Math.ceil(maxD / CELL) + 1;
    for (let ring = 0; ring <= maxRing; ring++) {
      if (NR.length >= n && ring > 1) { const lb = (ring - 1) * CELL; if (lb * lb > ND[NR.length - 1]) break; }
      const ya = cy0 - ring, yb = cy0 + ring;
      for (let cy = ya; cy <= yb; cy++) {
        if (cy < 0 || cy >= GW) continue;
        const edge = cy === ya || cy === yb, step = edge ? 1 : 2 * ring || 1;
        for (let cx = cx0 - ring; cx <= cx0 + ring; cx += step) {
          if (cx < 0 || cx >= GW) continue;
          const c = cy * GW + cx;
          for (let k = cellStart[c], ke = cellStart[c + 1]; k < ke; k++) {
            const e = es[cellItems[k]];
            if (e.dead) continue;
            const d = (e.x - x) * (e.x - x) + (e.y - y) * (e.y - y);
            if (d > m2) continue;
            if (NR.length < n) { let j = NR.length; NR.push(e); ND.push(d); while (j > 0 && ND[j - 1] > d) { NR[j] = NR[j - 1]; ND[j] = ND[j - 1]; j--; } NR[j] = e; ND[j] = d; }
            else if (d < ND[n - 1]) { let j = n - 1; while (j > 0 && ND[j - 1] > d) { NR[j] = NR[j - 1]; ND[j] = ND[j - 1]; j--; } NR[j] = e; ND[j] = d; }
          }
        }
      }
    }
    return NR;
  }

  /* ---------------- 玩家 ---------------- */
  function updatePlayer(dt) {
    const p = st.p;
    let mx = 0, my = 0;
    const k = input.keys;
    if (k['a'] || k['arrowleft']) mx -= 1;
    if (k['d'] || k['arrowright']) mx += 1;
    if (k['w'] || k['arrowup']) my -= 1;
    if (k['s'] || k['arrowdown']) my += 1;
    if (input.active) {
      const dx = input.cx - input.sx, dy = input.cy - input.sy, d = Math.hypot(dx, dy);
      if (d > 2) { const m = Math.min(1, d / 16); mx = dx / d * m; my = dy / d * m; }
    }
    if (input.ai) { mx = input.ai[0]; my = input.ai[1]; }
    const ml = Math.hypot(mx, my);
    if (ml > 1) { mx /= ml; my /= ml; }
    p.moving = ml > 0.05;
    if (p.moving) { p.dirX = mx / (ml || 1); p.dirY = my / (ml || 1); if (Math.abs(mx) > 0.1) p.face = mx < 0 ? -1 : 1; p.animT += dt * (6 + 4 * Math.min(1, ml)); }
    else p.animT = 0;
    p.x += mx * p.speed * dt; p.y += my * p.speed * dt;
    if (p.dash) {
      p.x += p.dash.vx * dt; p.y += p.dash.vy * dt; p.dash.t -= dt;
      if (Math.random() < 0.8) addPart(p.x + rand(-3, 3), p.y - 8 + rand(-4, 4), 0, 0, 0.25, '#bff4ff', 2);
      if (p.dash.t <= 0) p.dash = null;
    }
    p.inv = Math.max(0, p.inv - dt);
    if (p.regen > 0 && p.hp < p.maxHp) { p.hp = Math.min(p.maxHp, p.hp + p.regen * dt); }
  }
  function hurtPlayer(dmg) {
    const p = st.p;
    if (p.inv > 0 || st.over || G.debug.god) return;
    p.hp -= dmg; p.inv = D.battle.playerInv;
    addShake(3); Sfx.play('hurt');
    addNum(p.x, p.y - 20, Math.round(dmg), 'hurt');
    if (p.hp <= 0) {
      if (p.revives > 0) {
        const RV = D.battle.revive;
        p.revives--; p.hp = p.maxHp * RV.hpPct; p.inv = RV.inv;
        toast('不屈之志！复活！', 1800);
        addFx({ k: 'ring', x: p.x, y: p.y, r0: 4, r1: RV.radius, t: 0, dur: 0.5, c: '#ffe066' });
        query(p.x, p.y, RV.radius, e => { if (!e.boss) dmgEnemy(e, RV.dmg, 0, 0); });
        Sfx.play('levelup');
      } else end(false);
    }
  }

  /* ---------------- 敌人生成 ---------------- */
  function spawnPos(extra) {
    const p = st.p, a = Math.random() * TAU, R = Math.hypot(VW, VH) / 2 + D.battle.spawn.radiusPad + (extra || 0);
    return [p.x + Math.cos(a) * R, p.y + Math.sin(a) * R];
  }
  function spawnEnemy(type, x, y) {
    const def = D.enemies[type], tm = st.t / 60, GR = D.battle.growth;
    const hpMul = 1 + tm * GR.hpLin + tm * tm * GR.hpQuad;
    const e = POOL.e.pop() || {};
    e.id = st.nextId++; e.type = type; e.def = def; e.x = x; e.y = y; e.hp = def.hp * hpMul; e.maxHp = def.hp * hpMul;
    e.speed = def.speed * rand(GR.speedMin, GR.speedMax); e.dmg = def.dmg * (1 + tm * GR.dmgLin); e.spr = Sprites.enemyFrames(type); e.r = def.r * (e.spr.rMul || 1); e.hurtR = def.r;   // 身体半径按精灵可见尺寸缩放（分离/被命中）；接触伤害仍用数据里的 r，保持平衡
    e.kx = 0; e.ky = 0; e.flash = 0; e.animT = Math.random() * 2; e.hitRas = -9; e.shootT = rand(1, 3);
    e.boss = false; e.elite = false; e.dead = false; e.recycled = false; e.face = 1; e.xp = def.xp;
    e.num = null; e.bstate = null; e.name = null;
    st.enemies.push(e); return e;
  }
  /* 超上限回收：移除 k 只“最远的普通敌人”（非 BOSS、非精英；屏幕外优先），不计击杀、不掉落 */
  const RC = []; let RS = new Float64Array(1024);
  const byScoreDesc = (a, b) => RS[b] - RS[a];
  function recycleFarthest(k) {
    if (k <= 0) return 0;
    const es = st.enemies, p = st.p, hw = VW / 2 + 24, hh = VH / 2 + 48;
    if (RS.length < es.length) RS = new Float64Array(es.length * 2);
    RC.length = 0;
    for (let i = 0; i < es.length; i++) {
      const e = es[i]; if (e.dead || e.boss || e.elite) continue;
      const dx = e.x - p.x, dy = e.y - p.y, off = Math.abs(dx) > hw || Math.abs(dy) > hh;
      RS[i] = dx * dx + dy * dy + (off ? 1e12 : 0); RC.push(i);
    }
    RC.sort(byScoreDesc);
    const n = Math.min(k, RC.length);
    for (let j = 0; j < n; j++) { const e = es[RC[j]]; e.dead = true; e.recycled = true; if (e.num && e.num.owner === e) e.num.owner = null; }
    st.recycled += n;
    return n;
  }
  function aliveCount() { let n = 0; const es = st.enemies; for (let i = 0; i < es.length; i++) if (!es[i].dead) n++; return n; }
  function spawner(dt) {
    const t = st.t, SP = D.battle.spawn;
    st.spawnT -= dt;
    if (st.spawnT <= 0) {
      st.spawnT = SP.tick;
      const cap = capNow();
      const target = Math.min(D.battle.maxEnemies, cap, SP.base + t * SP.perSec);
      const need = target - st.enemies.length;
      const n = Math.min(SP.maxPerTick, Math.ceil(need / SP.fillDiv), cap - st.enemies.length);
      const types = Object.keys(D.enemies).filter(k => D.enemies[k].from <= t);
      for (let i = 0; i < n; i++) {
        let tot = 0; const ws = types.map(k => { let w = D.enemies[k].weight; if (k === SP.fade.type) w = Math.max(SP.fade.minWeight, w - t / SP.fade.div); tot += w; return w; });
        let r = Math.random() * tot, ti = 0; while (r > ws[ti]) { r -= ws[ti]; ti++; }
        const [x, y] = spawnPos(rand(0, SP.radiusRand));
        spawnEnemy(types[Math.min(ti, types.length - 1)], x, y);
      }
    }
    // 包围潮
    if (t >= st.swarmT) {
      st.swarmT += D.battle.swarmEvery;
      const SW = D.battle.swarm;
      const cap = capNow();
      const cnt = Math.min(SW.base + Math.floor(t / 60) * SW.perMin, cap - (st.boss ? 1 : 0)), type = swarmType(t);
      // 包围潮不得突破同屏上限：先回收最远的普通敌人（design 5.1 / 11.7 P0-1）
      const over = aliveCount() + cnt - cap;
      if (over > 0) { if (SW.recycleFarthest !== false) recycleFarthest(over); }
      const R = Math.hypot(VW, VH) / 2 + SW.radiusPad;
      const gap = Math.random() * TAU;
      const room = SW.recycleFarthest !== false ? cnt : Math.max(0, cap - aliveCount());
      for (let i = 0; i < room; i++) { const a = gap + SW.gapRad / 2 + i / cnt * (TAU - SW.gapRad); spawnEnemy(type, st.p.x + Math.cos(a) * R, st.p.y + Math.sin(a) * R); }
      toast('⚠ 敌人包围了！', 1500);
    }
    // BOSS（计入总数，生成前同样回收以保证不超上限）
    const bd = D.bosses[st.bossIdx];
    if (bd && t >= bd.time) { recycleFarthest(aliveCount() + 1 - capNow()); spawnBoss(st.bossIdx); st.bossIdx++; }
    // 降档后超出新上限：每秒最多回收 cullPerSec 只（屏幕外最远优先），避免画面突然少一片
    const ex = st.enemies.length - capNow();
    if (ex > 0) { st.cullAcc += D.battle.autoTier.cullPerSec * dt; const k = Math.min(ex, Math.floor(st.cullAcc)); if (k > 0) { st.cullAcc -= k; recycleFarthest(k); } }
    else st.cullAcc = 0;
  }
  function swarmType(t) { const ts = D.battle.swarm.types; for (const o of ts) if (t <= o.until) return o.type; return ts[ts.length - 1].type; }
  function spawnBoss(idx) {
    const bd = D.bosses[idx];
    const [x, y] = spawnPos(10);
    const e = {
      id: st.nextId++, type: 'boss', def: bd, x, y, hp: bd.hp, maxHp: bd.hp, speed: bd.speed, dmg: bd.dmg, r: D.battle.boss.r, kx: 0, ky: 0,
      flash: 0, animT: 0, hitRas: -9, num: null, boss: true, dead: false, face: 1, xp: D.battle.boss.xp, spr: Sprites.bossFrames(idx), bstate: 'walk', bt: D.battle.boss.firstWalk, name: bd.name
    };
    st.enemies.push(e); st.boss = e;
    $('boss-name').textContent = bd.name;
    $('boss-bar').classList.remove('hidden');
    bossBanner(bd.name);
    Sfx.play('boss'); Sfx.music('boss');
    addShake(5);
  }

  /* ---------------- 敌人更新 ---------------- */
  function updateEnemies(dt) {
    const p = st.p, far = Math.hypot(VW, VH) * D.battle.spawn.farMul, BS = D.battle.boss, RG = D.battle.ranged;
    const es = st.enemies, decay = Math.min(1, dt * 9), tpR = Math.hypot(VW, VH) / 2 + D.battle.spawn.teleportPad;
    for (let i = 0, n = es.length; i < n; i++) {
      const e = es[i];
      if (e.dead) continue;
      let dx = p.x - e.x, dy = p.y - e.y; const d = Math.sqrt(dx * dx + dy * dy) || 1;
      dx /= d; dy /= d;
      let sp = e.speed, mvx = dx, mvy = dy;
      if (e.boss) {
        e.bt -= dt;
        if (e.bstate === 'walk' && e.bt <= 0) { e.bstate = 'charge'; e.bt = BS.charge; e.cdx = dx; e.cdy = dy; }
        else if (e.bstate === 'charge') { sp = 0; e.flash = (Math.floor(e.bt * 12) % 2) ? 0.05 : 0; if (e.bt <= 0) { e.bstate = 'dash'; e.bt = BS.dash; } }
        else if (e.bstate === 'dash') { sp = e.speed * BS.dashMul; mvx = e.cdx; mvy = e.cdy; if (Math.random() < 0.6) addPart(e.x + rand(-8, 8), e.y + rand(-4, 6), 0, 0, 0.3, '#a04060', 2); if (e.bt <= 0) { e.bstate = 'walk'; e.bt = rand(BS.walkMin, BS.walkMax); } }
      } else if (e.def.ranged) {
        if (d < RG.flee) { mvx = -dx * 0.6; mvy = -dy * 0.6; } else if (d < RG.strafe) { mvx = dy * 0.5; mvy = -dx * 0.5; }
        if (d < RG.shootRange) { e.shootT -= dt; if (e.shootT <= 0) { e.shootT = RG.shootCd; st.ebullets.push({ x: e.x, y: e.y - 6, vx: dx * RG.bulletSpeed, vy: dy * RG.bulletSpeed, life: RG.bulletLife, dmg: e.dmg }); } }
      }
      e.x += (mvx * sp + e.kx) * dt; e.y += (mvy * sp + e.ky) * dt;
      e.kx -= e.kx * decay; e.ky -= e.ky * decay;
      if (Math.abs(mvx) > 0.05) e.face = mvx < 0 ? -1 : 1;
      e.animT += dt * (e.boss ? 4 : 6);
      if (e.flash > 0) e.flash -= dt;
      // 距离太远的普通敌人重新放到玩家前方
      if (!e.boss && d > far) {
        const a = Math.atan2(p.dirY, p.dirX) + rand(-1, 1);
        e.x = p.x + Math.cos(a) * tpR; e.y = p.y + Math.sin(a) * tpR;
      }
      // 接触伤害
      if (d < (e.hurtR || e.r) + p.r) hurtPlayer(e.dmg);
    }
    // 互斥分离：网格内联遍历（无闭包），平方距离预筛，每只最多处理 sepMaxNeighbors 个邻居；低档隔帧计算
    const sepK = TIER().sepEveryFrames || 1;
    if (frameNo % sepK === 0) separate();
  }
  function separate() {
    const es = st.enemies, maxNb = D.battle.sepMaxNeighbors || 6;
    for (let i = 0; i < gridN; i++) {
      const e = es[i];
      if (e.dead) continue;
      const er = e.r, we = e.boss ? 0.1 : 1;
      const x0 = gcx(e.x - er - PAD), x1 = gcx(e.x + er + PAD), y0 = gcy(e.y - er - PAD), y1 = gcy(e.y + er + PAD);
      let cnt = 0;
      outer: for (let cy = y0; cy <= y1; cy++) for (let cx = x0; cx <= x1; cx++) {
        const c = cy * GW + cx;
        for (let k = cellStart[c], ke = cellStart[c + 1]; k < ke; k++) {
          const o = es[cellItems[k]];
          if (o === e || o.dead) continue;
          let dx = e.x - o.x, dy = e.y - o.y; const rr = er + o.r, d2 = dx * dx + dy * dy;
          if (d2 >= rr * rr) continue;
          let d = Math.sqrt(d2);
          if (d < 0.01) { dx = Math.random() - 0.5; dy = Math.random() - 0.5; d = 0.5; }
          const push = (rr - d) * 0.5 / d, wo = o.boss ? 0.1 : 1;
          e.x += dx * push * we; e.y += dy * push * we; o.x -= dx * push * wo; o.y -= dy * push * wo;
          if (++cnt >= maxNb) break outer;
        }
      }
    }
  }
  function updateEBullets(dt) {
    const p = st.p;
    for (const b of st.ebullets) {
      b.x += b.vx * dt; b.y += b.vy * dt; b.life -= dt;
      const bx = b.x - p.x, by = b.y - (p.y - 6);
      if (bx * bx + by * by < 36) { hurtPlayer(b.dmg); b.life = 0; }
    }
    compact(st.ebullets, null, deadB);
  }

  /* ---------------- 伤害/击杀/掉落 ---------------- */
  function dmgEnemy(e, base, kx, ky) {
    if (e.dead) return;
    const p = st.p;
    let m = p.might;
    const tr = p.char.trait, B = D.battle;
    if (tr.id === 'kyuubi' && p.hp < p.maxHp * tr.hpTh) m *= tr.mightMul;
    const crit = Math.random() < p.crit;
    const dmg = Math.max(1, Math.round(base * m * (crit ? B.critMul : 1) * rand(B.dmgRand[0], B.dmgRand[1])));
    e.hp -= dmg; e.flash = 0.09;
    if (e.boss) { e.kx += kx * B.boss.kbMul; e.ky += ky * B.boss.kbMul; } else { e.kx += kx; e.ky += ky; }
    addNum(e.x, e.y - (e.boss ? 44 : 18), dmg, crit ? 'crit' : 'n', e);
    Sfx.play('hit');
    if (e.hp <= 0) killEnemy(e);
  }
  function killEnemy(e) {
    e.dead = true; st.kills++;
    Sfx.play('kill');
    for (let i = 0; i < (e.boss ? 30 : 5); i++) {
      const a = Math.random() * TAU, s = rand(20, e.boss ? 90 : 50);
      addPart(e.x, e.y - 6, Math.cos(a) * s, Math.sin(a) * s, 0.35, i % 2 ? '#ffffff' : '#c0c0d0', 2);
    }
    if (e.boss) {
      st.boss = null; st.bossesKilled++;
      $('boss-bar').classList.add('hidden');
      st.pickups.push({ k: 'chest', x: e.x, y: e.y, bob: 0 });
      for (let i = 0; i < D.battle.boss.chestGems; i++) dropGem(e.x + rand(-20, 20), e.y + rand(-20, 20), D.battle.boss.chestGemXp);
      addShake(6); Sfx.play('boom'); Sfx.music('battle');
      toast('击败了 ' + e.name + '！', 2000);
      return;
    }
    dropGem(e.x, e.y, e.xp);
    const r = Math.random(), DR = D.battle.drops;
    if (r < DR.coinChance) st.pickups.push({ k: 'coin', x: e.x + 4, y: e.y, bob: Math.random() * 6 });
    else if (r < DR.coinChance + DR.ramenChance) st.pickups.push({ k: 'ramen', x: e.x, y: e.y, bob: 0 });
    else if (r < DR.coinChance + DR.ramenChance + DR.magnetChance) st.pickups.push({ k: 'magnet', x: e.x, y: e.y, bob: 0 });
  }
  function dropGem(x, y, v) {
    // 合并阈值按档位（perfTiers.gems；中档 = 原 drops.gemMerge 260）
    const lim = TIER().gems || D.battle.drops.gemMerge;
    if (st.gems.length > lim) { const g = st.gems[Math.floor(Math.random() * st.gems.length)]; g.v += v; g.spr = gemSpr(g.v); return; }
    const g = POOL.g.pop() || {};
    g.x = x; g.y = y; g.v = v; g.mag = false; g.sp = 0; g.spr = gemSpr(v); g.dead = false;
    st.gems.push(g);
  }
  const gemSpr = v => v >= 10 ? 'gemR' : v >= 3 ? 'gemG' : 'gemB';

  function updateGems(dt) {
    const p = st.p, pr2 = p.pickup * p.pickup, DR = D.battle.drops;
    for (const g of st.gems) {
      const dx = p.x - g.x, dy = (p.y - 6) - g.y, d2 = dx * dx + dy * dy;
      if (!g.mag && d2 < pr2) g.mag = true;
      if (g.mag) {
        g.sp = Math.min(g.sp + 400 * dt, 280);
        const d = Math.sqrt(d2) || 1;
        g.x += dx / d * g.sp * dt; g.y += dy / d * g.sp * dt;
        if (d < 6) { g.dead = true; gainXp(g.v); Sfx.play('gem'); }
      }
    }
    compact(st.gems, POOL.g, deadG);
    for (const k of st.pickups) {
      k.bob += dt * 4;
      const dx = p.x - k.x, dy = (p.y - 6) - k.y, d = Math.hypot(dx, dy);
      if (k.k === 'coin' && d < p.pickup) { k.x += dx / d * 150 * dt; k.y += dy / d * 150 * dt; }
      if (d < 10) {
        k.dead = true;
        if (k.k === 'coin') { const c = Math.round(rand(DR.coinMin, DR.coinMax) * p.coinMul); st.coinsRun += c; Sfx.play('coin'); addNum(p.x, p.y - 22, c, 'coin'); }
        else if (k.k === 'ramen') { p.hp = Math.min(p.maxHp, p.hp + DR.ramenHeal); Sfx.play('heal'); addNum(p.x, p.y - 22, DR.ramenHeal, 'heal'); }
        else if (k.k === 'magnet') { st.gems.forEach(g => g.mag = true); Sfx.play('select'); toast('通灵：经验全部吸取！', 1200); }
        else if (k.k === 'chest') openChest();
      }
    }
    compact(st.pickups, null, deadK);
  }
  function gainXp(v) {
    const p = st.p;
    p.xp += v * p.xpMul;
    while (p.xp >= p.xpNext) { p.xp -= p.xpNext; p.level++; p.xpNext = xpFor(p.level); st.levelQueue++; }
  }
  function openChest() {
    Sfx.play('chest'); st.chests++;
    const ev = availableEvos();
    let msg;
    if (ev.length) { applyChoice({ kind: 'evo', ev: ev[0] }); msg = '进化！' + D.weapons[ev[0].result].name; }
    else {
      const ups = st.p.weapons.filter(w => !D.weapons[w.id].evolved && w.lv < 5);
      if (ups.length) { const w = ups[Math.floor(Math.random() * ups.length)]; addWeapon(w.id); msg = D.weapons[w.id].name + ' 升至 Lv' + w.lv; }
      else { st.coinsRun += D.battle.drops.chestFallbackCoins; msg = '金币 +' + D.battle.drops.chestFallbackCoins; }
    }
    const c = Math.round(D.battle.drops.chestCoins * st.p.coinMul); st.coinsRun += c;
    toast('宝箱：' + msg + '  金币+' + c, 2400);
    st.flash = 0.25; buildSkillHud();
  }

  /* ---------------- 投射物 ---------------- */
  function fire(kind, x, y, ang, speed, dmg, pierce, life, r, extra) {
    if (st.projs.length >= (TIER().projs || 700)) return null;   // 档位投射物上限
    const pr = POOL.pr.pop() || { hit: new Set() };
    pr.kind = kind; pr.x = x; pr.y = y; pr.vx = Math.cos(ang) * speed; pr.vy = Math.sin(ang) * speed; pr.ang = ang;
    pr.dmg = dmg; pr.pierce = pierce; pr.life = life; pr.r = r; pr.spin = 0; pr.dead = false; pr.hit.clear();
    pr.boom = 0; pr.boomDmg = 0; pr.kb = 0;
    if (extra) { if (extra.boom != null) pr.boom = extra.boom; if (extra.boomDmg != null) pr.boomDmg = extra.boomDmg; if (extra.kb != null) pr.kb = extra.kb; }
    st.projs.push(pr); return pr;
  }
  function updateProjs(dt) {
    for (const pr of st.projs) {
      pr.x += pr.vx * dt; pr.y += pr.vy * dt; pr.life -= dt; pr.spin += dt;
      if (pr.kind === 'fireball' && Math.random() < 0.7) addPart(pr.x + rand(-1, 1), pr.y + rand(-1, 1), rand(-8, 8), rand(-8, 8), 0.25, Math.random() < 0.5 ? '#ffb030' : '#ff5a10', 2);
      if (pr.kind === 'rsk' && Math.random() < 0.5) addPart(pr.x + rand(-6, 6), pr.y + rand(-6, 6), 0, 0, 0.3, '#dff8ff', 1);
      if (pr.life <= 0) { if (pr.boom) explode(pr.x, pr.y, pr.boom, pr.boomDmg); pr.dead = true; continue; }
      projHit(pr);
    }
    compact(st.projs, POOL.pr, deadPr);
  }
  // 投射物命中：网格内联遍历（热路径，不创建闭包）
  function projHit(pr) {
    const es = st.enemies, r = pr.r;
    const x0 = gcx(pr.x - r - PAD), x1 = gcx(pr.x + r + PAD), y0 = gcy(pr.y - r - PAD), y1 = gcy(pr.y + r + PAD);
    for (let cy = y0; cy <= y1; cy++) for (let cx = x0; cx <= x1; cx++) {
      const c = cy * GW + cx;
      for (let k = cellStart[c], ke = cellStart[c + 1]; k < ke; k++) {
        const e = es[cellItems[k]];
        if (e.dead) continue;
        const dx = e.x - pr.x, dy = e.y - pr.y, rr = r + e.r;
        if (dx * dx + dy * dy >= rr * rr || pr.hit.has(e.id)) continue;
        pr.hit.add(e.id);
        if (pr.kind === 'fireball') { pr.dead = true; explode(pr.x, pr.y, pr.boom, pr.boomDmg); return; }
        const sp = Math.sqrt(pr.vx * pr.vx + pr.vy * pr.vy) || 1, kb = pr.kb || 50;
        dmgEnemy(e, pr.dmg, pr.vx / sp * kb, pr.vy / sp * kb);
        if (--pr.pierce <= 0) { pr.dead = true; return; }
      }
    }
  }
  function explode(x, y, r, dmg) {
    addFx({ k: 'boom', x, y, r, t: 0, dur: 0.32 });
    query(x, y, r, e => { const a = Math.atan2(e.y - y, e.x - x); dmgEnemy(e, dmg, Math.cos(a) * 70, Math.sin(a) * 70); });
    addShake(1.5); Sfx.play('boom');
  }

  /* ---------------- 忍术逻辑 ---------------- */
  const WU = {};
  WU.shuriken = (w, L, dt) => {
    w.t -= dt; if (w.t > 0) return;
    const p = st.p; w.t = L.cd * p.cdMul;
    const tg = nearest(p.x, p.y, L.count, 170);
    for (let i = 0; i < L.count; i++) {
      let a;
      const e = tg[i] || tg[0];
      if (e) a = Math.atan2(e.y - 6 - (p.y - 8), e.x - p.x) + (tg[i] ? 0 : (i * 0.25)); else a = Math.random() * TAU;
      fire('shuriken', p.x, p.y - 8, a, 175, L.dmg, L.pierce, 1.3, 3);
    }
    Sfx.play('throw');
  };
  WU.kunai = (w, L, dt) => {
    w.t -= dt; if (w.t > 0) return;
    const p = st.p; w.t = L.cd * p.cdMul;
    const base = Math.atan2(p.dirY, p.dirX), spread = 0.17;
    for (let i = 0; i < L.count; i++) fire('kunai', p.x, p.y - 8, base + (i - (L.count - 1) / 2) * spread, 210, L.dmg, L.pierce, 0.75, 3);
    Sfx.play('throw');
  };
  function orbit(w, L, dt, key) {
    const p = st.p; w.ang += L.speed * dt;
    const R = L.radius * p.area, n = L.count, hr = 5 * p.area;
    w.balls.length = 0;
    for (let i = 0; i < n; i++) {
      const a = w.ang + i * TAU / n, bx = p.x + Math.cos(a) * R, by = p.y - 7 + Math.sin(a) * R;
      w.balls.push([bx, by]);
      query(bx, by, hr, e => {
        if (e.hitRas > st.t - 0.4) return;   // 环绕类只有螺旋丸系（key 'ras'），用单一时间戳字段代替 hits 字典
        e.hitRas = st.t;
        const aa = Math.atan2(e.y - p.y, e.x - p.x);
        dmgEnemy(e, L.dmg, Math.cos(aa) * 80, Math.sin(aa) * 80);
      });
    }
  }
  WU.rasengan = (w, L, dt) => orbit(w, L, dt, 'ras');
  WU.rasenshuriken = (w, L, dt) => {
    orbit(w, L, dt, 'ras');
    w.t2 -= dt; if (w.t2 > 0) return;
    const p = st.p; w.t2 = L.cd * p.cdMul;
    const e = nearest(p.x, p.y, 1, 200)[0];
    const a = e ? Math.atan2(e.y - p.y, e.x - p.x) : Math.atan2(p.dirY, p.dirX);
    fire('rsk', p.x, p.y - 8, a, 85, L.bigDmg, 999, 1.6, 9 * p.area, { boom: L.boom * p.area, boomDmg: L.bigDmg, kb: 30 });
    Sfx.play('chidori');
  };
  WU.chidori = (w, L, dt) => {
    w.t -= dt; if (w.t > 0) return;
    const p = st.p; w.t = L.cd * p.cdMul;
    const e = nearest(p.x, p.y, 1, 140)[0];
    let ax, ay;
    if (e) { const d = Math.hypot(e.x - p.x, e.y - p.y) || 1; ax = (e.x - p.x) / d; ay = (e.y - p.y) / d; } else { ax = p.dirX; ay = p.dirY; }
    const len = L.len * p.area, wd = L.width * p.area;
    const x1 = p.x, y1 = p.y - 8, x2 = x1 + ax * len, y2 = y1 + ay * len;
    // 线段命中：只遍历线段包围盒覆盖的网格（不再扫全部敌人）
    const hitList = CH_HIT; hitList.length = 0;
    const es = st.enemies, m = wd / 2 + 14;
    const cx0 = gcx(Math.min(x1, x2) - m), cx1 = gcx(Math.max(x1, x2) + m), cy0 = gcy(Math.min(y1, y2) + 6 - m), cy1 = gcy(Math.max(y1, y2) + 6 + m);
    for (let cy = cy0; cy <= cy1; cy++) for (let cx = cx0; cx <= cx1; cx++) {
      const c = cy * GW + cx;
      for (let k = cellStart[c], ke = cellStart[c + 1]; k < ke; k++) {
        const o = es[cellItems[k]];
        if (o.dead) continue;
        const t = clamp(((o.x - x1) * ax + (o.y - 6 - y1) * ay) / len, 0, 1);
        const px = x1 + ax * len * t, py = y1 + ay * len * t, qx = o.x - px, qy = o.y - 6 - py, lim = wd / 2 + o.r;
        if (qx * qx + qy * qy < lim * lim) hitList.push(o);
      }
    }
    for (let i = 0; i < hitList.length; i++) dmgEnemy(hitList[i], L.dmg, ax * 60, ay * 60);
    addFx({ k: 'bolt', pts: jag(x1, y1, x2, y2, 8), t: 0, dur: 0.22, w: 2 });
    // 连锁：网格内找 70px 内最近的未命中敌人
    let from = { x: x2, y: y2 };
    const used = new Set(); for (let i = 0; i < hitList.length; i++) used.add(hitList[i].id);
    for (let c = 0; c < L.chain; c++) {
      let o = null, bd = 70 * 70;
      query(from.x, from.y, 70, q => { if (used.has(q.id)) return; const d = (q.x - from.x) * (q.x - from.x) + (q.y - from.y) * (q.y - from.y); if (d < bd) { bd = d; o = q; } });
      if (!o) break;
      used.add(o.id);
      addFx({ k: 'bolt', pts: jag(from.x, from.y, o.x, o.y - 6, 5), t: 0, dur: 0.2, w: 1 });
      dmgEnemy(o, L.dmg * 0.6, 0, 0); from = o;
    }
    p.dash = { vx: ax * 140, vy: ay * 140, t: 0.12 }; p.inv = Math.max(p.inv, 0.25);
    addShake(1.5); Sfx.play('chidori');
  };
  const CH_HIT = [], KR_TG = [];
  WU.kirin = (w, L, dt) => {
    w.t -= dt; if (w.t > 0) return;
    const p = st.p; w.t = L.cd * p.cdMul;
    // 蓄水池抽样：从可见敌人中均匀随机选 strikes 个（不建临时数组、不全量洗牌）
    const tg = KR_TG; tg.length = 0; let seen = 0;
    const es = st.enemies, hw = VW / 2, hh = VH / 2;
    for (let i = 0; i < es.length; i++) {
      const e = es[i];
      if (e.dead || Math.abs(e.x - p.x) >= hw || Math.abs(e.y - p.y) >= hh) continue;
      seen++;
      if (tg.length < L.strikes) tg.push(e); else { const j = Math.floor(Math.random() * seen); if (j < L.strikes) tg[j] = e; }
    }
    if (!tg.length) { w.t = 0.5; return; }
    tg.forEach(e => {
      const tx = e.x, ty = e.y;
      addFx({ k: 'bolt', pts: jag(tx + rand(-10, 10), p.y - VH / 2 - 10, tx, ty, 10), t: 0, dur: 0.3, w: 3 });
      addFx({ k: 'boom', x: tx, y: ty, r: L.radius * p.area, t: 0, dur: 0.3, c: 'elec' });
      query(tx, ty, L.radius * p.area, o => dmgEnemy(o, L.dmg, 0, 0));
    });
    st.flash = 0.12; addShake(4); Sfx.play('thunder');
  };
  WU.katon = (w, L, dt) => {
    w.t -= dt; if (w.t > 0) return;
    const p = st.p; w.t = L.cd * p.cdMul;
    const tg = nearest(p.x, p.y, 6, 150);
    for (let i = 0; i < L.count; i++) {
      const e = tg.length ? tg[Math.floor(Math.random() * tg.length)] : null;
      let a, dist;
      if (e) { a = Math.atan2(e.y - (p.y - 8), e.x - p.x); dist = Math.hypot(e.x - p.x, e.y - p.y); } else { a = Math.atan2(p.dirY, p.dirX) + rand(-0.3, 0.3); dist = 90; }
      fire('fireball', p.x, p.y - 8, a, 130, L.dmg, 1, Math.min(1.3, dist / 130 + 0.05), 4, { boom: L.radius * p.area, boomDmg: L.dmg });
    }
    Sfx.play('fire');
  };
  WU.clone = (w, L) => { syncClones(w); w.L = L; };
  function updateClones(dt) {
    const w = st.p.weapons.find(x => x.id === 'clone');
    if (!w) return;
    const L = D.weapons.clone.levels[w.lv - 1], p = st.p, n = st.clones.length;
    st.clones.forEach((c, i) => {
      const a = i * TAU / n + st.t * 0.6, tx = p.x + Math.cos(a) * 22, ty = p.y + Math.sin(a) * 14;
      const k = Math.min(1, dt * 5);
      const ox = c.x, oy = c.y;
      c.x += (tx - c.x) * k; c.y += (ty - c.y) * k;
      c.moving = Math.hypot(c.x - ox, c.y - oy) > 0.1; if (c.moving) c.animT += dt * 8; c.face = (c.x - ox) < 0 ? -1 : 1;
      c.t -= dt;
      if (c.t <= 0) {
        c.t = L.cd * p.cdMul;
        const e = nearest(c.x, c.y, 1, 140)[0];
        if (e) { fire('shuriken', c.x, c.y - 8, Math.atan2(e.y - c.y, e.x - c.x), 170, L.dmg, 1, 1.1, 3); Sfx.play('throw'); }
      }
    });
  }
  WU.sakura = (w, L, dt) => {
    w.t -= dt; if (w.t > 0) return;
    const p = st.p;
    const R = L.radius * p.area, KB = D.weapons.sakura.knockback;
    if (!nearest(p.x, p.y, 1, R + 10).length && w.t > -1.5) return; // 附近没有敌人时稍等
    w.t = L.cd * p.cdMul;
    query(p.x, p.y, R, e => { const a = Math.atan2(e.y - p.y, e.x - p.x); dmgEnemy(e, L.dmg, Math.cos(a) * KB, Math.sin(a) * KB); });
    const heal = L.heal + (p.char.trait.id === 'byakugou' ? p.char.trait.healBonus : 0);
    if (p.hp < p.maxHp) { p.hp = Math.min(p.maxHp, p.hp + heal); addNum(p.x, p.y - 24, heal, 'heal'); }
    addFx({ k: 'ring', x: p.x, y: p.y - 4, r0: 4, r1: R, t: 0, dur: 0.3, c: '#ff8ac0' });
    for (let i = 0; i < 14; i++) { const a = Math.random() * TAU, s = rand(40, 90); addPart(p.x, p.y - 4, Math.cos(a) * s, Math.sin(a) * s, 0.5, i % 2 ? '#ffc0dc' : '#ff6fa8', 2); }
    addShake(2); Sfx.play('punch');
  };

  function jag(x1, y1, x2, y2, segs) {
    const pts = [[x1, y1]], dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy) || 1, nx = -dy / len, ny = dx / len;
    for (let i = 1; i < segs; i++) { const t = i / segs, o = rand(-5, 5); pts.push([x1 + dx * t + nx * o, y1 + dy * t + ny * o]); }
    pts.push([x2, y2]); return pts;
  }

  /* ---------------- 特效 ---------------- */
  function poof(x, y) {
    for (let i = 0; i < 10; i++) { const a = Math.random() * TAU, s = rand(10, 35); addPart(x, y - 8, Math.cos(a) * s, Math.sin(a) * s, 0.5, '#e8e8f0', 3); }
    Sfx.play('poof');
  }
  function addShake(v) { if (Save.data.settings.shake) st.shake = Math.max(st.shake, v); }
  /* 伤害数字：同一敌人 numMergeSec 内合并为一条；数量上限按档位，满了复用最旧的一条（对象池，无 shift） */
  function addNum(x, y, v, kind, owner) {
    if (!Save.data.settings.dmgNum && (kind === 'n' || kind === 'crit')) return;
    if (owner) {
      const m = owner.num;
      if (m && m.owner === owner && m.t < 0.7 && m.t < (D.battle.numMergeSec || 0.2)) {
        m.v += v; if (kind === 'crit') m.kind = 'crit'; return;
      }
    }
    const cap = TIER().nums || 80, ns = st.nums;
    let n;
    if (ns.length >= cap) { let oi = 0; for (let i = 1; i < ns.length; i++) if (ns[i].t > ns[oi].t) oi = i; n = ns[oi]; if (n.owner && n.owner.num === n) n.owner.num = null; }
    else { n = POOL.n.pop() || {}; ns.push(n); }
    n.x = x + rand(-3, 3); n.y = y; n.v = v; n.kind = kind; n.t = 0; n.owner = owner || null;
    if (owner) owner.num = n;
  }
  /* 粒子：对象池 + 档位上限 + 密度倍率 */
  function addPart(x, y, vx, vy, life, c, s) {
    const T = TIER();
    if (st.parts.length >= (T.parts || 400)) return;
    if (T.fxDensity < 1 && Math.random() > T.fxDensity) return;
    const q = POOL.q.pop() || {};
    q.x = x; q.y = y; q.vx = vx; q.vy = vy; q.life = life; q.max = life; q.c = c; q.s = s;
    st.parts.push(q);
  }
  function addFx(f) {
    if (st.effects.length >= (TIER().effects || 260)) return;
    if (f.k === 'bolt') bakeBolt(f);
    st.effects.push(f);
  }
  function updateFx(dt) {
    const fx = st.effects; for (let i = 0; i < fx.length; i++) fx[i].t += dt;
    compact(fx, null, deadFx);
    const ps = st.parts;
    for (let i = 0; i < ps.length; i++) { const q = ps[i]; q.x += q.vx * dt; q.y += q.vy * dt; q.vx *= 0.92; q.vy *= 0.92; q.life -= dt; }
    compact(ps, POOL.q, deadQ);
    const ns = st.nums; for (let i = 0; i < ns.length; i++) ns[i].t += dt;
    compact(ns, POOL.n, deadN);
  }
  /* 闪电预渲染：生成时把折线逐像素画进离屏 canvas（池化），之后每帧 1 次 drawImage */
  const boltPool = [];
  function releaseBolt(c) { if (boltPool.length < 64) boltPool.push(c); }
  function bakeBolt(f) {
    const pts = f.pts, pad = f.w + 3;
    let minX = 1e9, minY = 1e9, maxX = -1e9, maxY = -1e9;
    for (const [x, y] of pts) { if (x < minX) minX = x; if (y < minY) minY = y; if (x > maxX) maxX = x; if (y > maxY) maxY = y; }
    const ox = Math.floor(minX) - pad, oy = Math.floor(minY) - pad;
    const c = boltPool.pop() || document.createElement('canvas');
    c.width = Math.ceil(maxX) + pad - ox + 1; c.height = Math.ceil(maxY) + pad - oy + 1;
    const g = c.getContext('2d');
    g.clearRect(0, 0, c.width, c.height);
    polyPixels(g, pts, '#40a0ff', f.w + 2, 0.6, ox, oy);
    polyPixels(g, pts, '#ffffff', f.w, 1, ox, oy);
    f.img = c; f.ox = ox; f.oy = oy;
  }

  /* ---------------- 渲染 ---------------- */
  function render() {
    if (!st) return;
    const p = st.p;
    const sx = st.shake ? rand(-st.shake, st.shake) : 0, sy = st.shake ? rand(-st.shake, st.shake) : 0;
    const camX = Math.round(p.x - VW / 2 + sx), camY = Math.round(p.y - VH / 2 - 10 + sy);
    ctx.imageSmoothingEnabled = false;
    // 地面
    const gt = Sprites.groundTile();
    const ox = -(((camX % 64) + 64) % 64), oy = -(((camY % 64) + 64) % 64);
    for (let x = ox; x < VW; x += 64) for (let y = oy; y < VH; y += 64) ctx.drawImage(gt, x, y);
    // 装饰
    const c0x = Math.floor(camX / 24), c0y = Math.floor(camY / 24);
    for (let cx = c0x - 1; cx <= c0x + VW / 24 + 1; cx++) for (let cy = c0y - 1; cy <= c0y + VH / 24 + 1; cy++) {
      let h = (cx * 374761393 + cy * 668265263) | 0; h = (h ^ (h >>> 13)) * 1274126177 | 0; h = (h ^ (h >>> 16)) >>> 0;
      const r = h % 100; if (r > 13) continue;
      const name = r < 5 ? 'tuft' : r < 8 ? 'flower' : r < 10 ? 'flower2' : r < 12 ? 'stone' : r < 13 ? 'bush' : 'stump';
      ctx.drawImage(Sprites.item(name), cx * 24 + (h >> 8) % 16 - camX, cy * 24 + (h >> 12) % 16 - camY);
    }
    // 宝石与道具
    const gemB = Sprites.item('gemB'), gemG = Sprites.item('gemG'), gemR = Sprites.item('gemR');
    for (let i = 0, gs = st.gems; i < gs.length; i++) {
      const g = gs[i], gx = g.x - camX, gy = g.y - camY;
      if (gx < -8 || gx > VW + 8 || gy < -8 || gy > VH + 8) continue;
      const s = g.spr === 'gemB' ? gemB : g.spr === 'gemG' ? gemG : gemR;
      ctx.drawImage(s, Math.round(gx - s.width / 2), Math.round(gy - s.height / 2));
    }
    for (const k of st.pickups) {
      const s = Sprites.item(k.k === 'magnet' ? 'scrollItem' : k.k);
      const b = Math.round(Math.sin(k.bob) * 1.5);
      if (k.k === 'chest') { ctx.globalAlpha = 0.25 + 0.15 * Math.sin(k.bob * 2); dr(Sprites.circle(9, '#ffe680', 1), k.x - 9 - camX, k.y - 13 - camY); ctx.globalAlpha = 1; }
      dr(s, k.x - s.width / 2 - camX, k.y - s.height - 2 + b - camY);
    }
    // 角色：屏幕内剔除 + 按屏幕 y 计数排序（1px 一桶，无 sort/临时对象）；阴影已烘进敌人帧（1 次 drawImage/只）
    const es = st.enemies, hero = Sprites.heroFrames(p.char);
    const shadow = Sprites.get('shadow'), shadowBig = Sprites.get('shadowBig'), useShadow = TIER().shadows !== false;
    const NB = VH + 160, YOFF = 40;
    if (bucketCnt.length < NB + 1) bucketCnt = new Int32Array(NB + 1);
    const need = es.length + st.clones.length + 1;
    if (visIdx.length < need) { visIdx = new Int32Array(need * 2); visKey = new Int32Array(need * 2); sorted = new Int32Array(need * 2); }
    let nv = 0;
    for (let i = 0; i < es.length; i++) {
      const e = es[i];
      if (e.dead) continue;
      if (e.x < camX - 40 || e.x > camX + VW + 40 || e.y < camY - 20 || e.y > camY + VH + 60) continue;
      visIdx[nv] = i; visKey[nv] = e.y - camY + YOFF; nv++;
    }
    visIdx[nv] = -1; visKey[nv] = p.y - camY + YOFF; nv++;
    for (let c = 0; c < st.clones.length; c++) { visIdx[nv] = -2 - c; visKey[nv] = st.clones[c].y - camY + YOFF; nv++; }
    bucketCnt.fill(0, 0, NB + 1);
    for (let i = 0; i < nv; i++) { let k = visKey[i]; k = k < 0 ? 0 : k >= NB ? NB - 1 : k; visKey[i] = k; bucketCnt[k + 1]++; }
    for (let b = 0; b < NB; b++) bucketCnt[b + 1] += bucketCnt[b];
    for (let i = 0; i < nv; i++) sorted[bucketCnt[visKey[i]]++] = visIdx[i];
    for (let si = 0; si < nv; si++) {
      const id = sorted[si];
      if (id === -1) {
        continue;   // 主角最后单独绘制（总在最上层，大量敌人时也不会被挡住）
      } else if (id < -1) {
        const c = st.clones[-2 - id];
        drawHero(hero, c.x, c.y, c.moving, c.animT, c.face, false, 0.72, camX, camY);
      } else {
        const e = es[id], sp = e.spr, fi = Math.floor(sp.bvn ? e.animT * sp.walkFps / 6 : e.animT) % sp.frames.length;
        const left = e.face < 0;
        if (e.boss) {
          const fr = e.flash > 0 ? (left ? sp.whiteF : sp.white)[fi] : (left ? sp.flipped : sp.frames)[fi];
          if (useShadow) dr(shadowBig, e.x - 15 - camX, e.y - 5 - camY);
          if (e.bstate === 'charge') { const rr = Sprites.ring(18, 1, '#ff3030', 0.8); dr(rr, e.x - 18 - camX, e.y - 26 - camY); }
          dr(fr, e.x - fr.width / 2 - camX, e.y - fr.height + 1 - camY);
        } else if (useShadow) {
          const bk = bakedFrames(sp), set = e.flash > 0 ? (left ? bk.whiteF : bk.white) : (left ? bk.flipped : bk.frames);
          const sl = set[fi];
          ctx.drawImage(sl.c, sl.x, sl.y, sl.w, sl.h, Math.round(e.x + sl.ox - camX), Math.round(e.y + sl.oy - camY), sl.w, sl.h);
        } else {
          const fr = e.flash > 0 ? (left ? sp.whiteF : sp.white)[fi] : (left ? sp.flipped : sp.frames)[fi];
          ctx.drawImage(fr, Math.round(e.x - (left ? sp.axF : sp.ax) - camX), Math.round(e.y - sp.ay - camY));
        }
      }
    }
    drawHero(hero, p.x, p.y, p.moving, p.animT, p.face, p.inv > 0 && Math.floor(p.inv * 20) % 2, 1, camX, camY);
    // 螺旋丸
    const rf = Sprites.get('rasengan');
    for (const w of p.weapons) if (w.balls && w.balls.length) {
      const f = rf[Math.abs(Math.floor(st.t * 14)) % 4];
      for (const [bx, by] of w.balls) dr(f, bx - f.width / 2 - camX, by - f.height / 2 - camY);
    }
    // 投射物
    for (const pr of st.projs) {
      const x = pr.x - camX, y = pr.y - camY;
      if (pr.kind === 'shuriken') { const s = Sprites.item(Math.floor(pr.spin * 16) % 2 ? 'shuriken1' : 'shuriken0'); dr(s, x - 4, y - 4); }
      else if (pr.kind === 'kunai') { const k = kunaiRot(Math.round(pr.ang / (Math.PI / 8))); ctx.drawImage(k.c, Math.round(x) - k.o, Math.round(y) - k.o); }
      else if (pr.kind === 'fireball') { const fr = Sprites.get('fire')[Math.floor(pr.spin * 12) % 3]; dr(fr, x - fr.width / 2, y - fr.height / 2); }
      else if (pr.kind === 'rsk') { const fr = Sprites.get('rsk')[Math.floor(pr.spin * 16) % 4]; dr(fr, x - fr.width / 2, y - fr.height / 2); }
    }
    const bul = Sprites.item('bullet');
    for (let i = 0; i < st.ebullets.length; i++) { const b = st.ebullets[i]; dr(bul, b.x - 2 - camX, b.y - 2 - camY); }
    // 特效
    for (const f of st.effects) {
      const k = f.t / f.dur;
      if (f.k === 'boom') {
        const r = Math.max(2, Math.round(f.r * (0.4 + 0.6 * Math.min(1, k * 2))));
        // 透明度用 globalAlpha 施加，精灵缓存只按半径+颜色（修复每帧新建离屏 canvas / 缓存无限增长）
        if (f.c === 'elec') { ga(0.5 * (1 - k)); dr(Sprites.circle(r, '#bff4ff', 1), f.x - r - camX, f.y - r - camY); ga(1 - k); dr(Sprites.ring(r, 1, '#ffffff', 1), f.x - r - camX, f.y - r - camY); }
        else {
          ga(0.85 * (1 - k)); dr(Sprites.circle(r, k < 0.3 ? '#fff4c0' : '#ff8a20', 1), f.x - r - camX, f.y - r - camY);
          const r2 = Math.max(2, Math.round(r * 0.6)); ga(0.9 * (1 - k)); dr(Sprites.circle(r2, '#ffe060', 1), f.x - r2 - camX, f.y - r2 - camY);
          ga(1 - k); dr(Sprites.ring(r, 1, '#a02010', 1), f.x - r - camX, f.y - r - camY);
        }
      } else if (f.k === 'ring') {
        const r = Math.round(f.r0 + (f.r1 - f.r0) * Math.min(1, k * 1.6));
        ga(1 - k); dr(Sprites.ring(r, 2, f.c, 1), f.x - r - camX, f.y - r - camY);
        ga(0.18 * (1 - k)); dr(Sprites.circle(r, f.c, 1), f.x - r - camX, f.y - r - camY);
      } else if (f.k === 'bolt' && f.img) {
        ga(1 - k); ctx.drawImage(f.img, Math.round(f.ox - camX), Math.round(f.oy - camY));
      }
    }
    ga(1);
    // 粒子：透明度量化 4 档分批绘制，减少 globalAlpha / fillStyle 切换
    const ps = st.parts; let curC = '';
    for (let lvl = 1; lvl <= 4; lvl++) {
      ctx.globalAlpha = lvl / 4;
      for (let i = 0; i < ps.length; i++) {
        const q = ps[i], ql = Math.ceil(Math.max(0, q.life / q.max) * 4);
        if (ql !== lvl) continue;
        if (q.c !== curC) { curC = q.c; ctx.fillStyle = curC; }
        ctx.fillRect(Math.round(q.x - camX), Math.round(q.y - camY), q.s, q.s);
      }
    }
    ctx.globalAlpha = 1;
    // 伤害数字
    for (const n of st.nums) drawNum(n, camX, camY);
    // 玩家血条
    const bw = 16, bx = Math.round(p.x - bw / 2 - camX), by = Math.round(p.y + 3 - camY);
    ctx.fillStyle = '#1a1020'; ctx.fillRect(bx - 1, by - 1, bw + 2, 4);
    ctx.fillStyle = '#5a1020'; ctx.fillRect(bx, by, bw, 2);
    ctx.fillStyle = p.hp / p.maxHp < 0.3 ? '#ff4040' : '#40e060'; ctx.fillRect(bx, by, Math.round(bw * clamp(p.hp / p.maxHp, 0, 1)), 2);
    // 拾取半径提示（BOSS 冲刺警告箭头等略）
    if (st.flash > 0) { ctx.fillStyle = 'rgba(255,255,255,' + Math.min(0.6, st.flash * 3) + ')'; ctx.fillRect(0, 0, VW, VH); }
    // 低血量暗角
    if (p.hp / p.maxHp < 0.3) { ctx.fillStyle = 'rgba(200,0,0,' + (0.12 + 0.08 * Math.sin(st.t * 8)) + ')'; ctx.fillRect(0, 0, VW, 3); ctx.fillRect(0, VH - 3, VW, 3); ctx.fillRect(0, 0, 3, VH); ctx.fillRect(VW - 3, 0, 3, VH); }
    // 摇杆
    if (input.active && !st.paused) {
      const b = Sprites.ring(18, 2, '#ffffff', 0.45), kx = clamp(input.cx - input.sx, -18, 18), ky = clamp(input.cy - input.sy, -18, 18);
      dr(Sprites.circle(18, '#000000', 0.18), input.sx - 18, input.sy - 18);
      dr(b, input.sx - 18, input.sy - 18);
      dr(Sprites.circle(8, '#ffffff', 0.6), input.sx + kx - 8, input.sy + ky - 8);
    }
  }
  function dr(img, x, y) { ctx.drawImage(img, Math.round(x), Math.round(y)); }
  /* 主角/影分身：BVN 精灵（走路/待机动画，锚点对齐阴影）或旧像素精灵（4 帧 + 走路起伏） */
  function drawHero(hero, x, y, moving, animT, face, hidden, alpha, camX, camY) {
    const sh = hero.shadow || Sprites.get('shadow');
    dr(sh, x - Math.round(sh.width / 2) - camX, y - (sh.height - 1) - camY);
    if (hidden) return;
    let fr, bob = 0;
    const left = face < 0;
    if (hero.bvn) {
      if (moving || !hero.idle) { const n = hero.frames.length; fr = (left ? hero.flipped : hero.frames)[Math.floor(animT * hero.walkFps / 8) % n]; }
      else { const n = hero.idle.length; fr = (left ? hero.idleF : hero.idle)[Math.floor(st.t * hero.idleFps) % n]; }
    } else {
      const fi = moving ? Math.floor(animT) % 4 : 0;
      fr = (left ? hero.flipped : hero.frames)[fi]; bob = (fi === 1 || fi === 3) ? -1 : 0;
    }
    if (alpha !== 1) ctx.globalAlpha = alpha;
    dr(fr, x - (left ? hero.axF : hero.ax) - camX, y - hero.ay + bob - camY);
    if (alpha !== 1) ctx.globalAlpha = 1;
  }
  function ga(a) { ctx.globalAlpha = a < 0 ? 0 : a > 1 ? 1 : a; }
  let bucketCnt = new Int32Array(1024), visIdx = new Int32Array(1024), visKey = new Int32Array(1024), sorted = new Int32Array(1024);
  /* 阴影 + 精灵合成到一张离屏帧（按精灵集缓存一次） */
  function bakedFrames(sp) {
    if (sp._baked) return sp._baked;
    const shadow = sp.shadow || Sprites.get('shadow'), fw = sp.frames[0].width, fh = sp.frames[0].height;
    // 以脚底锚点为原点：精灵左上 (-ax, -ay)；阴影中心在锚点上方 1px（与旧 12×4 阴影 y-3..y+1 一致）
    const ax = Math.round(sp.ax), axF = Math.round(sp.axF), ay = Math.round(sp.ay);
    const shx = -Math.round(shadow.width / 2), shy = -(shadow.height - 1);
    const left = Math.min(shx, -ax, -axF), right = Math.max(shx + shadow.width, fw - ax, fw - axF), top = Math.min(-ay, shy), bottom = Math.max(fh - ay, shy + shadow.height);
    const W = right - left, H = bottom - top;
    // 所有敌人烘焙帧打进同一张图集：800 只敌人的 drawImage 共用一个源纹理（减少纹理切换）；
    // 并裁掉每帧四周的透明边（BVN 帧含大量透明区，按实际像素包围盒绘制可减少约一半的光栅化面积）
    const tmp = document.createElement('canvas'); tmp.width = W; tmp.height = H;
    const tg = tmp.getContext('2d', { willReadFrequently: true }); tg.imageSmoothingEnabled = false;
    const mkSet = (set, a) => set.map(fr => {
      tg.clearRect(0, 0, W, H);
      tg.drawImage(shadow, shx - left, shy - top); tg.drawImage(fr, -a - left, -ay - top);
      const d = tg.getImageData(0, 0, W, H).data;
      let x0 = W, y0 = H, x1 = -1, y1 = -1;
      for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (d[(y * W + x) * 4 + 3]) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
      if (x1 < 0) { x0 = y0 = 0; x1 = y1 = 0; }
      const w = x1 - x0 + 1, h = y1 - y0 + 1, slot = atlasAlloc(w, h);
      slot.g.drawImage(tmp, x0, y0, w, h, slot.x, slot.y, w, h);
      slot.ox = left + x0; slot.oy = top + y0;
      return slot;
    });
    return sp._baked = { frames: mkSet(sp.frames, ax), flipped: mkSet(sp.flipped, axF), white: mkSet(sp.white, ax), whiteF: mkSet(sp.whiteF, axF), ox: left, oy: top };
  }
  let atlas = null, atlasG = null, shelfX = 0, shelfY = 0, shelfH = 0;
  function atlasAlloc(w, h) {
    const S = 1024;
    if (!atlas) { atlas = document.createElement('canvas'); atlas.width = atlas.height = S; atlasG = atlas.getContext('2d'); atlasG.imageSmoothingEnabled = false; }
    if (shelfX + w > S) { shelfX = 0; shelfY += shelfH + 1; shelfH = 0; }
    if (shelfY + h <= S) { const r = { c: atlas, g: atlasG, x: shelfX, y: shelfY, w, h }; shelfX += w + 1; shelfH = Math.max(shelfH, h); return r; }
    const c = document.createElement('canvas'); c.width = w; c.height = h;   // 图集满：退回独立画布
    const g = c.getContext('2d'); g.imageSmoothingEnabled = false;
    return { c, g, x: 0, y: 0, w, h };
  }
  /* 苦无 16 方向旋转帧缓存（替代每发 save/translate/rotate/restore） */
  const kunaiCache = {};
  function kunaiRot(step) {
    step = ((step % 16) + 16) % 16;
    if (kunaiCache[step]) return kunaiCache[step];
    const s = Sprites.item('kunai'), S = 14, c = document.createElement('canvas'); c.width = c.height = S;
    const g = c.getContext('2d'); g.imageSmoothingEnabled = false;
    g.translate(S / 2, S / 2); g.rotate(step * Math.PI / 8); g.drawImage(s, -5, -2);
    return kunaiCache[step] = { c, o: S / 2 };
  }
  function polyPixels(ctx, pts, color, w, alpha, camX, camY) {
    ctx.globalAlpha = alpha; ctx.fillStyle = color;
    for (let i = 0; i < pts.length - 1; i++) {
      const [x1, y1] = pts[i], [x2, y2] = pts[i + 1];
      const steps = Math.ceil(Math.hypot(x2 - x1, y2 - y1));
      for (let s = 0; s <= steps; s++) {
        const t = s / (steps || 1);
        ctx.fillRect(Math.round(x1 + (x2 - x1) * t - camX - w / 2), Math.round(y1 + (y2 - y1) * t - camY - w / 2), w, w);
      }
    }
    ctx.globalAlpha = 1;
  }
  const numColors = { n: '#ffffff', crit: '#ffd23a', hurt: '#ff4a4a', heal: '#5aff7a', coin: '#ffe066' };
  function drawNum(n, camX, camY) {
    const dg = Sprites.digits(numColors[n.kind] || '#fff');
    const s = String(n.v), k = n.t / 0.7;
    const y = n.y - camY - k * 12 - (n.kind === 'crit' ? 2 : 0);
    let x = n.x - camX - s.length * 2;
    ctx.globalAlpha = k > 0.7 ? (1 - k) / 0.3 : 1;
    for (const ch of s) { ctx.drawImage(dg[+ch], Math.round(x), Math.round(y)); x += 4; }
    ctx.globalAlpha = 1;
  }

  /* ---------------- HUD (DOM) ---------------- */
  function updateHud() {
    const p = st.p;
    $('hud-xp-fill').style.width = (p.xp / p.xpNext * 100).toFixed(1) + '%';
    $('hud-lv').textContent = 'Lv ' + p.level;
    const t = Math.floor(st.t), mm = String(Math.floor(t / 60)).padStart(2, '0'), ss = String(t % 60).padStart(2, '0');
    $('hud-time').textContent = mm + ':' + ss;
    $('hud-kills').textContent = st.kills;
    $('hud-coins').textContent = st.coinsRun;
    $('hud-hp').textContent = Math.ceil(Math.max(0, p.hp)) + '/' + p.maxHp;
    if (st.boss) $('boss-fill').style.width = (Math.max(0, st.boss.hp) / st.boss.maxHp * 100) + '%';
  }
  function buildSkillHud() {
    const p = st.p;
    const ws = p.weapons.map(w => `<div class="sk"><img src="${Sprites.iconURL(D.weapons[w.id].icon, 3)}"><b>${D.weapons[w.id].evolved ? '★' : w.lv}</b></div>`).join('');
    const ps = Object.keys(p.passives).map(k => `<div class="sk ps"><img src="${Sprites.iconURL(D.passives[k].icon, 3)}"><b>${p.passives[k]}</b></div>`).join('');
    $('hud-skills').innerHTML = ws + '<i></i>' + ps;
  }
  let toastTimer = 0;
  function toast(msg, ms) {
    const el = $('battle-toast'); el.textContent = msg; el.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), ms || 1500);
  }
  function bossBanner(name) {
    const el = $('boss-banner'); el.querySelector('.bn').textContent = name;
    el.classList.remove('show'); void el.offsetWidth; el.classList.add('show');
  }

  /* ---------------- 升级三选一 ---------------- */
  function availableEvos() {
    const p = st.p;
    return D.evolutions.filter(ev => { const w = p.weapons.find(x => x.id === ev.weapon); return w && w.lv >= 5 && p.passives[ev.passive]; });
  }
  function genOptions() {
    const p = st.p, opts = [];
    availableEvos().forEach(ev => opts.push({ kind: 'evo', ev }));
    const pool = [];
    p.weapons.forEach(w => { if (!D.weapons[w.id].evolved && w.lv < 5) pool.push({ kind: 'weapon', id: w.id, lv: w.lv + 1 }, { kind: 'weapon', id: w.id, lv: w.lv + 1 }); });
    if (p.weapons.length < D.maxWeapons) {
      const evoBase = p.weapons.filter(w => D.weapons[w.id].evolved).map(w => D.evolutions.find(e => e.result === w.id).weapon);
      Object.keys(D.weapons).forEach(id => { if (!D.weapons[id].evolved && !p.weapons.find(w => w.id === id) && !evoBase.includes(id)) pool.push({ kind: 'weapon', id, lv: 1 }); });
    }
    Object.keys(p.passives).forEach(k => { if (p.passives[k] < D.passiveMax) pool.push({ kind: 'passive', id: k, lv: p.passives[k] + 1 }); });
    if (Object.keys(p.passives).length < D.maxPassives) Object.keys(D.passives).forEach(k => { if (!p.passives[k]) pool.push({ kind: 'passive', id: k, lv: 1 }); });
    for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
    for (const o of pool) {
      if (opts.length >= 3) break;
      if (opts.find(x => x.kind === o.kind && x.id === o.id)) continue;
      opts.push(o);
    }
    if (!opts.length) opts.push({ kind: 'heal' }, { kind: 'coin' });
    return opts.slice(0, 3);
  }
  function openLevelUp() {
    st.paused = true; input.active = false;
    Sfx.play('levelup');
    const opts = genOptions();
    const el = $('levelup');
    el.innerHTML = `<div class="lu-box"><div class="lu-title">LEVEL UP!<small>选择一项忍术强化 · Lv ${st.p.level - st.levelQueue + 1}</small></div>
      <div class="lu-cards">${opts.map((o, i) => cardHtml(o, i)).join('')}</div></div>`;
    el.classList.remove('hidden');
    el.querySelectorAll('.lu-card').forEach(c => c.addEventListener('click', () => {
      Sfx.play('select');
      applyChoice(opts[+c.dataset.i]);
      st.levelQueue--;
      el.classList.add('hidden');
      buildSkillHud(); updateHud();
      st.paused = false;
      if (st.levelQueue > 0) setTimeout(() => { if (st && !st.paused && !st.over) openLevelUp(); }, 120);
    }));
  }
  function cardHtml(o, i) {
    let icon, name, tag, desc, cls = '';
    if (o.kind === 'evo') { const d = D.weapons[o.ev.result]; icon = d.icon; name = d.name; tag = '进化'; desc = d.desc[0]; cls = 'evo'; }
    else if (o.kind === 'weapon') { const d = D.weapons[o.id]; icon = d.icon; name = d.name; tag = o.lv === 1 ? 'NEW' : 'Lv' + o.lv; desc = d.desc[o.lv - 1]; cls = o.lv === 1 ? 'new' : ''; }
    else if (o.kind === 'passive') { const d = D.passives[o.id]; icon = d.icon; name = d.name; tag = o.lv === 1 ? 'NEW' : 'Lv' + o.lv; desc = d.desc + '（被动）'; cls = 'passive' + (o.lv === 1 ? ' new' : ''); }
    else if (o.kind === 'heal') { icon = 'ramen'; name = '一乐拉面'; tag = '回复'; desc = '恢复 ' + D.battle.levelupFallback.heal + ' HP'; }
    else { icon = 'coin'; name = '金币袋'; tag = '金币'; desc = '获得 ' + D.battle.levelupFallback.coins + ' 金币'; }
    const stars = (o.kind === 'weapon' || o.kind === 'passive') ? '<div class="lu-pips">' + [1, 2, 3, 4, 5].map(n => `<span class="${n <= o.lv ? 'on' : ''}"></span>`).join('') + '</div>' : '';
    return `<div class="lu-card ${cls}" data-i="${i}"><div class="lu-icon"><img src="${Sprites.iconURL(icon, 4)}"></div>
      <div class="lu-info"><div class="lu-name">${name}<span class="lu-tag">${tag}</span></div><div class="lu-desc">${desc}</div>${stars}</div></div>`;
  }
  function applyChoice(o) {
    const p = st.p;
    if (o.kind === 'evo') {
      const idx = p.weapons.findIndex(w => w.id === o.ev.weapon);
      p.weapons[idx] = { id: o.ev.result, lv: 1, t: 0.3, t2: 0.5, ang: 0, balls: [] };
      st.flash = 0.3; toast('忍术进化：' + D.weapons[o.ev.result].name + '！', 2000);
    } else if (o.kind === 'weapon') addWeapon(o.id);
    else if (o.kind === 'passive') { p.passives[o.id] = (p.passives[o.id] || 0) + 1; recalc(); }
    else if (o.kind === 'heal') p.hp = Math.min(p.maxHp, p.hp + D.battle.levelupFallback.heal);
    else st.coinsRun += D.battle.levelupFallback.coins;
  }

  /* ---------------- 暂停/结算 ---------------- */
  G.togglePause = function (force) {
    if (!st || st.over) return;
    const el = $('pause-menu');
    if (!$('levelup').classList.contains('hidden')) return;
    if (st.paused && !force) { st.paused = false; el.classList.add('hidden'); lastT = performance.now(); return; }
    st.paused = true; input.active = false;
    const p = st.p;
    el.innerHTML = `<div class="pm-box"><div class="pm-title">暂停</div>
      <div class="pm-list">${p.weapons.map(w => `<div class="pm-item"><img src="${Sprites.iconURL(D.weapons[w.id].icon, 3)}"><span>${D.weapons[w.id].name}</span><b>${D.weapons[w.id].evolved ? '进化' : 'Lv' + w.lv}</b></div>`).join('')}
      ${Object.keys(p.passives).map(k => `<div class="pm-item"><img src="${Sprites.iconURL(D.passives[k].icon, 3)}"><span>${D.passives[k].name}</span><b>Lv${p.passives[k]}</b></div>`).join('')}</div>
      <button class="pbtn primary" id="pm-resume">继续战斗</button><button class="pbtn" id="pm-quit">撤退（结算奖励）</button></div>`;
    el.classList.remove('hidden');
    $('pm-resume').onclick = () => { Sfx.play('click'); G.togglePause(); };
    $('pm-quit').onclick = () => { Sfx.play('click'); el.classList.add('hidden'); end(false, true); };
  };
  /* 切后台：若战斗进行中则打开暂停菜单（不自动恢复，需玩家点“继续战斗”） */
  G.pauseForBackground = function () {
    if (!st || st.over) return false;
    input.active = false; input.keys = {};
    lastT = performance.now();
    if (st.paused) return false;          // 已暂停 / 升级选卡中：保持现状
    G.togglePause(true);
    return true;
  };
  G.isRunning = () => !!(st && !st.over && !st.paused);
  /* 从后台返回：重置计时基准，确保第一帧 dt 不跳变 */
  G.resetClock = function () { lastT = performance.now(); };
  function end(win, retreat) {
    if (window.Perf) Perf.endRun();
    if (st.over) return;
    st.over = true; st.paused = true;
    const mins = Math.floor(st.t / 60);
    const SE = D.battle.settle;
    const coins = Math.round((st.coinsRun + st.kills * SE.coinPerKill + mins * SE.coinPerMin + (win ? SE.winCoins : 0)) * st.p.coinMul);
    const gouyu = mins * SE.gouyuPerMin + st.bossesKilled * SE.gouyuPerBoss + (win ? SE.winGouyu : 0);
    const res = { win, retreat, time: st.t, kills: st.kills, level: st.p.level, bosses: st.bossesKilled, coins, gouyu, charId: st.p.char.id };
    Sfx.play(win ? 'win' : 'lose'); Sfx.stopMusic();
    if (win) st.flash = 0.6;
    setTimeout(() => { G.onEnd && G.onEnd(res); }, win ? 600 : 900);
  }
  /* 无头快速模拟（测试/平衡用）：自动走位 + 自动选卡 */
  function simStep(dt) {
    const p = st.p; let ax = 0, ay = 0;
    for (const e of st.enemies) { const dx = p.x - e.x, dy = p.y - e.y, d2 = dx * dx + dy * dy + 1; if (d2 < 3600) { const d = Math.sqrt(d2); ax += dx / d / d2 * 400; ay += dy / d / d2 * 400; } }
    const g = st.gems.reduce((b, g) => { const d = (g.x - p.x) ** 2 + (g.y - p.y) ** 2; return !b || d < b[0] ? [d, g] : b; }, null);
    const k = st.pickups.find(k => k.k === 'chest') || (g && g[1]);
    if (k) { const dx = k.x - p.x, dy = k.y - p.y, d = Math.hypot(dx, dy) || 1; ax += dx / d * 0.6; ay += dy / d * 0.6; }
    else { ax += Math.cos(st.t * 0.3) * 0.3; ay += Math.sin(st.t * 0.3) * 0.3; }
    const l = Math.hypot(ax, ay); input.ai = l > 0 ? [ax / l, ay / l] : [1, 0];
    update(dt);
    if (st.levelQueue > 0 && st.paused && !st.over) {
      $('levelup').classList.add('hidden');
      while (st.levelQueue > 0) { const o = genOptions(); applyChoice(o.find(x => x.kind === 'evo') || o[Math.floor(Math.random() * o.length)]); st.levelQueue--; }
      st.paused = false; buildSkillHud();
    }
  }
  G.debug = {
    sim: (sec) => { const n = Math.round(sec * 30); for (let i = 0; i < n && st && !st.over; i++) simStep(1 / 30); input.ai = null; return st && { t: st.t, hp: st.p.hp, max: st.p.maxHp, lv: st.p.level, kills: st.kills, e: st.enemies.length, bosses: st.bossesKilled, over: st.over, w: st.p.weapons.map(w => w.id + w.lv), ps: st.p.passives }; }, spawnBoss: i => spawnBoss(i || 0), addWeapon: id => { addWeapon(id); buildSkillHud(); }, addPassive: id => { st.p.passives[id] = (st.p.passives[id] || 0) + 1; recalc(); buildSkillHud(); }, addXp: v => gainXp(v), skip: s => { st.t += s; },
    // 压测：在玩家周围补满到 n 只（受当前档位上限约束）
    fill: n => {
      if (!st) return 0;
      const lim = Math.min(n, capNow()), p = st.p;
      let k = lim - aliveCount();
      while (k-- > 0) { const a = Math.random() * Math.PI * 2, r = 40 + Math.random() * 180; spawnEnemy(['rogue', 'bandit', 'wolf'][k % 3], p.x + Math.cos(a) * r, p.y + Math.sin(a) * r); }
      return aliveCount();
    },
    stats: () => st && { enemies: aliveCount(), projs: st.projs.length, parts: st.parts.length, nums: st.nums.length, gems: st.gems.length, fx: st.effects.length, recycled: st.recycled, shapes: Sprites.shapeCacheSize ? Sprites.shapeCacheSize() : -1, tier: window.Perf && Perf.tier } };
  G.perf = window.Perf || null;
  return G;
})();
