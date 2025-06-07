import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { stations } from '../data/stations';

interface FareCalculatorProps {
  darkMode: boolean;
}

const FareCalculator: React.FC<FareCalculatorProps> = ({ darkMode }) => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [fare, setFare] = useState<number | null>(null);
  const [sourceOptions, setSourceOptions] = useState<string[]>([]);
  const [destOptions, setDestOptions] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [ticketClass, setTicketClass] = useState<'first' | 'second'>('second');

  const handleSourceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSource(value);
    
    if (value.length > 0) {
      const filtered = stations.filter(station => 
        station.toLowerCase().includes(value.toLowerCase())
      );
      setSourceOptions(filtered.slice(0, 5));
    } else {
      setSourceOptions([]);
    }
  };

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDestination(value);
    
    if (value.length > 0) {
      const filtered = stations.filter(station => 
        station.toLowerCase().includes(value.toLowerCase())
      );
      setDestOptions(filtered.slice(0, 5));
    } else {
      setDestOptions([]);
    }
  };

  const handleSelectSource = (station: string) => {
    setSource(station);
    setSourceOptions([]);
  };

  const handleSelectDestination = (station: string) => {
    setDestination(station);
    setDestOptions([]);
  };

  const calculateFare = () => {
    if (!source || !destination) {
      setError('Please select both source and destination stations');
      return;
    }
    
    if (source === destination) {
      setError('Source and destination cannot be the same');
      return;
    }
    
    // Calculate distance (simplified for demo)
    const sourceIndex = stations.indexOf(source);
    const destIndex = stations.indexOf(destination);
    
    if (sourceIndex === -1 || destIndex === -1) {
      setError('One or both stations not found');
      return;
    }
    
    const distance = Math.abs(sourceIndex - destIndex);
    
    // Calculate fare based on distance (simplified formula)
    let calculatedFare = 0;
    
    if (ticketClass === 'first') {
      if (distance <= 5) calculatedFare = 85;
      else if (distance <= 10) calculatedFare = 105;
      else if (distance <= 15) calculatedFare = 125;
      else if (distance <= 20) calculatedFare = 145;
      else if (distance <= 30) calculatedFare = 175;
      else calculatedFare = 210;
    } else {
      if (distance <= 5) calculatedFare = 10;
      else if (distance <= 10) calculatedFare = 15;
      else if (distance <= 15) calculatedFare = 20;
      else if (distance <= 20) calculatedFare = 25;
      else if (distance <= 30) calculatedFare = 30;
      else calculatedFare = 35;
    }
    
    setFare(calculatedFare);
    setError('');
  };

  return (
    <div>
      <div className="space-y-6 mb-6">
        <div className="relative">
          <label htmlFor="source" className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
            Source Station
          </label>
          <input
            type="text"
            id="source"
            value={source}
            onChange={handleSourceChange}
            placeholder="Enter source station"
            className={`w-full px-4 py-3 ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'} border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200`}
          />
          {sourceOptions.length > 0 && (
            <div className={`absolute z-10 w-full mt-1 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border rounded-md shadow-lg max-h-60 overflow-auto`}>
              {sourceOptions.map((station, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 cursor-pointer ${darkMode ? 'hover:bg-gray-600 text-white' : 'hover:bg-gray-100 text-gray-900'}`}
                  onClick={() => handleSelectSource(station)}
                >
                  {station}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="relative">
          <label htmlFor="destination" className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
            Destination Station
          </label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={handleDestinationChange}
            placeholder="Enter destination station"
            className={`w-full px-4 py-3 ${darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'} border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200`}
          />
          {destOptions.length > 0 && (
            <div className={`absolute z-10 w-full mt-1 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border rounded-md shadow-lg max-h-60 overflow-auto`}>
              {destOptions.map((station, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 cursor-pointer ${darkMode ? 'hover:bg-gray-600 text-white' : 'hover:bg-gray-100 text-gray-900'}`}
                  onClick={() => handleSelectDestination(station)}
                >
                  {station}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div>
          <label className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
            Ticket Class
          </label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="ticketClass"
                checked={ticketClass === 'second'}
                onChange={() => setTicketClass('second')}
              />
              <span className={`ml-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Second Class</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="ticketClass"
                checked={ticketClass === 'first'}
                onChange={() => setTicketClass('first')}
              />
              <span className={`ml-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>First Class</span>
            </label>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mb-6">
        <button
          onClick={calculateFare}
          className={`px-6 py-3 ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center transition-colors duration-200`}
        >
          <Calculator className="mr-2" size={18} />
          Calculate Fare
        </button>
      </div>
      
      {error && (
        <div className="text-red-600 mb-4 text-center">{error}</div>
      )}
      
      {fare !== null && (
        <div className={`mt-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} p-6 rounded-md border transition-colors duration-200 text-center`}>
          <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Fare Details</h3>
          <div className={`text-3xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
            ₹{fare}
          </div>
          <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {ticketClass === 'first' ? 'First Class' : 'Second Class'} ticket from {source} to {destination}
          </p>
        </div>
      )}
    </div>
  );
};

export default FareCalculator;