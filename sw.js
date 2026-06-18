self.addEventListener('fetch', e => e.respondWith(fetch(e.request.url.replace(self.location.origin, 'https://bulbasaurchat.github.io/games/dadish-2/'))));
