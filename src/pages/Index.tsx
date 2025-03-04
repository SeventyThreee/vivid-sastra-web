
import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Search } from 'lucide-react';

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
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
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

  // Function to handle card click
  const handleCardClick = (id: number) => {
    setActiveCard(id);
    
    // Reset active card after animation completes
    setTimeout(() => {
      setActiveCard(null);
    }, 300);
  };

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: "url('/lovable-uploads/8c41fd45-4dc0-4266-b2f1-ee1740230563.png')" }}
    >
      {/* Header with logo and icon */}
      <header className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-lg">
        <h1 className="text-2xl md:text-3xl font-extrabold app-title tracking-tight">Locate-me</h1>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-blue-700 hover:bg-blue-800 transition-colors py-2 px-4 rounded-full cursor-pointer">
            <Search size={18} />
            <span className="font-medium">Search</span>
          </div>
          <div className="relative group">
            <MapPin size={32} className="animate-float hover:animate-rotate-shine cursor-pointer" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse-glow"></span>
          </div>
        </div>
      </header>

      {/* Main content with grid of location cards */}
      <main className="container mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold header-text mb-2">Campus Locations</h2>
          <p className="text-gray-700 max-w-xl mx-auto">Find your way around campus with our interactive location finder</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locationCards.map((card, index) => (
            <div 
              key={card.id}
              className={`location-card rounded-card p-4 flex items-center justify-between ${card.color} ${isLoaded ? 'animate-fade-in' : 'opacity-0'} ${activeCard === card.id ? 'animate-scale-pop' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleCardClick(card.id)}
            >
              <div className="flex flex-col">
                <div className={`${card.color} bg-opacity-60 backdrop-blur-sm text-black rounded-md px-3 py-1 mb-2 w-fit`}>
                  <h3 className="font-semibold card-title">{card.title}</h3>
                </div>
                <p className="text-black font-medium location-count flex items-center gap-1">
                  <Navigation size={16} className="inline" />
                  {card.locations} locations
                </p>
              </div>
              <div className="w-32 h-24 rounded-md overflow-hidden lazy-image shadow-md transition-all duration-300 hover:shadow-lg">
                <img 
                  src={card.image} 
                  alt="Academic Building" 
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
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
