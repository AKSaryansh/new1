import React from 'react';
import './Contact.css';
import { useRef } from 'react';
import phone3 from './phone-3.png';
import loc from './loc.png';
import logo from './logo.png';
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();
  const handleGetDirections = () => {
    const googleMapsLink = "https://www.google.com/maps/dir/?api=1&destination=30.7119518,76.7774242";
    window.open(googleMapsLink, '_blank');
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sai_ayurveda', 'template_5827y57', form.current, {
        publicKey: 'M4zX6pp7p8TBf0GaH',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();  
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Could not send your message. Please try again in some time!")
        },
      );
  };


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
              <button href="#" className="btn btn-primary btn-success">Call</button>
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
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <input type="text" name='from_name' className="form-control" placeholder="Full Name" />
                </div>
                <div className="form-group">
                  <input type="email" name='from_email' className="form-control" placeholder="Email Id" />
                </div>
                <div className="form-group">
                  <input type="number" name='from_mobile' className="form-control" placeholder="Mobile" />
                </div>
                <div className="form-group">
                  <textarea name='message' className="form-control" placeholder="Message" style={{ height: '100px' }} />
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
              <button onClick={handleGetDirections} className="btn btn-primary btn-success">Directions</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
