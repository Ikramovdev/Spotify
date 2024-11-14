import React from 'react'
import { CLIENT_ID } from "../../hook/useEnv"
const Login = () => {
    const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http://localhost:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played`
    function handleAnimateBtn(e){
        e.preventDefault();
        e.target.classList.add('animateBtn');
        setTimeout(() => {
            e.target.classList.remove('animateBtn');
            location = AUTH_URL
        }, 600);
    }
  return (
    <div className='bg-login w-full h-[100vh] flex items-center justify-center'>
        <a onClick={handleAnimateBtn} className='login-btn font-semibold w-[200px] p-5 rounded-md text-white text-center hover:scale-[1.1] duration-300 relative border-none bg-[#22c55e] text-[18px]'>Login to Spotify</a>
    </div>
  )
}

export default Login