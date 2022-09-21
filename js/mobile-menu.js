const menu = document.querySelector('[data-menu="btn"]');
const lista = document.querySelector('[data-menu="lista"]');

function displayNav() {
  if (event.type === 'touchstart') event.preventDefault();
  lista.classList.toggle('active');
}

function hideNav() {
  if (window.outerWidth >= 769) {
    lista.classList.remove('active');
  }
}

menu.addEventListener('click', displayNav);
menu.addEventListener('touchstart', displayNav);
window.addEventListener('resize', hideNav);
