import React from 'react'
import './Footer.css'
import logo from './logo.png'
import wa from './pngegg.png'

 // Assuming you'll style it separately

const Footer = () => {
    return (
        <footer className="footer" >
            <div className="footer-container">
                <div className="footer-section">
                    <h4>INFORMATION</h4>
                    <ul>
                        <li>About Us</li>
            
                        <li>General Terms & Conditions</li>
                
   
                        <li><img src={logo} alt="Logo" style={{height: "80px", width: "200px",marginTop:"20px"}}/></li>
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
                        <a href="#">
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
                </div>
                <div className="footer-section contact">
                    <h4>CONTACT US</h4>
                    <p>Sai Ayurveda Limited, <br /> 599-A, Sector 32A, Chandigarh, 160030</p>
                    <p>&#128222; +91-9529241718 </p>
                    <p>&#128337; Timing: Mon to Sun (24/7)</p>
                    <p>&#128337; shubh120174@gmail.com</p>
                    
                </div>
                <div className='whatsapp-img' style={{width:"120px",height:"100px",marginLeft:"820px",marginTop:"-70px",marginBottom:"40px"}}>
                <a href="https://wa.me/916397317761?text=Hello%20I%20am%20interested%20in%20your%20services">
                <img src={wa} alt="" />
                </a>
                <div className='ping' style={{display:""}}>Click to Ping!!</div>
            </div>
            </div>
            
            <div className="footer-bottom">
                &copy; 2024 Sai Ayurveda Limited All Rights Reserved.
            </div>
            
        </footer>
    );
};

export default Footer;

