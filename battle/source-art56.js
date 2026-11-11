/* Exact-form pixel figures and isolated runtime additions for the fourteen v0.56 kits. */
window.SourceArt56={
 spriteKeys:new Map(Object.values(SKILL_KITS).filter(u=>u.batch56).map(u=>[u.sprite,u.key])),
 actor(key){const wood=key.endsWith('_wood'),base=wood?key.slice(0,-5):key,k=this.spriteKeys.get(base),d=k&&SKILL_ART_DATA[k];return d?(wood?d.woodActor:d.actor):null;},
 drawActor(key,action,x,y,facing=1,alpha=1,phase=0,hitFlash=false,actionAge=null){
  const a=this.actor(key);if(!a)return false;const im=SkillArt.cache.get(a.file);if(!im)return true;
  const row=a.rows[action]??a.rows.idle,n=a.counts[action]||a.counts.idle,ms=a.ms[action]||150;
  const frame=actionAge===null?Math.floor(s.t*1000/ms+phase)%n:Math.min(n-1,Math.floor(actionAge*1000/ms));
  const [w,h]=a.cell,[ax,ay]=a.anchor;ctx.save();ctx.translate(Math.round(x),Math.round(y));if(facing<0)ctx.scale(-1,1);ctx.globalAlpha=alpha*(hitFlash?.5:1);ctx.imageSmoothingEnabled=false;ctx.drawImage(im,frame*w,row*h,w,h,-ax,-ay,w,h);ctx.restore();return true;
 },
 summon(q){
  s.sourceSummons??=[];const count=q.level>=3?3:2;
  for(let i=0;i<count&&s.sourceSummons.length<6;i++)s.sourceSummons.push({owner:q.actor,unit:q.unit,sprite:q.unit.sprite+(q.unit.key==='hashirama'?'_wood':''),x:q.actor.x+(i-(count-1)/2)*32,y:q.actor.y+20,life:8,atk:.3+i*.15,cast:0,damage:q.damage*.22,source:q,facing:q.facing,moving:false});
 },
 update(dt){
  s.sourceSummons??=[];
  for(const a of TeamSeven.living())if((a===s.p?Growth.main():a.profile)?.key==='tsunade')a.hp=Math.min(a===s.p?mainMaxHp():TeamSeven.maxHp(a),a.hp+3*dt);
  for(const a of s.sourceSummons){
   a.life-=dt;a.atk-=dt;a.cast=Math.max(0,a.cast-dt);const e=Growth.enemies().filter(e=>Math.hypot(e.x-a.owner.x,e.y-a.owner.y)<600).sort((x,y)=>dist(x,a)-dist(y,a))[0];a.moving=false;
   if(e){const gap=dist(a,e)||1;if(gap>42){s.world.move(a,(e.x-a.x)/gap*145*dt,(e.y-a.y)/gap*145*dt,10,s.arena);a.moving=true;}a.facing=e.x>=a.x?1:-1;if(gap<70&&a.atk<=0){addDamageZone(a.x+a.facing*25,a.y-24,a.source.damage*.22,'impact',.24,24);a.atk=.85;a.cast=.24;}}
  }
  s.sourceSummons=s.sourceSummons.filter(a=>a.life>0);
  for(const q of SkillArt.active){
   if(!q.source56Heal||q.age<q.source56Heal.next||q.age>=q.damageEnd||!q.released||!q.geometry)continue;
   const z=q.source56Heal;z.next+=.25;const patients=z.team?TeamSeven.living().filter(a=>SkillMotion.ellipse(SkillMotion.healArea(q),a)):[q.actor];for(const a of patients){const max=a===s.p?mainMaxHp():TeamSeven.maxHp(a);a.hp=Math.min(max,a.hp+max*z.fraction/z.pulses);}
  }
 },
 draw(entities){for(const q of SkillArt.active)if(q.source56Heal?.team&&q.released&&q.age<q.damageEnd&&q.geometry)entities.push({y:q.geometry.y,draw:()=>{const g=SkillMotion.healArea(q);ctx.save();ctx.globalAlpha=.45;ctx.strokeStyle='#b4e6b1';ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(g.x,g.y,g.rx,g.ry,0,0,Math.PI*2);ctx.stroke();ctx.restore();}});for(const a of s.sourceSummons||[])entities.push({y:a.y,draw:()=>this.drawActor(a.sprite,a.cast>0?'cast':a.moving?'run':'idle',a.x,a.y,a.facing,Math.min(.82,a.life/.3),0,false,a.cast>0?.24-a.cast:null)});}
};
(function(){
 const cast=SkillArt.cast,update=SkillArt.update,draw=SkillArt.draw,ensure=SkillArt.ensure,loaded=SkillArt.loaded,description=SkillArt.description,nativeSprite=sprite;
 SkillArt.loaded=function(key){const a=SKILL_ART_DATA[key]?.woodActor;return loaded.call(this,key)&&(!a||this.cache.has(a.file));};
 SkillArt.ensure=async function(key){await ensure.call(this,key);const a=SKILL_ART_DATA[key]?.woodActor;if(a)await this.image(a.file);};
 SkillArt.cast=function(a,u,slot,...args){
  const before=new Set(this.active),ok=cast.call(this,a,u,slot,...args);if(!ok||!u.batch56)return ok;
  const q=this.active.find(q=>!before.has(q)&&q.age>=0);if(!q)return ok;const k=u.kit[slot];
  if(k.kind==='source_summon')SourceArt56.summon(q);
  if(k.shieldFraction){a.shield=Math.max(a.shield||0,(a===s.p?mainMaxHp():TeamSeven.maxHp(a))*k.shieldFraction);a.shieldTime=3;}
  if(k.healFraction||k.healTeamFraction){const fraction=(k.healFraction||k.healTeamFraction)*(1+(q.level-1)*.1),start=q.duration*q.clip.damageWindow[0];q.source56Heal={fraction,team:!!k.healTeamFraction,next:start,pulses:Math.ceil((q.damageEnd-start)/.25)};}
  return ok;
 };
 SkillArt.update=function(dt){update.call(this,dt);SourceArt56.update(dt);};
 SkillArt.draw=function(entities){draw.call(this,entities);SourceArt56.draw(entities);};
 SkillArt.description=function(slot,l){const u=Growth.main(),k=u.kit[slot];if(u.batch56&&k.kind==='source_summon')return k.text+` 当前Lv.${l}：${l>=3?3:2}个分身；每次攻击威力随主控技能等级提高，支援固定Lv.1。`;if(u.batch56&&k.noDamage&&k.healFraction)return k.text+` 当前Lv.${l}：回复${Math.round(k.healFraction*(1+(l-1)*.1)*100)}%最大生命${l>=3?'；另有满级奥义8%生命回复':''}。`;return description.call(this,slot,l);};
 sprite=function(...args){if(SourceArt56.drawActor(...args))return;return nativeSprite(...args);};
})();
