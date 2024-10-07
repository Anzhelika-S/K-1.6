const buttonCall = document.querySelector('.footer__button .button__call')
const buttonChat = document.querySelector('.footer__button .button__chat')
const headerCall = document.querySelector('.header__call .button__call')
const headerChat = document.querySelector('.header__chat .button__chat')

const modalShade = document.querySelector('.modal__shade')

const modalFeedback = document.querySelector('.modal-feedback')
const modalCall = document.querySelector('.modal-call')
const modalCross = document.querySelectorAll('.modal__button .button__cross')

function modalShow(e) {
  if (e.target === buttonChat || e.target === headerChat) {
    modalFeedback.classList.add('modal-feedback--show')
  }

  if (e.target === buttonCall || e.target === headerCall) {
    modalCall.classList.add('modal-call--show')
  }

  modalShade.classList.add('modal__shade--show')
}

buttonCall.addEventListener('click', modalShow)
buttonChat.addEventListener('click', modalShow)
headerCall.addEventListener('click', modalShow)
headerChat.addEventListener('click', modalShow)

function modalHide() {
  modalFeedback.classList.remove('modal-feedback--show')
  modalCall.classList.remove('modal-call--show')
  modalShade.classList.remove('modal__shade--show')
}

modalCross.forEach((e) => {
  e.addEventListener('click', modalHide)
})
modalShade.addEventListener('click', modalHide)
