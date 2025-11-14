import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Routes, Route, Router } from 'react-router-dom';
import Cakesbyflavour from '../components/Cakesbyflavour';
import UserHome from '../components/UserHome';
import CutomiseOrder from '../components/CustomiseOrder';
import CustomiseOrder from '../components/CustomiseOrder';

function User() {
  return (
   <>


   <Header />
   
   <Routes>
    <Route path='/' element={<UserHome />}></Route>
    <Route path='cake/:flavour' element={<Cakesbyflavour />}></Route>
    <Route path='/cake/:flavour/:id' element={<CustomiseOrder />}></Route>
   </Routes>


   
   </>
  )
}

export default User