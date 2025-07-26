import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Building2, Scale, Calculator, Shield, Users2, FileCheck2, Rocket, TrendingUp, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/SearchBar';
import logo from '@/assets/unfold-logo.png';
import { mainServiceCategories, moreServices } from '@/data/servicesData';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasMegaMenu: true },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceIcons = {
    'Building2': Building2,
    'Scale': Scale,
    'Calculator': Calculator,
    'Shield': Shield,
    'Users2': Users2,
    'FileCheck2': FileCheck2,
    'Rocket': Rocket,
    'TrendingUp': TrendingUp,
    'Star': Star
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-navy shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Empty div for flex spacing */}
          <div className="flex-1"></div>
          {/* Logo - Far Left */}
          <div className="absolute left-4 flex items-center space-x-3">
            <img src={logo} alt="Unfold" className="h-8 md:h-10 w-auto" />
            <span className="text-xl font-heading font-bold text-white leading-tight">
              Unfold Finleg Solutions
            </span>
          </div>

          {/* Right Side - Navigation, Search & Get Quote Button (Desktop) */}
          <div className="absolute right-4 hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasMegaMenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setShowMegaMenu(true)}
                    onMouseLeave={() => setShowMegaMenu(false)}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center font-medium transition-colors duration-200 relative group ${
                        isActive(item.path) || location.pathname.startsWith('/services')
                          ? 'text-gold'
                          : 'text-white hover:text-gold'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                      {(isActive(item.path) || location.pathname.startsWith('/services')) && (
                        <motion.div
                          className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold"
                          layoutId="activeTab"
                          initial={false}
                        />
                      )}
                    </Link>

                    {/* Mega Menu */}
                    <AnimatePresence>
                      {showMegaMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full right-0 mt-2 w-screen max-w-6xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                        >
                          <div className="p-8">
                            <div className="grid grid-cols-3 gap-8">
                              {/* Main Services */}
                              <div className="col-span-2">
                                <h3 className="text-lg font-heading font-bold text-navy mb-6">
                                  Main Services
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                  {mainServiceCategories.map((category) => {
                                    const IconComponent = serviceIcons[category.icon as keyof typeof serviceIcons] || Building2;
                                    return (
                                      <Link
                                        key={category.id}
                                        to={`/services/${category.slug}`}
                                        className="group p-4 rounded-xl hover:bg-navy-50 transition-colors duration-200"
                                      >
                                        <div className="flex items-start space-x-3">
                                          <div className="p-2 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                                            <IconComponent className="h-5 w-5 text-gold" />
                                          </div>
                                          <div>
                                            <h4 className="font-semibold text-navy group-hover:text-gold transition-colors">
                                              {category.name}
                                            </h4>
                                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                              {category.description}
                                            </p>
                                          </div>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>

                              {/* Specialized Services */}
                              <div>
                                <h3 className="text-lg font-heading font-bold text-navy mb-6">
                                  Specialized Services
                                </h3>
                                <div className="space-y-3">
                                  {moreServices.slice(0, 4).map((service) => {
                                    const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons] || Star;
                                    return (
                                      <Link
                                        key={service.id}
                                        to={`/services/${service.slug}`}
                                        className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gold/5 transition-colors duration-200"
                                      >
                                        <div className="p-1 bg-navy/10 rounded group-hover:bg-navy/20 transition-colors">
                                          <IconComponent className="h-4 w-4 text-navy" />
                                        </div>
                                        <div>
                                          <h4 className="font-medium text-navy group-hover:text-gold transition-colors text-sm">
                                            {service.name}
                                          </h4>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-200">
                                  <Link
                                    to="/services/more"
                                    className="text-gold hover:text-navy font-semibold text-sm transition-colors duration-200"
                                  >
                                    View All Services →
                                  </Link>
                                </div>
                              </div>
                            </div>

                            {/* CTA Section */}
                            <div className="mt-8 pt-6 border-t border-gray-200 bg-gradient-to-r from-navy to-navy-700 rounded-xl p-6">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className="text-lg font-heading font-bold text-white">
                                    Need Expert Guidance?
                                  </h4>
                                  <p className="text-gold text-sm mt-1">
                                    Get personalized consultation for your business needs
                                  </p>
                                </div>
                                <Button className="bg-gold hover:bg-gold-600 text-navy font-semibold px-6 py-2">
                                  Get Quote
                                </Button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-medium transition-colors duration-200 relative ${
                      isActive(item.path)
                        ? 'text-gold'
                        : 'text-white hover:text-gold'
                    }`}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold"
                        layoutId="activeTab"
                        initial={false}
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
            
            <SearchBar className="max-w-xs" />
            <Button className="bg-gold hover:bg-gold-600 text-navy font-semibold px-6 py-2">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-navy-700 rounded"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden border-t border-gold/20 bg-navy"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-6 space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 font-medium transition-colors duration-200 rounded-lg mx-4 ${
                        isActive(item.path) || (item.name === 'Services' && location.pathname.startsWith('/services'))
                          ? 'text-gold bg-gold/10'
                          : 'text-white hover:text-gold hover:bg-gold/5'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>

                    {/* Mobile Services Submenu */}
                    {item.hasMegaMenu && (isActive(item.path) || location.pathname.startsWith('/services')) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-2 px-4 space-y-2"
                      >
                        {mainServiceCategories.slice(0, 4).map((category) => (
                          <Link
                            key={category.id}
                            to={`/services/${category.slug}`}
                            className="block px-4 py-2 text-sm text-gold/80 hover:text-gold transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {category.name}
                          </Link>
                        ))}
                        <Link
                          to="/services/more"
                          className="block px-4 py-2 text-sm text-gold font-semibold"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          View All Services →
                        </Link>
                      </motion.div>
                    )}
                  </div>
                ))}

                {/* Mobile CTA */}
                <div className="px-4 pt-4">
                  <Button className="w-full bg-gold hover:bg-gold-600 text-navy font-semibold py-3">
                    Get Quote
                  </Button>
                </div>

                {/* Mobile Search */}
                <div className="px-4">
                  <SearchBar placeholder="Search services..." />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;