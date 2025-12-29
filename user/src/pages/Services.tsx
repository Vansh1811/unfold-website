import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Filter, ArrowRight, CheckCircle, Clock, Users, Award, Grid3X3, List, Star } from 'lucide-react';
import { mainServiceCategories, searchServices } from '@/data/servicesData';
import ServiceCategoryCard from '@/components/ServiceCategoryCard';
import { Link } from 'react-router-dom';


const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const serviceCategories = [
    { id: 'all', name: 'All Services', count: 50 },
    { id: 'company-formation', name: 'Company Formation', count: 6 },
    { id: 'legal-compliance', name: 'Legal Compliance', count: 6 },
    { id: 'taxation-accounting', name: 'Taxation & Accounting', count: 4 },
    { id: 'intellectual-property', name: 'IP Rights', count: 4 },
    { id: 'hr-payroll', name: 'HR Solutions', count: 3 },
    { id: 'business-licensing', name: 'Business Licensing', count: 4 }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We understand your business needs and regulatory requirements through a comprehensive consultation.',
      icon: Users,
      duration: '30 minutes'
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Our experts craft a customized compliance and growth strategy tailored to your industry.',
      icon: Award,
      duration: '2-3 days'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We execute the strategy with precision, ensuring all regulatory requirements are met efficiently.',
      icon: CheckCircle,
      duration: '1-4 weeks'
    },
    {
      number: '04',
      title: 'Ongoing Support',
      description: 'Continuous monitoring and support to ensure sustained compliance and business growth.',
      icon: Clock,
      duration: 'Ongoing'
    }
  ];

  const filteredServices = mainServiceCategories.filter(service => 
    (selectedCategory === 'all' || service.id === selectedCategory) &&
    (service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     service.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-navy-50 text-navy-600 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Award className="w-4 h-4" />
              Professional Services
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy-900 mb-6 leading-tight"
                style={{ fontFamily: 'Nexa Bold' }}>
              Complete Business
              <span className="bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent block sm:inline sm:ml-4">
                Solutions
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              From company formation to ongoing compliance, we provide comprehensive solutions that grow with your business.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid gap-6 lg:gap-8 mb-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {mainServiceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <ServiceCategoryCard 
                  subServiceCount={0} 
                  {...category}
                  index={index}
                  featured={index === 0 || index === 3}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6"
                style={{ fontFamily: 'Nexa Bold' }}>
              Our Proven Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A proven methodology that ensures successful outcomes for every engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative"
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-6 text-center">
                    {/* Step Number */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-navy-600 to-navy-700 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                        {step.number}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-navy-900 mb-3"
                        style={{ fontFamily: 'Nexa Bold' }}>
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    <div className="inline-flex items-center gap-2 bg-navy-50 text-navy-600 px-3 py-1 rounded-full text-sm font-medium">
                      <Clock className="w-3 h-3" />
                      {step.duration}
                    </div>
                  </CardContent>
                </Card>

                {/* Connecting Line (desktop only) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-12 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500 transform translate-x-0 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-r from-navy-600 via-navy-700 to-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
                style={{ fontFamily: 'Nexa Bold' }}>
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Schedule a free consultation to discuss how our services can benefit your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-900 px-8 py-4 rounded-xl text-lg font-bold shadow-2xl"
                        style={{ fontFamily: 'Nexa Bold' }}>
                  Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl text-lg font-semibold"
                  style={{ fontFamily: 'Nexa Bold' }}
                >
                  View Portfolio
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
