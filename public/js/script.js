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

    syncThemeIcon();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSite);
  } else {
    initSite();
  }
})();
