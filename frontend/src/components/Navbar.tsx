import React from 'react';
import { NavLink } from 'react-router-dom';
import { Train, Clock, Calculator, Phone, Home, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ mobileMenuOpen, toggleMobileMenu, darkMode, toggleDarkMode }) => {
  return (
    <nav className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md transition-colors duration-200`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo aligned to left */}
          <div className="flex items-center space-x-2">
            <Train className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className="text-xl font-bold">Mumbai Train Helper</span>
          </div>
          
          {/* Desktop menu aligned left */}
          <div className="hidden md:flex flex-grow justify-start space-x-8 ml-10">
            <NavLink to="/" className={({isActive}) => `flex items-center space-x-2 ${isActive ? (darkMode ? 'text-blue-400' : 'text-blue-600') : (darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600')}`}>
              <Home size={18} /> <span>Home</span>
            </NavLink>
            <NavLink to="/train-timings" className={({isActive}) => `flex items-center space-x-2 ${isActive ? (darkMode ? 'text-blue-400' : 'text-blue-600') : (darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600')}`}>
              <Clock size={18} /> <span>Train Timings</span>
            </NavLink>
            <NavLink to="/fare-calculator" className={({isActive}) => `flex items-center space-x-2 ${isActive ? (darkMode ? 'text-blue-400' : 'text-blue-600') : (darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600')}`}>
              <Calculator size={18} /> <span>Fare Calculator</span>
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => `flex items-center space-x-2 ${isActive ? (darkMode ? 'text-blue-400' : 'text-blue-600') : (darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600')}`}>
              <Phone size={18} /> <span>Contact</span>
            </NavLink>
          </div>
          
          {/* Theme toggle pushed to extreme right */}
          <div className="ml-auto">
            <button onClick={toggleDarkMode} className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'} focus:outline-none`}>
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
