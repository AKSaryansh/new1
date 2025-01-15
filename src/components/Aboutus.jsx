import React, { useState } from 'react';
import './Aboutus.css';
import img1 from './pic-abt1.jpg';
import img2 from './pic-abt2.jpg';
import doc1 from './doctor-1.jpg'
import spa from './spa.jpg'
import director from './director.jpg'


function Aboutus() {
  const [activeTab, setActiveTab] = useState('Section1');

  const handleTabClick = (section) => {
    setActiveTab(section);
    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <>
      <div className="about-section" style={{ marginTop: "200px" }}>
        <section className="inner-page">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>About Us</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="abt-desc">
                <h2>Welcome to Sai Ayurveda clinic</h2>
                <p>Ayurveda, known from ancient times is a very well renowned therapy for every type of disease or any treatment to be cured by using oils and paste which is made from plants. The word Ayurveda is a combination of two Sanskrit words 'ayus', meaning 'life' and 'Veda', meaning 'science', thus Ayurveda means the 'science of life.’ We are a multi-specialty hospital dealing in the treatments with Ayurveda. Here, the oils or the paste which are being used during the treatments are made from scratch.</p>
                <p>We keep in mind patients' health and allergic conditions. Other than the treatment we also provide spa to the necessary patients. For keeping them fresh and calm. At Ayurveda Hospital, we have a team of experts that handles all the problems and treatment.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="abt-img">
                <img src={img1} alt="Ayurveda" />
              </div>
            </div>
          </div>
          <div className="row pt50">
            <div className="col-md-12">
              <div className="about-sec">
                <div className="tab" role="tabpanel">
                  <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className={activeTab === 'Section1' ? 'active' : ''}>
                      <a href="javascript:void(0)" onClick={() => handleTabClick('Section1')}>WHY CHOOSE US</a>
                    </li>
                    <li role="presentation" className={activeTab === 'Section3' ? 'active' : ''}>
                      <a href="javascript:void(0)" onClick={() => handleTabClick('Section3')}>ASSOCIATES</a>
                    </li>
                    <li role="presentation" className={activeTab === 'Section4' ? 'active' : ''}>
                      <a href="javascript:void(0)" onClick={() => handleTabClick('Section4')}>DIRECTOR'S MESSAGE</a>
                    </li>
                    <li role="presentation" className={activeTab === 'Section5' ? 'active' : ''}>
                      <a href="javascript:void(0)" onClick={() => handleTabClick('Section5')}>Our Doctors</a>
                    </li>
                  </ul>
                  <div className="tab-content tabs">
                    <div role="tabpanel" className={`tab-pane fade ${activeTab === 'Section1' ? 'active in' : ''}`} id="Section1">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="abt-img">
                            <img src={img2} alt="Why Choose Us" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h3>About Ayurveda</h3>
                          <p>Ayurveda Hospital is one of the biggest hospitals in the sector of Ayurveda.</p>
                          <ul>
                            <li>* Multi-specialty hospital</li>
                            <li>* All facilities are available under one roof.</li>
                            <li>* Medicines are made from scratch.</li>
                            <li>* Expert team of doctors from all over the state.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" className={`tab-pane fade ${activeTab === 'Section3' ? 'active in' : ''}`} id="Section3">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="abt-img">
                            <img src={spa} alt="Associates" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h3>ASSOCIATES</h3>
                          <p>We keep in mind patients' health and allergic conditions. Other than the treatment we also provide spa to the necessary patients. For keeping them fresh and calm. At Ayurveda Hospital, we have a team of experts that handles all the problems and treatment.</p>
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" className={`tab-pane fade ${activeTab === 'Section5' ? 'active in' : ''}`} id="Section5">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="abt-img">
                            <img className='doc-img' src={doc1} alt="Associates" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h3>Dr. Shubra Srivastava</h3>
                          <p>At Sai Ayurveda Clinic, our doctors see beyond symptoms — they see stories. Each patient is a reflection of nature’s delicate balance, and our mission is to restore that harmony. Guided by the timeless wisdom of Ayurveda, we blend compassion with knowledge, crafting treatments rooted in nature’s essence. Health is not just the absence of illness, but a journey toward wholeness, and we walk that path with you.</p>
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" className={`tab-pane fade ${activeTab === 'Section4' ? 'active in' : ''}`} id="Section4">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="abt-img">
                            <img src={director} alt="Director's Message" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h3>DIRECTOR'S MESSAGE</h3>
                          <p>Ayurveda, known from ancient times is a very well renowned therapy for every type of disease or any treatment to be cured by using oils and paste which is made from plants. The word Ayurveda is a combination of two Sanskrit words 'ayus', meaning 'life' and 'Veda', meaning 'science', thus Ayurveda means the 'science of life.’ We are a multi-specialty hospital dealing in the treatments with Ayurveda. Here, the oils or the paste which are being used during the treatments are made from scratch.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
