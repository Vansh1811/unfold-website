import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, Award, TrendingUp, Target } from 'lucide-react';
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
      description: 'Deep industry expertise combined with practical, real-world solutions.'
    },
    {
      title: 'Human-Centered',
      description: 'Your success is at the heart of everything we do, with personalized attention.'
    },
    {
      title: 'Proven Results',
      description: 'Track record of transforming compliance challenges into growth opportunities.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-white via-blue-50/30 to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180],
            opacity: [0.02, 0.04, 0.02]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 -right-32 w-96 h-96 bg-gradient-to-br from-navy-400 to-navy-600 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [180, 90, 0],
            opacity: [0.02, 0.05, 0.02]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -left-32 w-80 h-80 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full blur-3xl"
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
            {/* Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-navy-50 text-navy-600 px-4 py-2 rounded-full text-sm font-medium"
            >
              <Award className="w-4 h-4" />
              About Unfold
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight"
            >
              Compliance as a
              <span className="bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent block sm:inline sm:ml-3">
                Catalyst for Growth
              </span>
            </motion.h2>

            {/* Main Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                At Unfold, we believe that compliance shouldn't be a barrier to growth—it should be a catalyst for it. With over a decade of experience, we've helped hundreds of businesses transform regulatory challenges into competitive advantages.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Our mission is simple: to unfold your business potential by providing expert guidance in governance, compliance, and strategic growth. We combine deep industry expertise with a human-centered approach that puts your success at the heart of everything we do.
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
                  <h4 className="font-semibold text-navy-900 mb-2 text-sm sm:text-base">
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
                  <Button className="bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group">
                    Learn More About Us
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
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
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${
                        index % 2 === 0 ? 'from-navy-500 to-navy-600' : 'from-gold-500 to-gold-600'
                      } rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg`}>
                        <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                        className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy-900 mb-1 sm:mb-2"
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
              whileHover={{ y: -4 }}
            >
              <Card className="bg-gradient-to-br from-navy-50 to-blue-50 border-2 border-navy-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 sm:p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-3">
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
