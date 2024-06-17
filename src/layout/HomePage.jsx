import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'

const HomePage = () => {
    const [isOpen , setIsOpen] = useState(false)
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
  return (
    <section className='flex flex-row h-screen w-screen'>
        <section className=''>
            <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        </section>
        <section className='flex flex-col w-screen  overflow-auto '>
        <nav className=''>
            <NavBar toggleSidebar={toggleSidebar}/>
        </nav>
        <section> <Outlet/></section>
        </section>
    </section>
  )
}

export default HomePage