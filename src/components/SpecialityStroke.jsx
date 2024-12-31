import React from 'react'
import { useEffect } from 'react'
import stroke from './stroke1.jpg'
import stroke2 from './stroke2.webp'
import neuro from './neuro1.jpg'

function SpecialityStroke() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
          <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ top: "220px", backgroundColor: '#f4eee1', padding: '20px', borderRadius: '10px' }}>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img 
            src={neuro}
            style={{ height: "700px", width: "70%", margin: '0 auto', borderRadius: '15px', objectFit: 'contain' }} 
            className="d-block" 
            alt="Ayurvedic Treatment Slide 1" 
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img 
            src={stroke}
            style={{ height: "700px", width: "70%", margin: '0 auto', borderRadius: '15px', objectFit: 'contain' }} 
            className="d-block" 
            alt="Ayurvedic Treatment Slide 2" 
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img 
            src={stroke2}
            style={{ height: "700px", width: "70%", margin: '0 auto', borderRadius: '15px', objectFit: 'contain' }} 
            className="d-block" 
            alt="Ayurvedic Treatment Slide 3" 
          />
        </div>
        {/* <div className="carousel-item" data-bs-interval="3000">
          <img 
            src={back}
            style={{ height: "700px", width: "70%", margin: '0 auto', borderRadius: '15px', objectFit: 'contain' }} 
            className="d-block" 
            alt="Ayurvedic Treatment Slide 4" 
          />
        </div> */}
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
        {/* <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3" aria-label="Slide 4"></button> */}
      </div>
    </div>
    <div style={{ padding: '100px', backgroundColor: '#f4eee1', borderRadius: '10px' }}>
  <h1 style={{ textAlign: 'center', color: '#6B4226' }}>Stroke and Developmental Neurology through Ayurveda</h1>
  <p style={{ textAlign: 'center', fontStyle: 'italic' }}>Healing Through the Wisdom of Sai Ayurveda</p>

  <div className="container mt-5">
    <div className="row">
      <div className="col-md-6 mb-4">
        <div style={{ background: 'linear-gradient(to bottom, #f6f1e1, #604e11)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2>Understanding Stroke and Neurological Disorders</h2>
          <p>Stroke and developmental neurological issues affect millions globally, leading to impaired mobility, speech difficulties, and cognitive challenges. Modern medicine often focuses on symptom management, but Ayurveda delves deeper, addressing root imbalances and promoting long-term recovery.</p>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div style={{ background: 'linear-gradient(to bottom, #f6f1e1, #604e11)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2>Ayurvedic Perspective on Neurological Disorders</h2>
          <p>In Ayurveda, neurological conditions are linked to imbalances in <strong>Vata dosha</strong>, responsible for all bodily movements and nervous system functions. Disruptions in Vata can lead to nerve degeneration, blockages, and functional impairments.</p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 mb-4">
        <div style={{ background: 'linear-gradient(to bottom, #f6f1e1, #604e11)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h3>1. Herbal Remedies</h3>
          <ul>
            <li><strong>Brahmi</strong>: Enhances cognitive function and promotes neural regeneration.</li>
            <li><strong>Ashwagandha</strong>: Reduces stress, strengthens nerves, and aids recovery.</li>
            <li><strong>Shankhpushpi</strong>: Boosts memory and mental clarity.</li>
            <li><strong>Guduchi</strong>: Detoxifies the body and rejuvenates the nervous system.</li>
          </ul>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div style={{ background: 'linear-gradient(to bottom, #f6f1e1, #604e11)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h3>2. Panchakarma Therapies</h3>
          <ul>
            <li><strong>Nasya (Nasal Therapy)</strong>: Clears toxins from the head region and improves brain function.</li>
            <li><strong>Shirodhara</strong>: A calming oil therapy that enhances mental clarity and relaxes the nervous system.</li>
            <li><strong>Abhyanga (Full Body Massage)</strong>: Improves circulation and strengthens muscles and nerves.</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12 mb-4">
        <div style={{ background: 'linear-gradient(to bottom, #f6f1e1, #604e11)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h3>3. Diet and Lifestyle Modifications</h3>
          <p>A nourishing diet rich in healthy fats, leafy greens, and warming spices like turmeric and ginger is recommended. Regular yoga, pranayama (breathing exercises), and meditation are essential to calm the mind and restore balance to the nervous system.</p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12 mb-4">
        <div style={{ background: 'linear-gradient(to bottom, #f6f1e1, #604e11)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2>Why Choose Sai Ayurveda?</h2>
          <p>At Sai Ayurveda, we believe in treating every individual with personalized care, addressing not just the physical symptoms but also emotional and spiritual well-being. Our holistic approach ensures that each patient embarks on a journey of complete healing and restoration.</p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12 mb-4">
        <div style={{ background: 'linear-gradient(to bottom, #f6f1e1, #604e11)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2>Conclusion</h2>
          <p>Stroke and neurological issues can be deeply life-altering, but with the wisdom of Ayurveda and the dedicated care from Sai Ayurveda, recovery and rejuvenation are within reach. Trust the ancient healing sciences to guide you towards a healthier, more vibrant life.</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default SpecialityStroke