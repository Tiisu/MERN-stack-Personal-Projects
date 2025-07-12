import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from '@radix-ui/themes'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import { Toaster } from 'sonner'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        < Route path="/" element={<HomePage />} />
        < Route path="create-product" element={<CreatePage />} />
        
      </Routes>
    </>
  )
}

export default App
