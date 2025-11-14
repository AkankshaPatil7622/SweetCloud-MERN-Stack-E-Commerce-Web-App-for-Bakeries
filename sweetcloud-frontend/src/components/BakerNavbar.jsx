import React, { useState } from 'react'
import '../style/Home.css'
import logo from '../assets/images/cakelogo.png'
import { Link, useNavigate } from 'react-router-dom'
function BakerNavbar() {

  const navigate = useNavigate();

  return (
    <>
   <header id='navbar'>
     <nav className="navbar navbar-expand-lg navbar-dark text-light " style={{backgroundColor:"#d81159"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} alt="logo" id='logo'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/baker" className="nav-link " aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/baker/viewcakes" className="nav-link" >View Cakes</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link " to="/baker/addcake" >Add cake</Link>
        </li>


         <li className="nav-item">
          <Link className="nav-link " to="/baker/dashboard" >Dashboard</Link>
        </li>

         <li className="nav-item">
          <Link className="nav-link " to="/baker/bakerlogin" >Login</Link>
        </li>


      </ul>
     

    </div>
  </div>
</nav>
   </header>
    </>
  )
}

export default BakerNavbar
