// src/RecipeCard.js
import React from 'react';
import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found' }}
            />
            <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-gray-800">{meal.strMeal}</h3>
                <p className="text-gray-600 text-sm mb-3">
                    <span className="font-semibold">Category:</span> {meal.strCategory}
                </p>
               
               <Link
                    to={`/recipe/${meal.idMeal}`}
                    className="inline-block bg-green-500 text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-green-600 transition-colors duration-200"
                >
                    View Recipe
              </Link>
            </div>
        </div>
    );
};

export default RecipeCard;