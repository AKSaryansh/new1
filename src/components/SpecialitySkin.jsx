import React from 'react'
import { useEffect } from 'react'
import skin1 from './skin1.jpeg'
import skin2 from './skin2.png'

function SpecialitySkin() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
         
    <div style={{ padding: '100px', backgroundColor: '#f4eee1', borderRadius: '10px',marginTop:"160px" }}>
  <h1 style={{ textAlign: 'center', color: '#6B4226' }}>Skin Care through Ayurveda</h1>
  <p style={{ textAlign: 'center', fontStyle: 'italic' }}>Nurturing Skin Health with the Gentle Touch of Sai Ayurveda</p>
  <div className="container mt-5">
    <div className="row">
      <div className="col-md-6 mb-4">
        <div style={{ backgroundColor:"white", padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2>Understanding Skin Health</h2>
          <p>The skin, our body's largest organ, reflects our overall health and well-being. Skin issues such as acne, eczema, and premature aging are often signs of deeper imbalances. Ayurveda provides holistic skin care by addressing these imbalances and promoting natural radiance.</p>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div style={{ backgroundColor:"white", padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2>Ayurvedic View on Skin Care</h2>
          <p>Ayurveda attributes skin problems to imbalances in the <strong>doshas</strong>—Vata (dryness), Pitta (inflammation), and Kapha (oiliness). Detoxifying the body and nourishing the skin can restore balance and enhance skin texture and glow.</p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 mb-4">
        <div style={{ backgroundColor:"white", padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h3>1. Herbal Remedies</h3>
          <ul>
            <li><strong>Neem</strong>: Purifies the blood and treats acne and blemishes.</li>
            <li><strong>Manjistha</strong>: A potent detoxifier that enhances skin glow and reduces pigmentation.</li>
            <li><strong>Aloe Vera</strong>: Hydrates and soothes the skin, promoting healing and reducing inflammation.</li>
            <li><strong>Sandalwood</strong>: Cools the skin, reduces redness, and imparts a natural radiance.</li>
          </ul>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div style={{ backgroundColor:"white", padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h3>2. Panchakarma Therapies</h3>
          <ul>
            <li><strong>Virechana (Detox Therapy)</strong>: Eliminates toxins from the body, promoting clear skin.</li>
            <li><strong>Abhyanga (Oil Massage)</strong>: Nourishes the skin, improves elasticity, and reduces dryness.</li>
            <li><strong>Swedana (Herbal Steam)</strong>: Opens pores, flushes toxins, and rejuvenates the skin.</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12 mb-4">
        <div style={{ backgroundColor:"white", padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h3>3. Diet and Lifestyle for Glowing Skin</h3>
          <p>Eating fresh fruits, vegetables, and hydrating foods enhances skin health. Anti-inflammatory spices like turmeric and fennel help reduce skin flare-ups. Daily yoga and meditation also reduce stress, contributing to youthful, glowing skin.</p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12 mb-4">
        <div style={{ backgroundColor:"white", padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2>Why Trust Sai Ayurveda for Skin Care?</h2>
          <p>At Sai Ayurveda, we understand that beauty begins from within. Our personalized treatments focus on harmonizing the body and mind, ensuring radiant skin that reflects inner health and vitality. We blend time-honored Ayurvedic principles with a compassionate, patient-centered approach.</p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12 mb-4">
        <div style={{ backgroundColor:"white", padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <h2>Conclusion</h2>
          <p>Achieving healthy, glowing skin is possible through the gentle yet powerful methods of Ayurveda. With Sai Ayurveda's expertise, personalized care, and holistic treatments, you can nurture your skin naturally and rediscover your radiance. Embrace the healing touch of Ayurveda for timeless beauty.</p>
        </div>
      </div>
    </div>
  </div>
</div>
      

    </>
  )
}

export default SpecialitySkin