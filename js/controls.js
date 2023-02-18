export function Controls({
  playButton,
  pauseButton,
  stopButton,
  setButton,
}) {

  function play() {
    playButton.classList.add('hide')
    pauseButton.classList.remove('hide')
    setButton.classList.add('hide')
    stopButton.classList.remove('hide')
    
  }

  function pause() {
    pauseButton.classList.add('hide')
    playButton.classList.remove('hide')
    
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes) {
      return false
    }

    return newMinutes
  }
  /*
     function volumeOn(){
      volumeOn.classList.add('hide')
      volumeOff.classList.remove('hide')
     }

     function volumeOff(){
      volumeOff.classList.add('hide')
      volumeOn.classList.remove('hide')
     }
  */
  function reset() {
    playButton.classList.remove('hide')
    pauseButton.classList.add('hide')
    setButton.classList.remove('hide')
    stopButton.classList.add('hide')
  }


  return {
    reset,
    play,
    pause,
    getMinutes
  }
}