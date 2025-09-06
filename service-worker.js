self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("calc-store").then(cache => {
      return cache.addAll(["/", "/index.html", "/style.css", "/script.js", "/icon.png"]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
