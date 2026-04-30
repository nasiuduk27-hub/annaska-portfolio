const container = document.getElementById('hero-image-container');
const photo = document.getElementById('hero-photo');

if (container && photo) {
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        
        // Hitung seberapa jauh kursor dari tengah gambar
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Tentukan sensitivitas (angka lebih kecil = gerakan lebih sedikit/halus)
        const sensitivity = 0.1; 

        const moveX = x * sensitivity;
        const moveY = y * sensitivity;

        // Gerakkan foto mengikuti kursor
        photo.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    // Balikkan ke posisi semula saat kursor keluar
    container.addEventListener('mouseleave', () => {
        photo.style.transform = `translate(0px, 0px)`;
    });
}

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    this.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');


});

// navbar scroll effect
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

    if (href === current) {
      link.classList.add('nav-active');
    }
  });