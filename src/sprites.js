/* 像素精灵构建器：把字符矩阵转换为带描边的离屏 canvas */
window.Sprites = (function () {
  const PA = window.PixelArt;
  const cache = {};
  const OUTLINE = [22, 16, 32, 255];

  function hex(c) {
    c = c.replace('#', '');
    if (c.length === 3) c = c.split('').map(x => x + x).join('');
    const n = parseInt(c, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255, 255];
  }
  function mk(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }

  function build(rows, pal, opts) {
    opts = opts || {};
    const o = opts.outline === false ? 0 : 1;
    const w0 = Math.max.apply(null, rows.map(r => r.length));
    const h0 = rows.length;
    const W = w0 + o * 2, H = h0 + o * 2;
    const c = mk(W, H), x = c.getContext('2d');
    const img = x.createImageData(W, H);
    const solid = new Uint8Array(W * H);
    const pc = {};
    for (const k in pal) pc[k] = hex(pal[k]);
    for (let y = 0; y < h0; y++) {
      const row = rows[y];
      for (let i = 0; i < w0; i++) {
        const ch = row[i];
        if (!ch || ch === '.' || !pc[ch]) continue;
        const px = i + o, py = y + o, idx = (py * W + px);
        const col = pc[ch];
        img.data.set(col, idx * 4);
        solid[idx] = 1;
      }
    }
    if (o) {
      const oc = opts.outlineColor ? hex(opts.outlineColor) : OUTLINE;
      for (let y = 0; y < H; y++) for (let i = 0; i < W; i++) {
        const idx = y * W + i;
        if (solid[idx]) continue;
        if ((i > 0 && solid[idx - 1]) || (i < W - 1 && solid[idx + 1]) || (y > 0 && solid[idx - W]) || (y < H - 1 && solid[idx + W]))
          img.data.set(oc, idx * 4);
      }
    }
    x.putImageData(img, 0, 0);
    return c;
  }
  function white(src, color) {
    const c = mk(src.width, src.height), x = c.getContext('2d');
    x.drawImage(src, 0, 0);
    x.globalCompositeOperation = 'source-in';
    x.fillStyle = color || '#ffffff';
    x.fillRect(0, 0, c.width, c.height);
    return c;
  }
  function flip(src) {
    const c = mk(src.width, src.height), x = c.getContext('2d');
    x.translate(src.width, 0); x.scale(-1, 1); x.drawImage(src, 0, 0);
    return c;
  }
  function scaled(src, s) {
    const c = mk(src.width * s, src.height * s), x = c.getContext('2d');
    x.imageSmoothingEnabled = false; x.drawImage(src, 0, 0, c.width, c.height);
    return c;
  }

  /* --- 程序化像素形状 --- */
  function pixelCanvas(w, h, fn) {
    const c = mk(w, h), x = c.getContext('2d');
    const img = x.createImageData(w, h);
    for (let y = 0; y < h; y++) for (let i = 0; i < w; i++) {
      const col = fn(i, y);
      if (col) img.data.set(col, (y * w + i) * 4);
    }
    x.putImageData(img, 0, 0);
    return c;
  }
  /* 几何图形缓存（圆 / 环 / 椭圆）：
     旧实现把连续变化的 alpha 拼进 key，几乎每帧新建离屏 canvas 且缓存无限增长（内存泄漏）。
     现在：alpha 量化到 1/16 档，并且独立的 LRU 上限（SHAPE_MAX 张）；推荐调用方传 alpha=1，用 globalAlpha 在绘制时施加。 */
  const shapeCache = new Map(), SHAPE_MAX = 384; let shapeMiss = 0;
  const qa = a => (a == null ? 16 : Math.max(0, Math.min(16, Math.round(a * 16))));
  function shapeGet(key, make) {
    let c = shapeCache.get(key);
    if (c) { shapeCache.delete(key); shapeCache.set(key, c); return c; }   // 命中 → 移到最新
    c = make(); shapeMiss++;
    shapeCache.set(key, c);
    if (shapeCache.size > SHAPE_MAX) shapeCache.delete(shapeCache.keys().next().value);   // 淘汰最久未用
    return c;
  }
  function circle(r, color, alpha) {
    r = Math.max(1, Math.round(r));
    const q = qa(alpha);
    return shapeGet('c' + r + color + '@' + q, () => {
      const col = hex(color); col[3] = Math.round(255 * q / 16);
      const s = r * 2 + 1;
      return pixelCanvas(s, s, (i, y) => {
        const dx = i - r, dy = y - r; return dx * dx + dy * dy <= r * r + r * 0.6 ? col : null;
      });
    });
  }
  function ring(r, th, color, alpha) {
    r = Math.max(2, Math.round(r));
    const q = qa(alpha);
    return shapeGet('r' + r + '_' + th + color + '@' + q, () => {
      const col = hex(color); col[3] = Math.round(255 * q / 16);
      const s = r * 2 + 1;
      return pixelCanvas(s, s, (i, y) => {
        const d = Math.hypot(i - r, y - r); return d <= r + 0.3 && d >= r - th ? col : null;
      });
    });
  }
  function ellipse(w, h, color, alpha) {
    // 椭圆只用于常驻阴影，保留精确 alpha、放主缓存
    const key = 'e' + w + 'x' + h + color + alpha;
    if (cache[key]) return cache[key];
    const col = hex(color); col[3] = Math.round(255 * alpha);
    return cache[key] = pixelCanvas(w, h, (i, y) => {
      const dx = (i + 0.5 - w / 2) / (w / 2), dy = (y + 0.5 - h / 2) / (h / 2);
      return dx * dx + dy * dy <= 1 ? col : null;
    });
  }
  function shapeCacheSize() { return shapeCache.size; }
  function shapeCacheMisses() { return shapeMiss; }
  function rasenganFrames(r, palette) {
    const frames = [];
    const [c1, c2, c3] = palette.map(hex);
    const s = r * 2 + 1;
    for (let f = 0; f < 4; f++) {
      frames.push(pixelCanvas(s + 2, s + 2, (i, y) => {
        const dx = i - r - 1, dy = y - r - 1, d = Math.hypot(dx, dy);
        if (d > r + 0.5) return d <= r + 1.5 ? [20, 40, 90, 255] : null;
        if (d < r * 0.35) return c3;
        const a = Math.atan2(dy, dx) + f * Math.PI / 2;
        const sw = Math.sin(a * 2 + d * 1.3);
        return sw > 0.35 ? c3 : (d < r * 0.7 ? c2 : c1);
      }));
    }
    return frames;
  }
  function rskFrames() {
    const frames = [], r = 9, s = r * 2 + 1;
    for (let f = 0; f < 4; f++) {
      frames.push(pixelCanvas(s, s, (i, y) => {
        const dx = i - r, dy = y - r, d = Math.hypot(dx, dy);
        if (d <= 3.6) return d < 2 ? [255, 255, 255, 255] : [90, 200, 255, 255];
        const a = Math.atan2(dy, dx) + f * 0.4;
        const m = ((a * 4 / (Math.PI * 2)) % 1 + 1) % 1;
        const blade = m < 0.32 - (d - 4) * 0.025;
        if (blade && d <= r) return d > r - 1.5 ? [160, 230, 255, 255] : [235, 250, 255, 230];
        return null;
      }));
    }
    return frames;
  }
  function fireFrames(r) {
    const frames = [];
    for (let f = 0; f < 3; f++) {
      frames.push(pixelCanvas(r * 2 + 3, r * 2 + 3, (i, y) => {
        const dx = i - r - 1, dy = y - r - 1, d = Math.hypot(dx, dy) + ((i * 7 + y * 13 + f * 5) % 3) * 0.35;
        if (d > r + 1) return null;
        if (d < r * 0.4) return [255, 250, 200, 255];
        if (d < r * 0.75) return [255, 200, 40, 255];
        if (d < r + 0.2) return [255, 110, 20, 255];
        return [180, 40, 10, 255];
      }));
    }
    return frames;
  }

  /* --- 角色/敌人 --- */
  /* 可见像素包围盒（不含 1px 描边）：用于按精灵实际大小推算碰撞半径和阴影 */
  function contentBox(c) {
    const w = c.width, h = c.height, d = c.getContext('2d', { willReadFrequently: true }).getImageData(0, 0, w, h).data;
    let x0 = w, y0 = h, x1 = -1, y1 = -1;
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (d[(y * w + x) * 4 + 3] > 32) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
    if (x1 < 0) return { w: 1, h: 1 };
    return { w: Math.max(1, x1 - x0 + 1 - 2), h: Math.max(1, y1 - y0 + 1 - 2) };
  }
  // 脚下阴影：宽 ≈ 可见宽 0.7（偶数，10–32），高 ≈ 宽 0.3（≥4）
  function shadowFor(box) {
    let w = Math.round(box.w * 0.7); w = Math.max(10, Math.min(32, w + (w & 1)));
    return [w, Math.max(4, Math.round(w * 0.3))];
  }
  /* BVN 精灵集（docs/art-guide §2.2）：与旧精灵集同结构 + 锚点/阴影/帧率；未加载时返回 null → 调用方回退旧像素精灵。
     锚点一律读 JSON anchor（不假定在帧中心）；水平翻转以 anchor.x 为轴：翻转后锚点 = frameWidth − 1 − anchor.x */
  function bvnSet(key, extra) {
    const ck = 'bvn_' + key;
    if (cache[ck]) return cache[ck];
    if (!window.BVN || !BVN.ready(key)) return null;
    const walk = BVN.frames(key, 'walk'); if (!walk) return null;
    const frames = walk.frames, fw = frames[0].width, fh = frames[0].height, ax = walk.anchor.x, ay = walk.anchor.y;
    const idle = BVN.frames(key, 'idle');
    const box = contentBox((idle || walk).frames[0]), sh = shadowFor(box);   // 用站立帧（无则行走首帧）量可见尺寸
    const res = {
      bvn: true, frames, flipped: frames.map(flip), white: frames.map(f => white(f)), whiteF: frames.map(f => white(flip(f))),
      w: fw, h: fh, ax, ay, axF: fw - 1 - ax, walkFps: walk.fps, hitR: walk.hitbox && walk.hitbox.r, box,
      shadow: ellipse(sh[0], sh[1], '#000000', 0.3), shadowWH: sh
    };
    if (idle) { res.idle = idle.frames; res.idleF = idle.frames.map(flip); res.idleFps = idle.fps; }
    Object.assign(res, extra || {});
    // 四名主角共用 52×37 帧、站姿宽窄不一：统一用 art-guide 建议的 16×5 阴影，避免换角色时阴影忽大忽小
    if (res.heroShadow) { res.shadowWH = [16, 5]; res.shadow = ellipse(16, 5, '#000000', 0.3); }
    return cache[ck] = res;
  }
  function heroFrames(charDef, pixelOnly) {
    const key = 'hero_' + charDef.id;
    const hb = !pixelOnly && window.BVN && BVN.heroes[charDef.id] && bvnSet('characters/' + BVN.heroes[charDef.id], { heroShadow: true });
    if (hb) return hb;
    if (cache[key]) return cache[key];
    const top = PA.heroes[charDef.sprite];
    const legsOrder = ['A', 'B', 'A', 'C'];
    const frames = legsOrder.map(L => build(top.concat(PA.legs[L]), charDef.palette));
    const res = { frames, flipped: frames.map(flip), white: frames.map(f => white(f)), w: frames[0].width, h: frames[0].height };
    return cache[key] = withAnchor(res);
  }
  // 旧像素精灵：脚底 = 帧底边（绘制时底边 +1 对齐坐标）
  function withAnchor(res) {
    res.ax = res.w / 2; res.axF = res.w / 2; res.ay = res.h - 1; res.walkFps = 6; res.shadow = cache.shadow || (cache.shadow = ellipse(12, 4, '#000000', 0.3));
    return res;
  }
  function enemyFrames(type, pixelOnly) {
    const key = 'enemy_' + type;
    const m = !pixelOnly && window.BVN && BVN.enemies[type];
    const eb = m && bvnSet('enemies/' + m);
    if (eb) {
      // 碰撞半径缩放 = 新旧精灵可见尺寸比（宽、高比取平均），旧精灵为 PixelArt 手绘版
      if (eb.rMul == null) { const ob = contentBox(enemyFrames(type, true).frames[0]); eb.rMul = (eb.box.w / ob.w + eb.box.h / ob.h) / 2; }
      return eb;
    }
    if (cache[key]) return cache[key];
    const pal = PA.enemyPalettes[type];
    let frames;
    if (type === 'wolf') {
      frames = [build(PA.wolf.top.concat(PA.wolf.legsA), pal), build(PA.wolf.top.concat(PA.wolf.legsB), pal)];
    } else {
      const top = PA.enemyBodies[type];
      frames = [build(top.concat(PA.legs.B), pal), build(top.concat(PA.legs.C), pal)];
    }
    const res = { frames, flipped: frames.map(flip), white: frames.map(f => white(f)), whiteF: frames.map(f => white(flip(f))), w: frames[0].width, h: frames[0].height };
    return cache[key] = withAnchor(res);
  }
  function bossFrames(idx) {
    const key = 'boss_' + idx;
    if (cache[key]) return cache[key];
    const pal = GameData.bosses[idx].palette;
    const frames = [PA.boss.legsA, PA.boss.legsB].map(l => scaled(build(PA.boss.top.concat(l), pal), 2));
    const res = { frames, flipped: frames.map(flip), white: frames.map(f => white(f)), whiteF: frames.map(f => white(flip(f))), w: frames[0].width, h: frames[0].height };
    return cache[key] = res;
  }

  function item(name) {
    if (cache['item_' + name]) return cache['item_' + name];
    const d = PA.items[name];
    return cache['item_' + name] = build(d.rows, d.pal, { outline: d.outline });
  }

  function digits(color) {
    const key = 'dg' + color;
    if (cache[key]) return cache[key];
    return cache[key] = PA.digits.map(rows => build(rows, { '#': color }, { outlineColor: '#1a0e1e' }));
  }

  function iconCanvas(id) {
    const key = 'icon_' + id;
    if (cache[key]) return cache[key];
    let c;
    if (id === 'rasengan') c = rasenganFrames(5, ['#2a7bff', '#5ac8ff', '#e8faff'])[0];
    else if (id === 'rsk') c = rskFrames()[1];
    else if (id === 'katon') c = fireFrames(5)[0];
    else {
      const d = PA.icons[id] || PA.icons.scrollBig;
      c = build(d.rows, d.pal);
    }
    return cache[key] = c;
  }
  const urlCache = {};
  function iconURL(id, scale) {
    scale = scale || 4;
    const k = id + '@' + scale;
    if (urlCache[k]) return urlCache[k];
    return urlCache[k] = scaled(iconCanvas(id), scale).toDataURL();
  }
  function portraitURL(charId, scale) {
    scale = scale || 8;
    const k = 'p_' + charId + '@' + scale;
    if (urlCache[k]) return urlCache[k];
    return urlCache[k] = scaled(heroFrames(GameData.charById[charId], true).frames[0], scale).toDataURL();
  }
  function headURL(charId, scale) {
    scale = scale || 4;
    const k = 'h_' + charId + '@' + scale;
    if (urlCache[k]) return urlCache[k];
    const f = heroFrames(GameData.charById[charId], true).frames[0];
    const c = mk(f.width, 12); c.getContext('2d').drawImage(f, 0, 0);
    return urlCache[k] = scaled(c, scale).toDataURL();
  }

  /* 地面贴图 */
  function groundTile() {
    if (cache.ground) return cache.ground;
    let seed = 7;
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const base = [[58, 110, 54], [62, 118, 58], [54, 102, 50], [66, 124, 60]];
    const c = pixelCanvas(64, 64, () => {
      const r = rnd();
      return (r < 0.05 ? [74, 136, 66, 255] : base[Math.floor(rnd() * 4)].concat(255));
    });
    const x = c.getContext('2d');
    // 小草纹
    for (let i = 0; i < 26; i++) {
      const px = Math.floor(rnd() * 62), py = Math.floor(rnd() * 62);
      x.fillStyle = rnd() < 0.5 ? '#4f9446' : '#2f5e2c';
      x.fillRect(px, py, 1, 2); x.fillRect(px + 1, py + 1, 1, 1);
    }
    return cache.ground = c;
  }

  function init() {
    GameData.characters.forEach(heroFrames);
    Object.keys(GameData.enemies).forEach(enemyFrames);
    GameData.bosses.forEach((b, i) => bossFrames(i));
    Object.keys(PA.items).forEach(item);
    cache.rasengan = rasenganFrames(4, ['#2a7bff', '#5ac8ff', '#e8faff']);
    cache.rsk = rskFrames();
    cache.fire = fireFrames(3);
    cache.fireBig = fireFrames(5);
    cache.shadow = ellipse(12, 4, '#000000', 0.3);
    cache.shadowBig = ellipse(30, 8, '#000000', 0.3);
    groundTile();
  }

  return {
    init, build, white, flip, scaled, circle, ring, ellipse, item, digits, heroFrames, enemyFrames, bossFrames,
    iconURL, portraitURL, headURL, groundTile, shapeCacheSize, shapeCacheMisses, get: k => cache[k]
  };
})();
