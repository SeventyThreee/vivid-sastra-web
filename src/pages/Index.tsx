
import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

// Define the structure of a location card
interface LocationCard {
  id: number;
  title: string;
  locations: number;
  color: string;
  image: string;
}

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Create an array of location cards with different colors
  const locationCards: LocationCard[] = [
    { id: 1, title: "Academic Building", locations: 2, color: "bg-card-red", image: "/lovable-uploads/622b1b96-104c-4674-996d-6306c5dac78d.png" },
    { id: 2, title: "Academic Building", locations: 2, color: "bg-card-blue", image: "/lovable-uploads/622b1b96-104c-4674-996d-6306c5dac78d.png" },
    { id: 3, title: "Academic Building", locations: 2, color: "bg-card-yellow", image: "/lovable-uploads/622b1b96-104c-4674-996d-6306c5dac78d.png" },
    { id: 4, title: "Academic Building", locations: 2, color: "bg-card-green", image: "/lovable-uploads/622b1b96-104c-4674-996d-6306c5dac78d.png" },
    { id: 5, title: "Academic Building", locations: 2, color: "bg-card-purple", image: "/lovable-uploads/622b1b96-104c-4674-996d-6306c5dac78d.png" },
    { id: 6, title: "Academic Building", locations: 2, color: "bg-card-navy", image: "/lovable-uploads/622b1b96-104c-4674-996d-6306c5dac78d.png" },
    { id: 7, title: "Academic Building", locations: 2, color: "bg-card-orange", image: "/lovable-uploads/622b1b96-104c-4674-996d-6306c5dac78d.png" },
    { id: 8, title: "Academic Building", locations: 2, color: "bg-card-pink", image: "/lovable-uploads/622b1b96-104c-4674-996d-6306c5dac78d.png" },
    { id: 9, title: "Academic Building", locations: 2, color: "bg-card-emerald", image: "/lovable-uploads/622b1b96-104c-4674-996d-6306c5dac78d.png" },
  ];

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Function to handle lazy loading of images
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.classList.add('loaded');
  };

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: "url('/lovable-uploads/8c41fd45-4dc0-4266-b2f1-ee1740230563.png')" }}
    >
      {/* Header with logo and icon */}
      <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <h1 className="text-2xl font-bold">Locate-me</h1>
        <MapPin size={32} className="animate-float" />
      </header>

      {/* Main content with grid of location cards */}
      <main className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locationCards.map((card, index) => (
            <div 
              key={card.id}
              className={`location-card rounded-card p-4 flex items-center justify-between ${card.color} ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col">
                <div className={`${card.color} bg-opacity-60 backdrop-blur-sm text-black rounded-md px-3 py-1 mb-2 w-fit`}>
                  <h3 className="font-medium">{card.title}</h3>
                </div>
                <p className="text-black font-medium">{card.locations} locations</p>
              </div>
              <div className="w-32 h-24 rounded-md overflow-hidden lazy-image">
                <img 
                  src={card.image} 
                  alt="Academic Building" 
                  className="w-full h-full object-cover transition-opacity duration-500"
                  onLoad={handleImageLoad}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
