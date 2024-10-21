import React from 'react'
import Logo from '../assets/Movie-logo.jpg'

const navbar = () => {
  return (
    <div className='flex border items-center space-x-8 font-bold pl-3 py-3'>
      <img className='w-[50px]' src={Logo} alt="" />
      <a href="/" className='text-blue-400 text-2xl'>Home</a>
      <a href="/watchlist" className='text-blue-400 text-2xl'>Watchlist</a>
    </div>
  )
}

export default navbar
