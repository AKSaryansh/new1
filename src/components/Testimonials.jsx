import React, { useState } from 'react';
import './Testimonials.css';
import {
  BrowserRouter as Router,
  Routes, Route, Link, useNavigate,useParams,useMatch
} from 'react-router-dom'
import testlogo from './fool.png'

function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(null);

  const toggleTestimonial = (index) => {
    setActiveTestimonial(activeTestimonial === index ? null : index);
  };

  return (
    <>
      <h1 className="text-center testimonials-heading" style={{marginTop:"40px"}}>
        <div>
          <img
            src={testlogo}
            alt="Section Icon"
          />
        </div>
        Our Testimonials
      </h1>
      <div className="testimonials-container">
        {/* Patient 1 */}
        <div className="testimonial-card">
          <h2
            className="testimonial-title"
            onClick={() => toggleTestimonial(1)}
          >
            Patient #1
          </h2>
          <div
            className={`testimonial-content ${
              activeTestimonial === 1 ? 'open' : ''
            }`}
          >
            <blockquote>
              <p>
                "I had a severe back problem for a long time. Then I came to
                know about Ayurveda Hospital. With all the treatments and
                medications, I no longer have back problems. Thank you to all
                the doctors and staff members for their excellent service and
                care!"
              </p>
            </blockquote>
            <p className="testimonial-author">- Rohit Bijarniya</p>
          </div>
        </div>

        {/* Patient 2 */}
        <div className="testimonial-card">
          <h2
            className="testimonial-title"
            onClick={() => toggleTestimonial(2)}
          >
            Patient #2
          </h2>
          <div
            className={`testimonial-content ${
              activeTestimonial === 2 ? 'open' : ''
            }`}
          >
            <blockquote>
              <p>
                "The care and attention I received at the Ayurveda hospital
                were outstanding. The treatments are holistic, and the natural
                approach helped me regain my health. Highly recommend their
                services!"
              </p>
            </blockquote>
            <p className="testimonial-author">- Random Mofo</p>
          </div>
        </div>

        {/* Discover More Section */}
        <div className="testimonial-card">
          <h2
            className="testimonial-title"
            onClick={() => toggleTestimonial(3)}
          >
            Discover More
          </h2>
          <div
            className={`testimonial-content ${
              activeTestimonial === 3 ? 'open' : ''
            }`}
          >
            <blockquote>
              <p>
                "Our patients' stories are a testament to the transformative
                power of Ayurveda. Want to learn more about our success stories?
                Click below!"
              </p>
            </blockquote>
            <div className="text-center">
            <Link to='/Testimonials'> 
            <button type="button" className="btn btn-success more-button-2">
             Click here for more
            </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
