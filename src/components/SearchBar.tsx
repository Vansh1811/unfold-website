import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  className?: string;
  placeholder?: string;
  showFilters?: boolean;
}

const SearchBar = ({ 
  onSearch, 
  className = '', 
  placeholder = 'Search services...',
  showFilters = false 
}: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      if (onSearch) {
        onSearch(query.trim());
      } else {
        navigate(`/services?search=${encodeURIComponent(query.trim())}`);
      }
    }
  };

  const handleClear = () => {
    setQuery('');
    setIsExpanded(false);
    if (onSearch) {
      onSearch('');
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setIsExpanded(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!query) {
      setIsExpanded(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`relative w-full max-w-2xl mx-auto ${className}`}
    >
      <form onSubmit={handleSubmit} className="relative">
        {/* Main Search Container */}
        <motion.div
          animate={{
            scale: isFocused ? 1.02 : 1,
            boxShadow: isFocused 
              ? '0 8px 25px -8px rgba(15, 27, 43, 0.25)' 
              : '0 4px 6px -1px rgba(15, 27, 43, 0.05)'
          }}
          transition={{ duration: 0.2 }}
          className="relative bg-white rounded-2xl border-2 border-gray-200 focus-within:border-navy-600 overflow-hidden"
        >
          {/* Search Input */}
          <div className="flex items-center">
            <motion.div
              animate={{ 
                color: isFocused ? '#0f1b2b' : '#6b7280',
                scale: isFocused ? 1.1 : 1
              }}
              className="absolute left-4 z-10"
            >
              <Search className="w-5 h-5" />
            </motion.div>

            <Input
              type="text"
              placeholder={placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="w-full pl-12 pr-20 py-4 text-base font-medium text-navy-900 placeholder:text-gray-400 border-0 bg-transparent focus:ring-0 focus:outline-none"
              style={{ fontFamily: 'Nexa Bold, Inter, sans-serif' }}
            />

            {/* Action Buttons */}
            <div className="absolute right-2 flex items-center gap-2">
              <AnimatePresence>
                {query && (
                  <motion.button
                    type="button"
                    onClick={handleClear}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-gray-400 hover:text-navy-600 transition-colors duration-200 rounded-lg hover:bg-gray-100"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                )}
              </AnimatePresence>

              {showFilters && (
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-gray-400 hover:text-navy-600 transition-colors duration-200 rounded-lg hover:bg-gray-100"
                >
                  <Filter className="w-4 h-4" />
                </motion.button>
              )}

              <Button
                type="submit"
                size="sm"
                className="bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ fontFamily: 'Nexa Bold, Inter, sans-serif' }}
              >
                Search
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Search Suggestions/Results Preview */}
        <AnimatePresence>
          {isExpanded && query.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-gray-200 shadow-xl z-50 overflow-hidden"
            >
              <div className="p-4">
                <p className="text-sm font-medium text-navy-700" style={{ fontFamily: 'Nexa Bold, Inter, sans-serif' }}>
                  Quick Suggestions
                </p>
                <div className="space-y-2">
                  {['Private Limited Company', 'GST Registration', 'Trademark Registration', 'Virtual CFO Services', 'Annual Compliance', 'Patent Registration'].map((suggestion, index) => (
                    <motion.button
                      key={suggestion}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => {
                        setQuery(suggestion);
                        if (onSearch) onSearch(suggestion);
                      }}
                      className="w-full text-left p-2 rounded-lg hover:bg-navy-50 text-gray-700 hover:text-navy-700 transition-colors duration-200"
                    >
                      <Search className="w-4 h-4 inline mr-2 text-gold-600" />
                      {suggestion}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
};

export default SearchBar;
