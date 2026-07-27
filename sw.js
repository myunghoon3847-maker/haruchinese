const CACHE = 'haru-chinese-100-mobile-v1-6-voice';
const ASSETS = ['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./favicon.ico','./favicon-16.png','./favicon-32.png','./apple-touch-icon.png','./icon-192.png','./icon-512.png','./icon-maskable-512.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
