/* Portrait-first phone roster. Display choice remains separate from battle loadout. */
window.NinjaRoster=(function(){
 const state={filter:'all',scroll:0},types=['火','风','雷','土','水','阴','阳','全'];
 const colors={'火':'#dc8569','风':'#88b8a5','雷':'#a49bce','土':'#bd986d','水':'#82adce','阴':'#b79cb7','阳':'#d8c487','全':'#d3b9a0'};
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const get=id=>GameData.charById[id],shown=()=>GameData.characters.filter(c=>state.filter==='all'||c.element===state.filter);
 function nature(c){return `<span class="ninja-nature" style="--nature:${colors[c.element]}">${esc(c.element)}</span>`;}
 function open(m,id){state.scroll=m.scrollTop;UI.rosterSel=id;render(m,id);m.scrollTop=0;Sfx.play('click');}
 function render(m,id){
  if(id&&get(id)){detail(m,id);return;}
  const list=shown();
  m.innerHTML=`<section class="ninja-archive"><header class="ninja-archive-head"><div><small>NINJA ARCHIVE</small><h2>忍者档案</h2></div><span><b>${GameData.characters.length}</b> 个开放形态</span></header>
   <div class="ninja-filter-bar" aria-label="按属性筛选"><button type="button" data-attribute="all" class="${state.filter==='all'?'active':''}" aria-pressed="${state.filter==='all'}">全部</button>${types.map(t=>`<button type="button" data-attribute="${t}" class="${state.filter===t?'active':''}" aria-pressed="${state.filter===t}" style="--nature:${colors[t]}"><i>${t}</i><span>${t==='全'?'全属性':t+'遁'}</span></button>`).join('')}</div>
   <div class="ninja-list-caption"><span>${state.filter==='all'?'全部忍者':state.filter==='全'?'全属性忍者':state.filter+'属性忍者'}</span><span>${list.length} 个形态 · 左右滑动筛选</span></div>
   <div class="ro-grid ninja-card-grid">${list.map(c=>{const art=NinjaArt.get(c.id),home=(Save.data.displaySelected||Save.data.selected)===c.id;return `<article class="ro-card ninja-card" data-id="${c.id}" role="button" tabindex="0" aria-label="查看${esc(c.current.name)}详情" style="--nature:${colors[c.element]}"><div class="ninja-card-portrait">${NinjaArt.tag(c.id,'',true,true)}</div><div class="ninja-card-shade"></div>${nature(c)}${home?'<span class="rc-main">首页展示</span>':''}${art.pixel?'<span class="ninja-art-pending">立绘待补</span>':''}<div class="ninja-card-caption"><span>${c.rarity}</span><b>${esc(c.name)}</b><small>${esc(c.current.name===c.name?'':c.current.name)}</small></div></article>`;}).join('')}</div>
   ${!list.length?'<p class="ninja-empty">该属性暂时没有开放形态</p>':''}
   <details class="locked-archive ninja-locked"><summary>未开放图鉴 <span>${CharacterPacks.locked.length} 个形态</span></summary><p>以下形态暂未开放出战。</p><div class="locked-grid">${CharacterPacks.locked.map(c=>`<button disabled class="locked-card">${esc(c.name)}</button>`).join('')}</div></details></section>`;
  const bar=m.querySelector('.ninja-filter-bar');bar.addEventListener('touchmove',e=>{if(e.touches.length===1)e.stopPropagation();},{passive:true});const selected=bar.querySelector('.active');if(selected)bar.scrollLeft=Math.max(0,selected.offsetLeft-bar.clientWidth/2+selected.offsetWidth/2);
  m.querySelectorAll('[data-attribute]').forEach(b=>b.onclick=()=>{state.filter=b.dataset.attribute;Sfx.play('click');render(m);m.scrollTop=0;});
  m.querySelectorAll('.ro-card').forEach(card=>{card.onclick=()=>open(m,card.dataset.id);card.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open(m,card.dataset.id);}};});
 }
 function detail(m,id){
  const c=get(id),art=NinjaArt.get(id),own=Save.data.owned[id],home=(Save.data.displaySelected||Save.data.selected)===id;
  m.innerHTML=`<section class="ninja-detail" style="--nature:${colors[c.element]};--head-x:${art.head[0]};--head-y:${art.head[1]}">
   <header class="ninja-detail-head"><button type="button" id="ninja-back" aria-label="返回忍者列表">〈</button><span>忍者档案</span><small>${c.rarity}</small></header>
   <div class="ninja-detail-hero ${art.pixel?'is-pixel':''}"><div class="ninja-hero-circle"></div>${NinjaArt.tag(id,'ninja-detail-portrait')}<div class="ninja-hero-shade"></div><div class="ninja-detail-title"><span>${c.rarity} <i></i> ${esc(c.element)}属性</span><h2>${esc(c.name)}</h2>${c.name!==c.current.name?`<p>${esc(c.current.name)}</p>`:''}</div></div>
   <div class="ninja-detail-stats"><div><small>属性</small><b>${nature(c)} ${c.element==='全'?'全属性':esc(c.element)+'属性'}</b></div><div><small>基础体力</small><b>${c.current.hp}</b></div><div><small>收藏星级</small><b>${own?.stars||0}<em> / 5</em></b></div></div>
   <div class="ninja-detail-tabs" role="tablist"><button type="button" role="tab" data-detail-tab="skills" aria-selected="true" class="active">忍术技能</button><button type="button" role="tab" data-detail-tab="info" aria-selected="false">角色资料</button></div>
   <div data-detail-panel="skills"><div class="current-skill-list ninja-skill-list">${c.current.skills.map((s,i)=>`<article class="current-skill ninja-skill"><span class="ninja-skill-number">${art.skills[s.kind]?'<img src="'+art.skills[s.kind]+'" alt="" loading="lazy">':['◈','壹','贰','奥'][i]}</span><div><small>${esc(s.slot)}</small><b>${esc(s.name)}</b><p>${esc(s.effect)}</p></div></article>`).join('')}</div><p class="ninja-role-rule">主控技能可在局内强化；支援与主控等级同步，技能维持默认等级，也可释放奥义。</p></div>
   <div data-detail-panel="info" class="ninja-bio" hidden><h3>${esc(c.current.name)}</h3><p>${esc(c.desc)}</p>${art.note?`<p class="ninja-art-note">${esc(art.note)}</p>`:''}<p>首页展示独立于出战选择。开始试炼后，可在出战准备中选择主控。</p></div>
   <footer class="ninja-detail-actions">${Game.debug()?`<button type="button" id="roster-lab" data-test-unit="${id}">技能试放 <span>▷</span></button>`:''}<button type="button" id="btn-setmain" class="ninja-display-action" ${home?'disabled':''}>${home?'首页展示中':'设为首页展示'}</button></footer></section>`;
  m.querySelector('#ninja-back').onclick=()=>{Sfx.play('click');render(m);m.scrollTop=state.scroll;requestAnimationFrame(()=>{m.scrollTop=state.scroll;});};
  m.querySelectorAll('[data-detail-tab]').forEach(b=>b.onclick=()=>{Sfx.play('click');m.querySelectorAll('[data-detail-tab]').forEach(t=>{const yes=t===b;t.classList.toggle('active',yes);t.setAttribute('aria-selected',String(yes));});m.querySelectorAll('[data-detail-panel]').forEach(p=>p.hidden=p.dataset.detailPanel!==b.dataset.detailTab);});
  const lab=m.querySelector('#roster-lab');if(lab)lab.onclick=()=>{Sfx.play('select');document.getElementById('ui').classList.add('hidden');document.getElementById('battle').classList.remove('hidden');Game.start(id,{lab:true});};
  m.querySelector('#btn-setmain').onclick=()=>{Sfx.play('select');if(!own){UI.go('summon');return;}Save.data.displaySelected=id;Save.save();detail(m,id);UI.toast(c.name+' 已设为首页展示');};
 }
 return {render,state};
})();
