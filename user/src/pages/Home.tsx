import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import FeaturedServices from '@/components/FeaturedServices';

// Lazy load components for better performance
const Hero = lazy(() => import('@/components/Hero'));
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const WhyChooseUs = lazy(() => import('@/components/WhyChooseUs'));
const AboutTeaser = lazy(() => import('@/components/AboutTeaser'));
const CTASection = lazy(() => import('@/components/CTASection'));

// Loading component
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin w-8 h-8 border-2 border-navy-600 border-t-transparent rounded-full"></div>
  </div>
);

const Home = () => {
  const sections = [
    { component: Hero, name: 'hero', priority: 'high' },
    { component: FeaturedServices, name: 'featured-services', priority: 'high' },
    { component: ServicesSection, name: 'services', priority: 'high' },
    { component: WhyChooseUs, name: 'why-choose-us', priority: 'medium' },
    { component: TestimonialsCarousel, name: 'testimonials', priority: 'medium' },
    { component: AboutTeaser, name: 'about-teaser', priority: 'medium' },
    { component: CTASection, name: 'cta', priority: 'low' }
  ];

  const backgroundColor = {
    'hero': 'bg-gradient-to-br from-gray-50 via-white to-gold-50',
    'featured-services': 'bg-white',
    'services': 'bg-gray-50',
    'why-choose-us': 'bg-white',
    'testimonials': 'bg-gradient-to-r from-navy/5 to-gold/5',
    'about-teaser': 'bg-white',
    'cta': 'bg-gradient-to-r from-navy to-navy-700'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen overflow-hidden"
    >
      {sections.map(({ component: Component, name, priority }, index) => {
        const bgClass = backgroundColor[name as keyof typeof backgroundColor] || 'bg-white';
        
        return (
          <motion.section
            key={name}
            variants={sectionVariants}
            viewport={{ 
              once: true, 
              margin: "-100px",
              amount: 0.1
            }}
            whileInView="visible"
            initial="hidden"
            className={`w-full ${bgClass}`}
            style={{
              willChange: 'transform, opacity',
            }}
          >
            <Suspense fallback={<SectionLoader />}>
              <Component />
            </Suspense>
          </motion.section>
        );
      })}
    </motion.main>
  );
};

export default Home;
