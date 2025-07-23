import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Page/Home'
import Product from '../Page/Product'
import Login from '../Page/Login'
import Register from '../Page/Register'
const Mainrouter = () => {
  return (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default Mainrouter