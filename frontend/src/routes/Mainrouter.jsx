import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Page/Home'
import Product from '../Page/Product'
import Login from '../Page/Login'
import Register from '../Page/Register'
import CreateProduct from '../Page/admin/CreateProduct'
import UpdateProduct from '../Page/admin/ProductDetails'
import ProductDetail from '../Page/admin/ProductDetails'
import { useSelector } from 'react-redux'
import UserProfile from '../Page/user/UserProfile'
import Cart from '../Page/Cart'
const Mainrouter = () => {


  const {users} = useSelector(state => state.userReducer);
  

  return (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/create-product" element={<CreateProduct />} />
        <Route path="/admin/user-profile" element={<UserProfile />} />
        <Route path="/admin/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default Mainrouter