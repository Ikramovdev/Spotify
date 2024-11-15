import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AddIcon, HomeActiveIcon, HomeInActiveIcon, LibraryIcon, LikeIcon, SearchIcon } from '../assets/images/Icon'
import { PATH } from '../hook/usePath'

const Navbar = () => {
  const {pathname} = useLocation()
  return (
    <div className='w-[20%] h-[100vh] bg-[#000]'>
      <div className='pt-[70px] pl-[30px] space-y-5 pb-[21px]'>
        <NavLink to={PATH.home} className={`flex items-center space-x-5`}>
          {pathname == "/" ? <HomeActiveIcon/>:<HomeInActiveIcon />}
          <strong className='font-bold text-[18px] text-white leading-[22.77px]'>Home</strong>
        </NavLink>
        <NavLink to={PATH.search} className={`flex items-center space-x-5`}>
          <SearchIcon />
          <strong className='font-bold text-[18px] text-white leading-[22.77px]'>Search</strong>
        </NavLink>
        <NavLink to={`#`} className={`flex items-center space-x-5`}>
          <LibraryIcon />
          <strong className='font-bold text-[18px] text-white leading-[22.77px] opacity-[40%]'>Your Library</strong>
        </NavLink>
        <NavLink to={`#`} className={`flex items-center space-x-5 pt-[29px]`}>
          <AddIcon />
          <strong className='font-bold text-[18px] text-white leading-[22.77px] opacity-[40%]'>Create Playlist</strong>
        </NavLink>
        <NavLink to={PATH.like} className={`flex items-center space-x-5`}>
          <LikeIcon />
          <strong className='font-bold text-[18px] text-white leading-[22.77px]'>Liked Songs</strong>
        </NavLink>
      </div>
      <span className='w-[250px] h-[1px] bg-[#282828] block mx-auto'></span>
    </div>
  )
}

export default Navbar