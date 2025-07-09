import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { mainServiceCategories, moreServices } from '@/data/servicesData';
import SubServiceCard from '@/components/SubServiceCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import * as Icons from 'lucide-react';

const ServiceCategory = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  
  // Find category in main services or more services
  const category = mainServiceCategories.find(cat => cat.slug === categorySlug) ||
                  moreServices.find(cat => cat.slug === categorySlug);

  if (!category) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-8">The service category you're looking for doesn't exist.</p>
          <Button className="bg-gold hover:bg-yellow-500 text-navy">
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  const IconComponent = (Icons as any)[category.icon];

  const breadcrumbItems = [
    { label: 'Services', href: '/services' },
    { label: category.name }
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
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-yellow-500 rounded-2xl flex items-center justify-center shadow-gold">
                {IconComponent && <IconComponent className="h-10 w-10 text-navy" />}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy mb-6">
              {category.name}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sub-services Grid */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              Our {category.name} Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of {category.name.toLowerCase()} services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.subServices.map((service, index) => (
              <SubServiceCard
                key={service.id}
                {...service}
                categorySlug={category.slug}
                index={index}
              />
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
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Need Help Choosing?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Our experts can help you select the right {category.name.toLowerCase()} service for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gold hover:bg-yellow-500 text-navy font-semibold px-8 py-3">
                Get Free Consultation
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

export default ServiceCategory;