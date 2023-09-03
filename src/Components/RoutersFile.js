import React, { useState } from 'react'
import "../index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Store from './Store'

import DetailDescription from '../ProductCategories/DetailDescription'
import Electronics from '../ProductCategories/Electronics'
import Mobile from '../ProductCategories/Mobile'
import Laptop from '../ProductCategories/Laptop'
import Headphone from '../ProductCategories/Headphone'
import Watch from '../ProductCategories/Watch'
import Tab from '../ProductCategories/Tab'


import PageNotFound from './PageNotFound'

import UserProfile from './UserProfile'
import Cart from './Cart'
import { Login } from '../RegisterLogin/Login'
import Register from '../RegisterLogin/Register'


import Samsung from '../ProductSubCategories/Samsung'
import Mi from '../ProductSubCategories/Mi'

import HP from '../ProductSubCategories/HP'
import Dell from '../ProductSubCategories/Dell'
import Lenovo from '../ProductSubCategories/Lenovo'

import WiredHeadphones from '../ProductSubCategories/WiredHeadphones'
import Earphones from '../ProductSubCategories/Earphones'
import Bluetooth from '../ProductSubCategories/Bluetooth'

import NormalWatch from '../ProductSubCategories/NormalWatch'
import SmartWatch from '../ProductSubCategories/SmartWatch'

import SamsungTab from '../ProductSubCategories/SamsungTab'
import Lenovotab from '../ProductSubCategories/Lenovotab'
import Xiaomitab from '../ProductSubCategories/Xiaomitab'
import Realmetab from '../ProductSubCategories/Realmetab'

import BestSellerAll from '../BestSellers/BestSellerAll'
import BestSellerElectronics from '../BestSellers/BestSellerElectronics'
import BestSellerMobile from '../BestSellers/BestSellerMobile'
import BestSellers from '../BestSellers/BestSellers'
import BestSellerTab from '../BestSellers/BestSellerTab'
import BestSellerWatch from '../BestSellers/BestSellerWatch'



const RoutesFile = () => {
  const [cart, setCart] = useState([]);
  console.log(cart)
  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
    alert('Item Added to cart successfully !!')
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/userprofile' element={<UserProfile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart cart={cart} count={cart.length} />} />
          
          <Route path='/' element={<Home count={cart.length} />} />
          <Route path='/store' element={<Store addToCart={addToCart} count={cart.length} />} />
          <Route path='/electronics' element={<Electronics addToCart={addToCart} count={cart.length} />} />
          <Route path='/mobile' element={<Mobile addToCart={addToCart} count={cart.length} />} />
          <Route path='/laptop' element={<Laptop addToCart={addToCart} count={cart.length} />} />
          <Route path='/headphone' element={<Headphone addToCart={addToCart} count={cart.length} />} />
          <Route path='/watch' element={<Watch addToCart={addToCart} count={cart.length} />} />
          <Route path='/tab' element={<Tab addToCart={addToCart} count={cart.length} />} />
          
          <Route path='/electronics/mobile' element={<Mobile addToCart={addToCart} count={cart.length} />} />
          <Route path='/electronics/laptop' element={<Laptop addToCart={addToCart} count={cart.length} />} />
          <Route path='/electronics/headphones' element={<Headphone addToCart={addToCart} count={cart.length} />} />
          <Route path='/electronics/watch' element={<Watch addToCart={addToCart} count={cart.length} />} />
          <Route path='/electronics/tab' element={<Tab addToCart={addToCart} count={cart.length} />} />
          
          
          <Route path='/mobile/samsung' element={<Samsung addToCart={addToCart} count={cart.length} />} />
          <Route path='/mobile/mi' element={<Mi addToCart={addToCart} count={cart.length} />} />
         
          <Route path='/laptop/hp' element={<HP addToCart={addToCart} count={cart.length} />} />
          <Route path='/laptop/dell' element={<Dell addToCart={addToCart} count={cart.length} />} />
          <Route path='/laptop/lenovo' element={<Lenovo addToCart={addToCart} count={cart.length} />} />
          
          <Route path='/headphone/wiredheadphones' element={<WiredHeadphones addToCart={addToCart} count={cart.length} />} />
          <Route path='/headphone/earphones' element={<Earphones addToCart={addToCart} count={cart.length} />} />
          <Route path='/headphone/bluetooth' element={<Bluetooth addToCart={addToCart} count={cart.length} />} />
          
          <Route path='/watch/smartwatch' element={<SmartWatch addToCart={addToCart} count={cart.length} />} />
          <Route path='/watch/normalwatch' element={<NormalWatch addToCart={addToCart} count={cart.length} />} />
          
          <Route path='/tab/samsungtab' element={<SamsungTab addToCart={addToCart} count={cart.length} />} />
          <Route path='/tab/lenovotab' element={<Lenovotab addToCart={addToCart} count={cart.length} />} />
          <Route path='/tab/xiaomitab' element={<Xiaomitab addToCart={addToCart} count={cart.length} />} />
          <Route path='/tab/realmetab' element={<Realmetab addToCart={addToCart} count={cart.length} />} />
          
          <Route path='/all/bestsellers' element={<BestSellerAll addToCart={addToCart} count={cart.length} />} />
          <Route path='/electronics/bestsellers' element={<BestSellerElectronics addToCart={addToCart} count={cart.length} />} />
          <Route path='/bestsellers/bestsellers' element={<BestSellers addToCart={addToCart} count={cart.length} />} />
          <Route path='/mobile/bestsellers' element={<BestSellerMobile addToCart={addToCart} count={cart.length} />} />
          <Route path='/watch/bestsellers' element={<BestSellerWatch addToCart={addToCart} count={cart.length} />} />
          <Route path='/tab/bestsellers' element={<BestSellerTab addToCart={addToCart} count={cart.length} />} />
          <Route path="/detaildescription/:id" element={<DetailDescription addToCart={addToCart} count={cart.length} />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default RoutesFile