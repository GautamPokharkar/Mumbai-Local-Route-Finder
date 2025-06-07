import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-800 text-white'} py-4 px-4 transition-colors duration-200`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mumbai Local Train Helper</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-300'}`}>Your guide to navigating Mumbai's lifeline - the local train network.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li><Link to="/" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-300 hover:text-white'}`}>Home</Link></li>
              <li><Link to="/train-timings" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-300 hover:text-white'}`}>Train Timings</Link></li>
              <li><Link to="/fare-calculator" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-300 hover:text-white'}`}>Fare Calculator</Link></li>
              <li><Link to="/contact" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-300 hover:text-white'}`}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-300'} mb-2`}>Email: info@mumbaitrainhelper.com</p>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-300'}`}>Phone: +91 22 1234 5678</p>
          </div>
        </div>
        <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-700'} mt-8 pt-8 text-center ${darkMode ? 'text-gray-300' : 'text-gray-300'}`}>
          <p>&copy; {new Date().getFullYear()} Mumbai Local Train Helper. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
