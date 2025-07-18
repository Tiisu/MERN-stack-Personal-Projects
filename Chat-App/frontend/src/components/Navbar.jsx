import { MessageCircleCodeIcon, Settings } from 'lucide-react'
import React from 'react'

function Navbar() {
  return (
    <div className='border p-6 w-full'>
      <div className="border p-6 border-blue-500 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MessageCircleCodeIcon />
          <h2>Hack Chat</h2>
        </div>
        <div>
          <button className='btn btn-ghost btn-sm rounded-btn'>
            <Settings />
            Setting</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar