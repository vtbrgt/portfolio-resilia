const nav = document.querySelector('[data-nav]');

// Adicionar classe 'sticky' quando a nav atingir o topo da tela
function stickyNavBar() {
  if (window.pageYOffset >= nav.offsetTop) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

stickyNavBar();
