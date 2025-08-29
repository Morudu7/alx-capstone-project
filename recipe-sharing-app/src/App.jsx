import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage.jsx';
import NavBar from './components/navBar.jsx';
import Recipes from './components/Recipes.jsx';
import About from './components/About.jsx';
import Contacts from './components/Contacts.jsx';
import Footer from './components/Footer.jsx';
import RecipeDetails from './components/RecipeDetails.jsx';
import './index.css';
import './App.css';

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
           <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App
