import {
  Controls
} from './controls.js'

import {
  Timer
} from './timer.js'

import Sound from './sounds.js'

import Events from './events.js'

import {
  playButton,pauseButton,stopButton,setButton,minutesDisplay,secondsDisplay
} from './elements.js'


const sound = Sound()

const controls = Controls({
  playButton,
  pauseButton,
  setButton,
  stopButton,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

Events({
  controls,
  timer,
  sound
})

















/*
playButton.addEventListener('click', function () {
  controls.play()
  timer.countdown()
  sound.pressButton()
})

pauseButton.addEventListener('click', function () {
  controls.pause()
  timer.hold()
  sound.pressButton()
})

stopButton.addEventListener('click', function () {
  controls.reset()
  timer.reset()
  sound.pressButton()
})

volumeOn.addEventListener('click', function () {
  volumeOn.classList.add('hide')
  volumeOff.classList.remove('hide')
  sound.bgAudio.play()
})

volumeOff.addEventListener('click', function () {
  volumeOff.classList.add('hide')
  volumeOn.classList.remove('hide')
  sound.bgAudio.pause()
})

setButton.addEventListener('click', function () {
  let newMinutes = controls.getMinutes()

  if (!newMinutes) {
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)

})*/