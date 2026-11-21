/* Shared skill-pool catalog used by the shell 忍术 page and the battle hub.
 * Level numbers live here so battle casts and the lobby page stay in sync. */
(function(global){
'use strict';

const ALL_NATURES=['火','风','雷','土','水','阴','阳'];
const NATURE_ORDER=['风','火','雷','土','水','阴','阳','中性'];
const NATURE_ICONS={'火':'fire.png','风':'wind.png','雷':'lightning.png','土':'earth.png','水':'water.png','阴':'yin.svg','阳':'yang.svg','全':'all.svg','中性':'all.svg'};
const MAX_SLOTS=6;
const DAMAGE_PER_LEVEL=.16;
const WAVE_AT=Object.freeze([3,5]);
const ART_RADIUS_LEVEL=2, ART_RADIUS_SCALE=1.25;
const ZONE_RADIUS_PER_LEVEL=5;
const CLONE_BASE_DAMAGE=18, CLONE_MAX_AT=5, CLONE_BASE_COUNT=2, CLONE_MAX_COUNT=3;
const CLONE_LIFE_BASE=6, CLONE_DAMAGE_BASE=.7, CLONE_DAMAGE_PER_LEVEL=.08;
const FALLBACK_ICON='assets/pickup-scroll-existing.png';

const SKILLS=[
 {id:'rasengan',name:'螺旋丸',gate:'风',element:'风',kind:'aura',sourceKey:'naruto_shippuden',slot:'primary',art:'ready',short:'查克拉球伤害周围',text:'在身前凝出查克拉球，持续伤害周围的敌人。'},
 {id:'kage_bunshin',name:'影分身之术',gate:'中性',element:'阳',kind:'summon',special:'clones',art:'smoke',short:'召唤两名分身助战',text:'召唤两名分身协同作战，分身会自行寻敌攻击。'},
 {id:'chidori',name:'千鸟',gate:'雷',element:'雷',kind:'melee',sourceKey:'sasuke',slot:'primary',art:'needs_cleanup',short:'突进雷击近身敌人',text:'向前突进，对近身敌人造成雷属性伤害。'},
 {id:'goukakyuu',name:'火遁·豪火球之术',gate:'火',element:'火',kind:'projectile',sourceKey:'sasuke',slot:'secondary',art:'ready',icon:'assets/fx-v67/gokakyu-icon.png?v=pool691',short:'火球直飞，命中爆炸',text:'喷出豪火球直线飞行，命中敌人即爆炸；升级可选连发、巨焰或烈焰。'},
 {id:'hakke_kuushou',name:'八卦空掌',gate:'中性',element:'体术',kind:'projectile',sourceKey:'neji',slot:'primary',art:'ready',short:'掌波远程打击',text:'打出查克拉掌波，远程打击前方的敌人。'},
 {id:'kaiten',name:'八卦掌·回天',gate:'中性',element:'体术',kind:'aura',sourceKey:'neji',slot:'secondary',art:'needs_cleanup',short:'旋转气罩护身',text:'在身边展开旋转气罩，持续伤害靠近的敌人。'},
 {id:'shinra_tensei',name:'神罗天征',gate:'阴',element:'阴',kind:'aura',sourceKey:'pain',slot:'primary',art:'ready',short:'斥力击退周围敌人',text:'爆发斥力冲击，伤害并击退周围的杂兵。'},
 {id:'sabaku_kyuu',name:'砂缚牢',gate:'土',element:'土',kind:'ground',sourceKey:'gaara',slot:'primary',art:'ready',short:'流砂伤害并减速',text:'在地面掀起流砂，范围伤害并减速敌人。'},
 {id:'kage_mane',name:'影子模仿术',gate:'阴',element:'阴',kind:'ground',sourceKey:'shikamaru',slot:'primary',art:'ready',short:'影子束缚敌人',text:'伸出影子，束缚地面上的敌人。'},
 {id:'shintenshin',name:'心转身之术',gate:'阴',element:'阴',kind:'ground',sourceKey:'ino',slot:'primary',art:'ready',short:'魅惑杂兵',text:'冲击一片区域，魅惑杂兵；对首领改为减速。'},
 {id:'choujuu_giga',name:'超兽伪画·狮子',gate:'阴',element:'阴',kind:'projectile',sourceKey:'sai',slot:'primary',art:'ready',short:'墨狮扑向敌人',text:'绘出墨狮扑向敌人。'},
 {id:'hien',name:'飞燕',gate:'风',element:'风',kind:'melee',sourceKey:'asuma',slot:'primary',art:'ready',short:'风刃斩击前方',text:'近身挥砍，对前方敌人造成风刃斩击。'},
 {id:'ningu_scatter',name:'忍具散射',gate:'中性',element:'忍具',kind:'projectile',sourceKey:'tenten',slot:'secondary',art:'ready',short:'忍具散射前方',text:'同时抛出多枚忍具，覆盖前方的敌人。'},
 {id:'tracking_kunai',name:'追踪苦无',gate:'中性',element:'忍具',kind:'shot',shot:'kunai',icon:'assets/shuriken.png',art:'ready',short:'追踪苦无射最近敌',text:'朝最近的敌人投出追踪苦无。',kit:{name:'追踪苦无',kind:'projectile',element:'shuriken',range:420,radius:12,damage:16,cd:2.0,duration:.4}},
 {id:'fuuton_blade',name:'风遁·风刃',gate:'风',element:'风',kind:'shot',shot:'wind',icon:'assets/rasenshuriken.png',art:'ready',short:'穿透风刃直线伤害',text:'射出穿透风刃，可连续命中一条直线上的敌人。',kit:{name:'风遁·风刃',kind:'projectile',element:'wind',range:440,radius:20,damage:21,cd:2.9,duration:.4}},
 {id:'raiton_chain',name:'雷遁·雷链',gate:'雷',element:'雷',kind:'zone',shot:'lightning',icon:'assets/lightning.png',art:'ready',short:'落雷并跳跃连锁',text:'在目标落点降下雷击，并可在附近敌人间跳跃。',kit:{name:'雷遁·雷链',kind:'zone',element:'lightning',range:400,radius:44,damage:22,cd:3.0,duration:.75}},
 {id:'exploding_tag',name:'起爆符',gate:'中性',element:'忍具',kind:'zone',shot:'tag',icon:'assets/pickup-scroll-existing.png',art:'ready',short:'起爆符延时爆炸',text:'在敌人脚下埋下起爆符，稍后爆炸。',kit:{name:'起爆符',kind:'zone',element:'impact',range:380,radius:48,damage:27,cd:4.0,duration:.9}},
 {id:'suiryuudan',name:'水遁·水龙弹之术',gate:'水',element:'水',kind:'projectile',sourceKey:'zabuza',slot:'primary',art:'ready',short:'水龙冲击前方',text:'唤出水龙，冲击前方的敌人。'},
 {id:'suirou',name:'水遁·水牢之术',gate:'水',element:'水',kind:'ground',sourceKey:'zabuza',slot:'secondary',art:'ready',short:'水牢禁锢敌人',text:'在地面形成水牢，禁锢落入其中的敌人。'},
 {id:'doton_wall',name:'土遁·土流壁',gate:'土',element:'土',kind:'ground',sourceKey:'hiruzen',slot:'secondary',art:'ready',short:'土墙冲击一片区域',text:'升起土墙冲击一片区域。土墙不阻挡移动。'},
 {id:'mokuton_forest',name:'木遁·树界降诞',gate:'土',element:'土',kind:'ground',sourceKey:'hashirama',slot:'primary',art:'ready',short:'林木伤害并束缚',text:'林木从地面生长，范围伤害并束缚敌人。'},
 {id:'katsuyu',name:'通灵·蛞蝓',gate:'中性',element:'医疗',kind:'ground',sourceKey:'tsunade',slot:'secondary',art:'ready',short:'治疗自身并施毒',text:'通灵蛞蝓覆盖地面，治疗自己并为敌人附加毒素。'},
 {id:'hiraishin',name:'飞雷神之术',gate:'中性',element:'空间',kind:'melee',sourceKey:'minato',slot:'primary',art:'ready',short:'瞬移打击敌人',text:'瞬移到敌人身边，给予一记打击。'},
 {id:'gouriki_senpuu',name:'木叶刚力旋风',gate:'中性',element:'体术',kind:'melee',sourceKey:'guy',slot:'primary',art:'ready',short:'回旋踢击退近敌',text:'回旋踢击，打击并击退近身的敌人。'},
 {id:'gatsuga',name:'牙通牙',gate:'中性',element:'体术',kind:'melee',sourceKey:'kiba',slot:'secondary',art:'ready',short:'兽影突击近敌',text:'化作兽影，突击近处的敌人。'},
 {id:'kikaichu',name:'寄坏虫攻击※',gate:'土',element:'土',kind:'projectile',sourceKey:'shino',slot:'secondary',art:'ready',short:'虫群飞向周围敌人',text:'放出虫群，飞向周围的敌人。'},
 {id:'sensatsu_suishou',name:'千杀水翔',gate:'水',element:'水',kind:'projectile',sourceKey:'haku',slot:'primary',art:'ready',short:'冰针贯穿前方',text:'射出冰针，贯穿前方的敌人。'},
 {id:'haienseki',name:'火遁·灰积烧',gate:'火',element:'火',kind:'ground',sourceKey:'asuma',slot:'secondary',art:'ready',short:'火海持续灼烧',text:'在地面点燃一片火海，持续灼烧走入的敌人。'}
];

const FORMS={
 naruto_shippuden:{learn:['风','阳'],start:'rasengan',style:'melee'},
 naruto_sage:{learn:['风','阳'],start:'rasengan',style:'melee'},
 naruto_kurama:{learn:['阳','风'],start:'rasengan',style:'melee'},
 naruto_one_tail:{learn:['阳','风'],start:'rasengan',style:'melee'},
 naruto_four_tail:{learn:['阳','风'],start:'rasengan',style:'melee'},
 sasuke:{learn:['雷','火'],start:'chidori',style:'ranged'},
 sasuke_curse:{learn:['雷','火'],start:'chidori',style:'ranged'},
 sasuke_hebi:{learn:['雷','火'],start:'chidori',style:'ranged'},
 sasuke_susanoo:{learn:['阴','雷'],start:'chidori',style:'ranged'},
 kakashi:{learn:['雷','土'],start:'raiton_chain',style:'ranged'},
 kakashi_kamui:{learn:['雷','阴'],start:'raiton_chain',style:'ranged'},
 itachi:{learn:['火','阴'],start:'goukakyuu',style:'ranged'},
 pain:{learn:['阴','火'],start:'shinra_tensei',style:'ranged'},
 konan:{learn:['风','土'],start:'fuuton_blade',style:'ranged'},
 obito:{learn:['火','阴'],start:'goukakyuu',style:'ranged'},
 deidara:{learn:['土','雷'],start:'exploding_tag',style:'ranged'},
 madara:{learn:'all',start:'goukakyuu',style:'ranged'},
 orochimaru:{learn:['阴','土'],start:'mokuton_forest',style:'melee'},
 kisame:{learn:['水','土'],start:'suiryuudan',style:'melee'},
 kakuzu:{learn:['土','雷'],start:'raiton_chain',style:'ranged'},
 gaara:{learn:['土','风'],start:'sabaku_kyuu',style:'ranged'},
 temari:{learn:['风'],start:'fuuton_blade',style:'ranged'},
 suigetsu:{learn:['水','风'],start:'suiryuudan',style:'melee'},
 jiraiya:{learn:['火','风'],start:'goukakyuu',style:'ranged'},
 jiraiya_sage:{learn:['火','阴'],start:'haienseki',style:'ranged'},
 killerbee:{learn:['雷','水'],start:'gouriki_senpuu',style:'melee'},
 killerbee_eight_tail:{learn:['阳','雷'],start:'gouriki_senpuu',style:'melee'},
 neji:{learn:['阳','土'],start:'hakke_kuushou',style:'melee'},
 hinata:{learn:['阳','火'],start:'hakke_kuushou',style:'melee'},
 lee:{learn:['阳'],start:'gouriki_senpuu',style:'melee',tight:true},
 guy:{learn:['阳','火'],start:'gouriki_senpuu',style:'melee'},
 guy_death_gate:{learn:['阳','火'],start:'gouriki_senpuu',style:'melee'},
 sasori:{learn:['土','火'],start:'ningu_scatter',style:'ranged'},
 sakura:{learn:['阳','水'],start:'gouriki_senpuu',style:'melee'},
 sakura_war:{learn:['阳','土'],start:'gouriki_senpuu',style:'melee'},
 jugo:{learn:['阳','土'],start:'gouriki_senpuu',style:'melee'},
 kaguya:{learn:'all',start:'shinra_tensei',style:'ranged'},
 shikamaru:{learn:['阴','火'],start:'kage_mane',style:'ranged'},
 ino:{learn:['阴','土'],start:'shintenshin',style:'ranged'},
 choji:{learn:['阳'],start:'gouriki_senpuu',style:'melee',tight:true},
 sai:{learn:['阴','土'],start:'choujuu_giga',style:'ranged'},
 hidan:{learn:['阴'],start:'gouriki_senpuu',style:'melee'},
 asuma:{learn:['风','火'],start:'hien',style:'melee'},
 shino:{learn:['土'],start:'kikaichu',style:'ranged'},
 tenten:{learn:['阳'],start:'ningu_scatter',style:'ranged',tight:true},
 kiba:{learn:['阳'],start:'gatsuga',style:'melee',tight:true},
 kurenai:{learn:['阴'],start:'shintenshin',style:'ranged'},
 kabuto:{learn:['阴','水'],start:'katsuyu',style:'melee'},
 yamato:{learn:['土','水'],start:'mokuton_forest',style:'ranged'},
 zabuza:{learn:['水'],start:'suiryuudan',style:'melee'},
 kimimaro:{learn:['阳','土'],start:'gouriki_senpuu',style:'melee'},
 minato:{learn:['风','阳'],start:'hiraishin',style:'ranged'},
 konohamaru:{learn:['风','阳'],start:'kage_bunshin',style:'ranged'},
 tsunade:{learn:['阳','土'],start:'katsuyu',style:'melee'},
 hiruzen:{learn:['火','土'],start:'haienseki',style:'ranged'},
 hashirama:{learn:['土','水'],start:'mokuton_forest',style:'ranged'},
 tobirama:{learn:['水','火'],start:'suiryuudan',style:'ranged'},
 kankuro:{learn:['阴','土'],start:'ningu_scatter',style:'ranged'},
 chiyo:{learn:['阴','土'],start:'ningu_scatter',style:'ranged'},
 pain_asura:{learn:['雷','土'],start:'ningu_scatter',style:'melee'},
 pain_animal:{learn:['阳'],start:'kage_bunshin',style:'ranged',tight:true},
 yugito:{learn:['火','阳'],start:'haienseki',style:'melee'},
 haku:{learn:['水','风'],start:'sensatsu_suishou',style:'ranged'},
 original_hiri:{learn:['阴','火'],start:'goukakyuu',style:'ranged'}
};

const KIT_SNAPSHOT={"rasengan":{"name":"螺旋丸","kind":"melee","element":"rasengan","range":64,"radius":42,"damage":32,"cd":4,"duration":1},"chidori":{"name":"千鸟","kind":"melee","element":"lightning","range":64,"radius":32,"damage":115,"cd":4.3,"duration":0.65},"goukakyuu":{"name":"火遁·豪火球之术","kind":"projectile","element":"fire","range":360,"radius":16,"damage":90,"cd":3.5,"duration":1.1,"noEcho":true},"hakke_kuushou":{"name":"八卦空掌","kind":"projectile","element":"impact","range":270,"radius":40,"damage":90,"cd":4.3,"duration":0.8},"kaiten":{"name":"八卦掌·回天","kind":"area","element":"impact","range":120,"radius":75,"damage":32,"cd":7,"duration":1.2},"shinra_tensei":{"name":"神罗天征","kind":"area","element":"impact","range":120,"radius":120,"damage":45,"cd":5.5,"duration":1.85},"sabaku_kyuu":{"name":"砂缚牢","kind":"area","element":"impact","range":260,"radius":58,"damage":28,"cd":5.2,"duration":1.2},"kage_mane":{"name":"影子模仿术","kind":"area","element":"yin","range":280,"radius":58,"damage":90,"cd":5,"duration":1.4},"shintenshin":{"name":"心转身之术","kind":"area","element":"yin","range":280,"radius":48,"damage":65,"cd":6,"duration":1.4},"choujuu_giga":{"name":"超兽伪画·狮子","kind":"ink_summon","element":"yin","range":310,"radius":65,"damage":120,"cd":5,"duration":1.4},"hien":{"name":"飞燕","kind":"melee","element":"wind","range":105,"radius":70,"damage":155,"cd":4,"duration":1.4},"ningu_scatter":{"name":"忍具散射","kind":"projectile","element":"weapon","range":340,"radius":85,"damage":170,"cd":7,"duration":1.8},"tracking_kunai":{"name":"追踪苦无","kind":"projectile","element":"shuriken","range":420,"radius":12,"damage":16,"cd":2,"duration":0.4},"fuuton_blade":{"name":"风遁·风刃","kind":"projectile","element":"wind","range":440,"radius":20,"damage":21,"cd":2.9,"duration":0.4},"raiton_chain":{"name":"雷遁·雷链","kind":"zone","element":"lightning","range":400,"radius":44,"damage":22,"cd":3,"duration":0.75},"exploding_tag":{"name":"起爆符","kind":"zone","element":"impact","range":380,"radius":48,"damage":27,"cd":4,"duration":0.9},"suiryuudan":{"name":"水遁·水龙弹之术","kind":"projectile","element":"water","range":330,"radius":82,"damage":170,"cd":6,"duration":1.4},"suirou":{"name":"水遁·水牢之术","kind":"area","element":"water","range":300,"radius":78,"damage":140,"cd":8,"duration":1.8},"doton_wall":{"name":"土遁·土流壁","kind":"area","element":"earth","range":300,"radius":88,"damage":150,"cd":8,"duration":2},"mokuton_forest":{"name":"木遁·树界降诞","kind":"area","element":"wood","range":310,"radius":95,"damage":180,"cd":7,"duration":1.8},"katsuyu":{"name":"通灵·蛞蝓","kind":"area","element":"acid","range":310,"radius":82,"damage":150,"cd":8,"duration":2},"hiraishin":{"name":"飞雷神之术","kind":"area","element":"space","range":260,"radius":76,"damage":155,"cd":6,"duration":1.4},"gouriki_senpuu":{"name":"木叶刚力旋风","kind":"melee","element":"physical","range":110,"radius":78,"damage":180,"cd":5,"duration":1.8},"gatsuga":{"name":"牙通牙","kind":"melee","element":"physical","range":110,"radius":85,"damage":190,"cd":7,"duration":1.8},"kikaichu":{"name":"寄坏虫攻击※","kind":"projectile","element":"insect","range":320,"radius":78,"damage":170,"cd":7,"duration":1.8},"sensatsu_suishou":{"name":"千杀水翔","kind":"projectile","element":"ice","range":330,"radius":85,"damage":165,"cd":6,"duration":1.8},"haienseki":{"name":"火遁·灰积烧","kind":"area","element":"fire","range":300,"radius":86,"damage":185,"cd":8,"duration":1.8}};
const ICON_SNAPSHOT={"rasengan":"assets/skills-v24/naruto_shippuden/primary-icon.webp","kage_bunshin":"assets/skills-v23/naruto_shippuden/secondary-icon.webp","chidori":"assets/skills-v23/sasuke/primary-icon.webp","goukakyuu":"assets/skills-v23/sasuke/secondary-icon.webp","hakke_kuushou":"assets/skills-v23/neji/primary-icon.webp","kaiten":"assets/skills-v23/neji/secondary-icon.webp","shinra_tensei":"assets/skills-v28/pain/primary-icon.png","sabaku_kyuu":"assets/skills-v23/gaara/primary-icon.webp","kage_mane":"assets/skills-v47/shikamaru/primary-icon.webp","shintenshin":"assets/skills-v47/ino/primary-icon.webp","choujuu_giga":"assets/skills-v47/sai/primary-icon.webp","hien":"assets/skills-v54/asuma/primary-icon.webp","ningu_scatter":"assets/skills-v54/tenten/secondary-icon.webp","tracking_kunai":"assets/shuriken.png","fuuton_blade":"assets/rasenshuriken.png","raiton_chain":"assets/lightning.png","exploding_tag":"assets/pickup-scroll-existing.png","suiryuudan":"assets/skill-motion-v62/zabuza/primary-icon.webp","suirou":"assets/skills-v54/zabuza/secondary-icon.webp","doton_wall":"assets/skills-v56/hiruzen/secondary-icon.webp","mokuton_forest":"assets/skills-v56/hashirama/primary-icon.webp","katsuyu":"assets/skills-v56/tsunade/secondary-icon.webp","hiraishin":"assets/skills-v54/minato/primary-icon.webp","gouriki_senpuu":"assets/skills-v56/guy/primary-icon.webp","gatsuga":"assets/skills-v54/kiba/secondary-icon.webp","kikaichu":"assets/skills-v54/shino/secondary-icon.webp","sensatsu_suishou":"assets/skills-v56/haku/primary-icon.webp","haienseki":"assets/skills-v54/asuma/secondary-icon.webp"};

const byId=Object.fromEntries(SKILLS.map(s=>[s.id,s]));

function inBattle(){
  return /(?:^|\/)battle\//.test(location.pathname||'');
}
function assetPath(path){
  if(!path)return path;
  let p=String(path);
  if(p.startsWith('battle/'))p=p.slice(7);
  if(p.startsWith('../assets/'))p=p.slice(3);
  if(inBattle())return p;
  if(p.startsWith('assets/nature-icons/')||p.startsWith('assets/lobby-v57/')||p.startsWith('assets/phase-one')||p.startsWith('assets/portraits/')||p.startsWith('assets/roster-cards/')||p.startsWith('assets/fonts/'))return p;
  if(p.startsWith('assets/'))return 'battle/'+p;
  return p;
}
function natureSrc(n){return assetPath('assets/nature-icons/'+(NATURE_ICONS[n]||'all.svg'));}
function formEntry(key){return FORMS[key]||{learn:[],start:null,style:'ranged'};}
function natures(key){
  const e=formEntry(key);
  if(e.learn==='all')return ALL_NATURES.slice();
  const attr=global.SKILL_KITS?.[key]?.attribute;
  const list=Array.isArray(e.learn)?e.learn.slice():[];
  if(attr==='全')return ALL_NATURES.slice();
  if(attr&&!list.includes(attr))list.unshift(attr);
  return list;
}
function skillOf(skill){return typeof skill==='string'?byId[skill]:skill;}
function canLearn(key,skill){
  const g=skillOf(skill)?.gate;
  if(!g)return false;
  if(g==='中性')return true;
  return natures(key).includes(g);
}
function learnableSkills(key){return SKILLS.filter(x=>canLearn(key,x));}
function startId(key){return formEntry(key).start;}
function kitOf(skill){
  const s=skillOf(skill);
  if(!s)return null;
  if(s.kit)return s.kit;
  const snap=KIT_SNAPSHOT[s.id];
  if(snap)return snap;
  const src=global.SKILL_KITS?.[s.sourceKey]?.kit?.[s.slot];
  return src?{...src,name:s.name}:null;
}
function iconOf(skill){
  const s=skillOf(skill);
  if(!s)return assetPath(FALLBACK_ICON);
  // Runtime art first (battle), then the generated display snapshot (lobby), so icons follow the battle effect.
  const raw=s.icon||global.SKILL_ART_DATA?.[s.sourceKey]?.skills?.[s.slot]?.icon||global.SkillDisplay?.skill(s.sourceKey,s.slot)?.icon||ICON_SNAPSHOT[s.id]||FALLBACK_ICON;
  return assetPath(raw);
}
function clipOf(skill){
  const s=skillOf(skill);
  if(!s||s.icon||!s.sourceKey)return null;
  return global.SkillDisplay?.skill(s.sourceKey,s.slot)?.clip||null;
}
function damageScale(level){return 1+(Math.max(1,level||1)-1)*DAMAGE_PER_LEVEL;}
function waveCount(level){
  const l=level||1;
  return 1+WAVE_AT.reduce((n,at)=>n+(l>=at?1:0),0);
}
function zoneRadius(kit,level){return (kit?.radius||40)+(level||1)*ZONE_RADIUS_PER_LEVEL;}
function artRadius(kit,level){return (kit?.radius||50)*((level||1)>=ART_RADIUS_LEVEL?ART_RADIUS_SCALE:1);}
function cloneCount(level){return (level||1)>=CLONE_MAX_AT?CLONE_MAX_COUNT:CLONE_BASE_COUNT;}
function cloneLife(level){return CLONE_LIFE_BASE+(level||1);}
function cloneDamageMul(level){return CLONE_DAMAGE_BASE+(level||1)*CLONE_DAMAGE_PER_LEVEL;}
function baseDamage(skill,level){
  const s=skillOf(skill);
  if(s?.special==='clones')return Math.round(CLONE_BASE_DAMAGE*cloneDamageMul(level));
  const kit=kitOf(s)||{damage:20};
  return Math.round((kit.damage||20)*damageScale(level));
}
function levelEffects(skill){
  const s=skillOf(skill),kit=kitOf(s)||{};
  const lines=[];
  for(let lv=1;lv<=5;lv++){
    const parts=['伤害 '+baseDamage(s,lv)];
    if(kit.cd)parts.push('冷却 '+kit.cd+' 秒');
    if(s?.special==='clones')parts.push('分身 '+cloneCount(lv)+' 名');
    else if(s?.kind==='shot'||s?.kind==='zone'||s?.shot)parts.push('弹道/落点 '+waveCount(lv));
    else if(lv>=5)parts.push('满级强化');
    else if(lv>=3)parts.push('追加余波');
    lines.push({level:lv,text:parts.join(' · ')});
  }
  return lines;
}
function learners(units,skill){
  return (units||[]).filter(u=>canLearn(u.key,skill));
}
function formatLearners(units,skill){
  const list=learners(units,skill);
  if(!list.length)return '当前没有可学的已拥有忍者';
  const names=list.slice(0,8).map(u=>u.name).join('、');
  return '可学：'+names+(list.length>8?' 等'+list.length+'人':'');
}
function naturesWithSkills(){return NATURE_ORDER.filter(n=>SKILLS.some(s=>s.gate===n));}
function preloadIcons(){
  const seen=new Set();
  SKILLS.forEach(s=>{
    const src=iconOf(s);
    if(!src||seen.has(src))return;
    seen.add(src);
    const img=new Image();
    img.decoding='async';
    img.src=src;
  });
}

const Catalog={
  ALL_NATURES,NATURE_ORDER,NATURE_ICONS,MAX_SLOTS,DAMAGE_PER_LEVEL,
  CLONE_BASE_DAMAGE,skills:SKILLS,forms:FORMS,byId,
  inBattle,assetPath,natureSrc,formEntry,natures,canLearn,learnableSkills,
  startId,kitOf,iconOf,clipOf,damageScale,waveCount,zoneRadius,artRadius,
  cloneCount,cloneLife,cloneDamageMul,baseDamage,levelEffects,learners,formatLearners,
  naturesWithSkills,preloadIcons
};
global.SkillPoolCatalog=Catalog;
preloadIcons();
})(window);
