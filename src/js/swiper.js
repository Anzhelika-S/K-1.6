export const mobile = window.matchMedia(
  '(min-width:320px) and (max-width: 767px)'
)
export const tablet = window.matchMedia('(min-width:768px)')
export const desktop = window.matchMedia('(min-width:1120px)')

export let init = false
export let swiper = Swiper

export function swiperMode() {
  if (mobile.matches) {
    if (!init) {
      init = true
      swiper = new Swiper('.swiper', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },

        grabCursor: true,

        slidesPerView: 'auto',
        spaceBetween: 16,

        centeredSlides: true,
        centeredSlidesBounds: true,
        slidesOffsetBefore: false
      })
    }
  } else if (tablet.matches && init) {
    init = false
    // swiper.destroy()
  }
}

window.addEventListener('load', function () {
  swiperMode()
})

window.addEventListener('resize', function () {
  swiperMode()
})
