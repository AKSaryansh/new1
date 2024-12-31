import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Carousel from './components/Carousel'
import Carousel2 from './components/Carousel2'
import Specialities from './components/Specialities'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Routes, Route, Link, useNavigate,useParams,useMatch
} from 'react-router-dom'
import Aboutus from './components/Aboutus'
import Blog from './components/Blog'
import Contact from './components/Contact'
import SpecialityNeck from './components/SpecialityNeck'
import SpecialityStroke from './components/SpecialityStroke'
import SpecialitySkin from './components/SpecialitySkin'
import SpecialityWomen from './components/SpecialityWomen'
import SpecialityRheuma from './components/SpecialityRheuma'
import SpecialityMedicine from './components/SpecialityMedicine'
import TestimonialMain from './components/TestimonialsMain'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<><Navbar/>
      <Navbar2/>
      <Carousel/>
      <Carousel2/>
      <Specialities/>
      <Testimonials/>
      <Footer/></>}></Route>
      <Route path='/About' element={<><Navbar/><Navbar2/><Aboutus/></>}></Route>
      <Route path='/Blog' element={<><Navbar/><Navbar2/><Blog/></>}></Route>
      <Route path='/Contact' element={<><Navbar/><Navbar2/><Contact/></>}></Route>
      <Route path='/Speciality/Neck' element={<><Navbar/><Navbar2/><SpecialityNeck/></>}></Route>
      <Route path='/Speciality/Stroke' element={<><Navbar/><Navbar2/><SpecialityStroke/></>}></Route>
      <Route path='/Speciality/Skin' element={<><Navbar/><Navbar2/><SpecialitySkin/></>}></Route>
      <Route path='/Speciality/Women' element={<><Navbar/><Navbar2/><SpecialityWomen/></>}></Route>
      <Route path='/Speciality/Rheuma' element={<><Navbar/><Navbar2/><SpecialityRheuma/></>}></Route>
      <Route path='/Speciality/Medicines' element={<><Navbar/><Navbar2/><SpecialityMedicine/></>}></Route>
      <Route path='/Testimonials' element={<><Navbar/><Navbar2/><TestimonialMain/></>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
