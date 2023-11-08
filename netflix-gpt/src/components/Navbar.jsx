import React from 'react'
import logo from '../assets/Netflix_Logo_PMS.png'
const Navbar = () => {
  return (
  <div className='absolute px-8 py-2 z-10 bg-gradient-to-b from-black'>
      <img className='w-56 mx-20 ' src={logo} alt="" />

  </div>
  )
}

export default Navbar