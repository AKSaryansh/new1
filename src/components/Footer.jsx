import React, { useState } from 'react';
import './Footer.css';
import logo from './logo.png';

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>INFORMATION</h4>
          <ul>
            <li>About Us</li>
            <li>General Terms & Conditions</li>
            <li><img src={logo} alt="Logo" className="footer-logo"/></li>
          </ul>
        </div>
        <div className="footer-section">
          <ul>
            <li>Blogs</li>
            <li>Contact Us</li>
            <li>Caution Notice</li>
            <li>Faq</li>
            <li>Privacy Policy</li>
            <li>Site Map</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Subscribe Our Newsletter</h4>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email id" />
            <button>&#10148;</button>
          </div>
          <h4 style={{marginTop:"10px"}}>Follow on Social Media</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        <div className="footer-section contact">
          <h4>CONTACT US</h4>
          <p>Sai Ayurveda Limited, <br /> 599-A, Sector 32A, Chandigarh, 160030</p>
          <p>&#128222; +91-9529241718 </p>
          <p>&#128337; Timing: Mon to Sun (24/7)</p>
          <p>&#128337; shubh120174@gmail.com</p>
        </div>
      </div>

      {/* Contact Button */}
      <button
        className="contact-button"
        onClick={() => setShowPopup(true)}
      >
        Contact Us
      </button>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-popup" onClick={() => setShowPopup(false)}>×</button>
            <h3>Contact Us</h3>
            <p>How would you like to reach us?</p>
            <div className="popup-buttons">
              <a href="https://wa.me/916397317761?text=Hello%20I%20am%20interested%20in%20your%20services"
                className="popup-button whatsapp">
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
              <a href="tel:+919529241718"
                className="popup-button call">
                <i className="fas fa-phone"></i> Call
              </a>
              <a href="mailto:shubh120174@gmail.com"
                className="popup-button email">
                <i className="fas fa-envelope"></i> Email
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="footer-bottom">
        &copy; 2024 Sai Ayurveda Limited All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;