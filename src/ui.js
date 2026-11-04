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
    const c=D.charById[id],lazy=scale<=4,direct=lazy?(CharacterPacks.thumbnails[c.current.key]||c.portraitURL):c.portraitURL;
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
    $('topbar').innerHTML = `
      <div class="tb-profile"><div class="tb-avatar" style="--c:${ch.color}"><img class="pix" src="${Sprites.headURL(ch.id, 3)}"></div>
        <div class="tb-name"><b>木叶忍者</b><button id="ui-debug-toggle" class="tb-debug" type="button" role="switch" aria-checked="${Game.debug()}">调试 ${Game.debug()?'开启':'关闭'}</button></div></div>
      <div class="tb-cur">
        <div class="cur-pill"><img class="pix" src="${Sprites.iconURL('coin', 3)}"><b id="cur-coins">${s.coins}</b><button class="plus" data-tip="coin">+</button></div>
        <div class="cur-pill gy"><img class="pix" src="${Sprites.iconURL('magatama', 3)}"><b id="cur-gouyu">${s.gouyu}</b><button class="plus" data-tip="gy">+</button></div>
      </div>`;
    $('ui-debug-toggle').onclick=()=>{Game.setDebug(!Game.debug());U.go(U.page==='roster'?'roster':'lobby');};
    $('topbar').querySelectorAll('.plus').forEach(b => b.onclick = () => { Sfx.play('click'); U.toast(b.dataset.tip === 'gy' ? '勾玉可通过战斗存活与击败BOSS获得（本作无任何付费）' : '金币可通过战斗获得'); });
  }
  const navItems = [
    { id: 'lobby', name: '主页', icon: 'home' },
    { id: 'roster', name: '角色', icon: 'clone' },
    { id: 'summon', name: '召唤', icon: 'magatama' },
    { id: 'upgrade', name: '强化', icon: 'whetstone' },
    { id: 'settings', name: '设置', icon: 'gear' }
  ];
  function renderNav() {
    $('bottom-nav').innerHTML = navItems.map(n => `<button class="nav-btn ${U.page === n.id ? 'active' : ''}" data-go="${n.id}"><img class="pix" src="${Sprites.iconURL(n.icon, 3)}"><span>${n.name}</span></button>`).join('');
    $('bottom-nav').querySelectorAll('.nav-btn').forEach(b => b.onclick = () => { Sfx.play('click'); U.go(b.dataset.go); });
  }
  U.go = function (page, arg) {
    U.disposePortrait?.();U.disposePortrait=null;
    U.page = page;
    show('ui');
    renderTop(); renderNav();
    const m = $('ui-main');
    m.className = 'page-' + page;
    m.innerHTML = '';
    ({ lobby: renderLobby, roster: renderRoster, summon: renderSummon, upgrade: renderUpgrade, settings: renderSettings })[page](m, arg);
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
    const s=S(),ch=D.charById[s.displaySelected||s.selected],st=s.owned[ch.id]?.stars||1;
    m.innerHTML = `
      <div class="lobby" style="--c:${ch.color};--c2:${ch.color2}">
        <div class="lobby-bg"><div class="lb-grad"></div><div class="lb-rays"></div>${sealSvg('lb-seal')}
          <div class="lb-kanji">忍</div>${Array.from({ length: 8 }, (_, i) => `<i class="leaf" style="--i:${i}"></i>`).join('')}</div>
        <div class="splash-wrap home-portrait-stage" aria-label="首页展示立绘，可拖动和双指缩放">${charImg(ch.id, 12, 'splash','draggable="false" alt="'+ch.name+'"')}</div>
        <div class="portrait-tools"><span>拖动调整 · 双指缩放</span><button type="button" data-portrait-reset aria-label="恢复默认上半身构图">复位</button></div>
        <div class="char-plate">
          <div class="cp-top">${rarityBadge(ch.rarity)}<span class="cp-elem">${ch.element}属性</span></div>
          <div class="cp-name">${ch.name}</div>
          <div class="cp-title">${ch.title}</div>
          ${stars(st)}
        </div>
        <div class="lobby-side">
          <button class="side-btn" data-go="roster"><img class="pix" src="${Sprites.iconURL('clone', 3)}"><span>换人</span></button>
          <button class="side-btn" id="btn-notice"><img class="pix" src="${Sprites.iconURL('scrollBig', 3)}"><span>公告</span></button>
        </div>
        <div class="lobby-banner" data-go="summon">
          <div class="lbn-tag">限定UP</div>
          <div class="lbn-imgs">${D.gacha.featured.map(id => charImg(id, 3)).join('')}</div>
          <div class="lbn-txt"><b>${D.gacha.bannerName}</b><small>SSR 概率 3% · ${D.gacha.pity}抽保底</small></div>
        </div>
        <div class="lobby-info">
          <div><small>累计击杀</small><b>${s.stats.totalKills}</b></div>
          <div><small>出战次数</small><b>${s.stats.runs}</b></div>
          <div><small>通关次数</small><b>${s.stats.wins}</b></div>
        </div>
        <button class="btn-battle" id="btn-battle">
          <span class="bb-shine"></span>
          <span class="bb-main">出 战</span>
          <span class="bb-sub">15分钟试炼 · 升级招募小队</span>
        </button>
      </div>`;
    U.disposePortrait=HomePortrait.mount(m.querySelector('.home-portrait-stage'),ch.id);
    $('btn-battle').onclick = () => { Sfx.play('select'); U.openBattlePrep(); };
    $('btn-notice').onclick=()=>{Sfx.play('click');modal('公告',`<p>欢迎来到《忍者：无尽试炼》。</p><ul><li>拖动移动，忍术自动释放；近身忍术需接近目标。</li><li>单人开局，升级招募最多3名支援；支援倒地5秒复活。</li><li>5/10分钟小首领、13分钟大首领，15分钟超时。</li><li>战斗支持1、1.5、2、3倍速；暂停查看技能和联动。</li></ul><p class="muted">35个已接入形态开放测试，其余图鉴角色锁定。开屏只准备首页，战斗与技能资源按包加载。</p>`);};
  }

  /* ---------- 角色 ---------- */
  function statBar(label, v, max) { return `<div class="stat"><span>${label}</span><div class="sbar"><i style="width:${Math.min(100, v / max * 100)}%"></i></div><b>${v}</b></div>`; }
  function renderRoster(m, sel) {
    const s = S();
    sel = sel || U.rosterSel || s.selected;
    U.rosterSel = sel;
    const ch = D.charById[sel], own = s.owned[sel], w = D.weapons[ch.startSkill];
    m.innerHTML = `
      <div class="page-head"><h2>角色</h2><span>ROSTER · 35个形态可测试</span></div>
      <div class="ro-detail rarbg-${ch.rarity}" style="--c:${ch.color};--c2:${ch.color2}">
        <div class="ro-art">${sealSvg('ro-seal')}${charImg(ch.id, 8, own ? '' : 'locked-img')}</div>
        <div class="ro-info">
          <div class="cp-top">${rarityBadge(ch.rarity)}<span class="cp-elem">${ch.element}属性</span></div>
          <div class="ro-name">${ch.name}<small>${ch.fullName}</small></div>
          <div class="ro-title">${ch.title}</div>
          ${own ? stars(own.stars) : '<span class="lock-tag">未解锁</span>'}
          ${statBar('体力',ch.current.hp,900)}<div class="form-review">${ch.current.releaseComplete?'已核验':'已接入 · 可测试'} · ${Game.hasPack(ch.current.key)?'缓存就绪':'按需加载'} · ${(CharacterPacks.packages[ch.current.key].bytes/1048576).toFixed(2)} MB</div>
        </div>
        <div class="current-skill-list">${ch.current.skills.map(k=>`<article class="current-skill"><small>${k.slot}</small><b>${k.name}</b><p>${k.effect}</p></article>`).join('')}</div>
        <p class="ro-desc">${ch.desc}</p>${Game.debug()?'<button id="roster-lab" class="pbtn">技能试放</button>':''}
        ${own ? ((s.displaySelected||s.selected)===sel?'<button class="pbtn disabled">首页展示中</button>':'<button class="pbtn primary" id="btn-setmain">设为首页展示</button>') : '<button class="pbtn gold" data-go="summon">前往召唤解锁</button>'}
      </div>
      <div class="ro-grid">${D.characters.map(c => {
        const o = s.owned[c.id];
        return `<div class="ro-card rarbg-${c.rarity} ${c.id === sel ? 'sel' : ''} ${o ? '' : 'locked'}" data-id="${c.id}" style="--c:${c.color}">
          <div class="rc-face">${charImg(c.id, 4)}</div>${rarityBadge(c.rarity)}
          <div class="rc-name">${c.name}</div>${o ? stars(o.stars) : '<div class="rc-lock">🔒 未解锁</div>'}
          ${(s.displaySelected||s.selected)===c.id?'<div class="rc-main">展示</div>':''}${Game.debug()?'<button class="ro-quick-test" data-test-unit="'+c.id+'">试放</button>':''}</div>`;
      }).join('')}</div><details class="locked-archive"><summary>未开放图鉴形态 · ${CharacterPacks.locked.length}项（已锁定）</summary><p class="prep-copy">当前仅开放上方35个测试形态。以下图鉴条目不进入出战、招募和召唤池。</p><div class="locked-grid">${CharacterPacks.locked.map(c=>`<button disabled class="locked-card"><span>🔒</span>${c.name}</button>`).join('')}</div></details>`;
    m.querySelectorAll('.ro-card').forEach(c => c.onclick = () => { Sfx.play('click'); renderRoster(m, c.dataset.id); bindGo(m); });
    m.querySelectorAll('[data-test-unit]').forEach(b=>b.onclick=e=>{e.stopPropagation();show('battle');Game.start(b.dataset.testUnit,{lab:true});});
    if($('roster-lab'))$('roster-lab').onclick=()=>{show('battle');Game.start(sel,{lab:true});};
    const b = $('btn-setmain');
    if (b) b.onclick = () => { Sfx.play('select'); s.displaySelected=sel; Save.save(); renderTop(); renderRoster(m, sel); bindGo(m); U.toast(ch.name+' 已设为首页展示'); };
  }
  function bindGo(m) { m.querySelectorAll('[data-go]').forEach(b => b.onclick = () => { Sfx.play('click'); U.go(b.dataset.go); }); }

  /* ---------- 召唤 ---------- */
  function renderSummon(m) {
    const s = S(), g = D.gacha;
    m.innerHTML = `
      <div class="page-head"><h2>召唤</h2><span>SUMMON</span></div>
      <div class="banner">
        <div class="bn-bg"></div>${sealSvg('bn-seal')}
        <div class="bn-chars">${g.featured.map((id, i) => charImg(id, 9, 'bnc bnc' + i)).join('')}</div>
        <div class="bn-label"><div class="bn-tag">限定 · 概率UP</div><div class="bn-name">${g.bannerName}</div>
          <div class="bn-feat">${g.featured.map(id => `<div>${rarityBadge('SSR')}${D.charById[id].name}</div>`).join('')}</div></div>
      </div>
      <div class="sm-info">
        <div><small>SSR</small><b>3%</b></div><div><small>SR</small><b>12%</b></div><div><small>R</small><b>85%</b></div>
        <div class="pity"><small>距离SSR保底</small><b>${g.pity - s.pity}</b>抽</div>
      </div>
      <button class="link-btn" id="btn-rates">概率详情 / 奖池一览</button>
      <div class="sm-btns">
        <button class="pbtn summon1" id="btn-s1"><span>召唤 ×1</span><em><img class="pix" src="${Sprites.iconURL('magatama', 2)}">${g.cost1}</em></button>
        <button class="pbtn summon10 gold" id="btn-s10"><span>召唤 ×10</span><em><img class="pix" src="${Sprites.iconURL('magatama', 2)}">${g.cost10}</em><i class="sm-note">必得SR以上</i></button>
      </div>
      <p class="muted center">勾玉仅通过游戏内获得，无真实付费。收藏星级暂不改变战斗属性。</p>`;
    $('btn-s1').onclick = () => doSummon(1);
    $('btn-s10').onclick = () => doSummon(10);
    $('btn-rates').onclick = () => {
      Sfx.play('click');
      const ssr = D.characters.filter(c => c.rarity === 'SSR'), sr = D.characters.filter(c => c.rarity === 'SR');
      modal('概率详情', `<p><b>SSR 3%</b>：${ssr.map(c => c.name).join('、')}</p><p><b>SR 12%</b>：${sr.map(c => c.name).join('、')}、${g.srItem.name}（勾玉×${g.srItem.gouyu}）</p>
        <p><b>R 85%</b>：${g.rItems.map(r => r.name + '（金币×' + r.coins + '）').join('、')}</p>
        <p>· ${g.pity}抽内必定获得SSR；十连必得SR及以上。<br>· 重复获得角色：星级+1（每星全属性+6%），满星转化为金币×${g.dupMaxCoins}。</p>`);
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
    el.innerHTML = `<div class="ga-stage">${sealSvg('ga-seal')}<div class="ga-orb"></div><div class="ga-hint">点击召唤</div></div><button class="ga-skip">跳过 ▶▶</button>`;
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
      const sub = r.char ? (r.isNew ? '<em class="new">NEW</em>' : r.starUp ? `<em>星级 ${r.starUp}★</em>` : `<em>金币×${r.coins}</em>`) : `<em>${r.text}</em>`;
      return `<div class="ga-card r-${r.rar}" style="animation-delay:${instant ? 0 : i * 0.16}s"><div class="gc-in">
        <div class="gc-face"><div class="gc-rays"></div>${img}<div class="gc-strip"><div class="gc-l1"><span class="gc-rar">${r.rar}</span><span class="gc-name">${name}</span></div>${sub}</div></div></div></div>`;
    }).join('')}</div><button class="pbtn primary ga-ok">确 定</button>`;
    results.forEach((r, i) => setTimeout(() => Sfx.play(r.rar === 'SSR' ? 'revealSSR' : r.rar === 'SR' ? 'revealSR' : 'revealR'), instant ? 0 : i * 160 + 200));
    el.querySelector('.ga-ok').onclick = () => { Sfx.play('click'); el.className = 'overlay hidden'; el.innerHTML = ''; U.go('summon'); const nw = results.filter(r => r.isNew); if (nw.length) U.toast('解锁新角色：' + nw.map(r => r.char.name).join('、'), 2200); };
  }

  /* ---------- 强化 ---------- */
  function renderUpgrade(m) {
    const s = S();
    m.innerHTML = `<div class="page-head"><h2>强化</h2><span>TRAINING · 局外方案</span></div>
      <p class="prep-copy">强化方案展示，暂未接入战斗。当前仅局内三选一会改变战斗属性，不消耗金币。</p><div class="up-list">${D.metaUpgrades.map(u => {
        const lv = s.upgrades[u.id] || 0, max = lv >= u.max, cost = D.upgradeCost(u, lv);
        return `<div class="up-row"><div class="up-ic"><img class="pix" src="${Sprites.iconURL(u.icon, 4)}"></div>
          <div class="up-info"><b>${u.name}</b><small>${u.desc}</small>
          <div class="up-pips">${Array.from({ length: u.max }, (_, i) => `<i class="${i < lv ? 'on' : ''}"></i>`).join('')}</div></div>
          <button disabled aria-label="暂未接入战斗" class="pbtn up-buy ${max ? 'disabled' : s.coins < cost ? 'poor' : 'primary'}" data-id="${u.id}">待开放</button></div>`;
      }).join('')}</div>
      <button class="link-btn" id="btn-refund">重置强化（返还全部金币）</button>`;
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
    const tg = (k, name, desc) => `<div class="set-row"><div><b>${name}</b><small>${desc}</small></div><button class="toggle ${s[k] ? 'on' : ''}" data-k="${k}"><i></i></button></div>`;
    m.innerHTML = `<div class="page-head"><h2>设置</h2><span>SETTINGS</span></div>
      <div class="panel set-list">${tg('sfx','音效','技能与界面音效')}${tg('music','大厅音乐','8-bit 合成背景音乐')}<div class="set-row"><div><b>屏幕震动</b><small>沿用当前战斗版本，暂不支持切换</small></div><button class="toggle" disabled aria-label="震动设置暂未接入"><i></i></button></div><div class="set-row"><div><b>伤害数字</b><small>战斗内默认显示</small></div><button class="toggle on" disabled aria-label="伤害数字默认显示"><i></i></button></div>
        <div class="set-row"><div><b>战斗设置</b><small>战斗暂停页可调整1～3倍速</small></div><button class="pbtn" id="btn-perf" style="white-space:nowrap;min-width:64px;flex:none">查看说明</button></div></div>
      <div class="panel about"><b>关于</b><p>《忍者：无尽试炼》界面整合版 v0.33<br>灵感来自忍者题材动漫；非官方作品，与任何版权方无关。<br>技能动作包含已收集的像素素材与原创角色素材，来源见源码中的素材记录。</p></div>
      <button class="pbtn danger" id="btn-reset">清除存档</button>`;
    $('btn-perf').onclick=()=>modal('战斗设置','<p>进入战斗后点击暂停，可查看队友、连携、倍速；开启首页调试后还可升级、跳转首领。</p>');
    m.querySelectorAll('.toggle[data-k]').forEach(b => b.onclick = () => { s[b.dataset.k] = !s[b.dataset.k]; Save.save(); Sfx.apply(); Game.syncSettings(); Sfx.play('click'); b.classList.toggle('on', s[b.dataset.k]); });
    $('btn-reset').onclick = () => modal('清除存档', '<p>确定要清除所有进度吗？此操作不可恢复。</p>', () => { Save.reset(); Sfx.apply(); U.toast('存档已清除'); U.go('lobby'); });
  }

  /* ---------- 弹窗 ---------- */
  function modal(title, html, onOk) {
    const el = $('modal');
    el.innerHTML = `<div class="md-box"><div class="md-title">${title}</div><div class="md-body">${html}</div>
      <div class="md-btns">${onOk ? '<button class="pbtn" id="md-cancel">取消</button><button class="pbtn danger" id="md-ok">确定</button>' : '<button class="pbtn primary" id="md-cancel">好的</button>'}</div></div>`;
    el.classList.remove('hidden');
    $('md-cancel').onclick = () => { Sfx.play('click'); el.classList.add('hidden'); };
    if (onOk) $('md-ok').onclick = () => { el.classList.add('hidden'); onOk(); };
  }
  U.modal = modal;

  /* ---------- 出战 & 结算 ---------- */
  U.openBattlePrep=function(){
    if(Game.runtimeId!=='ninja-v28-squad35'){location.replace(new URL('play.html?release=entry31',location.href).href);return;}
    let selected=Game.available(D.charById[S().selected])?S().selected:'naruto';
    let excluded=[...(Game.excluded||[])];
    modal('出战准备','');const body=$('modal').querySelector('.md-body');
    function render(){body.innerHTML=`<p class="prep-copy">首页展示与出战独立。单人开局，升级招募最多3名支援。35个已接入形态可选，其余未开放角色保持锁定。角色包在选择后单独载入。</p><div class="prep-grid">${D.characters.map(c=>`<button class="prep-card ${c.id===selected?'active':''}" data-prep="${c.id}" ${Game.available(c)?'':'disabled'}>${charImg(c.id,3)}<b>${c.current.name}</b><small>${c.element}${c.current.releaseComplete?'':' · 预览'}</small></button>`).join('')}</div><h3 class="prep-title">排除招募属性 ${excluded.length}/3</h3><div class="prep-types">${['火','风','雷','土','水','阴','阳','全'].map(n=>`<button data-exclude="${n}" aria-pressed="${excluded.includes(n)}" class="${excluded.includes(n)?'active':''}">${n}</button>`).join('')}</div><p class="prep-copy">可排除0–3种属性。“全”为独立类别。每关2个小首领、1个大首领；支持1.5/2/3倍速。</p>`;
     body.querySelectorAll('[data-prep]').forEach(b=>b.onclick=()=>{selected=b.dataset.prep;render();});
     body.querySelectorAll('[data-exclude]').forEach(b=>b.onclick=()=>{const n=b.dataset.exclude;if(excluded.includes(n))excluded=excluded.filter(x=>x!==n);else if(excluded.length<3)excluded.push(n);else{U.toast('最多排除3种属性');return;}const top=body.scrollTop;render();body.scrollTop=top;});
    }
    render();const buttons=$('modal').querySelector('.md-btns');buttons.innerHTML='<button class="pbtn" id="prep-cancel">取消</button><button class="pbtn primary" id="prep-start">进入试炼</button>'+(Game.debug()?'<button class="pbtn" id="prep-lab">技能试放</button>':'');
    $('prep-cancel').onclick=()=>$('modal').classList.add('hidden');
    const start=lab=>{S().selected=selected;Game.excluded=excluded;Save.save();$('modal').classList.add('hidden');if(lab){show('battle');Game.start(selected,{excluded,lab:true});}else U.startBattle();};
    $('prep-start').onclick=()=>start(false);if($('prep-lab'))$('prep-lab').onclick=()=>start(true);
  };

  U.startBattle = function () {
    const s = S(), ch = D.charById[s.selected];
    const cut = document.createElement('div');
    cut.className = 'cutin'; cut.style.setProperty('--c', ch.color);
    cut.innerHTML = `<div class="ci-band">${charImg(ch.id, 8)}<div class="ci-txt"><b>${ch.name}</b><span>出 击 ！</span></div></div>`;
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
      <div class="rs-title">${res.win ? '任务完成' : res.retreat ? '撤退' : '任务失败'}<small>${res.win ? 'VICTORY' : res.retreat ? 'RETREAT' : 'DEFEAT'}</small></div>
      <div class="rs-char">${charImg(ch.id, 6)}<div class="rs-quote">${res.win ? '「这就是我的忍道！」' : '「下次一定会赢的……」'}</div></div>
      ${res.debug?'<p class="prep-copy center">调试预览局 · 不计战绩与奖励</p>':''}<div class="rs-stats">
        <div><small>存活时间</small><b>${fmtTime(res.time)}${best ? '<em>NEW</em>' : ''}</b></div>
        <div><small>击杀数</small><b>${res.kills}</b></div>
        <div><small>等级</small><b>Lv ${res.level}</b></div>
        <div><small>击败BOSS</small><b>${res.bosses}</b></div>
      </div>
      <div class="rs-rewards"><div class="rw"><img class="pix" src="${Sprites.iconURL('coin', 4)}"><b>+${res.coins}</b></div><div class="rw"><img class="pix" src="${Sprites.iconURL('magatama', 4)}"><b>+${res.gouyu}</b></div></div>
      <div class="rs-btns"><button class="pbtn" id="rs-home">返回大厅</button><button class="pbtn primary" id="rs-again">再来一局</button></div></div>`;
    $('rs-home').onclick = () => { Sfx.play('click'); Game.stop(); U.go('lobby'); };
    $('rs-again').onclick = () => { Sfx.play('select'); el.classList.add('hidden'); Game.start(s.selected); };
  };

  U.showTitle = function () {
    show('title-screen');
  };
  return U;
})();
