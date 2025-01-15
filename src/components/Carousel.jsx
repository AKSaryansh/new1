import React from 'react';
import './Carousel.css';
import car1 from './car1.jpg';
import logo from './logo.png';
import car2 from './car2.jpg';
import car3 from './image.png';

function Carousel() {
  return (
    <div className="carousel-container">
      <div
        id="carouselExample"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="2000" // Moves slides every 2 seconds
        style={{ padding: '25px', borderRadius: '10px' }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <div className="car-div-container">
              <div className="car-div">
                <img className="car-div-logo" src={logo} alt="Wellness Clinic" />
                <span> Holistic Wellness Clinic</span>
                <span className="verified-tag">✔ Trusted by Experts</span>
                <div className="car-desc">
                  <ul>
                    <li>Since 2005</li>
                    <li>Specialized in Ayurveda</li>
                  </ul>
                  <p>Experience a holistic approach to wellness...</p>
                </div>
              </div>
              <div className="car-div">
                <img src={car1} style={{ borderRadius: '300px' }} alt="Customer" />
                <span> Ayurveda Healing</span>
                <span className="verified-tag">✔ Trusted Healthcare</span>
                <div className="car-desc">
                  <ul>
                    <li>Since 2010</li>
                    <li>Natural Therapies</li>
                  </ul>
                  <p>We provide ancient Ayurvedic treatments...</p>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <div className="car-div-container">
              <div className="car-div">
                <img src={car3} style={{ borderRadius: '300px' }} alt="Customer" />
                <span> Sai Ayurveda Wellness</span>
                <span className="verified-tag">✔ Expertly Managed</span>
                <div className="car-desc">
                  <ul>
                    <li>Since 2015</li>
                    <li>Wellness Experts</li>
                  </ul>
                  <p>Unlock your potential with our tailored Ayurvedic treatments...</p>
                </div>
              </div>
              <div className="car-div">
                <img src={car2} style={{ borderRadius: '500px' }} alt="Customer" />
                <span> Ayurvedic Therapy Center</span>
                <span className="verified-tag">✔ Recognized Healing</span>
                <div className="car-desc">
                  <ul>
                    <li>Since 2012</li>
                    <li>Holistic Approach</li>
                  </ul>
                  <p>Find balance and healing through our Ayurvedic therapies...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
