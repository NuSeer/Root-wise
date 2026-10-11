// Rootwise service worker — installable app + offline use.
// Bump CACHE_VERSION whenever rootwise-enhanced.html (or another cached file) changes, so installed copies refresh.
// Paths are relative to this file, so it works under https://nuseer.github.io/Root-wise/ as well as locally.
const CACHE_VERSION = 'rootwise-v4';
const CORE = [
  './',
  './rootwise-enhanced.html',
  './manifest.webmanifest',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/maskable-512.png',
  './assets/icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

// Remove old cache versions. This never touches localStorage, so saved cabinet / journal / formulas are untouched.
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('rootwise-') && k !== CACHE_VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Only the app's own files and its Google Fonts are cached. Videos, PDFs, outside links and API calls pass straight through.
  const mine = url.origin === location.origin && url.pathname.startsWith(new URL('./', self.location).pathname);
  const fonts = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (!mine && !fonts) return;
  // Network first so a new version shows up as soon as the phone is online; the cached copy is used when it is not.
  e.respondWith(
    fetch(req).then(res => {
      if (res && (res.ok || res.type === 'opaque')) { const copy = res.clone(); caches.open(CACHE_VERSION).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req).then(hit => hit || (req.mode === 'navigate' ? caches.match('./rootwise-enhanced.html') : Response.error())))
  );
});
