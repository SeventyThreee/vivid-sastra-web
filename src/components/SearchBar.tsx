
import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({ onSearch, placeholder = "Search locations..." }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 bg-blue-700 dark:bg-blue-800 hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors py-2 px-4 rounded-full cursor-pointer"
    >
      <Search size={18} className="text-white" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent text-white placeholder-white/70 outline-none w-full"
      />
    </form>
  );
};

export default SearchBar;
