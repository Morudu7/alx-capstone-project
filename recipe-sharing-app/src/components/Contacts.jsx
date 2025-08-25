import React from "react";
import { useState } from "react";

const Contacts = () => {
    const [formData, setFormData] = useState({message:'', name:'', email:''})

    const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       alert('Sent');
     };

    return (
        <div className='justify-center'>
          <div>
            <h1 className='text-5xl p-6'>CONTACT US</h1>
          </div>

          <hr className="my-8 border-t border-gray-600"/>

         <div>
          <form onSubmit={handleSubmit}>
            <form className='justify-center p-10'>
                <textarea
                name="message"
                placeholder="Write us a message"
                value={formData.message}
                onChange={handleChange}
                className='bg-white flex justify-center items-center h-560 w-1/2 mx-auto pt-6 pr-4 pl-4 rounded-lg shadow-md'
                />
                </form>
                 
                <form className='justify-center p-10'>
                 <label className="font-semibold pr-2">Name:</label>
                <input
                name="name"
                placeholder="Write your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-1/2 mx-auto pt-6 pr-4 pl-4 rounded-lg shadow-md"
                />
                </form>
                
                <form className='justify-center p-10'>
                    <label className="font-semibold pr-2">Email: </label>
                <input
                name="Email"
                placeholder="Enter a valid email"
                value={formData.email}
                onChange={handleChange}
                className="w-1/2 mx-auto pt-6 pr-4 pl-4 rounded-lg shadow-md"
                 />
                 </form>
                
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