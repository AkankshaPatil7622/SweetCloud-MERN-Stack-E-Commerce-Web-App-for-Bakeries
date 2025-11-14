import React from 'react'
import HeroSection from '../components/HeroSection';
import Feedback from '../components/Feedback'
import CakeListHorizontalContainer from '../components/CakeListHorizontalContainer';
import Footer from '../components/Footer'
function UserHome() {
  return (
    <>

    <HeroSection />
   <CakeListHorizontalContainer />
   <Feedback />
   <Footer />
    </>
  )
}

export default UserHome