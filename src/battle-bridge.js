/* Homepage shell, shared battle package, and one on-demand package per playable form. */
window.Game=(function(){
 const CHANNEL='ninja-current-battle-v1',allowed=new Set(CharacterPacks.playable);
 let frame=null,ready=false,basePromise=null,baseResolve=null,baseReject=null,baseTimer=0,baseReport=()=>{},timer=0,epoch=0,lastStart=null;
 const $=id=>document.getElementById(id),downloaded=new Set();
 const G={runtimeId:'ninja-v54-squad50',shellPrepared:false,assetsPrepared:false,onEnd:null,active:false,launching:false,currentKey:null,excluded:[]};
 try{G.excluded=(JSON.parse(localStorage.getItem('ninja-recruit-loadout'))?.excluded||[]).filter(x=>['火','风','雷','土','水','阴','阳','全'].includes(x)).slice(0,3);}catch{}
 const post=data=>frame?.contentWindow.postMessage({channel:CHANNEL,...data},location.origin);
 G.available=c=>!!c?.current&&allowed.has(c.current.key);
 G.hasPack=key=>downloaded.has(key);
 G.debug=()=>{try{return localStorage.getItem('ninja-debug-enabled')!=='off';}catch{return true;}};
 G.setDebug=value=>{try{localStorage.setItem('ninja-debug-enabled',value?'on':'off');}catch{}Save.save();};
 G.prepareShell=async function(report=()=>{}){
  if(G.shellPrepared)return;
  const c=GameData.charById[Save.data.displaySelected||Save.data.selected]||GameData.characters[0];let done=0;
  report({progress:0,message:'正在准备首页…'});
  const complete=()=>report({progress:++done/2,message:'正在准备首页…'});
  await Promise.all([new Promise((resolve,reject)=>{const image=new Image(),timeout=setTimeout(()=>reject(Error('首页立绘加载超时')),15000);image.onload=()=>{clearTimeout(timeout);complete();resolve();};image.onerror=()=>{clearTimeout(timeout);reject(Error('首页立绘加载失败'));};image.src=NinjaArt.get(c.id)?.file||c.portraitURL;}),document.fonts.ready.then(complete)]);
  G.shellPrepared=true;
 };
 function loading(message,retry=false,progress=null){
  let el=$('battle-loading');
  if(!el){el=document.createElement('section');el.id='battle-loading';el.className='battle-loading';el.innerHTML='<strong id="pack-label"></strong><small>首次载入后可复用缓存</small><div id="pack-meter" class="entry-meter" role="progressbar" aria-label="资源包加载进度" aria-valuemin="0" aria-valuemax="100"><i id="pack-fill"></i></div><span id="pack-percent"></span><button id="pack-retry" class="pbtn primary">重试</button><button id="pack-back" class="pbtn">返回大厅</button>';$('battle').appendChild(el);
   $('pack-retry').onclick=()=>{const saved=lastStart;G.stop();if(!G.assetsPrepared){frame?.remove();frame=null;ready=false;basePromise=null;}if(saved)G.start(saved.id,saved.options);};
   $('pack-back').onclick=()=>{G.stop();$('battle').classList.add('hidden');UI.go('lobby');};
  }
  $('pack-label').textContent=message;$('pack-retry').hidden=!retry;$('pack-meter').hidden=progress===null;$('pack-percent').hidden=progress===null;
  if(progress!==null){const percent=Math.floor(Math.max(0,Math.min(1,progress))*100);$('pack-fill').style.width=percent+'%';$('pack-meter').setAttribute('aria-valuenow',percent);$('pack-percent').textContent=percent+'%';}el.hidden=false;
 }
 function ensureFrame(){if(frame)return;frame=document.createElement('iframe');frame.id='battle-frame';frame.title='忍者：无尽试炼 · 战斗';frame.allow='autoplay; fullscreen';frame.src='battle/play.html?embedded=1&v=skills54&main='+encodeURIComponent(G.currentKey||'naruto_shippuden');frame.hidden=true;$('battle').appendChild(frame);}
 function prepareBase(){post({type:'prepare',allowedKeys:CharacterPacks.playable});}
 function baseFail(message){clearTimeout(baseTimer);const reject=baseReject;baseResolve=baseReject=null;G.assetsPrepared=false;if(reject)reject(Error(message));}
 G.preload=function(report=()=>{}){baseReport=report;if(G.assetsPrepared)return Promise.resolve();if(basePromise)return basePromise;basePromise=new Promise((resolve,reject)=>{baseResolve=resolve;baseReject=reject;});baseTimer=setTimeout(()=>baseFail('基础包加载超时'),120000);ensureFrame();if(ready)prepareBase();return basePromise;};
 G.init=()=>{};
 G.start=async function(id,options={}){
  const c=GameData.charById[id];if(!G.available(c)){UI.toast('此角色尚未开放');return;}
  const token=++epoch;lastStart={id,options};G.currentKey=c.current.key;G.active=true;G.launching=true;
  $('result').classList.add('hidden');$('ui').classList.add('hidden');$('title-screen').classList.add('hidden');$('battle').classList.remove('hidden');Sfx.stopMusic();
  try{localStorage.setItem('ninja-recruit-loadout',JSON.stringify({mainKey:c.current.key,excluded:options.excluded||G.excluded}));}catch{}
  loading(G.assetsPrepared?'正在准备 '+c.current.name+' 角色包…':'正在载入战斗基础包…',false,0);
  try{await G.preload(status=>{if(token===epoch&&G.launching)loading(status.message,false,status.progress);});}catch(error){if(token===epoch)loading('基础包加载失败，请重试',true);return;}
  if(token!==epoch)return;
  frame.hidden=false;loading('正在准备 '+c.current.name+' 角色包…',false,0);
  post({type:'start',requestId:token,key:c.current.key,debug:G.debug(),excluded:options.excluded||G.excluded,sfx:Save.data.settings.sfx,lab:!!options.lab});
  clearTimeout(timer);timer=setTimeout(()=>{if(token===epoch&&G.launching)loading('角色包载入较慢，请重试',true);},90000);
 };
 G.stop=()=>{epoch++;clearTimeout(timer);G.active=false;G.launching=false;post({type:'stop'});if(frame)frame.hidden=true;if($('battle-loading'))$('battle-loading').hidden=true;};
 G.togglePause=()=>post({type:'pause'});G.pauseForBackground=()=>setTimeout(()=>{if(G.active&&!G.launching&&(document.hidden||!document.hasFocus()))post({type:'pause'});},0);G.resetClock=()=>{};G.syncSettings=()=>post({type:'settings',sfx:Save.data.settings.sfx});
 addEventListener('message',event=>{
  const m=event.data;if(!frame||event.source!==frame.contentWindow||event.origin!==location.origin||m?.channel!==CHANNEL)return;
  if(m.type==='ready'){if(m.runtimeId!==G.runtimeId||m.forms!==allowed.size){baseFail('战斗版本不匹配');return;}ready=true;prepareBase();}
  else if(m.type==='loading'){if(baseReject)baseReport({progress:m.progress||0,message:m.message||'正在载入战斗基础包…'});}
  else if(m.type==='prepared'){if(m.runtimeId!==G.runtimeId){baseFail('战斗版本不匹配');return;}clearTimeout(baseTimer);G.assetsPrepared=true;const resolve=baseResolve;baseResolve=baseReject=null;if(resolve)resolve();}
  else if(m.type==='pack-loading'){if(G.launching&&G.assetsPrepared&&m.key===G.currentKey)loading('正在载入 '+m.name+' 角色包（'+m.done+'/'+m.total+'）',false,m.done/m.total);}
  else if(m.type==='pack-ready'){if(allowed.has(m.key))downloaded.add(m.key);}
  else if(m.type==='started'){if(m.requestId!==epoch)return;if(m.runtimeId!==G.runtimeId){loading('战斗版本不匹配，请重试',true);return;}clearTimeout(timer);G.launching=false;$('battle-loading').hidden=true;}
  else if(m.type==='error'){if(m.requestId!==undefined&&m.requestId!==epoch)return;if(baseReject)baseFail(m.message||'基础包载入失败');if(G.active){clearTimeout(timer);loading(m.message||'资源包载入失败，请重试',true);}}
  else if(m.type==='home'){G.stop();$('battle').classList.add('hidden');UI.go('lobby');}
  else if(m.type==='test-step'){if(!G.active||G.launching||!G.debug()||!lastStart?.options.lab)return;const index=CurrentRoster.findIndex(u=>u.key===m.key);const next=CurrentRoster[(index+(m.step===-1?-1:1)+CurrentRoster.length)%CurrentRoster.length];G.start(next.id,{lab:true});}
  else if(m.type==='result'&&G.active){G.active=false;G.launching=false;clearTimeout(timer);frame.hidden=true;const r=m.result;G.onEnd?.({...r,coins:r.debug?0:Math.max(0,Math.floor(r.kills*2+r.time*.4+r.bosses*100)),gouyu:r.debug?0:Math.floor(r.time/30)+r.bosses*20,charId:lastStart.id});}
 });return G;
})();
