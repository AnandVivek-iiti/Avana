import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Member from './components/Member';
import ContactSection from './components/Contact';
import AboutUs from './components/About';
import Margdarshan from './components/Events/Margdarshan';
import OldAgeVisit from './components/Events/Old_age_visit';
import ClothDonation
 from './components/Events/Cloth_donation';
import BloodDonation from './components/Events/Blood_Donation';
import Diwali from './components/Events/Diwali';
import GallerySection from './components/Gallery';
// import { Linkedin, Instagram } from 'lucide-react';
import NotFound from './components/Notfound'
import './App.css'
import Footer from './components/Footer';
function App() {


  return (
<>
<div className="bg-gradient-to-r from-green-400 to-blue-500 text-white  w-full ">



     <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Member />} />
      <Route path="/contact" element={<ContactSection />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/events/margdarshan" element={<Margdarshan />} />
      <Route path="/events/old-age-visit" element={<OldAgeVisit />} />
      <Route path="/events/cloth-donation" element={<ClothDonation />} />
      <Route path="/events/blood-donation" element={<BloodDonation />} />
      <Route path="/events/diwali-celebration" element={<Diwali />} />
      <Route path="/gallery" element={<GallerySection />} />
      <Route path="*" element={<NotFound />} />
    </Routes>


</div>
<Footer />
</>
  )
}

export default App

