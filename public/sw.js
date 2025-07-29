const CACHE_NAME = "iphonercia-cache-v1";
const URLS_TO_CACHE = ["/", "/manifest.json", "/icons/iphoneRcia-icon.png"];

self.addEventListener("install", (event) => {
  console.log("[SW] Instalando...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("[SW] Activado.");
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

self.addEventListener("fetch", (event) => {
  // Solo aplica a peticiones GET
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Devuelve desde cache si existe, sino fetch desde la red
      return (
        cachedResponse ||
        fetch(event.request)
          .then((response) => {
            // Guarda en cache si es exitosa
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, response.clone());
              return response;
            });
          })
          .catch(() => caches.match("/offline.html")) // Opcional: página fallback
      );
    })
  );
});
