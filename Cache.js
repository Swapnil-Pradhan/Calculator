self.addEventListener('install', (e) => {
e.waitUntil(
caches.open('SimpleCalculator').then((cache) => cache.addAll([
'/Calculator/',
'index.html',
'Calculator.css',
'Calculator.js',
'DeleteDark.png',
'DeleteLight.png',
'Material.woff2',
'Montserrat.ttf',
'NoCalculationsDark.png',
'NoCalculationsLight.png',
'ProductSans.ttf'
])),
);
});

self.addEventListener('fetch', (e) => {
e.respondWith(
caches.match(e.request).then((response) => response || fetch(e.request)),
);
})
