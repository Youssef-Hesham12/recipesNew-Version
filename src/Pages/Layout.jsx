import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../Components/Sidebar'

export default function Layout() {
  return (
   <>

   <Sidebar/>


   <div className='sm:ml-72 my-5'>
    <Outlet/>

   </div>
   
   
   </>
  )
}
