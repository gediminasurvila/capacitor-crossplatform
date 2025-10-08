// Minimal service worker that does not cache anything.
// It installs and activates immediately, and forwards all fetch
// requests to the network without storing responses.

self.addEventListener("install", (event) => {
  // Don't pre-cache anything
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // Take control of clients as soon as possible
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Always forward requests to the network. Do not cache.
  event.respondWith(fetch(event.request));
});
