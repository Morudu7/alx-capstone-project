import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetails = () => {
    // Get the meal ID from the URL
    const { id } = useParams();
    const navigate = useNavigate();

    const [meal, setMeal] = useState(null);
    const [error, setError] = useState(null)

// Fetch the recipe details from the API using its ID
    useEffect(() => {
         fetchRecipe();
    }, [id]); // This effect runs whenever the ID in the URL changes
  
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await response.json();
                if (data.meals) {
                    setMeal(data.meals[0]);
                }
            } catch (error) {
                console.error("Error fetching recipe details:", error);
                setError("Could not fetch recipe details, Please try again later!")
            }
        };


    // Helper to get all ingredients and their measurements
    const getIngredients = (recipe) => {
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = recipe[`strIngredient${i}`];
            const measure = recipe[`strMeasure${i}`];
            if (ingredient && ingredient.trim()) {
                ingredients.push(`${measure} ${ingredient}`);
            }
        }
        return ingredients;
    };

    // Show a message if the recipe couldn't be found
    if (!meal) {
        return <div className="p-6">Recipe not found.</div>;
    }

    const ingredientsList = getIngredients(meal);

    return (
        <div>
            <br className="p-4" />
        <div className="bg-gray-300 hover:shadow-lg p-4 pt-6 sm:p-6 max-w-3xl mx-auto rounded-lg">
                <h1 className="text-4xl font-bold mb-4">{meal.strMeal}</h1>
            <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-auto rounded-lg shadow-md mb-4"
            />

            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-start mb-4">
                {ingredientsList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

             <hr className="my-8 border-t border-gray-600"/>

            <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
            {/* We add a `whitespace-pre-wrap` class to respect newlines from the API */}
            <p className="whitespace-pre-wrap text-start">{meal.strInstructions}</p>

             <hr className="my-8 border-t border-gray-600"/>
                
                {/* A link to the themealdb */}
                <div className="p-6">
                    <p>Visit the official site for more details</p>
                  <a
                    href={meal.strSource || `https://www.themealdb.com/meal/${meal.idMeal}`}
                    target='_blank'
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-green-600 transition-colors duration-200"
                >
                    https://www.themealdb.com/meal/${meal.idMeal}
                </a>
                
                </div>

                
             {/* A button to go back to the recipe page */}
            <button
                onClick={() => navigate(-1)}
                className="bg-green-300 py-2 px-4 rounded-lg mb-4 hover:bg-green-400"
            >
             &larr; Back to recipes
            </button>
        </div>


        <hr className="my-8 border-t border-gray-600"/>
        </div>
    );
};

export default RecipeDetails;