import React from 'react'
import { FaPlus } from 'react-icons/fa'

function FloatingBtn({onClick}) {
  return (
    <button
      onClick={onClick}
      className=' h-12 py-2 px-4 fixed bottom-16 right-6 flex items-center gap-2 rounded-lg bg-linear-to-b from-blue-400 to-blue-600 text-white shadow-lg z-10 active:scale-[0.96]'
    >
        <FaPlus/>
        Add Book
    </button>
  )
}

export default FloatingBtn