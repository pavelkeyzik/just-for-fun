const cacheName = 'jff-v1';
const filesToCache = ['/', '/index.html'];

self.addEventListener('install', function(event) {
  // event.waitUntil(
  //   caches
  //     .open(cacheName)
  //     .then(function(cache) {
  //       return cache.addAll(filesToCache);
  //     })
  //     .then(function() {
  //       return self.skipWaiting();
  //     }),
  // );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }

      return fetch(event.request).then(function(response) {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // IMPORTANT: Clone the response. A response is a stream
        // and because we want the browser to consume the response
        // as well as the cache consuming the response, we need
        // to clone it so we have two streams.
        const responseToCache = response.clone();

        caches.open(cacheName).then(function(cache) {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    }),
  );
});
