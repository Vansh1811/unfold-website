import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ServiceCategoryCard from '@/components/ServiceCategoryCard';
import { moreServices } from '@/data/servicesData';
import Breadcrumbs from '@/components/Breadcrumbs';

const MoreServices = () => {
  const breadcrumbItems = [
    { label: 'Services', href: '/services' },
    { label: 'More Services' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding hero-pattern">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} />
          
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy mb-6">
              More <span className="text-gold">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our additional specialized services designed to support your business growth and success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {moreServices.map((service, index) => (
              <ServiceCategoryCard
                key={service.id}
                title={service.name}
                description={service.description}
                icon={service.icon}
                slug={service.slug}
                subServiceCount={service.subServices.length}
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
            <Link to="/services">
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                ← Back to All Services
              </Button>
            </Link>
          </motion.div>
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
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Need Custom Solutions?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Don't see exactly what you're looking for? We offer custom solutions tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gold hover:bg-yellow-500 text-navy font-semibold px-8 py-3">
                Request Custom Solution
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                Contact Our Experts
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MoreServices;
