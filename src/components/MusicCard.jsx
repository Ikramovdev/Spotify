import React from 'react'

const MusicCard = () => {
  return (
    <div className='w-[224px] p-5 rounded-md music-card-item'>
        <img className='w-[100%] h-[182px] mb-[25px]' src={item.albumImg} alt="albumImg" />
        <h2 className='font-bold text-[20px] text-white leading-[25px] mb-4'>{item.albumsName}</h2>
        <p className='font-medium text-[16px] text-[#B3B3B3]'>{item.albumArtistName}</p>
    </div>
  )
}

export default MusicCard