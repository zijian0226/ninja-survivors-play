/* Playback of existing enemy frames. Combat statistics remain in the engine. */
window.EnemyArt={
 session:null,bag:[],corpses:[],metrics:{attacks:0,hits:0,deaths:0},
 get files(){return {enemyAtlas:'assets/enemies/atlas.png'};},
 init(){RunFlow.plans[0].sprite='enemy_brute';},
 sync(){if(this.session!==s){this.session=s;this.bag=[];this.corpses=[];this.metrics={attacks:0,hits:0,deaths:0};}},
 pick(elite){
  this.sync();if(elite)return ['brute','brute','redninja','whiteninja'][Math.floor(Math.random()*4)];
  if(!this.bag.length){this.bag=['otoninja','otoninja','otoninja','redninja','redninja','whiteninja','whiteninja','hound','hound','brute'];for(let i=this.bag.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[this.bag[i],this.bag[j]]=[this.bag[j],this.bag[i]];}}
  return this.bag.pop();
 },
 onHit(e){
  this.sync();if(e===s.boss)return;e.hurtAge=0;this.metrics.hits++;
  if(e.hp<=0){this.corpses.push({...e,deathAge:0});if(this.corpses.length>48)this.corpses.shift();this.metrics.deaths++;}
 },
 attack(e){if((e.attackCooldown||0)>0)return;e.attackAge=0;e.attackCooldown=.7;this.metrics.attacks++;},
 update(dt){
  this.sync();for(const e of s.enemies){if(e.hurtAge!=null)e.hurtAge+=dt;if(e.attackAge!=null)e.attackAge+=dt;e.attackCooldown=Math.max(0,(e.attackCooldown||0)-dt);}
  for(const e of this.corpses)e.deathAge+=dt;this.corpses=this.corpses.filter(e=>e.deathAge<.7);
 },
 frame(m,action,age,phase=0){
  const a=m.animations[action]||m.animations.walk;
  const raw=Math.floor(Math.max(0,age)*a.fps+phase);
  return {row:a.row,index:a.loop?raw%a.frames:Math.min(a.frames-1,raw),action:m.animations[action]?action:'walk'};
 },
 pose(e){
  const m=ENEMY_ART_DATA[e.enemyType||'otoninja'];
  if(e.deathAge!=null)return this.frame(m,'death',e.deathAge);
  if(m.animations.hurt&&e.hurtAge!=null&&e.hurtAge<m.animations.hurt.frames/m.animations.hurt.fps)return this.frame(m,'hurt',e.hurtAge);
  if(m.animations.attack&&e.attackAge!=null&&e.attackAge<m.animations.attack.frames/m.animations.attack.fps)return this.frame(m,'attack',e.attackAge);
  return this.frame(m,e.skillStun>0?'idle':'walk',s.t,e.phase||0);
 },
 paint(key,pose,x,y,facing=1,alpha=1,flash=false,elite=false){
  const m=ENEMY_ART_DATA[key],im=images.enemyAtlas;if(!m||!im)return;
  const [w,h]=m.cell,[ax,ay]=m.anchor,scale=m.scale*(elite?1.12:1);
  ctx.save();ctx.imageSmoothingEnabled=false;ctx.translate(Math.round(x),Math.round(y));if(facing<0)ctx.scale(-1,1);ctx.globalAlpha=alpha;
  const shadow=Math.round((key==='hound'?20:13)*scale);ctx.fillStyle=elite?'#d9aa4d66':'#10281e66';ctx.fillRect(-shadow,-3,shadow*2,5);
  if(flash)ctx.globalAlpha*=.7;
  ctx.drawImage(im,pose.index*w,m.sheetY+pose.row*h,w,h,Math.round(-ax*scale),Math.round(-ay*scale),Math.round(w*scale),Math.round(h*scale));ctx.restore();
 },
 drawEnemy(e,lift=0){
  if(!visible(e,100))return;const key=e.enemyType||'otoninja',m=ENEMY_ART_DATA[key],dead=e.deathAge!=null;
  this.paint(key,this.pose(e),e.x,e.y+lift,e.facing,dead?Math.min(1,(.7-e.deathAge)/.2):1,e.hit>0&&!dead,e.elite);
  if(e.elite&&!dead){const y=Math.round(e.y-m.height*1.12-10);ctx.fillStyle='#23332a';ctx.fillRect(e.x-18,y,36,5);ctx.fillStyle='#efb870';ctx.fillRect(e.x-17,y+1,Math.max(0,34*e.hp/e.maxHp),3);}
 },
 drawCorpses(entities){this.sync();for(const e of this.corpses)entities.push({y:e.y,draw:()=>this.drawEnemy(e)});},
 drawActor(key,action,x,y,facing,alpha,phase,flash,age){
  if(!key?.startsWith('enemy_')||!ENEMY_ART_DATA[key.slice(6)])return false;
  const k=key.slice(6),m=ENEMY_ART_DATA[k],pose=this.frame(m,action==='run'?'walk':action==='cast'?'attack':'idle',age??s.t,phase);
  this.paint(k,pose,x,y,facing,alpha,flash,true);return true;
 }
};
