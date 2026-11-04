/* Host boundary only. All v0.28 combat scripts, rules, sprites and HUD remain unchanged. */
(function(){
 if(parent===window)return;
 const RUNTIME='ninja-v28-squad35';const CHANNEL='ninja-current-battle-v1';let active=false,starting=false;
 const send=(type,payload={})=>parent.postMessage({channel:CHANNEL,type,...payload},location.origin);
 const home=goHome,ended=finish;
 goHome=function(){home();if(active){active=false;send('home');}};
 finish=function(win,reason){const valid=state==='play';ended(win,reason);if(valid&&active){active=false;send('result',{result:{win,reason,time:s.t,kills:s.kills,level:s.level,bosses:s.bossLedger.filter(x=>x==='defeated').length,debug:s.debugUsed}});}};
 let preparing=false,prepared=false;
 const loadedFiles=new Set();
 async function prepareAssets(m){
  if(preparing)return;if(prepared){send('prepared',{runtimeId:RUNTIME});return;}preparing=true;
  try{
   const units=RecruitRun.units;
   for(let i=0;i<units.length;i++){
    await SkillArt.ensure(units[i].key);
    send('loading',{progress:.12+.68*(i+1)/units.length,message:'正在加载忍者与忍术 '+(i+1)+' / '+units.length});
   }
   const urls=new Set();
   const add=url=>{if(!url)return;const u=new URL(url,location.href);if(u.origin===location.origin)urls.add(u.href);};
   for(const data of Object.values(SKILL_ART_DATA)){add(data.portrait);for(const clip of Object.values(data.skills))add(clip.icon);}
   for(const unit of units)add(UltimateCue.art(unit));
   for(const url of m.homeArt||[])add(url);
   for(const path of ["assets/hub-modern/back.svg","assets/hub-modern/check.svg","assets/hub-modern/close.svg","assets/hub-modern/download.svg","assets/hub-modern/home.svg","assets/hub-modern/info.svg","assets/hub-modern/jutsu.svg","assets/hub-modern/menu.svg","assets/hub-modern/ninja.svg","assets/hub-modern/rank.svg","assets/hub-modern/recruit.svg","assets/hub-modern/sound.svg","assets/hub-modern/stage.svg","assets/hub-modern/swap.svg","assets/hub-modern/trial.svg"])add(path);
   const files=[...urls];let index=0,completed=0;
   await Promise.all(Array.from({length:4},async()=>{while(index<files.length){
    const url=files[index++];
    if(!loadedFiles.has(url)){
     const response=await fetch(url,{cache:'force-cache',signal:AbortSignal.timeout(20000)});if(!response.ok)throw Error('素材下载失败');await response.arrayBuffer();loadedFiles.add(url);
    }
    completed++;send('loading',{progress:.8+.18*completed/files.length,message:'正在准备界面与奥义素材 '+completed+' / '+files.length});
   }}));
   const selected=RecruitRun.get(m.key)?m.key:'naruto_shippuden';await SkillArt.ensure(selected);
   await document.fonts.load('16px Pixel');prepared=true;send('prepared',{runtimeId:RUNTIME});
  }catch(error){console.warn('Title preparation failed',error.message);send('error',{message:'素材加载未完成，请重试'});}finally{preparing=false;}
 }
 function ready(){if(assetsReady){send('ready',{runtimeId:RUNTIME,forms:RecruitRun.units.length});return;}if(HubUI.battleFailed){send('error',{message:'战斗素材加载失败，请重试'});return;}send('loading',{progress:(HubUI.gameLoaded||0)*.12,message:'正在加载木叶场景与基础素材…'});setTimeout(ready,150);}
 addEventListener('message',async event=>{
  const m=event.data;if(event.source!==parent||event.origin!==location.origin||m?.channel!==CHANNEL)return;
  try{
   if(m.type==='prepare'){await prepareAssets(m);}
   else if(m.type==='start'){
    if(starting)return;starting=true;
    try{
     const u=RecruitRun.get(m.key);if(!u)throw Error('角色尚未接入');
     DebugMode.set(m.debug!==false);if(!DebugMode.enabled&&u.releaseComplete===false)throw Error('此形态仅限调试预览');
     RecruitRun.mainKey=u.key;RecruitRun.excluded=(m.excluded||[]).filter(x=>RecruitRun.types.includes(x)).slice(0,3);
     selectedCharacter=u.family;RunFlow.setSpeed(1);muted=m.sfx===false;
     await SkillArt.ensure(u.key);
     if(!assetsReady)throw Error('战斗素材尚未就绪');
     reset(false);if(state!=='play')throw Error('战斗未能启动');active=true;
     if(m.lab&&DebugMode.enabled)await SkillLab.open(u.key);
     fitBattle();window.focus();send('started',{key:u.key,runtimeId:RUNTIME});
    }finally{starting=false;}
   }else if(m.type==='stop'){active=false;home();}
   else if(m.type==='pause'){if(state==='play')pause();}
   else if(m.type==='resume'){if(state==='paused')pause();}
   else if(m.type==='settings'){muted=m.sfx===false;}
  }catch(error){send('error',{message:error.message||'战斗准备失败'});}
 });
 ready();
})();
