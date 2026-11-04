/* 忍界幸存者 Service Worker
 * - 版本化缓存：修改任何静态资源后，把 VERSION +1 即可让客户端更新并清理旧缓存
 * - 安装时预缓存核心文件；同源 GET 一律 cache-first，未命中走网络并写入运行时缓存
 *   （assets/portraits/*.png 等首次加载成功后即可离线使用；404/失败的响应不会被缓存）
 * - 全部使用相对路径，部署在子路径（如 GitHub Pages /<repo>/）也可工作
 */
const VERSION = 'v29-ui';
const SCOPE = new URL(self.registration ? self.registration.scope : './', self.location).pathname;
const PREFIX = 'ninja-survivors-';
const CACHE = PREFIX + VERSION + '@' + SCOPE;   // 带 scope，避免同域其它项目（如 user.github.io 下多个仓库）互删缓存

const PRECACHE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/style.css',
  './src/data/characters.js',
  './src/data/skills.js',
  './src/data/enemies.js',
  './src/data/upgrades.js',
  './src/art/pixelArt.js',
  './src/save.js',
  './src/audio.js',
  './src/bvn.js',
  './src/sprites.js',
  './src/perf.js',
  './src/battle-bridge.js?v=ui29',
  './src/data/roster-current.js',
  './css/current-ui.css?v=ui29',
  './src/ui.js?v=ui29',
  './src/mobile.js',
  './src/main.js?v=ui29',
  // BVN 战斗精灵（docs/art-guide §2.2）
  './assets/sprites/characters/naruto.json',
  './assets/sprites/characters/naruto.png',
  './assets/sprites/characters/sasuke.json',
  './assets/sprites/characters/sasuke.png',
  './assets/sprites/characters/sakura.json',
  './assets/sprites/characters/sakura.png',
  './assets/sprites/characters/kakashi.json',
  './assets/sprites/characters/kakashi.png',
  './assets/sprites/enemies/otoninja.json',
  './assets/sprites/enemies/otoninja.png',
  './assets/sprites/enemies/hound.json',
  './assets/sprites/enemies/hound.png',
  './assets/sprites/enemies/redninja.json',
  './assets/sprites/enemies/redninja.png',
  './assets/sprites/enemies/whiteninja.json',
  './assets/sprites/enemies/whiteninja.png',
  './assets/sprites/enemies/brute.json',
  './assets/sprites/enemies/brute.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon-180.png',
  './icons/favicon-32.png'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // 逐个缓存：个别文件缺失不会导致整个 SW 安装失败
    await Promise.all(PRECACHE.map(async url => {
      try {
        const res = await fetch(new Request(url, { cache: 'reload' }));
        if (res.ok) await cache.put(url, res);
      } catch (e) { /* 离线安装时忽略 */ }
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith(PREFIX) && k.endsWith('@' + SCOPE) && k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || req.headers.has('range')) return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;           // 只处理同源
  if (!url.pathname.startsWith(SCOPE)) return;
  const isNav = req.mode === 'navigate';
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = await cache.match(req, { ignoreSearch: isNav });
    if (hit && !isNav && !/\.(?:js|css)$/.test(url.pathname)) return hit;
    try {
      const res = await fetch(req);
      if (res && res.ok && res.type === 'basic') cache.put(req, res.clone()).catch(() => { });
      return res;
    } catch (e) {
      if(hit)return hit;
      if(isNav&&url.pathname===SCOPE){const shell=await cache.match('./index.html');if(shell)return shell;}
      return new Response('', { status: 504, statusText: 'Offline' });
    }
  })());
});
