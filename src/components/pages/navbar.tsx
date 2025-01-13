import React from 'react'
import LanguageToogle from '../action/language_toggle'

const Navbar = () => {
  return (
    <nav className='py-6 px-8 text-white bg-transparent relative z-30'>
        <div className="flex items-center justify-between flex-wrap">
          <h1 className='font-semibold text-2xl'>TripMate</h1>
          <LanguageToogle />
        </div>
        <hr className='h-[2px] border-white my-5' />
    </nav>
  )
}

export default Navbar