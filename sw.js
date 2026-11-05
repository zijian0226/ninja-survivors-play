/* 忍界幸存者 Service Worker
 * - 版本化缓存：修改任何静态资源后，把 VERSION +1 即可让客户端更新并清理旧缓存
 * - 安装时预缓存核心文件；同源 GET 一律 cache-first，未命中走网络并写入运行时缓存
 *   （assets/portraits/*.png 等首次加载成功后即可离线使用；404/失败的响应不会被缓存）
 * - 全部使用相对路径，部署在子路径（如 GitHub Pages /<repo>/）也可工作
 */
const VERSION = 'v49-kimimaro';
const SCOPE = new URL(self.registration ? self.registration.scope : './', self.location).pathname;
const PREFIX = 'ninja-survivors-';
const CACHE = PREFIX + VERSION + '@' + SCOPE;   // 带 scope，避免同域其它项目（如 user.github.io 下多个仓库）互删缓存

const PRECACHE = [
  './',
  './index.html',
  './play.html',
  './manifest.webmanifest',
  './css/style.css?v=portrait49',
  './src/data/characters.js?v=portrait49',
  './src/data/skills.js?v=portrait49',
  './src/data/enemies.js?v=portrait49',
  './src/data/upgrades.js?v=portrait49',
  './src/art/pixelArt.js?v=portrait49',
  './src/save.js?v=portrait49',
  './src/audio.js?v=portrait49',
  './src/sprites.js?v=portrait49',
  './src/battle-bridge.js?v=portrait49',
  './src/data/roster-current.js?v=portrait49',
  './src/data/phase-one.js?v=portrait49',
  './src/data/character-packs.js?v=portrait49',
  './css/current-ui.css?v=portrait49',
  './css/roster.css?v=portrait49',
  './src/data/portrait-layout.js?v=portrait49',
  './src/roster-ui.js?v=portrait49',
  './src/home-portrait.js?v=portrait49',
  './src/ui.js?v=portrait49',
  './src/mobile.js?v=portrait49',
  './src/main.js?v=portrait49',
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
    // Old v6 pages keep executing the obsolete v0.1 engine even after their worker updates.
    // Migrate such open pages once. Hosted combat frames protect in-progress current runs.
    const windows=await self.clients.matchAll({type:'window',includeUncontrolled:true});
    const hasBattle=windows.some(client=>new URL(client.url).pathname.startsWith(SCOPE+'battle/'));
    if(!hasBattle)await Promise.all(windows.map(async client=>{
      const url=new URL(client.url);
      if(url.origin!==self.location.origin||![SCOPE,SCOPE+'index.html',SCOPE+'play.html'].includes(url.pathname))return;
      const status=await new Promise(resolve=>{
        const channel=new MessageChannel();let settled=false;
        const done=value=>{if(settled)return;settled=true;clearTimeout(timeout);channel.port1.close();resolve(value);};
        const timeout=setTimeout(()=>done(null),900);
        channel.port1.onmessage=event=>done(event.data);
        try{client.postMessage({type:'NINJA_CLIENT_STATUS'},[channel.port2]);}catch{done(null);}
      });
      if(status?.release==='portrait49')return;
      url.pathname=SCOPE+'play.html';url.searchParams.set('release','portrait49');
      // Navigation must run after activation has settled; awaiting it inside activate deadlocks.
      let tries=0;
      const navigate=()=>{
        if(self.registration.active?.state==='activated'){client.navigate(url.href).catch(()=>{});return;}
        if(++tries<80)setTimeout(navigate,25);
      };
      setTimeout(navigate,0);
    }));
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
