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

    window.addEventListener('scroll', function () {
      if (header) header.classList.toggle('navbar-fixed', window.scrollY > 0);
    });

    if (hamburger) {
      hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('hamburger-active');
        if (navMenu) navMenu.classList.toggle('hidden');
      });
    }

    var revealItems = document.querySelectorAll('main > section, #project article, #skills .grid > div, #home article, #home > div > div > div:first-child');

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('scroll-reveal-visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.16 });

      revealItems.forEach(function (item) {
        item.classList.add('scroll-reveal-ready');
        observer.observe(item);
      });
    } else {
      revealItems.forEach(function (item) {
        item.classList.add('scroll-reveal-visible');
      });
    }

    syncThemeIcon();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSite);
  } else {
    initSite();
  }
})();
