import React from "react";

const About = () => {
    return (
       <div>
        <div>
            <h1 className='text-5xl p-6'>About us</h1>
        </div>

         <hr className="my-8 border-t border-gray-600"/>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 text-left'>

            <div className="p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-slate-800 mb-4"> Our Story</h2>
            <p>
             It all started with a simple, universal problem: a cherished family recipe scribbled on a fading index card, a brilliant dinner idea lost in a sea of browser tabs, and the endless search for that one perfect pancake recipe you saw months ago.
             Food is about more than just sustenance; it's about culture, memory, and connection. Yet, our most treasured recipes were scattered, disorganized, and often hard to share.
            </p>
            <p>We knew there had to be a better way to bring the heart of the kitchen into the digital age.
             That is why we created <strong>HALOfood</strong>.
            </p>
            </div>

            <div className="p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h2>
            <p>
             Our mission is to make cooking a more joyful, shared, and accessible experience for everyone. We aim to empower home cooks by providing them with the tools to organize their culinary world, preserve their traditions, and connect with a global community of food lovers.
            </p>
            </div>

            <div className="p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">What We Believe</h2>
            <p>
             Cooking is Connection. A shared meal can build bridges between generations, cultures, and friends. We designed <strong>HALOfood</strong> to be the platform for those connections to flourish.
             Every Recipe Tells a Story. From your grandmother's secret pasta sauce to your own modern twist on a classic dessert, every recipe has a history. We provide a space to not only share instructions but to tell the story behind the dish.
             Simplicity is Key. In a world of clutter, we believe in clean, intuitive design.
            </p>
            </div>

        </div>
         <hr className="my-8 border-t border-gray-600"/>
    </div>
    )
}

export default About;