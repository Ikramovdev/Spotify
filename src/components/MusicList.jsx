import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import SpotifyWebApi from 'spotify-web-api-node'
import { CLIENT_ID } from '../hook/useEnv'
import MusicCard from './MusicCard'

const MusicList = ({API,title}) => {
    const { accessToken } = useContext(Context)
    const spotifyApi = new SpotifyWebApi({
      clientId: CLIENT_ID
    })

    useEffect(() => {
      if (!accessToken) return;
      spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    const [albums,setAlbums] = useState()
    useEffect(()=>{
        spotifyApi.searchAlbums({API}).then(res => {
            setAlbums(res.body.albums.items.map(item => {
                const data = {
                    id:item.id,
                    albumsName :item.name,
                    albumArtistName :item.artists[0].name,
                    albumImg : item.images[0].url,
                    uri:item.uri
                }
            }))
        })
    },[accessToken])


  return (
    <div className='px-[40px]'>
        <div className='flex items-center justify-between'>
            <h2 className='font-bold text-[30px] text-white left-[37.95px]'>{title}</h2>
            <button className='font-bold text-[16px] text-[#ADADAD] hover:scale-[1.2] duration-300 left-[20px]'>SEE ALL</button>
        </div>
        <div className='flex justify-between overflow-y-auto gap-[25px ]'>
            {albums?.map(item => <MusicCard key={item.id}/>)}
        </div>
    </div>
  )
}

export default MusicList