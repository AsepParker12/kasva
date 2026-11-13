const CACHE = 'kasva-v64';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-512-maskable.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  /* Ambil HTML terbaru lebih dulu agar pengguna tidak perlu membuka aplikasi dua kali.
     Jika offline, gunakan shell yang sudah tersimpan. */
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then((res) => {
        if (!res || (!res.ok && res.type !== 'opaque')) return res;
        const copy = res.clone();
        return caches.open(CACHE).then((c) => c.put(req, copy)).then(() => res);
      }).catch(() => caches.match(req).then((hit) => hit || caches.match('./index.html')))
    );
    return;
  }

  /* Aset lain tetap cache-first dengan pembaruan di latar belakang. */
  e.respondWith(
    caches.match(req).then((hit) => {
      const net = fetch(req)
        .then((res) => {
          if (res && (res.ok || res.type === 'opaque')) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => hit);
      return hit || net;
    })
  );
});
