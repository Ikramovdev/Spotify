import React from 'react'
import { BackIcon, SiteBarMoreIcon, SiteBarUserIcon, UserAddIcon } from '../assets/images/Icon'

const Sitebar = () => {
  return (
    <div className='w-[20%] h-[100vh] overflow-y-auto bg-[#000] px-[20px] py-[29px]' >
      <div className='flex items-center justify-between'>
        <h3 className='font-bold text-[20px] text-white leading-[25px]'>Friend Activity</h3>
        <div className='flex items-center space-x-[15px]'>
          <div className='hover:scale-[1.2] duration-300 cursor-pointer'><UserAddIcon/></div>
          <div className='hover:scale-[1.2] duration-300 cursor-pointer'><BackIcon /></div>
        </div>
      </div>
      <p className='font-medium text-[18px] text-white leading-[24px] mt-[39px] mb-[23px]'>Let friends and followers on Spotify see what you’re listening to.</p>
      <div className='space-y-[30px]'>
        <div className='flex items-center gap-[15px]'>
          <SiteBarUserIcon/>
          <SiteBarMoreIcon/>
        </div>
        <div className='flex items-center gap-[15px]'>
          <SiteBarUserIcon/>
          <SiteBarMoreIcon/>
        </div>
        <div className='flex items-center gap-[15px]'>
          <SiteBarUserIcon/>
          <SiteBarMoreIcon/>
        </div>
      </div>
      <p className='font-medium text-[18px] text-white leading-[25px] my-[23px]'>Go to Settings Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
      <button className='w-[233px] py-[20px] bg-white text-black text-center rounded-[40px] hover:scale-[1.1] duration-300'>SETTINGS</button>
    </div>
  )
}

export default Sitebar