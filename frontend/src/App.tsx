import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TrainTimingsPage from './pages/TrainTimingsPage';
import FareCalculatorPage from './pages/FareCalculatorPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} transition-colors duration-200`}>
      {/* Navbar */}
      <Navbar 
        mobileMenuOpen={mobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      {/* Hero Section */}
      <div className={`${darkMode ? 'bg-blue-800' : 'bg-blue-600'} text-white py-1 px-2 md:px-6 transition-colors duration-200`}>
  <div className="max-w-6xl mx-auto">
    <h1 className="text-2xl md:text-4xl font-bold mb-2">Mumbai Local Train Route Helper</h1>
    <p className="text-lg md:text-xl mb-2">Find the fastest route between any two stations in Mumbai</p>
  </div>
</div>


      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 md:px-8">
        <Routes>
          <Route path="/" element={<HomePage darkMode={darkMode} />} />
          <Route path="/train-timings" element={<TrainTimingsPage darkMode={darkMode} />} />
          <Route path="/fare-calculator" element={<FareCalculatorPage darkMode={darkMode} />} />
          <Route path="/contact" element={<ContactPage darkMode={darkMode} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;