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
  Building, 
  FileText, 
  Scale, 
  Shield, 
  BarChart3, 
  Search, 
  DollarSign,
  Clock,
  Calendar,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import * as Icons from 'lucide-react';

const ServiceCategory: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  
  // Find category in main services or more services
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

  // Get the icon component
  const IconComponent = (Icons as any)[category.icon];

  // Category stats (you can make these dynamic based on actual data)
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
          <Link to="/services" className="hover:text-blue-600 transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-gray-800">{category.name}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-white bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              {IconComponent && <IconComponent className="h-10 w-10" />}
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
              {category.name}
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-blue-100">
              {category.description}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">{categoryStats.clients}</div>
                <div className="text-sm sm:text-base text-blue-200">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">{categoryStats.projects}</div>
                <div className="text-sm sm:text-base text-blue-200">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">{categoryStats.satisfaction}</div>
                <div className="text-sm sm:text-base text-blue-200">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">{categoryStats.experience}</div>
                <div className="text-sm sm:text-base text-blue-200">Years Experience</div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg" className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
                <Link to="/contact">
                  <Calendar className="h-5 w-5 mr-2" />
                  Free Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                <a href={`tel:${ctaContent.phone}`}>
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Our {category.name} Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of {category.name.toLowerCase()} services 
              designed to meet your specific business needs and goals.
            </p>
          </div>

          {category.subServices && category.subServices.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {category.subServices.map((service, index) => {
                const ServiceIcon = (Icons as any)[service.icon] || FileText;
                
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 relative transform hover:-translate-y-1 ${
                      service.popular ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-6">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}

                    {service.trending && !service.popular && (
                      <div className="absolute -top-3 right-6">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Trending
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                        <ServiceIcon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        {service.rating && (
                          <div className="flex items-center mb-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="ml-1 text-sm font-medium text-gray-700">{service.rating}</span>
                            {service.reviews && (
                              <span className="ml-1 text-sm text-gray-500">({service.reviews})</span>
                            )}
                          </div>
                        )}
                        <div className="text-right">
                          {service.price && (
                            <div className="text-lg font-bold text-blue-600">{service.price}</div>
                          )}
                          {service.duration && (
                            <div className="text-sm text-gray-500 flex items-center justify-end">
                              <Clock className="h-4 w-4 mr-1" />
                              {service.duration}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">{service.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-sm text-blue-600 font-medium">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button asChild className="flex-1" size="sm">
                        <Link to={`/services/${categorySlug}/${service.slug}`}>
                          View Details
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1" size="sm">
                        <Link to={`/contact?service=${service.id}`}>
                          Get Quote
                        </Link>
                      </Button>
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

          {/* View More Services Button */}
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Link to="/advanced-services">
                <TrendingUp className="h-5 w-5 mr-2" />
                Explore Advanced Services
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
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
                  className="flex items-start bg-gray-50 p-6 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
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
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {process.icon}
                </div>
                <div className="text-sm font-bold text-blue-600 mb-2">{process.step}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
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
                <p className="text-lg sm:text-xl mb-8 text-blue-100">
                  {ctaContent.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/contact">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Get Free Consultation
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    <Link to="/portfolio">
                      <Users className="h-5 w-5 mr-2" />
                      View Our Work
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <div className="bg-white bg-opacity-10 rounded-lg p-6 lg:p-8">
                  <h3 className="text-xl font-bold mb-4 text-white">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center md:justify-end">
                      <Phone className="h-5 w-5 mr-3" />
                      <div>
                        <div className="text-sm text-blue-200">Call Us</div>
                        <a href={`tel:${ctaContent.phone}`} className="font-semibold hover:underline">
                          {ctaContent.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center justify-center md:justify-end">
                      <Mail className="h-5 w-5 mr-3" />
                      <div>
                        <div className="text-sm text-blue-200">Email Us</div>
                        <a href={`mailto:${ctaContent.email}`} className="font-semibold hover:underline">
                          {ctaContent.email}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild variant="secondary" className="w-full">
                      <Link to="/contact">
                        Get expert advice tailored to your business needs. Our consultation is completely free with no obligations.
                      </Link>
                    </Button>
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
