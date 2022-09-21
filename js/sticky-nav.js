const nav = document.querySelector('[data-nav]');

function stickyNavBar() {
  if (window.pageYOffset >= nav.offsetTop) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

stickyNavBar();
