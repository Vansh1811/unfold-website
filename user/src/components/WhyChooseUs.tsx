import { motion } from 'framer-motion';
import { Award, Heart, Lightbulb, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: '12+ Years Excellence',
      description: 'Proven track record of helping 500+ businesses navigate complex compliance challenges with expert guidance and innovative solutions.',
      stat: '500+',
      statLabel: 'Clients Served',
      color: 'from-navy to-navy-700'
    },
    {
      icon: Lightbulb,
      title: 'Tailored Solutions',
      description: 'Every business is unique. We create customized strategies that align with your specific industry requirements and business goals.',
      stat: '25+',
      statLabel: 'Industries',
      color: 'from-gold to-gold-600'
    },
    {
      icon: Heart,
      title: 'Ethical & Transparent',
      description: 'Built on trust and integrity. We believe in honest communication and ethical practices in everything we do.',
      stat: '99%',
      statLabel: 'Satisfaction',
      color: 'from-navy to-navy-700'
    },
    {
      icon: Shield,
      title: 'Compliance Guarantee',
      description: 'We ensure 100% regulatory compliance with continuous monitoring and proactive updates for changing requirements.',
      stat: '100%',
      statLabel: 'Compliance',
      color: 'from-gold to-gold-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Create motion-enabled Card
  const MotionCard = motion(Card);
  const MotionDiv = motion.div;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-navy/5 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gold/5 to-transparent rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
            Why Choose{' '}
            <span className="text-gold relative inline-block">
              Us
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-600"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Trusted by <span className="font-semibold text-navy">500+ Businesses</span>
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine deep expertise with a human-centered approach to deliver exceptional results that drive real business growth.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <MotionDiv
              key={feature.title}
              variants={itemVariants}
              className="group"
            >
              <MotionCard 
                className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <CardContent className="p-8 text-center relative">
                  {/* Background Gradient Overlay */}
                  <MotionDiv 
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-lg pointer-events-none`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Icon */}
                  <MotionDiv 
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${feature.color} p-4 shadow-lg`}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <feature.icon className="w-full h-full text-white" />
                  </MotionDiv>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-navy-700 transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    
                    {/* Stat */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="text-2xl font-bold text-navy mb-1">{feature.stat}</div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide">{feature.statLabel}</div>
                    </div>
                  </div>
                </CardContent>
              </MotionCard>
            </MotionDiv>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
