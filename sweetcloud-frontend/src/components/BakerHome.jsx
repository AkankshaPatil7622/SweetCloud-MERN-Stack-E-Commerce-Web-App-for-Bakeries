import React from "react";
import "../style/Home.css";
import Carousel from "./Carousel";
import BakerNavbar from "./BakerNavbar";
import BakerDashboard from "./BakerDashboard";
import Footer from "./Footer";
function BakerHome() {
  return (
    <>
      <Carousel />
      <Footer />
    </>
  );
}

export default BakerHome;
