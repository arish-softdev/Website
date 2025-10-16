// Sidebar and toggle button
const navlist = document.querySelector('.navlist');
const toggleBtn = document.getElementById('sidebar-toggle');
const dropdowns = document.querySelectorAll('.dropdown');

// Toggle sidebar open/close
toggleBtn.onclick = () => {
  navlist.classList.toggle('open');
  toggleBtn.classList.toggle('active');

  const icon = toggleBtn.querySelector('i');
  if (toggleBtn.classList.contains('active')) {
    icon.classList.replace('fa-bars', 'fa-xmark');
  } else {
    icon.classList.replace('fa-xmark', 'fa-bars');
  }
};

// Dropdowns inside sidebar
dropdowns.forEach(drop => {
  drop.addEventListener('click', () => {
    if (window.innerWidth <= 990) {
      drop.classList.toggle('active');
    }
  });
});

// Sticky header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
});

// ScrollReveal animations
const sr = ScrollReveal({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true,
});

sr.reveal('.hero-text', { delay: 200, origin: 'top' });
sr.reveal('.hero-img', { delay: 450, origin: 'top' });
sr.reveal('.icons', { delay: 500, origin: 'left' });
sr.reveal('.scroll-down', { delay: 500, origin: 'right' });
