import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICE_SEARCH_INDEX } from '@/data/servicesSearch';

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
  showFilters = false,
}: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const trimmedQuery = query.trim();

  const filteredSuggestions =
    trimmedQuery.length > 0
      ? SERVICE_SEARCH_INDEX.filter((item) =>
          item.name.toLowerCase().includes(trimmedQuery.toLowerCase()),
        ).slice(0, 8)
      : [];

  const runSearch = (q: string) => {
    const t = q.trim();
    if (!t) return;

    const exact = SERVICE_SEARCH_INDEX.find(
      (s) => s.name.toLowerCase() === t.toLowerCase(),
    );

    if (exact) {
      setIsExpanded(false);
      setIsFocused(false);
      navigate(exact.path);
      return;
    }

    if (onSearch) onSearch(t);
    else navigate(`/services?search=${encodeURIComponent(t)}`);

    setIsExpanded(false);
    setIsFocused(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runSearch(trimmedQuery);
  };

  const handleClear = () => {
    setQuery('');
    setIsExpanded(false);
    if (onSearch) onSearch('');
  };

  const handleFocus = () => {
    setIsFocused(true);
    setIsExpanded(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setIsExpanded(false);
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
              : '0 4px 6px -1px rgba(15, 27, 43, 0.05)',
          }}
          transition={{ duration: 0.2 }}
          className="relative bg-white rounded-2xl border-2 border-gray-200 focus-within:border-navy-600 overflow-hidden"
        >
          <div className="flex items-center">
            {/* Search icon as elegant button */}
            <motion.button
              type="submit"
              onMouseDown={(e) => {
                e.preventDefault();
                runSearch(trimmedQuery);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                color: isFocused ? '#0f1b2b' : '#6b7280',
              }}
              className="
                absolute left-3 z-10 flex items-center justify-center
                w-9 h-9 rounded-full
                bg-white
                border border-gray-200
                shadow-sm
                hover:border-gold-500 hover:shadow-md
                transition-all duration-200
              "
            >
              <span
                className="
                  flex items-center justify-center w-7 h-7 rounded-full
                  bg-gradient-to-br from-gold-400 to-navy-700
                "
              >
                <Search className="w-3.5 h-3.5 text-white" />
              </span>
            </motion.button>

            <Input
              type="text"
              placeholder={placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="w-full pl-14 pr-10 py-3.5 text-base font-medium text-navy-900 placeholder:text-gray-400 border-0 bg-transparent focus:ring-0 focus:outline-none"
              style={{ fontFamily: 'Nexa Bold, Inter, sans-serif' }}
            />

            <div className="absolute right-2 flex items-center gap-1">
              <AnimatePresence>
                {query && (
                  <motion.button
                    type="button"
                    onClick={handleClear}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-1.5 text-gray-400 hover:text-navy-600 transition-colors duration-200 rounded-full hover:bg-gray-100"
                  >
                    <X className="w-3.5 h-3.5" />
                  </motion.button>
                )}
              </AnimatePresence>

              {showFilters && (
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-1.5 text-gray-400 hover:text-navy-600 transition-colors duration-200 rounded-full hover:bg-gray-100"
                >
                  <Filter className="w-3.5 h-3.5" />
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>

            {/* Suggestions */}
          <AnimatePresence>
            {isExpanded && trimmedQuery.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-2 z-50"
              >
                <div className="
                  bg-white rounded-2xl border border-gray-200/80
                  shadow-[0_18px_45px_rgba(15,27,43,0.18)]
                  overflow-hidden backdrop-blur-sm
                ">
                  {/* Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-navy-900/95 to-navy-800/95">
                    <p
                      className="text-xs font-semibold tracking-wide text-gold-300 uppercase"
                      style={{ fontFamily: 'Nexa Bold, Inter, sans-serif' }}
                    >
                      Quick Suggestions
                    </p>
                    {filteredSuggestions.length > 0 && (
                      <span className="text-[11px] font-medium text-gray-200 bg-white/5 px-2 py-0.5 rounded-full">
                        {filteredSuggestions.length} match
                        {filteredSuggestions.length > 1 ? 'es' : ''}
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="py-2 max-h-72 overflow-y-auto">
                    {filteredSuggestions.length === 0 && (
                      <div className="px-4 py-3 text-sm text-gray-500">
                        No services match “{trimmedQuery}”.
                      </div>
                    )}

                    {filteredSuggestions.map((item, index) => (
                      <motion.button
                        key={item.path}
                        type="button"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setQuery(item.name);
                          setIsExpanded(false);
                          setIsFocused(false);
                          navigate(item.path);
                        }}
                        className="
                          group w-full flex flex-col items-start px-4 py-2.5
                          hover:bg-navy-50/90 transition-colors duration-150
                        "
                      >
                        <div className="flex items-center w-full">
                          <div className="
                            mr-3 flex items-center justify-center
                            w-7 h-7 rounded-full bg-gold-100 text-gold-700
                            group-hover:bg-gradient-to-br group-hover:from-gold-400 group-hover:to-navy-700
                            group-hover:text-white transition-colors duration-150
                          ">
                            <Search className="w-3.5 h-3.5" />
                          </div>

                          <div className="flex-1">
                            <p className="text-sm font-semibold text-navy-900 group-hover:text-navy-950">
                              {item.name}
                            </p>
                            {item.categoryName && (
                              <p className="text-[11px] text-gray-500 mt-0.5">
                                {item.categoryName}
                              </p>
                            )}
                          </div>

                          <span className="
                            text-[11px] font-medium text-navy-500
                            px-2 py-0.5 rounded-full bg-navy-50
                            group-hover:bg-white group-hover:text-navy-700
                            border border-transparent group-hover:border-navy-100
                          ">
                            View
                          </span>
                        </div>
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
