import { motion } from 'framer-motion';
import { Award, Heart, Lightbulb, Shield, Sparkles, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const features = [
  {
    icon: Award,
    title: 'Tailored Solutions',
    description:
      'Your unique challenges deserve customized approaches. We design legal and financial strategies that align with your business goals and long-term vision.',
    stat: '500+',
    statLabel: 'BUSINESSES SERVED',
    color: 'bg-navy',
  },
  {
    icon: Lightbulb,
    title: 'Multidisciplinary Expertise',
    description:
      'Our leadership spans corporate law, tax, audit, risk and US compliance, ensuring you receive well-rounded, actionable advice at every stage.',
    stat: '25+',
    statLabel: 'INDUSTRIES',
    color: 'bg-gold',
  },
  {
    icon: Heart,
    title: 'Ethical Backbone',
    description:
      'Transparency, professionalism and accountability form the foundation of our work. We do not just ensure compliance — we build long-term trust.',
    stat: '99%',
    statLabel: 'SATISFACTION',
    color: 'bg-navy',
  },
  {
    icon: Shield,
    title: 'Compliance Guarantee',
    description:
      'We ensure regulatory compliance with continuous monitoring and proactive updates for changing requirements.',
    stat: '100%',
    statLabel: 'COMPLIANCE',
    color: 'bg-gold',
  },
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background Elements - Same as ServicesSection */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-navy-500 to-navy-700 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.05, 0.02]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section - Matching ServicesSection */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm text-navy-600 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg border border-navy-100"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-5 h-5 text-gold-500" />
            </motion.div>
            <span style={{ fontFamily: 'Nexa Bold' }}>Trusted Excellence</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-4 h-4 text-gold-400" />
            </motion.div>
          </motion.div>

          {/* Main Heading with Gold Animation */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-navy-900 mb-6 leading-tight"
            style={{ fontFamily: 'Nexa Bold' }}
          >
            Why Choose
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="block sm:inline bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 bg-clip-text text-transparent mx-0 sm:mx-3 relative"
            >
              Us
              <motion.div
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
              />
            </motion.span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-600 mb-8"
          >
            Trusted by <span className="font-semibold text-navy">200+ Businesses</span>
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-6"
          >
            We combine deep expertise with a human-centered approach to deliver exceptional results that drive
            <span className="text-navy-700 font-semibold"> real business growth</span>.
          </motion.p>
        </motion.div>

        {/* Features Grid - Exactly matching ServicesSection animation pattern */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { type: 'spring', stiffness: 400 }
              }}
              className="group"
            >
              <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer">
                <CardContent className="p-8 text-center relative">
                  {/* Background Gradient Overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-gold/5 to-navy/5 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Icon - Square with Rounded Corners */}
                  <div 
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${feature.color} p-5 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    <feature.icon className="w-full h-full text-white" strokeWidth={1.5} />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-navy-700 transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                      {feature.description}
                    </p>
                    
                    {/* Stat with Better Styling */}
                    <div className="border-t border-gray-200 pt-5 mt-4">
                      <div className="text-3xl font-bold text-navy mb-2">{feature.stat}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">{feature.statLabel}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
