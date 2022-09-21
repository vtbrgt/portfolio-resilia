const menu = document.querySelector('[data-menu="btn"]');
const lista = document.querySelector('[data-menu="lista"]');

// Mostrar nav ao clicar no botão 'menu'
function displayNav() {
  if (event.type === 'touchstart') event.preventDefault();
  lista.classList.toggle('active');
}

// Esconder a navegação pelo menu caso a tela fique maior que 769px
function hideNav() {
  if (window.outerWidth >= 769) {
    lista.classList.remove('active');
  }
}

menu.addEventListener('click', displayNav);
menu.addEventListener('touchstart', displayNav);
window.addEventListener('resize', hideNav);
