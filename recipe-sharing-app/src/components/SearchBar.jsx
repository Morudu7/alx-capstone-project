import {useState, useEffect} from 'react'
import RecipeCard from './recipeCard'

const SearchBar = () => {
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('')
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRecipes();
    }, []);

    //fetching the data from the ThemeanDB
    const fetchRecipes = async (searchQuery) => {
       if (!query.trim()) {
            // Don't search if the query is empty
            setRecipes([]);
            return;
        }

        setError(null);
        setRecipes([]); // Clear previous results

        try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json();
        setRecipes(data.meals);
        } catch (error) {
            console.error( "Failed to fetch recipes:", error);
            setError('Could not fetch recipes. Please try again later.');
        };
      };

        // Handles the form submission
    const handleSearch = (e) => {
        e.preventDefault(); // Prevents the page from reloading on form submit
        fetchRecipes(query);
    };

    return (
      <div>
        <div className="max-w-2xl mx-auto mb-10 pt-6" >
          <form onSubmit={handleSearch}  className="relative flex items-center shadow-md rounded-full">
            <input className="w-full py-3 px-6 text-lg text-gray-700 bg-white border-2 border-transparent rounded-full focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-shadow duration-300"
               type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name"

            />
          <div>
          <button className='search-bar inline-block bg-red-500 text-white text-sm font-semibold py-3 px-6 rounded-full hover:bg-red-600 transition-colors duration-200 shadow-lg' type='submit' >Search</button>
        </div>
          </form>
        </div>
         
         <div className="mt-12">
                {error && <p className="text-center text-red-500 text-xl">{error}</p>}


         {/* Grid for Recipe Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {Array.isArray(recipes) && recipes.map((meal) => (
                    <RecipeCard key={meal.idMeal} meal={meal} />
                    ))}
                </div>
                </div>
        </div>
    );
}

export default SearchBar;