const showMoreButtonBrands = document.querySelector('.services--brands .button')
const showMoreButtonDevices = document.querySelector(
  '.services--devices .button'
)

const showMoreBrands = document.querySelector(
  '.services--brands .button .button__text--show-more'
)
const showMoreDevices = document.querySelector(
  '.services--devices .button .button__text--show-more'
)

const buttonArrowsBrands = document.querySelector(
  '.services--brands .button .button__arrows'
)
const buttonArrowsDevices = document.querySelector(
  '.services--devices .button .button__arrows'
)

const servicesSwiperBrands = document.querySelector(
  '.services--brands .services__swiper'
)
const servicesSwiperDevices = document.querySelector(
  '.services--devices .services__swiper'
)

const servicesBrands = document.querySelector('.services--brands')
const servicesDevices = document.querySelector('.services--devices')

// const desktop = window.matchMedia('(min-width:1120px)')

function showSlides(e) {
  if (
    e.target.parentElement == servicesBrands ||
    e.target.parentElement == showMoreButtonBrands
  ) {
    servicesSwiperBrands.classList.toggle('services__swiper--show')

    if (showMoreBrands.textContent === 'Показать еще') {
      showMoreBrands.textContent = 'Скрыть'
    } else {
      showMoreBrands.textContent = 'Показать еще'
    }

    buttonArrowsBrands.classList.toggle('button__arrows--show')
  }

  if (
    e.target.parentElement == servicesDevices ||
    e.target.parentElement == showMoreButtonDevices
  ) {
    servicesSwiperDevices.classList.toggle('services__swiper--show')

    if (showMoreDevices.textContent === 'Показать еще') {
      showMoreDevices.textContent = 'Скрыть'
    } else {
      showMoreDevices.textContent = 'Показать еще'
    }

    buttonArrowsDevices.classList.toggle('button__arrows--show')
  }
}

showMoreButtonBrands.addEventListener('click', showSlides)

showMoreButtonDevices.addEventListener('click', showSlides)
