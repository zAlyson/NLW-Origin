function onScroll() {
  // check if scrollY is greater than 0 (if user has scrolled)
  if (window.scrollY > 0) {
    // if yes, add class to header
    document.getElementById('navigation').classList.add('scrolled');
  } else {
    // if not, remove class from header
    document.getElementById('navigation').classList.remove('scrolled');
  }
}

function openExtendedMenu() {
  document.getElementsByTagName('body')[0].classList.add('menu-expanded');
}

function closeExtendedMenu() {
  document.getElementsByTagName('body')[0].classList.remove('menu-expanded');
}
