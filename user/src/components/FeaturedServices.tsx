import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Building2, Scale, Calculator, Shield } from 'lucide-react';
import { getFeaturedServices } from '@/data/servicesData';

const FeaturedServices = () => {
  const featuredServices = getFeaturedServices();
  
  const serviceIcons = {
    'Company Formation & Registration': Building2,
    'Legal Compliance & Advisory': Scale,
    'Taxation & Accounting': Calculator,
    'Intellectual Property Rights': Shield,
  };

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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
            <Star className="w-4 h-4 text-gold mr-2" />
            <span className="text-sm font-semibold text-navy">
              Featured Services
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">
            Most Popular Business Services
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our top-rated services that have helped thousands of entrepreneurs 
            start and grow their businesses successfully across India.
          </p>
        </motion.div>

        {/* Featured Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featuredServices.map((service, index) => {
            const IconComponent = serviceIcons[service.category as keyof typeof serviceIcons] || Building2;
            
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(15, 27, 43, 0.25)"
                }}
                className="group"
              >
                <Card className="h-full border-2 border-gray-100 hover:border-gold/30 transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-white hover:to-gold/5 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-navy to-navy-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-gold" />
                    </div>
                    
                    <div className="flex items-center justify-between mb-2">
                      <Badge 
                        variant="secondary" 
                        className="bg-gold/10 text-gold hover:bg-gold/20 text-xs font-semibold"
                      >
                        Popular
                      </Badge>
                      {service.price && (
                        <span className="text-sm font-bold text-navy">
                          {service.price}
                        </span>
                      )}
                    </div>
                    
                    <CardTitle className="text-xl font-heading font-bold text-navy group-hover:text-gold transition-colors duration-300 line-clamp-2">
                      {service.name}
                    </CardTitle>
                    
                    <CardDescription className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-3 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                      
                      {service.features.length > 3 && (
                        <div className="text-xs text-gray-500 font-medium">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      {service.duration && (
                        <span className="text-xs text-gray-500 font-medium">
                          Duration: {service.duration}
                        </span>
                      )}
                      
                      <Link 
                        to={`/services/${service.category.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace(/\s+/g, '-')}/${service.slug}`}
                        className="group/link"
                      >
                        <Button 
                          size="sm" 
                          className="bg-navy hover:bg-navy-700 text-white group-hover/link:bg-gold group-hover/link:text-navy transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-navy/5 to-gold/5 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-heading font-bold text-navy mb-4">
              Need Help Choosing the Right Service?
            </h3>
            
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our business experts are ready to guide you through the perfect service 
              combination for your specific needs and industry requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button className="bg-navy hover:bg-navy-700 text-white px-8 py-3 rounded-xl font-semibold">
                  View All Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  className="border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 rounded-xl font-semibold"
                >
                  Get Expert Consultation
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedServices;
