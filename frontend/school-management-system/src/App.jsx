import { useState } from 'react'
import AdminLogin from '../src/AdminLogin';
import React from 'react'
import StudentLogin from '../src/StudentLogin'
import Home from './Home';
import StaffLogin from '../src/StaffLogin'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {

  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      <Route path='/studentlogin' element={<StudentLogin/>}/>
      <Route path='/stafflogin' element={<StaffLogin/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
