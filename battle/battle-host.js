/* Host boundary only. All v0.28 combat scripts, rules, sprites and HUD remain unchanged. */
(function(){
 if(parent===window)return;
 const CHANNEL='ninja-current-battle-v1';let active=false,starting=false;
 const send=(type,payload={})=>parent.postMessage({channel:CHANNEL,type,...payload},location.origin);
 const home=goHome,ended=finish;
 goHome=function(){home();if(active){active=false;send('home');}};
 finish=function(win,reason){const valid=state==='play';ended(win,reason);if(valid&&active){active=false;send('result',{result:{win,reason,time:s.t,kills:s.kills,level:s.level,bosses:s.bossLedger.filter(x=>x==='defeated').length,debug:s.debugUsed}});}};
 function ready(){if(assetsReady){send('ready');return;}if(HubUI.battleFailed){send('error',{message:'战斗素材加载失败，请重试'});return;}setTimeout(ready,100);}
 addEventListener('message',async event=>{
  const m=event.data;if(event.source!==parent||event.origin!==location.origin||m?.channel!==CHANNEL)return;
  try{
   if(m.type==='start'){
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
     fitBattle();window.focus();send('started',{key:u.key});
    }finally{starting=false;}
   }else if(m.type==='stop'){active=false;home();}
   else if(m.type==='pause'){if(state==='play')pause();}
   else if(m.type==='resume'){if(state==='paused')pause();}
   else if(m.type==='settings'){muted=m.sfx===false;}
  }catch(error){send('error',{message:error.message||'战斗准备失败'});}
 });
 ready();
})();
