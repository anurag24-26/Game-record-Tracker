import React, { useState } from "react";
import { Link } from "react-router-dom";
import image1 from './images.png';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black px-4 py-2 flex items-center justify-between lg:justify-center sticky shadow-md top-0 rounded-lg transition-transform z-10">
      <div className="flex items-center space-x-4 flex-grow">
        <img
          src={image1}
          alt="Parental Control"
          className="h-8 w-8 border-pink-500 border-2 rounded-lg"
        />
        <Link to="/home">
          <h5 className="text-pink-500 font-semibold font-serif text-xl ml-4">
            Game Tracker
          </h5>
        </Link>
      </div>

      {/* Three-bar Menu Button */}
      <button
        className="text-pink-500 font-bold lg:hidden flex-shrink-0"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      <div className="hidden lg:flex lg:items-center lg:space-x-8 flex-grow justify-end">
        <ul className="lg:flex lg:space-x-4">
          <li>
            <Link
              to="/home"
              className="text-white font-bold px-3 py-2 hover:bg-pink-600 rounded-md transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/Extension" 
              className="text-white font-bold px-3 py-2 hover:bg-pink-600 rounded-md transition-colors duration-200"
            >
              Extension
            </Link>
          </li>
          <li>
            <Link
              to="/game-tracker"
              className="text-white font-bold px-3 py-2 hover:bg-pink-600 rounded-md transition-colors duration-200"
            >
              Game Tracker
            </Link>
          </li>
          <li>
            <Link
              to="/parental-control"
              className="text-white font-bold px-3 py-2 hover:bg-pink-600 rounded-md transition-colors duration-200"
            >
              Parental Control
            </Link>
          </li>
        </ul>
        <div className="lg:ml-8 lg:flex lg:space-x-4">
          {isAuthenticated && (
            <div>
              <h2 className="text-yellow-400 font-bold px-3 py-2 rounded-md">
                {user.name}
              </h2>
            </div>
          )}
          {isAuthenticated ? (
            <button
              className="text-white bg-red-600 font-bold px-3 py-2 hover:bg-red-700 rounded-lg transition-colors duration-200"
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>
          ) : (
            <button 
              className="font-bold px-3 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
              onClick={() => loginWithRedirect()}>
              LogIn/SignUp
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center justify-center lg:hidden z-50">
          <button
            className="absolute top-4 left-4 text-white text-2xl"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="space-y-4 py-8">
            <li>
              <Link
                to="/home"
                className="text-white font-bold text-xl"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/Extension" 
                className="text-white font-bold text-xl"
                onClick={toggleMenu}
              >
                Extension
              </Link>
            </li>
            <li>
              <Link
                to="/game-tracker"
                className="text-white font-bold text-xl"
                onClick={toggleMenu}
              >
                Game Tracker
              </Link>
            </li>
            <li>
              <Link
                to="/parental-control"
                className="text-white font-bold text-xl"
                onClick={toggleMenu}
              >
                Parental Control
              </Link>
            </li>
            <li>
              <div className="text-white font-bold text-xl">
                {isAuthenticated && (
                  <h2 className="text-yellow-400 font-bold">{user.name}</h2>
                )}
                {isAuthenticated ? (
                  <button
                    className="text-white font-bold text-xl"
                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                  </button>
                ) : (
                  <button 
                    className="text-white font-bold text-xl"
                    onClick={() => loginWithRedirect()}>
                    LogIn/SignUp
                  </button>
                )}
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
