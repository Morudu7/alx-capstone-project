import React from "react";

const NavBar = () => {
    return (
        <div className='font-bold'>
          <ul  className='flex gap-4 justify-end'> 
            <li>About</li>
            <li>Recipe</li>
            <li>Contacts</li>
          </ul>
        </div>
    );
}

export default NavBar;