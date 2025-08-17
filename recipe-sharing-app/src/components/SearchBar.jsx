import {useState, useEffect} from 'react'

const SearchBar = () => {
    const recipes = 'https://www.themealdb.com/api/json/v1/1/search.php?s=${query}'

    useEffect(() => {
        getRecipes();
    }, []);

    //fetching the data from the ThemeanDB
    const getRecipes = async() => {
        const response =await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=${query}');
        const meals = response.json();
        console.log(meals);
    }

    return (
        <div className="max-w-2xl mx-auto mb-10 pt-6" >
          <form  className="relative flex items-center shadow-md rounded-full">
            <input className="w-full py-3 px-6 text-lg text-gray-700 bg-white border-2 border-transparent rounded-full focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-shadow duration-300"/>
            <button className='search-bar' type='submit' >Search</button>
          </form>
        </div>
    );
}

export default SearchBar;