import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function NotFound() {

  const location = useLocation();
  
  return (
    <div className=' h-screen w-full flex flex-col justify-center items-center gap-10'>
      <h1 className=' text-6xl font-bold text-red-600'>404</h1>

      <h2 className=' text-3xl font-semibold text-red-600'>Page Not Found</h2>

      <p className=''>No page exists at: <span className=' text-blue-600'>{location.pathname}</span></p>

      <Link to="/">
        <button className=' py-2 px-4 border rounded-lg'>
          Go Home
        </button>
      </Link>
    </div>
  )
}

export default NotFound