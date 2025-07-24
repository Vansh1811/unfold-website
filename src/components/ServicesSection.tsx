import { motion } from 'framer-motion';
import ServiceCategoryCard from './ServiceCategoryCard';
import { mainServiceCategories } from '@/data/servicesData';
import { Link } from 'react-router-dom';
import { Plus, Sparkles, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-navy-500 to-navy-700 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium header section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          {/* Animated badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-navy-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium mb-4 sm:mb-6 shadow-lg border border-navy-100"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-gold-500" />
            <span>Comprehensive Business Solutions</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-gold-400" />
            </motion.div>
          </motion.div>

          {/* Main heading with gradient text */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-navy-900 mb-4 sm:mb-6 leading-tight">
            Our Expert
            <span className="block sm:inline">
              <span className="bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 bg-clip-text text-transparent mx-0 sm:mx-3 relative">
                Services
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </span>
            </span>
          </h2>

          {/* Enhanced description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4 sm:px-6"
          >
            Transform regulatory challenges into competitive advantages with our comprehensive suite of 
            <span className="text-navy-700 font-medium"> business solutions</span>, designed for modern enterprises.
          </motion.p>
        </motion.div>

        {/* Advanced responsive grid with staggered animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20"
        >
          {mainServiceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              <ServiceCategoryCard 
                title={category.title} 
                subServiceCount={category.subServiceCount} 
                {...category} 
                index={index} 
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Premium CTA section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-6">
            {/* Primary CTA */}
            <motion.div   
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/services"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-navy-600 via-navy-700 to-navy-800 hover:from-navy-700 hover:via-navy-800 hover:to-navy-900 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-2xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <motion.div
                  animate={{ rotate: [0, 90, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm hover:bg-white text-navy-600 hover:text-navy-700 px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-2xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl border border-navy-100 hover:border-navy-200"
              >
                <span>Get Consultation</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;