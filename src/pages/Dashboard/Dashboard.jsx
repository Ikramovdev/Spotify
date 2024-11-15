import React, { useContext } from 'react'
import useAuth from '../../hook/useAuth'
import { Context } from '../../context/Context'
import CustomRoutes from "../../routes/Index"
import Navbar from "../../components/Navbar"
import SiteBar from "../../components/Sitebar"

const Dashboard = ({ code }) => {
  const getCode = useAuth(code)
  const { accessToken } = useContext(Context)
  return (
    <div className='flex justify-between'>
      <Navbar/>
      <div className='w-[60%] h-auto overflow-y-auto'><CustomRoutes /></div>
      <SiteBar/>
    </div>
  )
}

export default Dashboard