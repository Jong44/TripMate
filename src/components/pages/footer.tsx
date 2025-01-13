import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#000] px-8 py-10 pt-20 text-white'>
        <div className="flex gap-64">
            <div className="w-1/3 mr-10">
                <h2 className="text-2xl font-bold">TripMate</h2>
                <p className="mt-7">Your AI-Powered Travel Companion. Plan your journey effortlessly with personalized itineraries and local recommendations.</p>
            </div>
            <div className='flex-1 flex justify-between gap-10'>
            <div className="w-1/3">
                <h2 className='text-xl font-medium'>Explore</h2>
                <ul className='mt-7 flex flex-col gap-2'>
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Experiences</li>
                    <li>Stays</li>
                </ul>
            </div>
            <div className="w-1/3">
                <h2 className='text-xl font-medium'>Company</h2>
                <ul className='mt-7 flex flex-col gap-2'>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Blogs</li>
                    <li>Partnership</li>
                </ul>
            </div>
            <div className="w-1/3">
                <h2 className='text-xl font-medium'>Support</h2>
                <ul className='mt-7 flex flex-col gap-2'>
                    <li>Help Center</li>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
            </div>
        </div>
        <div className="mt-10 border-t border-gray-500 pt-4 flex justify-between">
            <p>&copy; 2025 TripMate</p>
            <div className="flex gap-4">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer