import React, { useState } from "react";
import "./Testimonials.css";
import logo from './logo.png'

const TestimonialsMain = () => {

  return (
    <>
    <div id="carouselExampleDark" className="carousel carousel-dark slide car2" style={{marginTop:"300px"}}>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <div className="d-block w-100" >
      <div className="testimonial-container">
      <h2 className="testimonial-title">Customer Testimonials</h2>
      <div className="testimonial-card">
        <div className="testimonial-image-container">
          <img
            src="https://via.placeholder.com/150" // Replace with the actual image URL
            alt="Customer"
            className="testimonial-image"
          />
        </div>
        <p className="testimonial-text">
          “I really like the dresses from the Borcelle Boutique. Nice design,
          feminine color, soft and comfortable material. In addition, at an
          affordable price I can get a dress with good quality like this.
          Borcelle is special, thank you.”
        </p>
      </div>
    </div>
        
      </div>
     
    </div>
    <div className="carousel-item " data-bs-interval="2000">
      <img src="..." className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
};

export default TestimonialsMain;
