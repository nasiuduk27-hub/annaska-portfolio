(function () {
  function initSite() {
    var header = document.getElementById('header');
    var hamburger = document.getElementById('hamburger');
    var navMenu = document.getElementById('nav-menu');
    var darkIcon = document.getElementById('theme-toggle-dark-icon');
    var lightIcon = document.getElementById('theme-toggle-light-icon');

    function syncThemeIcon() {
      var isDark = document.documentElement.classList.contains('dark');
      if (darkIcon) darkIcon.classList.toggle('hidden', isDark);
      if (lightIcon) lightIcon.classList.toggle('hidden', !isDark);
    }

    function initPageTransition() {
      var main = document.querySelector('main');
      if (!main) return;

      var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) return;

      main.classList.add('page-transition');

      document.querySelectorAll('a[href]').forEach(function (link) {
        link.addEventListener('click', function (e) {
          if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
          if (link.target && link.target !== '_self') return;

          var href = link.getAttribute('href');
          if (!href || href.charAt(0) === '#') return;

          var url;
          try { url = new URL(href, window.location.href); } catch (err) { return; }
          if (url.origin !== window.location.origin) return;
          if (url.pathname === window.location.pathname && url.search === window.location.search) return;

          e.preventDefault();
          main.classList.remove('page-transition');
          main.classList.add('page-exit');
          window.setTimeout(function () { window.location.href = url.href; }, 450);
        });
      });
    }

    window.addEventListener('pageshow', function () {
      var main = document.querySelector('main');
      if (main) main.classList.remove('page-exit');
    });

    window.addEventListener('scroll', function () {
      if (header) header.classList.toggle('navbar-fixed', window.scrollY > 0);
    });

    if (hamburger) {
      hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('hamburger-active');
        if (navMenu) navMenu.classList.toggle('hidden');
      });
    }

    syncThemeIcon();
    initPageTransition();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSite);
  } else {
    initSite();
  }
})();
