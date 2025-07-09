import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ServiceCategoryCard from '@/components/ServiceCategoryCard';
import SubServiceCard from '@/components/SubServiceCard';
import { mainServiceCategories, searchServices } from '@/data/servicesData';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

const Services = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const searchQuery = searchParams.get('search');

  useEffect(() => {
    if (searchQuery) {
      setIsSearching(true);
      const results = searchServices(searchQuery);
      setSearchResults(results);
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  }, [searchQuery]);


  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding hero-pattern">
        <div className="container-custom">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our <span className="text-gold">Services</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {isSearching 
              ? `Search results for "${searchQuery}"`
              : 'Comprehensive solutions designed to help your business thrive in today\'s complex regulatory environment.'
            }
          </motion.p>
        </motion.div>
        </div>
      </section>

      {/* Search Results or Services Grid */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          {isSearching ? (
            // Search Results
            <div>
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {searchResults.map((service, index) => (
                    <SubServiceCard
                      key={`${service.category}-${service.id}`}
                      {...service}
                      categorySlug={service.category.toLowerCase().replace(/\s+/g, '-')}
                      index={index}
                    />
                  ))}
                </div>
              ) : (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-heading font-semibold text-navy mb-4">
                    No services found for "{searchQuery}"
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Try searching with different keywords or browse our service categories below.
                  </p>
                  <Link to="/services">
                    <Button className="bg-gold hover:bg-yellow-500 text-navy font-medium">
                      Browse All Services
                    </Button>
                  </Link>
                </motion.div>
              )}
            </div>
          ) : (
            // Main Service Categories
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              
              {/* More Services Card */}
              <motion.div
                className="mt-12 flex justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link to="/services/more">
                  <Button className="bg-navy hover:bg-blue-800 text-white font-medium px-8 py-4 text-lg">
                    <Plus className="mr-2 h-5 w-5" />
                    More Services
                  </Button>
                </Link>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful outcomes for every engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business, challenges, and goals' },
              { step: '02', title: 'Analysis', description: 'Comprehensive assessment of current state and requirements' },
              { step: '03', title: 'Strategy', description: 'Development of tailored solutions and implementation roadmap' },
              { step: '04', title: 'Execution', description: 'Implementation with ongoing support and optimization' },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-navy text-gold text-xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-heading font-semibold text-navy mb-2">
                  {process.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Schedule a free consultation to discuss how our services can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gold hover:bg-yellow-500 text-navy font-semibold px-8 py-3">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;