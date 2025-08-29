import React from "react";
import { useState, useEffect } from 'react';
import RecipeCard from './recipeCard.jsx';

const Recipes = () => {
    const [areas, setAreas] = useState([])
    const [recipes, setRecipes] = useState([])
    const [activeAreas, setActiveAreas] =useState("");
    const [error, setError] = useState(null)

      //Fetching Areas/names of countries for our recipes
    useEffect (() => {
        fetchAreas();
    },[])
    
    const fetchAreas = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
            const data = await response.json();
            setAreas(data.meals.slice(0, 10))
            setActiveAreas(data.meals[0].strArea)
        } catch (error) {
            console.error("Faild to fetch Areas", error);
            setError("Could not Fetch Areas, Please try again later!");
            
        }
    }

        //fetching recipes for the areas
        useEffect (() => {
            activeAreas && fetchRecipes();
        },[activeAreas])

        const fetchRecipes = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${activeAreas}`)
                const data = await response.json();
                setRecipes(data.meals.slice(0, 20))
            } catch (error) {
                console.error("Faild to fetch Recipes", error);
                setError("Could not Fetch Recipes, Please try again later!");
            }
        
    }
    return (
    <div>

        <div>
            <h1 className='text-5xl p-6'>More Recipes</h1>
        </div>
        
      <div className=' p-6 pt-2'>
        <h2>Checkout different recipes from different countries</h2>
        </div>

    <div className=" bg-gray-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-6 shadow-md hover:shadow-lg transition-shadow rounded-lg">
        {areas.map ((areas) => 
        <div className="bg-green-500 text-bold border-2 border-transparent hover:underline  hover:bg-green-700 rounded-lg"
        key= {areas.idareas}
        onClick = {() => setActiveAreas(areas.strArea)}
        >
            {areas.strArea}
        </div>
        )}
    </div>

     <hr className="my-8 border-t border-gray-600"/>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array.isArray(recipes) && recipes.map((meal) => (
        <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
        </div>
      
      <hr className="my-8 border-t border-gray-600"/>

    </div>
    );
}

export default Recipes;