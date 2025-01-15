import React, { useEffect } from 'react';
import './SpecialityNeck.css'; // For custom styles

function SpecialityNeck() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="speciality-container">
        <h1 className="speciality-title">Understanding the Pain: The Root of Neck, Back, and Joint Issues</h1>
        <p className="speciality-subtitle">Empowering Wellness with Ayurveda</p>

        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
              <div className="speciality-card">
                <h2>Understanding Neck, Back, and Joint Issues</h2>
                <ul>
                  <li>Common due to sedentary lifestyles.</li>
                  <li>Caused by poor posture and physical inactivity.</li>
                  <li>Stress and long desk hours are contributing factors.</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
              <div className="speciality-card">
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
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
              <div className="speciality-card">
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

            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
              <div className="speciality-card">
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
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
              <div className="speciality-card">
                <h4>3. Diet and Lifestyle Recommendations</h4>
                <ul>
                  <li>Eat warm, grounding foods like grains and vegetables.</li>
                  <li>Incorporate ginger and garlic for better circulation.</li>
                  <li>Avoid processed and cold foods.</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
              <div className="speciality-card">
                <h4>4. Yoga and Stretching</h4>
                <ul>
                  <li><strong>Bhujangasana</strong>: Strengthens the back.</li>
                  <li><strong>Marjaryasana</strong>: Improves posture.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mb-4">
              <div className="speciality-card">
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
