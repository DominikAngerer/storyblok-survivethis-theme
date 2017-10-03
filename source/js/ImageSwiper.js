import Swiper from 'swiper';

let selector = '.image_swiper';

export default class ImageSwiper {

  constructor(element) {
    this._element = element;
    this._next = element.querySelector('.image_swiper--next');
    this._prev = element.querySelector('.image_swiper--prev');
    this._swiper = new Swiper(element.querySelector('.swiper-container'), {
      spaceBetween: 0,
      slidesPerView: 1,
      loop: true,
      lazyLoading: true
    });

    this._next.addEventListener('click', () => {
      this._swiper.slideNext()
    })

    this._prev.addEventListener('click', () => {
      this._swiper.slidePrev()
    })
  }

  static init() {
    let elements = document.querySelectorAll(selector)
    for (let index = 0, max = elements.length; index < max ; index++) {
      new this(elements[index]);
    }
  }
}

ImageSwiper.init();