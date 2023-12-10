import React from 'react'
import NavBar from './NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';

export default function Header() {
  return (
    <>
    {/* 
      create route for links
      means if you click on link then where are you want to redirect the page.. 
    */}
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />}/>
        <Route path="/updateproduct" element={<UpdateProduct />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/forgotpassword" element={<ForgotPassword />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
        
    </>
  )
}
