import React from 'react';

function HomePage() {
  return (
    <div className="p-8 max-w-screen-xl mx-auto text-white bg-black">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-pink-500">
          Welcome to Gaming Record Keeper
        </h1>
        <p className="mt-4 text-lg">
          Track your gaming habits and set parental controls with ease.
        </p>
      </header>

      {/* How to Use Section */}
      <section className="bg-gray-800 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold text-pink-500">How to Use</h2>
        <p className="mt-4 text-lg text-gray-300">
          Our platform allows you to track game time, set limits, and monitor usage effortlessly.
        </p>
        <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
          <li>Start by registering or logging in.</li>
          <li>Use the Game Tracker to monitor your gaming sessions.</li>
          <li>Parents can set limits and lock games through the Parental Control page.</li>
        </ul>
      </section>
      
    </div>
  );
}

export default HomePage;
