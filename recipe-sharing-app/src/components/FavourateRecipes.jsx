import React from "react";
import { useState, useEffect} from 'react';
import RecipeCard from './recipeCard.jsx';


const FavourateRecipes = () => {
    const [recipes , setRecipes] = useState([])
    const [ error, setError] = useState(null)

    useEffect (() => {
        fetchRecipes();
    },[])

    //fetching data from the API
    const fetchRecipes = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`);
            const data = await response.json();
            setRecipes(data.meals.slice(0, 8));
            
        } catch (error) {
            console.erro("Faild to fetch favourate Recipes", error)
            setError("Could not fetch recipes, Please try again later!")
            
        };
    }
    return (
       //Grid for Recipe Cards 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array.isArray(recipes) && recipes.map((meal) => (
        <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
        </div>
    );
}

export default FavourateRecipes;