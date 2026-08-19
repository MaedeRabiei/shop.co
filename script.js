const swiper = new Swiper(".brandSwiper", {
  loop: true,
  loopedSlides: 14,           // به تعداد کل اسلایدهای واقعیت
  freeMode: {
    enabled: true,
    momentum: false,
  },
  allowTouchMove: false,
  speed: 6000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});