import React from 'react'
import { PlusIcon, SunIcon } from 'lucide-react'

function Navbar() {
  return (
    // creating a navbar component with logo and create icon using lucide icons and a theme change button
    <div className='flex justify-between items-center p-4 bg-gray-800 text-white'>
      <div className='text-xl font-bold'>Product Store</div>
      <div className='flex items-center space-x-4'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          <PlusIcon className='inline-block mr-2' />
        </button>
        <button className='bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded'>
          <SunIcon className='inline-block mr-2' />
        </button>
      </div>
    </div>
  )
}

export default Navbar