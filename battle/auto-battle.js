/* Optional main-character navigation. Uses ordinary input/movement, never edits cooldowns or damage. */
window.AutoBattle={
 create(){return {enabled:false,manualUntil:0,nextPlan:0,target:null,goal:null,vector:{x:0,y:0},heading:{x:0,y:0},reason:'已关闭'};},
 get data(){return s.autoBattle??=(this.create());},
 manual(){return !!pointer||['w','a','s','d','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].some(k=>keys[k]);},
 active(){return state==='play'&&!s.skillLab&&s.p.hp>0&&this.data.enabled&&!this.manual()&&performance.now()>=this.data.manualUntil;},
 set(value){if(state!=='play'||s.skillLab)return;const d=this.data;d.enabled=!!value;d.manualUntil=0;d.nextPlan=0;d.target=null;d.goal=null;d.vector={x:0,y:0};d.heading={x:0,y:0};d.reason=value?'寻找目标':'已关闭';this.hud();toast(value?'自动战斗开启 / 拖动即可接管，松手1秒后恢复':'自动战斗关闭 / 手动走位');},
 hostiles(){return Growth.enemies().filter(e=>!OriginalNinja.charmed(e));},
 rank(e){const distance=dist(e,s.p),d=this.data;return -distance+(e===d.target?55:0)+(e===s.boss?(['recover','stun'].includes(e.phase)?115:65):e.elite?30:0)+(e.hp<30?22:0);},
 aim(range=520,chests=false){const list=this.hostiles().filter(e=>dist(e,s.p)<=range);if(list.length)return list.reduce((a,b)=>this.rank(a)>=this.rank(b)?a:b);if(chests)return s.chests.filter(c=>!c.opened&&c.hp>0&&this.inside(c)&&dist(c,s.p)<=range).sort((a,b)=>dist(a,s.p)-dist(b,s.p))[0];},
 inside(p,pad=12){const b=s.arena||{x:32,y:32,w:s.world.width-64,h:s.world.height-64};return p.x>=b.x+pad&&p.x<=b.x+b.w-pad&&p.y>=b.y+pad&&p.y<=b.y+b.h-pad;},
 distance(){
  const u=Growth.main(),d=this.data,target=d.target,low=s.p.hp/mainMaxHp()<.35;
  if(!target)return 110;if(target.kind==='chest')return 85;
  if(!low){
   const live=SkillArt.active.find(q=>q.actor===s.p&&q.age>=0&&q.age<q.damageEnd&&(['melee','aura','transform'].includes(q.motion?.mode)||q.motion?.mode==='planted'&&!q.released));
   if(live)return clamp((live.kit.range||64)*.66,44,76);
   if(OriginalNinja.avatar(s.p)||OriginalNinja.effects.some(q=>q.actor===s.p&&q.slot==='primary'&&q.age<1.15))return 76;
   const slots=[['primary',s.jutsuAtk],['secondary',s.cloneAtk],['ultimate',s.ultimateCd]];for(const[slot,cd]of slots){const k=u.kit[slot],mode=SkillMotion.data(u.key,slot)?.mode||(u.key===OriginalNinja.key?{primary:'aura',secondary:'projectile',ultimate:'transform'}[slot]:null);
   const contact=['melee','planted','aura','transform'].includes(mode)||(u.key==='original_hiri'&&slot==='ultimate');
   if(contact&&!k.noDamage&&cd<.8)return clamp((k.range||64)*.66,44,76);
  }}
  const ready=['primary','secondary','ultimate'].filter((slot,i)=>[s.jutsuAtk,s.cloneAtk,s.ultimateCd][i]<.8&&!u.kit[slot].noDamage).map(slot=>u.kit[slot].range||400);
  return low?155:ready.length?clamp(Math.min(...ready)*.8,60,120):120;
 },
 goal(){
  const p=s.p,hp=p.hp/mainMaxHp(),d=this.data,danger=s.boss&&['warn','dash'].includes(s.boss.phase);let best=null,bestScore=-Infinity;
  if(!danger){for(const item of s.pickups){if(item.taken||!this.inside(item))continue;const gap=dist(item,p);let score=-Infinity;
    if(item.kind==='food'&&hp<.65&&gap<520)score=(hp<.35?1000:420)-gap;
    else if(item.kind==='beastEgg'&&gap<340)score=400-gap;
    else if(item.kind==='skill'&&gap<300)score=340-gap;
    else if(item.kind==='magnet'&&s.gems.length>=8&&gap<280)score=290-gap;
    if(score>bestScore){best=item;bestScore=score;}
   }
   for(const gem of s.gems){const gap=dist(gem,p);if(gap>(d.target?210:480)||!this.inside(gem)||gem.taken)continue;const score=165-gap*.7+Math.min(45,gem.value*2);if(score>bestScore){best=gem;bestScore=score;}}
  }
  if(best&&bestScore>35)return {kind:'loot',item:best,x:best.x,y:best.y};
  if(d.target)return {kind:'fight',item:d.target,x:d.target.x,y:d.target.y};
  const chest=this.aim(1000,true);if(chest)return {kind:'fight',item:chest,x:chest.x,y:chest.y};
  return {kind:'wait',x:p.x,y:p.y};
 },
 dangerCost(point,t){const b=s.boss;if(!b||!['warn','dash'].includes(b.phase))return 0;const plan=RunFlow.plans[s.bossStep];
  if(b.pattern==='pulse')return Math.max(0,(plan.radius||112)+30-dist(point,b))*80;
  if(!b.dash)return 0;const a=b.phase==='dash'?b:b.dash,length=plan.move*(b.phase==='dash'?Math.max(0,b.timer):.65),end={x:a.x+b.dash.dx*length,y:a.y+b.dash.dy*length};
  return Math.max(0,47-segmentDistance(point,a,end))*180;
 },
 plan(){
  const d=this.data,p=s.p;d.target=this.aim(650)||null;d.goal=this.goal();const goal=d.goal,desired=this.distance(),near=this.hostiles().filter(e=>dist(e,p)<360).sort((a,b)=>dist(a,p)-dist(b,p)).slice(0,24),speed=175*(Growth.main().movement||1);let best=null,bestScore=-Infinity;
  if(goal.kind==='wait'){d.vector={x:0,y:0};d.heading=d.vector;d.reason='等待';return;}
  const candidates=[{x:0,y:0}];for(let i=0;i<24;i++){const a=i*Math.PI/12;for(const speed of [.25,.55,1])candidates.push({x:Math.cos(a)*speed,y:Math.sin(a)*speed});}
  for(const v of candidates){let score=0;for(const time of [.15,.35,.55]){const q={x:p.x+v.x*speed*time,y:p.y+v.y*speed*time};
    if(!this.inside(q,16))score-=12000;
    score-=this.dangerCost(q,time);
    for(const e of near){const gap=dist(e,p)||1,advance=Math.min(gap,(e.speed||0)*time),ex=e.x+(p.x-e.x)/gap*advance,ey=e.y+(p.y-e.y)/gap*advance,range=Math.hypot(q.x-ex,q.y-ey),touch=(e.r||12)+23;
     if(range<touch)score-=1500+(touch-range)*90;
     else if(range<80)score-=(80-range)*.5;
    }
    const gap=dist(q,goal);score-=goal.kind==='fight'?Math.abs(gap-desired)*.9:goal.kind==='loot'?gap:0;
   }
   // A small heading bonus prevents left/right jitter without delaying danger responses.
   score+=(v.x*d.heading.x+v.y*d.heading.y)*5;if(!v.x&&!v.y)score+=3;
   if(score>bestScore){bestScore=score;best=v;}
  }
  d.vector=best||{x:0,y:0};d.heading=d.vector;d.reason=s.boss&&['warn','dash'].includes(s.boss.phase)?'避险':goal.kind==='loot'?'拾取':goal.kind==='fight'?'接敌':'等待';
 },
 input(dt){const d=this.data;if(!d.enabled||s.skillLab)return null;if(this.manual()){d.manualUntil=performance.now()+1000;d.nextPlan=0;return null;}if(performance.now()<d.manualUntil)return null;d.nextPlan-=dt;if(d.nextPlan<=0){this.plan();d.nextPlan=.12;}return d.vector;},
 hud(){let el=$('autoBattle');if(!el){el=document.createElement('button');el.id='autoBattle';el.className='battle-auto';el.type='button';el.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.5 8A7 7 0 1 0 19 15M18.5 3v5h-5M10 8l6 4-6 4Z"/></svg><span>自动</span>';$('shell').appendChild(el);el.onclick=()=>this.set(!this.data.enabled);}
  el.hidden=state==='intro'||!document.body.dataset.playing||!!s.skillLab;const d=this.data,manual=d.enabled&&(this.manual()||performance.now()<d.manualUntil);el.dataset.mode=d.enabled?(manual?'manual':'on'):'off';el.setAttribute('aria-pressed',String(d.enabled));el.setAttribute('aria-label',d.enabled?(manual?'自动战斗已开启，手动接管中':'自动战斗已开启，点击关闭'):'自动战斗已关闭，点击开启');el.querySelector('span').textContent=manual?'接管':'自动';
 },
 init(){this.hud();const nearestEnemy=Growth.nearestEnemy;Growth.nearestEnemy=function(actor=s.p,range=520){return actor===s.p&&AutoBattle.active()?AutoBattle.aim(range):nearestEnemy.call(this,actor,range);};}
};
AutoBattle.init();
