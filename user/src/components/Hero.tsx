import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Award, TrendingUp, Play, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const stats = [
    { icon: Users, number: '200+', label: 'Happy Clients', color: 'from-blue-500 to-blue-600' },
    { icon: Award, number: '12+', label: 'Years Experience', color: 'from-green-500 to-green-600' },
    { icon: TrendingUp, number: '15+', label: 'Industries', color: 'from-purple-500 to-purple-600' },
    { icon: Star, number: '4.9/5', label: 'Client Rating', color: 'from-gold-500 to-gold-600' }
  ];

  const features = [
    'Complete Business Setup in 10-15 Days',
    'End-to-End Compliance Management',
    '24/7 Expert Support & Guidance',
    'Government Recognized Consultants'
  ];

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-4 h-4 bg-gold-400 rounded-full opacity-20"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, Math.random() * 20 - 10, 0],
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.5, 0.2]
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2
      }}
    />
  ));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-navy-400 to-navy-600 rounded-full blur-3xl"
        />
        
        {/* Floating Elements */}
        {floatingElements}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Award className="w-4 h-4 text-gold-400" />
              </motion.div>
              <span>Trusted by 200+ Businesses Across India</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                style={{ fontFamily: 'Nexa Bold' }}
              >
                Your Trusted Partner for
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="block bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 bg-clip-text text-transparent relative"
                >
                  Business Success
                  <motion.div
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
                  />
                </motion.span>
                in India
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl sm:text-2xl text-blue-100 leading-relaxed max-w-2xl"
              >
                From company incorporation to ongoing compliance, we transform regulatory challenges into competitive advantages for growing businesses.
              </motion.p>
            </div>

            {/* Feature List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-navy-900" />
                  </div>
                  <span className="text-blue-100 font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-900 px-8 py-4 rounded-xl text-lg font-bold shadow-2xl hover:shadow-gold/25 transition-all duration-300"
                  style={{ fontFamily: 'Nexa Bold' }}
                >
                  <Link to="/contact" className="group flex items-center gap-2">
                    Start Your Business Journey
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl text-lg font-semibold"
                  style={{ fontFamily: 'Nexa Bold' }}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Our Story
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: 0.8 + index * 0.1, 
                    type: "spring", 
                    stiffness: 200,
                    damping: 10 
                  }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1, type: "spring", stiffness: 300 }}
                    className="text-3xl sm:text-4xl font-bold text-white mb-2"
                    style={{ fontFamily: 'Nexa Bold' }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-blue-100 font-medium text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Floating Achievement Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
              className="absolute -top-8 -right-8 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 px-4 py-2 rounded-full text-sm font-bold shadow-2xl"
              style={{ fontFamily: 'Nexa Bold' }}
            >
              🏆 Industry Leader
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gold-400 rounded-full mt-2"
            />
          </motion.div>
          <p className="text-white/60 text-sm mt-2 text-center">Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
