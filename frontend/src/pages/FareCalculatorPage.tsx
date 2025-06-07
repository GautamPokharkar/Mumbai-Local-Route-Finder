import React from 'react';
import { Calculator } from 'lucide-react';
import FareCalculator from '../components/FareCalculator';

interface FareCalculatorPageProps {
  darkMode: boolean;
}

const FareCalculatorPage: React.FC<FareCalculatorPageProps> = ({ darkMode }) => {
  return (
    <>
      <section className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-lg shadow-md p-6 mb-8 transition-colors duration-200`}>
        <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'} flex items-center`}>
          <Calculator className="mr-2" size={24} />
          Fare Calculator
        </h2>
        <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Calculate the fare for your journey between any two stations in the Mumbai local train network.
          Select your source and destination stations, choose your ticket class, and get the estimated fare.
        </p>
        <FareCalculator darkMode={darkMode} />
      </section>
    </>
  );
};

export default FareCalculatorPage;