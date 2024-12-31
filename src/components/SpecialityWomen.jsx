import React from 'react'
import { useEffect } from 'react'
import women1 from './women1.webp'
import women2 from './women2.png'
import women3 from './women3.jpg'


function SpecialityWomen() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ top: "220px", backgroundColor: '#f4eee1', padding: '20px', borderRadius: '10px' }}>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000" style={{}}>
          <img 
            src={women1}
            style={{ height: "700px", width: "70%", margin: '0 auto', borderRadius: '15px', objectFit: 'contain' }} 
            className="d-block" 
            alt="Ayurvedic Treatment Slide 1" 
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img 
            src={women2}
            style={{ height: "700px", width: "70%", margin: '0 auto', borderRadius: '15px', objectFit: 'contain' }} 
            className="d-block" 
            alt="Ayurvedic Treatment Slide 2" 
          />
        </div>
        {/* <div className="carousel-item" data-bs-interval="3000">
          <img 
            src={women3}
            style={{ height: "700px", width: "70%", margin: '0 auto', borderRadius: '15px', objectFit: 'contain' }} 
            className="d-block" 
            alt="Ayurvedic Treatment Slide 3" 
          />
        </div> */}
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
        {/* <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
        {/* <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3" aria-label="Slide 4"></button> */}
      </div>
    </div>
    <div style={{ padding: '40px', backgroundColor: '#f4eee1', borderRadius: '10px' }}>
<h1 style={{ textAlign: 'center', color: '#6B4226' }}>Women's Health and Fertility through Ayurveda
<p style={{ textAlign: 'center', fontStyle: 'italic' }}>Empowering Wellness with Sai Ayurveda</p></h1>
<div className="container mt-5">
    <div className="row">
      <div className="col-md-6 mb-4">
        <div style={{ background: 'linear-gradient(to bottom, #f6f1e1, #604e11)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2>Understanding Women's Health and Fertility</h2>
          <p>Women's health encompasses physical, emotional, and hormonal balance, all crucial for overall well-being and fertility. Ayurveda provides natural, holistic solutions to address menstrual issues, hormonal imbalances, and reproductive health, promoting harmony within the body.</p>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div style={{ background: 'linear-gradient(to bottom, #f6f1e1, #604e11)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2>Ayurvedic Perspective on Women's Health</h2>
          <p>Ayurveda associates women's health with the balance of <strong>Shukra dhatu</strong> (reproductive tissue) and <strong>Rasa dhatu</strong> (nutrient plasma). Imbalances in <strong>Vata, Pitta,</strong> and <strong>Kapha</strong> doshas can lead to menstrual irregularities, infertility, and menopausal discomforts.</p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 mb-4">
        <div style={{ background: 'linear-gradient(to bottom, #f6f1e1, #604e11)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2>Comprehensive Care at Sai Ayurveda</h2>
          <h3>1. Herbal Remedies</h3>
          <ul>
            <li><strong>Shatavari</strong>: Enhances reproductive health and balances hormones.</li>
            <li><strong>Ashoka</strong>: Supports menstrual health and reduces cramps.</li>
            <li><strong>Lodhra</strong>: Regulates hormonal imbalances and improves uterine health.</li>
            <li><strong>Guduchi</strong>: Detoxifies the body and boosts immunity.</li>
          </ul>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div style={{ background: 'linear-gradient(to bottom, #f6f1e1, #604e11)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h3>2. Panchakarma Therapies</h3>
          <ul>
            <li><strong>Udvartana (Herbal Powder Massage)</strong>: Enhances circulation and detoxifies tissues.</li>
            <li><strong>Yoni Pichu</strong>: Rejuvenates and nourishes the reproductive organs.</li>
            <li><strong>Abhyanga</strong>: Aids in stress reduction and improves overall vitality.</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12 mb-4">
        <div style={{ background: 'linear-gradient(to bottom, #f6f1e1, #604e11)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h3>3. Diet and Lifestyle Recommendations</h3>
          <p>A balanced diet rich in whole grains, fresh vegetables, and healthy fats nourishes the reproductive system. Regular yoga and meditation promote emotional balance, enhancing fertility and menstrual health.</p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 mb-4">
        <div style={{ background: 'linear-gradient(to bottom, #f6f1e1, #604e11)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2>Why Choose Sai Ayurveda?</h2>
          <p>Sai Ayurveda offers personalized treatment plans, honoring the uniqueness of every woman’s body. By focusing on natural healing and nurturing therapies, we guide women towards greater health, vitality, and fertility.</p>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div style={{ background: 'linear-gradient(to bottom, #f6f1e1, #604e11)', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2>Conclusion</h2>
          <p>Ayurveda's holistic approach to women's health and fertility restores balance and promotes long-term well-being. With the dedicated care and ancient wisdom of Sai Ayurveda, every woman can embrace wellness and vitality.</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default SpecialityWomen