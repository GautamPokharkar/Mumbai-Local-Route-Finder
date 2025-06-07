import React from 'react';
import { MapPin } from 'lucide-react';

interface ExploreSectionProps {
  darkMode: boolean;
}

const ExploreSection: React.FC<ExploreSectionProps> = ({ darkMode }) => {
  const places = [
    {
      title: 'Gateway of India',
      description: 'Historic monument located in Apollo Bunder, easily accessible from CST or Churchgate stations.',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      station: 'CST / Churchgate'
    },
    {
      title: 'Juhu Beach',
      description: 'Popular beach and recreational spot with food stalls and entertainment options.',
      image: 'https://images.unsplash.com/photo-1570168007891-0658953a5554?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      station: 'Vile Parle / Andheri'
    },
    {
      title: 'Sanjay Gandhi National Park',
      description: 'Large protected area with hiking trails, wildlife, and ancient Kanheri Caves.',
      image: 'https://images.unsplash.com/photo-1582650549551-6640b6a3fc11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      station: 'Borivali'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {places.map((place, index) => (
        <div key={index} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-lg shadow-md overflow-hidden transition-colors duration-200`}>
          <div className="h-48 overflow-hidden">
            <img 
              src={place.image} 
              alt={place.title} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{place.title}</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-3`}>{place.description}</p>
            <div className={`flex items-center ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">Nearest station: {place.station}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExploreSection;