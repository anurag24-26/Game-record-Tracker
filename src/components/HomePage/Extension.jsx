import React from 'react';
import { Link } from "react-router-dom";
import image1 from './extension.png'
function Extension() {
  return (
    <div className="flex flex-col items-center text-center py-12 bg-slate-800 text-white min-h-screen">
      <h1 className="text-5xl font-extrabold text-pink-500 mb-8">Introducing Our Extension</h1>
      
      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center">
        {/* Add your image here */}
        <div className="flex-1 mb-8 md:mb-0">
          <img src={image1} alt="Extension" className="w-3/4 max-w-sm mx-auto rounded-lg border-4 border-black" />
        </div>
        
        <div className="flex-1 text-left p-4">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">Manage Your Online Experience</h2>
          <p className="text-lg mb-6">Our extension helps you monitor and control your game usage effectively. Set timers, block websites when time limits are exceeded, and track your progress in real-time.</p>
          <p className="text-lg mb-6">Stay informed about your gaming habits and make sure you stay balanced with technology. Control it your way!</p>
          <Link to="/game-tracker" className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition duration-300">
            Start Tracking
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Extension;
