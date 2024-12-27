import {useState} from 'react'
import Header from './Header'
import Albums from './Albums'
import Player from './Player'
import { albums } from '../data/songsData'

const MusicApp = ({onHandleDark,mode}) => {
    
  // usestate to handle the current song & playing the song
  let [currentSongIndex,setCurrentSongIndex]=useState(0);
  let [currentImgIndex,setCurrentImgIndex]=useState(0);
  
  let [isPlaying,setIsPlaying]=useState(false)

  let currentImg=albums[currentImgIndex];
  let currentSong=currentImg.songs[currentSongIndex];

  // Handle next song
  function handleNext(){
    if(currentSongIndex<currentImg.songs.length - 1){
      setCurrentSongIndex(currentSongIndex + 1);
    }else if(currentImgIndex<albums.length - 1){
      setCurrentImgIndex(currentImgIndex + 1);
      setCurrentSongIndex(0);
    }else{
      setCurrentImgIndex(0);
      setCurrentSongIndex(0);
    }
    setIsPlaying(true);
  }

  // Handle previous song
  function handlePrevious(){
    if(currentSongIndex>0){
      setCurrentSongIndex(currentSongIndex-1);
    }else if(currentImgIndex>0){
      const previousImg=albums[currentImgIndex-1];
      setCurrentImgIndex(currentImgIndex-1);
      setCurrentSongIndex(previousImg.songs.length - 1);
    }else{
      console.log('Reached the beginning of the album list.')
    }
    setIsPlaying(true);
  }

  return (
    <div className='container mx-auto'>
      {/* Header-section start */}
      <Header onHandleDark={onHandleDark} mode={mode}/>
      {/* Header-section end */}
      {/* Albums start */}
      <Albums 
      setCurrentSongIndex={setCurrentSongIndex} 
      setCurrentImgIndex={setCurrentImgIndex}
      setIsPlaying={setIsPlaying} 
      currentImg={currentSong.image} 
      />
      {/* Albums end */}
      {/* Player start */}
      <Player 
      currentSong={currentSong}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      handleNext={handleNext}
      handlePrevious={handlePrevious}
      />
      {/* Player end */}
    </div>
  )
}

export default MusicApp
