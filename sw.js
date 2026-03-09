// VocabMaster Service Worker
// Обновляй CACHE_NAME при каждом новом деплое чтобы браузер подхватил изменения
const CACHE_NAME = 'vocabmaster-v5';

const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  // CDN зависимости — кэшируем при первом посещении
  'https://cdn.jsdelivr.net/npm/preact@10.19.3/dist/preact.umd.js',
  'https://cdn.jsdelivr.net/npm/preact@10.19.3/hooks/dist/hooks.umd.js',
  'https://cdn.jsdelivr.net/npm/htm@3.1.1/dist/htm.umd.js',
];

// ── INSTALL: кэшируем все ресурсы ──────────────────────────────
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting()) // активируем сразу без ожидания
  );
});

// ── ACTIVATE: удаляем старые кэши ─────────────────────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME)
          .map(k => {
            console.log('SW: deleting old cache', k);
            return caches.delete(k);
          })
      )
    ).then(() => self.clients.claim()) // берём контроль над всеми вкладками
  );
});

// ── FETCH: cache-first с fallback на сеть ─────────────────────
self.addEventListener('fetch', e => {
  // Пропускаем не-GET запросы и chrome-extension
  if(e.request.method !== 'GET') return;
  if(e.request.url.startsWith('chrome-extension://')) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if(cached) return cached;

      // Нет в кэше — идём в сеть и кэшируем
      return fetch(e.request)
        .then(res => {
          // Кэшируем только успешные ответы
          if(!res || res.status !== 200 || res.type === 'opaque') return res;

          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          return res;
        })
        .catch(() => {
          // Оффлайн и нет в кэше — для HTML возвращаем главную страницу
          if(e.request.destination === 'document'){
            return caches.match('./index.html');
          }
        });
    })
  );
});

// ── MESSAGE: обновление по запросу из приложения ───────────────
self.addEventListener('message', e => {
  if(e.data?.type === 'SKIP_WAITING') self.skipWaiting();
});
