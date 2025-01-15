import React from 'react';
import { useEffect } from 'react';

function SpecialityWomen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div style={{ padding: '50px 15px', backgroundColor: '#f4eee1', borderRadius: '10px', marginTop: '170px' }}>
                <h1 style={{ textAlign: 'center', color: '#6B4226', fontSize: '1.5rem' }}>Women's Health and Fertility through Ayurveda</h1>
                <p style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '0.8rem' }}>Empowering Wellness with Sai Ayurveda</p>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4">
                            <div style={{ fontSize:"0.75rem", backgroundColor: "white",  padding: '8px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                <h2 >Understanding Women's Health and Fertility</h2>
                                <p >Women's health encompasses physical, emotional, and hormonal balance, all crucial for overall well-being and fertility. Ayurveda provides natural, holistic solutions to address menstrual issues, hormonal imbalances, and reproductive health, promoting harmony within the body.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 mb-4">
                            <div style={{fontSize:"0.75rem", backgroundColor: "white",  padding: '8px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                <h2 >Ayurvedic Perspective on Women's Health</h2>
                                <p >Ayurveda associates women's health with the balance of <strong>Shukra dhatu</strong> (reproductive tissue) and <strong>Rasa dhatu</strong> (nutrient plasma). Imbalances in <strong>Vata, Pitta,</strong> and <strong>Kapha</strong> doshas can lead to menstrual irregularities, infertility, and menopausal discomforts.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4">
                            <div style={{fontSize:"0.75rem", backgroundColor: "white",  padding: '8px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                <h2 >Comprehensive Care at Sai Ayurveda</h2>
                                <h3 >1. Herbal Remedies</h3>
                                <ul >
                                    <li><strong>Shatavari</strong>: Enhances reproductive health and balances hormones.</li>
                                    <li><strong>Ashoka</strong>: Supports menstrual health and reduces cramps.</li>
                                    <li><strong>Lodhra</strong>: Regulates hormonal imbalances and improves uterine health.</li>
                                    <li><strong>Guduchi</strong>: Detoxifies the body and boosts immunity.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 mb-4">
                            <div style={{ fontSize:"0.75rem",backgroundColor: "white",  padding: '8px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                <h3 >2. Panchakarma Therapies</h3>
                                <ul >
                                    <li><strong>Udvartana (Herbal Powder Massage)</strong>: Enhances circulation and detoxifies tissues.</li>
                                    <li><strong>Yoni Pichu</strong>: Rejuvenates and nourishes the reproductive organs.</li>
                                    <li><strong>Abhyanga</strong>: Aids in stress reduction and improves overall vitality.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 mb-4">
                            <div style={{fontSize:"0.75rem", backgroundColor: "white",  padding: '8px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                <h3 >3. Diet and Lifestyle Recommendations</h3>
                                <p >A balanced diet rich in whole grains, fresh vegetables, and healthy fats nourishes the reproductive system. Regular yoga and meditation promote emotional balance, enhancing fertility and menstrual health.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4">
                            <div style={{fontSize:"0.75rem", backgroundColor: "white",  padding: '8px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                <h2 >Why Choose Sai Ayurveda?</h2>
                                <p >Sai Ayurveda offers personalized treatment plans, honoring the uniqueness of every woman’s body. By focusing on natural healing and nurturing therapies, we guide women towards greater health, vitality, and fertility.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 mb-4">
                            <div style={{ fontSize:"0.75rem",backgroundColor: "white",  padding: '8px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                <h2 >Conclusion</h2>
                                <p>Ayurveda's holistic approach to women's health and fertility restores balance and promotes long-term well-being. With the dedicated care and ancient wisdom of Sai Ayurveda, every woman can embrace wellness and vitality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SpecialityWomen;
