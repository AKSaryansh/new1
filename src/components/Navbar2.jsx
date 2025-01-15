import React from 'react'
import {
  BrowserRouter as Router,
  Routes, Route, Link, useNavigate, useParams, useMatch
} from 'react-router-dom'
import './Navbar2.css'

function Navbar2() {
  // const isMobile = window.innerWidth <= 768;
  return (
    <div className='div-req'>
      <nav className="navbar navbar-expand-lg" style={{
        position: "fixed",
        // top:isMobile ? "90px" : "74px", 
        zIndex: 19,
        fontSize: "16px", // Reduced font size from 20px
        backgroundColor: "#fff",
        right: "0%",
        left: "0%",
        borderRadius: "8px",
      }}>
        <div className="container-fluid p-2"> {/* Reduced padding from p-3 */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {/* Rest of the navigation items remain the same */}
              <li className="nav-item">
                <Link className="nav-link active py-1" aria-current="page" to="/">Home</Link> {/* Added py-1 for reduced vertical padding */}
              </li>
              <li className="nav-item">
                <Link className="nav-link active py-1" aria-current="page" to="/About">About Us</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle py-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Specialities
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item py-1" to="/Speciality/Neck">Neck, Back & Joint Problems</Link></li>
                  <li><Link className="dropdown-item py-1" to="/Speciality/Stroke">Stroke & Development Neurology</Link></li>
                  <li><Link className="dropdown-item py-1" to="/Speciality/Rheuma">Rheumatology</Link></li>
                  <li><Link className="dropdown-item py-1" to="/Speciality/Women">Women's Health & Fertility</Link></li>
                  <li><Link className="dropdown-item py-1" to="/Speciality/Skin">Skin Problem</Link></li>
                  <li><Link className="dropdown-item py-1" to="/Speciality/Medicines">Preventive Medicine</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link py-1" to="/Blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link py-1" to="/Contact">Contact Us</Link>
              </li>
              <div className="social-icons" style={{
                position: "fixed",
                marginTop: "4px", // Reduced from 8px
                right: "1%",
              }}>
                <a href="#" style={{ color: "black" }}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a target='_blank' href="https://www.instagram.com/shubhra1435?igsh=YzljYTk1ODg3Zg==" style={{ color: "black" }}>
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" style={{ color: "black" }}>
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" style={{ color: "black" }}>
                  <i className="fab fa-pinterest"></i>
                </a>
                <a href="#" style={{ color: "black" }}>
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar2