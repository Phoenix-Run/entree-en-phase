// Keeps the whole application on the device so that it works without a network.
// Change CACHE_NAME with each release: the new files then replace the old ones
// once every open window of the application has been closed, never during a session.
const CACHE_NAME = 'entree-en-phase-v2.9.1';

const APP_FILES = [
    './',
    './index.html',
    './manifest.json',
    './manuel.pdf',
    './icons/icon-192.png',
    './icons/icon-512.png',
    './fonts/Inter-latin.woff2',
    './fonts/JetBrainsMono-latin.woff2',
    './en/',
    './en/index.html',
    './en/manifest.json',
    './en/manual.pdf'
];

self.addEventListener('install', event => {
    event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)));
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(names => Promise.all(
            names.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
        )).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    const request = event.request;
    if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

    event.respondWith(
        caches.match(request).then(cached => {
            if (cached) return cached;
            return fetch(request).catch(() => {
                if (request.mode === 'navigate') return caches.match('./index.html');
                throw new Error('Fichier indisponible hors ligne');
            });
        })
    );
});
