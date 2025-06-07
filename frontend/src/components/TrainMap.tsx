import React from 'react';

interface TrainMapProps {
  darkMode: boolean;
}

const TrainMap: React.FC<TrainMapProps> = ({ darkMode }) => {
  return (
    <div className="w-full h-full">
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
        <iframe 
          src="https://www.google.com/maps/d/embed?mid=1Zinj3zT1LfhPfJVGHlj1rChqJxY&hl=en&ehbc=2E312F" 
          width="100%" 
          height="100%" 
          className="w-full h-full"
          title="Mumbai Local Train Map"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm transition-colors duration-200`}>
        <p>The map shows Western, Central, and Harbour line routes across Mumbai.</p>
        <p>Zoom in to see individual stations and interchange points.</p>
      </div>
    </div>
  );
};

export default TrainMap;