import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './modules/homePage/Home'

function Router() {
  return (
    <Routes>
    <Route path='/home' element={<Home/>} />
   

  </Routes>
  )
}

export default Router
