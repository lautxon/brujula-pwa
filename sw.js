const CACHE_NAME = 'brujula-muar-v1';
const urlsToCache = [
  '/',
  '/capa1.html',
  '/capa2.html',
  '/capa3.html',
  '/capa4.html',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});