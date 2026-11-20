// Offline-Cache. Bei jeder Änderung VERSION erhöhen, damit Handys die neue Version laden.
const VERSION = '1.5';
const CACHE = 'modell-info-v' + VERSION;
const ASSETS = ['./', './index.html', './models.js', './manifest.json', './icon-192.png', './icon-512.png', './img/arcus-45.jpg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
// Erst Cache (schnell, offline), im Hintergrund aktualisieren. Schriften von Google werden mitgecacht.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const cached = await c.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request).then(r => { if (r.ok || r.type === 'opaque') c.put(e.request, r.clone()); return r; }).catch(() => cached);
    return cached || net;
  }));
});
