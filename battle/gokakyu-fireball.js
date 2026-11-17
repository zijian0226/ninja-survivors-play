/* v0.67：火遁·豪火球之术改为持续直线火球（肉鸽式）。
 * 火球在手边蓄力 4 帧后直线飞行（循环 6 帧，不追踪、不限时），命中第一个敌人即播放 8 帧爆炸并消失；
 * 完全飞出屏幕或首领场地才移除。升级卡分三条成长：连发（数量）、巨焰（体型与判定）、烈焰（伤害）。
 * 素材：assets/fx-v67/gokakyu-sheet.png（自制像素，96px×8列×3行，12fps，朝右）。 */
(function(){
'use strict';
const ID='goukakyuu';
const ICON='assets/fx-v67/gokakyu-icon.png?v=pool671';
const SHEET={src:'assets/fx-v67/gokakyu-sheet.png?v=pool671',cell:96,fps:12,charge:{row:0,count:4},fly:{row:1,count:6},impact:{row:2,count:8}};
/* 成长数值：每张卡 1 级；总等级与其他通用忍术一致，最高 Lv.5（即最多 4 次强化）。 */
const GROWTH={
 count:{name:'豪火球·连发',max:3,step:1,short:l=>'火球+1 · 共'+(2+l)+'发'},
 size:{name:'豪火球·巨焰',max:3,step:.25,short:()=>'体型判定 +25%'},
 dmg:{name:'豪火球·烈焰',max:3,step:.3,short:()=>'火球伤害 +30%'}
};
const TUNE={cd:3.5,damage:90,range:360,speed:250,hitR:16,splashR:34,splash:.5,maxBalls:40,spread:.2,safetyLife:20};
const img=new Image();img.decoding='async';img.src=SHEET.src;
const growth=()=>{if(!s.fireGrowth)s.fireGrowth={count:0,size:0,dmg:0};return s.fireGrowth;};
const balls=()=>(s.fireballs||(s.fireballs=[]));
const stats=()=>{const g=growth();return{count:1+g.count*GROWTH.count.step,scale:1+g.size*GROWTH.size.step,dmgMul:1+g.dmg*GROWTH.dmg.step};};
const skillDef=()=>(SkillPoolCatalog.byId?.[ID]||(SkillPoolCatalog.skills||[]).find(x=>x.id===ID))||{id:ID,gate:'火',element:'火'};

const Gokakyu=window.Gokakyu={GROWTH,TUNE,SHEET,img,stats,growth,balls,
 owned(){return (s?.pool?.[ID]||0)>0;},
 picks(){const g=growth();return g.count+g.size+g.dmg;},
 cast(level,target){
  if(!s?.p||s.p.hp<=0)return false;
  const a=s.p,st=stats();
  const targets=Growth.enemies().filter(e=>e.hp>0&&dist(e,a)<=TUNE.range).sort((x,y)=>dist(x,a)-dist(y,a));
  const first=target?.hp>0&&dist(target,a)<=TUNE.range?target:targets[0];
  if(!first)return false;
  if(balls().length>=TUNE.maxBalls)return false;
  a.facing=first.x>=a.x?1:-1;
  startCast(a);
  const damage=SkillPool.damageFor(skillDef(),1)*st.dmgMul;
  const base=Math.atan2(first.y-24-(a.y-25),first.x-a.x);
  for(let j=0;j<st.count;j++){
   const t=targets[j];
   /* 每发瞄准不同的近处敌人；敌人不足时以扇形散开。 */
   const angle=t&&j>0?Math.atan2(t.y-24-(a.y-25),t.x-a.x):base+(j%2?1:-1)*Math.ceil(j/2)*TUNE.spread;
   balls().push({phase:'charge',age:-j*.06,x:a.x+a.facing*18,y:a.y-25,angle,vx:Math.cos(angle)*TUNE.speed,vy:Math.sin(angle)*TUNE.speed,scale:st.scale,damage,life:0});
  }
  SkillPool.resonate('火',first.x,first.y,damage);
  s.cast=.3;
  return true;
 },
 update(dt){
  const list=balls();if(!list.length)return;
  const cam=s.camera,ar=s.arena;
  for(let i=list.length-1;i>=0;i--){
   const b=list[i];b.age+=dt;
   if(b.phase==='charge'){
    b.x=s.p.x+s.p.facing*18;b.y=s.p.y-25;
    if(b.age>=SHEET.charge.count/SHEET.fps){b.phase='fly';b.age=0;}
    continue;
   }
   if(b.phase==='impact'){if(b.age>=SHEET.impact.count/SHEET.fps)list.splice(i,1);continue;}
   b.life+=dt;b.x+=b.vx*dt;b.y+=b.vy*dt;
   const r=TUNE.hitR*b.scale;
   let hitE=null;
   for(const e of Growth.enemies()){if(e.hp>0&&Math.hypot(e.x-b.x,e.y-24-b.y)<r+(e.r||10)){hitE=e;break;}}
   if(hitE){
    b.phase='impact';b.age=0;
    hit(hitE,b.damage);
    const sr=TUNE.splashR*b.scale;
    for(const e of Growth.enemies())if(e!==hitE&&e.hp>0&&Math.hypot(e.x-b.x,e.y-24-b.y)<sr+(e.r||10))hit(e,b.damage*TUNE.splash);
    s.fireHits=(s.fireHits||0)+1;
    continue;
   }
   /* 只在完全飞出屏幕或首领场地时移除（安全上限 20 秒）。 */
   const m=SHEET.cell/2*b.scale;
   const off=b.x<cam.x-m||b.x>cam.x+W+m||b.y<cam.y-m||b.y>cam.y+H+m;
   const outArena=ar&&(b.x<ar.x-m||b.x>ar.x+ar.w+m||b.y<ar.y-m||b.y>ar.y+ar.h+m);
   if(off||outArena||b.life>TUNE.safetyLife)list.splice(i,1);
  }
 },
 frameOf(b){
  const anim=SHEET[b.phase],t=Math.max(0,b.age);
  let f=Math.floor(t*SHEET.fps);
  f=b.phase==='fly'?f%anim.count:Math.min(anim.count-1,f);
  return {row:anim.row,col:f};
 },
 drawOne(b){
  if(b.age<0||!img.complete||!img.naturalWidth)return;
  const {row,col}=this.frameOf(b),c=SHEET.cell,d=Math.round(c*b.scale);
  ctx.save();ctx.translate(Math.round(b.x),Math.round(b.y));
  if(b.phase!=='impact'){
   /* 素材朝右：朝左飞时水平翻转，保持火焰不倒置。 */
   const dir=Math.cos(b.angle)>=0?1:-1;
   ctx.scale(dir,1);ctx.rotate(dir>0?b.angle:Math.PI-b.angle);
  }
  ctx.imageSmoothingEnabled=false;
  ctx.drawImage(img,col*c,row*c,c,c,-d/2,-d/2,d,d);
  ctx.restore();
 },
 draw(entities){for(const b of balls())entities.push({y:b.y+26,draw:()=>this.drawOne(b)});},
 cards(){
  const g=growth(),out=[];
  if((s.pool?.[ID]||0)>=5)return out;
  for(const k of Object.keys(GROWTH)){
   const def=GROWTH[k],lv=g[k];
   if(lv>=def.max)continue;
   out.push({id:'gfb:'+k,growth:k,max:def.max,name:def.name,current:lv,short:def.short(lv),text:()=>def.short(lv),icon:SkillPool.iconOf(skillDef())});
  }
  return out;
 },
 applyGrowth(k){
  const g=growth(),def=GROWTH[k];
  if(!def||g[k]>=def.max||(s.pool?.[ID]||0)>=5)return false;
  g[k]++;s.pool[ID]=Math.min(5,(s.pool[ID]||1)+1);
  return true;
 },
 hook(){
  if(this._hooked||!window.SkillPool)return;this._hooked=true;
  /* 战斗内 skill.kit 取自佐助原技能，这里统一为持续火球的数值（与目录快照一致）。 */
  const sk=skillDef();
  if(sk.kit)Object.assign(sk.kit,{cd:TUNE.cd,range:TUNE.range,damage:TUNE.damage,radius:TUNE.hitR,noEcho:true,text:'喷出豪火球直线飞行，命中敌人即爆炸；升级可选连发、巨焰或烈焰。'});
  const origTry=SkillPool.tryCast.bind(SkillPool);
  SkillPool.tryCast=function(skill,level,target){
   if(skill&&skill.id===ID){if(state!=='play')return false;return Gokakyu.cast(level,target);}
   return origTry(skill,level,target);
  };
  const origOffers=SkillPool.offers.bind(SkillPool);
  SkillPool.offers=function(){
   let chosen=origOffers();
   const pool=Gokakyu.cards();
   const i=chosen.findIndex(c=>c.id==='pool:'+ID);
   if(i>=0&&Gokakyu.owned()){
    if(pool.length){chosen[i]=pool.splice(Math.floor(Math.random()*pool.length),1)[0];}
    else chosen.splice(i,1);
    /* 另有一半机会把一张非忍术卡换成第二条成长路线，让三条路线更常见。 */
    if(pool.length&&Math.random()<.5){
     const j=chosen.findIndex(c=>!c.poolId&&!String(c.id).startsWith('gfb:')&&c.id!=='ultimate');
     if(j>=0)chosen[j]=pool.splice(Math.floor(Math.random()*pool.length),1)[0];
    }
   }
   return chosen;
  };
  const origApply=SkillPool.apply.bind(SkillPool);
  SkillPool.apply=function(card){
   if(card&&String(card.id||'').startsWith('gfb:')){Gokakyu.applyGrowth(String(card.id).slice(4));return;}
   if(card&&card.poolId===ID&&Gokakyu.owned())return; /* 已习得时只通过三条成长路线升级 */
   return origApply(card);
  };
  const origDraw=SkillArt.draw.bind(SkillArt);
  SkillArt.draw=function(entities){origDraw(entities);if(s)Gokakyu.draw(entities);};
  const origTick=tick;
  tick=function(dt){origTick(dt);if(state==='play'&&s)Gokakyu.update(dt);};
  const origUpgrade=upgrade;
  upgrade=function(force){
   origUpgrade(force);
   if(state!=='upgrade')return;
   document.querySelectorAll('[data-upgrade^="gfb:"]').forEach(button=>{
    const k=button.dataset.upgrade.slice(4),def=GROWTH[k];if(!def)return;
    const lv=growth()[k],next=lv+1;
    button.style.setProperty('--el','#F0663A');
    const art=button.querySelector('.choice-art img');if(art){art.src=ICON;art.style.imageRendering='pixelated';}
    const em=button.querySelector('em');if(em)em.textContent='Lv.'+lv+' → Lv.'+next;
    const stars=button.querySelector('.choice-stars');
    if(stars)stars.innerHTML=Array.from({length:def.max},(_,i)=>'<i class="'+(i<next?'on':'')+'">★</i>').join('');
    const tag=button.querySelector('.choice-tag');if(tag)tag.textContent='豪火球成长';
    const desc=button.querySelector('.choice-description');if(desc)desc.textContent=def.short(lv);
   });
  };
  const origReset=reset;
  reset=function(quick){if(s){s.fireballs=[];}origReset(quick);if(s){s.fireballs=[];s.fireGrowth={count:0,size:0,dmg:0};}};
 }
};
Gokakyu.hook();
})();
