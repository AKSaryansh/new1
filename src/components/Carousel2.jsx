import React from 'react';

function Carousel2() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          zIndex: 1,
          top: '0px',
          backgroundColor: '#583f13', // Red background
          color: '#fff', // White text
          padding: '10px 0',
        }}
      >
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            {/* "Important Information" Section */}
            <div
              style={{
                backgroundColor: '#fff',
                color: 'black',
                padding: '5px 10px',
                width:"400px",
                fontWeight: 'bold',
                borderRadius: '5px',
                marginRight: '10px',
                fontSize:"27px",
                fontFamily:"Agu Display"
              }}
            >
              Important Information
            </div>
            {/* News Marquee */}
            <div className="container">
              <marquee
                className="news-marquee"
                style={{
                  fontWeight: 'bold',
                  fontSize: '20px',

                  color: '#fff',
                  whiteSpace: 'nowrap',
                }}
              >
                Please make unboxing video at the time of opening of the box to
                claim missing and damaged items.
              </marquee>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Carousel2;
