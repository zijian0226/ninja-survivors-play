/* Thin host for the preserved v0.28 engine. Never loads the obsolete v0.1 game.js. */
window.Game=(function(){
 const CHANNEL='ninja-current-battle-v1';let frame,ready=false,pending=null,timer=0,lastStart=null,epoch=0;
 let savedExcluded=[];try{savedExcluded=JSON.parse(localStorage.getItem('ninja-recruit-loadout'))?.excluded||[];}catch{}
 const G={onEnd:null,active:false,excluded:savedExcluded.filter(x=>['火','风','雷','土','水','阴','阳','全'].includes(x)).slice(0,3),lab:false};
 const $=id=>document.getElementById(id);
 const post=data=>frame?.contentWindow.postMessage({channel:CHANNEL,...data},location.origin);
 const sendSettings=()=>post({type:'settings',sfx:Save.data.settings.sfx});
 function setLoading(message,canRetry=false){let el=$('battle-loading');if(!el){el=document.createElement('div');el.id='battle-loading';$('battle').appendChild(el);}el.className='battle-loading';el.innerHTML='';const strong=document.createElement('strong');strong.textContent=message;el.appendChild(strong);const small=document.createElement('small');small.textContent='首次进入需要载入像素素材';el.appendChild(small);if(canRetry){const retry=document.createElement('button');retry.className='pbtn primary';retry.textContent='重试';retry.onclick=()=>{G.stop();if(frame)frame.remove();frame=null;ready=false;G.start(lastStart.id,lastStart.options);};el.appendChild(retry);const back=document.createElement('button');back.className='pbtn';back.textContent='返回大厅';back.onclick=()=>{G.stop();UI.go('lobby');};el.appendChild(back);}el.hidden=false;}
 function ensureFrame(){if(frame)return;frame=document.createElement('iframe');frame.id='battle-frame';frame.title='忍者：无尽试炼 · 战斗';frame.setAttribute('allow','autoplay; fullscreen');frame.src='battle/?embedded=1&v=battle30';$('battle').appendChild(frame);}
 function launch(){if(!ready||!pending)return;post({type:'start',...pending});pending=null;}
 G.init=()=>{};
 G.start=function(id,options={}){
  const c=GameData.charById[id];if(!c?.current)return;
  if(!G.available(c)){UI.toast('关闭调试时只能选择已核验角色');UI.go('roster');return;}
  lastStart={id,options};try{localStorage.setItem('ninja-recruit-loadout',JSON.stringify({mainKey:c.current.key,excluded:options.excluded||G.excluded}));}catch{}epoch++;$('result').classList.add('hidden');$('ui').classList.add('hidden');$('title-screen').classList.add('hidden');$('battle').classList.remove('hidden');
  G.active=true;Sfx.stopMusic();setLoading('正在进入试炼…');ensureFrame();frame.hidden=false;
  pending={key:c.current.key,debug:G.debug(),excluded:options.excluded||G.excluded,sfx:Save.data.settings.sfx,lab:!!options.lab};launch();
  clearTimeout(timer);timer=setTimeout(()=>{if(G.active)setLoading('载入时间较长，请检查网络后重试',true);},30000);
 };
 G.stop=function(){epoch++;clearTimeout(timer);pending=null;G.active=false;post({type:'stop'});if(frame)frame.hidden=true;if($('battle-loading'))$('battle-loading').hidden=true;};
 G.togglePause=()=>post({type:'pause'});G.pauseForBackground=()=>{setTimeout(()=>{if(G.active&&(document.hidden||!document.hasFocus()))post({type:'pause'});},0);};G.resetClock=()=>{};G.syncSettings=sendSettings;
 G.debug=()=>{try{return localStorage.getItem('ninja-debug-enabled')!=='off';}catch{return true;}};
 G.setDebug=value=>{try{localStorage.setItem('ninja-debug-enabled',value?'on':'off');}catch{}if(!value&&!G.available(GameData.charById[Save.data.selected]))Save.data.selected='naruto';Save.save();};
 G.available=c=>!!c&&(c.current.releaseComplete||G.debug());
 addEventListener('message',event=>{
  const m=event.data;if(!frame||event.source!==frame.contentWindow||event.origin!==location.origin||m?.channel!==CHANNEL)return;
  if(m.type==='ready'){ready=true;launch();}
  else if(m.type==='started'){clearTimeout(timer);$('battle-loading').hidden=true;}
  else if(m.type==='error'){clearTimeout(timer);setLoading(m.message||'战斗加载失败',true);}
  else if(m.type==='home'){G.stop();$('battle').classList.add('hidden');UI.go('lobby');}
  else if(m.type==='result'&&G.active){G.active=false;clearTimeout(timer);frame.hidden=true;const r=m.result;const coins=r.debug?0:Math.max(0,Math.floor(r.kills*2+r.time*.4+r.bosses*100)),gouyu=r.debug?0:Math.floor(r.time/30)+r.bosses*20;G.onEnd?.({...r,coins,gouyu,charId:lastStart.id});}
 });
 return G;
})();
