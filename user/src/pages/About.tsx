import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Heart, Award, ArrowRight, CheckCircle, Building2, TrendingUp, Star, Mail, Linkedin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We believe in honest, transparent communication and ethical practices in all our client relationships.',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for exceptional results and continuous improvement in everything we do.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work alongside our clients as trusted partners, invested in their long-term success.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We stay ahead of industry trends to provide cutting-edge solutions for modern challenges.',
      color: 'from-purple-500 to-violet-600'
    },
  ];

  const stats = [
    { number: '200+', label: 'Businesses Served', icon: Building2 },
    { number: '15+', label: 'Industries Covered', icon: TrendingUp },
    { number: '12+', label: 'Years Experience', icon: Award },
    { number: '98%', label: 'Client Satisfaction', icon: CheckCircle }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      position: 'Founder & Managing Director',
      experience: '15+ Years',
      specialization: 'Corporate Law & Compliance',
      education: 'LLB, Company Secretary',
      email: 'rajesh@unfoldfinlegsolutions.com',
      linkedin: '#',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Priya Sharma', 
      position: 'Senior Legal Consultant',
      experience: '12+ Years',
      specialization: 'Business Registration & IP Rights',
      education: 'LLM, Chartered Accountant',
      email: 'priya@unfoldfinlegsolutions.com',
      linkedin: '#',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Amit Patel',
      position: 'Head of Operations',
      experience: '10+ Years', 
      specialization: 'Tax Consulting & GST',
      education: 'CA, CS, MBA',
      email: 'amit@unfoldfinlegsolutions.com',
      linkedin: '#',
      image: '/api/placeholder/300/300'
    }
  ];

  const milestones = [
    { year: '2013', title: 'Company Founded', description: 'Started with a vision to simplify business compliance' },
    { year: '2015', title: '50+ Clients', description: 'Reached our first major milestone of serving 50 businesses' },
    { year: '2018', title: 'Digital Transformation', description: 'Launched online platform for seamless service delivery' },
    { year: '2020', title: '100+ Success Stories', description: 'Doubled our client base during challenging times' },
    { year: '2023', title: '200+ Businesses', description: 'Expanded across 15+ industries with comprehensive solutions' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 bg-navy-50 text-navy-600 px-4 py-2 rounded-full text-sm font-medium"
              >
                <Award className="w-4 h-4" />
                Established 2013
              </motion.div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-navy-900 leading-tight"
                  style={{ fontFamily: 'Nexa Bold' }}>
                Transforming
                <span className="bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent block sm:inline sm:ml-3">
                  Compliance
                </span>
                into Growth
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Founded in 2013, Unfold emerged from a simple yet powerful vision: compliance shouldn't be a barrier to business growth—it should be a catalyst for it.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-4"
              >
                <p className="text-base sm:text-lg text-gray-600">
                  Our founders, seasoned professionals with decades of experience in regulatory affairs and business strategy, recognized that many companies were struggling to balance compliance requirements with their growth ambitions.
                </p>
                
                <div className="flex items-center gap-4 text-navy-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="font-medium">200+ businesses transformed across 15+ industries</span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                        style={{ fontFamily: 'Nexa Bold' }}>
                  Our Story
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-6 lg:gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    delay: 0.5 + index * 0.1, 
                    type: "spring", 
                    stiffness: 200,
                    damping: 10 
                  }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  className="bg-white/80 backdrop-blur-lg border border-gray-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${
                    index % 2 === 0 ? 'from-navy-500 to-navy-600' : 'from-gold-500 to-gold-600'
                  } rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 300 }}
                    className="text-3xl sm:text-4xl font-bold text-navy-900 mb-2"
                    style={{ fontFamily: 'Nexa Bold' }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do and shape our relationships with clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-4"
                    style={{ fontFamily: 'Nexa Bold' }}>
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 lg:py-32">
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
              Meet Our Expert Team
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Seasoned professionals with decades of combined experience in legal, compliance, and business advisory services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-square bg-gradient-to-br from-navy-100 to-gold-100 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-navy-600 to-navy-700 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-gold-400" style={{ fontFamily: 'Nexa Bold' }}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2"
                      style={{ fontFamily: 'Nexa Bold' }}>
                    {member.name}
                  </h3>
                  <p className="text-gold-600 font-semibold mb-3">{member.position}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <p><span className="font-medium">Experience:</span> {member.experience}</p>
                    <p><span className="font-medium">Specialization:</span> {member.specialization}</p>
                    <p><span className="font-medium">Education:</span> {member.education}</p>
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      href={`mailto:${member.email}`}
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-navy-100 hover:bg-navy-600 text-navy-600 hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                    >
                      <Mail className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={member.linkedin}
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-navy-100 hover:bg-navy-600 text-navy-600 hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
                style={{ fontFamily: 'Nexa Bold' }}>
              Our Journey
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              A decade of growth, innovation, and unwavering commitment to client success.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold text-navy-900" style={{ fontFamily: 'Nexa Bold' }}>
                          {milestone.year.slice(-2)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'Nexa Bold' }}>
                          {milestone.title}
                        </h3>
                        <p className="text-gold-300 font-medium">{milestone.year}</p>
                      </div>
                    </div>
                    <p className="text-blue-100 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-r from-navy-600 via-navy-700 to-navy-800 relative overflow-hidden">
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how we can help your business thrive through smart compliance and strategic governance.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-900 px-10 py-4 rounded-xl text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
                      style={{ fontFamily: 'Nexa Bold' }}>
                Start Conversation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
