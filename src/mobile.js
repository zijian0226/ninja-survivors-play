/* =========================================================
 * 移动端适配（iOS / Android）
 *  - 禁止双指缩放 / 双击缩放 / 下拉刷新 / 橡皮筋回弹 / 长按菜单
 *  - 切后台（visibilitychange / pagehide / blur）自动暂停战斗 + 挂起音频；
 *    回到前台只恢复音频上下文，不自动继续游戏（由玩家点“继续战斗”）
 *  - 旧版 Safari 特性检测（flex gap）
 * 音频首触解锁见 src/audio.js。
 * ========================================================= */
window.Mobile = (function () {
  const M = { installed: false };
  const doc = document, root = doc.documentElement;

  /* ---------- 特性检测：flex gap（Safari < 14.1 不支持） ---------- */
  function detectFlexGap() {
    try {
      const f = doc.createElement('div');
      f.style.cssText = 'display:flex;flex-direction:column;row-gap:1px;position:absolute;visibility:hidden';
      f.appendChild(doc.createElement('div')); f.appendChild(doc.createElement('div'));
      doc.body.appendChild(f);
      const ok = f.scrollHeight === 1;
      f.remove ? f.remove() : f.parentNode.removeChild(f);
      return ok;
    } catch (e) { return true; }
  }

  /* ---------- 可滚动区域判断：#ui-main / 弹窗内部允许原生纵向滚动 ---------- */
  function scrollableAncestor(el) {
    for (; el && el !== doc.body && el.nodeType === 1; el = el.parentNode) {
      if (el.id === 'battle') return null;               // 战斗画面永不滚动
      if (el.id === 'ui-main' || el.classList?.contains('md-body') || el.classList?.contains('md-box')) {
        const overflow = getComputedStyle(el).overflowY;
        if (/auto|scroll/.test(overflow) && el.scrollHeight > el.clientHeight + 1) return el;
      }
    }
    return null;
  }

  function install() {
    if (M.installed) return; M.installed = true;
    if (!detectFlexGap()) root.classList.add('no-flexgap');

    // iOS Safari 10+ 忽略 user-scalable=no：拦截手势事件阻止双指缩放
    ['gesturestart', 'gesturechange', 'gestureend'].forEach(ev => doc.addEventListener(ev, e => e.preventDefault(), { passive: false }));
    // 双击缩放（配合 touch-action:manipulation）
    doc.addEventListener('dblclick', e => e.preventDefault(), { passive: false });

    // 多指触摸一律阻止（防捏合缩放）；单指在战斗画面 / 非滚动区域阻止（防下拉刷新、橡皮筋回弹）
    let startY = 0;
    doc.addEventListener('touchstart', e => {
      if (e.touches.length > 1) { e.preventDefault(); return; }
      startY = e.touches[0] ? e.touches[0].clientY : 0;
    }, { passive: false });
    doc.addEventListener('touchmove', e => {
      if (e.touches.length > 1 || (typeof e.scale === 'number' && e.scale !== 1)) { e.preventDefault(); return; }
      const sc = scrollableAncestor(e.target);
      if (!sc) { e.preventDefault(); return; }
      // 在可滚动区域的顶/底端继续拖动会把滚动链传给 body（iOS 橡皮筋），在边界处阻止
      const y = e.touches[0] ? e.touches[0].clientY : 0, dy = y - startY;
      startY = y; // Follow the latest movement so a held finger can reverse at either edge.
      const atTop = sc.scrollTop <= 0, atBottom = sc.scrollTop + sc.clientHeight >= sc.scrollHeight - 1;
      if ((atTop && dy > 0) || (atBottom && dy < 0)) e.preventDefault();
    }, { passive: false });
    // 长按图片/文字弹出菜单
    doc.addEventListener('contextmenu', e => { if (!(e.target.closest && e.target.closest('input,textarea'))) e.preventDefault(); });

    /* ---------- 前后台 ---------- */
    const toBackground = () => {
      try { window.Game && Game.pauseForBackground && Game.pauseForBackground(); } catch (e) { }
      try { window.Sfx && Sfx.suspend && Sfx.suspend(); } catch (e) { }
    };
    const toForeground = () => {
      try { window.Game && Game.resetClock && Game.resetClock(); } catch (e) { }
      try { window.Sfx && Sfx.resume && Sfx.resume(); } catch (e) { }
    };
    doc.addEventListener('visibilitychange', () => { if (doc.hidden) toBackground(); else toForeground(); });
    window.addEventListener('pagehide', toBackground);
    window.addEventListener('pageshow', e => { if (!doc.hidden) toForeground(); });
    window.addEventListener('blur', toBackground);
    window.addEventListener('focus', toForeground);
    // 旧 iOS WebView 兼容事件
    doc.addEventListener('pause', toBackground, false);
    doc.addEventListener('resume', toForeground, false);

    // 屏幕旋转 / 地址栏收起后重新计算画布尺寸
    const relayout = () => { try { window.Game && Game.resize && Game.resize(); } catch (e) { } };
    window.addEventListener('orientationchange', () => setTimeout(relayout, 300));
    if (window.visualViewport) window.visualViewport.addEventListener('resize', relayout);
  }
  M.install = install;
  M.isStandalone = () => (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
  return M;
})();
