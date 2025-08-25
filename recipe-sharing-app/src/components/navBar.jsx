import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='font-bold'>
          <ul  className='flex gap-4 justify-end'> 
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Recipes">Recipes</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contacts">Contacts</Link></li>
          </ul>
        </div>
    );
}

export default NavBar;