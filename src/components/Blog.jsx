import React from 'react'
import './Blog.css'
import blog1 from './blog-1.jpg'
import blog2 from './blog-2.jpg'
import blog3 from './blog-3.jpg'

function Blog() {
  return (
    <>
    <div className="heading-container" style={{marginTop:"197px"}}>
      <h1 className="heading-text" >BLOG</h1>
    </div>
    <section  className="section-padding">
    <div  className="container">
        <div  className="row">
            <div  className="col-md-4">
               <div  className="blog-div">
                <img src={blog1}/>
                <span>Ayurveda</span>
                <div  className="blog-desc">
                    <ul>
                        <li>July 30, 2020</li>
                        <li>Admin</li>
                    </ul>
                    <h3>Ayurveda, is the best treatment for anything. </h3>
                </div>
               </div>
            </div>
             <div  className="col-md-4">
               <div  className="blog-div">
                <img src={blog2}/>
                <span>Medication</span>
                <div  className="blog-desc">
                    <ul>
                        <li>July 30, 2020</li>
                        <li>Admin</li>
                    </ul>
                    <h3>An ancient medication for all the problems. </h3>
                </div>
               </div>
            </div>
             <div  className="col-md-4">
               <div  className="blog-div">
                <img src={blog3}/>
                <span>Treatments</span>
                <div  className="blog-desc">
                    <ul>
                        <li>July 30, 2020</li>
                        <li>Admin</li>
                    </ul>
                    <h3>Ayurvedic Treatments: The best healing process.</h3>
                </div>
               </div>
            </div>
        </div>
        <div  className="row">
            <div  className="col-md-4">
               <div  className="blog-div">
                <img src={blog1}/>
                <span>Ayurveda</span>
                <div  className="blog-desc">
                    <ul>
                        <li>July 30, 2020</li>
                        <li>Admin</li>
                    </ul>
                    <h3>Ayurveda, is the best treatment for anything. </h3>
                </div>
               </div>
            </div>
             <div  className="col-md-4">
               <div  className="blog-div">
                <img src={blog2}/>
                <span>Medication</span>
                <div  className="blog-desc">
                    <ul>
                        <li>July 30, 2020</li>
                        <li>Admin</li>
                    </ul>
                    <h3>An ancient medication for all the problems. </h3>
                </div>
               </div>
            </div>
             <div  className="col-md-4">
               <div  className="blog-div">
                <img src={blog3}/>
                <span>Treatments</span>
                <div  className="blog-desc">
                    <ul>
                        <li>July 30, 2020</li>
                        <li>Admin</li>
                    </ul>
                    <h3>Ayurvedic Treatments: The best healing process.</h3>
                </div>
               </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Blog