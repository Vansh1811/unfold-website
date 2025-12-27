import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { mainServiceCategories, moreServices } from '@/data/servicesData';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle, 
  Clock, 
  Phone, 
  Mail, 
  ArrowLeft,
  Star,
  Users,
  Award,
  Calendar,
  ArrowRight
} from 'lucide-react';

const ServiceDetail = () => {
  const { categorySlug, serviceSlug } = useParams<{ 
    categorySlug: string; 
    serviceSlug: string; 
  }>();
  
  const [activeTab, setActiveTab] = useState<'overview' | 'process' | 'faqs'>('overview');

  // Find category and service
  const category = mainServiceCategories.find(cat => cat.slug === categorySlug) || 
    moreServices.find(cat => cat.slug === categorySlug);
  
  const service = category?.subServices.find(svc => svc.slug === serviceSlug);

  if (!category || !service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
          <Button asChild>
            <a href="/services">← Back to Services</a>
          </Button>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Services', href: '/services' },
    { label: category.name, href: `/services/${categorySlug}` },
    { label: service.name }
  ];

  // Use real data from servicesData.ts
  const serviceDetails = {
    rating: service.rating || 4.8,
    reviews: service.reviews || 1000,
    completedProjects: 200,
    process: service.procedure || [],
    faqs: service.faqs || [],
    benefits: service.benefits || []
  };

  // Contact information for Unfold Finleg
  const contactInfo = {
    phone: '+91-8076543210',
    email: 'info@unfoldfinleg.com'
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 py-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center mb-4">
            <Button variant="ghost" asChild className="mr-4">
              <a href={`/services/${categorySlug}`}>
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to {category.name}
              </a>
            </Button>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {service.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {service.description}
              </p>
              
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 fill-current mr-1" />
                  <span className="font-semibold">{serviceDetails.rating}</span>
                  <span className="text-gray-500 ml-1">({serviceDetails.reviews} reviews)</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-blue-600 mr-1" />
                  <span>{serviceDetails.completedProjects}+ clients served</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-600 mr-1" />
                  <span>{service.duration} turnaround</span>
                </div>
              </div>
            </div>
            
            <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
                <p className="mb-6">Get a free consultation and detailed quote for your requirements.</p>
                <div className="space-y-3">
                  <Button asChild variant="secondary" className="w-full">
                    <a href="/contact">
                      Get Free Quote
                    </a>
                  </Button>
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-1" />
                      {contactInfo.phone}
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-1" />
                      {contactInfo.email}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation Tabs - REMOVED PACKAGES TAB */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-6">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'process', label: 'Process' },
              { id: 'faqs', label: 'FAQs' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Service Benefits</h2>
                <div className="space-y-4">
                  {serviceDetails.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <Award className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div>
              <h2 className="text-2xl font-bold text-center mb-12">Our Process</h2>
              <div className="max-w-4xl mx-auto">
                {serviceDetails.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start mb-8 last:mb-0"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-6">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-2">{step.description}</p>
                      <p className="text-sm text-blue-600 font-medium">Timeline: {step.timeline}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div>
              <h2 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                {serviceDetails.faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow p-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experts handle your {service.name.toLowerCase()} requirements 
            while you focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <a href="/contact">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Consultation
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`}>
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;