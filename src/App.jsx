import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Coponents/Navbar'
import Home from './pages/Home'
import Footer from './Coponents/Footer'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import CheckOut from './Coponents/CheckOut'
import OrderComponents from './pages/OrderComponents'
import FilterData from './pages/FilterData'
import ProductsDeatails from './pages/ProductsDeatails'
import About from './pages/About'
import Connect from './pages/Connect'

function App() {
  const [Order,setOrder]=useState(null)
  
  return (
    <div>
   <BrowserRouter>
      <Navbar/>
    <Routes>

    <Route path="/" element={<Home/>} ></Route>
    <Route path="/shop" element={<Shop/>} ></Route>
    <Route path="/About" element={<About/>} ></Route>
    <Route path="/connect" element={<Connect/>} ></Route>
    <Route path="/cart" element={<Cart/>} ></Route>
    <Route path="/checkout" element={<CheckOut setOrder={setOrder}/>} ></Route>
    <Route path="/order" element={<OrderComponents Order={Order}/>} ></Route>
    <Route path="/filterData" element={<FilterData Order={Order}/>} ></Route>
    <Route path="/product/:id" element={<ProductsDeatails Order={Order}/>} ></Route>
    </Routes>
   <Footer/>
   </BrowserRouter>

    </div>
  )
}

export default App