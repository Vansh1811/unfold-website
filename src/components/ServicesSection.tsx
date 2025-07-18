import { motion } from 'framer-motion';
import ServiceCategoryCard from './ServiceCategoryCard';
import { mainServiceCategories } from '@/data/servicesData';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

const ServicesSection = () => {
 
  return (
    <section className="section-padding bg-gradient-to-b from-background to-light-gray">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Comprehensive solutions designed to help your business thrive in today's complex regulatory environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-0">
          {mainServiceCategories.map((category, index) => (
            <ServiceCategoryCard
              key={category.id}
              title={category.name}
              description={category.description}
              icon={category.icon}
              slug={category.slug}
              subServiceCount={category.subServices.length}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="/services/more"
            className="inline-flex items-center px-6 py-3 bg-navy hover:bg-blue-800 text-white font-medium rounded-full transition-all duration-300 hover:scale-105"
          >
            <Plus className="mr-2 h-5 w-5" />
            More Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
