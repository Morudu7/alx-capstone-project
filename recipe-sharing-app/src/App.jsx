import { useState } from 'react';
import NavBar from './components/navBar';
import SearchBar from './components/SearchBar'
import './index.css'
import './App.css'

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className='text-5xl p-6'>
        <h1><a style={{color: 'green'}}>HALO</a>food RECIPES</h1>
      </div>

      <div className='bg-white flex justify-center items-center h-560 w-1/2 mx-auto pt-6 pr-4 pl-4'>
        <p>Welcome to Halo recipes where we offer the best and healthy recipes for you</p>
      </div>

      <div>
        <SearchBar/>
      </div>
      
    </div>
  );
}

export default App
