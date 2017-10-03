require('promis')
var FontFaceObserver = require('fontfaceobserver')

var font200 = new FontFaceObserver('Roboto', {
  weight: 200
})

var font400 = new FontFaceObserver('Roboto', {
  weight: 400
})

var font600 = new FontFaceObserver('Roboto', {
  weight: 600
})

Promise.all([
  font200.load(),
  font400.load(),
  font600.load()
]).then(function () {
  document.cookie = 'fonts-loaded=1'
  document.documentElement.className += ' body--floaded'
})

var back_to_top = document.querySelector('.back_to_top');
var below = false;

var initOnScroll = function () {
  let posY = window.pageYOffset || document.documentElement.scrollTop
  if (!below) {
    if (posY > 350) {
      back_to_top.classList.remove('uk-hidden')
      below = true
    }
  } else {
    if (posY < 350) {
      back_to_top.classList.add('uk-hidden')
      below = false
    }
  }
}

window.addEventListener('scroll', initOnScroll)