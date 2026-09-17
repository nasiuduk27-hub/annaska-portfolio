// My Special Place map — lazy init via IntersectionObserver
(function () {
  var el = document.getElementById('special-map');
  if (!el || el.dataset.init) return;
  var POS = [-6.1391864, 106.8311197]; // Mangga Dua Square, Jakarta Utara
  function boot() {
    if (el.dataset.init) return;
    el.dataset.init = '1';
    var s = document.createElement('script');
    s.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    s.onload = function () {
      var map = L.map('special-map', { center: POS, zoom: 15, scrollWheelZoom: false });
      var key = (window.MAP_CONFIG && window.MAP_CONFIG.cartoKey) || '';
      L.tileLayer('https://basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png?key=' + key, {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        maxZoom: 19
      }).addTo(map);
      L.marker(POS, {
        icon: L.divIcon({ className: 'special-div-icon', html: '<div class="special-pin"></div>', iconSize: [26, 26], iconAnchor: [13, 24] })
      }).addTo(map);
      setTimeout(function () { map.invalidateSize(); }, 200);
    };
    document.body.appendChild(s);
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) { boot(); io.disconnect(); }
    }, { rootMargin: '200px' });
    io.observe(el);
  } else { boot(); }
})();
