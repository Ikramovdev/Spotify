import React, { useContext } from 'react'
import useAuth from '../../hook/useAuth'
import { Context } from '../../context/Context'
import CustomRoutes from "../../routes/Index"
import Navbar from "../../components/Navbar"
import SiteBar from "../../components/Sitebar"
import SpotifyWebPlayer from 'react-spotify-web-playback'

const Dashboard = ({ code }) => {
  const getCode = useAuth(code)
  const { accessToken, setPlaying, play, playing } = useContext(Context)
  return (
    <div className='flex justify-between'>
      <Navbar />
      <div className='w-[60%] h-[100vh] overflow-y-auto'><CustomRoutes /></div>
      <SiteBar />
      <div className='absolute h-full bottom-0'>
        {accessToken && (
          <SpotifyWebPlayer
            token={accessToken}
            uris={play ? [play] : []}
            play={playing}
            callback={(e) => {
              setPlaying(false)
            }}
          />
        )}
      </div>
    </div>
  )
}

export default Dashboard