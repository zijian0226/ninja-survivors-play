/* v0.66 暮夜金卷首页（第四版）：立绘居中不遮挡；换人/复位在顶栏下左侧；右上箭头展开 3×3 功能面板；
 * 底部左「限时活动」右「限时抽卡」两个半宽横幅 + 紧凑出战条。 */
window.HomeLobby={
 icon(name,cls=''){const map={coin:'coin',gem:'gouyu'};return map[name]?UIIcons.currency(map[name]):UIIcons.icon(name,'lobby-icon '+cls);},
 top(s,ch,debug){
  const lv=1+Math.floor((s.stats.totalKills||0)/1000),xp=((s.stats.totalKills||0)%1000)/10;
  return `<div class="tb-profile"><div class="tb-avatar"><span><img class="pix" src="${Sprites.headURL(ch.id,3)}" alt=""></span><em>${lv}</em></div><div class="tb-name"><b>木叶忍者</b><div class="profile-meter" aria-hidden="true"><i style="width:${xp}%"></i></div><button id="ui-debug-toggle" class="tb-debug ${debug?'is-on':''}" type="button" role="switch" aria-checked="${debug}">调试${debug?'开':'关'}</button></div></div>
  <div class="tb-cur"><div class="cur-pill">${UIIcons.currency('coin')}<b id="cur-coins">${s.coins}</b><button class="plus" type="button" data-tip="coin" aria-label="金币来源">${UIIcons.icon('plus')}</button></div><div class="cur-pill gy">${UIIcons.currency('gouyu')}<b id="cur-gouyu">${s.gouyu}</b><button class="plus" type="button" data-tip="gy" aria-label="勾玉来源">${UIIcons.icon('plus')}</button></div></div>`;
 },
 hubItems:[['bag','bag','背包'],['mail','mail','邮件',1],['quest','quest','任务'],['notice','notice','公告',1],['gear','gear','设置'],['shop','shop','商城'],['offer','deal','特惠'],['card','monthly','月卡'],['gem','firstpay','首充']],
 render(s,ch){
  const g=GameData.gacha,featured=g.featured,I=UIIcons.icon,n=NinjaRoster.label(ch);
  const best=s.stats.bestTime||0,bestText=best?Math.floor(best/60).toString().padStart(2,'0')+':'+Math.floor(best%60).toString().padStart(2,'0'):'--:--';
  const open=(()=>{try{return localStorage.getItem('hubOpen')==='1';}catch(e){return false;}})();
  const heroArt=NinjaArt.get(featured.includes('sasuke')?'sasuke':featured[0]),hero=heroArt.pixel?heroArt.card:heroArt.file;
  const hub=this.hubItems.map(([a,ic,label,dot],k)=>`<button type="button" class="hub-item" data-home-action="${a}" style="--k:${k}" aria-label="${label}" ${open?'':'tabindex="-1"'}><span class="hub-icon">${I(ic)}${dot?'<i class="red-dot"></i>':''}</span><span class="hub-label">${label}</span></button>`).join('');
  return `<div class="lobby dusk-lobby"><div class="lobby-bg" aria-hidden="true"><div class="konoha-sunset"></div><div class="lobby-veil"></div></div>
   <div class="splash-wrap home-portrait-stage" data-layout="clean65" aria-label="首页立绘，可拖动和双指缩放">${NinjaArt.tag(ch.id,'splash')}</div>
   <div class="home-top-cards portrait-controls"><button type="button" class="home-pill" data-home-action="swap" aria-label="切换首页展示忍者">${I('swap')}换人</button><button type="button" class="home-pill" data-portrait-reset aria-label="恢复默认构图">${I('reset')}复位</button></div>
   <div class="home-hub ${open?'open':''}" id="home-hub"><button type="button" class="hub-toggle" id="hub-toggle" aria-expanded="${open}" aria-controls="hub-panel" aria-label="${open?'收起功能':'展开功能'}">${I('chevronDown')}<i class="red-dot"></i></button><nav class="hub-panel" id="hub-panel" aria-label="功能入口">${hub}</nav></div>
   <section class="home-dock" aria-label="出战">
    <div class="home-nametag"><b>${n.name}</b>${n.form?`<small>${n.form}</small>`:''}<span class="rar rar-${ch.rarity}">${ch.rarity}</span></div>
    <div class="home-banners">
     <button type="button" class="home-banner event" data-home-action="gift" aria-label="限时活动">${I('event','ghost')}<span class="medal">${I('event')}</span><span class="copy"><b>限时活动</b><small>敬请期待</small></span></button>
     <button type="button" class="home-banner gacha" data-go="summon" aria-label="限时抽卡：${g.bannerName}"><img class="hero" src="${hero}" alt=""><span class="copy"><b>${g.bannerName.split('·').pop().trim()}</b><small><span class="seal-tag">限时</span>SSR <i>UP</i></small></span></button>
    </div>
    <div class="home-trial"><div class="trial-copy"><h2>木叶试炼场</h2><p>最佳 <b>${bestText}</b></p></div><button id="btn-battle" class="btn btn-primary" type="button">${I('sword')}<span class="battle-word">出战</span></button></div>
   </section>
  </div>`;
 },
 bind(m,ui,modal){
  const tips={mail:['邮件','暂无新邮件。'],quest:['试炼记录',`累计击杀 <b>${Save.data.stats.totalKills}</b><br>出战 <b>${Save.data.stats.runs}</b> 次 · 通关 <b>${Save.data.stats.wins}</b> 次`],gift:['限时活动','限定召唤开放中，前往「召唤」查看。'],notice:['公告','53 名角色、64 个形态可上阵。<br>单人开局，局内 Lv.3/7/12 招募同伴，以奥义按钮支援。<br>每局 15 分钟，两名小首领、一名大首领。'],shop:['商城','暂未开放，敬请期待。'],offer:['特惠','暂未开放。试炼可获得金币与勾玉。'],card:['月卡','暂未开放，敬请期待。'],gem:['首充','本作无付费内容。']};
  const hub=m.querySelector('#home-hub'),tg=m.querySelector('#hub-toggle');
  const setHub=open=>{hub.classList.toggle('open',open);tg.setAttribute('aria-expanded',String(open));tg.setAttribute('aria-label',open?'收起功能':'展开功能');hub.querySelectorAll('.hub-item').forEach(b=>open?b.removeAttribute('tabindex'):b.setAttribute('tabindex','-1'));try{localStorage.setItem('hubOpen',open?'1':'0');}catch(e){}};
  tg.onclick=()=>{Sfx.play('click');setHub(!hub.classList.contains('open'));};
  m.querySelectorAll('[data-home-action]').forEach(b=>b.onclick=()=>{Sfx.play('click');const a=b.dataset.homeAction;if(a==='gear')ui.go('settings');else if(a==='bag')ui.go('inventory');else if(a==='swap')ui.go('roster');else if(a==='prep')ui.openBattlePrep();else if(tips[a])modal(tips[a][0],`<p class="home-info-copy">${tips[a][1]}</p>`);});
  m.querySelector('#btn-battle').onclick=()=>{Sfx.play('select');ui.openBattlePrep();};
 },
 inventory(m){const s=Save.data;m.innerHTML=`<div class="page"><header class="page-head page-back"><button type="button" class="icon-btn" id="inventory-back" aria-label="返回首页">${UIIcons.icon('chevronLeft')}</button><h2>背包</h2></header>
  <section class="card inventory-panel"><div class="list-row">${UIIcons.currency('coin')}<b>金币</b><strong>${s.coins}</strong></div><div class="list-row">${UIIcons.currency('gouyu')}<b>勾玉</b><strong>${s.gouyu}</strong></div></section>
  <section class="card empty-state"><span class="empty-icon">${UIIcons.icon('bag')}</span><b>暂无道具</b><p>战斗奖励自动存入。</p></section></div>`;
  m.querySelector('#inventory-back').onclick=()=>{Sfx.play('click');UI.go('lobby');};}
};
