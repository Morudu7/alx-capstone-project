import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage'
import NavBar from './components/navBar';
import Recipes from './components/Recipes'
import About from './components/About'
import Contacts from './components/Contacts'
import Footer from './components/Footer';
import './index.css'
import './App.css'

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      
        <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="Recipes" element={<Recipes />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App
