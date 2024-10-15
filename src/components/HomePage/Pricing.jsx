import React from 'react';

const Pricing = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-200 sm:text-5xl lg:text-6xl mb-8">
          Gaming Record Keeper Pricing
        </h1>
        <p className="text-xl text-cyan-500">
          Choose a plan that suits your needs and start tracking your gaming records effectively.
        </p>
      
      
      <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:max-w-7xl lg:mx-auto">
       
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold underline text-gray-800 mb-4">Basic Plan</h2>
          <p className="text-pink-600 font-bold mb-4">Free</p>
          <ul className="text-gray-900 text-center space-y-2 mb-6">
            <li>Track up to 5 games</li>
            <li>Basic game statistics</li>
            <li>Limited parental controls</li>
          </ul>
          <button className="w-full bg-green-400 text-black py-2 rounded-md hover:bg-pink-700 transition">
            Get Started
          </button>
        </div>

        
        <div className="bg-white border border-pink-600 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 underline mb-4">Pro Plan</h2>
          <p className="text-pink-600 text-lg  font-bold mb-4">Rs.159.99/month</p>
          <ul className="text-gray-900 space-y-2 text-center mb-6">
            <li>Unlimited game tracking</li>
            <li>Advanced game statistics</li>
            <li>Custom alerts & reports</li>
            <li>Full parental control features</li>
          </ul>
          <button className="w-full bg-green-400 text-black py-2 rounded-md hover:bg-pink-700 transition">
            Upgrade Now
          </button>
        </div>

        
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 underline mb-4">Premium Plan</h2>
          <p className="text-pink-600 font-bold  mb-4">Rs.299.99/month</p>
          <ul className="text-gray-900 space-y-2 text-center mb-6">
            <li>All Pro Plan features</li>
            <li>Priority support</li>
            <li>Custom game tracking features</li>
            <li>Personalized parental controls</li>
          </ul>
          <button className="w-full bg-green-400 text-black py-2 rounded-md hover:bg-pink-700 transition">
            Go Premium
          </button>
        </div>
      </div>
      
    </div>
    
  </div>
  );
}

export default Pricing;
