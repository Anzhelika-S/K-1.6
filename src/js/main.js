const mainButton = document.querySelector('.main__read-more')
const mainButtonText = document.querySelector('.main__button--read-more')
const descriptionText = document.querySelector('.description__text')
const mainButtonImg = document.querySelector('.main__button--img')

let isExpanded = false

function readMore() {
  descriptionText.classList.toggle('description__text--show')
  mainButtonImg.classList.toggle('main__button--img--close')

  isExpanded = !isExpanded

  if (isExpanded) {
    mainButtonText.textContent = 'Скрыть'
  } else {
    mainButtonText.textContent = 'Читать далее'
  }
}

mainButton.addEventListener('click', readMore)
