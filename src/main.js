/* 启动入口 */
(function () {
  Save.load();
  Sprites.init();
  if (window.Mobile) Mobile.install();   // 移动端手势/前后台/特性检测（src/mobile.js）
  Game.init();
  Game.onEnd = res => UI.showResult(res);
  UI.showTitle();
  const ts=document.getElementById('title-screen'),enter=document.getElementById('entry-enter'),retry=document.getElementById('entry-retry');
  async function prepare(restart=false){
    ts.dataset.ready='false';ts.setAttribute('aria-busy','true');enter.disabled=true;enter.textContent='正在准备首页…';retry.hidden=true;
    try{
      await Game.prepareShell(status=>{
        const percent=Math.min(99,Math.floor(status.progress*100));
        document.getElementById('entry-progress').textContent=status.message;
        document.getElementById('entry-percent').textContent=percent+'%';
        document.getElementById('entry-fill').style.width=percent+'%';
        document.getElementById('entry-meter').setAttribute('aria-valuenow',percent);
      },restart);
      ts.dataset.ready='true';ts.setAttribute('aria-busy','false');enter.disabled=false;enter.textContent='— 点击屏幕开始 —';
      document.getElementById('entry-progress').textContent='首页准备完成';document.getElementById('entry-percent').textContent='100%';
      document.getElementById('entry-fill').style.width='100%';document.getElementById('entry-meter').setAttribute('aria-valuenow','100');
    }catch(error){
      ts.setAttribute('aria-busy','false');document.getElementById('entry-progress').textContent='加载未完成，请检查网络后重试';
      enter.textContent='等待首页就绪';retry.hidden=false;
    }
  }
  ts.addEventListener('click',event=>{if(event.target.closest('#entry-retry')||ts.dataset.ready!=='true')return;Sfx.init();Sfx.play('select');UI.go('lobby');});
  retry.onclick=event=>{event.stopPropagation();prepare(true);};
  prepare();
  // A worker may ask whether this is the migrated shell. Reply without resetting active runs.
  if('serviceWorker' in navigator)navigator.serviceWorker.addEventListener('message',event=>{
    if(event.data?.type==='NINJA_CLIENT_STATUS')event.ports[0]?.postMessage({release:'auto63',active:Game.active});
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
