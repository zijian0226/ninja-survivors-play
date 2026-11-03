/* =========================================================
 * BVN 侧视角像素精灵加载器（docs/art-guide.md §2.2）
 *  - 资源：assets/sprites/{characters,enemies}/<name>.png + .json（帧表：按 animations[k].row 一行一个动作）
 *  - 只画朝右；锚点 = 脚底（JSON anchor），渲染时锚点对齐角色坐标（与阴影中心同一点）
 *  - 加载失败（离线、file:// 无内联数据等）时静默回退到 PixelArt 手绘精灵
 *  - 单文件版：tools/build-single.py 会把 PNG（dataURL）+ JSON 内联到 window.__BVN_INLINE__
 * ========================================================= */
window.BVN = (function () {
  const B = {};
  // 游戏内敌人类型 → BVN 精灵（碰撞半径、阴影尺寸由 sprites.js 按可见像素包围盒自动推算）
  B.heroes = { naruto: 'naruto', sasuke: 'sasuke', sakura: 'sakura', kakashi: 'kakashi' };
  B.enemies = { rogue: 'otoninja', wolf: 'hound', bandit: 'redninja', assassin: 'whiteninja', puppet: 'brute' };
  const sheets = {};      // 'characters/naruto' → { json, img }
  let pending = 0, failed = 0;
  B.disabled = /[?&]nobvn\b/.test(location.search);   // ?nobvn：强制使用旧像素精灵（对比/调试）
  function done() { pending--; if (pending === 0 && B.onready) B.onready(); }
  function loadOne(key) {
    const inl = window.__BVN_INLINE__ && window.__BVN_INLINE__[key];
    const base = 'assets/sprites/' + key;
    pending++;
    const jp = inl ? Promise.resolve(inl.json) : fetch(base + '.json').then(r => { if (!r.ok) throw new Error(r.status); return r.json(); });
    jp.then(json => new Promise((res, rej) => {
      const img = new Image();
      img.onload = () => res({ json, img });
      img.onerror = () => rej(new Error('img ' + key));
      img.src = inl ? inl.png : base.replace(/[^/]+$/, '') + json.image;
    })).then(s => { sheets[key] = s; done(); }).catch(e => { failed++; console.info('[bvn] 回退像素精灵：', key, e && e.message); done(); });
  }
  B.load = function () {
    if (B.disabled || typeof fetch === 'undefined' && !window.__BVN_INLINE__) return;
    if (location.protocol === 'file:' && !window.__BVN_INLINE__) return;   // file:// 下 fetch 不可用 → 直接回退
    Object.values(B.heroes).forEach(n => loadOne('characters/' + n));
    Object.values(B.enemies).forEach(n => loadOne('enemies/' + n));
  };
  /** 取出某动作的帧（canvas 数组），未加载返回 null */
  B.frames = function (key, anim) {
    const s = sheets[key]; if (!s) return null;
    const a = s.json.animations[anim]; if (!a) return null;
    const fw = s.json.frameWidth, fh = s.json.frameHeight, sp = s.json.spacing || 0, out = [];
    for (let i = 0; i < a.frames; i++) {
      const c = document.createElement('canvas'); c.width = fw; c.height = fh;
      c.getContext('2d').drawImage(s.img, i * (fw + sp), a.row * (fh + sp), fw, fh, 0, 0, fw, fh);
      out.push(c);
    }
    return { frames: out, fps: a.fps, loop: a.loop, anchor: s.json.anchor, hitbox: s.json.hitbox };
  };
  B.ready = key => !!sheets[key];
  B.stats = () => ({ loaded: Object.keys(sheets).length, pending, failed });
  return B;
})();
