import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { mainServiceCategories, moreServices } from '@/data/servicesData';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Users, 
  Award, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Phone, 
  Mail, 
  FileText, 
  Search, 
  Clock,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import * as Icons from 'lucide-react';

const ServiceCategory: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  
  const category = mainServiceCategories.find(cat => cat.slug === categorySlug) || 
                   moreServices.find(cat => cat.slug === categorySlug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-6">The service category you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/services">← Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  const IconComponent = (Icons as any)[category.icon];

  const categoryStats = {
    clients: '500+',
    projects: '1,200+',
    satisfaction: '99%',
    experience: '10+'
  };

  const categoryBenefits = [
    'Expert team with years of industry experience',
    'Proven methodologies and best practices',
    'End-to-end service delivery and support',
    'Competitive pricing with transparent costs',
    'Quick turnaround without compromising quality',
    'Ongoing maintenance and optimization'
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your requirements and business goals',
      icon: <Search className="h-8 w-8" />
    },
    {
      step: '02', 
      title: 'Planning',
      description: 'Creating detailed project roadmap and timeline',
      icon: <TrendingUp className="h-8 w-8" />
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Implementing solutions with regular updates',
      icon: <Award className="h-8 w-8" />
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Testing, deployment, and ongoing support',
      icon: <Star className="h-8 w-8" />
    }
  ];

  const ctaContent = {
    title: 'Ready to Get Started?',
    description: `Our experienced professionals are ready to discuss your specific ${category.name.toLowerCase()} requirements and provide tailored solutions for your business needs.`,
    phone: '+91 98765 43210',
    email: 'info@unfoldfinleg.com'
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/services" className="hover:text-navy-600 transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-gray-800">{category.name}</span>
        </nav>
      </div>

          {/* Hero Section - DARK NAVY WITH GOLDEN ACCENTS */}
      <section className="bg-gradient-to-br from-navy-900 via-[#0f1729] to-black text-white py-20 lg:py-32 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,<svg width=60 height=60 xmlns=%22http://www.w3.org/2000/svg%22><g fill=%22white%22><path d=%22M0 0h60v60H0z%22 fill=%22none%22 stroke=%22white%22 stroke-width=%220.5%22/></g></svg>')] "/>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Icon with golden glow */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative mb-8"
            >
              <div className="absolute inset-0 bg-gold-500/20 blur-2xl rounded-full w-24 h-24 mx-auto" />
              <div className="bg-gradient-to-br from-navy-700 to-navy-800 rounded-full w-24 h-24 flex items-center justify-center mx-auto relative border border-gold-400/30">
                {IconComponent && <IconComponent className="h-12 w-12 text-gold-400" />}
              </div>
            </motion.div>
            
            {/* Title with gradient accent */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
            >
              {category.name}
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="block h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mt-4 origin-left"
              />
            </motion.h1>

            {/* Description with enhanced styling */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl lg:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              {category.description}
            </motion.p>
            
            {/* Stats with golden accents */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-3xl mx-auto"
            >
              {[
                { label: 'Happy Clients', value: categoryStats.clients },
                { label: 'Projects Done', value: categoryStats.projects },
                { label: 'Satisfaction Rate', value: categoryStats.satisfaction },
                { label: 'Years Experience', value: categoryStats.experience }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05, translateY: -4 }}
                  className="relative group"
                >
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-gold-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
                  
                  <div className="relative bg-gradient-to-br from-navy-700/40 to-navy-800/40 backdrop-blur-sm p-4 rounded-lg border border-gold-400/20 hover:border-gold-400/50 transition-all duration-300">
                    <div className="text-3xl sm:text-4xl font-bold text-gold-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
      </section>


            {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          {category.subServices && category.subServices.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {category.subServices.map((service, index) => {
                const ServiceIcon = (Icons as any)[service.icon] || FileText;
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 h-full flex flex-col">
                      {/* Top accent bar */}
                      <div className="h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400" />
                      
                      <div className="p-6 sm:p-8 flex flex-col h-full">
                        {/* Header with icon and price */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="bg-gradient-to-br from-navy-100 to-navy-50 text-navy-700 p-4 rounded-xl">
                            <ServiceIcon className="h-6 w-6" />
                          </div>
                          <div className="text-right">
                            {service.price && (
                              <div className="text-2xl font-bold text-navy-900">{service.price}</div>
                            )}
                            {service.duration && (
                              <div className="text-xs text-gray-500 flex items-center justify-end gap-1 mt-2">
                                <Clock className="h-3 w-3" />
                                {service.duration}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                          {service.name}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                          {service.description}
                        </p>
                        
                        {/* Features */}
                        <div className="space-y-2 mb-8 py-4 border-t border-b border-gray-200">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle className="h-4 w-4 text-navy-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                          {service.features.length > 3 && (
                            <div className="text-sm text-navy-600 font-semibold pt-2">
                              +{service.features.length - 3} more features
                            </div>
                          )}
                        </div>
                        
                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                          <Button asChild className="flex-1 bg-navy-700 hover:bg-navy-800 text-white font-semibold rounded-lg transition-all" size="sm">
                            <Link to={`/services/${categorySlug}/${service.slug}`} className="flex items-center justify-center gap-2">
                              View Details
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button asChild variant="outline" className="flex-1 border-2 border-gold-400 text-navy-600 hover:bg-gold-50 font-semibold rounded-lg transition-all" size="sm">
                            <Link to="/contact">
                              Get Quote
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-6 text-lg">Services are being updated. Please check back soon.</p>
              <Button asChild>
                <Link to="/contact">Contact us for more information</Link>
              </Button>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-16"
          >
            <Button asChild size="lg" className="bg-navy-700 hover:bg-navy-800 text-white font-bold px-8 py-3 rounded-lg">
              <Link to="/services" className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Explore All Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                Why Choose Our {category.name} Services?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                We bring expertise, reliability, and innovation to every project we undertake.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {categoryBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start bg-gray-50 p-6 rounded-xl hover:bg-navy-50 transition-colors"
                >
                  <div className="bg-navy-100 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-navy-600" />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg text-gray-700">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Our Process</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              We follow a proven methodology to ensure successful project delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {developmentProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-navy-100 text-navy-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {process.icon}
                </div>
                <div className="text-sm font-bold text-navy-600 mb-2">{process.step}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
            {/* Contact CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-navy-800 via-navy-900 to-navy-950 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">{ctaContent.title}</h2>
                <p className="text-lg sm:text-xl mb-8 text-navy-200">
                  {ctaContent.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-gold-500 text-navy-900 hover:bg-gold-600">
                    <Link to="/contact">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Get In Touch
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/services">
                      <Users className="h-5 w-5 mr-2" />
                      View All Services
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <div className="bg-white bg-opacity-10 rounded-lg p-6 lg:p-8 backdrop-blur-sm border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-white">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center md:justify-end">
                      <Phone className="h-5 w-5 mr-3 text-gold-400" />
                      <div>
                        <div className="text-sm text-navy-200">Call Us</div>
                        <a href={`tel:${ctaContent.phone}`} className="font-semibold hover:text-gold-400 transition-colors">
                          {ctaContent.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center justify-center md:justify-end">
                      <Mail className="h-5 w-5 mr-3 text-gold-400" />
                      <div>
                        <div className="text-sm text-navy-200">Email Us</div>
                        <a href={`mailto:${ctaContent.email}`} className="font-semibold hover:text-gold-400 transition-colors">
                          {ctaContent.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceCategory;


     