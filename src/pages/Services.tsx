import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Filter, ArrowRight, CheckCircle, Clock, Users, Award } from 'lucide-react';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', count: 15 },
    { id: 'incorporation', name: 'Company Formation', count: 4 },
    { id: 'compliance', name: 'Legal Compliance', count: 3 },
    { id: 'accounting', name: 'Accounting & Tax', count: 4 },
    { id: 'hr', name: 'HR Solutions', count: 2 },
    { id: 'advisory', name: 'Business Advisory', count: 2 }
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

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy-900 mb-6 leading-tight">
              Complete Business
              <span className="bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent block sm:inline sm:ml-4">
                Solutions
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              From company formation to ongoing compliance, we provide comprehensive solutions that grow with your business.
            </p>

            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-0 bg-gray-50 focus:bg-white transition-colors h-12"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-gray-50 border-0 rounded-lg font-medium text-gray-700 focus:bg-white transition-colors min-w-[200px]"
                >
                  {serviceCategories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>
          </motion.div>

          {/* Service Categories Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
          >
            {serviceCategories.slice(1).map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-xl text-center transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-navy-600 text-white shadow-lg'
                    : 'bg-white/80 text-navy-600 hover:bg-navy-50'
                }`}
              >
                <div className="font-semibold text-sm mb-1">{category.name}</div>
                <div className="text-xs opacity-75">{category.count} services</div>
              </motion.button>
            ))}
          </motion.div>

          {/* No Results State */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
            <p className="text-gray-500 mb-6">Try searching with different keywords or browse our service categories below.</p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-navy-600 hover:bg-navy-700 text-white px-6 py-2 rounded-lg"
            >
              View All Services
            </Button>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
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

                    <h3 className="text-xl font-bold text-navy-900 mb-3">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
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
                <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-900 px-8 py-4 rounded-xl text-lg font-bold shadow-2xl">
                  Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold border border-white/20">
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
