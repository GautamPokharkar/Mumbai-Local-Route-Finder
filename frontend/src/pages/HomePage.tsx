import React from 'react';
import { Train, MapPin } from 'lucide-react';
import RouteSearch from '../components/RouteSearch';
import TrainMap from '../components/TrainMap';
import ExploreSection from '../components/ExploreSection';

interface HomePageProps {
  darkMode: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ darkMode }) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 transition-colors`}>
          <h2 className={`text-2xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <Train className="mr-2" size={24} />
            Find Your Route
          </h2>
          <RouteSearch darkMode={darkMode} />
        </section>

        <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 transition-colors`}>
          <h2 className={`text-2xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <MapPin className="mr-2" size={24} />
            Mumbai Local Train Map
          </h2>
          <TrainMap darkMode={darkMode} />
        </section>
      </div>

      <section className="mb-10">
        <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Explore Mumbai</h2>
        <ExploreSection darkMode={darkMode} />
      </section>
    </>
  );
};

export default HomePage;
