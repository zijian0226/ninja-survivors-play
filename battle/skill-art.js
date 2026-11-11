/* Source-frame playback. Readiness is per exact form, never per character family. */
window.SkillArt={
 registry:{},recent:[],cache:new Map(),loads:new Map(),active:[],metrics:{casts:0,pulses:0},
 init(){
  for(const [key,profile] of Object.entries(window.SKILL_KITS||{})){
   const art=window.SKILL_ART_DATA?.[key];
   const ready=!!art?.actor&&['primary','secondary','ultimate'].every(k=>art.skills[k]?.frames>0&&profile.kit[k]);
   this.registry[key]={...profile,key,unitKey:key,ready};
  }
  RecruitRun.units=Object.values(this.registry).filter(u=>u.ready).sort((a,b)=>Number(!!b.original)-Number(!!a.original));
  if(!RecruitRun.units.some(u=>u.key===RecruitRun.mainKey))RecruitRun.mainKey='naruto_shippuden';
  for(const u of RecruitRun.units){forms[u.sprite]={name:u.name,tag:RecruitRun.natureText(u)+' · 专属忍术'};SkillLab.ultimates[u.key]=u.kit.ultimate.name;}
 },
 get readyOfficialIds(){return new Set(Object.values(this.registry).filter(u=>u.ready&&u.releaseComplete!==false).map(u=>u.officialId));},
 isReady(key){return this.registry[key]?.ready===true;},
 effectiveClip(key,slot){return SkillMotion.clip(key,slot);},
 loaded(key){return this.cache.has(window.SKILL_ART_DATA?.[key]?.actor.file)&&['primary','secondary','ultimate'].every(slot=>{const c=this.effectiveClip(key,slot);return this.cache.has(c.file)&&(!c.caster||this.cache.has(c.caster.file));});},
 image(url){if(this.cache.has(url))return Promise.resolve(this.cache.get(url));if(this.loads.has(url))return this.loads.get(url);const p=new Promise((resolve,reject)=>{const im=new Image(),t=setTimeout(()=>reject(Error('技能素材加载超时')),15000);im.onload=()=>{clearTimeout(t);this.cache.set(url,im);resolve(im);};im.onerror=()=>{clearTimeout(t);reject(Error('技能素材加载失败'));};im.src=url;}).finally(()=>this.loads.delete(url));this.loads.set(url,p);return p;},
 trim(key){this.recent=[key,...this.recent.filter(k=>k!==key)].slice(0,6);const keep=new Set([...this.recent,RecruitRun.mainKey,...(typeof s!=='undefined'&&s?[s.mainKey,...s.allies.map(a=>a.profile.key)]:[]),...this.active.map(q=>q.unit.key)]);for(const [k,d]of Object.entries(window.SKILL_ART_DATA))if(!keep.has(k))for(const slot of ['primary','secondary','ultimate']){const c=this.effectiveClip(k,slot);this.cache.delete(c.file);if(c.impact)this.cache.delete(c.impact.file);if(c.caster)this.cache.delete(c.caster.file);}},
 async ensure(key){if(!this.isReady(key))throw Error('此形态尚未完成');const d=window.SKILL_ART_DATA[key];await Promise.all([this.image(d.actor.file),...['primary','secondary','ultimate'].map(slot=>this.effectiveClip(key,slot)).flatMap(x=>[this.image(x.file),...(x.impact?[this.image(x.impact.file)]:[]),...(x.caster?[this.image(x.caster.file)]:[])])]);const u=this.registry[key],a=d.actor;images[u.sprite]=this.cache.get(a.file);spriteMeta[u.sprite]={file:a.file,renderScale:a.scale,animations:Object.fromEntries(['idle','run','cast'].map(k=>[k,{row:a.rows[k],count:a.counts[k],ms:a.ms[k]}]))};this.trim(key);},
 portrait(u){return window.SKILL_ART_DATA?.[u?.key]?.portrait||'assets/'+(u?.sprite||'shippuden')+'-portrait.png';},
 icon(u,slot){return window.SKILL_ART_DATA?.[u?.key]?.skills[slot]?.icon||this.portrait(u);},
 clear(){for(const q of this.active)if(q.actor)q.actor.sourceMove=null;this.active=[];},
 busy(a){return this.active.some(q=>q.actor===a&&q.age>=0&&(q.composite?q.age<q.duration:q.age<.16));},
 blocksMovement(){return false;},
 reviewText(k){const v=k?.nameReview;if(!v)return '';if(v.status==='preview')return k.visualComplete?'动画已接入 · 正式术名待核':'源动作预览 · 术名/机制待核';return ({game_adaptation:'游戏化招式 · 原作能力改编',matched:'招式名称已核对',adapted:'已核对术名 · 像素玩法改编',preview:'演出待校正 · 当前名称为素材描述或局部招式',original:'本游戏原创被动',original_jutsu:'本游戏原创忍术'})[v.status]||'';},
 frame(q){const c=q.clip;if(c.frame_times_ms?.length===c.frames){const total=c.frame_times_ms.reduce((a,b)=>a+b,0);let t=Math.max(0,Math.min(1,q.age/q.duration))*total;for(let i=0;i<c.frames;i++){t-=c.frame_times_ms[i];if(t<0)return i;}return c.frames-1;}if(c.frames<=3)return Math.floor(q.age*c.fps)%c.frames;return Math.min(c.frames-1,Math.floor(Math.min(1,q.age/q.duration)*c.frames));},
 hidden(a){return this.active.some(q=>q.actor===a&&q.age>=0&&(q.composite?q.age<q.duration:!a.moving&&a.lastBodyCast===q&&q.age<(q.clip.caster?.duration||0))&&a.hp>0&&!(a.down>0)&&!(q.clip.emptyFrames||[]).includes(this.frame(q)));},
 cast(a,u,slot,level=1,e){
  if(state!=='play'||!this.isReady(u?.key)||!a||a.hp<=0||a.down>0||this.busy(a))return false;
  if(!this.loaded(u.key)){this.ensure(u.key).catch(()=>{});return false;}
  const prior=new Set(this.active),kit=u.kit[slot],clip=this.effectiveClip(u.key,slot);if(!kit||!clip)return false;
  e=e?.hp>0?e:Growth.nearestEnemy(a,kit.range||400);
  if(!e||dist(a,e)>(kit.range||400))return false;
  const isMain=a===s.p,l=isMain?level:1,boost=isMain?1+(s.power||0)*.12:1,team=1+(s.teamPower||0)*.1+(s.reserve||0)*.02;
  const summon=kit.kind==='summon',melee=kit.kind==='melee',composite=clip.renderMode==='actor_composite';
  a.facing=e.x>=a.x?1:-1;startCast(a);
  const natural=clip.frame_times_ms?.reduce((a,b)=>a+b,0)/1000||clip.frames/clip.fps,duration=Math.max(kit.duration&&kit.kind!=='summon'?kit.duration:.45,Math.min(3.6,natural));
  const radius=(kit.radius||50)*(l>=2?1.25:1)*(slot==='ultimate'&&l>=3?1.15:1);
  let x=composite||summon||melee?a.x:e.x,y=composite||summon||melee?a.y:e.y;
  if(!composite&&melee)x+=a.facing*30;
  const q={actor:a,unit:u,slot,kit,clip,age:0,duration,x,y,damageX:e.x,damageY:e.y,fromX:a.x,fromY:a.y,target:e,facing:a.facing,composite,radius,damageEnd:duration*(clip.damageWindow?.[1]??.88),nextPulse:duration*(clip.damageWindow?.[0]??.15),damage:(kit.damage||38)*(u.personal||1)*boost*team*(1+(l-1)*.16),level:l,travel:kit.kind==='projectile'&&!composite?.28:0};
  if(clip.damageOffset){q.damageX=a.x+a.facing*clip.damageOffset[0];q.damageY=a.y+clip.damageOffset[1];}
  if(composite){a.sourceMove=q;a.action.duration=duration;}if(isMain&&slot==='ultimate'&&l>=2&&!kit.noEcho)this.active.push({...q,age:-duration-.16,damageEnd:duration*(clip.damageWindow?.[1]??.88),nextPulse:duration*(clip.damageWindow?.[0]??.15),damage:q.damage*.65});
  this.active.push(q);if(isMain&&l>=3&&slot!=='ultimate'&&!summon&&!kit.noEcho){this.active.push({...q,age:-duration-.16,damageEnd:duration*(clip.damageWindow?.[1]??.88),nextPulse:duration*(clip.damageWindow?.[0]??.15),damage:q.damage*.6});if(l>=5)this.active.push({...q,age:-duration*2-.32,damageEnd:duration*(clip.damageWindow?.[1]??.88),nextPulse:duration*(clip.damageWindow?.[0]??.15),damage:q.damage*.4});}if(this.active.length>32)this.active.shift();this.metrics.casts++;
  if(u.batch54&&kit.healFraction){const max=isMain?mainMaxHp():TeamSeven.maxHp(a);a.hp=Math.min(max,a.hp+max*kit.healFraction);}
  for(const active of this.active)if(!prior.has(active))SkillMotion.init(active);
  if(summon){
   if(isMain){updateClones(0,40*boost*team,TeamSeven.cooldown());}
   else if(s.supportClones.length+s.summons.length<8)s.supportClones.push({owner:a,x:a.x+a.facing*24,y:a.y+12,sprite:a.sprite,life:u.key==='kakashi'?5:8,atk:.25,facing:a.facing});
  }
  q.linkEligible=isMain;
  if(slot==='ultimate'){const links=SquadLinks.onUltimate(a,u,e);UltimateCue.show(a,u,links);if(isMain&&l>=3)a.hp=Math.min(mainMaxHp(),a.hp+mainMaxHp()*.08);}
  return true;
 },
 update(dt){
  for(const a of TeamSeven.living())if((a===s.p?Growth.main():a.profile)?.key==='kabuto')a.hp=Math.min(a===s.p?mainMaxHp():TeamSeven.maxHp(a),a.hp+4*dt);
  for(const q of this.active){
   q.age+=dt;if((q.actor.hp<=0||q.actor.down>0)&&(!q.released||!['ground','planted','projectile'].includes(q.motion?.mode))){q.age=q.duration;continue;}
   const spatialActive=SkillMotion.update(q,dt);
   if(spatialActive&&q.age>=q.nextPulse&&q.age<q.damageEnd&&q.kit.kind!=='summon'&&!q.kit.noDamage){
    q.nextPulse+=.2;this.metrics.pulses++;
    if(q.linkEligible&&!q.linkTriggered){q.linkTriggered=true;const center={x:q.geometry.x,y:q.geometry.y};if(q.slot==='primary')SquadLinks.onPrimary(center,q.damage);if(q.slot!=='ultimate')SquadLinks.onImpact({...center,owner:q.actor,element:q.kit.element,damage:q.damage});}
    const totalPulses=Math.max(1,Math.ceil((q.damageEnd-q.duration*(q.clip.damageWindow?.[0]??.15))/.2));
    for(const e of skillTargets())if(e.hp>0&&SkillMotion.hits(q,e)){
     let damage=q.kit.damageMode==='periodic'?q.damage:q.damage/totalPulses;
     if(q.unit.key==='shikamaru'&&(e.skillStun>0||e.slow>0))damage*=1.15;
     if(q.unit.key==='hidan'&&(e.bloodMark||0)>s.t)damage*=1.15;
     if(q.unit.batch54){
      if(q.unit.key==='asuma'&&q.kit.kind==='melee')damage*=1.1;
      if(q.unit.key==='zabuza'&&(e.slow>0||e.skillStun>0))damage*=1.15;
      if(q.unit.key==='minato'){if((e.flyingRaijinMark||0)>s.t)damage*=1.12;e.flyingRaijinMark=s.t+4;}
      if(q.unit.key==='shino'&&s.t-(q.actor.lastInsectCharge??-Infinity)>=.8){q.actor.lastInsectCharge=s.t;if(q.actor===s.p)s.ultimateCd=Math.max(0,s.ultimateCd-.3);else q.actor.ultimateCd=Math.max(0,(q.actor.ultimateCd??45)-.3);}
      if(['kurenai','yamato'].includes(q.unit.key)&&s.t-(e['passive54_'+q.unit.key]??-Infinity)>=2&&Math.random()<.15){e['passive54_'+q.unit.key]=s.t;if(e===s.boss)e.slow=Math.max(e.slow||0,.6);else if(q.unit.key==='yamato')e.skillStun=Math.max(e.skillStun||0,.6);else{e.originalCharm=Math.max(e.originalCharm||0,1);e.originalCharmAtk=e.originalCharmAtk??.3;e.originalCharmDamage=q.damage*.08;}}
     }
     if(q.unit.key==='konohamaru'&&s.t-(q.actor.lastShadowAssist??-Infinity)>=.8&&Math.random()<.15){hit(e,damage*.2);q.actor.lastShadowAssist=s.t;}
     hit(e,damage);
     if(q.unit.batch47||q.unit.batch54||q.unit.batch56){const duration=(q.kit.statusDuration||1)*(q.unit.controlDuration||1);
      if(q.kit.status==='root'){if(e!==s.boss)e.skillStun=Math.max(e.skillStun||0,duration);e.slow=Math.max(e.slow||0,duration);}
      if(q.kit.status==='charm'){if(e===s.boss)e.slow=Math.max(e.slow||0,duration);else{e.originalCharm=Math.max(e.originalCharm||0,duration);e.originalCharmAtk=e.originalCharmAtk??.3;e.originalCharmDamage=q.damage*.08;}}
      if(q.kit.status==='blood')e.bloodMark=s.t+duration;
     }
     if(q.kit.status==='slow')e.slow=Math.max(e.slow||0,q.unit.batch47||q.unit.batch54||q.unit.batch56?q.kit.statusDuration||2:2);
     if(q.kit.status==='burn')e.skillBurn={left:2,next:.5,damage:q.damage*.04};
     if(q.kit.status==='poison')e.skillPoison={left:2,next:.5,damage:q.damage*.04};
     if(q.kit.status==='stun'&&e!==s.boss)e.skillStun=Math.max(e.skillStun||0,.35);
     if(q.level>=4&&e!==s.boss&&q.kit.kind==='melee')s.world.move(e,q.facing*5,0,e.r||12,s.arena);
    }
   }
   if(q.age>=q.duration&&q.actor.sourceMove===q)q.actor.sourceMove=null;
  }
  this.active=this.active.filter(q=>q.age<q.duration);
  for(const e of Growth.enemies()){
   if(e.skillStun>0)e.skillStun=Math.max(0,e.skillStun-dt);
   for(const key of ['skillBurn','skillPoison']){const b=e[key];if(!b)continue;b.left-=dt;b.next-=dt;if(b.left<=0)e[key]=null;else if(b.next<=0){hit(e,b.damage);b.next+=.5;}}
  }
 },
 lift(e){const q=this.active.find(q=>q.unit.key==='lee'&&q.slot==='ultimate'&&q.target===e&&q.age>=0);return q?-Math.sin(Math.min(1,q.age/q.duration)*Math.PI)*58:0;},
 survive(a){const u=a===s.p?Growth.main():a.profile;if(u?.key!=='hidan'||a.hp>0||s.t-(a.lastImmortal??-Infinity)<24)return false;a.lastImmortal=s.t;a.hp=1;a.inv=1.5;floating(a.x,a.y-58,'不死之身','#efb5c1');effect(a.x,a.y-20,34,'smoke',.4);return true;},
 draw(entities){for(const q of this.active){entities.push({y:q.composite?q.actor.y:q.y,draw:()=>this.drawClip(q)});if(q.clip.caster&&!q.actor.moving&&q.actor.lastBodyCast===q&&q.age>=0&&q.age<q.clip.caster.duration)entities.push({y:q.actor.y,draw:()=>this.drawCaster(q)});}},
 drawCaster(q){if(q.actor.hp<=0||q.actor.down>0||q.actor.moving)return;const c=q.clip.caster;this.drawClip({...q,clip:c,composite:true,x:q.actor.x,y:q.actor.y,duration:q.motion?.separatedCaster?q.duration:c.duration,travel:0,isCaster:true});},
 drawClip(q){if(q.age<0)return;if(!q.isCaster)SkillMotion.sync(q);const c=q.clip,im=this.cache.get(c.file);if(!im)return;const [w,h]=c.cell,[ax,ay]=c.anchor;let x=(q.isCaster?q.actor.x:q.x)+(c.offset?.[0]||0),y=(q.isCaster?q.actor.y:q.y)+(c.offset?.[1]||0);
  if(!q.motion&&q.travel&&q.age<q.travel){const t=q.age/q.travel;x=q.fromX+(q.x-q.fromX)*t;y=q.fromY+(q.y-q.fromY)*t;}
  const progress=Math.min(1,q.age/q.duration),frame=this.frame(q),scale=q.isCaster?(c.renderScale||1):SkillMotion.scale(q);
  if(q.unit.key==='lee'&&q.slot==='ultimate'&&q.clip.impact&&progress>.62){const impact=q.clip.impact,hitIm=this.cache.get(impact.file);if(hitIm){q.landingPoint??={x:q.geometry?.x??q.x,y:(q.geometry?.y??q.y)+24};const [iw,ih]=impact.cell,i=Math.min(impact.frames-1,Math.floor((progress-.62)/.38*impact.frames));ctx.save();ctx.globalAlpha=Math.min(1,(1-progress)/.15);ctx.drawImage(hitIm,i*iw,0,iw,ih,q.landingPoint.x-impact.anchor[0],q.landingPoint.y-impact.anchor[1],iw,ih);ctx.restore();}}
  if(!q.isCaster)SkillMotion.drawTrail(q);
  ctx.save();ctx.imageSmoothingEnabled=false;ctx.translate(Math.round(x),Math.round(y));if(q.facing<0)ctx.scale(-1,1);ctx.globalAlpha=q.composite?1:Math.max(0,Math.min(1,q.age/.09,(q.duration-q.age)/.18));
  const columns=c.columns||c.frames;ctx.drawImage(im,(frame%columns)*w,Math.floor(frame/columns)*h,w,h,Math.round(-ax*scale),Math.round(-ay*scale),Math.round(w*scale),Math.round(h*scale));ctx.restore();if(!q.isCaster)SkillMotion.drawDebug(q);
 },
 description(slot,l){const u=Growth.main(),k=u.kit[slot];if(!k)return '';if(k.kind==='summon')return k.text+' ['+this.reviewText(k)+']'+` 当前${Growth.cloneCount()}个独立分身；近身忍术范围${s.clone>=5?52:s.clone>=3?44:32}；各自索敌与攻击。`;return k.text+' ['+this.reviewText(k)+']'+` 当前 Lv.${l}：范围×${l>=2?'1.25':'1'}，威力 +${Math.round((l-1)*16)}%${l>=3&&slot!=='ultimate'&&k.kind!=='summon'?'；追加'+(l>=5?'两次':'一次')+'追击':''}${l>=4&&k.kind==='melee'?'；命中击退杂兵':''}${slot==='ultimate'&&l>=2?'；追加一次奥义追击':''}${slot==='ultimate'&&l>=3?'；释放恢复自身8%生命':''}。`;}
};
