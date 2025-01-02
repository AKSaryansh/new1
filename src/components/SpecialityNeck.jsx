import React from 'react';
import back from './back.png';
import neck from './Neck-Pain.jpg';
import joint from './joint.png';
import joint2 from './joint-2.png';
import { useEffect } from 'react';

function SpecialityNeck() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <div
        id="carouselExample"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ top: '220px', padding: '20px', borderRadius: '10px', backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src={joint}
              style={{ height: '700px', width: '70%', margin: '0 auto', borderRadius: '15px', objectFit: 'contain' }}
              className="d-block"
              alt="Ayurvedic Treatment Slide 1"
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src={joint2}
              style={{ height: '700px', width: '70%', margin: '0 auto', borderRadius: '15px', objectFit: 'contain' }}
              className="d-block"
              alt="Ayurvedic Treatment Slide 2"
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src={neck}
              style={{ height: '700px', width: '70%', margin: '0 auto', borderRadius: '15px', objectFit: 'contain' }}
              className="d-block"
              alt="Ayurvedic Treatment Slide 3"
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src={back}
              style={{ height: '700px', width: '70%', margin: '0 auto', borderRadius: '15px', objectFit: 'contain' }}
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
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
      </div> */}

      <div style={{ padding: '100px', backgroundColor: '#f4eee1', borderRadius: '10px',marginTop:"200px" }}>
        <h1 style={{ textAlign: 'center', color: '#6B4226' }}>
          Understanding the Pain: The Root of Neck, Back, and Joint Issues
        </h1>
        <p style={{ textAlign: 'center', fontStyle: 'italic' }}>Empowering Wellness with Ayurveda</p>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #ccc',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <h2>Understanding Neck, Back, and Joint Issues</h2>
                <ul>
                  <li>Common due to sedentary lifestyles.</li>
                  <li>Caused by poor posture and physical inactivity.</li>
                  <li>Stress and long desk hours are contributing factors.</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #ccc',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <h2>Causes from an Ayurvedic Perspective</h2>
                <ul>
                  <li>Imbalance in the <strong>Vata dosha</strong>.</li>
                  <li>Leads to stiffness, dryness, and discomfort.</li>
                  <li>Focuses on restoring dosha balance.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #ccc',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <h3>Ayurvedic Solutions for Neck, Back, and Joint Health</h3>
                <h4>1. Herbal Remedies</h4>
                <ul>
                  <li><strong>Ashwagandha</strong>: Reduces stress and muscle tension.</li>
                  <li><strong>Shallaki (Boswellia)</strong>: Improves joint flexibility.</li>
                  <li><strong>Guggulu</strong>: Detoxifies and reduces inflammation.</li>
                  <li><strong>Turmeric (Curcumin)</strong>: Eases pain and swelling.</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #ccc',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <h4>2. Panchakarma Therapy (Detoxification)</h4>
                <ul>
                  <li><strong>Abhyanga (Oil Massage)</strong>: Improves circulation.</li>
                  <li><strong>Swedana (Herbal Steam)</strong>: Loosens toxins.</li>
                  <li><strong>Basti (Enema)</strong>: Nourishes and reduces inflammation.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #ccc',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <h4>3. Diet and Lifestyle Recommendations</h4>
                <ul>
                  <li>Eat warm, grounding foods like grains and vegetables.</li>
                  <li>Incorporate ginger and garlic for better circulation.</li>
                  <li>Avoid processed and cold foods.</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #ccc',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <h4>4. Yoga and Stretching</h4>
                <ul>
                  <li><strong>Bhujangasana</strong>: Strengthens the back.</li>
                  <li><strong>Marjaryasana</strong>: Improves posture.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 mb-4">
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #ccc',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <h2>Conclusion</h2>
                <ul>
                  <li>Ayurveda addresses root imbalances holistically.</li>
                  <li>Combines remedies, detox therapies, and mindful living.</li>
                  <li>Restores harmony and offers long-term relief.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecialityNeck;
