import React from "react";
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
    <div>
      <footer className="p-6">
        <p>&copy; HALOfood 2025. All rights reserved.</p>

        <div className='flex gap-4 justify-end'>
           <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube size={30} color="#cd1111ff"/></a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} color="#1DA1F2" /></a>
           <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} color="#E1306C" /> </a>
        </div>
      </footer>
    </div>
    )
}

export default Footer;