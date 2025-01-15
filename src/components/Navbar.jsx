import React from 'react'
import loginlogo from './AdobeStock_570927296_Preview.jpeg'
import baglogo from './badlogo.png'
import logo from './logo.png'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ position: "fixed", top: "0", right: "0", left: "0", zIndex: 20 }}>
                <div className="container-fluid">
                    {/* Logo */}
                    <img src={logo} alt="Logo" style={{ height: '60px', width: 'auto', maxWidth: '150px' }} />

                    {/* Hamburger menu */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar content */}
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        {/* Search form */}
                        <form className="d-flex my-2 my-lg-0 mx-auto" role="search" style={{ maxWidth: '600px', width: '100%' }}>
                            <div className="input-group">
                                <input 
                                    className="form-control" 
                                    type="search" 
                                    placeholder="Search product here..." 
                                    aria-label="Search"
                                    style={{
                                        fontSize: '16px',
                                        padding: '10px 15px',
                                    }}
                                />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </div>
                        </form>
                    </div>

                    {/* Icons */}
                    <div className="d-flex align-items-center">
                        <a href="#" className="me-3 d-flex align-items-center">
                            <img 
                                src={loginlogo} 
                                alt="Login"
                                style={{
                                    height: '40px',
                                    width: '40px',
                                    objectFit: 'cover'
                                }}
                            />
                        </a>
                        <a href="#" className="d-flex align-items-center">
                            <img 
                                src={baglogo} 
                                alt="Cart"
                                style={{
                                    height: '25px',
                                    width: '25px',
                                    objectFit: 'contain',
                                    
                                }}
                            />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar