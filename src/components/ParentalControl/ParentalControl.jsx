import React from 'react';
import image1 from './notifications-icon.png';
import image2 from './parental-control-icon.png';
import { Link } from "react-router-dom";
function ParentalControl() {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-white text-3xl font-bold mb-6">Parental Control</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-extrabold text-gray-300 mb-2">Set Time Limits</h2>
        <p className="text-gray-400 mb-4">Manage how long your child can play games each day.</p>
        <div>
          <button className="bg-pink-600 text-white px-4 py-2 rounded mr-4 hover:bg-pink-700">Set Time Limit</button>
          <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">Lock App</button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center mb-8">
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-extrabold text-gray-300 mb-2">Monitor and Control</h2>
          <p className="text-gray-400">Track your child's online activity, set screen time limits, and block inappropriate content.</p>
        </div>
        <img src={image1} alt="Monitor Control" className="w-40 lg:w-64 rounded-lg" />
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-center mb-8">
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-extrabold text-gray-300 mb-2">Screen Time Management</h2>
          <p className="text-gray-400">Set daily limits and schedules for your child's screen time across all devices.</p>
        </div>
        <img src={image2} alt="Screen Time" className="w-40 lg:w-64 rounded-lg" />
      </div>

      <div className="flex flex-col lg:flex-row items-center mb-8">
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-extrabold text-gray-300 mb-2">App Blocking</h2>
          <p className="text-gray-400">Prevent access to specific apps or categories during study time or bedtime.</p>
        </div>
        <img src={image1} alt="App Blocking" className="w-40 lg:w-64 rounded-lg" />
      </div>

      
      </div>
    
  );
}
export default ParentalControl