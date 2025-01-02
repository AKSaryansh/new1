import React from 'react';
import './Specialities.css';
import {
  BrowserRouter as Router,
  Routes, Route, Link, useNavigate,useParams,useMatch
} from 'react-router-dom'

import neck from './spe-neck.png'
import rhem from './spe-dk.png'
import brain from './spe-brain.png'
import women from './spe-women.png'
import skin from './spe-skin.png'
import speclogo from './fool.png'


function Specialities() {
  return (
    <>
      <div className="text-center" style={{ marginBottom: "50px", marginTop: "50px" }}>
        <img src={speclogo} alt="Section Icon" />
        <h1>Our Specialties</h1>
      </div>
      <div id="carouselExample2" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <div className="d-flex justify-content-center">
              <div className="flip-box mx-3">
                <div className="flip-box-inner">
                  <div className="flip-box-front" style={{ color: "white" }}>
                    <img src={neck} alt="Specialty 1" />
                    <h3>Neck, Back & Joint Problems</h3>
                    <p>These days, these are the most common complaints. We provide ABHYANGAM massage therapy which is done with gentle warm ayurvedic oils for rejuvenation, relaxation, pain relief, etc.</p>
                    <Link to="/Speciality/Neck">Read More</Link>
                  </div>
                </div>
              </div>
              <div className="flip-box mx-3">
                <div className="flip-box-inner">
                  <div className="flip-box-front" style={{ color: "white" }}>
                    <img src={brain} alt="Specialty 2" />
                    <h3>Stroke & Development Neurology</h3>
                    <p>A treatment for development disorders poses a great challenge. We offer in-house treatment for neurological problems.</p>
                    <Link to="/Speciality/Stroke">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <div className="d-flex justify-content-center">
              <div className="flip-box mx-3">
                <div className="flip-box-inner">
                  <div className="flip-box-front" style={{ color: "white" }}>
                    <img src={rhem} alt="Specialty 3" />
                    <h3>Rheumatology</h3>
                    <p>Rheumatic diseases are a group of auto-immune connective tissue disorders. This treatment helps at reducing inflammation and symptoms like pain, swelling, etc.</p>
                    <Link to="/Speciality/Rheuma">Read More</Link>
                  </div>
                </div>
              </div>
              <div className="flip-box mx-3">
                <div className="flip-box-inner">
                  <div className="flip-box-front" style={{ color: "white" }}>
                    <img src={women} alt="Specialty 4" />
                    <h3>Women's Health & Fertility</h3>
                    <p>In India, women are facing problems with conceiving. Couples seek treatment under Assisted Reproduction Specialists. This helps to conceive.</p>
                    <Link to="/Speciality/Women">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <div className="d-flex justify-content-center">
              <div className="flip-box mx-3">
                <div className="flip-box-inner">
                  <div className="flip-box-front" style={{ color: "white" }}>
                    <img src={skin} alt="Specialty 5" />
                    <h3>Skin Problem</h3>
                    <p>In today's generation, many of them face problems related to skin. We study the case wisely and accordingly provide treatment.</p>
                    <Link to="/Speciality/Skin">Read More</Link>
                  </div>
                </div>
              </div>
              <div className="flip-box mx-3">
                <div className="flip-box-inner">
                  <div className="flip-box-front" style={{ color: "white" }}>
                    <img src={neck} alt="Specialty 6" />
                    <h3>Preventive Medicine</h3>
                    <p>At Ayurveda, get the most Authentic Panchakarma treatments which are the best form of detoxification program ever known to mankind.</p>
                    <Link to="/Speciality/Medicine">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Specialities;