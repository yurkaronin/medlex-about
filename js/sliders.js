/* Слайдер каталога */
let swiperContainer = document.querySelector(".swiper-container") || false
if (swiperContainer){
  if (swiperContainer.classList.contains("catalog-slider")) {
    var catalogSlider = new Swiper(".catalog-slider", {
      slidesPerView: "auto",
      spaceBetween: 10
    });
  }
}

/* Слайдер карточки товара */

var cardThumbs = new Swiper(".card-main__slider-thumbs", {
  spaceBetween: 16,
  slidesPerView: "auto",
  noSwiping: true,
  freeMode: false,
  slideThumbActiveClass: "card-thumb--active",
});
  var cardMain = new Swiper(".card-main__slider-main", {
    spaceBetween: 10,
    thumbs: {
      swiper: cardThumbs,
    },
  });




/* Рекомендуемые товары */

var recentSlider = new Swiper(".recent-slider", {
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: {
    nextEl: ".slider-btn--next",
    prevEl: ".slider-btn--prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    650: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },

    1330: {
      slidesPerView: 4,
    },
  },
});

/*  */

var sliderInfo = new Swiper(".slider-info", {
  slidesPerView: "auto"
});
if (swiperContainer){
  if (document.querySelector(".swiper-container").classList.contains("history__slider")) {
    var autoplay = 7000;
    var historySlider = new Swiper(".history__slider", {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: ".slider-btn--next",
        prevEl: ".slider-btn--prev",
      },
      pagination: {
        el: '.swiper-pagination',
        // dynamicBullets: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="20" height="20" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="12" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="6"></circle></svg></span>';
        },
      },
      effect: 'fade',
      fadeEffect: {
          crossFade: true
      },
      speed: 750,
      autoplay: {
          delay: 4000,
          disableOnInteraction: false,
      },
    });
  }
}