import React from 'react';
import './Contact.css';
import phone3 from './phone-3.png';
import loc from './loc.png';
import logo from './logo.png';

function Contact() {
  return (
    <>
      <div className="div-top" style={{marginTop:"150px"}}>
        <div className="maindiv">
          <section className="inner-page-2">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="contact-us-title">Contact Us</h1>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="cards-row">
          {/* Phone Card */}
          <div className="card" style={{ width: '18rem',marginTop:"10px" }}>
            <img
              src={phone3}
              className="card-img-top"
              alt="Phone Icon"
              style={{ width: '8rem', margin: '10px auto' }}
            />
            <div className="card-body">
              <h5 className="card-title">Phone No.</h5>
              <p className="card-text">+91 9529241718</p>
              <h5 className="card-title">Timings.</h5>
              <p className="card-text">Mon-Sun (24/7)</p>
              <a href="#" className="btn btn-primary btn-success">Call</a>
            </div>
          </div>



          {/* Message Form Card */}
          <div className="card" style={{ width: '32rem', padding: '20px' }}>
            <img
              src={logo}
              className="card-img-top"
              alt="Logo"
              style={{ width: '200px', margin: '10px auto' }}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ textAlign: 'center' }}>Send Message to Us</h5>
              <p className="card-text">If you have any questions, simply use the form below.</p>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Full Name" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email Id" />
                </div>
                <div className="form-group">
                  <input type="number" className="form-control" placeholder="Mobile" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Message" style={{ height: '100px' }} />
                </div>
                <button className="btn btn-primary btn-success btn-block">Submit</button>
              </form>
            </div>
          </div>

                    {/* Location Card */}
                    <div className="card" style={{ width: '18rem',marginTop:"30px" }}>
            <img
              src={loc}
              className="card-img-top"
              alt="Location Icon"
              style={{ width: '12rem', margin: '10px auto' }}
            />
            <div className="card-body">
              <h5 className="card-title">Address</h5>
              <p className="card-text">
                Sai Ayurveda Limited,
                <br />
                599-A, Sector 32A, Chandigarh, 160030
              </p>
              <a href="#" className="btn btn-primary btn-success">Directions</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
