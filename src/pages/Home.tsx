import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutTeaser from '@/components/AboutTeaser';
import CTASection from '@/components/CTASection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <AboutTeaser />
      <CTASection />
    </div>
  );
};

export default Home;