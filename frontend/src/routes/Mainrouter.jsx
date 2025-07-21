import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Page/Home'
import Landing from '../Page/Landing'
const Mainrouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default Mainrouter