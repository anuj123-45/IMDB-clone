import React from 'react'
import Logo from '../assets/Movie-logo.jpg'
import {Link} from 'react-router-dom'

const navbar = () => {
  return (
    <div className='flex border items-center space-x-8 font-bold pl-3 py-3'>
      <img className='w-[50px]' src={Logo} alt="" />
      <Link to='/' className='text-blue-400 text-2xl'>Home</Link>
      <Link to='/watchlist' className='text-blue-400 text-2xl'>Watchlist</Link>
    </div>
  )
}

export default navbar
