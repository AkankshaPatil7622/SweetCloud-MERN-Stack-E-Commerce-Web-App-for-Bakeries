import React from "react";
import FeedbackCard from "./FeedbackCard";
import mery from '../assets/images/mery.jpg'
import james from '../assets/images/james.jpg'
import carls from '../assets/images/carls.jpg'
function Feedback() {
  return (
    <>
      <div className="feedback bg-dark">
       <FeedbackCard 
       name="Merry Ken" 
       img={mery}
       feedback="“SweetCloud has completely changed how I order cakes! The flavors are always fresh, and the designs are just like the pictures.”"/>


       <FeedbackCard 
       name="James Harry" 
       img={james}
       feedback="“I ordered a customized chocolate truffle cake for my best friend’s birthday, and SweetCloud delivered it right on time! The packaging was perfect, and the taste was heavenly.”"/>


       <FeedbackCard 
       name="Carls Brik" 
       img={carls}
       feedback="“From cupcakes to fruit cakes, SweetCloud has everything! The quality, freshness, and presentation are top-notch.”"/>

      </div>
    </>
  );
}

export default Feedback;
