// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.jsx';
import Pricing from './components/HomePage/Pricing.jsx';
import GameTracker from './components/GameTracking/GameTracker.jsx';
import ParentalControl from './components/ParentalControl/ParentalControl.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ContactUs from './components/HomePage/Contact.jsx';
import Extension from './components/HomePage/Extension.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-800 text-white">
        {/* Navbar visible on all pages */}
        <Navbar />
        
        {/* Main content area */}
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            {/* Default Route redirects to Home */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            
            {/* Routes for all the pages */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/extension" element={<Extension />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/game-tracker" element={<GameTracker />} />
            <Route path="/parental-control" element={<ParentalControl />} />
          </Routes>
        </main>

        {/* Footer Section */}
        <footer className="bg-black text-center p-8 mt-8 border-t-2 border-gray-800 flex flex-wrap rounded-xl">
          <div className="flex-1 min-w-[200px] mb-6">
            <h3 className="text-xl font-semibold text-pink-500">About Us</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li><a href="#" className="hover:underline">Team</a></li>
              <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
              <li><a href="/pricing" className="hover:underline">Pricing</a></li>
            </ul>
          </div>
          
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-xl font-semibold text-pink-500">Find Us</h3>
            <p className="mt-4 text-gray-300">
              GLA UNIVERSITY<br />
              Chaumuhan, Mathura<br />
              281406, Uttar Pradesh
            </p>
          </div>
          
          <div className="w-full text-center mt-8 text-gray-300">
            <p>© 2024 Gaming Record Keeper. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
