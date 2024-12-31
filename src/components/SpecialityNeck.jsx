import React from 'react'
import back from './back.png'
import neck from './Neck-Pain.jpg'
import joint from './joint.png'
import joint2 from './joint-2.png'
import { useEffect } from 'react'

function SpecialityNeck() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ top: "220px", backgroundColor: '#f4eee1', padding: '20px', borderRadius: '10px' }}>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img 
            src={joint}
            style={{ height: "700px", width: "70%", margin: '0 auto', borderRadius: '15px', objectFit: 'contain' }} 
            className="d-block" 
            alt="Ayurvedic Treatment Slide 1" 
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img 
            src={joint2}
            style={{ height: "700px", width: "70%", margin: '0 auto', borderRadius: '15px', objectFit: 'contain' }} 
            className="d-block" 
            alt="Ayurvedic Treatment Slide 2" 
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img 
            src={neck}
            style={{ height: "700px", width: "70%", margin: '0 auto', borderRadius: '15px', objectFit: 'contain' }} 
            className="d-block" 
            alt="Ayurvedic Treatment Slide 3" 
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img 
            src={back}
            style={{ height: "700px", width: "70%", margin: '0 auto', borderRadius: '15px', objectFit: 'contain' }} 
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
    <div style={{ padding: '100px', backgroundColor: '#f4eee1', borderRadius: '10px'}}>
  <h1 style={{ textAlign: 'center', color: '#6B4226' }}>Understanding the Pain: The Root of Neck, Back, and Joint Issues</h1>
  <p style={{ textAlign: 'center', fontStyle: 'italic' }}>Empowering Wellness with Ayurveda</p>

  <div className="container mt-5">
    <div className="row">
      <div className="col-md-6 mb-4">
        <div style={{ background: 'linear-gradient(to bottom, #f6f1e1, #604e11)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2>Understanding Neck, Back, and Joint Issues</h2>
          <p>In today's fast-paced world, neck, back, and joint problems have become increasingly common. Long hours at the desk, poor posture, lack of physical activity, and stress contribute significantly to musculoskeletal discomfort. Ayurveda offers profound insights into addressing these issues holistically.</p>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div style={{ background: 'linear-gradient(to bottom, #f6f1e1, #604e11)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2>Causes from an Ayurvedic Perspective</h2>
          <p>According to Ayurveda, pain in the neck, back, and joints often results from an imbalance in the <strong>Vata dosha</strong> (air and ether elements), which governs movement. Aggravation of Vata can lead to stiffness, dryness, and discomfort in the joints and muscles.</p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 mb-4">
        <div style={{ background: 'linear-gradient(to bottom, #f6f1e1, #604e11)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h3>Ayurvedic Solutions for Neck, Back, and Joint Health</h3>
          <h4>1. Herbal Remedies</h4>
          <ul>
            <li><strong>Ashwagandha</strong>: Reduces stress and muscle tension.</li>
            <li><strong>Shallaki (Boswellia)</strong>: Alleviates joint pain and improves flexibility.</li>
            <li><strong>Guggulu</strong>: Detoxifies and relieves inflammatory conditions.</li>
            <li><strong>Turmeric (Curcumin)</strong>: Reduces pain and swelling.</li>
          </ul>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div style={{ background: 'linear-gradient(to bottom, #f6f1e1, #604e11)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h4>2. Panchakarma Therapy (Detoxification)</h4>
          <ul>
            <li><strong>Abhyanga (Oil Massage)</strong>: Improves circulation and relieves muscle tension.</li>
            <li><strong>Swedana (Herbal Steam Therapy)</strong>: Loosens toxins and relaxes muscles.</li>
            <li><strong>Basti (Medicated Enema)</strong>: Nourishes the colon and reduces inflammation.</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12 mb-4">
        <div style={{ background: 'linear-gradient(to bottom, #f6f1e1, #604e11)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h4>3. Diet and Lifestyle Recommendations</h4>
          <p>Increase intake of warming, grounding foods like cooked vegetables, whole grains, and healthy fats. Incorporate <strong>ginger and garlic</strong> to enhance circulation and avoid processed foods and cold, dry items.</p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 mb-4">
        <div style={{ background: 'linear-gradient(to bottom, #f6f1e1, #604e11)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h4>4. Yoga and Stretching</h4>
          <ul>
            <li><strong>Bhujangasana</strong>: Strengthens the back and improves flexibility.</li>
            <li><strong>Marjaryasana</strong>: Relieves tension and improves posture.</li>
          </ul>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div style={{ background: 'linear-gradient(to bottom, #f6f1e1, #604e11)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h4>5. Ayurvedic Oils for External Application</h4>
          <ul>
            <li><strong>Mahanarayan Oil</strong>: Alleviates joint and muscle pain.</li>
            <li><strong>Dhanwantharam Oil</strong>: Effective for back pain and inflammation.</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12 mb-4">
        <div style={{ background: 'linear-gradient(to bottom, #f6f1e1, #604e11)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2>Conclusion</h2>
          <p>Ayurveda views neck, back, and joint problems not just as physical ailments but as manifestations of deeper imbalances. By incorporating Ayurvedic principles, herbal remedies, detoxification therapies, and mindful living, you can experience long-term relief and restore harmony to your body.</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default SpecialityNeck