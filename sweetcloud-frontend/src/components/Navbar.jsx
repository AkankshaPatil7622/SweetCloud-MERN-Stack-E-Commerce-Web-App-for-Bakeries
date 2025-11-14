import React from 'react'
import '../style/Home.css'
import logo from '../assets/images/cakelogo.png'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
   <header id='navbar'>
     <nav className="navbar navbar-expand-lg navbar-dark text-white" style={{backgroundColor:"#d81159"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} alt="logo" id='logo'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link " aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/viewcakes" className="nav-link" >About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Flavour
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Strawberry</a></li>
            <li><a className="dropdown-item" href="#">Black forest</a></li>
            <li><a className="dropdown-item" href="#">Butterscotch</a></li>
            <li><a className="dropdown-item" href="#">Pine apple</a></li>
          </ul>
        </li>
      
      </ul>
     
      <div className='d-flex justify-content-around p-1 '>
        <Link className='nav-link'>Login</Link>
        <div id='profile' style={{height:30,width:30, borderRadius:'50%',backgroundColor:'white'}} className='ms-3'></div>
      </div>
    </div>
  </div>
</nav>
   </header>
    </>
  )
}

export default Navbar
