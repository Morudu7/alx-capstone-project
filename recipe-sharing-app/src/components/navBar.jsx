import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='bg-gray-300 rponded-lg h-10 font-bold'>
          <ul  className='flex gap-4 justify-end'> 
            <li className="hover:underline"><Link to="/">Home</Link></li>
            <li  className="hover:underline"><Link to="/Recipes">Recipes</Link></li>
            <li  className="hover:underline"><Link to="/About">About</Link></li>
            <li  className="hover:underline"><Link to="/Contacts">Contacts</Link></li>
          </ul>
        </div>
    );
}

export default NavBar;