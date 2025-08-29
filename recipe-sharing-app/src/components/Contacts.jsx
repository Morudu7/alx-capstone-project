import React from "react";
import { useState } from "react";
import { FaPhone} from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

const Contacts = () => {
    const [formData, setFormData] = useState({message:'', name:'', email:''})
     const [errors, setErrors] = useState({});

    const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

         // Function to validate the form data
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";
        
        return newErrors;
    }

     const handleSubmit = (e) => {
       e.preventDefault();
       alert('Sent')
    }
    
    return (
        <div className='justify-center'>
          <div>
            <h1 className='text-5xl p-6'>CONTACT US</h1>
          </div>
         
         {/* Group of contact details with icons */}
         <div className='flex flex-col sm:flex-row gap-8 justify-center items-center pt-6'>
         <div className="flex items-center gap-2">
          <FaPhone size={25} color="#1DA1F2" />
         <p>012 345 6789</p>
         </div>

         <div className="flex items-center gap-2">
         <MdEmail size={25} color="#E1306C" />
         <a href="mailto:HALOfood@examplegmail.com" className="hover:underline">
          HALOfood@examplegmail.com
          </a>
         </div>
         </div>

          <hr className="my-8 border-t border-gray-600"/>

         <div>
          {/* form that let users send us message or feed-back */}
          <form onSubmit={handleSubmit} className=" bg-gray-300 p-6 rounded-lg shadow-md hover:shadow-lg w-1/2 mx-auto transition-shadow duration-300">
            <div className='justify-center p-10 '>
                <textarea
                name="message"
                placeholder="Write us a message"
                value={formData.message}
                onChange={handleChange}
                className='bg-white flex justify-center items-center h-560 w-1/2 mx-auto pt-6 pr-4 pl-4 rounded-lg shadow-md w-full'
                />
                 {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                 
                <div className='justify-center p-10'>
                 <label className="font-semibold pr-2">Name:</label>
                <input
                name="name"
                placeholder="Write your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-1/2 mx-auto pt-6 pr-4 pl-4 rounded-lg shadow-md w-full"
                />
                 {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div className='justify-center p-10'>
                    <label className="font-semibold pr-2">Email: </label>
                <input
                name="email"
                placeholder="Enter a valid email"
                value={formData.email}
                onChange={handleChange}
                className="w-1/2 mx-auto pt-6 pr-4 pl-4 rounded-lg shadow-md w-full"
                 />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                 </div>
                
                <div>
                <button type="submit" className='inline-block bg-red-500 text-white text-sm font-semibold py-3 px-6 rounded-full hover:bg-red-600 transition-colors duration-200 shadow-lg'>Send</button>
                </div>
          </form>
          </div>

         <hr className="my-8 border-t border-gray-600"/>

        </div>
    )
}

export default Contacts;