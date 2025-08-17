import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Member from './components/Member';
// import { Linkedin, Instagram } from 'lucide-react';
import NotFound from './components/Notfound'
import './App.css'
function App() {


  return (
<>
<div className="bg-gradient-to-r from-green-400 to-blue-500 text-white  w-full h-screen">



     <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/member" element={<Member />} />
      <Route path="*" element={<NotFound />} />
    </Routes>


</div>
</>
  )
}

export default App

