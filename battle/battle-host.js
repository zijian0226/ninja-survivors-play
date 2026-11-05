/* Package loading and test access only; the original combat core stays unchanged. */
(function(){
 if(parent===window)return;
 const RUNTIME='ninja-v47-squad40',CHANNEL='ninja-current-battle-v1';let active=false,starting=false,prepared=false,runEpoch=0,latestRequest=null,testOrder=(parent.CharacterPacks?.playable||parent.CurrentRoster?.map(u=>u.key)||[]).filter(key=>RecruitRun.get(key));
 const allowed=new Set(testOrder),jobs=new Map(),complete=new Set(),extras=new Set(),progress=new Map();
 RecruitRun.units=RecruitRun.units.filter(u=>allowed.has(u.key));
 const hinted=new URLSearchParams(location.search).get('main');if(allowed.has(hinted))RecruitRun.mainKey=hinted;
 if(!RecruitRun.get(RecruitRun.mainKey))RecruitRun.mainKey='naruto_shippuden';
 const send=(type,payload={})=>parent.postMessage({channel:CHANNEL,type,...payload},location.origin);
 const nativeHome=goHome,nativeFinish=finish,nativeReset=reset,nativeEnsure=SkillArt.ensure.bind(SkillArt),nativeImage=SkillArt.image.bind(SkillArt);
 goHome=function(){nativeHome();if(active){active=false;send('home');}};
 finish=function(win,reason){const valid=state==='play';nativeFinish(win,reason);if(valid&&active){active=false;send('result',{result:{win,reason,time:s.t,kills:s.kills,level:s.level,bosses:s.bossLedger.filter(x=>x==='defeated').length,debug:s.debugUsed}});}};
 // The 40 integrated forms remain selectable with debug tools switched off. Review flags remain intact.
 RecruitRun.mainOptions=()=>RecruitRun.units.filter(u=>allowed.has(u.key)&&SkillArt.isReady(u.key));
 RecruitRun.candidates=function(excluded=s?.excludedNatures||this.excluded,main=s?.mainKey||this.mainKey,owned=s?.allies||[]){const used=new Set(owned.map(a=>a.id));return this.units.filter(u=>allowed.has(u.key)&&u.key!==main&&!used.has(u.key)&&this.natures(u).length&&!this.natures(u).some(n=>excluded.includes(n)));};
 reset=function(quick=false){const u=RecruitRun.get(RecruitRun.mainKey);if(!u||!allowed.has(u.key))return;const review=u.releaseComplete;u.releaseComplete=true;try{nativeReset(quick);}finally{u.releaseComplete=review;}if(review===false&&state==='play')s.debugUsed=true;};
 function packFiles(key){const d=SKILL_ART_DATA[key],u=RecruitRun.get(key),files=new Set(),images=new Set();
  const add=(url,image=false)=>{if(url){files.add(url);if(image)images.add(url);}};
  add(d.actor.file,true);add(d.portrait);for(const clip of Object.values(d.skills)){add(clip.file,true);add(clip.icon);if(clip.impact)add(clip.impact.file,true);if(clip.caster)add(clip.caster.file,true);}add(UltimateCue.art(u));return{files,images};
 }
 function mark(url){for(const [key,p]of progress)if(p.files.has(url)&&!p.done.has(url)){p.done.add(url);send('pack-loading',{key,name:RecruitRun.get(key).name,done:p.done.size,total:p.files.size});}}
 SkillArt.image=async function(url){const image=await nativeImage(url);mark(url);return image;};
 SkillArt.ensure=function(key){
  // The engine bootstrap only needs shared assets; the explicit start command loads its role package.
  if(!allowed.has(key))return Promise.reject(Error('此角色尚未开放'));
  if(!assetsReady&&state==='intro'&&!prepared)return Promise.resolve();
  if(jobs.has(key))return jobs.get(key);
  const task=(async()=>{
   const p=packFiles(key);progress.set(key,{...p,done:new Set()});send('pack-loading',{key,name:RecruitRun.get(key).name,done:0,total:p.files.size});
   try{
    await Promise.all([nativeEnsure(key),...Array.from(p.files).filter(url=>!p.images.has(url)).map(async url=>{if(!extras.has(url)){const response=await fetch(url,{cache:'force-cache',signal:AbortSignal.timeout(20000)});if(!response.ok)throw Error('角色素材载入失败');await response.arrayBuffer();extras.add(url);}mark(url);})]);
    complete.add(key);send('pack-ready',{key});
   }finally{progress.delete(key);}
  })().finally(()=>jobs.delete(key));jobs.set(key,task);return task;
 };
 const renderDock=SkillLab.renderDock.bind(SkillLab);
 SkillLab.renderDock=function(){renderDock();if(!s?.skillLab)return;const head=$('skillLabDock').querySelector('.lab-head'),nav=document.createElement('div');nav.className='pack-test-nav';const index=testOrder.indexOf(s.skillLab.key);nav.innerHTML='<button type="button" aria-label="测试上一角色">上个</button><small>'+(index+1)+'/'+testOrder.length+'</small><button type="button" aria-label="测试下一角色">下个</button>';const buttons=nav.querySelectorAll('button');buttons[0].onclick=()=>send('test-step',{key:s.skillLab.key,step:-1});buttons[1].onclick=()=>send('test-step',{key:s.skillLab.key,step:1});head.insertBefore(nav,$('labMenu'));};
 async function prepareBase(m){
  if(m.allowedKeys)testOrder=m.allowedKeys.filter(key=>allowed.has(key));
  if(!prepared){await document.fonts.load('16px Pixel');prepared=true;}
  send('prepared',{runtimeId:RUNTIME});
 }
 function ready(){if(assetsReady){send('ready',{runtimeId:RUNTIME,forms:RecruitRun.units.length});return;}if(HubUI.battleFailed){send('error',{message:'战斗基础包载入失败，请重试'});return;}send('loading',{progress:Math.min(.95,HubUI.gameLoaded||0),message:'正在载入木叶场景与基础资源…'});setTimeout(ready,150);}
 addEventListener('message',async event=>{
  const m=event.data;if(event.source!==parent||event.origin!==location.origin||m?.channel!==CHANNEL)return;
  try{
   if(m.type==='prepare'){await prepareBase(m);}
   else if(m.type==='start'){
    const token=++runEpoch;latestRequest=m.requestId;starting=true;
    try{
     const u=RecruitRun.get(m.key);if(!u||!allowed.has(u.key))throw Error('此角色尚未开放');
     active=false;nativeHome();DebugMode.set(m.debug!==false);RecruitRun.mainKey=u.key;RecruitRun.excluded=(m.excluded||[]).filter(x=>RecruitRun.types.includes(x)).slice(0,3);selectedCharacter=u.family;RunFlow.setSpeed(1);muted=m.sfx===false;
     await SkillArt.ensure(u.key);if(token!==runEpoch)return;if(!assetsReady)throw Error('基础资源尚未就绪');
     reset(false);if(state!=='play')throw Error('战斗未能启动');active=true;
     if(m.lab&&DebugMode.enabled)await SkillLab.open(u.key);
     fitBattle();window.focus();send('started',{key:u.key,runtimeId:RUNTIME,requestId:m.requestId});
    }finally{if(token===runEpoch)starting=false;}
   }else if(m.type==='stop'){runEpoch++;latestRequest=null;active=false;nativeHome();}
   else if(m.type==='pause'){if(state==='play')pause();}
   else if(m.type==='resume'){if(state==='paused')pause();}
   else if(m.type==='settings'){muted=m.sfx===false;}
  }catch(error){if(m.type!=='start'||m.requestId===latestRequest)send('error',{message:error.message||'资源包准备失败，请重试',requestId:m.requestId});}
 });ready();
})();
