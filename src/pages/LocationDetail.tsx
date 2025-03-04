
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, ArrowLeft, Navigation } from 'lucide-react';

const LocationDetail = () => {
  const { id, color } = useParams();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Locations data - in a real app this would come from an API
  const locations = [
    { id: 1, name: "Building A", description: "Main lecture halls and classrooms", image: "/lovable-uploads/622b1b96-104c-4674-996d-6306c5dac78d.png" },
    { id: 2, name: "Building B", description: "Faculty offices and research labs", image: "/lovable-uploads/622b1b96-104c-4674-996d-6306c5dac78d.png" },
  ];

  useEffect(() => {
    // Animation delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const goBack = () => {
    navigate('/');
  };

  return (
    <div 
      className={`min-h-screen w-full bg-cover bg-center bg-no-repeat ${color}`} 
    >
      {/* Header with back button */}
      <header className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-lg">
        <div className="flex items-center gap-3">
          <button
            onClick={goBack}
            className="flex items-center justify-center p-2 rounded-full bg-blue-700 hover:bg-blue-800 transition-all duration-300 hover:-translate-y-1"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl md:text-3xl font-extrabold app-title tracking-tight">Locate-me</h1>
        </div>
        <div className="relative group">
          <MapPin size={32} className="animate-float hover:animate-rotate-shine cursor-pointer" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse-glow"></span>
        </div>
      </header>

      {/* Main content with location details */}
      <main className="container mx-auto py-12 px-4">
        <div className={`bg-white rounded-card p-6 shadow-lg ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold header-text mb-4">Academic Building</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="lazy-image rounded-lg overflow-hidden shadow-md h-64 md:h-96">
              <img 
                src="/lovable-uploads/622b1b96-104c-4674-996d-6306c5dac78d.png" 
                alt="Academic Building" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-700 text-lg">
                This academic building provides state-of-the-art facilities for students and faculty. It houses multiple lecture halls, labs, and study spaces.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Available Locations:</h3>
                {locations.map((location, index) => (
                  <div key={location.id} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition-all hover:-translate-y-1">
                    <Navigation size={20} className="text-blue-600" />
                    <div>
                      <h4 className="font-medium">{location.name}</h4>
                      <p className="text-sm text-gray-600">{location.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LocationDetail;
