import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBarF from './SideBarF'

const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row '>
      <SideBarF /> 
      <Outlet />
    </div>
  )
}

export default DashboardLayout