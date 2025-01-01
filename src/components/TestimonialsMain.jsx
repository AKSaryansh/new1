import React from "react";
import './TestimonialsMain.css';
import userlogo from './userlogo.png';

const testimonialsData = [
  {
    name: "Rajesh Sharma",
    date: "December 5, 2024",
    text: "The treatments at this clinic have transformed my health. I was suffering from chronic back pain, and after a few months of Panchakarma therapy, I feel rejuvenated and pain-free.",
  },
  {
    name: "Anita Verma",
    date: "October 18, 2024",
    text: "I had persistent skin issues for years. The herbal remedies and detox treatments recommended here have cleared my skin completely. Truly grateful for the expert care.",
  },
  {
    name: "Vikram Iyer",
    date: "September 10, 2024",
    text: "The ayurvedic approach to managing stress and anxiety through meditation and herbal supplements has improved my mental health significantly. Highly recommended.",
  },
  {
    name: "Pooja Nair",
    date: "November 22, 2024",
    text: "I was struggling with digestion problems. The tailored diet plan and herbal medications have restored my gut health. Thank you for the personalized attention.",
  },
  {
    name: "Amit Khanna",
    date: "August 15, 2024",
    text: "Excellent clinic with compassionate practitioners. I underwent treatment for arthritis, and I can now walk comfortably without pain. Ayurveda works wonders.",
  },
];

const TestimonialsMain = () => {
  return (
    <div className="testimonial-wrapper" style={{marginTop:"200px"}}>
      <h1 className="main-heading">Customer Testimonials</h1>
      <section className="section-padding">
        <div className="container">
          <div className="row">
            {testimonialsData.map((testimonial, index) => (
              <div className="col-md-4" key={index}>
                <div className="testimonial-div">
                  <img src={userlogo} alt="Customer" />
                  <span>{testimonial.name}</span>
                  <span className="verified-tag">✔ Verified User</span>
                  <div className="testimonial-desc">
                    <ul>
                      <li>{testimonial.date}</li>
                      <li>{testimonial.name}</li>
                    </ul>
                    <p>{testimonial.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsMain;
