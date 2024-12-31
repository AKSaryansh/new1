import React from 'react'
import './Contact.css'
import phone from './phone.png'
import phone3 from './phone-3.png'
import loc from './loc.png'
function Contact() {
  return (
    <>
    <div className='div-top'>
    <div className="maindiv">
  <section className="inner-page-2">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1
            style={{ display: "inline-block" }}
            className="contact-us-title"
          >
            Contact Us
          </h1>
        </div>
      </div>
    </div>
  </section>
  
</div>



<div className='div-form'>
    <div style={{marginLeft:"200px"}}>
    <div className="card" style={{width: "18rem",marginTop:"20px"}}>
  <img src={phone3} className="card-img-top" alt="..." style={{width:"12rem",paddingLeft:"90px",paddingTop:"10px"}}/>
  <div className="card-body">
    <h5 className="card-title">Phone No.</h5>
    <p className="card-text">+91 9529241718</p>
    <h5 className="card-title">Timings.</h5>
    <p className="card-text">Mon-Sun (24/7)</p>
    <a href="#" className="btn btn-primary btn-success">Call</a>
  </div>
</div>
</div>
<div className="contact-form">
              <h2>Send Message to Us</h2>
                <p>If you have any questions simply use the following contact details.</p>
              <form>
                  <div className="row">
                      <div className="col-md-12">
                          <div className="form-group">
                              <input type="text" className="form-control" id="name" placeholder="Full Name"/>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-6">
                          <div className="form-group">
                              <input type="email" className="form-control" id="email" placeholder="Email Id"/>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="form-group">
                              <input type="number" className="form-control" id="phone" placeholder="Mobile"/>
                          </div>
                      </div>
                </div>
                 <div className="row">
                      <div className="col-md-12">
                          <div className="form-group">
                              <textarea style={{fontSize:"20px",borderRadius:"20px"}} className="form-control" placeholder="Message"></textarea>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-12">
                          <div className="form-group">
                              <button className="btn btn-lg-2 btn-primary btnconntact-2">Submit</button>
                          </div>
                      </div>
                  </div>
              </form>
            </div>
            <div style={{marginRight:"150px"}}>
            <div className="card" style={{width: "18rem",marginTop:"20px"}}>
                <img src={loc} className="card-img-top" alt="..." style={{width:"12rem",paddingLeft:"90px",paddingTop:"10px"}}/>
                <div className="card-body">
                    <h5 className="card-title">Address</h5>
                    <p className="card-text">Sai Ayurveda Limited,
                    599-A, Sector 32A, Chandigarh, 160030</p>
                    <a href="#" className="btn btn-primary btn-success">Directions</a>
            </div>
           </div>
            </div>
            </div>
            </div>
    </>
  )
}

export default Contact