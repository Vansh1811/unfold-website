import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, Award, TrendingUp, Target, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';


const AboutTeaser = () => {
  const stats = [
    { icon: Users, number: '200+', label: 'Businesses Served' },
    { icon: Award, number: '12+', label: 'Years Experience' },
    { icon: TrendingUp, number: '15+', label: 'Industries Covered' },
    { icon: Target, number: '98%', label: 'Success Rate' }
  ];

  const values = [
    {
      title: 'Expert Guidance',
      description: 'Deep expertise in corporate governance, auditing, accounting and taxation, combined with practical, real‑world solutions'
    },
    {
      title: 'Human-Centered',
      description: 'Your success is at the heart of everything we do, with personalized attention and long‑term partnerships and support'
    },
    {
      title: 'Proven Results',
      description: 'Strong track record of turning complex regulatory and compliance challenges into strategic growth opportunities'
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
      {/* Animated Background Elements - Same as Services Section */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-navy-500 to-navy-700 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.05, 0.02]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm text-navy-600 px-6 py-3 rounded-full text-sm font-medium shadow-lg border border-navy-100"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-gold-500" />
              </motion.div>
              <span style={{ fontFamily: 'Nexa Bold' }}>About Unfold</span>
            </motion.div>

            {/* Headline - Matching Style */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-navy-900 mb-6 leading-tight"
              style={{ fontFamily: 'Nexa Bold' }}
            >
              Compliance as a
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="block sm:inline bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 bg-clip-text text-transparent mx-0 sm:mx-3 relative"
              >
                Catalyst for Growth
                <motion.div
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
                />
              </motion.span>
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              At Unfold, compliance is not a barrier to growth—it is a catalyst for it. We help businesses transform regulatory challenges across governance, auditing, accounting and taxation into competitive advantages.
              </p>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Our mission is simple: to unfold your business potential by providing expert guidance in corporate governance, compliance and strategic growth, both in India and internationally. We combine deep industry expertise with a human‑centered approach that puts your success at the heart of everything we do.
              </p>
            </motion.div>

            {/* Values Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <h4 className="font-semibold text-navy-900 mb-2 text-sm sm:text-base" style={{ fontFamily: 'Nexa Bold' }}>
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link to="/about">
                  <Button className="bg-navy text-white px-8 py-4 rounded-xl text-base font-bold shadow-md hover:bg-navy-800 hover:shadow-lg transition-all" style={{ fontFamily: 'Nexa Bold' }}>
                    Learn More About Us
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats Section - Enhanced Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card className="h-full flex flex-col border border-gray-100 bg-white/90 shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:border-gold/60 transition-all duration-300 rounded-2xl overflow-hidden relative">
                    {/* Top accent */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-gold/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <CardContent className="p-4 sm:p-6 text-center flex-grow flex flex-col justify-center">
                      <div className={`w-12 h-12 bg-gradient-to-br ${
                        index % 2 === 0 ? 'from-navy to-navy-700' : 'from-gold-500 to-gold-600'
                      } rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                        className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2"
                        style={{ fontFamily: 'Nexa Bold' }}
                      >
                        {stat.number}
                      </motion.div>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Mission Statement Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              whileHover={{ y: -8 }}
            >
              <Card className="border border-gray-100 bg-white/90 shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:border-gold/60 transition-all duration-300 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-gold/70 to-transparent" />
                
                <CardContent className="p-6 sm:p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-3" style={{ fontFamily: 'Nexa Bold' }}>
                      Our Mission
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      To unfold your business potential through strategic compliance solutions that drive sustainable growth and competitive advantage.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
