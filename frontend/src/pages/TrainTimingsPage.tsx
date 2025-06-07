import React from 'react';
import { Clock } from 'lucide-react';
import TrainTimings from '../components/TrainTimings';

interface TrainTimingsPageProps {
  darkMode: boolean;
}

const TrainTimingsPage: React.FC<TrainTimingsPageProps> = ({ darkMode }) => {
  return (
    <>
      <section className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-lg shadow-md p-6 mb-8 transition-colors duration-200`}>
        <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'} flex items-center`}>
          <Clock className="mr-2" size={24} />
          Train Timings
        </h2>
        <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Check the latest train schedules for any station in the Mumbai local train network. 
          Enter a station name to see upcoming trains, their destinations, platforms, and current status.
        </p>
        <TrainTimings darkMode={darkMode} />
      </section>
    </>
  );
};

export default TrainTimingsPage;