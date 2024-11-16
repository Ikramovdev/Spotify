import React, { useContext, useEffect, useState } from 'react'
import NavigateBtn from '../../components/NavigateBtn'
import SpotifyWebApi from 'spotify-web-api-node'
import { CLIENT_ID } from "../../hook/useEnv"
import { Context } from "../../context/Context"
import MusicList from '../../components/MusicList'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  const { accessToken ,setPlay ,setPlaying} = useContext(Context)

  const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID
  })

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])


  const [homeTopTracks, setHomeTopTracks] = useState([])
  useEffect(() => {
    if (accessToken) {
      spotifyApi.searchTracks("Drake").then(res => {
        setHomeTopTracks(res.body.tracks.items?.splice(0, 6).map(item => {
          const data = {
            id: item.id,
            trackName: item.name,
            trackingImg: item.album.images[0].url,
            artistName: item.artists[0].name,
            uri: item.uri
          }
          return data
        })); 
      })
    }
  }, [accessToken])

  function handlePlayMusic(item){
    setPlay(item.uri)
    setPlaying(true)
    navigate(`/music/${item.id}`)
  }
  return (
    <div className='login-bg h-auto'>
      <NavigateBtn />
      <div className='py-[30px] px-[41px]'>
        <h2 className={`font-bold text-[39px] text-white leading-[49.33px]`}>Good afternoon</h2>
        <ul className='flex items-center  justify-between flex-wrap space-y-[16px] pt-[29px]'>
          {homeTopTracks?.map(item => (
            <li key={item.id} onClick={() => handlePlayMusic(item)} className='flex gap-[16px] rounded-md overflow-hidden items-center bg-item w-[49%] cursor-pointer'>
              <img className='w-[82px] h-[82px]' src={item.trackingImg} alt="trackingImg" />
              <h3 className='font-bold text-[20px] text-white leading-[25px]'>{item.trackName}</h3>
            </li>
          ))}
        </ul>
      </div>
      <div className='space-y-[50px] pb-10 '>
        <MusicList API={`Jahongir Otajonov`} title={`Jahongir Otajonov`} />
        <MusicList API={`Botir Qodirov`} title={`Botir Qodirov`} />
        <MusicList API={`Konsta`} title={`Konsta`} />
        <MusicList API={`Lola`} title={`Lola`} />
      </div>
    </div>
  )
}

export default Home