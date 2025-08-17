import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Member from './components/Member';
import ContactSection from './components/Contact';
import AboutUs from './components/About';
import Margdarshan from './components/Events/Margdarshan';
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
      <Route path="*" element={<NotFound />} />
    </Routes>


</div>
<Footer />
</>
  )
}

export default App

