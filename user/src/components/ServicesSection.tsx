import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter, Grid3X3, List, Search, Sparkles, Star, Clock, CheckCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  mainServiceCategories, 
  getFeaturedServices, 
  getPopularServices,
  getBusinessIncorporationServices
} from '@/data/servicesData';
import ServiceCategoryCard from './ServiceCategoryCard';

const ServicesSection = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [services, setServices] = useState(mainServiceCategories);
  const [featuredServices, setFeaturedServices] = useState<any[]>([]);
  const [popularServices, setPopularServices] = useState<any[]>([]);
  const [businessServices, setBusinessServices] = useState<any[]>([]);

  useEffect(() => {
    // Load all service data
    setFeaturedServices(getFeaturedServices());
    setPopularServices(getPopularServices());
    setBusinessServices(getBusinessIncorporationServices());
  }, []);

  const filteredServices = services.filter(service => 
    (selectedFilter === 'all' || service.id === selectedFilter) &&
    (service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     service.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="services" className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional business solutions tailored to your needs with expert guidance and support.
          </p>
        </motion.div>

        {/* Featured Services */}
        {featuredServices.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-navy-800 mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-gold-500" />
              Featured Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredServices.slice(0, 3).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-navy-100 rounded-lg">
                        <service.icon className="w-6 h-6 text-navy-600" />
                      </div>
                      <h4 className="text-xl font-semibold text-navy-800">{service.name}</h4>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {service.duration || 'Varies'}
                      </span>
                      <Link 
                        to={`/services/${service.categorySlug || 'services'}/${service.slug}`}
                        className="text-navy-600 hover:text-navy-800 font-medium text-sm flex items-center gap-1"
                      >
                        Learn more <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* All Services */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h3 className="text-2xl font-semibold text-navy-800">All Services</h3>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="relative flex-1 sm:min-w-[300px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                  className="h-9 w-9 p-0"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                  className="h-9 w-9 p-0"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}`}
                >
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 bg-navy-100 rounded-lg flex-shrink-0">
                        <service.icon className="w-6 h-6 text-navy-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-navy-800 mb-1">{service.name}</h4>
                        <p className="text-gray-600 text-sm">{service.subServices.length} services available</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.subServices.slice(0, 3).map((sub: any) => (
                        <span key={sub.id} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {sub.name}
                        </span>
                      ))}
                      {service.subServices.length > 3 && (
                        <span className="text-xs text-gray-500">+{service.subServices.length - 3} more</span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <Link 
                        to={`/services/${service.slug}`}
                        className="text-navy-600 hover:text-navy-800 font-medium text-sm flex items-center gap-1 group"
                      >
                        View all services
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                      {service.popular && (
                        <span className="text-xs bg-gold-100 text-gold-800 px-2 py-1 rounded-full flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h4 className="text-lg font-medium text-gray-700 mb-2">No services found</h4>
              <p className="text-gray-500 mb-6">Try adjusting your search or filter to find what you're looking for.</p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedFilter('all');
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>

        {/* Business Incorporation Services */}
        {businessServices.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-navy-800">Business Incorporation</h3>
              <Link 
                to="/services/company-formation" 
                className="text-navy-600 hover:text-navy-800 font-medium text-sm flex items-center gap-1"
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessServices.slice(0, 4).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-100"
                >
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-navy-50 rounded-lg">
                        <service.icon className="w-5 h-5 text-navy-600" />
                      </div>
                      <h4 className="font-medium text-navy-800">{service.name}</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-navy-700">{service.price}</span>
                      <Link 
                        to={`/services/company-formation/${service.slug}`}
                        className="text-navy-600 hover:text-navy-800 text-sm font-medium flex items-center gap-1"
                      >
                        Details <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-navy-500 to-navy-700 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.05, 0.02]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm text-navy-600 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg border border-navy-100"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-gold-500" />
            </motion.div>
            <span style={{ fontFamily: 'Nexa Bold' }}>Comprehensive Business Solutions</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-4 h-4 text-gold-400" />
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-navy-900 mb-6 leading-tight"
            style={{ fontFamily: 'Nexa Bold' }}
          >
            Our Expert
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="block sm:inline bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 bg-clip-text text-transparent mx-0 sm:mx-3 relative"
            >
              Services
              <motion.div
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
              />
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-6"
          >
            Transform regulatory challenges into competitive advantages with our comprehensive suite of 
            <span className="text-navy-700 font-semibold"> business solutions</span>, designed for modern enterprises.
          </motion.p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-2 border-gray-200 focus:border-navy-500 h-12 rounded-xl"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex items-center gap-2">
                <Button
                  variant={selectedFilter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedFilter('all')}
                  className="rounded-lg"
                  style={{ fontFamily: 'Nexa Bold' }}
                >
                  All Services
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-lg p-2"
                >
                  <Filter className="w-4 h-4" />
                </Button>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid' ? 'bg-white shadow-sm text-navy-600' : 'text-gray-500'
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list' ? 'bg-white shadow-sm text-navy-600' : 'text-gray-500'
                  }`}
                >
                  <List className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={`grid gap-6 lg:gap-8 mb-12 lg:mb-20 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}
        >
          {filteredServices.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              <ServiceCategoryCard 
              subServiceCount={0} {...category}
              index={index}
              featured={index === 0 || index === 3}              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-navy-600 via-navy-700 to-navy-800 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
            
            <div className="relative z-10">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                style={{ fontFamily: 'Nexa Bold' }}
              >
                Ready to Transform Your Business?
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
              >
                Get expert guidance and comprehensive solutions tailored to your business needs.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-900 px-8 py-4 rounded-xl text-lg font-bold shadow-2xl"
                    style={{ fontFamily: 'Nexa Bold' }}
                  >
                    <Link to="/services" className="group flex items-center gap-2">
                      Explore All Services
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl text-lg font-semibold"
                    style={{ fontFamily: 'Nexa Bold' }}
                  >
                    <Link to="/contact">Get Free Consultation</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
