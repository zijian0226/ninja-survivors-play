/* v0.65: light unified lobby. Portrait centered between the slim banner and the trial dock; all entries kept. */
window.HomeLobby={
 icon(name,cls=''){const map={coin:'coin',gem:'gouyu'};return map[name]?UIIcons.currency(map[name]):UIIcons.icon(name,'lobby-icon '+cls);},
 top(s,ch,debug){
  const lv=1+Math.floor((s.stats.totalKills||0)/1000),xp=((s.stats.totalKills||0)%1000)/10;
  return `<div class="tb-profile"><div class="tb-avatar"><img class="pix" src="${Sprites.headURL(ch.id,3)}" alt=""></div><div class="tb-name"><b>木叶忍者 <em>Lv.${lv}</em></b><div class="profile-meter" aria-hidden="true"><i style="width:${xp}%"></i></div><button id="ui-debug-toggle" class="tb-debug ${debug?'is-on':''}" type="button" role="switch" aria-checked="${debug}">调试${debug?'开启':'关闭'}</button></div></div>
  <div class="tb-cur"><div class="cur-pill">${UIIcons.currency('coin')}<b id="cur-coins">${s.coins}</b><button class="plus" type="button" data-tip="coin" aria-label="金币来源">${UIIcons.icon('plus')}</button></div><div class="cur-pill gy">${UIIcons.currency('gouyu')}<b id="cur-gouyu">${s.gouyu}</b><button class="plus" type="button" data-tip="gy" aria-label="勾玉来源">${UIIcons.icon('plus')}</button></div></div>`;
 },
 render(s,ch){
  const main=GameData.charById[s.selected],featured=GameData.gacha.featured,I=UIIcons.icon;
  const best=s.stats.bestTime||0,bestText=Math.floor(best/60).toString().padStart(2,'0')+':'+Math.floor(best%60).toString().padStart(2,'0');
  const entry=(action,icon,label)=>`<button type="button" class="home-entry" data-home-action="${action}" aria-label="${label}"><span class="home-entry-icon">${I(icon)}</span><span class="home-entry-label">${label}</span></button>`;
  return `<div class="lobby centered-lobby clean-lobby"><div class="lobby-bg" aria-hidden="true"><div class="konoha-sunset"></div><div class="lobby-veil"></div></div>
   <div class="splash-wrap home-portrait-stage" data-layout="clean65" aria-label="首页居中立绘，可拖动和双指缩放">${NinjaArt.tag(ch.id,'splash')}</div>
   <div class="lobby-cards home-top-cards">
    <button class="home-summon" type="button" data-go="summon" aria-label="限定召唤"><span class="summon-tag">限定召唤</span><span class="summon-copy"><b>${GameData.gacha.bannerName.split('·').pop().trim()}</b><small>概率UP · 点击前往召唤</small></span><img class="summon-hero" src="${NinjaArt.get(featured.includes('sasuke')?'sasuke':featured[0]).card}" alt=""><span class="banner-dots" aria-hidden="true"><i class="active"></i><i></i><i></i><i></i></span><span class="banner-chevron">${I('chevronRight')}</span></button>
   </div>
   <nav class="home-side home-side-left lobby-shortcuts" aria-label="快捷功能">${entry('mail','mail','邮件')}${entry('quest','quest','任务')}${entry('gift','gift','活动')}${entry('notice','notice','公告')}${entry('gear','gear','设置')}</nav>
   <aside class="home-side home-side-right lobby-rail" aria-label="补给入口">${entry('shop','shop','商城')}${entry('offer','gift','特惠')}${entry('card','card','月卡')}${entry('gem','diamond','首充')}
    <div class="portrait-controls"><button type="button" class="home-entry" data-home-action="swap" aria-label="切换首页展示忍者"><span class="home-entry-icon">${I('swap')}</span><span class="home-entry-label">换人</span></button><button type="button" class="home-entry" data-portrait-reset aria-label="恢复默认居中构图"><span class="home-entry-icon">${I('reset')}</span><span class="home-entry-label">复位</span></button></div></aside>
   <section class="home-dock home-trial" aria-label="忍界试炼">
    <div class="dock-head"><div><h2>忍界试炼</h2><p>木叶试炼场 · 15分钟 · 三首领</p></div><div class="dock-best"><small>最佳存活</small><b>${bestText}</b></div></div>
    <div class="home-squad"><div class="squad-title"><b>出战小队 <small>1/4</small></b><button type="button" class="text-btn" data-home-action="prep">备战 ${I('chevronRight')}</button></div>
     <div class="home-squad-slots"><div class="squad-member"><img class="pix" src="${Sprites.headURL(main.id,3)}" alt="${main.current.name}"><span>主控</span></div>${[3,7,12].map(lv=>`<div class="squad-member empty"><span class="recruit-plus">${I('plus')}</span><small>Lv.${lv}招募</small></div>`).join('')}</div></div>
    <button id="btn-battle" class="btn btn-primary btn-block" type="button">${I('sword')}<span class="battle-word">出战</span></button>
   </section>
  </div>`;
 },
 bind(m,ui,modal){
  const tips={mail:['邮件','暂无新邮件。系统通知会显示在这里。'],quest:['试炼记录',`累计击杀：${Save.data.stats.totalKills}<br>出战次数：${Save.data.stats.runs}<br>通关次数：${Save.data.stats.wins}`],gift:['活动','限定召唤已开放，可在底部「召唤」查看当前奖池。'],notice:['公告','第一阶段53个角色均可上阵，共64个可玩形态。<br><br>单人开局，Lv.3／7／12招募支援；倒地5秒复活。每局15分钟，含两个小首领和一个大首领。'],shop:['商城','商城兑换暂未开放，敬请期待。'],offer:['特惠','补给活动尚未开放。当前可通过试炼获得金币与勾玉。'],card:['月卡','月卡暂未开放，敬请期待。'],gem:['首充','首充活动暂未开放，敬请期待。']};
  m.querySelectorAll('[data-home-action]').forEach(b=>b.onclick=()=>{Sfx.play('click');const a=b.dataset.homeAction;if(a==='gear')ui.go('settings');else if(a==='swap')ui.go('roster');else if(a==='prep')ui.openBattlePrep();else if(tips[a])modal(tips[a][0],`<p class="home-info-copy">${tips[a][1]}</p>`);});
  m.querySelector('#btn-battle').onclick=()=>{Sfx.play('select');ui.openBattlePrep();};
 },
 inventory(m){const s=Save.data;m.innerHTML=`<div class="page"><header class="page-head"><h2>背包</h2></header>
  <section class="card inventory-panel"><h3 class="card-heading">我的资源</h3><div class="list-row">${UIIcons.currency('coin')}<b>金币</b><strong>${s.coins}</strong></div><div class="list-row">${UIIcons.currency('gouyu')}<b>勾玉</b><strong>${s.gouyu}</strong></div><p class="muted">战斗奖励自动存入。当前尚未开放消耗道具与装备仓库。</p></section>
  <section class="card empty-state"><span class="empty-icon">${UIIcons.icon('box')}</span><b>暂无道具</b><p>消耗道具与装备仓库开放后，会显示在这里。</p></section></div>`;}
};
