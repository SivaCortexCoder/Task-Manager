import React from 'react'
import { Link } from 'react-router-dom'
import {FaTasks} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div>
        <nav className=' bg-[#111827]/50 flex justify-between items-center p-5 border-b border-gray-500'>
            <div>
                <h1 className='text-white flex items-center gap-2 font-semibold text-sm md:text-lg lg:text-xl'><FaTasks/>Task Management App</h1>

            </div>
            <div className='text-white flex gap-5 items-center text-sm md:text-lg lg:text-xl '>   
               <Link to='/'>Home</Link>
                <h2>Task Overview</h2>

            </div>
        </nav>
    </div>
  )
}

export default Navbar