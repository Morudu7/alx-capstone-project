<div className="max-w-2xl mx-auto mb-10 pt-6" >
          <form  className="relative flex items-center shadow-md rounded-full">
            <input className="w-full py-3 px-6 text-lg text-gray-700 bg-white border-2 border-transparent rounded-full focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 transition-shadow duration-300"
            type ="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., Arrabiata, Chicken, Beef..."
            />
            <button className='search-bar' type='submit' >Search</button>
          </form>
        </div>