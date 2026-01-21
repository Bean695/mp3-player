const CACHE_NAME = 'retro-mp3-player-v1';
const urlsToCache = [
  '/',
  '/index.html'
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
```

## File 3 & 4: App Icons (Optional but Recommended)

You need two icon images:
- **icon-192.png** (192x192 pixels)
- **icon-512.png** (512x512 pixels)

You can:
1. Use any image editor to create them
2. Use online tools like **favicon.io** or **canva.com**
3. Or skip icons for now - the app will still work

## Your Folder Structure Should Look Like:
```
your-folder/
├── index.html
├── manifest.json
├── sw.js
├── icon-192.png (optional)
└── icon-512.png (optional)