const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show');
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show');
  })
}

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
});

window.sr = ScrollReveal({ reset: true });

sr.reveal('#home .image, #home .text', {
  duration: 700,
})
sr.reveal('#services header, #services .card', {
  duration: 700,
})
sr.reveal('#benefits header, #benefits .card', {
  duration: 700,
})
sr.reveal('#app .image, #app .text', {
  duration: 700,
})
sr.reveal('#testimonials header, #testimonials .testimonials', {
  duration: 700,
})
sr.reveal('#contact .text, #contact .links', {
  duration: 700,
})
sr.reveal('#footer .brand, #footer .social', {
  duration: 700,
})

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header');
  const navHeight = header.offsetHeight;
  window.scrollY >= navHeight ? header.classList.add('scroll') : header.classList.remove('scroll')
}

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  window.addEventListener('scroll', function () {
    window.scrollY >= 100 ? backToTopButton.classList.add('show') : backToTopButton.classList.remove('show')
  })
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll();
  backToTop();
})