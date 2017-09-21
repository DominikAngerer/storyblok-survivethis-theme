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

var initialized = false
var initOnScroll = function () {
  if (!initialized) {
    let posY = window.pageYOffset || document.documentElement.scrollTop

    if (posY > 350) {
      initialized = true

      // init twitch stream
      var twitch = document.querySelector('#sidebar_twitch');
      twitch.src = twitch.getAttribute('data-src');

    }
  }
}

window.addEventListener('scroll', initOnScroll)

