import React from 'react';
import { useEffect } from 'react';
import rheum1 from './rheum1.jpg';
import rheum2 from './rheum2.png';
import rheum3 from './rheum3.jpg';

function SpecialityRheuma() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ padding: '50px 15px', backgroundColor: '#f4eee1', borderRadius: '10px', marginTop: '130px' }}>
      <h1 style={{ textAlign: 'center', color: '#6B4226', fontSize: '1.5rem' }}>Rheumatology and Joint Care through Ayurveda</h1>
      <p style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '0.8rem' }}>Healing Through the Expertise of Sai Ayurveda</p>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 col-12 mb-4">
            <div
              style={{
                fontSize:"0.75rem",
                backgroundColor: 'white',
                padding: '15px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h2 >Understanding Rheumatology and Joint Disorders</h2>
              <p >
                Rheumatic diseases, including arthritis and joint inflammation, can significantly impact mobility and quality of life. Ayurveda offers natural solutions by addressing the underlying imbalances that contribute to joint pain and stiffness.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-12 mb-4">
            <div
              style={{
                fontSize:"0.75rem",
                backgroundColor: 'white',
                padding: '15px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h2 >Ayurvedic Insights into Rheumatology</h2>
              <p >
                Ayurveda views joint problems as a result of aggravated <strong>Vata dosha</strong> (air and ether elements), leading to dryness, cracking, and inflammation. Toxin buildup (ama) also plays a role in causing joint discomfort and stiffness.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-12 mb-4">
            <div
              style={{
                fontSize:"0.75rem",
                backgroundColor: 'white',
                padding: '15px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3 >1. Herbal Remedies</h3>
              <ul >
                <li><strong>Shallaki (Boswellia)</strong>: Reduces inflammation and supports joint flexibility.</li>
                <li><strong>Guggulu</strong>: Detoxifies and relieves joint swelling.</li>
                <li><strong>Dashmool</strong>: Aids in pain relief and strengthens muscles and tissues.</li>
                <li><strong>Turmeric (Curcumin)</strong>: Acts as a natural anti-inflammatory agent.</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-12 mb-4">
            <div
              style={{
                fontSize:"0.75rem",
                backgroundColor: 'white',
                padding: '15px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3 >2. Panchakarma Therapies</h3>
              <ul>
                <li><strong>Abhyanga (Oil Massage)</strong>: Lubricates joints, reduces stiffness, and improves circulation.</li>
                <li><strong>Swedana (Herbal Steam Therapy)</strong>: Eases muscle tension and softens tissues.</li>
                <li><strong>Basti (Medicated Enema)</strong>: Nourishes the colon and reduces systemic inflammation.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 mb-4">
            <div
              style={{
                fontSize:"0.75rem",
                backgroundColor: 'white',
                padding: '15px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3 >3. Diet and Lifestyle Recommendations</h3>
              <p >
                A diet rich in warm, cooked foods, healthy oils, and anti-inflammatory spices like ginger and garlic is crucial. Gentle yoga and regular movement help maintain joint flexibility and reduce stiffness.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 mb-4">
            <div
              style={{
                fontSize:"0.75rem",
                backgroundColor: 'white',
                padding: '15px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h2>Why Trust Sai Ayurveda?</h2>
              <p>
                At Sai Ayurveda, we provide customized treatment plans tailored to each patient's unique constitution and condition. Our holistic approach ensures comprehensive care that addresses not only physical discomfort but also mental and emotional well-being.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 mb-4">
            <div
              style={{
                fontSize:"0.75rem",
                backgroundColor: 'white',
                padding: '15px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h2 >Conclusion</h2>
              <p>
                Joint and rheumatic conditions can be effectively managed through Ayurveda's time-tested therapies and personalized care at Sai Ayurveda. Restore balance, alleviate pain, and reclaim your mobility with natural solutions rooted in ancient wisdom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialityRheuma;
