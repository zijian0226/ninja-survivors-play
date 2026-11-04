/* Original fan character. Independent caster frames, VFX and replacement-form state. */
(()=>{
const KEY='original_hiri',BASE='assets/original-hiri/';
const original={status:'original_jutsu',note:'原创角色与原创招式；美术为已确认生成素材，不冒称原作或BVN素材。'};
window.SKILL_KITS[KEY]={key:KEY,family:'original_hiri',sprite:'original_hiri',art:'original-hiri',name:'宇智波·绯璃',attribute:'阴',hp:680,initialUltimateCd:6,personal:1.08,original:true,releaseComplete:false,nameReviewPending:0,passive:'绯瞳余焰：忍术伤害提高8%；花焰命中魅惑目标追加一次莲火。',skills:{'幻术·绯瞳花狱':1,'火遁·绯莲花':1},attributeNote:'原创角色的游戏单属性定位。',kit:{
 passive:{name:'绯瞳余焰',text:'忍术伤害提高8%；花焰首次命中被魅惑的敌人，追加一次小范围莲火。',effects:{personal:1.08},nameReview:{status:'original',note:'本游戏原创被动。'}},
 primary:{name:'幻术·绯瞳花狱',text:'以万花筒发动大范围幻术，持续造成范围伤害并魅惑杂兵2秒，使其攻击其他敌人；Boss只受2秒迷乱减速。',kind:'area',element:'yin',range:420,radius:160,damage:100,cd:8,duration:1.45,nameReview:original,sourceText:'原创抬指施幻术动作与独立粉色瞳术特效。'},
 secondary:{name:'火遁·绯莲花',text:'结印吐出花焰，在敌群中绽放1.2秒，每0.2秒造成范围伤害并附加点燃；对魅惑敌人触发莲火。',kind:'projectile',element:'fire',range:400,radius:70,damage:27,cd:4.8,duration:1.85,nameReview:original,sourceText:'原创结印吐火动作；花焰从火种、绽放到熄灭独立播放。'},
 ultimate:{name:'须佐能乎·绯天舞',text:'召出半透明樱花神女须佐。本体隐藏，须佐随玩家移动，6秒内自动挥刀攻击；魅惑与花焰保持冷却并照常释放。',kind:'avatar',element:'yin',range:480,radius:155,damage:155,cd:28,duration:7.4,nameReview:original,sourceText:'原创木花咲耶姬意象；人面甲胄羽衣、花瓣翼，默认65%不透明度。'}
}};
window.SKILL_ART_DATA[KEY]={portrait:BASE+'portrait.webp',actor:{file:BASE+'actor.png',cell:[96,96],columns:8,anchor:[48,84],scale:1,rows:{idle:0,run:1,cast:4},counts:{idle:8,run:8,cast:8},ms:{idle:125,run:83,cast:75}},skills:Object.fromEntries([['primary',192,8],['secondary',128,8],['ultimate',256,16]].map(([slot,size,frames])=>[slot,{name:window.SKILL_KITS[KEY].kit[slot].name,file:BASE+slot+(slot==='ultimate'?'.webp':'.png'),icon:BASE+slot+'-icon.png',cell:[size,size],anchor:[size/2,size*.88],frames,fps:10,renderMode:'original_effect'}]))};
window.OriginalNinja={
 key:KEY,forms:new Map(),effects:[],metrics:{casts:{primary:0,secondary:0,ultimate:0},slashes:0,pulses:0,charms:0,combos:0},
 is(a){return !!a&&(a.profile?.key===KEY||a===s?.p&&s.mainKey===KEY);},
 avatar(a){return this.forms.get(a)||null;},
 visible(a){const q=this.avatar(a);return !!q&&q.age>=.4&&q.age<q.duration;},
 clear(){this.forms.clear();this.effects=[];},
 level(a,slot){return a===s.p?(slot==='primary'?s.ras:slot==='secondary'?s.clone:s.ultimate):1;},
 power(a,l){return (1.08)*(1+(a===s.p?s.power:0)*.12)*(1+s.teamPower*.1+s.reserve*.02)*(1+(l-1)*.16);},
 cast(a,u,slot,l,e){
  if(state!=='play'||a.hp<=0||a.down>0||!SkillArt.loaded(KEY))return false;
  if(slot==='ultimate'&&this.avatar(a))return false;
  if(!this.avatar(a)&&a.action?.originalSlot&&a.action.age<a.action.duration)return false;
  const k=u.kit[slot];if(!k)return false;e=e?.hp>0?e:Growth.nearestEnemy(a,k.range);if(!e||dist(a,e)>k.range)return false;
  l=this.level(a,slot);a.facing=e.x>=a.x?1:-1;
  if(!this.avatar(a))a.action={name:'cast',age:0,duration:slot==='ultimate'?.58:.6,originalSlot:slot};
  const scale=this.power(a,l),radius=k.radius*(l>=2?1.25:1);
  if(slot==='ultimate'){
   this.forms.set(a,{actor:a,unit:u,age:0,duration:7.4+(l>=3?2:0),damage:k.damage*scale,radius,slashAge:9,slashDue:false,nextSlash:.05,slashFacing:a.facing});
   const links=SquadLinks.onUltimate(a,u,e);UltimateCue.show(a,u,links);
  }else{
   const flower=slot==='secondary',q={actor:a,unit:u,slot,age:0,duration:flower?1.85:1.45,x:flower?e.x:a.x,y:flower?e.y-24:a.y-24,fromX:a.x+a.facing*18,fromY:a.y-(this.visible(a)?90:28),radius,damage:k.damage*scale,level:l,nextPulse:flower?.42:.25,charmApplied:false,comboTargets:new Set()};
   this.effects.push(q);if(this.effects.length>30)this.effects.shift();
   if(a===s.p){SquadLinks.onImpact({owner:a,x:e.x,y:e.y-24,element:k.element,damage:q.damage});if(slot==='primary')SquadLinks.onPrimary({x:e.x,y:e.y-24},q.damage);}
  }
  this.metrics.casts[slot]++;SkillArt.metrics.casts++;return true;
 },
 // Base shuriken emission is suppressed only while this actor owns a live avatar.
 interceptBasic(a){return this.is(a)&&!!this.avatar(a);},
 charmed(e){return e!==s.boss&&(e.originalCharm||0)>0;},
 update(dt){
  for(const [a,q]of this.forms){q.age+=dt;q.slashAge+=dt;if(a.hp<=0||a.down>0||q.age>=q.duration){this.forms.delete(a);continue;}
   if(q.age>=.95&&q.age<q.duration-.5){q.nextSlash-=dt;const target=Growth.nearestEnemy(a,260);if(q.nextSlash<=0&&target){q.nextSlash=.9;q.slashAge=0;q.slashDue=true;q.slashFacing=target.x>=a.x?1:-1;}
    if(q.slashDue&&q.slashAge>=.18){q.slashDue=false;this.metrics.slashes++;for(const e of Growth.enemies())if(Math.hypot(e.x-a.x,e.y-a.y)<q.radius+(e.r||12)&&(e.x-a.x)*q.slashFacing>-45){hit(e,q.damage);SkillArt.metrics.pulses++;}}
   }
  }
  for(const q of this.effects){q.age+=dt;if(q.actor.hp<=0||q.actor.down>0){q.age=q.duration;continue;}
   if(q.age>=q.nextPulse&&q.age<(q.slot==='primary'?1.15:1.55)){
    q.nextPulse+=.2;this.metrics.pulses++;SkillArt.metrics.pulses++;
    for(const e of Growth.enemies())if(Math.hypot(e.x-q.x,e.y-24-q.y)<=q.radius+(e.r||12)){
     if(q.slot==='primary'){
      hit(e,q.damage/5);if(e===s.boss){if(!q.charmApplied)e.originalDaze=Math.max(e.originalDaze||0,2);}else if(!q.charmApplied){e.originalCharm=2+(q.level>=4?.6:0);e.originalCharmAtk=.3;e.originalCharmDamage=10*this.power(q.actor,q.level);this.metrics.charms++;}
     }else{
      const combo=this.charmed(e)&&!q.comboTargets.has(e);hit(e,q.damage);e.originalBurn={left:2.4,next:.6,damage:q.damage*.65};
      if(combo){q.comboTargets.add(e);this.metrics.combos++;for(const other of Growth.enemies())if(dist(e,other)<55)hit(other,q.damage*.8);effect(e.x,e.y-24,34,'fire',.35);}
     }
    }
    if(q.slot==='primary')q.charmApplied=true;
   }
  }
  this.effects=this.effects.filter(q=>q.age<q.duration);
  const enemies=Growth.enemies(),hostiles=enemies.filter(e=>!this.charmed(e));
  for(const e of enemies){
   e.originalDaze=Math.max(0,(e.originalDaze||0)-dt);
   if(e.originalCharm>0){e.originalCharm=Math.max(0,e.originalCharm-dt);e.originalCharmAtk=(e.originalCharmAtk||0)-dt;
    let target=null,best=260;for(const x of hostiles){const d=dist(x,e);if(x!==e&&d<best){target=x;best=d;}}
    if(target&&dist(e,target)<260){const d=dist(e,target)||1;if(d>28&&!(e.skillStun>0))s.world.move(e,(target.x-e.x)/d*(e.speed||40)*dt,(target.y-e.y)/d*(e.speed||40)*dt,e.r||12,s.arena);if(d<=40&&e.originalCharmAtk<=0){hit(target,e.originalCharmDamage||10);e.originalCharmAtk=.7;}}
   }
   const burn=e.originalBurn;if(burn){burn.left-=dt;burn.next-=dt;if(burn.left<=0)e.originalBurn=null;else if(burn.next<=0){hit(e,burn.damage);burn.next+=.6;}}
  }
 },
 drawActor(key,action,x,y,facing,alpha,phase,flash,actionAge){
  if(key!==KEY)return false;const im=images[key];if(!im)return true;
  const a=s.p&&Math.abs(s.p.x-x)<.01&&Math.abs(s.p.y-y)<.01&&s.mainKey===KEY?s.p:s.allies.find(a=>a.profile?.key===KEY&&Math.abs(a.x-x)<.01&&Math.abs(a.y-y)<.01);
  const slot=a?.action?.originalSlot;let row=action==='run'?1:action==='cast'?2:0;let n=Math.floor(s.t*(action==='run'?12:8)+phase)%8;
  if(action==='cast'){row=slot==='primary'?4:slot==='secondary'?5:slot==='ultimate'?6:2;n=Math.min(7,Math.floor((actionAge||0)/(a?.action?.duration||.34)*8));}
  ctx.save();ctx.imageSmoothingEnabled=false;ctx.globalAlpha=alpha;ctx.translate(Math.round(x),Math.round(y));if(facing<0)ctx.scale(-1,1);ctx.drawImage(im,n*96,row*96,96,96,-48,-84,96,96);ctx.restore();return true;
 },
 frame(q){if(q.slot==='primary'){if(q.age<.4)return Math.min(3,Math.floor(q.age*10));if(q.age<1.05)return 4+Math.floor((q.age-.4)*10)%2;return Math.min(7,6+Math.floor((q.age-1.05)/.4*2));}if(q.age<.3)return Math.floor(q.age/.15);if(q.age<.6)return 2+Math.min(1,Math.floor((q.age-.3)/.15));if(q.age<1.5)return 4+Math.floor((q.age-.6)*10)%2;return Math.min(7,6+Math.floor((q.age-1.5)/.35*2));},
 draw(entities){
  for(const q of this.effects)entities.push({y:q.y+24,draw:()=>{const c=SKILL_ART_DATA[KEY].skills[q.slot],im=SkillArt.cache.get(c.file);if(!im)return;const size=q.radius*2.15;let x=q.x,y=q.y;if(q.slot==='secondary'&&q.age<.3){const t=q.age/.3;x=q.fromX+(q.x-q.fromX)*t;y=q.fromY+(q.y-q.fromY)*t;}ctx.save();ctx.globalAlpha=(q.slot==='primary'?.68:.9)*Math.min(1,q.age/.08,(q.duration-q.age)/.13);ctx.imageSmoothingEnabled=false;ctx.drawImage(im,this.frame(q)*c.cell[0],0,...c.cell,x-size/2,y-size*.62,size,size);ctx.restore();}});
  for(const[a,q]of this.forms)if(this.visible(a))entities.push({y:a.y,draw:()=>{const c=SKILL_ART_DATA[KEY].skills.ultimate,im=SkillArt.cache.get(c.file);if(!im)return;let n;if(q.age<1)n=Math.min(3,Math.floor((q.age-.4)/.6*4));else if(q.age>=q.duration-.5)n=Math.min(15,12+Math.floor((q.age-q.duration+.5)/.5*4));else n=q.slashAge<.65?8+Math.min(3,Math.floor(q.slashAge/.65*4)):4+Math.floor(s.t*7)%4;const size=184;ctx.save();ctx.imageSmoothingEnabled=false;ctx.globalAlpha=.65;ctx.translate(Math.round(a.x),Math.round(a.y));if((q.slashAge<.65?q.slashFacing:a.facing)<0)ctx.scale(-1,1);ctx.drawImage(im,n*256,0,256,256,-size/2,-size*.91,size,size);ctx.restore();}});
  for(const e of Growth.enemies())if(this.charmed(e))entities.push({y:e.y,draw:()=>{ctx.save();ctx.strokeStyle='#ff99cf';ctx.lineWidth=1.5;ctx.beginPath();ctx.ellipse(e.x,e.y-4,16,6,0,0,Math.PI*2);ctx.stroke();ctx.fillStyle='#ffc3e2';ctx.fillRect(e.x-2,e.y-54,4,4);ctx.restore();}});
 },
 initUI(){const b=document.getElementById('originalTry');if(!b)return;b.onclick=async()=>{if(!DebugMode.enabled||!assetsReady)return;b.disabled=true;try{HubUI.closeSheet(false);await SkillLab.open(KEY);}catch(error){console.warn('Original character load',error);toast('原创角色加载失败，请重试');}finally{b.disabled=!assetsReady;}};},
 readyUI(){const b=document.getElementById('originalTry');if(b)b.disabled=false;if(!this.queryConsumed&&DebugMode.enabled&&new URLSearchParams(location.search).get('try')===KEY){this.queryConsumed=true;setTimeout(()=>{if(state==='intro'&&assetsReady&&DebugMode.enabled)b?.click();},650);}},
 description(slot,l){const k=SKILL_KITS[KEY].kit[slot];if(slot==='ultimate')return k.text+` 当前Lv.${l}：须佐有效时间${l>=3?8:6}秒；挥刀伤害提高${Math.max(0,(l-1)*16)}%，${l>=2?'斩击范围扩大25%。':'斩击范围155。'}本体不叠加显示，进入形态不重置两项技能冷却。`;return k.text+` 当前Lv.${l}：威力提高${Math.max(0,(l-1)*16)}%，范围${Math.round(k.radius*(l>=2?1.25:1))}${slot==='primary'&&l>=4?'，魅惑延长至2.6秒':''}。`;}
};
const cast=SkillArt.cast,update=SkillArt.update,draw=SkillArt.draw,hidden=SkillArt.hidden,clear=SkillArt.clear,description=SkillArt.description;
SkillArt.cast=function(a,u,...rest){return u?.key===KEY?OriginalNinja.cast(a,u,...rest):cast.call(this,a,u,...rest)};
SkillArt.update=function(dt){update.call(this,dt);OriginalNinja.update(dt)};
SkillArt.draw=function(entities){draw.call(this,entities);OriginalNinja.draw(entities)};
SkillArt.hidden=function(a){return OriginalNinja.visible(a)||hidden.call(this,a)};
SkillArt.clear=function(){clear.call(this);OriginalNinja.clear()};
SkillArt.description=function(slot,l){return Growth.main().key===KEY?OriginalNinja.description(slot,l):description.call(this,slot,l)};
const openLab=SkillLab.open,updateLab=SkillLab.update;
SkillLab.open=async function(key){await openLab.call(this,key);if(key===KEY&&s.skillLab?.key===KEY){s.p.hp=mainMaxHp();s.skillLab.auto=true;s.skillLab.auto1=.15;s.skillLab.auto2=.95;s.skillLab.autoUltimate=2;const b=document.getElementById('labAuto');if(b){b.textContent='自动连放：开';b.setAttribute('aria-pressed','true');}this.refresh();}};
SkillLab.update=function(dt){updateLab.call(this,dt);const lab=s.skillLab;if(lab?.key===KEY&&lab.auto){lab.autoUltimate=(lab.autoUltimate??1.2)-dt;if(lab.autoUltimate<=0)lab.autoUltimate=this.cast('ultimate')?12:.2;}};
})();

/* A single tap moves the original-character rehearsal into the actual survival loop. */
(()=>{const base=SkillLab.renderDock;SkillLab.renderDock=function(){base.call(this);if(s.skillLab?.key!==OriginalNinja.key)return;const button=document.createElement('button');button.id='originalFieldTest';button.textContent='实战试炼 · 操控移动';button.onclick=()=>{RecruitRun.mainKey=OriginalNinja.key;reset(false);s.debugUsed=true;toast('原创绯璃实战 / 6秒后首次召唤须佐');};document.querySelector('#skillLabDock .lab-tools')?.prepend(button);};})();

(()=>{const base=SkillLab.refresh;SkillLab.refresh=function(){base.call(this);if(s.skillLab?.key!==OriginalNinja.key)return;const k=this.kit(Growth.main()).find(k=>k.kind===s.skillLab.selected);if(k&&document.getElementById('labDescription'))document.getElementById('labDescription').textContent=k.effect;const label=document.querySelector('#skillLabDock .lab-head small');if(label)label.textContent='原创角色 · 阴 · 独立技能试放';};})();
