import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import unfoldLogo from '@/assets/unfold-logo.png';

const Hero = () => {
  const features = [
    'Complete Business Setup in 10-15 Days',
    'End-to-End Compliance Management', 
    '24/7 Expert Support & Guidance',
    'Government Recognized Consultants'
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0f1a] via-[#0f1419] to-[#0a0f1a] text-white overflow-hidden flex items-center pt-20">
      {/* Animated Background Orbs */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.18, 0.1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-gold-500/25 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.15, 0.08]
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-navy-600/25 to-transparent rounded-full blur-3xl"
      />

      {/* Content Section */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Headline - Better Visibility */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
                style={{ fontFamily: 'Nexa Bold' }}
              >
                <span className="text-gray-100">Your Trusted Partner for</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400">
                  Business Success
                </span>{' '}
                <span className="text-white">in India</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-300 max-w-2xl leading-relaxed"
              >
                From company incorporation to ongoing compliance, we transform regulatory challenges into competitive advantages for growing businesses.
              </motion.p>
            </div>

            {/* Feature List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-3"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                  <span className="text-gray-200">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gold to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-900 font-bold px-8 py-3 text-lg group transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-gold/30"
                asChild
              >
                <Link to="/services">
                  Start Your Business Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gold/50 bg-transparent hover:bg-gold/10 hover:border-gold text-white px-8 py-3 text-lg group transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Our Story
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Clean & Minimal Logo */}
          <div className="hidden lg:flex justify-center items-center relative h-[500px]">
            <motion.img
              src={unfoldLogo}
              alt="Unfold Finleg Solutions"
              className="w-96 h-96 object-contain opacity-90 hover:opacity-100 transition-opacity duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.9, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-gray-400"
        >
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center hover:border-gold transition-colors">
            <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-bounce" />
          </div>
          <span className="text-sm">Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
