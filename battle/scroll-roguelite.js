/* Scroll roguelite prototype. Loaded after runtime.bundle.js, before battle-host.js.
 * No existing character kits or ultimate names are changed. */
(function(){
 'use strict';
 const scrolls=[
  {key:'shuriken',name:'手里剑阵',nature:'全',icon:'assets/shuriken.png',base:9,cd:1.7,kind:'shot',element:'shuriken'},
  {key:'kunai',name:'追踪苦无',nature:'全',icon:'assets/shuriken.png',base:16,cd:2.0,kind:'shot',element:'shuriken'},
  {key:'fire',name:'火遁卷轴',nature:'火',icon:'assets/sasuke-fire.png',base:24,cd:3.1,kind:'shot',element:'fire'},
  {key:'wind',name:'风遁卷轴',nature:'风',icon:'assets/rasenshuriken.png',base:21,cd:2.9,kind:'shot',element:'wind'},
  {key:'water',name:'水遁卷轴',nature:'水',icon:'assets/rasengan-ds-icon.png',base:24,cd:3.2,kind:'shot',element:'water'},
  {key:'lightning',name:'雷遁卷轴',nature:'雷',icon:'assets/lightning.png',base:22,cd:3.0,kind:'zone',element:'lightning'},
  {key:'earth',name:'土遁卷轴',nature:'土',icon:'assets/sand-hit.png',base:24,cd:3.8,kind:'zone',element:'impact'},
  {key:'explosive',name:'起爆符',nature:'全',icon:'assets/pickup-scroll-existing.png',base:27,cd:4.0,kind:'zone',element:'impact'}
 ];
 const maxSlots=4,definitions=scrolls.map(x=>({
  id:'scroll_'+x.key,name:x.name,text:()=>{const level=(s['scroll_'+x.key]||0)+1;return (level===1?'获得自动攻击 / ': '卷轴升级 / ')+x.nature+'属性 · '+(level>=3?'额外弹幕与扩大范围':'提高伤害与攻击频率')+(level===5?' · 满级强化':'');},max:5,scroll:x.key
 }));
 const byId=Object.fromEntries(scrolls.map(x=>[x.key,x]));
 const owned=()=>scrolls.filter(x=>(s['scroll_'+x.key]||0)>0);
 const origIdle=idleState;
 idleState=function(){const run=origIdle();for(const x of scrolls)run['scroll_'+x.key]=0;run.scrollCooldowns={};return run;};
 // Keep vanilla skill level choices, but guarantee meaningful early scroll discoveries.
 const origOffers=getSkillOffers;
 getSkillOffers=function(){
  const choices=origOffers();
  const available=definitions.filter(d=>(s[d.id]||0)<5&&((s[d.id]||0)>0||owned().length<maxSlots));
  if(!available.length)return choices;
  const newCards=available.filter(d=>(s[d.id]||0)===0);
  const preferNew=owned().length<2||s.upgradeCount%4===0;
  const preferred=preferNew&&newCards.length?newCards:available;
  const card=preferred[Math.floor(Math.random()*preferred.length)];
  const slot=choices.findIndex(c=>!['ras','clone','ultimate'].includes(c.id));
  if(slot>=0)choices[slot]=card;
  else if(choices.length<3)choices.push(card);
  return choices;
 };
 // Recruitment is a deliberate squad milestone, not a competing card every level.
 const recruitLevels=new Set([3,7,12]);
 RecruitRun.offers=function(){
  if(!recruitLevels.has(s.level)||s.allies.length>=3)return getSkillOffers().slice(0,3);
  const recruits=this.random(this.candidates()).slice(0,3).map(u=>({
   id:'recruit:'+u.key,recruit:u.key,name:u.name,
   text:()=>this.natureText(u)+' · '+Object.keys(u.skills).join('、')+' · 技能 Lv.1',max:1
  }));
  for(const item of recruits)SkillArt.ensure(item.recruit).catch(()=>{});
  const filler=getSkillOffers().filter(x=>!recruits.some(y=>x.id===y.id));
  return [...recruits,...filler].slice(0,3);
 };
 // Allies remain fixed Lv.1 in their unique techniques, but scale in strength with the run.
 const allyScale=()=>1+Math.min(30,Math.max(0,(s?.level||1)-1))*.025;
 const baseBonus=TeamSeven.bonus.bind(TeamSeven),baseMaxHp=TeamSeven.maxHp.bind(TeamSeven);
 TeamSeven.bonus=function(a){return baseBonus(a)*allyScale();};
 TeamSeven.maxHp=function(a){return baseMaxHp(a)*(1+Math.min(30,Math.max(0,(s?.level||1)-1))*.018);};
 // Fill the newly gained max-health portion on level-up; preserve current damage taken.
 const nativeGainLevel=gainLevel;
 gainLevel=function(){
  const prior=(s?.allies||[]).map(a=>({ally:a,max:TeamSeven.maxHp(a)}));
  nativeGainLevel();
  for(const entry of prior){
   const a=entry.ally;
   if(a.down>0||a.hp<=0)continue;
   a.hp=Math.min(TeamSeven.maxHp(a),a.hp+Math.max(0,TeamSeven.maxHp(a)-entry.max));
  }
 };
 const nativeCast=SkillArt.cast.bind(SkillArt);
 SkillArt.cast=function(actor,unit,slot,level,target){
  const ok=nativeCast(actor,unit,slot,level,target);
  if(!ok)return ok;
  const isAlly=!!s?.allies?.includes(actor);
  if(!isAlly&&actor!==s.p)return ok;
  if(isAlly)for(const q of this.active)if(q.actor===actor&&q.age===0)q.damage*=allyScale();
  // Only actual element-bearing main/support techniques can resonate with scrolls.
  if(!['primary','secondary'].includes(slot))return ok;
  const victim=target?.hp>0?target:Growth.nearestEnemy(actor,480);
  if(!victim||victim.hp<=0)return ok;
  const element=unit.kit?.[slot]?.element,now=s.t;
  s.scrollLinks??={};
  const key=(isAlly?actor.id:'main')+':'+slot;
  if((s.scrollLinks[key]||0)>now)return ok;
  const windFire=element==='fire'&&(s.scroll_wind||0)>0;
  const waterShock=element==='lightning'&&(s.scroll_water||0)>0;
  const fireWind=element==='wind'&&(s.scroll_fire||0)>0;
  if(windFire||fireWind){
   if(s.zones.length<55)addDamageZone(victim.x,victim.y-24,10*(isAlly?allyScale():1),'fire',.6,55);
  }else if(waterShock){
   if(victim!==s.boss)victim.slow=Math.max(victim.slow||0,1.5);
   if(s.zones.length<55)addDamageZone(victim.x,victim.y-24,8*(isAlly?allyScale():1),'lightning',.45,44);
  }else return ok;
  s.scrollLinks[key]=now+3;
  return ok;
 };
 // Render an explicit recruit prompt at the three squad milestones.
 const nativeUpgrade=upgrade;
 upgrade=function(force){
  nativeUpgrade(force);
  if(state!=='upgrade')return;
  const hint=document.querySelector('.upgrade-instruction');
  const ribbon=document.querySelector('.upgrade-ribbon');
  if(recruitLevels.has(s.level)&&s.allies.length<3&&document.querySelector('.recruit-choice')){
   if(ribbon)ribbon.textContent='小队招募 · 第 '+(s.allies.length+1)+' 名队友';
   if(hint)hint.textContent='阶段奖励：选择一名忍者加入小队；队友忍术可与卷轴共鸣';
  }else if(hint)hint.textContent='选择忍术、卷轴或被动强化 · 下次招募节点 Lv.3 / Lv.7 / Lv.12';
 };
 const origIcon=upgradeIcon;
 upgradeIcon=function(o){return o.scroll?byId[o.scroll].icon:origIcon(o);};
 const origStrip=equippedStrip;
 equippedStrip=function(){
  const slots=scrolls.filter(x=>(s['scroll_'+x.key]||0)>0);
  const cards=Array.from({length:maxSlots},(_,i)=>{
   const x=slots[i];
   return x?'<div class="equipped-slot" title="'+x.name+'"><img src="'+x.icon+'" alt=""><small>'+(s['scroll_'+x.key]||1)+'</small></div>':'<div class="equipped-slot empty"><i>＋</i></div>';
  }).join('');
  return origStrip()+'<div class="build-group scroll-build"><span class="build-group-label">卷轴 <small>'+slots.length+'/'+maxSlots+' · 自动攻击</small></span><div class="build-slots">'+cards+'</div></div>';
 };
 const origTick=tick;
 tick=function(dt){
  origTick(dt);
  if(state!=='play'||s.skillLab||!s.scrollCooldowns)return;
  const equipped=owned();if(!equipped.length)return;
  const targets=Growth.enemies().filter(e=>e.hp>0&&dist(e,s.p)<460).sort((a,b)=>dist(a,s.p)-dist(b,s.p));
  if(!targets.length)return;
  const nature=RecruitRun.attribute(RecruitRun.get(s.mainKey));
  const hasWater=equipped.some(x=>x.nature==='水'),hasWind=equipped.some(x=>x.nature==='风');
  for(const x of equipped){
   const level=s['scroll_'+x.key],id=x.key;
   s.scrollCooldowns[id]=(s.scrollCooldowns[id]||0)-dt;
   if(s.scrollCooldowns[id]>0)continue;
   const affinity=nature===x.nature?1.2:1;
   const buff=1+s.power*.12+s.teamPower*.1+s.reserve*.02;
   const damage=x.base*(1+(level-1)*.28)*affinity*buff;
   const count=Math.min(4,1+(level>=3?1:0)+(level>=5?1:0));
   if(x.kind==='zone'){
    for(let j=0;j<Math.min(count,targets.length);j++){
     const e=targets[j],radius=38+level*6;
     if(s.zones.length<60)addDamageZone(e.x,e.y-24,damage*.42,x.element,.75,radius);
     if(x.nature==='雷'&&hasWater&&e!==s.boss)e.slow=Math.max(e.slow||0,1.2);
    }
   }else if(s.shots.length<175){
    for(let j=0;j<count;j++){
     const e=targets[j%targets.length],angle=Math.atan2(e.y-24-s.p.y,e.x-s.p.x)+(j%2?.10:-.10)*Math.floor(j/2);
     let element=x.element;
     const d=damage*(x.nature==='火'&&hasWind?1.2:1);
     const speed=x.key==='kunai'?440:320;
     s.shots.push({x:s.p.x,y:s.p.y-24,px:s.p.x,py:s.p.y-24,
      vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,angle,life:2.1,
      damage:d,r:Math.min(25,9+level*2),kind:x.key==='wind'?'wind':'scroll',element});
    }
   }
   s.scrollCooldowns[id]=Math.max(.65,x.cd*(1-(level-1)*.085)*(1-s.haste*.07));
  }
 };
 window.ScrollRoguelite={definitions,maxSlots,recruitLevels:[3,7,12],version:'prototype-2'};
})();