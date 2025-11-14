import React from 'react'

import cr1 from '../assets/images/cr1.jpg';
import cr2 from '../assets/images/cr2.jpg';
import cr3 from '../assets/images/cr3.jpg';
import cr4 from '../assets/images/cr4.jpg';
import cr5 from '../assets/images/cr5.jpg';

import '../style/Home.css'
function Carousel() {
  return (
    <div id='carousel container-fluid p-0'>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={cr1} className="d-block w-100 carouselImg" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={cr2} className="d-block w-100 carouselImg" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={cr3} alt="..." className='d-block w-100 carouselImg'/>
    </div>
    <div className="carousel-item">
      <img src={cr4} className="d-block w-100 carouselImg" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={cr5} className="d-block w-100 carouselImg" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel
