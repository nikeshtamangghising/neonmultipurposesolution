const CACHE_NAME = 'neon-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/images/logo.png',
  '/assets/images/hero-bg.jpg',
  '/assets/images/about-bg.jpg'
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