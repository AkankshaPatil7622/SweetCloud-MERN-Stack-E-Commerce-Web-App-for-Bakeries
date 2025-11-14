// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../style/Footer.css";

function Footer() {
  return (
    <footer className="sweetcloud-footer text-white ">
      <div className="footer-container">
        {/* Brand Section */} 
        <div className="footer-section">
          <h2 className="footer-title">SweetCloud 🍰</h2>
          <p>
            Bringing happiness in every slice. Order freshly baked cakes crafted
            with love and delivered with care.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cakes">Cakes</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p><FaMapMarkerAlt /> Pune, Maharashtra</p>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaEnvelope /> hello@sweetcloud.in</p>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <hr />
      <p className="footer-bottom">
        © {new Date().getFullYear()} SweetCloud. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
