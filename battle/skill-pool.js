/* Shared skill pool, 6-slot growth, lobby catalog, and off-field ally call bar.
 * Loaded after scroll-roguelite.js and before battle-host.js. Phases A–D of
 * docs/redesign/PRD-shared-skill-pool.md. Exclusive ultimates stay per-form. */
(function(){
'use strict';

const Catalog=window.SkillPoolCatalog;
if(!Catalog)throw new Error('SkillPoolCatalog is required');
const ALL_NATURES=Catalog.ALL_NATURES,NATURE_ORDER=Catalog.NATURE_ORDER,NATURE_SRC=Catalog.natureSrc;
const MAX_SLOTS=Catalog.MAX_SLOTS, BASIC_MELEE_RANGE=56, BASIC_INTERVAL=.65, BASIC_MELEE_DAMAGE=22, BASIC_RANGED_DAMAGE=20;
const SKILLS=Catalog.skills,FORMS=Catalog.forms;

const FACE_ALIAS={naruto_shippuden:"naruto"};
const FACE_ART={
 asuma:{"src":"../assets/phase-one/asuma.webp","ar":0.265,"box":[0.3467,0.0,0.8,0.1866]},
 chiyo:{"src":"../assets/phase-one/chiyo.webp","ar":0.708,"box":[0.4478,0.2148,0.6567,0.4225]},
 choji:{"src":"../assets/phase-one/choji.webp","ar":0.475,"box":[0.2074,0.0,0.7556,0.2711]},
 deidara:{"src":"../assets/phase-one/deidara.webp","ar":0.46,"box":[0.1985,0.0,0.6947,0.2535]},
 gaara:{"src":"../assets/phase-one/gaara.webp","ar":0.463,"box":[0.1679,0.0,0.4275,0.2113]},
 guy:{"src":"../assets/phase-one/guy.webp","ar":0.338,"box":[0.25,0.0,0.6458,0.2007]},
 guy_death_gate:{"src":"assets/home-lite/guy.webp","ar":0.3381,"box":[0.3125,0.0,0.6458,0.2042]},
 haku:{"src":"../assets/phase-one/haku.webp","ar":0.347,"box":[0.3131,0.0,0.7273,0.2394]},
 hashirama:{"src":"../assets/phase-one/hashirama.webp","ar":0.427,"box":[0.3719,0.0,0.6777,0.2148]},
 hidan:{"src":"../assets/phase-one/hidan.webp","ar":0.692,"box":[0.3452,0.0,0.5127,0.1725]},
 hinata:{"src":"../assets/phase-one/hinata.webp","ar":0.327,"box":[0.3441,0.0,0.7097,0.1937]},
 hiruzen:{"src":"../assets/phase-one/hiruzen.webp","ar":0.52758,"box":[0.4933,0.0915,0.7933,0.2746]},
 ino:{"src":"../assets/phase-one/ino.webp","ar":0.336,"box":[0.3789,0.0,0.7158,0.2148]},
 itachi:{"src":"../assets/phase-one/itachi.webp","ar":0.569,"box":[0.4753,0.0,0.6852,0.2289]},
 jiraiya:{"src":"../assets/phase-one/jiraiya.webp","ar":0.465,"box":[0.3712,0.0,0.6894,0.2606]},
 jiraiya_sage:{"src":"../assets/phase-one-full/jiraiya_sage.webp","ar":0.87893,"box":[0.47,0.0,0.89,0.3]},
 jugo:{"src":"../assets/phase-one/jugo.webp","ar":0.577,"box":[0.372,0.0,0.7561,0.257]},
 kabuto:{"src":"../assets/phase-one/kabuto.webp","ar":0.458,"box":[0.5538,0.0,0.7692,0.169]},
 kaguya:{"src":"assets/official-gallery/chara095.webp","ar":0.74889,"box":[0.1878,0.0,0.3756,0.2113]},
 kakashi:{"src":"../assets/phase-one/kakashi.webp","ar":0.447,"box":[0.3071,0.0,0.7638,0.2183]},
 kakashi_kamui:{"src":"assets/home-lite/kakashi.webp","ar":0.65714,"box":[0.369,0.0,0.6524,0.2148]},
 kakuzu:{"src":"../assets/phase-one/kakuzu.webp","ar":0.494,"box":[0.4,0.0,0.6286,0.2007]},
 kankuro:{"src":"../assets/phase-one/kankuro.webp","ar":0.782,"box":[0.4144,0.2606,0.5676,0.4437]},
 kiba:{"src":"../assets/phase-one/kiba.webp","ar":0.346,"box":[0.3571,0.0,0.7449,0.1972]},
 killerbee:{"src":"../assets/phase-one/killerbee.webp","ar":0.551,"box":[0.4359,0.0,0.6795,0.2077]},
 killerbee_eight_tail:{"src":"../assets/phase-one/killerbee_eight_tail.webp","ar":1.49038,"box":[0.2292,0.1863,0.4417,0.6335]},
 kimimaro:{"src":"../assets/phase-one/kimimaro.webp","ar":0.58451,"box":[0.6627,0.0,0.9639,0.2218]},
 kisame:{"src":"../assets/phase-one/kisame.webp","ar":0.5,"box":[0.3803,0.0,0.6408,0.2077]},
 konan:{"src":"../assets/phase-one/konan.webp","ar":0.397,"box":[0.3363,0.0,0.646,0.2007]},
 konohamaru:{"src":"../assets/phase-one/konohamaru.webp","ar":0.6757,"box":[0.25,0.0282,0.4948,0.331]},
 kurenai:{"src":"../assets/phase-one/kurenai.webp","ar":0.439,"box":[0.296,0.0,0.568,0.2289]},
 lee:{"src":"../assets/phase-one/lee.webp","ar":0.31,"box":[0.3182,0.0,0.7045,0.1972]},
 madara:{"src":"assets/home-lite/madara.webp","ar":0.6119,"box":[0.3046,0.0,0.569,0.2324]},
 minato:{"src":"../assets/phase-one/minato.webp","ar":0.409,"box":[0.5776,0.0,0.8879,0.1866]},
 naruto:{"src":"../assets/phase-one/naruto.webp","ar":0.388,"box":[0.2909,0.0,0.6727,0.1972]},
 naruto_four_tail:{"src":"../assets/phase-one-full/naruto_four_tail-generated.webp","ar":0.91545,"box":[0.355,0.405,0.58,0.605]},
 naruto_kurama:{"src":"assets/home-lite/naruto-kurama.webp","ar":0.88571,"box":[0.3292,0.0,0.5458,0.2325]},
 naruto_one_tail:{"src":"assets/skills-v28/naruto_one_tail/portrait.webp","ar":1.0,"box":[0.5258,0.5675,0.7658,0.8075]},
 naruto_sage:{"src":"../assets/phase-one/naruto_sage.webp","ar":0.471,"box":[0.3358,0.0,0.6567,0.1937]},
 neji:{"src":"../assets/phase-one/neji.webp","ar":0.407,"box":[0.3707,0.0,0.6724,0.2289]},
 obito:{"src":"assets/home-lite/obito.webp","ar":0.80714,"box":[0.3537,0.0,0.4934,0.2183]},
 original_hiri:{"src":"assets/original-hiri/portrait.webp","ar":0.5625,"box":[0.4062,0.0,0.6375,0.243]},
 orochimaru:{"src":"../assets/phase-one/orochimaru.webp","ar":0.35,"box":[0.404,0.0,0.7475,0.2324]},
 pain:{"src":"../assets/phase-one-full/pain-generated.webp","ar":0.62545,"box":[0.365,0.04,0.625,0.204]},
 pain_animal:{"src":"../assets/phase-one-full/pain_animal-generated.webp","ar":0.62545,"box":[0.384,0.045,0.634,0.216]},
 pain_asura:{"src":"../assets/phase-one-full/pain_asura-generated.webp","ar":0.62545,"box":[0.388,0.044,0.616,0.177]},
 sai:{"src":"../assets/phase-one/sai.webp","ar":0.359,"box":[0.3137,0.0,0.6275,0.1901]},
 sakura:{"src":"../assets/phase-one/sakura.webp","ar":0.501,"box":[0.3451,0.0,0.6056,0.1937]},
 sakura_war:{"src":"assets/home-lite/sakura.webp","ar":0.50119,"box":[0.338,0.0,0.6127,0.2254]},
 sasori:{"src":"../assets/phase-one/sasori.webp","ar":0.787,"box":[0.3304,0.0669,0.4866,0.2817]},
 sasuke:{"src":"../assets/phase-one/sasuke.webp","ar":0.394,"box":[0.3571,0.0,0.6429,0.1725]},
 sasuke_curse:{"src":"../assets/phase-one-full/sasuke_curse-generated.webp","ar":0.68818,"box":[0.41,0.04,0.69,0.205]},
 sasuke_hebi:{"src":"assets/official-gallery/chara010.webp","ar":0.47778,"box":[0.3456,0.0,0.6471,0.2183]},
 sasuke_susanoo:{"src":"assets/home-lite/sasuke-susanoo.webp","ar":0.54524,"box":[0.3677,0.0,0.6258,0.2324]},
 shikamaru:{"src":"../assets/phase-one/shikamaru.webp","ar":0.372,"box":[0.3113,0.0,0.6887,0.2254]},
 shino:{"src":"../assets/phase-one/shino.webp","ar":0.386,"box":[0.3455,0.0,0.6364,0.2359]},
 suigetsu:{"src":"../assets/phase-one/suigetsu.webp","ar":0.403,"box":[0.307,0.0,0.5702,0.2042]},
 temari:{"src":"../assets/phase-one/temari.webp","ar":0.908,"box":[0.4667,0.0,0.6708,0.2576]},
 tenten:{"src":"../assets/phase-one/tenten.webp","ar":0.505,"box":[0.2937,0.0,0.6294,0.2183]},
 tobirama:{"src":"../assets/phase-one/tobirama.webp","ar":0.354,"box":[0.1584,0.0,0.7327,0.2183]},
 tsunade:{"src":"../assets/phase-one/tsunade.webp","ar":0.374,"box":[0.217,0.0,0.5472,0.2007]},
 yamato:{"src":"../assets/phase-one/yamato.webp","ar":0.331,"box":[0.4255,0.0,0.7766,0.2113]},
 yugito:{"src":"../assets/phase-one/yugito.webp","ar":0.37,"box":[0.3238,0.0,0.6,0.1937]},
 zabuza:{"src":"../assets/phase-one/zabuza.webp","ar":0.664,"box":[0.1799,0.0,0.3492,0.2113]}
};

const TEAM7_FAMILIES=['sasuke','sakura','kakashi'];
const ART_NOTES=[
 {id:'kage_bunshin',note:'影分身不播木叶丸合图（图层含两具身体），改用烟雾+施术者人物表分身。'},
 {id:'chidori',note:'千鸟使用 skill-motion-v62/sasuke/primary-effect.webp，人物已去掉但雷光偏弱；原合图含佐助，不用。'},
 {id:'kaiten',note:'回天使用派生气罩层，中心仍有补齐残影，待阶段 E 精修。'},
 {id:'yang_pool',note:'TODO：本轮池内没有纯阳招，五个紧形态（李洛克、丁次、天天、犬冢牙、畜生道佩恩）可学数正好 10。后续再补阳属性忍术。'}
];

const byId=Object.fromEntries(SKILLS.map(x=>[x.id,x]));

function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}

function faceKey(key){
  if(key&&FACE_ART[key])return key;
  if(key&&FACE_ALIAS[key]&&FACE_ART[FACE_ALIAS[key]])return FACE_ALIAS[key];
  return key||'';
}
function faceCrop(box,ar){
  const x0=+box[0]||0,y0=+box[1]||0,x1=+box[2]||1,y1=+box[3]||.3;
  const a=ar>0?ar:1;
  const hw=Math.max(.04,(x1-x0)*a),hh=Math.max(.04,y1-y0);
  const cx=((x0+x1)/2)*a,cy=(y0+y1)/2;
  let side=Math.max(hw,hh)*1.55;
  side=Math.max(side,.16);
  let x=cx-side/2,y=cy-side/2;
  if(x<0)x=0;if(y<0)y=0;
  if(x+side>a)x=Math.max(0,a-side);
  if(y+side>1)y=Math.max(0,1-side);
  return {fx:+(x/a).toFixed(4),fy:+y.toFixed(4),sx:+(side/a).toFixed(4),sy:+side.toFixed(4)};
}
function faceMarkup(f){
  const key=faceKey(f.key||f.profile?.key);
  const art=FACE_ART[key]||(f.profile?.family&&FACE_ART[f.profile.family])||null;
  const src=art?art.src:(f.portrait||'');
  const c=art?faceCrop(art.box,art.ar):{fx:.25,fy:0,sx:.5,sy:.35};
  return `<span class="call-face" style="--fx:${c.fx};--fy:${c.fy};--sx:${c.sx};--sy:${c.sy}"><img src="${esc(src)}" alt="${esc(f.name||'')}" draggable="false"></span>`;
}

function familyOf(key){return (window.SKILL_KITS?.[key]||RecruitRun.get(key)||{}).family||key;}

function formEntry(key){return FORMS[key]||{learn:[],start:null,style:'ranged'};}

window.SkillPool={
 skills:SKILLS,
 forms:FORMS,
 artNotes:ART_NOTES,
 maxSlots:MAX_SLOTS,
 byId,

 natures(key){return Catalog.natures(key);},
 canLearn(key,skill){return Catalog.canLearn(key,skill);},
 learnableSkills(key){return Catalog.learnableSkills(key);},
 startId(key){return Catalog.startId(key);},
 style(key){return formEntry(key).style||'ranged';},
 isMelee(key){return this.style(key)==='melee';},
 owned(){return Object.entries(s?.pool||{}).filter(([,lv])=>lv>0).map(([id,level])=>({skill:byId[id],level})).filter(x=>x.skill);},
 slotCount(){return this.owned().length;},
 kitOf(skill){return Catalog.kitOf(skill);},
 clipOf(skill){
  if(!skill.sourceKey||!skill.slot||!window.SkillMotion)return null;
  try{
   const clip={...SkillMotion.clip(skill.sourceKey,skill.slot)};
   delete clip.caster;
   return clip;
  }catch{return null;}
 },
 iconOf(skill){return Catalog.iconOf(skill)||this.clipOf(skill)?.file||Catalog.assetPath('assets/pickup-scroll-existing.png');},
 async ensureSkill(skill){
  const clip=this.clipOf(skill);
  if(!clip)return;
  await SkillArt.image(clip.file);
  if(clip.impact)await SkillArt.image(clip.impact.file);
 },
 clipReady(skill){
  const clip=this.clipOf(skill);
  return !clip||SkillArt.cache.has(clip.file);
 },
 affinity(skill){
  if(!skill||skill.gate==='中性')return 1;
  return this.natures(s.mainKey).includes(skill.gate)?1.2:1;
 },
 elementsEquipped(){
  const set=new Set(this.owned().map(x=>x.skill.element));
  const ult=Growth.main()?.kit?.ultimate?.element;
  if(ult)set.add(ult);
  return set;
 },
 resonate(element,x,y,damage){
  const have=this.elementsEquipped();
  const windFire=(element==='火'||element==='fire')&&have.has('风')||(element==='风'||element==='wind')&&have.has('火');
  const waterShock=(element==='雷'||element==='lightning')&&(have.has('水')||have.has('water'));
  if(windFire&&s.zones.length<55)addDamageZone(x,y-24,damage*.22,'fire',.6,55);
  else if(waterShock){
   const e=Growth.nearestEnemy(s.p,80);
   if(e&&e!==s.boss)e.slow=Math.max(e.slow||0,1.5);
   if(s.zones.length<55)addDamageZone(x,y-24,damage*.18,'lightning',.45,44);
  }
 },

 bootRun(){
  if(!s)return;
  s.pool=s.pool&&typeof s.pool==='object'?s.pool:{};
  s.poolCd=s.poolCd||{};
  const start=this.startId(s.mainKey);
  if(start&&!Object.keys(s.pool).length)s.pool[start]=1;
  const skill=byId[start];
  if(skill)this.ensureSkill(skill).catch(()=>{});
  this.renderBar();
 },

 offers(){
  const key=s.mainKey,owned=s.pool||{},slots=this.slotCount();
  const cards=[];
  for(const skill of SKILLS){
   if(!this.canLearn(key,skill))continue;
   const level=owned[skill.id]||0;
   if(level>=5)continue;
   if(level===0&&slots>=MAX_SLOTS)continue;
   const next=level+1;
   cards.push({
    id:'pool:'+skill.id,poolId:skill.id,max:5,name:skill.name,short:skill.short,gate:skill.gate,
    text:()=> (level?('升级至 Lv.'+next+' / '):'习得 / ')+skill.gate+' · '+skill.text+(next===5?' · 满级强化':next>=3?' · 追加余波':''),
    icon:this.iconOf(skill),current:level
   });
   this.ensureSkill(skill).catch(()=>{});
  }
  if((s.ultimate||1)<3){
   const u=Growth.main();
   cards.push({id:'ultimate',name:'奥义强化',max:3,text:()=>Growth.ultimateText(),icon:SkillArt.icon(u,'ultimate'),current:s.ultimate||1});
  }
  const passives=upgradeDefinitions.filter(u=>!['ras','clone','ultimate'].includes(u.id)&&!String(u.id).startsWith('reserve')&&s[u.id]<u.max);
  const reserves=upgradeDefinitions.filter(u=>String(u.id).startsWith('reserve'));
  const poolNew=cards.filter(c=>c.poolId&&!(owned[c.poolId]));
  const poolUp=cards.filter(c=>c.poolId&&owned[c.poolId]);
  const pick=list=>{
   if(!list.length)return null;
   const i=Math.floor(Math.random()*list.length);
   return list.splice(i,1)[0];
  };
  const chosen=[];
  const preferNew=slots<2||(s.upgradeCount||0)%3===0;
  if(preferNew&&poolNew.length)chosen.push(pick(poolNew));
  else if(poolUp.length)chosen.push(pick(poolUp));
  const rest=[...poolNew,...poolUp,...cards.filter(c=>!c.poolId),...passives];
  while(chosen.length<3&&rest.length){
   const n=pick(rest);
   if(n&&!chosen.some(c=>c.id===n.id))chosen.push(n);
  }
  while(chosen.length<3&&reserves.length)chosen.push(pick(reserves));
  return chosen.slice(0,3);
 },

 apply(card){
  if(!card)return;
  if(card.poolId){
   s.pool=s.pool||{};
   s.pool[card.poolId]=Math.min(5,(s.pool[card.poolId]||0)+1);
   this.ensureSkill(byId[card.poolId]).catch(()=>{});
   return;
  }
  if(card.id==='ultimate'){if(s.ultimate<3)s.ultimate++;return;}
  if(card.id&&s[card.id]<card.max)s[card.id]++;
 },

 meleeBasic(damage){
  const e=Growth.nearestEnemy(s.p,BASIC_MELEE_RANGE);
  if(!e)return false;
  const meta=spriteMeta[s.form],atk=meta?.animations?.attack;
  const duration=atk?Math.min(.36,atk.count*(atk.ms||80)/1000):.28;
  s.p.facing=e.x>=s.p.x?1:-1;
  s.p.action={name:atk?'attack':'cast',age:0,duration};
  const x=s.p.x+s.p.facing*28,y=s.p.y-18;
  if(s.zones.length<64)addDamageZone(x,y,damage,'impact',.22,32);
  effect(x,y,22,'break',.22);
  s.cast=.16;
  return true;
 },

 damageFor(skill,level){
  const kit=this.kitOf(skill)||{damage:20};
  const boost=1+(s.power||0)*.12,team=1+(s.teamPower||0)*.1+(s.reserve||0)*.02;
  return (kit.damage||20)*(Growth.main()?.personal||1)*boost*team*Catalog.damageScale(level)*this.affinity(skill);
 },

 tryCast(skill,level,target){
  if(!skill||state!=='play'||!s?.p||s.p.hp<=0)return false;
  if(skill.special==='clones')return this.castClones(level);
  if(skill.kind==='shot'||skill.kind==='zone'||skill.shot)return this.castSimple(skill,level,target);
  return this.castArt(skill,level,target);
 },

 castClones(level){
  startCast(s.p);
  effect(s.p.x,s.p.y-20,36,'smoke',.45);
  const count=Catalog.cloneCount(level);
  const dmg=Catalog.CLONE_BASE_DAMAGE*(Growth.main()?.personal||1)*(1+(s.power||0)*.12)*(1+(s.teamPower||0)*.1);
  if(typeof updateClones==='function')updateClones(0,dmg*Catalog.cloneDamageMul(level),TeamSeven.cooldown?.()||1);
  else{
   for(let i=0;i<count&&s.summons.length<6;i++){
    s.summons.push({x:s.p.x+(i%2?24:-24),y:s.p.y+10+i*6,facing:s.p.facing,moving:false,action:null,atk:.2,life:Catalog.cloneLife(level)});
   }
  }
  s.cast=1;
  return true;
 },

 castSimple(skill,level,target){
  const kit=this.kitOf(skill)||{};
  const range=kit.range||400;
  const targets=Growth.enemies().filter(e=>e.hp>0&&dist(e,s.p)<range).sort((a,b)=>dist(a,s.p)-dist(b,s.p));
  const e=target?.hp>0?target:targets[0];
  if(!e)return false;
  startCast(s.p);
  s.p.facing=e.x>=s.p.x?1:-1;
  const damage=this.damageFor(skill,level);
  const count=Math.min(4,Catalog.waveCount(level));
  if(skill.kind==='zone'||skill.shot==='lightning'||skill.shot==='tag'){
   for(let j=0;j<Math.min(count,targets.length||1);j++){
    const t=targets[j]||e,radius=Catalog.zoneRadius(kit,level);
    if(s.zones.length<60)addDamageZone(t.x,t.y-24,damage*.5,kit.element||'impact',kit.duration||.75,radius);
    if((kit.element==='lightning'||skill.shot==='lightning')&&j===0)this.resonate('雷',t.x,t.y,damage);
   }
  }else{
   if(s.shots.length>=175)return false;
   for(let j=0;j<count;j++){
    const t=targets[j%targets.length]||e;
    const angle=Math.atan2(t.y-24-s.p.y,t.x-s.p.x)+(j%2?.10:-.10)*Math.floor(j/2);
    const speed=skill.shot==='kunai'?440:skill.shot==='wind'?360:320;
    const element=kit.element||(skill.shot==='wind'?'wind':'shuriken');
    s.shots.push({x:s.p.x,y:s.p.y-25,px:s.p.x,py:s.p.y-25,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,life:2.5,damage,r:element==='wind'?17:element==='shuriken'?7:11,kind:skill.shot==='wind'?'wind':'shuriken',element,angle,track:skill.shot==='kunai'?t:null});
   }
   this.resonate(skill.element,e.x,e.y,damage);
  }
  s.cast=.18;
  return true;
 },

 castArt(skill,level,target){
  const a=s.p,kit=this.kitOf(skill);
  if(!kit)return this.castSimple(skill,level,target);
  if(!this.clipReady(skill)){this.ensureSkill(skill).catch(()=>{});return false;}
  const clip=this.clipOf(skill);
  if(!clip)return this.castSimple(skill,level,target);
  const range=kit.range||400;
  let e=target?.hp>0?target:Growth.nearestEnemy(a,range);
  const needTarget=!kit.noDamage&&!kit.healFraction&&kit.kind!=='aura';
  if(needTarget&&(!e||dist(a,e)>range))return false;
  if(!e&&(kit.kind==='aura'||kit.healFraction))e={x:a.x+a.facing*40,y:a.y,hp:1,r:8};
  if(e&&e.x!=null)a.facing=e.x>=a.x?1:-1;
  startCast(a);
  const isMain=true,l=level||1;
  const boost=1+(s.power||0)*.12,team=1+(s.teamPower||0)*.1+(s.reserve||0)*.02;
  const summon=kit.kind==='summon'||skill.kind==='summon';
  const melee=kit.kind==='melee'||skill.kind==='melee';
  const natural=clip.frame_times_ms?.reduce((n,x)=>n+x,0)/1000||clip.frames/(clip.fps||12);
  const duration=Math.max(kit.duration&&kit.kind!=='summon'?kit.duration:.45,Math.min(3.6,natural||.6));
  const radius=Catalog.artRadius(kit,l);
  let x=summon||melee||skill.kind==='aura'||kit.kind==='aura'?a.x:e.x;
  let y=summon||melee||skill.kind==='aura'||kit.kind==='aura'?a.y:e.y;
  if(melee)x+=a.facing*30;
  const damage=this.damageFor(skill,l);
  const u={key:'__pool__',kit:{[skill.slot||'primary']:kit},personal:Growth.main()?.personal||1};
  const q={actor:a,unit:u,slot:skill.slot||'primary',kit,clip,age:0,duration,x,y,damageX:e.x,damageY:e.y,fromX:a.x,fromY:a.y,target:e,facing:a.facing,composite:false,radius,damageEnd:duration*(clip.damageWindow?.[1]??.88),nextPulse:duration*(clip.damageWindow?.[0]??.15),damage,level:l,travel:kit.kind==='projectile'?.28:0,sharedMotion:window.SKILL_MOTION_DATA?.[skill.sourceKey+':'+(skill.slot||'primary')]||null,poolSkill:skill};
  if(clip.damageOffset){q.damageX=a.x+a.facing*clip.damageOffset[0];q.damageY=a.y+clip.damageOffset[1];}
  SkillArt.active.push(q);
  if(isMain&&l>=3&&!summon&&!kit.noEcho){
   SkillArt.active.push({...q,age:-duration-.16,damage:q.damage*.6});
   if(l>=5)SkillArt.active.push({...q,age:-duration*2-.32,damage:q.damage*.4});
  }
  if(SkillArt.active.length>32)SkillArt.active.shift();
  SkillArt.metrics.casts++;
  if(kit.healFraction){const max=mainMaxHp();a.hp=Math.min(max,a.hp+max*kit.healFraction);}
  for(const active of SkillArt.active)if(active===q||active.poolSkill===skill&&active.age<0){
   if(active.sharedMotion){active.motion=active.sharedMotion;active.released=false;if(typeof SkillMotion.sync==='function')SkillMotion.sync(active);}
   else SkillMotion.init(active);
  }
  if(summon)updateClones?.(0,40*boost*team,TeamSeven.cooldown?.()||1);
  this.resonate(skill.element,e.x,e.y,damage);
  q.linkEligible=true;
  s.cast=1;
  return true;
 },

 tickPool(dt){
  if(state!=='play'||s.skillLab||!s.pool)return;
  const cdScale=(1-(s.haste||0)*.07);
  const targets=Growth.enemies().filter(e=>e.hp>0);
  if(!targets.length)return;
  for(const {skill,level} of this.owned()){
   const kit=this.kitOf(skill)||{cd:3};
   s.poolCd[skill.id]=(s.poolCd[skill.id]??(kit.cd||3)*.4)-dt;
   if(s.poolCd[skill.id]>0)continue;
   const e=Growth.nearestEnemy(s.p,kit.range||400);
   if(this.tryCast(skill,level,e))s.poolCd[skill.id]=(kit.cd||3)*cdScale;
   else s.poolCd[skill.id]=.12;
  }
 },

 /* ---- ally call bar ---- */
 allyCd(a){return a?.profile?.kit?.ultimate?.cd||45;},
 comboDefs(){
  const links=(window.SquadLinks?.definitions||[]).map(d=>({id:d.id,name:d.name,families:d.families,icon:d.icon,kind:"link"}));
  const team7={id:"team_seven",name:"第七班",families:[["naruto"],TEAM7_FAMILIES],icon:"assets/shippuden-portrait.png",kind:"team7",placeholder:true};
  return [team7,...links];
 },
 presentFamilies(){
  const set=new Set();
  const main=RecruitRun.get(s.mainKey);
  if(main)set.add(main.family);
  for(const a of s.allies||[])if(a.profile?.family)set.add(a.profile.family);
  return set;
 },
 comboReady(def){
  const have=this.presentFamilies();
  if(def.kind==='team7'){
   const main=RecruitRun.get(s.mainKey);
   if(main?.family!=='naruto')return false;
   return TEAM7_FAMILIES.filter(f=>(s.allies||[]).some(a=>a.profile?.family===f)).length>=2;
  }
  return def.families.every(group=>group.some(f=>have.has(f)));
 },
 comboAllies(def){
  if(def.kind==='team7')return (s.allies||[]).filter(a=>TEAM7_FAMILIES.includes(a.profile?.family));
  const groups=def.families;
  return (s.allies||[]).filter(a=>{
   const fam=a.profile?.family;
   return groups.some(g=>g.includes(fam));
  });
 },
 comboFaces(btn){
  const faces=(btn.allies||[]).map(a=>({key:a.profile?.key||a.id,name:a.name||a.profile?.name,profile:a.profile,portrait:SkillArt.portrait(a.profile)}));
  if(btn.combo?.kind==='team7'){
   const main=RecruitRun.get(s.mainKey);
   if(main?.family==='naruto'&&!faces.some(f=>f.key===main.key))faces.unshift({key:main.key,name:main.name,profile:main,portrait:SkillArt.portrait(main)});
  }
  return faces;
 },
 buttons(){
  const used=new Set();
  const list=[];
  for(const def of this.comboDefs()){
   if(!this.comboReady(def))continue;
   const allies=this.comboAllies(def);
   if(def.kind!=='team7'&&!allies.length)continue;
   if(def.kind==='team7'&&allies.length<2)continue;
   if(allies.some(a=>used.has(a.id)))continue;
   allies.forEach(a=>used.add(a.id));
   const cd=Math.max(...allies.map(a=>this.allyCd(a)),1)*1.1;
   list.push({id:'combo:'+def.id,combo:def,allies,name:def.name,cd});
  }
  for(const a of s.allies||[]){
   if(used.has(a.id))continue;
   list.push({id:'ally:'+a.id,ally:a,allies:[a],name:a.profile?.kit?.ultimate?.name||'奥义',cd:this.allyCd(a)});
  }
  return list.slice(0,3);
 },
 chargeOf(btn){
  s.callCd=s.callCd||{};
  if(s.callCd[btn.id]==null)s.callCd[btn.id]=btn.cd*.5;
  return s.callCd[btn.id];
 },
 ready(btn){return this.chargeOf(btn)<=0;},

 castUnitUltimate(unit,delay){
  const run=()=>{
   if(state!=='play'||!s?.p||s.p.hp<=0||!unit)return;
   const e=Growth.nearestEnemy(s.p,unit.kit?.ultimate?.range||520);
   if(unit.key===window.OriginalNinja?.key){
    try{OriginalNinja.cast(s.p,unit,'ultimate',1,e);}catch{if(e)addDamageZone(e.x,e.y-24,80,'impact',.8,70);}
    return;
   }
   this.castUltimateAsEffect(unit,e);
  };
  if(delay>0)setTimeout(run,delay*1000);
  else run();
 },

 castUltimateAsEffect(unit,e){
  if(!SkillArt.isReady(unit.key))return false;
  if(!SkillArt.loaded(unit.key)){SkillArt.ensure(unit.key).catch(()=>{});}
  const kit=unit.kit?.ultimate,clip=(()=>{try{const c={...SkillMotion.clip(unit.key,'ultimate')};delete c.caster;return c;}catch{return null;}})();
  if(!kit)return false;
  const a=s.p;
  if(e&&e.x!=null)a.facing=e.x>=a.x?1:-1;
  startCast(a);
  if(!clip){
   if(e)addDamageZone(e.x,e.y-24,kit.damage||70,'impact',.8,kit.radius||70);
   return true;
  }
  const natural=clip.frame_times_ms?.reduce((n,x)=>n+x,0)/1000||clip.frames/(clip.fps||12);
  const duration=Math.max(kit.duration||.6,Math.min(3.6,natural||.8));
  const target=e||{x:a.x+a.facing*40,y:a.y,hp:1,r:8};
  const q={actor:a,unit:{key:'__pool__',kit:{ultimate:kit},personal:unit.personal||1},slot:'ultimate',kit,clip,age:0,duration,x:clip.renderMode==='actor_composite'||kit.kind==='melee'||kit.kind==='transform'?a.x:target.x,y:clip.renderMode==='actor_composite'||kit.kind==='melee'||kit.kind==='transform'?a.y:target.y,damageX:target.x,damageY:target.y,fromX:a.x,fromY:a.y,target,facing:a.facing,composite:false,radius:(kit.radius||70),damageEnd:duration*(clip.damageWindow?.[1]??.88),nextPulse:duration*(clip.damageWindow?.[0]??.15),damage:(kit.damage||70)*(unit.personal||1)*(1+(s.power||0)*.12)*(1+(s.teamPower||0)*.1),level:1,travel:kit.kind==='projectile'?.28:0,sharedMotion:window.SKILL_MOTION_DATA?.[unit.key+':ultimate']||null};
  SkillArt.active.push(q);
  if(SkillArt.active.length>32)SkillArt.active.shift();
  SkillArt.metrics.casts++;
  if(q.sharedMotion){q.motion=q.sharedMotion;q.released=false;if(typeof SkillMotion.sync==='function')SkillMotion.sync(q);}
  else SkillMotion.init(q);
  s.cast=1;
  return true;
 },

 fireButton(btn){
  if(!btn||!this.ready(btn)||state!=='play')return false;
  if(btn.combo){
   const allies=btn.allies;
   allies.forEach((a,i)=>this.castUnitUltimate(a.profile,i*.42));
   if(btn.combo.kind==='link'){
    const e=Growth.nearestEnemy(s.p,480);
    if(e){try{SquadLinks.onUltimate(s.p,Growth.main(),e);}catch{/* keep sequential ultimates */}}
   }
   floating(s.p.x,s.p.y-80,btn.name,'#bce8e3');
  }else{
   this.castUnitUltimate(btn.ally.profile,0);
   floating(s.p.x,s.p.y-80,btn.name,'#f2ddaa');
  }
  s.callCd[btn.id]=btn.cd;
  this.renderBar();
  return true;
 },

 tickCalls(dt){
  if(!s)return;
  s.callCd=s.callCd||{};
  const buttons=this.buttons();
  const live=new Set(buttons.map(b=>b.id));
  for(const btn of buttons){
   if(s.callCd[btn.id]==null)s.callCd[btn.id]=btn.cd*.5;
   s.callCd[btn.id]=Math.max(0,s.callCd[btn.id]-dt);
  }
  for(const id of Object.keys(s.callCd))if(!live.has(id))delete s.callCd[id];
  if(window.AutoBattle?.active()){
   for(const btn of buttons)if(this.ready(btn)){this.fireButton(btn);break;}
  }
  this.renderBar();
 },

 renderBar(){
  let el=$('callBar');
  if(!el){
   const shell=$('shell');
   if(!shell)return;
   el=document.createElement('div');
   el.id='callBar';
   el.className='call-bar';
   shell.appendChild(el);
   el.addEventListener('click',e=>{
    const b=e.target.closest('[data-call]');
    if(!b)return;
    const btn=this.buttons().find(x=>x.id===b.dataset.call);
    if(btn)this.fireButton(btn);
   });
  }
  if(state!=='play'&&state!=='paused'){el.hidden=true;return;}
  const buttons=this.buttons();
  if(!buttons.length){el.hidden=true;el.innerHTML='';return;}
  el.hidden=false;
  // v703: this runs every tick. Rebuilding the buttons each frame swapped the node under a finger
  // mid-tap, so taps on partner calls were lost; when the same buttons stay, update them in place.
  const sig=buttons.map(btn=>btn.id+'|'+btn.name+'|'+this.comboFaces(btn).map(faceMarkup).join('')).join('\n');
  if(el.dataset.sig===sig&&el.children.length===buttons.length){
   buttons.forEach((btn,i)=>{
    const b=el.children[i],remain=this.chargeOf(btn),ready=remain<=0,frac=ready?0:Math.max(0,Math.min(1,remain/btn.cd));
    const cdLabel=ready?'就绪':Math.ceil(remain)+'秒';
    b.className='call-btn'+(ready?' ready':'')+(btn.combo?' combo':'');
    b.style.setProperty('--cd',frac);b.disabled=!ready;b.removeAttribute('aria-disabled');
    b.setAttribute('aria-label',btn.name+' '+cdLabel);
    const cd=b.querySelector('.call-cd');if(cd&&cd.textContent!==cdLabel)cd.textContent=cdLabel;
   });
   return;
  }
  el.dataset.sig=sig;
  el.innerHTML=buttons.map(btn=>{
   const remain=this.chargeOf(btn),ready=remain<=0,frac=ready?0:Math.max(0,Math.min(1,remain/btn.cd));
   const faces=this.comboFaces(btn);
   const n=Math.min(4,faces.length);
   const portraits=faces.map(faceMarkup).join('');
   const label=esc(btn.name);
   const cdLabel=ready?'就绪':Math.ceil(remain)+'秒';
   return `<button type="button" class="call-btn${ready?' ready':''}${btn.combo?' combo':''}" data-call="${esc(btn.id)}" style="--cd:${frac}" ${ready?'':'disabled'} aria-label="${label} ${cdLabel}">
     <div class="call-faces n${n}">${portraits}</div>
     <span class="call-name">${label}</span>
     <small class="call-cd">${cdLabel}</small>
    </button>`;
  }).join('');
 },

 /* ---- lobby catalog ---- */
 renderCatalog(filter){
  const hub=window.HubUI;
  if(!hub)return;
  hub.title('忍术');
  const key=NATURE_ORDER.includes(filter)?filter:'all';
  const nav=`<div class="hub-filter-row pool-nature-nav"><button data-jutsu-tab="all" class="${key==='all'?'active':''}">全部</button>${NATURE_ORDER.map(n=>`<button data-jutsu-tab="${n}" class="${n===key?'active':''}"><img src="${NATURE_SRC(n)}" alt="">${n}</button>`).join('')}</div>`;
  const units=(typeof RecruitRun.mainOptions==='function'?RecruitRun.mainOptions():RecruitRun.units)||[];
  const groups=key==='all'?NATURE_ORDER:[key];
  const body=groups.map(n=>{
   const list=SKILLS.filter(x=>x.gate===n);
   if(!list.length)return `<section class="pool-group"><header><img src="${NATURE_SRC(n)}" alt=""><h3>${n}</h3><small>暂无专属忍术</small></header>${n==='阳'?'<p class="hub-copy">阳属性忍者仍可学习全部中性忍术。</p>':''}</section>`;
   const cards=list.map(skill=>{
    const learners=units.filter(u=>this.canLearn(u.key,skill));
    const names=learners.slice(0,8).map(u=>u.name).join('、')+(learners.length>8?' 等'+learners.length+'人':'');
    const kit=this.kitOf(skill);
    return `<article class="pool-card" data-skill="${esc(skill.id)}">
      <img class="pool-art" src="${esc(this.iconOf(skill))}" alt="">
      <div><small>${esc(skill.gate)} · Lv.1–5</small><b>${esc(skill.name)}</b>
      <p>${esc(skill.text)}</p>
      <p class="pool-learners">${learners.length?('可学：'+esc(names)):'当前出战名单中暂无可学忍者'}</p>
      ${kit?.cd?`<small>冷却 ${kit.cd} 秒 · 伤害 ${kit.damage||'—'} · 范围 ${kit.range||kit.radius||'—'}</small>`:''}
      </div></article>`;
   }).join('');
   return `<section class="pool-group"><header><img src="${NATURE_SRC(n)}" alt=""><h3>${n}</h3><small>${list.length} 招</small></header><div class="pool-grid">${cards}</div></section>`;
  }).join('');
  const note=`<p class="hub-section-caption">局内最多携带 6 个通用忍术。每位忍者只能学习与自身查克拉性质相符的忍术，以及全部中性忍术。定位为「全」的忍者可学习所有性质。专属奥义按形态保留，不在此图鉴中。</p>`;
  hub.el('hubPageBody').innerHTML=nav+body+note;
 },

 hook(){
  if(this._hooked)return;
  this._hooked=true;
  for(const skill of SKILLS){
   if(!skill.kit&&skill.sourceKey){
    const src=window.SKILL_KITS?.[skill.sourceKey]?.kit?.[skill.slot];
    if(src)skill.kit={...src,name:skill.name};
   }
  }

  const origInit=SkillMotion.init.bind(SkillMotion);
  SkillMotion.init=function(q){
   if(q.sharedMotion){
    q.motion=q.sharedMotion;
    q.released=false;
    if(typeof this.sync==='function')this.sync(q);
    return;
   }
   return origInit(q);
  };

  const origIdle=idleState;
  idleState=function(){
   const run=origIdle();
   const start=SkillPool.startId(run.mainKey);
   run.pool=start?{[start]:1}:{};
   run.poolCd={};
   run.callCd={};
   return run;
  };

  const origFire=fire;
  fire=function(x,y,damage,kind='shuriken'){
   if(kind==='shuriken'&&s&&SkillPool.isMelee(s.mainKey))return SkillPool.meleeBasic(damage>0?damage*(BASIC_MELEE_DAMAGE/18):BASIC_MELEE_DAMAGE);
   if(kind==='shuriken'&&damage)damage=damage*(BASIC_RANGED_DAMAGE/18);
   return origFire(x,y,damage,kind);
  };

  Growth.castPrimary=function(){return false;};
  Growth.castSecondary=function(){return false;};

  getSkillOffers=function(){return (SkillPool.lastOffers=SkillPool.offers());};
  const prevRecruitOffers=RecruitRun.offers.bind(RecruitRun);
  RecruitRun.offers=function(){return (SkillPool.lastOffers=prevRecruitOffers());};

  const nativeUpgrade=upgrade;
  upgrade=function(force){
   nativeUpgrade(force);
   if(state!=='upgrade')return;
   /* v0.66：技能选择去掉说明文字，卡面描述 ≤12 字（Catalog.short / 定义里的 short），新习得加「新」印章。 */
   document.querySelectorAll('.upgrade-instruction,.upgrade-pause-note').forEach(x=>x.remove());
   const ribbon=document.querySelector('.choice-screen .upgrade-ribbon');
   if(ribbon&&!ribbon.querySelector('small'))ribbon.insertAdjacentHTML('beforeend','<small>Lv.'+s.level+'</small>');
   const EL={'火':'#F0663A','风':'#4FC6A0','雷':'#F2CF4A','土':'#C8955A','水':'#4A9BEA','阴':'#8F7BE0','阳':'#F6E7B0'};
   const clip=t=>{t=String(t||'').replace(/<[^>]*>/g,'').replace(/^(主控主动|主控被动|通用被动|习得|升级至 Lv\.\d) \/ /,'').split(/[，。；]/)[0];return t.length>12?t.slice(0,12):t;};
   document.querySelectorAll('[data-upgrade]').forEach(button=>{
    const id=button.dataset.upgrade,desc=button.querySelector('.choice-description');
    const offer=(SkillPool.lastOffers||[]).find(o=>o.id===id)||upgradeDefinitions.find(u=>u.id===id);
    if(desc){
     if(id.startsWith('recruit:')){const nat=desc.querySelector('.choice-natures');desc.innerHTML=nat?nat.outerHTML:'招募同伴';}
     else if(id.startsWith('link:'))desc.textContent=clip(desc.textContent);
     else{const sk=id.startsWith('pool:')?byId[id.slice(5)]:null;desc.textContent=sk?.short||(typeof offer?.short==='function'?offer.short():offer?.short)||(id==='ultimate'?'奥义威力与范围提升':clip(desc.textContent));}
    }
    if(id&&id.startsWith('pool:')){
     const sk=byId[id.slice(5)];if(sk&&EL[sk.gate])button.style.setProperty('--el',EL[sk.gate]);
     const level=s.pool?.[id.slice(5)]||0,max=5,next=Math.min(max,level+1);
     const em=button.querySelector('em');
     if(em)em.textContent=level?'Lv.'+level+' → Lv.'+next:'新习得 → Lv.1';
     if(!level){button.classList.add('is-new');button.insertAdjacentHTML('afterbegin','<span class="choice-new" aria-label="新">新</span>');}
     const stars=button.querySelector('.choice-stars');
     if(stars)stars.innerHTML=Array.from({length:max},(_,i)=>'<i class="'+(i<next?'on':'')+'">★</i>').join('');
     const tag=button.querySelector('.choice-tag');
     if(tag)tag.textContent='通用忍术';
    }
    if(id==='ultimate'){
     const tag=button.querySelector('.choice-tag');
     if(tag)tag.textContent='专属奥义';
    }
    button.onclick=async()=>{
     const pick=button.dataset.upgrade;
     if(pick.startsWith('recruit:')){
      button.disabled=true;
      try{await SkillArt.ensure(pick.slice(8));}catch{button.disabled=false;toast('素材加载失败，请重试');return;}
      if(state!=='upgrade')return;
      RecruitRun.add(pick.slice(8));
     }else if(pick.startsWith('link:')){
      SquadLinks.learn(pick.slice(5));
     }else if(pick.startsWith('pool:')){
      SkillPool.apply({id:pick,poolId:pick.slice(5),max:5});
     }else{
      const def=upgradeDefinitions.find(u=>u.id===pick)||{id:pick,max:5};
      SkillPool.apply(def);
      if(pick==='ultimate')toast('机制强化 · 奥义 Lv.'+s.ultimate);
      if(pick==='teamVital'){/* native already handled in previous path; re-run safe fill */}
     }
     state='play';
     $('modal').classList.remove('choice-screen','squad-pause','beast-hatch');
     $('modal').hidden=true;
     updateHud();
     SkillPool.renderBar();
     if(s.xp>=s.need)gainLevel();
    };
   });
  };

  const origIcon=upgradeIcon;
  upgradeIcon=function(o){
   if(o.poolId||(o.id&&String(o.id).startsWith('pool:')))return SkillPool.iconOf(byId[o.poolId||o.id.slice(5)]||{})||origIcon(o);
   return origIcon(o);
  };

  const origStrip=equippedStrip;
  equippedStrip=function(){
   try{
    const u=RecruitRun.get(s.mainKey)||RecruitRun.get(RecruitRun.mainKey);
    const escName=HubUI?.esc||esc;
    const slot=(id,name,icon,badge,empty=false,mark='＋',extra='')=>`<button type="button" aria-haspopup="dialog" class="equipped-slot ${empty?'empty':''} ${extra}" data-build-slot="${id}" aria-label="${escName(name)}" title="${escName(name)}">${!empty&&icon?`<img src="${icon}" alt="">`:`<i>${mark}</i>`}${!empty&&badge!==''&&badge!=null?`<small>${badge}</small>`:''}</button>`;
    const owned=SkillPool.owned();
    const mainPassive=(SkillLab.kit(u)||[])[0]||{name:'固有被动'};
    const ultName=SkillLab.ultimates?.[u.key]||u.kit?.ultimate?.name||'奥义';
    const jutsu=slot('main-passive',mainPassive.name,SkillArt.portrait(u),'被')+slot('main-ultimate',ultName,SkillArt.icon(u,'ultimate'),s.ultimate||1,false,'奥','ultimate-slot');
    const pool=Array.from({length:MAX_SLOTS},(_,i)=>{
      const x=owned[i];
      return x?slot('pool-'+x.skill.id,x.skill.name,SkillPool.iconOf(x.skill),x.level):slot('pool-empty-'+i,'空槽','','',true);
    }).join('');
    const passives=[
      {id:'passive-cooldown',name:'通用被动 · 冷却缩减',icon:'assets/ui-leaf.png',badge:s.haste,empty:!s.haste},
      {id:'passive-damage',name:'通用被动 · 协同增伤（含持续修行）',icon:'assets/pickup-scroll-existing.png',badge:s.teamPower+s.reserve,empty:!(s.teamPower+s.reserve)},
      {id:'passive-vitality',name:'通用被动 · 生命防护（含坚守阵线）',icon:'assets/hub-modern/trial.svg',badge:s.teamVital+s.reserveGuard,empty:!(s.teamVital+s.reserveGuard)},
      {id:'passive-recovery',name:'通用被动 · 全队恢复',icon:'assets/pickup-pill-existing.png',badge:s.reserveRegen,empty:!s.reserveRegen},
      {id:'summon',name:s.summonSkill?.name||'通灵兽 · 未携带',icon:s.summonSkill?.icon||null,badge:s.summonSkill?.level||'',empty:!s.summonSkill,mark:'灵'}
    ].map(x=>slot(x.id,x.name,x.icon,x.badge,!!x.empty,x.mark||'＋')).join('');
    return `<div class="build-group jutsu-group"><span class="build-group-label">固有</span><div class="build-slots">${jutsu}</div></div><div class="build-group pool-build"><span class="build-group-label">忍术 <small>${owned.length}/${MAX_SLOTS}</small></span><div class="build-slots">${pool}</div></div><div class="build-group passive-group"><span class="build-group-label">被动</span><div class="build-slots">${passives}</div></div>`;
   }catch(err){return origStrip();}
  };

  const origTick=tick;
  tick=function(dt){
   origTick(dt);
   if(state==='play'&&!s.skillLab){
    SkillPool.tickPool(dt);
    SkillPool.tickCalls(dt);
   }
  };

  RecruitRun.add=function(key){
   const u=this.get(key);
   if(!u||!SkillArt.isReady(key)||s.allies.length>=3||!this.candidates().some(x=>x.key===key))return false;
   SkillArt.ensure(key).catch(()=>{});
   const cd=u.kit?.ultimate?.cd||45;
   const a={id:u.key,name:u.name,level:s.level,ultimateCd:cd*.5,baseHp:u.hp,hp:u.hp,sprite:u.sprite,profile:u,skillLevels:Object.freeze({...u.skills}),x:-9999,y:-9999,facing:1,moving:false,inv:0,down:0,atk:99,jutsu:99,secondary:99,action:null,grave:null,callOnly:true};
   s.allies.push(a);
   if(u.releaseComplete===false)s.debugUsed=true;
   UltimateCue?.preload?.(u);
   SquadLinks.sync();
   toast(u.name+' 加入呼叫 / 支援 '+s.allies.length+'/3');
   SkillPool.renderBar();
   return true;
  };

  TeamSeven.living=function(){return [s.p].filter(a=>a&&a.hp>0);};
  const origTeamUpdate=TeamSeven.update.bind(TeamSeven);
  TeamSeven.update=function(dt){
   this.updateSupportClones?.(dt);
  };
  TeamSeven.draw=function(){};
  TeamSeven.drawGrave=function(){};
  TeamSeven.drawGraveLabels=function(){};

  if(window.HubUI){
   const orig=HubUI.renderJutsu.bind(HubUI);
   HubUI.renderJutsu=function(tab){SkillPool.renderCatalog(tab);};
  }

  const origPauseCards=TeamSeven.pauseCards.bind(TeamSeven);
  TeamSeven.pauseCards=function(){
   return (s.allies||[]).map(a=>{
    const ult=a.profile?.kit?.ultimate?.name||SkillLab.ultimates?.[a.id]||'奥义';
    const btn=SkillPool.buttons().find(b=>b.allies?.some(x=>x.id===a.id)||b.id==='ally:'+a.id);
    const remain=btn?SkillPool.chargeOf(btn): (a.ultimateCd||0);
    const ready=remain<=0;
    return `<article class="pause-ally call-only"><img src="${SkillArt.portrait(a.profile)}" alt="${a.name}"><div><div class="pause-ally-title"><strong>${a.name}</strong><span class="${ready?'ready':''}">${ready?'奥义已充能':'冷却 '+Math.ceil(remain)+' 秒'}</span></div><p><span>${ult}</span></p></div></article>`;
   }).join('');
  };
  if(window.SquadLinks){
   const origPanel=SquadLinks.panel.bind(SquadLinks);
   SquadLinks.panel=function(){
    this.sync();
    return `<section class="squad-link-panel"><h3>合体奥义 ${s.synergies.length}</h3>${this.definitions.filter(d=>d.families.some(g=>g.includes(Growth.main().family))).map(d=>`<article><b>${d.name}</b><span>${this.ready(d)?'已解锁':'未解锁'}</span><small>${d.label}</small></article>`).join('')}</section>`;
   };
  }
  const origHud=updateHud;
  updateHud=function(){
   origHud();
   const el=$('waveGuide');
   if(!el||!s)return;
   const remain=s.nextWave-s.t;
   const wave=s.wavePending?'第 '+s.waveCount+' 波敌潮来袭':(Number.isFinite(remain)&&remain>0&&remain<=90?'敌潮 '+s.waveCount+' / 下波 '+format(remain):'敌潮 '+s.waveCount);
   const head=(typeof RunFlow!=='undefined'&&RunFlow.progress)?RunFlow.progress():'';
   el.textContent=(head?head+' / ':'')+wave;
  };

  const origReset=reset;
  reset=function(quick=false){
   origReset(quick);
   SkillPool.bootRun();
  };
 }
};

SkillPool.hook();
})();
