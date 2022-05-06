window.addEventListener('scroll', onScroll);

function onScroll() {
  showNavOnScroll();
  shopBackToTopButtonOnScroll();
  activeMenuAtCurrentSection(home);
  activeMenuAtCurrentSection(services);
  activeMenuAtCurrentSection(about);
  activeMenuAtCurrentSection(contact);
}

function activeMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionBottom = sectionTop + section.offsetHeight;

  const sectionBoundaries =
    targetLine > sectionTop && targetLine < sectionBottom;

  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  if (sectionBoundaries) menuElement.classList.add('active');
  else menuElement.classList.remove('active');
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
