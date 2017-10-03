let selector = '.back_to_top';

export default class BackToTop {

  constructor(element) {
    this._element = element;
    this._element.addEventListener('click', () => {
      window.scroll(0,0)
    })
  }

  static init() {
    let elements = document.querySelectorAll(selector)
    for (let index = 0, max = elements.length; index < max ; index++) {
      new this(elements[index]);
    }
  }
}

BackToTop.init()