window.addEventListener('scroll', onScroll);

function onScroll() {
  showNavOnScroll();
  shopBackToTopButtonOnScroll();
}

function showNavOnScroll() {
  if (scrollY > 0) {
    document.getElementById('navigation').classList.add('scrolled');
  } else {
    document.getElementById('navigation').classList.remove('scrolled');
  }
}

function shopBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    document.getElementById('backToTopButton').classList.add('show');
  } else {
    document.getElementById('backToTopButton').classList.remove('show');
  }
}

function openExtendedMenu() {
  document.getElementsByTagName('body')[0].classList.add('menu-expanded');
}

function closeExtendedMenu() {
  document.getElementsByTagName('body')[0].classList.remove('menu-expanded');
}

ScrollReveal({
  distance: '30px',
  origin: 'top',
  duration: 700,
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`);

onScroll();
