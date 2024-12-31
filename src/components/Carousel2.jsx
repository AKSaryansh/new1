import React from 'react';

function Carousel2() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          zIndex: 1,
          top: '220px',
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
                color: '#ff8c00',
                padding: '5px 10px',
                fontWeight: 'bold',
                borderRadius: '5px',
                marginRight: '10px',
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
                  fontSize: '16px',
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
