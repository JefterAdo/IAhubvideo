import { Search } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
        <div className="relative group">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search AI videos..."
            className="w-full px-4 py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-200 rounded-xl 
                     focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all
                     placeholder:text-gray-400 shadow-sm"
          />
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
          <button
            type="submit"
            className="absolute right-3 top-2 px-4 py-1.5 bg-blue-600 text-white rounded-lg
                     hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                     transition-colors text-sm font-medium"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}