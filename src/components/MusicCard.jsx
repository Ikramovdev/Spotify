import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'

const MusicCard = ({item}) => {
  const navigate = useNavigate()
  const {setPlay,setPlaying} = useContext(Context)
  function handlePlayMusic(){
    setPlay(item.uri)
    setPlaying(true)
    navigate(`/music/${item.id}`)
  }
  return (
    <div onClick={handlePlayMusic} className='cursor-pointer p-5 rounded-md music-card-item text-center hover:scale-[1.1] duration-300'>
        <img className='w-[100%] h-[182px] mb-[25px]' src={item.albumImg} alt="albumImg" />
        <h2 className='font-bold text-[20px] text-white leading-[25px] mb-4'>{item.albumsName}</h2>
        <p className='font-medium text-[16px] text-[#B3B3B3]'>{item.albumArtistName}</p>
    </div>
  )
}

export default MusicCard