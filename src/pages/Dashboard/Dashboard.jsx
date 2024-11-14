import React from 'react'
import useAuth from '../../hook/useAuth'

const Dashboard = ({code}) => {
  const accesToken = useAuth(code)
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard