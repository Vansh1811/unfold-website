import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { mainServiceCategories, moreServices } from '@/data/servicesData';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, DollarSign, Phone, Mail } from 'lucide-react';
import * as Icons from 'lucide-react';

const ServiceDetail = () => {
  const { categorySlug, serviceSlug } = useParams<{ 
    categorySlug: string; 
    serviceSlug: string; 
  }>();
  
  // Find category and service
  const category = mainServiceCategories.find(cat => cat.slug === categorySlug) ||
                  moreServices.find(cat => cat.slug === categorySlug);
  
  const service = category?.subServices.find(svc => svc.slug === serviceSlug);

  if (!category || !service) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Button className="bg-gold hover:bg-yellow-500 text-navy">
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  const IconComponent = (Icons as any)[service.icon];

  const breadcrumbItems = [
    { label: 'Services', href: '/services' },
    { label: category.name, href: `/services/${category.slug}` },
    { label: service.name }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding hero-pattern">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-500 rounded-xl flex items-center justify-center mr-4 shadow-gold">
                  {IconComponent && <IconComponent className="h-8 w-8 text-navy" />}
                </div>
                <div>
                  <p className="text-gold font-medium">{category.name}</p>
                  <h1 className="text-3xl md:text-4xl font-heading font-bold text-navy">
                    {service.name}
                  </h1>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gold hover:bg-yellow-500 text-navy font-semibold px-8 py-3">
                  Get Started Now
                </Button>
                <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                  Get Free Quote
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-white shadow-card border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl font-heading font-semibold text-navy mb-6">
                    Service Overview
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    {service.price && (
                      <div className="flex items-center space-x-3">
                        <DollarSign className="h-5 w-5 text-gold" />
                        <div>
                          <span className="text-sm text-muted-foreground">Price: </span>
                          <span className="font-semibold text-navy">{service.price}</span>
                        </div>
                      </div>
                    )}
                    
                    {service.duration && (
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-gold" />
                        <div>
                          <span className="text-sm text-muted-foreground">Duration: </span>
                          <span className="font-semibold text-navy">{service.duration}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="font-semibold text-navy mb-4">Quick Contact</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-gold" />
                        <span className="text-sm">+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-gold" />
                        <span className="text-sm">info@unfoldconsulting.com</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-8">
                What's Included
              </h2>
              
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-light-gray border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl font-heading font-semibold text-navy mb-6">
                    Why Choose This Service?
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-navy font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy mb-1">Expert Guidance</h4>
                        <p className="text-sm text-muted-foreground">Professional expertise with years of experience</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-navy font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy mb-1">Complete Support</h4>
                        <p className="text-sm text-muted-foreground">End-to-end service with ongoing assistance</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-navy font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy mb-1">Timely Delivery</h4>
                        <p className="text-sm text-muted-foreground">Quick turnaround with quality assurance</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Let our experts handle your {service.name.toLowerCase()} requirements while you focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gold hover:bg-yellow-500 text-navy font-semibold px-8 py-3">
                Start Your Application
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;