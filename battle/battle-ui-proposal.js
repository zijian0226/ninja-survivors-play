/* 战斗 UI 提案（参考同类幸存者游戏的简洁战场，保留暮夜金卷配色）：
 * 1) 顶部一行：暂停 · 生命条(+Lv) · 计时；击破/宝箱/首领进度收成一枚小签；右侧 自动/倍速/地图/构筑 收进暂停菜单。
 * 2) 底部 4 个忍术槽（通用忍术 ×3 + 专属奥义），带冷却遮罩。
 * 3) 伤害数字更安静：小字号、同位置合并、普通伤害半透明，大额才放大金色；命中特效在拥挤时限量。
 * 4) 地面：用现有地块加泥地/碎石/花丛斑块，层次更丰富（无碰撞）。
 * 5) 升级卡：「新招式 / Lv.x›y」标签、一行效果、角色契合行、限次「重选卡牌」。 */
(function(){
'use strict';
const UI=window.BattleUI={rerollMax:3,enabled:true};
document.body.dataset.ui='v068';
const $id=id=>document.getElementById(id);
const esc=t=>String(t??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---------- 1) 顶部 HUD ---------- */
function buildTop(){
 const top=document.querySelector('.battle-top');if(!top||$id('uiHp'))return;
 top.insertAdjacentHTML('beforeend',`<div class="ui-vitals" id="uiVitals"><div class="ui-hp"><i id="uiHp"></i><span id="uiHpText"></span></div><b class="ui-lv" id="uiLv">Lv.1</b></div><div class="ui-chip" id="uiChip"></div>`);
}
function updateTop(){
 if(typeof s==='undefined'||!s?.p)return;buildTop();
 const max=typeof mainMaxHp==='function'?mainMaxHp():1000,hp=Math.max(0,Math.ceil(s.p.hp));
 const bar=$id('uiHp');if(bar){bar.style.width=Math.max(0,Math.min(100,hp/max*100))+'%';bar.parentElement.classList.toggle('low',hp/max<.3);}
 const t=$id('uiHpText');if(t)t.textContent=hp+' / '+Math.round(max);
 const lv=$id('uiLv');if(lv)lv.textContent='Lv.'+s.level;
 const boss=(s.bossLedger||[]).filter(x=>x==='defeated').length;
 const chip=$id('uiChip');if(chip)chip.innerHTML=`<span>击破 <b>${s.kills||0}</b></span><span>宝箱 <b>${s.chestsOpened??(Number($id('chestCount')?.textContent)||0)}</b></span><span>首领 <b>${boss}/3</b></span>`;
}

/* ---------- 暂停菜单：收纳 自动 / 地图 / 构筑 ---------- */
function patchPause(){
 /* 暂停按钮直接绑定原 pause()，因此用 MutationObserver 在暂停菜单出现时注入「地图 / 忍术构筑」 */
 const m=$id('modal');if(!m||m._uiPause)return;
 const inject=()=>{
  const actions=m.querySelector('.pause-actions');
  if(state!=='paused'||!actions||m.querySelector('.ui-pause-quick'))return;
  actions.insertAdjacentHTML('beforebegin','<div class="ui-pause-quick"><button data-ui-quick="map">地图</button><button data-ui-quick="build">忍术构筑</button></div>');
  m.querySelectorAll('[data-ui-quick]').forEach(b=>b.onclick=()=>{
   const k=b.dataset.uiQuick;
   pause();/* 先继续，再打开 */
   (k==='map'?$id('mapButton'):$id('build'))?.click();
  });
 };
 new MutationObserver(inject).observe(m,{childList:true,subtree:true,attributes:true,attributeFilter:['hidden']});
 m._uiPause=true;
}

/* ---------- 2) 底部忍术槽 ---------- */
const cdMax={};
function slotsData(){
 const out=[];
 try{
  for(const x of (window.SkillPool?.owned?.()||[]).slice(0,4)){
   const id=x.skill.id,rem=Math.max(0,s.poolCd?.[id]||0);cdMax[id]=Math.max(rem,cdMax[id]&&rem<=cdMax[id]?cdMax[id]:rem);if(rem<=.13)cdMax[id]=0;
   out.push({name:x.skill.name,icon:SkillPool.iconOf(x.skill),lv:x.level,frac:cdMax[id]>.5?rem/cdMax[id]:0});
  }
  while(out.length<4)out.push(null);
 }catch{}
 return out;
}
let slotSig='';
function renderSlots(){
 const shell=$id('shell');if(!shell||typeof s==='undefined'||!s?.p)return;
 let el=$id('uiSlots');
 if(!el){el=document.createElement('div');el.id='uiSlots';el.className='ui-slots';shell.appendChild(el);}
 el.hidden=!(state==='play'||state==='paused');if(el.hidden)return;
 const d=slotsData(),sig=d.map(x=>x?x.name+x.lv:'-').join('|');
 if(sig!==slotSig){slotSig=sig;el.innerHTML=d.map(x=>x?`<div class="ui-slot${x.ult?' ult':''}" title="${esc(x.name)}"><img src="${esc(x.icon)}" alt=""><i class="ui-cd"></i><small>${x.ult?'奥':'Lv.'+x.lv}</small></div>`:'<div class="ui-slot empty"><span>＋</span></div>').join('');}
 [...el.children].forEach((c,i)=>{const x=d[i];if(!x)return;c.style.setProperty('--cd',x.frac.toFixed(3));c.classList.toggle('ready',x.frac<=0);});
}

/* ---------- 3) 伤害数字 / 命中特效 ---------- */
function patchNumbers(){
 if(typeof floating!=='function'||floating._ui)return;
 const orig=floating;
 floating=function(x,y,text,color){
  if(typeof text!=='number'&&!/^\d+$/.test(String(text)))return orig(x,y,text,color);
  const v=Number(text);
  for(const t of s.texts){if(t.num&&t.life>.3&&Math.abs(t.x-x)<26&&Math.abs(t.y-y)<22){t.num+=v;t.text=String(Math.round(t.num));t.life=Math.max(t.life,.5);t.big=t.num>=UI.bigHit;t.size=t.big?11:9;t.alpha=t.big?1:.62;t.color=t.big?'#ffd36b':'#f3ead2';return;}}
  if(s.texts.length>=18)return;
  const big=v>=UI.bigHit;
  s.texts.push({x,y,text:String(Math.round(v)),num:v,color:big?'#ffd36b':'#f3ead2',life:.6,size:big?11:9,alpha:big?1:.62,big});
 };
 floating._ui=true;
 if(typeof effect==='function'&&!effect._ui){
  const oe=effect;
  effect=function(x,y,r,type,life){
   if(type==='hit'&&s?.fx){let n=0;for(const f of s.fx)if(f.type==='hit')n++;if(n>=10)return;r=(r||22)*.7;}
   return oe(x,y,r,type,life);
  };
  effect._ui=true;
 }
}
UI.bigHit=160;

/* ---------- 4) 地面层次（只用现有 world-tiles 地块） ---------- */
function patchWorld(){
 const W=window.KonohaWorld;if(!W||W.prototype._ui)return;
 const orig=W.prototype.terrainAt;
 W.prototype.vnoise=function(x,y,cell,n){const gx=Math.floor(x/cell),gy=Math.floor(y/cell),fx=x/cell-gx,fy=y/cell-gy,s_=t=>t*t*(3-2*t),a=this.hash(gx,gy,n),b=this.hash(gx+1,gy,n),c=this.hash(gx,gy+1,n),d=this.hash(gx+1,gy+1,n),u=s_(fx),v=s_(fy);return a+(b-a)*u+(c-a)*v+(a-b-c+d)*u*v;};
 W.prototype.terrainAt=function(x,y){
  const base=orig.call(this,x,y);if(base!==0)return base;
  const cx=(x>>5)*32+16,cy=(y>>5)*32+16,j=this.hash(x>>5,y>>5,61)*.08;
  const dirt=this.vnoise(cx,cy,300,71)+j,meadow=this.vnoise(cx,cy,220,73)+j,rock=this.vnoise(cx,cy,180,79)+j;
  if(dirt>.9)return 1;                     /* 小块泥地 */
  if(dirt>.875&&this.hash(x>>5,y>>5,63)>.4)return 4;   /* 泥地边缘：零星沙土 */
  if(rock>.93&&this.hash(x>>5,y>>5,65)>.5)return 7;    /* 零星碎石 */
  if(meadow>.72&&this.hash(x>>5,y>>5,67)>.55)return 6; /* 花丛簇 */
  return base;
 };
 W.prototype._ui=true;
}

/* ---------- 5) 升级卡 ---------- */
function patchUpgrade(){
 if(typeof upgrade!=='function'||upgrade._ui)return;
 const orig=upgrade;
 upgrade=function(force){
  orig.apply(this,arguments);
  if(state!=='upgrade')return;
  const m=$id('modal');m.classList.add('ui-cards');
  const natures=(()=>{try{return SkillPool.natures(s.mainKey)||[];}catch{return [];}})();
  const who=(()=>{try{const n=Growth.main()?.name||'';return n.replace(/（.*?）/g,'').slice(-4);}catch{return '';}})();
  document.querySelectorAll('#modal [data-upgrade]').forEach(btn=>{
   const id=btn.dataset.upgrade;
   const em=btn.querySelector('.choice-footer em');
   let label='',cls='';
   if(id.startsWith('recruit:')){label='招募';cls='recruit';}
   else if(id.startsWith('link:')){label='联动';cls='link';}
   else{
    const lv=id.startsWith('pool:')?(s.pool?.[id.slice(5)]||0):(s[id]||0);
    label=lv?'Lv.'+lv+'›'+(lv+1):'新招式';cls=lv?'up':'new';
   }
   btn.querySelector('.choice-new')?.remove();
   btn.insertAdjacentHTML('afterbegin',`<span class="ui-badge ${cls}">${label}</span>`);
   if(em&&cls==='up')em.textContent=label;
   /* 角色表现：通用忍术与主控属性契合时 +20% 伤害（SkillPool.affinity 的真实数据） */
   if(id.startsWith('pool:')){
    const sk=(SkillPool.lastOffers||[]).find(o=>o.id===id);
    const g=sk?.gate;
    const desc=btn.querySelector('.choice-description');
    if(desc&&g==='中性')desc.insertAdjacentHTML('afterend',`<span class="ui-fit">中性 · ${esc(who)}可正常发挥</span>`);
    else if(desc&&g){desc.insertAdjacentHTML('afterend',natures.includes(g)?`<span class="ui-fit good">${esc(who)} · ${esc(g)}属性契合 伤害+20%</span>`:`<span class="ui-fit">${esc(g)}属性 · ${esc(who)}无加成</span>`);}
   }
  });
  if(s.rerolls==null)s.rerolls=UI.rerollMax;
  const host=m.querySelector('.upgrade-layout');
  if(host&&!host.querySelector('.ui-reroll')){
   host.insertAdjacentHTML('beforeend',`<button class="ui-reroll" ${s.rerolls>0?'':'disabled'}>重选卡牌 <b>${s.rerolls}</b></button>`);
   host.querySelector('.ui-reroll').onclick=()=>{
    if(!(s.rerolls>0)||state!=='upgrade')return;
    s.rerolls--;s.upgradeCount=Math.max(0,(s.upgradeCount||1)-1);
    state='play';m.classList.remove('choice-screen');upgrade(true);
   };
  }
 };
 upgrade._ui=true;
}

/* ---------- 伙伴奥义：释放时头像闪光（呼叫栏本身沿用 SkillPool，点按=手动释放，自动战斗=自动释放） ---------- */
function patchCalls(){
 /* 奥义行：主控奥义排第一（金边、稍大），后接伙伴/联动奥义。
    主控奥义在现有游戏里是自动释放（冷却到 0 且附近有敌人即放），因此这里只显示，不改变释放规则；
    伙伴奥义沿用 SkillPool：点按=释放，自动战斗=自动释放。 */
 const P=window.SkillPool;if(!P||P._ui)return;
 const MAIN='ui:main',flash={};
 let rendering=false,mainMax=0,lastCd=null;
 const mainUnit=()=>RecruitRun.get(s.mainKey)||Growth.main?.();
 const mainBtn=()=>{const u=mainUnit();if(!u)return null;
  const base=(u.kit?.ultimate?.cd||45);if(!mainMax)mainMax=base;
  return {id:MAIN,allies:[{id:u.key,name:u.name,profile:u}],name:SkillLab.ultimates?.[u.key]||u.kit?.ultimate?.name||'奥义',cd:Math.max(mainMax,1),main:true};};
 const buttons=P.buttons;
 P.buttons=function(){const list=buttons.apply(this,arguments);if(!rendering)return list;const m=mainBtn();return m?[m,...list]:list;};
 const charge=P.chargeOf;
 P.chargeOf=function(btn){return btn?.id===MAIN?Math.max(0,s.ultimateCd||0):charge.apply(this,arguments);};
 const fire=P.fireButton;
 P.fireButton=function(btn){if(btn?.id===MAIN)return false;if(btn&&state==='play'&&this.ready(btn))flash[btn.id]=performance.now();const r=fire.apply(this,arguments);if(!r&&btn)delete flash[btn.id];else this.renderBar();return r;};
 const render=P.renderBar;
 P.renderBar=function(){
  if(typeof s==='undefined'||!s){return render.apply(this,arguments);}
  /* 主控奥义释放检测：冷却值突然变大 = 刚放出 */
  const cd=s.ultimateCd??0;if(lastCd!=null&&cd>lastCd+1){mainMax=cd;flash[MAIN]=performance.now();}lastCd=cd;
  rendering=true;let r;try{r=render.apply(this,arguments);}finally{rendering=false;}
  const el=$id('callBar');if(!el||el.hidden)return r;
  const mb=el.querySelector(`[data-call="${MAIN}"]`);
  if(mb){mb.classList.add('ui-main');mb.disabled=true;mb.setAttribute('aria-disabled','true');mb.setAttribute('aria-label',mb.getAttribute('aria-label')+'（自动释放）');}
  const now=performance.now();
  for(const id in flash){
   if(now-flash[id]>650){delete flash[id];continue;}
   el.querySelector(`[data-call="${CSS.escape(id)}"]`)?.classList.add('ui-cast');
  }
  return r;
 };
 P._ui=true;
}

/* ---------- 开局移动提示：首次真正移动（拖动 >8px 或方向键）后淡出，本局不再出现 ---------- */
function updateDragHint(){
 const shell=$id('shell');if(!shell||typeof s==='undefined'||!s)return;
 let el=$id('uiDragHint');
 if(!el){el=document.createElement('div');el.id='uiDragHint';el.className='ui-drag-hint';el.textContent='任意位置拖动移动，松手停止';el.setAttribute('role','status');shell.appendChild(el);}
 if(!s.dragHintDone&&state==='play'){
  const p=typeof pointer!=='undefined'?pointer:null;
  const k=typeof keys!=='undefined'?keys:{};
  const dragged=p&&Math.hypot(p.x-p.sx,p.y-p.sy)>8;
  const keyed=['w','a','s','d','W','A','S','D','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].some(x=>k[x]);
  if(dragged||keyed)s.dragHintDone=true;
 }
 el.hidden=!!s.dragHintDone||!(state==='play'||state==='paused')||!!s.skillLab;
}

/* ---------- 挂接 ---------- */
function hookAll(){patchCalls();patchPause();patchNumbers();patchUpgrade();patchWorld();}
hookAll();
if(typeof reset==='function'&&!reset._ui){const o=reset;reset=function(){const r=o.apply(this,arguments);if(typeof s!=='undefined'&&s)s.rerolls=UI.rerollMax;return r;};reset._ui=true;}
if(typeof tick==='function'&&!tick._ui){
 const o=tick;let acc=0;
 tick=function(dt){o.apply(this,arguments);updateDragHint();acc+=dt;if(acc>=.1){acc=0;updateTop();renderSlots();}};
 tick._ui=true;
}
if(typeof updateHud==='function'&&!updateHud._ui){const o=updateHud;updateHud=function(){const r=o.apply(this,arguments);updateTop();renderSlots();updateDragHint();return r;};updateHud._ui=true;}
})();
