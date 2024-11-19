import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SpotifyWebApi from 'spotify-web-api-node';
import { CLIENT_ID } from '../../hook/useEnv';
import { Context } from '../../context/Context';
import NavigateBtn from '../../components/NavigateBtn';
import { ClockIcon, LikeIcon, SingleActiveLikeIcon, SingleLikeIcon, SingleMoreIcon, SinglePlayIcon, SingleSearchIcon, SingleSelectArrow, SingleUploadIcon } from '../../assets/images/Icon';

const Single = () => {
  const { id } = useParams()
  const { accessToken, setPlay, setPlaying } = useContext(Context)
  const [singleMusic, setSingleMusic] = useState({})
  const [artistMusic, setArtistMusic] = useState([])

  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID
  })

  // spotifyApi ga codeni  berish
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken, singleMusic])
   // spotifyApi ga codeni  berish

  // qoshiqni  muallifini malumotini olib kellish
  useEffect(() => {
    if (accessToken && id) {
      spotifyApi.getAlbum(id).then(res => {
        setSingleMusic(res.body)
      })
    }
  }, [accessToken, id])
  // qoshiqni  muallifini malumotini olib kellish

  // kelgan malumotni ozgaruvchiga tenglab qoyish
  useEffect(() => {
    if(accessToken && singleMusic.name){
      spotifyApi.searchTracks(singleMusic?.artists[0]?.name).then(res =>{
        setArtistMusic(res.body.tracks.items.map(item =>{
          const data = {
            id:item.id,
            img:item.album.images[0].url,
            name:item.name,
            artistName:item.artists[0].name,
            date:item.album.release_date,
            uri:item.uri
          }
          return data
        }))
      })
    }
  }, [accessToken,singleMusic])
    // kelgan malumotni ozgaruvchiga tenglab qoyish
     
    // qo'Shiqni play qilish va stop qlish
    function handlePlayMusic(uri){
      setPlay(uri)
      setPlaying(true)
    }
    // qo'Shiqni play qilish va stop qlish
  return (
    <div className='single-bg h-auto'>
      <NavigateBtn bg={`bg-[#DDF628]`}/>
      <div className='flex space-x-[32px] px-[41px] py-[26px] mb-[21px] singleArtistInfo'>
        {singleMusic?.images && (<img className='w-[287px] h-[287px]' src={singleMusic?.images[0]?.url} alt='SingleMusicImg'/>)}  
        <div>
          <p className='font-medium text-[16px] leading-[20px] text-white pb-[22px]'>{singleMusic.label}</p>
          <h2 className='font-black text-[60px] leading-[64px] text-white pb-[12px]'>{singleMusic.name}</h2>
          {singleMusic?.artists && (<p className='font-medium text-[20px] text-white leading-[25px] pb-[12px]'>{singleMusic?.artists[0].name}</p>)}
          <p className='font-medium text-[20px] text-white leading-[25px]'>{singleMusic.release_date}</p>
        </div>
      </div>
      <div className='flex px-[41px] items-center justify-between'>
          <div className='flex text-white items-center space-x-[25px]'>
            <button className='w-[72px] h-[72px] flex items-center justify-center bg-[#65D36E] rounded-full'><SinglePlayIcon/></button>
            <button><SingleLikeIcon/></button>
            <button><SingleUploadIcon/></button>
            <button><SingleMoreIcon/></button>
          </div>
          <div className='flex text-white items-center space-x-[45px] '>
            <button><SingleSearchIcon/></button>
            <div className='flex items-center space-x-[14px]'>
              <strong className='text-white'>CustomOrder</strong>
              <button className='hover:rotate-[180deg] duration-300'><SingleSelectArrow/></button>
            </div>
          </div>
      </div>
      <table className='w-full mt-10'>
        <thead>
          <tr>
            <th className='py-[14px] border-b-[3px] text-start border-gray-800 font-medium text-[16px] text-[#B3B3B3] leading-[20.24px] cursor-pointer pl-5'>#</th>
            <th className='text-start py-[14px] border-b-[3px] border-gray-800 font-medium text-[16px] text-[#B3B3B3] leading-[20.24px] cursor-pointer'>TITLE</th>
            <th className='text-start py-[14px] border-b-[3px] border-gray-800 font-medium text-[16px] text-[#B3B3B3] leading-[20.24px] cursor-pointer'>ALBUM</th>
            <th className='text-start py-[14px] border-b-[3px] border-gray-800 font-medium text-[16px] text-[#B3B3B3] leading-[20.24px] cursor-pointer'>DATE ADDED</th>
            <th className='text-end py-[14px] border-b-[3px] border-gray-800 font-medium text-[16px] text-[#B3B3B3] leading-[20.24px] cursor-pointer'><div className='flex items-center space-x-[3px]'>Time<ClockIcon/></div></th>
          </tr>
        </thead>
        <tbody>
          {artistMusic?.map((item,index) =>(
            <tr key={item.id}>
              <td className='font-medium text-[22px] text-[#B3B3B3] leading-[27px] py-[11px] cursor-pointer pl-5'>{index +1}</td>
              <td className='py-[11px] cursor-pointer'>
                <div className='flex items-center space-x-5'>
                    <img className='w-[52px] h-[52px]' src={item.img} alt="musicImg" width={52} height={52} />
                    <div>
                      <h3 className='font-medium text-[20px] text-[#65D36E] leading-[25px]'>{item.name}</h3>
                      <p className='font-medium text-[18px] text-[#B3B3B3] leading-[22px]'>{item.artistName}</p>
                    </div>
                </div>
              </td>
              <td className='font-medium text-[22px] text-[#B3B3B3] leading-[27px] py-[11px] cursor-pointer'>{item.name}</td>
              <td className='font-medium text-[22px] text-[#B3B3B3] leading-[27px] py-[11px] cursor-pointer'>{item.date}</td>
              <td className='py-[11px] cursor-pointer'>
                <div className='flex items-center space-x-[14px]'>
                  <SingleActiveLikeIcon/>
                  <span className='font-medium text-[20px] text-[#fff] leading-[25px]'>3:13</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Single