import React from 'react'
import { albums } from '../data/songsData'

const Albums = ({setCurrentSongIndex,setIsPlaying,currentImg,setCurrentImgIndex}) => {
  return (
    <div className='albums my-3 container shadow border border-danger p-4 position-fixed'>
        {/* row-1 */}
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="card">
                    <img src={currentImg} className='banner-music-img' alt="" />
                </div>
            </div>
        </div>

        {/* row-2 with 4 columns */}
        <div className='row my-2'>
            {
                albums.map((album,index)=>(
                    <div className='col-12 col-sm-12 col-md-3 col-lg-3' key={album.id}>
                        <div className="card shadow album">
                            <img src={album.image} 
                            alt={album.name}
                            onClick={()=>{
                                setCurrentImgIndex(index)
                                setCurrentSongIndex(0)
                                setIsPlaying(true)
                            }} className='album-image'/>
                        </div>
                    </div>
                ))
            }
        </div>    
                
    </div>
  )
}

export default Albums

