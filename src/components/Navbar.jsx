import React from 'react'

import loginlogo from './AdobeStock_570927296_Preview.jpeg'
import baglogo from './badlogo.png'
import logo from'./logo.png' 


function Navbar() {
  return (
    <>

    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{position:"fixed",top:"0px",right:"0px",left:"0px",zIndex:20}} >
    
  <div className="container-fluid">
  <img src={logo} alt="Logo" style={{height:'80px',width:'200px'}}/>
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="d-flex" role="search">
        <input className="form-control me-2 " style={{paddingLeft:"100px",paddingRight:"120px",marginLeft:"500px",paddingTop:"15px",paddingBottom:"15px",fontSize:"20px"}}type="search" placeholder="Search product here..." aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>

      </form>
      
    </div>
    <ul className='navbar-nav'>
        <li className='nav-item' style={{position:"fixed",right:"80px",top:"20px"}}>
    <a  href="#" style={{cursor:"pointer"}}>
  <img src={loginlogo} style={{height:"50px",width:"50px"}}  />
  </a>
  </li>
  <li className='nav-item'>
  <a  href='#' > <img src={baglogo} style={{height:"35px",width:"35px",position:"fixed",right:"20px",top:"26px"}}  />
  </a>
  </li>
  </ul>
  </div>
 
</nav>

    </>
  )
}

export default Navbar