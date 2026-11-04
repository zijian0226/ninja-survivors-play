/* 启动入口 */
(function () {
  Save.load();
  if (window.BVN) BVN.load();   // BVN 像素精灵（异步；未就绪/失败时用旧像素精灵）
  Sprites.init();
  if (window.Mobile) Mobile.install();   // 移动端手势/前后台/特性检测（src/mobile.js）
  Game.init();
  Game.onEnd = res => UI.showResult(res);
  UI.showTitle();
  Promise.all(GameData.characters.slice(0,4).map(c=>new Promise(resolve=>{const im=new Image();im.onload=im.onerror=resolve;im.src=c.portraitURL;}))).then(()=>{document.getElementById('entry-progress').textContent='忍者集结完毕';});
  const ts = document.getElementById('title-screen');
  ts.addEventListener('click', () => { Sfx.init(); Sfx.play('select'); UI.go('lobby'); });
  // A worker may ask whether this is the migrated shell. Reply without resetting active runs.
  if('serviceWorker' in navigator)navigator.serviceWorker.addEventListener('message',event=>{
    if(event.data?.type==='NINJA_CLIENT_STATUS')event.ports[0]?.postMessage({release:'entry31',active:Game.active});
  });
  // PWA：仅在 http(s) 下注册 Service Worker（file:// 与单文件版跳过）；URL 带 ?nosw 时注销（开发调试用）
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol) && !window.__SINGLE_FILE__) {
    if (/[?&]nosw\b/.test(location.search)) {
      navigator.serviceWorker.getRegistrations().then(rs => rs.forEach(r => r.unregister())).catch(() => { });
    } else {
      const reg = () => navigator.serviceWorker.register('./sw.js', { scope: './' })
        .catch(e => console.info('[sw] 注册失败（不影响游戏）：', e && e.message));
      if (document.readyState === 'complete') reg(); else window.addEventListener('load', reg);
    }
  }
  // 首次交互解锁音频：见 src/audio.js（touchstart/touchend/pointerdown/click/keydown）
})();
