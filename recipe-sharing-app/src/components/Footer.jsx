import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
    <div>
      <footer className="p-6">
        <p>&copy; HALOfood 2025. All rights reserved.</p>

        <div className='flex gap-4 justify-end'>
            <FaFacebook size={30} color="#3b5998" />
            <FaTwitter size={30} color="#1DA1F2" />
            <FaInstagram size={30} color="#E1306C" />
        </div>
      </footer>
    </div>
    )
}

export default Footer;