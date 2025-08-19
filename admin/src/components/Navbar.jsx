import React from 'react'
import {assets} from '../assets/assets.js'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between py-2 px-[4%]'>
      <Link to={'/'}>
      <img className='w-[max(10%,120px)]' src={assets.logo} alt="" />
      </Link>
      <button onClick={()=>setToken('')} className='text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full bg-gray-600 hover:bg-gray-700 transition duration-400 cursor-pointer text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
