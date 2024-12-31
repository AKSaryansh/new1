import React from 'react';
import logo from './logo.png';
import './Carousel.css';
import image from './image.png'

function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ top: "220px", backgroundColor: '#f4eee1', padding: '20px', borderRadius: '10px' }}>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img 
            src='http://127.0.0.1:5500/themes/solidayurvedic001/img/slider-1.jpg' 
            style={{ height: "700px", width: "70%", margin: '0 auto', borderRadius: '15px', objectFit: 'cover' }} 
            className="d-block" 
            alt="Ayurvedic Treatment Slide 1" 
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img 
            src='http://127.0.0.1:5500/themes/solidayurvedic001/img/slider-2.jpg' 
            style={{ height: "700px", width: "70%", margin: '0 auto', borderRadius: '15px', objectFit: 'cover' }} 
            className="d-block" 
            alt="Ayurvedic Treatment Slide 2" 
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img 
            src='http://127.0.0.1:5500/themes/solidayurvedic001/img/blog-1.jpg' 
            style={{ height: "700px", width: "70%", margin: '0 auto', borderRadius: '15px', objectFit: 'cover' }} 
            className="d-block" 
            alt="Ayurvedic Treatment Slide 3" 
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img 
            src={image}
            style={{ height: "700px", width: "70%", margin: '0 auto', borderRadius: '15px', objectFit: 'cover' }} 
            className="d-block" 
            alt="Ayurvedic Treatment Slide 4" 
          />
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
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
    </div>
  );
}

export default Carousel;
