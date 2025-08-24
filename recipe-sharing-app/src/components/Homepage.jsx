import React from "react";
import SearchBar from './SearchBar'
import FavourateRecipes from './FavourateRecipes'
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
       <div className='text-5xl p-6'>
        <h1><a style={{color: 'green'}}>HALO</a>food RECIPES</h1>
      </div>

      <div className='bg-white flex justify-center items-center h-560 w-1/2 mx-auto pt-6 pr-4 pl-4 rounded-lg shadow-md'>
        <p> Hey user, welcome to Halo recipes where we offer the best and healthy recipes for you to experiment whith. With the help of our app, it is possible to make mouthwatering food for yourself and also for your familey. </p>
      </div>

      <div>
        <SearchBar/>

        <hr className="my-8 border-t border-gray-600"/>

        <FavourateRecipes />

        <div className="text-center mt-6">
          <button className='inline-block bg-red-500 text-white text-sm font-semibold py-3 px-6 rounded-full hover:bg-red-600 transition-colors duration-200 shadow-lg'>
            <Link to="/Recipes">more recipes</Link>
            </button>
        </div>
      </div>

     <hr className="my-8 border-t border-gray-600"/>

    </div>
  );
}

export default Homepage;