// @ts-nocheck

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.core.setCacheNameDetails({
  prefix: 'just-for-fun',
  suffix: 'v1',
});

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
