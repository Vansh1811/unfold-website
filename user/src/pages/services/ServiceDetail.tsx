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

         <Card className="relative bg-gradient-to-br from-navy-800 to-navy-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-[#D4AF37] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#D4AF37]/5 pointer-events-none"></div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
            <CardContent className="p-8 relative z-10">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-1 h-8 bg-[#D4AF37] rounded-full"></div>
                <h3 className="text-2xl font-bold text-white">Ready to Start Your Project?</h3>
              </div>
              <p className="mb-6 text-gray-100">Get a free consultation and detailed quote for your requirements.</p>
              <div className="space-y-3">
                <Button asChild className="w-full bg-gradient-to-r from-[#D4AF37] via-[#F5D76E] to-[#D4AF37] text-navy font-semibold px-6 rounded-full py-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  <a href="/contact">
                    Get Free Quote
                  </a>
                </Button>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-300 border-t border-[#D4AF37]/30 pt-4 mt-4">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-1 text-[#D4AF37]" />
                    {contactInfo.phone}
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-1 text-[#D4AF37]" />
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
<section className="py-16 bg-gradient-to-b from-white via-gray-50/50 to-white">
  <div className="container mx-auto px-6">
    {activeTab === 'overview' && (
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="w-1.5 h-10 bg-gradient-to-b from-[#D4AF37] to-[#F5D76E] rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
          </div>
          <div className="space-y-4">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#D4AF37]/40 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-start gap-4">
                 <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-navy-700 to-navy-800 rounded-lg flex items-center justify-center mt-0.5">
                  <CheckCircle className="h-5 w-5 text-[#D4AF37]" />
                </div>


                  <span className="text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="w-1.5 h-10 bg-gradient-to-b from-[#D4AF37] to-[#F5D76E] rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Service Benefits</h2>
          </div>
          <div className="space-y-4">
            {serviceDetails.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#D4AF37]/40 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-navy-600 to-navy-800 rounded-lg flex items-center justify-center mt-0.5">
                    <Award className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">{benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    )}

    {activeTab === 'process' && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#D4AF37] rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Our Process</h2>
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-[#D4AF37] rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg">Step-by-step guidance to success</p>
        </div>
        <div className="max-w-4xl mx-auto">
          {serviceDetails.process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative mb-8 last:mb-0"
            >
              <div className="flex items-start gap-6">
                {/* Step Circle */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-navy-700 to-navy-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg group-hover:shadow-xl group-hover:from-[#D4AF37] group-hover:to-[#F5D76E] group-hover:text-navy-900 transition-all duration-300">
                      {step.step}
                    </div>
                    {index < serviceDetails.process.length - 1 && (
                      <div className="absolute left-1/2 top-full w-1 h-12 bg-gradient-to-b from-[#D4AF37]/40 to-transparent transform -translate-x-1/2"></div>
                    )}
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1 bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#D4AF37]/40">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <div className="relative">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">{step.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                      <span className="font-semibold text-navy-700">Timeline: {step.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    )}

    {activeTab === 'faqs' && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#D4AF37] rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-[#D4AF37] rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg">Find answers to common questions</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-5">
          {serviceDetails.faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#D4AF37]/40 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-7">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-1.5 h-6 bg-gradient-to-b from-[#D4AF37] to-[#F5D76E] rounded-full flex-shrink-0 mt-1"></div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-navy-700 transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed ml-5.5">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    )}
  </div>
</section>


    </div>
  );
};
export default ServiceDetail;