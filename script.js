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
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

window.sr = ScrollReveal({ reset: true });

sr.reveal('#home .image, #home .text', {
  duration: 600,
})
sr.reveal('#services header, #services .card', {
  duration: 600,
})
sr.reveal('#benefits header, #benefits .card', {
  duration: 600,
})
sr.reveal('#app .image, #app .text', {
  duration: 600,
})
sr.reveal('#testimonials header, #testimonials .testimonials', {
  duration: 600,
})
sr.reveal('#contact .text, #contact .links', {
  duration: 600,
})
sr.reveal('#footer .brand, #footer .social', {
  duration: 600,
})

const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
  window.scrollY >= navHeight ? header.classList.add('scroll') : header.classList.remove('scroll')
}

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  window.addEventListener('scroll', function () {
    window.scrollY >= 100 ? backToTopButton.classList.add('show') : backToTopButton.classList.remove('show')
  })
}

const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const limit = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const limitStart = limit >= sectionTop
    const limitEnd = limit <= sectionTop + sectionHeight

    if (limitStart && limitEnd) {
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')
    }
    else {
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
    }
  }

}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
})