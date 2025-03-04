
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-blue-700 hover:bg-blue-800 transition-colors duration-300 hover:-translate-y-1"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6 overflow-hidden">
        <Sun 
          size={24} 
          className={`absolute transition-all duration-500 ease-in-out ${
            theme === 'dark' ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
          } text-yellow-300`} 
        />
        <Moon 
          size={24} 
          className={`absolute transition-all duration-500 ease-in-out ${
            theme === 'light' ? 'opacity-0 -rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
          } text-blue-200`} 
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
