import React from 'react'

function TopMenu() {
  return (
    <div className="sticky top-0 p-6 py-4 hidden md:flex justify-end items-center bg-white border-b border-gray-200">
        <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center p-4 w-10 h-10 shadow-inner-sm text-sm text-white font-medium bg-yellow-800 rounded-full">MK</div>
            <span className="text-gray-500 text-sm font-medium tracking-wide">Lordina Livingstin</span>
        </div>
    </div>
  )
}

export default TopMenu