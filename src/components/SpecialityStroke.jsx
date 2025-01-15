import React from 'react';
import { useEffect } from 'react';
import stroke from './stroke1.jpg';
import stroke2 from './stroke2.webp';
import neuro from './neuro1.jpg';

function SpecialityStroke() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ padding: '50px 15px', backgroundColor: '#f4eee1', borderRadius: '10px', marginTop: "120px" }}>
            <h1 style={{ textAlign: 'center', color: '#6B4226', fontSize: '1.5rem' }}>Stroke and Developmental Neurology through Ayurveda</h1>
            <p style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '0.8rem' }}>Healing Through the Wisdom of Sai Ayurveda</p>

            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4">
                        <div className="p-3" style={{fontSize:"0.75rem",  backgroundColor: "white", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <h2 >Understanding Stroke and Neurological Disorders</h2>
                            <p >Stroke and developmental neurological issues affect millions globally, leading to impaired mobility, speech difficulties, and cognitive challenges. Modern medicine often focuses on symptom management, but Ayurveda delves deeper, addressing root imbalances and promoting long-term recovery.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 mb-4">
                        <div className="p-3" style={{fontSize:"0.75rem", backgroundColor: "white", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <h2 >Ayurvedic Perspective on Neurological Disorders</h2>
                            <p >In Ayurveda, neurological conditions are linked to imbalances in <strong>Vata dosha</strong>, responsible for all bodily movements and nervous system functions. Disruptions in Vata can lead to nerve degeneration, blockages, and functional impairments.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4">
                        <div className="p-3" style={{fontSize:"0.75rem",  backgroundColor: "white", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <h3 >1. Herbal Remedies</h3>
                            <ul >
                                <li><strong>Brahmi</strong>: Enhances cognitive function and promotes neural regeneration.</li>
                                <li><strong>Ashwagandha</strong>: Reduces stress, strengthens nerves, and aids recovery.</li>
                                <li><strong>Shankhpushpi</strong>: Boosts memory and mental clarity.</li>
                                <li><strong>Guduchi</strong>: Detoxifies the body and rejuvenates the nervous system.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 mb-4">
                        <div className="p-3" style={{fontSize:"0.75rem",  backgroundColor: "white", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <h3 >2. Panchakarma Therapies</h3>
                            <ul >
                                <li><strong>Nasya (Nasal Therapy)</strong>: Clears toxins from the head region and improves brain function.</li>
                                <li><strong>Shirodhara</strong>: A calming oil therapy that enhances mental clarity and relaxes the nervous system.</li>
                                <li><strong>Abhyanga (Full Body Massage)</strong>: Improves circulation and strengthens muscles and nerves.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 mb-4">
                        <div className="p-3" style={{fontSize:"0.75rem",  backgroundColor: "white", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <h3 >3. Diet and Lifestyle Modifications</h3>
                            <p >A nourishing diet rich in healthy fats, leafy greens, and warming spices like turmeric and ginger is recommended. Regular yoga, pranayama (breathing exercises), and meditation are essential to calm the mind and restore balance to the nervous system.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 mb-4">
                        <div className="p-3" style={{fontSize:"0.75rem",  backgroundColor: "white", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <h2 >Why Choose Sai Ayurveda?</h2>
                            <p >At Sai Ayurveda, we believe in treating every individual with personalized care, addressing not just the physical symptoms but also emotional and spiritual well-being. Our holistic approach ensures that each patient embarks on a journey of complete healing and restoration.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 mb-4">
                        <div className="p-3" style={{fontSize:"0.75rem", backgroundColor: "white", borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <h2 >Conclusion</h2>
                            <p >Stroke and neurological issues can be deeply life-altering, but with the wisdom of Ayurveda and the dedicated care from Sai Ayurveda, recovery and rejuvenation are within reach. Trust the ancient healing sciences to guide you towards a healthier, more vibrant life.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecialityStroke;
