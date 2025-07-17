import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import { Route, Routes,  } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Profile from './pages/Profile.jsx';
import Settings from './pages/Settings.jsx';
import SignInPage from './pages/SignInPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import useAuthStore from './hooks/useAuthhooks.js';

function App() {

  // const { authUser } = useAuthStore()
  // useEffect(() => { 
  //   checkAuth(),


  return (
    <> 
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </div>
    </>
  )
}

export default App
