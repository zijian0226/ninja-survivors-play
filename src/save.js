/* 本地存档（localStorage） */
window.Save = (function () {
  const KEY = 'ninja_survivors_save_v1';
  function defaults() {
    const owned = {};
    GameData.characters.forEach(c => { if (c.unlocked) owned[c.id] = { stars: 1 }; });
    return {
      coins: 800, gouyu: 1000,
      displaySelected:'naruto', owned, selected: GameData.characters.find(c => c.unlocked).id,
      upgrades: {},
      settings: { sfx: true, music: true, shake: true, dmgNum: true, perfTier: 'auto' },
      stats: { bestTime: 0, totalKills: 0, runs: 0, wins: 0 },
      pity: 0, pulls: 0
    };
  }
  const S = { data: null };
  S.load = function () {
    const d = defaults();
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const o = JSON.parse(raw);
        Object.assign(d, o);
        d.settings = Object.assign(defaults().settings, o.settings || {});
        d.stats = Object.assign(defaults().stats, o.stats || {});
        if (!d.owned[d.selected]) d.selected = Object.keys(d.owned)[0];
      }
    } catch (e) { console.warn('save load failed', e); }
    d.owned=Object.assign(defaults().owned,d.owned||{});
    if(!GameData.charById[d.selected])d.selected='naruto';
    if(!GameData.charById[d.displaySelected])d.displaySelected=d.selected;
    S.data = d;
    return d;
  };
  S.save = function () { try { localStorage.setItem(KEY, JSON.stringify(S.data)); } catch (e) { } };
  S.reset = function () { try { localStorage.removeItem(KEY); } catch (e) { } S.data = defaults(); S.save(); };
  return S;
})();
