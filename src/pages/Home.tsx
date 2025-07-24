import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';

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
    { component: ServicesSection, name: 'services', priority: 'high' },
    { component: WhyChooseUs, name: 'why-choose-us', priority: 'medium' },
    { component: AboutTeaser, name: 'about-teaser', priority: 'medium' },
    { component: CTASection, name: 'cta', priority: 'low' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeInOut"
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
      {sections.map(({ component: Component, name, priority }, index) => (
        <motion.section
          key={name}
          variants={sectionVariants}
          viewport={{ 
            once: true, 
            margin: "-50px",
            amount: 0.1
          }}
          whileInView="visible"
          initial="hidden"
          className="w-full"
          style={{
            willChange: 'transform, opacity',
            backfaceVisibility: 'hidden',
            perspective: '1000px'
          }}
        >
          <Suspense fallback={<SectionLoader />}>
            <Component />
          </Suspense>
        </motion.section>
      ))}
    </motion.main>
  );
};

export default Home;
