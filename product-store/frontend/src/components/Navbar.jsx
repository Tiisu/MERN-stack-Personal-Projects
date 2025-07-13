import React from 'react'
import { PlusIcon, SunIcon } from 'lucide-react'
import { Link, Links } from 'react-router-dom'
import ThemeSwitcher from './ThemeSwitcher'

function Navbar() {
  return (
    // creating a navbar component with logo and create icon using lucide icons and a theme change button
    <div className='flex justify-between items-center p-4 bg-gray-800 text-white mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
      <Link to="/">
            <div className='text-xl font-bold'>Product Store</div>
      </Link>
      
      <div className='flex items-center space-x-4'>
      <Link to="/create-product">
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          <PlusIcon className='inline-block mr-2' />
        </button>
      

      </Link>
        <button className='bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded'>
          <ThemeSwitcher />

        </button>
      </div>
    </div>
  )
}

export default Navbar