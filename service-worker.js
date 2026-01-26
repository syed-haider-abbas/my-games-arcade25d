const CACHE_NAME = 'arcade-2.5d-v12';

const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  // External Libraries
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap',
  // React & Zustand (Entry points)
  'https://esm.sh/react@^19.2.3',
  'https://esm.sh/react-dom@^19.2.3/',
  'https://esm.sh/zustand@^5.0.10',
  // Icons
  'https://cdn-icons-png.flaticon.com/512/808/808439.png',
  // Home Screen Thumbnails
  'https://assets.haiderabbas.me/games/home/images/2048-thumb.webp',
  'https://assets.haiderabbas.me/games/home/images/connect-4-thumb.webp',
  'https://assets.haiderabbas.me/games/home/images/reversi-thumb.webp',
  'https://assets.haiderabbas.me/games/home/images/slide-puzzle-thumb.webp',
  // Slide Puzzle Thumbnails
  'https://assets.haiderabbas.me/games/slide-puzzle/images/airplane-baby-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/bear-baby-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/car-girlish-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/deer-baby-fawn-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/deer-baby-fawn-sitting-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/elephant-baby-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/fairy-jungle-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/fox-little-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/giraffe-baby-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/girl-with-bear-toy-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/hipo-baby-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/ice-cream-truck-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/koala-baby-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/lion-jungle-cute-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/monky-baby-hanging-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/owl-king-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/own-in-tree-hollow-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/panda-baby-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/penguin-on-ice-rink-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/pink-kitten-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/princess-jungle-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/rabbit-carrot-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/rabbit-in-hole-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/robot-with-flower-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/sea-turtle-baby-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/tiger-baby-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/train-chu-chu-thumb.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/zebra-baby-thumb.webp',
  // Slide Puzzle Full Optimized Images (Required for Gameplay)
  'https://assets.haiderabbas.me/games/slide-puzzle/images/airplane-baby-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/bear-baby-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/car-girlish-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/deer-baby-fawn-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/deer-baby-fawn-sitting-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/elephant-baby-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/fairy-jungle-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/fox-little-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/giraffe-baby-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/girl-with-bear-toy-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/hipo-baby-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/ice-cream-truck-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/koala-baby-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/lion-jungle-cute-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/monky-baby-hanging-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/owl-king-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/own-in-tree-hollow-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/panda-baby-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/penguin-on-ice-rink-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/pink-kitten-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/princess-jungle-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/rabbit-carrot-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/rabbit-in-hole-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/robot-with-flower-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/sea-turtle-baby-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/tiger-baby-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/train-chu-chu-optimized.webp',
  'https://assets.haiderabbas.me/games/slide-puzzle/images/zebra-baby-optimized.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
        return Promise.all(
            PRECACHE_ASSETS.map(url => 
                cache.add(url).catch(err => console.warn('Failed to precache:', url, err))
            )
        );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // 1. Navigation requests (HTML) - Network First, Fallback to Cache
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.match('/index.html').then(response => {
              return response || caches.match('/index.html'); 
          });
        })
    );
    return;
  }

  // 2. Runtime Caching for Assets
  const isLocal = url.origin === self.location.origin;
  const isExternalCacheable = 
      url.hostname === 'esm.sh' ||
      url.hostname === 'cdn.tailwindcss.com' ||
      url.hostname === 'fonts.googleapis.com' ||
      url.hostname === 'fonts.gstatic.com' ||
      url.hostname === 'images.unsplash.com' ||
      url.hostname === 'cdn-icons-png.flaticon.com' ||
      url.hostname === 'assets.haiderabbas.me';

  if (isLocal || isExternalCacheable) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cachedResponse = await cache.match(event.request);
        
        const networkFetch = fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
             cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch((err) => {
            // console.warn('Network fetch failed for', event.request.url, err);
        });

        return cachedResponse || networkFetch;
      })
    );
  }
});