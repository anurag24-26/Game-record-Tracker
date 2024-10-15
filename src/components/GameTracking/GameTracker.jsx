import React, { useState } from 'react';
import image1 from './child-using-phone.jpeg';
import image2 from './tracking-icon.png';
import { Link } from "react-router-dom";
function GameTracker() {
  const [timePlayed, setTimePlayed] = useState(0.0);
  const [isTracking, setIsTracking] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startTracking = () => {
    if (!isTracking) {
      const id = setInterval(() => {
        setTimePlayed((prevTime) => prevTime + 0.01);
      }, 10);
      setIntervalId(id);
      setIsTracking(true);
    }
  };

  const stopTracking = () => {
    if (isTracking) {
      clearInterval(intervalId);
      setIsTracking(false);
    }
  };

  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-4xl font-extrabold text-gray-300 mb-8">Game Tracker</h1>

      <div className="text-center mb-8">
        <h1 className="text-2xl mb-4">Time Played: {timePlayed.toFixed(2)} seconds</h1>
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition duration-300"
          onClick={isTracking ? stopTracking : startTracking}
        >
          {isTracking ? 'Stop' : 'Start'}
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full max-w-3xl my-8 space-y-4 md:space-y-0 md:space-x-8">
        <div className="flex-1 p-4 text-center md:text-left">
          <h2 className="text-3xl font-bold text-cyan-400">Supervise the way you want</h2>
          <p className="text-lg mt-4">Filter websites, set time limits, block apps, get detailed reports, and much more. Tailor your child's digital experience based on their needs and your preferences.</p>
        </div>
        <img src={image1} alt="Supervision" className="w-1/2 max-w-xs rounded-lg md:order-2 md:ml-8"  />
      </div>

      <div className="flex flex-col md:flex-row items-center w-full max-w-3xl my-8 space-y-4 md:space-y-0 md:space-x-8">
       
        <div className="flex-1 p-4 text-center md:text-right">
          <h2 className="text-3xl font-bold text-cyan-400">Build positive digital habits</h2>
          <p className="text-lg mt-4">Help your child develop a healthy relationship with technology. With Us, you can make time for your kids' real-life activities and build balanced digital habits as they grow.</p>
        </div>
        <img src={image2} alt="Digital Habits" className="w-1/2 max-w-xs rounded-lg md:order-2 md:ml-8" />
      </div>

    
    </div>
  );
}

export default GameTracker;
