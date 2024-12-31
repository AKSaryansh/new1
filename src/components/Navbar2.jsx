import React from 'react'
import {
    BrowserRouter as Router,
    Routes, Route, Link, useNavigate,useParams,useMatch
  } from 'react-router-dom'
function Navbar2() {
  return (
    <nav className="navbar navbar-expand-lg bg-success" style={{position:"fixed",top:"77px",zIndex:19,left:"0px",right:"0px",fontSize:"20px",backgroundColor:"black"}}>
    <div className="container-fluid p-3 text-primary-emphasis ">
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/About">About Us</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Specialities
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/Speciality/Neck">Neck, Back & Joint Problems</Link></li>
              <li><Link className="dropdown-item" to="/Speciality/Stroke">Stroke & Development Neurology</Link></li>
              <li><Link className="dropdown-item" to="/Speciality/Rheuma">Rheumatology</Link></li>
              <li><Link className="dropdown-item" to="/Speciality/Women">Women's Health & Fertility</Link></li>
              <li><Link className="dropdown-item" to="/Speciality/Skin">Skin Problem</Link></li>
              <li><Link className="dropdown-item" to="/Speciality/Medicines">Preventive Medicine</Link></li>
              
            </ul>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" to="/Blog">Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">Contact Us</Link>
          </li>
          <div className="social-icons" style={{marginTop:"8px",right:"100px",marginLeft:"1050px"}}>
                        <a href="#" >
                        <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                        <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                        <i className="fab fa-youtube"></i>
                        </a>
                        <a href="#">
                        <i className="fab fa-pinterest"></i>
                        </a>
                        <a href="#">
                        <i className="fab fa-twitter"></i>
                        </a>
        </div>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar2