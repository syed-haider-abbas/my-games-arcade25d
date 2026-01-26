const CACHE_NAME = 'arcade-2.5d-v9';

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
  // Game Images (Precache for Home Screen offline support)
  // Images removed in favor of CSS-generated thumbnails
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
      url.hostname === 'cdn-icons-png.flaticon.com';

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
            console.warn('Network fetch failed for', event.request.url, err);
        });

        return cachedResponse || networkFetch;
      })
    );
  }
});