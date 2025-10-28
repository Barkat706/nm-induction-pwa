const CACHE_NAME = 'nm-induction-cache-v1';
const ASSETS = ['./','./index.html','./manifest.json','./config.js','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME ? caches.delete(k) : null)))); });
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (url.searchParams.has('q')) {
    e.respondWith(fetch(e.request).catch(() => new Response(JSON.stringify({found:false, offline:true}), { headers: {'Content-Type':'application/json'} })));
    return;
  }
  e.respondWith(caches.match(e.request).then(cacheRes => cacheRes || fetch(e.request)));
});