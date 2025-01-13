import React from 'react'

const SearchDestination = () => {
  return (
    <div className='py-4 px-5 rounded-full flex items-center justify-between gap-24 backdrop-blur-sm bg-white opacity-80 glassed'>
        <input type='text' placeholder='Search destination' className='bg-transparent outline-none w-full' />
        <p className='font-medium'>Search</p>
    </div>
  )
}

export default SearchDestination