/* In-run egg -> incubation -> one companion. Pixel placeholder art is explicitly original. */
window.TailedBeasts={
 definitions:[
  {key:'kurama',name:'九喇嘛',skill:'查克拉弹',description:'自动追击附近敌人，发射查克拉弹。',damage:44,color:'#efb777'},
  {key:'shukaku',name:'守鹤',skill:'砂弹',description:'砂弹命中后使敌人减速1.5秒。',damage:36,color:'#d4c292'},
  {key:'matatabi',name:'又旅',skill:'蓝焰弹',description:'蓝焰命中并灼烧敌人，持续2秒。',damage:40,color:'#79c5f2'}
 ],
 files:{beastEgg:'assets/tailed-beasts-v62/egg.png',beastKurama:'assets/tailed-beasts-v62/kurama.png',beastShukaku:'assets/tailed-beasts-v62/shukaku.png',beastMatatabi:'assets/tailed-beasts-v62/matatabi.png'},
 create(){return {egg:null,pet:null,drops:0,nextDrop:0,pending:false};},
 get data(){return s.tailedBeast??=(this.create());},
 icon(key){return 'assets/tailed-beasts-v62/'+key+'-icon.png';},
 drop(x,y,reason='normal',force=false){
  if(state!=='play'||s.skillLab&&!force)return false;const data=this.data;
  if(!force){if(s.t<data.nextDrop)return false;const guaranteed=data.drops===0&&(reason==='elite'||reason==='chest'||s.kills>=100);const rate=reason==='elite'?.15:reason==='chest'?.25:.0025;if(!guaranteed&&Math.random()>=rate)return false;}
  const eggs=s.pickups.filter(p=>p.kind==='beastEgg');if(eggs.length>=2){const distant=eggs.filter(p=>dist(p,s.p)>700).sort((a,b)=>dist(b,s.p)-dist(a,s.p))[0];if(!distant&&!force)return false;if(distant)s.pickups=s.pickups.filter(p=>p!==distant);else s.pickups=s.pickups.filter(p=>p!==eggs[0]);}
  dropPickup('beastEgg',x,y);data.drops++;data.nextDrop=s.t+45;lootLog('尾兽蛋 · 靠近拾取');return true;
 },
 collect(){
  const d=this.data;if(d.pet){if(d.pet.level<5){d.pet.level++;toast(d.pet.name+' 强化 / Lv.'+d.pet.level);}else{s.p.hp=Math.min(mainMaxHp(),s.p.hp+mainMaxHp()*.1);toast('尾兽已满级 / 回复10%生命');}this.syncSlot();return;}
  if(!d.egg){d.egg={progress:0,need:40};toast('获得尾兽蛋 / 拾取40点查克拉孵化，不扣角色经验');}else this.feed(20);
  this.syncSlot();
 },
 feed(value){const d=this.data;if(!d.egg||d.pet||!(value>0))return;d.egg.progress=Math.min(d.egg.need,d.egg.progress+value);if(d.egg.progress>=d.egg.need)d.pending=true;this.syncSlot();},
 syncSlot(){const d=this.data;if(d.pet){const p=d.pet;s.summonSkill={name:p.name+' · '+p.skill,level:p.level,icon:this.icon(p.key),description:p.description+' 当前Lv.'+p.level+'；独立行动、不占支援名额，重复尾兽蛋强化，上限Lv.5。'};}else if(d.egg)s.summonSkill={name:'尾兽蛋 · 孵化中',level:0,icon:this.icon('egg'),description:'拾取查克拉孵化：'+d.egg.progress+'/'+d.egg.need+'；不扣除主控经验。'};},
 hatch(key){const def=this.definitions.find(d=>d.key===key);if(!def||!this.data.egg||this.data.egg.progress<this.data.egg.need)return false;this.data.pet={...def,level:1,x:s.p.x-30,y:s.p.y+28,atk:.8,cast:0,facing:1,moving:false};this.data.egg=null;this.data.pending=false;this.syncSlot();$('modal').hidden=true;$('modal').classList.remove('beast-hatch');state='play';toast(def.name+' 已孵化 / 自动协助作战');return true;},
 present(){if(state!=='play'||!this.data.pending)return;state='beast-choice';release();$('modal').hidden=false;$('modal').classList.remove('choice-screen','squad-pause');$('modal').classList.add('beast-hatch');$('modal').innerHTML=`<section class="beast-hatch-panel"><small>守护之力 · 尾兽孵化</small><h2>选择一只尾兽</h2><p>自动协助作战，不占忍者支援名额。</p><div class="beast-options">${this.definitions.map(d=>`<button type="button" data-beast="${d.key}"><img src="${this.icon(d.key)}" alt=""><span><b>${d.name}</b><small>${d.skill}</small><em>${d.description}</em></span></button>`).join('')}</div><p class="beast-note">战斗已暂停 · 本局最多一只尾兽</p></section>`;document.querySelectorAll('[data-beast]').forEach(b=>b.onclick=()=>this.hatch(b.dataset.beast));},
 update(dt){
  const d=this.data,p=d.pet;if(p){if(s.arena)s.world.move(p,0,0,8,s.arena);p.atk-=dt;p.cast=Math.max(0,p.cast-dt);const e=Growth.nearestEnemy(p,420),leash=dist(p,s.p);if(leash>650){p.x=s.p.x-30;p.y=s.p.y+30;}
   const goal=e&&dist(e,s.p)<450?e:{x:s.p.x-35,y:s.p.y+35},gap=dist(p,goal)||1;p.moving=gap>(e?110:22);
   if(p.moving){s.world.move(p,(goal.x-p.x)/gap*160*dt,(goal.y-p.y)/gap*160*dt,8,s.arena);p.facing=goal.x>=p.x?1:-1;}
   if(e&&dist(p,e)<300&&p.atk<=0){const angle=Math.atan2(e.y-24-(p.y-14),e.x-p.x),damage=p.damage*(1+(p.level-1)*.3)*(1+s.teamPower*.1+s.reserve*.02);s.shots.push({x:p.x+p.facing*12,y:p.y-14,px:p.x,py:p.y-14,vx:Math.cos(angle)*320,vy:Math.sin(angle)*320,angle,life:2,damage,r:6,kind:'beast',beast:p.key,color:p.color,element:'beast',growthTarget:e});p.atk=Math.max(.9,3.5*(1-(p.level-1)*.08)*TeamSeven.cooldown());p.cast=.24;}
  }
  if(d.pending&&!s.skillLab)this.present();
 },
 impact(q,e){hit(e,q.damage);if(q.beast==='shukaku')e.slow=Math.max(e.slow||0,1.5);if(q.beast==='matatabi'&&e.hp>0)e.skillBurn={left:2,next:.5,damage:q.damage*.08,source:'matatabi'};effect(q.x,q.y,14,'hit',.25);},
 drawProjectile(q){ctx.fillStyle=q.color;ctx.fillRect(-5,-4,10,8);ctx.fillRect(-3,-6,6,12);ctx.fillStyle='#f0eed7';ctx.fillRect(-2,-2,4,4);ctx.fillStyle=q.color;ctx.globalAlpha=.45;ctx.fillRect(-9,-2,4,4);ctx.globalAlpha=1;},
 drawEgg(p){const im=images.beastEgg;if(im)ctx.drawImage(im,Math.round(p.x-12),Math.round(p.y-25+Math.sin(p.phase*4)*2),24,28);},
 draw(entities){const p=this.data.pet;if(p)entities.push({y:p.y,draw:()=>{const im=images['beast'+p.key[0].toUpperCase()+p.key.slice(1)];if(!im)return;const row=p.cast>0?2:p.moving?1:0,f=Math.floor(s.t*(p.moving?11:7))%4;ctx.save();ctx.translate(Math.round(p.x),Math.round(p.y));if(p.facing<0)ctx.scale(-1,1);ctx.imageSmoothingEnabled=false;ctx.drawImage(im,f*32,row*32,32,32,-16,-29,32,32);ctx.restore();}});
  for(const e of Growth.enemies())if(e.skillBurn?.source==='matatabi')entities.push({y:e.y+1,draw:()=>{ctx.fillStyle='#6dbcf2';for(let i=0;i<3;i++)ctx.fillRect(Math.round(e.x-8+i*7),Math.round(e.y-20-Math.sin(s.t*8+i)*3),3,6);}});
 },
 panel(){const d=this.data;if(d.pet)return `<h3>尾兽 · ${d.pet.name} Lv.${d.pet.level}</h3><p>${d.pet.description} 不占支援名额；重复蛋强化，Lv.5后转为回复10%生命。</p>`;if(d.egg)return `<h3>尾兽蛋 · ${d.egg.progress}/${d.egg.need}</h3><p>拾取查克拉时同步孵化，不扣角色经验。</p>`;return '<h3>尾兽蛋</h3><p>精英怪与宝箱可掉落；靠近拾取后，用查克拉孵化。</p>';},
 hud(){let el=$('beastHud');if(!el){el=document.createElement('button');el.id='beastHud';el.className='beast-hud';el.type='button';el.onclick=()=>{if(state==='play')pause();};$('shell').appendChild(el);}const d=this.data;el.hidden=state==='intro'||(!d.egg&&!d.pet)||!!s.skillLab;if(el.hidden)return;const p=d.pet,egg=d.egg;el.innerHTML=`<img src="${this.icon(p?p.key:'egg')}" alt=""><span><b>${p?p.name+' Lv.'+p.level:'尾兽蛋 '+egg.progress+'/'+egg.need}</b><i><em style="width:${p?100:egg.progress/egg.need*100}%"></em></i></span>`;const root=$('shell').getBoundingClientRect(),hud=document.querySelector('.hud').getBoundingClientRect(),world=$('worldStatus');el.style.top=Math.round(Math.max(hud.bottom,world&&!world.hidden?world.getBoundingClientRect().bottom:0)-root.top+7)+'px';},
 debugPanel(){return '<h3>尾兽蛋调试</h3><button class="debug-upgrade" id="debugEgg">掉落尾兽蛋</button><button class="debug-upgrade" id="debugHatch">测试尾兽孵化</button><button class="debug-upgrade" id="debugHitboxes">技能命中范围：'+(SkillMotion.debug?'开':'关')+'</button>';},
 bindDebug(){if(!DebugMode.enabled)return;const back=()=>{s.debugUsed=true;state='play';$('modal').hidden=true;$('modal').classList.remove('squad-pause');};if($('debugEgg'))$('debugEgg').onclick=()=>{back();this.drop(s.p.x+35,s.p.y,'debug',true);};if($('debugHatch'))$('debugHatch').onclick=()=>{back();this.data.pet=null;this.data.egg={progress:40,need:40};this.data.pending=true;this.syncSlot();this.present();};if($('debugHitboxes'))$('debugHitboxes').onclick=()=>{SkillMotion.debug=!SkillMotion.debug;$('debugHitboxes').textContent='技能命中范围：'+(SkillMotion.debug?'开':'关');};}
};
