import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Maps from './pages/Maps'
import ConectUs from './pages/ConectUs'
import Branches from './pages/Branches'
import Login from './pages/Login'




function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/contactus" element={<  ConectUs />} />
          <Route path="/branches" element={<   Maps />} />
          <Route path="/login" element={<  Login  />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
