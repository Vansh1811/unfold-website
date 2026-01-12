import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import unfoldLogo from '@/assets/unfold-logo.png';
import About from '@/pages/About';

const Hero = () => {
  const features = [
    'Complete Business Setup in 10-15 Days',
    'End-to-End Compliance Management',
    '24/7 Expert Support & Guidance',
    'Government Recognized Consultants',
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0f1a] via-[#0f1419] to-[#0a0f1a] text-white overflow-hidden flex items-center pt-20">
      {/* Golden animated dot grid over background */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <motion.div
          className="absolute inset-0"
          animate={{ y: [0, -10, 0], x: [0, 12, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(250, 204, 21, 0.9) 1px, transparent 0.25px)',
            backgroundSize: '50px 70px',
            opacity: 0.9,
          }}
        />
      </motion.div>

      {/* Animated Background Orbs */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          opacity: [0.01, 0.18, 0.1],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-gold-500/25 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 1.15, 1],
          opacity: [0.008, 0.15, 0.08],
        }}
        transition={{ duration: 0, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-navy-600/25 to-transparent rounded-full blur-3xl"
      />

      {/* Content Section */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
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
                Unfold Finleg Solutions LLP (UFS) is a one‑stop solution for corporate governance, auditing, accounting, taxation and international advisory, helping businesses from incorporation to cross‑border expansion with integrated, high‑integrity solutions
              </motion.p>
            </div>

            {/* Features */}
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

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gold/50 bg-transparent hover:bg-gold/10 hover:border-gold text-white px-8 py-3 text-lg group transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                <Link to="/services">Start Your Business Journey</Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gold/50 bg-transparent hover:bg-gold/10 hover:border-gold text-white px-8 py-3 text-lg group transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                <Link to="/About">Know About Us</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side – tilted multi-orbit around logo */}
          <div className="hidden lg:flex justify-center items-center relative h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative w-96 h-96 flex items-center justify-center"
              style={{
                transformStyle: 'preserve-3d',
                perspective: 1000,
              }}
            >
              {/* Orbit system */}
              <div
                className="absolute inset-0"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'rotateX(55deg) rotateZ(18deg)',
                }}
              >
                {/* Outer elliptical orbit */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-gold/25"
                  style={{
                    width: '100%',
                    height: '75%',
                    top: '12.5%',
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                    boxShadow: '0 0 24px rgba(255, 215, 128, 0.25)',
                    transformOrigin: '50% 50%',
                  }}
                  animate={{ rotateZ: [0, 360] }}
                  transition={{
                    duration: 26,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <motion.div
                    className="absolute w-3 h-3 rounded-full bg-gold"
                    style={{
                      top: '50%',
                      left: '100%',
                      transform: 'translate(-50%, -50%)',
                      boxShadow: '0 0 18px rgba(255, 215, 128, 0.95)',
                    }}
                    animate={{ rotateZ: [0, -360] }}
                    transition={{
                      duration: 26,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </motion.div>

                {/* Middle orbit */}
                <motion.div
                  className="absolute inset-10 rounded-full border border-gold/35"
                  style={{
                    width: '82%',
                    height: '58%',
                    top: '21%',
                    left: '9%',
                    boxShadow: '0 0 18px rgba(255, 215, 128, 0.2)',
                    transformOrigin: '50% 50%',
                  }}
                  animate={{ rotateZ: [0, -360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <motion.div
                    className="absolute w-2.5 h-2.5 rounded-full bg-gold"
                    style={{
                      top: '50%',
                      left: '100%',
                      transform: 'translate(-50%, -50%)',
                      boxShadow: '0 0 16px rgba(255, 215, 128, 0.85)',
                    }}
                    animate={{ rotateZ: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </motion.div>

                {/* Inner orbit */}
                <motion.div
                  className="absolute inset-20 rounded-full border border-gold/50"
                  style={{
                    width: '64%',
                    height: '45%',
                    top: '27.5%',
                    left: '18%',
                    boxShadow: '0 0 12px rgba(255, 215, 128, 0.25)',
                    transformOrigin: '50% 50%',
                  }}
                  animate={{ rotateZ: [0, 360] }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <motion.div
                    className="absolute w-2 h-2 rounded-full bg-gold"
                    style={{
                      top: '50%',
                      left: '100%',
                      transform: 'translate(-50%, -50%)',
                      boxShadow: '0 0 12px rgba(255, 215, 128, 0.9)',
                    }}
                    animate={{ rotateZ: [0, -360] }}
                    transition={{
                      duration: 14,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </motion.div>
              </div>

              {/* Center logo */}
              <motion.img
                src={unfoldLogo}
                alt="Unfold Finleg Solutions"
                className="w-64 h-64 object-contain opacity-90 hover:opacity-100 transition-opacity duration-500 relative z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.9, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </motion.div>
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
