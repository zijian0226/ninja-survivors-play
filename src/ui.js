/* =========================================================
 * 局外界面：大厅 / 角色 / 召唤 / 强化 / 设置（二次元手游风格）
 * ========================================================= */
window.UI = (function () {
  const D = window.GameData;
  const $ = id => document.getElementById(id);
  const U = { page: 'lobby' };
  const S = () => Save.data;
  const fmtTime = t => { t = Math.floor(t); return String(Math.floor(t / 60)).padStart(2, '0') + ':' + String(t % 60).padStart(2, '0'); };
  const stars = (n, max) => '<span class="stars">' + Array.from({ length: max || 5 }, (_, i) => `<i class="${i < n ? 'on' : ''}">★</i>`).join('') + '</span>';
  const rarityBadge = r => `<span class="rar rar-${r}">${r}</span>`;

  /* ---------- 立绘钩子 ----------
   * 对每个角色尝试加载 assets/portraits/<id>.png（每个 id 只加载一次并缓存结果）。
   * 加载成功：用立绘替换放大的像素精灵（平滑缩放）；失败/不存在：保持像素精灵（最近邻，清晰硬边）。
   * - 无 Image（node/非浏览器环境）或单文件版（window.__SINGLE_FILE__）默认不加载，静默回退；
   *   可通过 window.NS_PORTRAIT_BASE = '某路径/' 指定立绘目录（设为 '' 或 null 可关闭）。
   * - 立绘异步到达时，就地替换页面上带 data-portrait="<id>" 的 <img>，无需重绘界面。 */
  const Portraits = (function () {
    const cache = {};
    function base() {
      if (typeof window !== 'undefined' && 'NS_PORTRAIT_BASE' in window) return window.NS_PORTRAIT_BASE || null;
      return (typeof window !== 'undefined' && window.__SINGLE_FILE__) ? null : 'assets/portraits/';
    }
    function swap(el, e) {
      if (el.getAttribute('src') === e.url) return;
      el.src = e.url; el.classList.toggle('pix',e.pixel); el.classList.toggle('portrait',!e.pixel);
    }
    function apply(id) {
      const e = cache[id];
      if (!e || e.state !== 'ok' || typeof document === 'undefined' || !document.querySelectorAll) return;
      try { document.querySelectorAll('img[data-portrait]').forEach(el => { if (el.getAttribute('data-portrait') === id) swap(el, e); }); } catch (_) { }
    }
    function load(id) {
      if (cache[id]) return cache[id];
      const e = cache[id] = { state: 'none', url: null };
      const b = base();
      if (!b || typeof Image === 'undefined') return e;
      let img;
      try { img = new Image(); } catch (_) { return e; }
      e.state = 'loading';
      const ch=D.charById[id]; e.pixel=!!ch?.pixelPortrait; const url=ch?.portraitURL || b+encodeURIComponent(id)+'.png';
      img.onload = () => {
        img.onload = img.onerror = null;
        if (!img.naturalWidth) { e.state = 'fail'; return; }
        e.state = 'ok'; e.url = url; e.img = img; apply(id);
      };
      img.onerror = () => { img.onload = img.onerror = null; e.state = 'fail'; };
      try { img.decoding = 'async'; img.src = url; } catch (_) { e.state = 'fail'; }
      return e;
    }
    return {
      load, apply,
      preloadAll() { try { (D.characters || []).slice(0,4).forEach(c => load(c.id)); } catch (_) { } },
      ready: id => !!(cache[id] && cache[id].state === 'ok'),
      url: id => cache[id] && cache[id].url,
      state: id => cache[id] ? cache[id].state : 'none'
    };
  })();
  U.Portraits = Portraits;
  /* 角色大图：有立绘用立绘，否则用 scale 倍放大的像素精灵 */
  function charImg(id,scale,cls,attrs){
    const c=D.charById[id],lazy=scale<=4,direct=lazy?((c.catalogOnly?NinjaArt.get(id)?.card:CharacterPacks.thumbnails[c.current.key])||c.portraitURL):c.portraitURL;
    if(!lazy)Portraits.load(id);
    return `<img class="${c.pixelPortrait?'pix':'portrait'} ${cls||''}" ${lazy?'loading="lazy"':'data-portrait="'+id+'"'} decoding="async" src="${direct}"${attrs?' '+attrs:''}>`;
  }

  function show(id) {
    ['title-screen', 'ui', 'battle'].forEach(s => $(s).classList.toggle('hidden', s !== id));
  }
  U.toast = function (msg, ms) {
    const el = document.createElement('div'); el.className = 'toast'; el.textContent = msg;
    $('toast-layer').appendChild(el);
    setTimeout(() => el.classList.add('out'), ms || 1600);
    setTimeout(() => el.remove(), (ms || 1600) + 400);
  };

  /* ---------- 顶栏 & 底部导航 ---------- */
  function renderTop() {
    const s = S(), ch = D.charById[s.selected];
    $('topbar').innerHTML = HomeLobby.top(s,ch,Game.debug());
    $('ui-debug-toggle').onclick=()=>{Game.setDebug(!Game.debug());U.go(U.page==='roster'?'roster':'lobby');};
    $('topbar').querySelectorAll('.plus').forEach(b => b.onclick = () => { Sfx.play('click'); U.toast(b.dataset.tip === 'gy' ? '勾玉可通过战斗存活与击败BOSS获得（本作无任何付费）' : '金币可通过战斗获得'); });
  }
  const navItems = [
    { id: 'roster', name: '忍者', icon: 'ninja' },
    { id: 'jutsu', name: '忍术', icon: 'jutsu' },
    { id: 'lobby', name: '首页', icon: 'home' },
    { id: 'summon', name: '召唤', icon: 'summon' },
    { id: 'upgrade', name: '强化', icon: 'upgrade' }
  ];
  function renderNav() {
    const navPage = U.page === 'settings' || U.page === 'inventory' ? 'lobby' : U.page;
    $('bottom-nav').innerHTML = navItems.map(n => `<button class="nav-btn ${navPage === n.id ? 'active' : ''}" data-go="${n.id}" ${navPage === n.id ? 'aria-current="page"' : ''}>${UIIcons.icon(n.icon)}<span>${n.name}</span><i class="nav-dot" aria-hidden="true"></i></button>`).join('');
    $('bottom-nav').querySelectorAll('.nav-btn').forEach(b => b.onclick = () => { Sfx.play('click'); U.go(b.dataset.go); });
  }
  U.go = function (page, arg) {
    U.disposePortrait?.();U.disposePortrait=null;
    U.page = page;
    $('ui').dataset.page=page;
    show('ui');
    renderTop(); renderNav();
    const m = $('ui-main');
    m.className = 'page-' + page;
    m.innerHTML = '';
    m.scrollTop = 0;
    ({ lobby: renderLobby, roster: renderRoster, jutsu: renderJutsu, summon: renderSummon, upgrade: renderUpgrade, settings: renderSettings, inventory: m=>HomeLobby.inventory(m) })[page](m, arg);
    m.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => { Sfx.play('click'); U.go(b.dataset.go, b.dataset.arg); }));
    Sfx.music('lobby');
  };

  /* ---------- 大厅 ---------- */
  function sealSvg(cls) {
    return `<svg class="${cls}" viewBox="0 0 200 200"><g fill="none" stroke="currentColor">
      <circle cx="100" cy="100" r="96" stroke-width="2"/><circle cx="100" cy="100" r="86" stroke-width="1" stroke-dasharray="4 6"/>
      <circle cx="100" cy="100" r="60" stroke-width="2"/><path d="M100 4 L183 148 L17 148 Z" stroke-width="1.5"/><path d="M100 196 L17 52 L183 52 Z" stroke-width="1.5"/>
      <path d="M100 100 m0 -30 a30 30 0 1 1 -21 51 a18 18 0 1 0 21 -33 a8 8 0 1 1 6 -12" stroke-width="3"/></g></svg>`;
  }
  function renderLobby(m) {
    const s=S(),ch=D.charById[s.displaySelected||s.selected];
    m.innerHTML=HomeLobby.render(s,ch);
    U.disposePortrait=HomePortrait.mount(m.querySelector('.home-portrait-stage'),ch.id);
    HomeLobby.bind(m,U,modal);
  }

  /* ---------- 角色 ---------- */
  function statBar(label, v, max) { return `<div class="stat"><span>${label}</span><div class="sbar"><i style="width:${Math.min(100, v / max * 100)}%"></i></div><b>${v}</b></div>`; }
  function renderRoster(m, sel) { NinjaRoster.render(m, sel); }
  function bindGo(m) { m.querySelectorAll('[data-go]').forEach(b => b.onclick = () => { Sfx.play('click'); U.go(b.dataset.go); }); }

  /* ---------- 召唤 ---------- */
  function renderSummon(m) {
    const s = S(), g = D.gacha;
    m.innerHTML = `<div class="page">
      <header class="page-head"><h2>召唤</h2></header>
      <div class="banner">
        <div class="bn-bg"></div>
        <div class="bn-chars">${g.featured.map((id, i) => charImg(id, 9, 'bnc bnc' + i)).join('')}</div>
        <div class="bn-label"><div class="bn-tag"><span class="seal-tag">限定</span>概率UP</div><div class="bn-name">${g.bannerName.split('·').pop().trim()}</div></div>
        <div class="bn-foot"><div class="bn-feat">${g.featured.map(id => `<div>${rarityBadge(D.charById[id].rarity)}${NinjaRoster.label(D.charById[id]).name}</div>`).join('')}</div>
          <div class="bn-pity"><span>距离SSR保底</span><b>${g.pity - s.pity}</b><span>抽</span></div></div>
      </div>
      <div class="sm-info">
        <div class="r-SSR"><small>SSR</small><b>3%</b></div><div class="r-SR"><small>SR</small><b>12%</b></div><div class="r-R"><small>R</small><b>85%</b></div>
      </div>
      <div class="sm-btns">
        <button class="btn btn-secondary summon1" id="btn-s1"><span>召唤 ×1</span><em>${UIIcons.currency('gouyu')}${g.cost1}</em></button>
        <div class="sm-btn-wrap"><i class="sm-note">必得SR以上</i><button class="btn btn-primary summon10 w-full" id="btn-s10"><span>召唤 ×10</span><em>${UIIcons.currency('gouyu')}${g.cost10}</em></button></div>
      </div>
      <div class="sm-links"><button class="btn btn-text link-btn" id="btn-rates">概率详情</button><i></i><button class="btn btn-text link-btn" id="btn-pool">奖池一览</button></div>
      <p class="page-foot">无真实付费</p></div>`;
    $('btn-s1').onclick = () => doSummon(1);
    $('btn-s10').onclick = () => doSummon(10);
    $('btn-pool').onclick = () => $('btn-rates').onclick();
    $('btn-rates').onclick = () => {
      Sfx.play('click');
      const ssr = D.characters.filter(c => c.rarity === 'SSR'), sr = D.characters.filter(c => c.rarity === 'SR');
      modal('概率详情', `<p><b>SSR 3%</b>：${ssr.map(c => c.name).join('、')}</p><p><b>SR 12%</b>：${sr.map(c => c.name).join('、')}、${g.srItem.name}（勾玉×${g.srItem.gouyu}）</p>
        <p><b>R 85%</b>：${g.rItems.map(r => r.name + '（金币×' + r.coins + '）').join('、')}</p>
        <p>${g.pity} 抽必出 SSR；十连必得 SR 以上。<br>重复角色：星级 +1，满星转金币×${g.dupMaxCoins}。</p>`);
    };
  }
  function rollRarity(s) {
    const g = D.gacha; s.pity++; s.pulls++;
    const r = Math.random();
    let rar = r < g.rates.SSR ? 'SSR' : r < g.rates.SSR + g.rates.SR ? 'SR' : 'R';
    if (s.pity >= g.pity) rar = 'SSR';
    if (rar === 'SSR') s.pity = 0;
    return rar;
  }
  function resolve(rar) {
    const g = D.gacha, s = S();
    let char = null;
    if (rar === 'SSR') { const pool = D.characters.filter(c => c.rarity === 'SSR'); char = pool[Math.floor(Math.random() * pool.length)]; }
    else if (rar === 'SR' && Math.random() < 0.6) { const pool = D.characters.filter(c => c.rarity === 'SR'); char = pool[Math.floor(Math.random() * pool.length)]; }
    if (char) {
      const o = s.owned[char.id];
      if (!o) { s.owned[char.id] = { stars: 1 }; return { rar, char, isNew: true }; }
      if (o.stars < g.maxStars) { o.stars++; return { rar, char, starUp: o.stars }; }
      s.coins += g.dupMaxCoins; return { rar, char, coins: g.dupMaxCoins };
    }
    if (rar === 'SR') { s.gouyu += g.srItem.gouyu; return { rar, item: g.srItem, text: '勾玉×' + g.srItem.gouyu }; }
    const it = g.rItems[Math.floor(Math.random() * g.rItems.length)];
    s.coins += it.coins; return { rar, item: it, text: '金币×' + it.coins };
  }
  function doSummon(n) {
    const s = S(), g = D.gacha, cost = n === 10 ? g.cost10 : g.cost1;
    if (s.gouyu < cost) { Sfx.play('hurt'); U.toast('勾玉不足！去战斗中获取吧'); return; }
    s.gouyu -= cost;
    let rars = [];
    for (let i = 0; i < n; i++) rars.push(rollRarity(s));
    if (n === 10 && !rars.some(r => r !== 'R')) rars[9] = 'SR';
    const results = rars.map(resolve);
    Save.save();
    playGacha(results);
  }
  function playGacha(results) {
    const el = $('gacha-anim');
    const best = results.some(r => r.rar === 'SSR') ? 'SSR' : results.some(r => r.rar === 'SR') ? 'SR' : 'R';
    el.className = 'overlay gacha best-' + best;
    el.innerHTML = `<div class="ga-stage">${sealSvg('ga-seal')}<div class="ga-orb"></div><div class="ga-hint">点击召唤</div></div><button class="ga-skip">跳过 ${UIIcons.icon('chevronRight')}</button>`;
    Sfx.play('gacha');
    let phase = 0;
    const reveal = () => {
      if (phase) return; phase = 1;
      el.classList.add('burst');
      Sfx.play('reveal' + best);
      setTimeout(() => showCards(el, results), 650);
    };
    el.querySelector('.ga-stage').onclick = reveal;
    el.querySelector('.ga-skip').onclick = e => { e.stopPropagation(); if (!phase) { phase = 1; showCards(el, results, true); } };
    setTimeout(reveal, 2000);
  }
  function showCards(el, results, instant) {
    const single = results.length === 1;
    el.classList.remove('burst'); el.classList.add('cards');
    el.innerHTML = `<div class="ga-cards ${single ? 'single' : ''}">${results.map((r, i) => {
      const img = r.char ? charImg(r.char.id, single ? 12 : 4) : `<img class="pix" src="${Sprites.iconURL(r.item.icon, single ? 10 : 5)}">`;
      const name = r.char ? r.char.name : r.item.name;
      const sub = r.char ? (r.isNew ? '<em class="new">新</em>' : r.starUp ? `<em>星级 ${r.starUp}★</em>` : `<em>金币×${r.coins}</em>`) : `<em>${r.text}</em>`;
      return `<div class="ga-card r-${r.rar}" style="animation-delay:${instant ? 0 : i * 0.16}s"><div class="gc-in">
        <div class="gc-face"><div class="gc-rays"></div><div class="gc-art">${img}</div><div class="gc-strip"><div class="gc-l1"><span class="gc-rar">${r.rar}</span><span class="gc-name">${name}</span></div>${sub}</div></div></div></div>`;
    }).join('')}</div><button class="btn btn-primary ga-ok">确 定</button>`;
    results.forEach((r, i) => setTimeout(() => Sfx.play(r.rar === 'SSR' ? 'revealSSR' : r.rar === 'SR' ? 'revealSR' : 'revealR'), instant ? 0 : i * 160 + 200));
    el.querySelector('.ga-ok').onclick = () => { Sfx.play('click'); el.className = 'overlay hidden'; el.innerHTML = ''; U.go('summon'); const nw = results.filter(r => r.isNew); if (nw.length) U.toast('解锁新角色：' + nw.map(r => r.char.name).join('、'), 2200); };
  }

  /* ---------- 强化 ---------- */

  function ownedJutsuUnits(){
    const owned=S().owned||{};
    const units=[];
    for(const c of (D.characters||[])){
      const key=c.current?.key;
      if(!key)continue;
      const have=owned[c.id]||c.unlocked;
      const open=typeof Game?.available==='function'?Game.available(c):true;
      if(have&&open)units.push({id:c.id,key,name:c.current?.name||c.name,element:c.element});
    }
    return units;
  }
  function renderJutsu(m, filter){
    const C=window.SkillPoolCatalog;
    if(!C){m.innerHTML='<div class="page"><header class="page-head"><h2>忍术</h2></header><section class="card empty-state"><b>忍术图鉴未能载入</b><p>请刷新页面后重试。</p></section></div>';return;}
    const visible=C.naturesWithSkills();
    const key=visible.includes(filter)?filter:'all';
    const units=ownedJutsuUnits();
    const ELC={'火':'#F0663A','风':'#4FC6A0','雷':'#F2CF4A','土':'#C8955A','水':'#4A9BEA','阴':'#8F7BE0','阳':'#F6E7B0'};
    const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const nav=`<div class="chip-row jutsu-nature-nav" aria-label="按属性筛选">${['all',...visible].map(n=>`<button type="button" data-jutsu-nature="${n}" class="chip ${n===key?'active':''}" aria-pressed="${n===key}">${n==='all'?'全部':`<img src="${C.natureSrc(n)}" alt="">${n}`}</button>`).join('')}</div>`;
    const groups=key==='all'?visible:[key];
    const body=groups.map(n=>{
      const list=C.skills.filter(s=>s.gate===n);
      if(!list.length)return '';
      const cards=list.map(skill=>{
        const levels=C.levelEffects(skill).map(x=>`<li><b>Lv.${x.level}</b> ${esc(x.text)}</li>`).join('');
        return `<article class="card jutsu-card" data-skill="${esc(skill.id)}">
          <div class="jutsu-main"><span class="jutsu-art-wrap" style="--el:${ELC[skill.gate]||'#A9B0C2'}"><img class="jutsu-art" src="${esc(C.iconOf(skill))}" alt="${esc(skill.name)}" width="72" height="72" decoding="async"></span>
          <div class="jutsu-body"><div class="jutsu-name"><b>${esc(skill.name)}</b><span class="el-tag" data-el="${esc(skill.gate)}">${esc(skill.gate)}</span></div>
          <p>${esc(skill.short||skill.text)}</p></div></div>
          <details class="jutsu-more"><summary>详情 ${UIIcons.icon('chevronDown')}</summary>
          <p class="jutsu-full">${esc(skill.text)}</p><ol class="jutsu-levels">${levels}</ol>
          <p class="jutsu-learners">${esc(C.formatLearners(units,skill))}</p></details></article>`;
      }).join('');
      return `<section class="jutsu-group"><header class="section-head"><img src="${C.natureSrc(n)}" alt=""><h3>${n}</h3><small>${list.length} 招</small></header><div class="jutsu-grid">${cards}</div></section>`;
    }).join('');
    m.innerHTML=`<div class="page"><header class="page-head"><h2>忍术</h2><span class="page-meta"><b>${C.skills.length}</b> 招</span></header>
      <p class="page-lead jutsu-lead">局内最多带 6 招，可学同属性与中性忍术。</p>
      ${nav}${body}</div>`;
    m.querySelectorAll('.jutsu-art').forEach(img=>{
      const ready=()=>img.classList.add('is-ready');
      if(img.complete&&img.naturalWidth)ready();
      else{img.addEventListener('load',ready,{once:true});img.addEventListener('error',ready,{once:true});}
    });
    m.querySelectorAll('[data-jutsu-nature]').forEach(b=>b.onclick=()=>{Sfx.play('click');renderJutsu(m,b.dataset.jutsuNature);});
  }

  function renderUpgrade(m) {
    const s = S();
    m.innerHTML = `<div class="page"><header class="page-head"><h2>强化</h2><span class="page-meta">即将开放</span></header><div class="up-list">${D.metaUpgrades.map(u => {
        const lv = s.upgrades[u.id] || 0, max = lv >= u.max, cost = D.upgradeCost(u, lv);
        return `<div class="card up-row"><div class="up-ic"><img class="pix" src="${Sprites.iconURL(u.icon, 4)}"></div>
          <div class="up-info"><b>${u.name}</b><small>${u.desc}</small>
          <div class="up-pips">${Array.from({ length: u.max }, (_, i) => `<i class="${i < lv ? 'on' : ''}"></i>`).join('')}</div></div>
          <button disabled aria-label="暂未接入战斗" class="btn btn-sm btn-disabled up-buy ${max ? 'disabled' : s.coins < cost ? 'poor' : ''}" data-id="${u.id}">待开放</button></div>`;
      }).join('')}</div>
      <button class="btn btn-text link-btn" id="btn-refund">重置强化</button></div>`;
    m.querySelectorAll('.up-buy').forEach(b => b.onclick = () => {
      const u = D.metaUpgrades.find(x => x.id === b.dataset.id), lv = s.upgrades[u.id] || 0;
      if (lv >= u.max) return;
      const cost = D.upgradeCost(u, lv);
      if (s.coins < cost) { Sfx.play('hurt'); U.toast('金币不足'); return; }
      s.coins -= cost; s.upgrades[u.id] = lv + 1; Save.save(); Sfx.play('levelup');
      renderTop(); renderUpgrade(m);
    });
    $('btn-refund').onclick = () => {
      let tot = 0; D.metaUpgrades.forEach(u => { for (let i = 0; i < (s.upgrades[u.id] || 0); i++) tot += D.upgradeCost(u, i); });
      s.coins += tot; s.upgrades = {}; Save.save(); Sfx.play('coin'); U.toast('已返还金币 ' + tot); renderTop(); renderUpgrade(m);
    };
  }

  /* ---------- 设置 ---------- */
  const PERF_NAMES = { auto: '自动', low: '低', mid: '中', high: '高' };
  function renderSettings(m) {
    const s = S().settings;
    const tg = (k, name, desc) => `<div class="set-row"><div><b>${name}</b><small>${desc}</small></div><button class="toggle ${s[k] ? 'on' : ''}" data-k="${k}" role="switch" aria-checked="${!!s[k]}" aria-label="${name}"><i></i></button></div>`;
    m.innerHTML = `<div class="page"><header class="page-head page-back"><button type="button" class="icon-btn" id="settings-back" aria-label="返回首页">${UIIcons.icon('chevronLeft')}</button><h2>设置</h2></header>
      <section class="card set-list">${tg('sfx','音效','技能与界面')}${tg('music','大厅音乐','背景音乐')}<div class="set-row"><div><b>屏幕震动</b><small>暂不支持切换</small></div><button class="toggle" disabled aria-label="震动设置暂未接入"><i></i></button></div><div class="set-row"><div><b>伤害数字</b><small>默认显示</small></div><button class="toggle on" disabled aria-label="伤害数字默认显示"><i></i></button></div>
        <div class="set-row"><div><b>战斗设置</b><small>暂停页可调倍速</small></div><button class="btn btn-secondary btn-sm" id="btn-perf">说明</button></div></section>
      <section class="card about"><h3 class="card-heading">关于</h3><p>《忍者：无尽试炼》v0.66.1 · 暮夜金卷<br>同人非官方作品，与任何版权方无关；素材来源见源码 CREDITS。</p><p class="credit">图标：Icons by Lorc, Delapouite, DarkZaitzev, Faithtoken / game-icons.net，CC BY 3.0<br>字体：Ma Shan Zheng、Noto Serif SC、Noto Sans SC、Barlow Condensed（SIL OFL 1.1）</p></section>
      <button class="btn btn-secondary btn-danger btn-block" id="btn-reset">清除存档</button></div>`;
    $('settings-back').onclick=()=>{Sfx.play('click');U.go('lobby');};
    $('btn-perf').onclick=()=>modal('战斗设置','<p>战斗中点暂停：查看同伴、调倍速。<br>开启调试后可升级、跳首领。</p>');
    m.querySelectorAll('.toggle[data-k]').forEach(b => b.onclick = () => { s[b.dataset.k] = !s[b.dataset.k]; Save.save(); Sfx.apply(); Game.syncSettings(); Sfx.play('click'); b.classList.toggle('on', s[b.dataset.k]); b.setAttribute('aria-checked', String(!!s[b.dataset.k])); });
    $('btn-reset').onclick = () => modal('清除存档', '<p>确定要清除所有进度吗？此操作不可恢复。</p>', () => { Save.reset(); Sfx.apply(); U.toast('存档已清除'); U.go('lobby'); });
  }

  /* ---------- 弹窗 ---------- */
  function modal(title, html, onOk) {
    const el = $('modal');
    el.innerHTML = `<div class="md-box"><div class="md-title">${title}</div><div class="md-body">${html}</div>
      <div class="md-btns">${onOk ? '<button class="btn btn-secondary" id="md-cancel">取消</button><button class="btn btn-secondary btn-danger" id="md-ok">确定</button>' : '<button class="btn btn-primary" id="md-cancel">好的</button>'}</div></div>`;
    el.classList.remove('hidden');
    $('md-cancel').onclick = () => { Sfx.play('click'); el.classList.add('hidden'); };
    if (onOk) $('md-ok').onclick = () => { el.classList.add('hidden'); onOk(); };
  }
  U.modal = modal;

  /* ---------- 出战 & 结算 ---------- */
  U.openBattlePrep=function(){
    if(Game.runtimeId!=='ninja-v661-dusk-scroll'){location.replace(new URL('play.html?release=pool661',location.href).href);return;}
    let selected=Game.available(D.charById[S().selected])?S().selected:'naruto';
    let excluded=[...(Game.excluded||[])];
    modal('备战','');const body=$('modal').querySelector('.md-body');
    function render(){const scrollTop=body.scrollTop;body.innerHTML=`<p class="prep-copy">单人出战；局内最多招募 3 名同伴（不上场）。</p><div class="prep-grid">${D.characters.map(c=>`<button class="prep-card ${c.id===selected?'active':''}" data-prep="${c.id}" ${Game.available(c)?'':'disabled'}>${charImg(c.id,3)}<b>${c.current.name}</b><small>${c.element}${c.catalogOnly?' · 战斗待制作':c.current.releaseComplete?'':' · 预览'}</small></button>`).join('')}</div><h3 class="prep-title">排除招募属性 <span class="num">${excluded.length}/3</span></h3><div class="prep-types">${['火','风','雷','土','水','阴','阳','全'].map(n=>`<button data-exclude="${n}" aria-pressed="${excluded.includes(n)}" class="chip ${excluded.includes(n)?'active':''}">${n}</button>`).join('')}</div>`;
     body.querySelectorAll('[data-prep]').forEach(b=>b.onclick=()=>{selected=b.dataset.prep;render();});
     body.querySelectorAll('[data-exclude]').forEach(b=>b.onclick=()=>{const n=b.dataset.exclude;if(excluded.includes(n))excluded=excluded.filter(x=>x!==n);else if(excluded.length<3)excluded.push(n);else{U.toast('最多排除3种属性');return;}const top=body.scrollTop;render();body.scrollTop=top;});
     body.scrollTop=scrollTop;
    }
    render();const buttons=$('modal').querySelector('.md-btns');buttons.innerHTML='<button class="btn btn-secondary" id="prep-cancel">取消</button>'+(Game.debug()?'<button class="btn btn-secondary" id="prep-lab">技能试放</button>':'')+'<button class="btn btn-primary" id="prep-start">出战</button>';
    $('prep-cancel').onclick=()=>$('modal').classList.add('hidden');
    const start=lab=>{S().selected=selected;Game.excluded=excluded;Save.save();$('modal').classList.add('hidden');if(lab){show('battle');Game.start(selected,{excluded,lab:true});}else U.startBattle();};
    $('prep-start').onclick=()=>start(false);if($('prep-lab'))$('prep-lab').onclick=()=>start(true);
  };

  U.startBattle = function () {
    const s = S(), ch = D.charById[s.selected];
    const cut = document.createElement('div');
    cut.className = 'cutin'; cut.style.setProperty('--c', ch.color);
    cut.innerHTML = `<div class="ci-band">${charImg(ch.id, 8)}<div class="ci-txt"><b>${ch.name}</b><span>出击！</span></div></div>`;
    $('app').appendChild(cut);
    Sfx.stopMusic();
    setTimeout(() => { show('battle'); Game.start(s.selected); }, 750);
    setTimeout(() => cut.remove(), 1300);
  };
  U.showResult = function (res) {
    const s = S();
    if(!res.debug){s.coins+=res.coins;s.gouyu+=res.gouyu;}
    if(!res.debug){s.stats.runs++;s.stats.totalKills+=res.kills;if(res.win)s.stats.wins++;}
    const best=!res.debug&&res.time>s.stats.bestTime; if (best) s.stats.bestTime = res.time;
    Save.save();
    const ch = D.charById[res.charId];
    const el = $('result');
    el.className = 'overlay no-joy result ' + (res.win ? 'win' : 'lose');
    el.innerHTML = `<div class="rs-box">
      <div class="rs-title"><span class="rs-status">${res.win ? '试炼成功' : res.retreat ? '已撤退' : '本局结束'}</span><h2>${res.win ? '任务完成' : res.retreat ? '撤退' : '任务失败'}</h2></div>
      <div class="rs-char">${charImg(ch.id, 6)}<div class="rs-quote">${res.win ? '「这就是我的忍道！」' : '「下次一定会赢的……」'}</div></div>
      ${res.debug?'<p class="rs-debug">调试预览局 · 不计战绩与奖励</p>':''}<div class="rs-stats">
        <div><small>存活时间</small><b>${fmtTime(res.time)}${best ? '<em>NEW</em>' : ''}</b></div>
        <div><small>击杀数</small><b>${res.kills}</b></div>
        <div><small>等级</small><b>Lv ${res.level}</b></div>
        <div><small>击败BOSS</small><b>${res.bosses}</b></div>
      </div>
      <div class="rs-rewards"><span class="rs-rewards-label">本局奖励</span><div class="rw">${UIIcons.currency('coin')}<b>+${res.coins}</b></div><div class="rw">${UIIcons.currency('gouyu')}<b>+${res.gouyu}</b></div></div>
      <div class="rs-btns"><button class="btn btn-secondary" id="rs-home">返回大厅</button><button class="btn btn-primary" id="rs-again">再来一局</button></div></div>`;
    $('rs-home').onclick = () => { Sfx.play('click'); Game.stop(); U.go('lobby'); };
    $('rs-again').onclick = () => { Sfx.play('select'); el.classList.add('hidden'); Game.start(s.selected); };
  };

  U.showTitle = function () {
    show('title-screen');
  };
  return U;
})();
