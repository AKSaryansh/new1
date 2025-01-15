import React from 'react'
import './Blog.css'
import blog1 from './blog-1.jpg'
import blog2 from './blog-2.jpg'
import blog3 from './blog-3.jpg'

function Blog() {
    return (
        <>
            <div className="heading-container" >
                <h1 className="heading-text">BLOG</h1>
            </div>
            <section className="section-padding">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                        {[...Array(6)].map((_, index) => (
                            <div className="col" key={index}>
                                <div className="blog-div h-100">
                                    <img 
                                        src={index % 3 === 0 ? blog1 : index % 3 === 1 ? blog2 : blog3}
                                        alt={`Blog ${index + 1}`}
                                        className="img-fluid"
                                    />
                                    <span>{index % 3 === 0 ? 'Ayurveda' : index % 3 === 1 ? 'Medication' : 'Treatments'}</span>
                                    <div className="blog-desc">
                                        <ul className="list-unstyled d-flex gap-3">
                                            <li>July 30, 2020</li>
                                            <li>Admin</li>
                                        </ul>
                                        <h3 className="blog-title">
                                            {index % 3 === 0 
                                                ? "Ayurveda, is the best treatment for anything."
                                                : index % 3 === 1 
                                                    ? "An ancient medication for all the problems."
                                                    : "Ayurvedic Treatments: The best healing process."
                                            }
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog