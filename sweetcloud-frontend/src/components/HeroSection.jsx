import React from 'react'
import mf from '../assets/images/mf.jpg';
function HeroSection() {
  return (
    <>
    <div style={{height:'80vh'}}className='hero-container'>
        <img src={mf} alt="" className='heroImg'/>
        Whipped with love, baked with joy, and delivered by SweetCloud.
        The cloud that delivers sweetness. ☁️💫
        
      <div className="hero-text">
        <h1>SweetCloud</h1>
        <p>Freshly baked happiness, delivered with love</p>
      </div>
    </div>
    </>
  )
}

export default HeroSection