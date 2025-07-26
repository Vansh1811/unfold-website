import { motion } from 'framer-motion';
import { Award, Heart, Lightbulb, Users, TrendingUp, Shield, CheckCircle, Star } from 'lucide-react';
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

  const achievements = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Award, number: '12+', label: 'Years Experience' },
    { icon: TrendingUp, number: '99%', label: 'Success Rate' },
    { icon: Star, number: '4.9/5', label: 'Client Rating' }
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

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-br from-navy-500 to-navy-700 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            opacity: [0.02, 0.05, 0.02]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-navy-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium mb-4 sm:mb-6 shadow-lg border border-navy-100"
          >
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
            <span>Why Choose Us</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-navy-900 mb-4 sm:mb-6 leading-tight">
            Trusted by
            <span className="bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 bg-clip-text text-transparent block sm:inline sm:ml-3 relative">
              500+ Businesses
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed"
          >
            We combine deep expertise with a human-centered approach to deliver exceptional results that drive real business growth.
          </motion.p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${
                index % 2 === 0 ? 'from-navy-500 to-navy-600' : 'from-gold-500 to-gold-600'
              } rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg`}>
                <achievement.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1, type: "spring", stiffness: 200 }}
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy-900 mb-1 sm:mb-2"
              >
                {achievement.number}
              </motion.div>
              <p className="text-xs sm:text-sm text-gray-600 font-medium">{achievement.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="h-full"
            >
              <Card className="group h-full bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="relative p-6 sm:p-8 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -10, 10, 0],
                      y: -4 
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400,
                      rotate: { duration: 0.6 }
                    }}
                    className="mb-6"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-grow mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3 sm:mb-4 group-hover:text-navy-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>

                  {/* Stat */}
                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl sm:text-3xl font-bold text-navy-900">{feature.stat}</span>
                      <span className="text-xs sm:text-sm text-gray-500 font-medium">{feature.statLabel}</span>
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
