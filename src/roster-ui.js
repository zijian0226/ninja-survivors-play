/* Portrait-first phone roster. Display choice remains separate from battle loadout.
 * v0.66: 卡框按真实稀有度（R/SR/SSR）；SSR 金色流光+火花+呼吸光，SR 紫色流光+星芒，纯 CSS；离屏卡片由 IntersectionObserver 暂停动画。 */
window.NinjaRoster=(function(){
 const state={filter:'all',scope:'phase',scroll:0},types=['火','风','雷','土','水','阴','阳','全'];
 const colors={'火':'#F0663A','风':'#4FC6A0','雷':'#F2CF4A','土':'#C8955A','水':'#4A9BEA','阴':'#8F7BE0','阳':'#F6E7B0','全':'#A9B0C2'};
 let io=null;
 function rnd(seed){let x=seed*9301+49297;return()=>((x=(x*9301+49297)%233280)/233280);}
 function fx(r,i){
  if(r!=='SSR'&&r!=='SR')return '';
  const R=rnd(i+7),pick=a=>a[Math.floor(R()*a.length)];let out=`<span class="sweep" style="--d:${(i*.45%3.6).toFixed(2)}s"></span>`;
  if(r==='SSR'){out+='<span class="ember-glow"></span>';for(let k=0;k<6;k++)out+=`<span class="spark" style="left:${8+Math.round(R()*80)}%;--s:${pick([4,5,6,7])}px;--b:${24+Math.round(R()*34)}%;--t:${(2.2+R()*1.4).toFixed(2)}s;--d:${(R()*3).toFixed(2)}s;--x:${Math.round(R()*28-14)}px"></span>`;}
  else for(let k=0;k<4;k++)out+=`<span class="twinkle" style="left:${10+Math.round(R()*75)}%;top:${10+Math.round(R()*50)}%;--s:${pick([8,10,12])}px;--t:${(2+R()*1.2).toFixed(2)}s;--d:${(R()*2.5).toFixed(2)}s"></span>`;
  return out;
 }
 function watch(m){
  io?.disconnect();io=null;const cards=m.querySelectorAll('.ninja-card.fx');if(!cards.length||typeof IntersectionObserver==='undefined')return;
  cards.forEach(c=>c.classList.add('fx-off'));
  io=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('fx-off',!e.isIntersecting)),{root:m,rootMargin:'60px 0px'});
  cards.forEach(c=>io.observe(c));
 }
 const icons={'火':'fire.png','风':'wind.png','雷':'lightning.png','土':'earth.png','水':'water.png','阴':'yin.svg','阳':'yang.svg','全':'all.svg'};
 const logo=t=>`<img class="nature-logo" src="assets/nature-icons/${icons[t]}" alt="" draggable="false">`;
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const get=id=>GameData.charById[id],shown=()=>GameData.characters.filter(c=>(state.scope==='phase'?!!c.phaseOne:!c.phaseOne)&&(state.filter==='all'||c.element===state.filter));
 const displayNames={
  naruto:['漩涡鸣人',''],naruto_sage:['漩涡鸣人','仙人模式'],naruto_four_tail:['漩涡鸣人','四尾化'],naruto_one_tail:['漩涡鸣人','一尾化'],naruto_kurama:['漩涡鸣人','九尾查克拉'],
  sasuke:['宇智波佐助',''],sasuke_curse:['宇智波佐助','咒印二'],sasuke_hebi:['宇智波佐助','鹰小队'],sasuke_susanoo:['宇智波佐助','须佐能乎'],
  sakura:['春野樱',''],sakura_war:['春野樱','三忍'],jiraiya:['自来也',''],jiraiya_sage:['自来也','仙人模式'],killerbee:['奇拉比',''],killerbee_eight_tail:['奇拉比','八尾化'],
  pain:['佩恩','天道'],pain_asura:['佩恩','修罗道'],pain_animal:['佩恩','畜生道'],kakashi_kamui:['旗木卡卡西','神威'],guy_death_gate:['迈特凯','死门'],obito:['宇智波带土','忍界大战']
 };
 function label(c){const parts=displayNames[c.id]||[(c.phaseOne?.name||c.name).replace(/^普通/,'').replace(/（疾风传）/g,''),''];return {name:parts[0],form:parts[1]};}
 /* v0.66.5：卡片只放胸部以上的裁切图（tools/build-roster-busts.py，傀儡师只取本人）；缺图时回退到旧卡图。名字不再显示在卡面上（无障碍名称与悬停提示保留）。 */
 function bust(c){const b=window.RosterBusts?.[c.id];return b?`<img class="${b.pixel?'pix':'portrait'} ninja-bust" src="${b.file}" alt="" loading="lazy" decoding="async" draggable="false">`:NinjaArt.tag(c.id,'',true,true);}
 function nature(c){return `<span class="ninja-nature" role="img" aria-label="${c.element}属性" title="${c.element}属性" style="--nature:${colors[c.element]}">${logo(c.element)}</span>`;}
 function open(m,id){state.scroll=m.scrollTop;UI.rosterSel=id;render(m,id);m.scrollTop=0;Sfx.play('click');}
 function render(m,id){
  if(id&&get(id)){detail(m,id);m.scrollTop=0;return;}
  const list=shown(),pool=GameData.characters.filter(c=>state.scope==='phase'?!!c.phaseOne:!c.phaseOne),locked=CharacterPacks.locked.filter(c=>!PhaseOneRoster.sourceIds.includes(c.id));
  m.innerHTML=`<section class="page ninja-archive"><header class="page-head ninja-archive-head"><h2>忍者档案</h2><span class="page-meta"><b>${list.length}</b>/${pool.length}</span></header>
   <div class="segmented ninja-scope-bar"><button type="button" data-roster-scope="phase" aria-pressed="${state.scope==='phase'}">第一阶段 <b>53</b></button><button type="button" data-roster-scope="legacy" aria-pressed="${state.scope==='legacy'}">其他已接入 <b>${GameData.characters.filter(c=>!c.phaseOne).length}</b></button></div>
   <div class="chip-row ninja-filter-bar" aria-label="按属性筛选"><button type="button" data-attribute="all" class="chip ${state.filter==='all'?'active':''}" aria-pressed="${state.filter==='all'}">全部</button>${types.map(t=>`<button type="button" data-attribute="${t}" aria-label="筛选${t}属性" title="${t}属性" class="chip ${state.filter===t?'active':''}" aria-pressed="${state.filter===t}" style="--nature:${colors[t]}">${logo(t)}<span>${t}</span></button>`).join('')}</div>
   <div class="ro-grid ninja-card-grid">${list.map((c,index)=>{const art=NinjaArt.get(c.id),n=label(c),r=c.rarity==='SSR'||c.rarity==='SR'?c.rarity:'R',home=(Save.data.displaySelected||Save.data.selected)===c.id,st=Save.data.owned[c.id]?.stars||0;return `<article class="ro-card ninja-card rarity-${r.toLowerCase()} ${r!=='R'?'fx':''} ${home?'is-displayed':''}" data-id="${c.id}" data-composition="${art.composition||'full'}" data-framing="${art.framing.presentation?.mode||'legacy'}" role="button" tabindex="0" aria-label="查看${esc(n.name)}${n.form?' · '+esc(n.form):''}详情" title="${esc(n.name)}${n.form?' · '+esc(n.form):''}" style="--nature:${colors[c.element]}">${r!=='R'?'<span class="rim"></span>':''}<div class="card-in"><div class="ninja-card-portrait">${bust(c)}</div>${fx(r,index)}${home?'<span class="rc-main" title="首页展示中">展</span>':''}${art.pixel?'<span class="ninja-art-pending">待补</span>':''}<div class="ninja-card-caption"><span class="pips" aria-label="${st}星">${[0,1,2,3,4].map(k=>`<i class="${k<st?'on':''}"></i>`).join('')}</span><span class="rar-display rar-${r.toLowerCase()}" data-text="${r}" aria-label="稀有度 ${r}">${r}</span></div></div>${nature(c)}</article>`;}).join('')}</div>
   ${!list.length?`<div class="card empty-state ninja-empty">${UIIcons.icon('ninja','empty-icon')}<p>该属性暂时没有开放形态</p></div>`:''}
   <details class="card locked-archive ninja-locked"><summary>未开放图鉴 <span>${locked.length}</span></summary><div class="locked-grid">${locked.map(c=>`<button disabled class="locked-card">${esc(c.name)}</button>`).join('')}</div></details></section>`;

  watch(m);
  m.querySelectorAll('[data-roster-scope]').forEach(b=>b.onclick=()=>{state.scope=b.dataset.rosterScope;Sfx.play('click');render(m);m.scrollTop=0;});
  m.querySelectorAll('[data-attribute]').forEach(b=>b.onclick=()=>{state.filter=b.dataset.attribute;Sfx.play('click');render(m);m.scrollTop=0;});
  m.querySelectorAll('.ro-card').forEach(card=>{card.onclick=()=>open(m,card.dataset.id);card.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open(m,card.dataset.id);}};});
 }
 function detail(m,id){
  io?.disconnect();io=null;
  const c=get(id),art=NinjaArt.get(id),n=label(c),spec=art.framing.presentation?.detail,detailScale=spec?spec.headHeight/(art.framing.headBox[3]-art.framing.headBox[1]):0,own=Save.data.owned[id],home=(Save.data.displaySelected||Save.data.selected)===id;
  m.innerHTML=`<section class="ninja-detail" style="--nature:${colors[c.element]};--head-x:${art.head[0]};--head-y:${art.head[1]};--portrait-height:${detailScale*100}%;--portrait-top:${spec?(spec.headCenterY-detailScale*art.head[1])*100:0}%">
   <header class="ninja-detail-head"><button type="button" class="icon-btn" id="ninja-back" aria-label="返回忍者列表">${UIIcons.icon('chevronLeft')}</button><span>忍者档案</span><small class="rar rar-${c.rarity}">${c.rarity}</small></header>
   <div data-portrait-id="${c.id}" class="ninja-detail-hero ${art.pixel?'is-pixel':art.framing.presentation?'is-calibrated':art.fullFigure?'is-full-figure':art.framing.layout==='group'?'is-group':art.framing.layout==='creature'?'is-beast':art.composition==='bust'?'is-bust':art.composition==='beast'?'is-beast':''}"><button type="button" class="btn btn-secondary btn-sm ninja-full-view" id="ninja-full-view">${UIIcons.icon('expand')}查看全图</button><div class="ninja-hero-circle"></div>${NinjaArt.tag(id,'ninja-detail-portrait')}<div class="ninja-hero-shade"></div><div class="ninja-detail-title"><span><em class="rar rar-${c.rarity}">${c.rarity}</em><em class="el-tag" data-el="${esc(c.element)}">${esc(c.element)}属性</em></span><h2>${esc(n.name)}</h2>${n.form?`<p class="ninja-form-tag">${esc(n.form)}</p>`:''}</div></div>
   <div class="ninja-detail-stats"><div><small>属性</small><b>${nature(c)} ${c.element==='全'?'全属性':esc(c.element)+'属性'}</b></div><div><small>基础体力</small><b>${c.current.hp??'待配置'}</b></div><div><small>收藏星级</small><b>${own?.stars||0}<em> / 5</em></b></div></div>
   <div class="ninja-detail-tabs" role="tablist"><button type="button" role="tab" data-detail-tab="skills" aria-selected="true" class="active">${c.catalogOnly?'技能方案':'当前技能'}</button><button type="button" role="tab" data-detail-tab="info" aria-selected="false">角色资料</button></div>
   <div data-detail-panel="skills"><div class="current-skill-list ninja-skill-list">${c.current.skills.map((s,i)=>`<article class="current-skill ninja-skill"><span class="ninja-skill-number">${art.skills[s.kind]?'<img src="'+art.skills[s.kind]+'" alt="" loading="lazy">':['◈','壹','贰','奥'][i]}</span><div><small>${esc(s.slot)}</small><b>${esc(s.name)}</b><p>${esc(s.effect)}</p></div></article>`).join('')}</div>${c.catalogOnly?'<p class="ninja-role-rule">战斗待制作，可设为首页展示。</p>':''}</div>
   <div data-detail-panel="info" class="ninja-bio" hidden><h3>${esc(n.name)}${n.form?' · '+esc(n.form):''}</h3><p>${esc(c.desc)}</p>${c.phaseOne&&!c.catalogOnly?`<div class="ninja-phase-plan"><h4>第一阶段技能方案</h4>${c.phaseOne.draft.skills.map((n,i)=>`<p>${['被动','技能一','技能二','奥义'][i]} · ${esc(n)}</p>`).join('')}</div>`:''}${art.note?`<p class="ninja-art-note">${esc(art.note)}</p>`:''}</div>
   <footer class="ninja-detail-actions">${Game.debug()&&Game.available(c)?`<button type="button" class="btn btn-secondary" id="roster-lab" data-test-unit="${id}">技能试放 ${UIIcons.icon('play')}</button>`:''}<button type="button" id="btn-setmain" class="btn ${home?'btn-disabled':'btn-primary'} ninja-display-action" ${home?'disabled':''}>${home?'首页展示中':'设为首页展示'}</button></footer></section>`;
  m.querySelector('#ninja-full-view').onclick=()=>UI.modal(esc(n.name)+(n.form?' · '+esc(n.form):''),`<img class="ninja-full-image" src="${esc(art.file)}" alt="${esc(n.name)}完整立绘">`);
  m.querySelector('#ninja-back').onclick=()=>{Sfx.play('click');render(m);m.scrollTop=state.scroll;requestAnimationFrame(()=>{m.scrollTop=state.scroll;});};
  m.querySelectorAll('[data-detail-tab]').forEach(b=>b.onclick=()=>{Sfx.play('click');m.querySelectorAll('[data-detail-tab]').forEach(t=>{const yes=t===b;t.classList.toggle('active',yes);t.setAttribute('aria-selected',String(yes));});m.querySelectorAll('[data-detail-panel]').forEach(p=>p.hidden=p.dataset.detailPanel!==b.dataset.detailTab);});
  const lab=m.querySelector('#roster-lab');if(lab)lab.onclick=()=>{Sfx.play('select');document.getElementById('ui').classList.add('hidden');document.getElementById('battle').classList.remove('hidden');Game.start(id,{lab:true});};
  m.querySelector('#btn-setmain').onclick=()=>{Sfx.play('select');if(!own){UI.go('summon');return;}Save.data.displaySelected=id;Save.save();detail(m,id);UI.toast(n.name+' 已设为首页展示');};
 }
 return {render,state,label};
})();
