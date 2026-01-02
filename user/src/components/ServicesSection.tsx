import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  mainServiceCategories, 
  getFeaturedServices, 
  getPopularServices,
  getBusinessIncorporationServices
} from '@/data/servicesData';
import ServiceCategoryCard from './ServiceCategoryCard';

const ServicesSection = () => {
  const [featuredServices, setFeaturedServices] = useState<any[]>([]);
  const [popularServices, setPopularServices] = useState<any[]>([]);
  const [businessServices, setBusinessServices] = useState<any[]>([]);

  useEffect(() => {
    setFeaturedServices(getFeaturedServices());
    setPopularServices(getPopularServices());
    setBusinessServices(getBusinessIncorporationServices());
  }, []);

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
        type: 'spring' as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-navy-500 to-navy-700 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.05, 0.02]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
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
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm text-navy-600 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg border border-navy-100"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
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

          {/* Main Heading with Gold Animation */}
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

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-6 lg:gap-8 mb-12 lg:mb-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {mainServiceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { type: 'spring', stiffness: 400 }
              }}
            >
              <ServiceCategoryCard
                title={category.name}
                description={category.description}
                icon={category.icon}
                slug={category.slug}
                subServiceCount={category.subServices?.length || 0}
                index={index}
                featured={index === 0 || index === 3}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-white via-[#fbfbff] to-[#fff9f0] px-6 py-10 lg:px-12 lg:py-12 border border-gray-100 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-gold via-gold/70 to-transparent" />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-3"
                style={{ fontFamily: 'Nexa Bold' }}
              >
                Ready to Transform Your Business?
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              >
                Get expert guidance and comprehensive solutions tailored to your business
                needs, from incorporation to ongoing compliance and strategic growth.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-navy text-white px-8 py-4 rounded-xl text-lg font-bold shadow-md hover:bg-navy-800 hover:shadow-lg transition-all"
                    style={{ fontFamily: 'Nexa Bold' }}
                  >
                    <Link to="/services" className="group flex items-center gap-2">
                      Explore All Services
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border border-gold/70 text-gold hover:bg-gold/10 px-8 py-4 rounded-xl text-lg font-semibold"
                    style={{ fontFamily: 'Nexa Bold' }}
                  >
                    <Link to="/contact">Get Consultation</Link>
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
