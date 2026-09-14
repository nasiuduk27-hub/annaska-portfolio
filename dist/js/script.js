const container = document.getElementById('hero-image-container');
const photo = document.getElementById('hero-photo');

if (container && photo) {
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const sensitivity = 0.1; 

        const moveX = x * sensitivity;
        const moveY = y * sensitivity;

        photo.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    container.addEventListener('mouseleave', () => {
        photo.style.transform = `translate(0px, 0px)`;
    });
}

function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
    const isDark = theme === 'dark';
    const toggleButton = document.getElementById('theme-toggle');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');

    document.documentElement.classList.toggle('dark', isDark);

    if (toggleButton) {
        toggleButton.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }

    if (lightIcon && darkIcon) {
        lightIcon.classList.toggle('hidden', !isDark);
        darkIcon.classList.toggle('hidden', isDark);
    }
}

function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    applyTheme(getPreferredTheme());
    if (!themeToggle) return;

    themeToggle.addEventListener('click', () => {
        const nextTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
        localStorage.setItem('theme', nextTheme);
        applyTheme(nextTheme);
    });
}

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => observer.observe(reveal));
}

function handlePageTransitions() {
    const links = document.querySelectorAll('a[href$=".html"], a[href$="/"]');
    const main = document.querySelector('main');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const url = new URL(href, window.location.origin);
            
            if (url.pathname === window.location.pathname && url.search === window.location.search) {
                if (url.hash) return;
                e.preventDefault();
                return;
            }

            e.preventDefault();
            main.classList.add('page-exit');
            
            setTimeout(() => { window.location.href = href; }, 500);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    reveal();
    handlePageTransitions();
    initThemeToggle();

    const main = document.querySelector('main');
    if (main) {
        main.classList.remove('page-exit');
        main.classList.add('page-transition');
    }
});

// Lepas sisa animasi keluar saat kembali via tombol back (bfcache restore tidak memicu DOMContentLoaded)
window.addEventListener('pageshow', () => {
    const main = document.querySelector('main');
    if (main) main.classList.remove('page-exit');
});

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
        this.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
    });
}

window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

 const links = document.querySelectorAll('.nav-link, .nav-icon');
   const current = window.location.pathname.split("/").pop();

   links.forEach(link => {
     const href = link.getAttribute('href');
     if (href === current) link.classList.add('nav-active');
   });