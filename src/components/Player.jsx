import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = ({currentSong,isPlaying,setIsPlaying,handleNext,handlePrevious}) => {
  return (
    <div  className='player container p-4 shadow border border-danger position-fixed'>
      <h4>{currentSong?.title || 'No song playing'}</h4>
      <AudioPlayer
      className='audio-player'
      autoPlay
      src={currentSong?.src || ''}
      onPlay={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
      onEnded={handleNext}
      onClickNext={handleNext}
      onClickPrevious={handlePrevious}
      showSkipControls={true}
        // other props here
      />
    </div>
  )
}

export default Player

