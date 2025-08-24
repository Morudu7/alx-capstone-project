import React from "react";
import { useState, useEffect} from 'react'

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [error, setError] = useState(null)

    useEffect (() => {
        fetchRecipes();
    },[])

    const fetchRecipes = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
            const data = await response.json();
            console.log(data)
        } catch (error) {
            console.error("Faild to fetch Recipes", error);
            setError("Could not Fetch Recipes, Please try again later!");
            
        }
    }
    return (
        <div>
           <div>Recipes</div>
        </div>
    );
}

export default Recipes;