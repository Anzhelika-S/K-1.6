const headerButton = document.querySelector('.header__burger')
const sideMenu = document.querySelector('.side-menu')
const sideMenuBurger = document.querySelector('.menu-header__button')
const main = document.querySelector('.main')
const menuShade = document.querySelector('.side-menu__shade')

function showMenu() {
  sideMenu.classList.add('side-menu--show')
  main.classList.add('main--fixed')

  menuShade.classList.add('side-menu__shade--show')
}

function hideMenu() {
  sideMenu.classList.remove('side-menu--show')
  main.classList.remove('main--fixed')

  menuShade.classList.remove('side-menu__shade--show')
}

headerButton.addEventListener('click', showMenu)
sideMenuBurger.addEventListener('click', hideMenu)
menuShade.addEventListener('click', hideMenu)
