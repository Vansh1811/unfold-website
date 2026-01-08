import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Heart, Award, ArrowRight, CheckCircle, Building2, TrendingUp, Mail, Linkedin, Sparkles, Star, Image} from 'lucide-react';
import Founder from '@/assets/about_us/Founder.png';
import aryan from '@/assets/about_us/aryan.jpeg';
import sapna from '@/assets/about_us/sapna.png';
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
      name: 'Aryan Vashisth',
      position: 'Founder – Corporate & Legal Advisory',
      experience: 'Company Secretary with deep expertise in Companies Act, FEMA, SEBI, IRDA & NBFC compliances, FCRA and U.S. corporate law structuring. He has advised 100+ startups and enterprises on FDI, VC funding, cross-border and transaction structuring in India and the U.S.',
      specialization:
        'Leads the Corporate & International Desk, focusing on India–U.S. entity structuring, BOI compliance, IRS filings, strategic legal advisory and Indian regulatory compliances & advisory.',
      education: 'LLB, Company Secretary',
      email: 'aryan@unfoldfinlegsolutions.com',
      linkedin: 'https://www.linkedin.com/in/cs-aryan-v-241952a7/',
      image: aryan,
    },
    {
      name: 'Divya Sharma',
      position: 'Co-Founder – Secretarial & Compliance',
      experience:
        'Dynamic professional specializing in corporate compliance, foreign exchange laws advisory and entity structuring, with 100+ incorporations across private companies, LLPs, Section 8 companies and foreign subsidiaries.',
      specialization:
        'Leads the regulatory & secretarial practice, advising on Companies Act, FCRA, RBI filings, FEMA compliance, due diligence and board governance for startups, NGOs and global clients expanding into India.',
      education: 'Company Secretary',
      email: 'divya@unfoldfinlegsolutions.com',
      linkedin: 'https://www.linkedin.com/in/divya-sharma-7a3313200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    },
    {
      name: 'Mahesh Mishra',
      position: 'Partner – Risk, Controls & International Audit Advisory',
      experience:
        'Seasoned Chartered Accountant with 11+ years of international audit and compliance experience at Deloitte and EY, specializing in US GAAP, UK GAAP, IFRS, ICFR, SOX and internal audit remediation.',
      specialization:
        'Leads the global risk advisory vertical at Unfold, driving robust controls, governance and international regulatory alignment for clients, with experience serving Fortune 500 and global automotive clients and executing onsite international assignments.',
      education: 'Chartered Accountant',
      linkedin: 'www.linkedin.com/in/mishramaheshCA',
    },
    {
      name: 'Sapna Sharma',
      position: 'Senior Advisor – Assurance & Advisory',
      experience:
        'Seasoned Chartered Accountant with 10+ years of audit experience across multiple industries and geographies, having worked with Deloitte and Ernst & Young (E&Y) on UK GAAP, IFRS and Indian GAAP engagements.',
      specialization:
        'Supports Unfold’s audit and reporting team with strategic review, technical training and process development, drawing on leadership training from ISB Bangalore and experience leading complex audits in construction, real estate, services, telecom, manufacturing and banking.',
      education: 'Chartered Accountant, ISB Bangalore – Leadership Development', 
      linkedin: 'https://www.linkedin.com/in/ca-sapna-sharma-15866299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      image: sapna,
    }

  ];

  const milestones = [
    { year: '2013', title: 'Company Founded', description: 'Started with a vision to simplify business compliance' },
    { year: '2015', title: '50+ Clients', description: 'Reached our first major milestone of serving 50 businesses' },
    { year: '2018', title: 'Digital Transformation', description: 'Launched online platform for seamless service delivery' },
    { year: '2020', title: '100+ Success Stories', description: 'Doubled our client base during challenging times' },
    { year: '2023', title: '200+ Businesses', description: 'Expanded across 15+ industries with comprehensive solutions' }
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
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20 lg:pt-24">
      {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1.2fr_0.9fr] gap-12 lg:gap-16 items-end">
              
              {/* Content Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center gap-2 bg-[#1a2332] text-white px-5 py-2.5 rounded-full text-sm font-medium"
                >
                  <Award className="w-3.5 h-3.5" />
                  Established 
                </motion.div>

                <div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a2332] leading-tight mb-4"
                    style={{ fontFamily: 'Nexa Bold' }}
                  >
                    Transforming
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="block sm:inline text-[#C8965D] mx-0 sm:mx-3 relative"
                    >
                      Compliance
                      <motion.div
                        animate={{ scaleX: [0, 1, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-2 left-1 right-0 h-1 bg-gradient-to-r from-transparent via-[#C8965D] to-transparent"
                      />
                    </motion.span>
                    into Growth
                  </motion.h1>
                </div>

                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-base text-gray-700 leading-relaxed"
                >
                  Unfold Finleg Solutions LLP (UFS) was created with a clear belief: when handled strategically, compliance unlocks growth instead of limiting it.
​                  Led by professionals with 10+ years of Big 4 and international experience across law, tax, audit, and risk, Unfold helps businesses turn complex regulations into confident, sustainable expansion.
                </motion.p>

                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-sm text-gray-600 leading-relaxed"
                >
                  Our founders, seasoned professionals with decades of experience in regulatory affairs and business strategy, recognized that many companies were struggling to balance compliance requirements with their growth ambitions.
                </motion.p>
              
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="flex items-center gap-3 pt-2"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-semibold text-[#1a2332]">
                    200+ businesses transformed across 15+ industries
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-4"
                >
                  <Button className="bg-[#1a2332] hover:bg-[#0f1621] text-white px-7 py-5 rounded-xl text-sm font-semibold transition-all duration-200"
                          style={{ fontFamily: 'Nexa Bold' }}>
                    Our Story
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </motion.div>

            {/* Right visual – light glass stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-full max-w-sm ml-auto space-y-3"
              >
                <div className="mb-1 text-[11px] font-semibold tracking-[0.25em] text-[#9AA4B2] uppercase text-right">
                  
                </div>

                <div className="relative rounded-3xl bg-white/70 backdrop-blur-xl border border-[#E2E8F0] shadow-[0_18px_45px_rgba(15,22,33,0.08)] p-7">
                  {/* soft gold tint */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(200,150,93,0.10),_transparent_55%)]" />

                  <div className="relative grid gap-3">
                    {[
                      { label: '200+ Businesses Served', icon: Building2 },
                      { label: '15+ Industries', icon: TrendingUp },
                      { label: '12+ Years Experience', icon: Award },
                      { label: '98% Client Satisfaction', icon: CheckCircle },
                    ].map((stat) => (
                      <motion.div
                        key={stat.label}
                        whileHover={{ y: -3, scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        className="group relative flex items-center gap-3 rounded-2xl border border-[#E2E8F0]/70 bg-white/90 px- py-3 overflow-hidden"
                      >
                        {/* subtle hover glow */}
                        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#C8965D]/10 via-transparent to-[#C8965D]/10" />

                        <div className="relative flex h-9 w-9 items-center justify-center rounded-2xl bg-[#3B5A7A]/8">
                          <stat.icon className="w-4 h-4 text-[#C8965D]" />
                        </div>

                        <span className="relative text-sm font-semibold text-[#1a2332]">
                          {stat.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
 
            </div>
          </div>
        </section>



      {/* Values Section - Matching WhyChooseUs Style */}
      <section className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              opacity: [0.03, 0.06, 0.03]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-[#3B5A7A] to-[#1a2332] rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.2, 1],
              opacity: [0.02, 0.05, 0.02]
            }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-[#C8965D] to-[#B8865D] rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm text-[#3B5A7A] px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg border border-[#3B5A7A]/20"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-5 h-5 text-[#C8965D]" />
              </motion.div>
              <span style={{ fontFamily: 'Nexa Bold' }}>Our Values</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2332] mb-6"
              style={{ fontFamily: 'Nexa Bold' }}
            >
              Our Core
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="block sm:inline text-[#C8965D] mx-0 sm:mx-3 relative"
              >
                Values
                <motion.div
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C8965D] to-transparent"
                />
              </motion.span>
                          </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              The principles that guide everything we do and shape our relationships with clients.
            </motion.p>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { type: 'spring', stiffness: 400 }
                }}
                className="group"
              >
                <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer">
                  <CardContent className="p-8 text-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C8965D]/5 to-[#3B5A7A]/5 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-[#1a2332] flex items-center justify-center shadow-md">
                      <value.icon
                        className="w-7 h-7 text-[#C8965D]"
                        strokeWidth={1.8}
                      />
                    </div>

                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-[#1a2332] mb-4 group-hover:text-[#3B5A7A] transition-colors duration-200"
                          style={{ fontFamily: 'Nexa Bold' }}>
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-3 bg-[#3B5A7A]/10 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-md"
            >
              <Users className="w-5 h-5 text-[#3B5A7A]" />
              <span className="text-[#3B5A7A]" style={{ fontFamily: 'Nexa Bold' }}>Expert Team</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2332] mb-6"
              style={{ fontFamily: 'Nexa Bold' }}>
              Meet Our
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="block sm:inline text-[#C8965D] mx-0 sm:mx-3 relative"
              >
                Expert Team
                <motion.div
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C8965D] to-transparent"
                />
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Seasoned professionals with decades of combined experience.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-0">
                  <div className="relative aspect-square bg-gradient-to-br from-[#3B5A7A]/10 via-gray-50 to-[#C8965D]/10 flex items-center justify-center">
                  <motion.div
                  className="w-100 h-70 overflow-hidden shadow-2xl border-2 border-white rounded-3xl"
                  whileHover={{ scale: 1.05 }}
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#3B5A7A] to-[#1a2332] flex items-center justify-center">
                      <span className="text-5xl font-bold text-[#C8965D]">
                        {member.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                    </div>
                  )}
                </motion.div>


                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#1a2332] mb-2"
                        style={{ fontFamily: 'Nexa Bold' }}>
                      {member.name}
                    </h3>
                    <p className="text-[#C8965D] font-bold mb-4 text-sm">{member.position}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#3B5A7A] rounded-full mt-2 flex-shrink-0" />
                        <p className="text-xs text-gray-700">
                          <span className="font-bold text-[#1a2332]">Experience:</span> {member.experience}
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#3B5A7A] rounded-full mt-2 flex-shrink-0" />
                        <p className="text-xs text-gray-700">
                          <span className="font-bold text-[#1a2332]">Specialization:</span> {member.specialization}
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#3B5A7A] rounded-full mt-2 flex-shrink-0" />
                        <p className="text-xs text-gray-700">
                          <span className="font-bold text-[#1a2332]">Education:</span> {member.education}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <motion.a
                        href={`mailto:${member.email}`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="flex-1 h-11 bg-[#1a2332] hover:bg-[#3B5A7A] text-white rounded-xl flex items-center justify-center transition-colors duration-200"
                      >
                        <Mail className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={member.linkedin}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="flex-1 h-11 bg-[#1a2332] hover:bg-[#3B5A7A] text-white rounded-xl flex items-center justify-center transition-colors duration-200"
                      >
                        <Linkedin className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

{/* Timeline Section */}
<section className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-[#050814] via-[#020617] to-[#050814] text-white overflow-hidden">
  {/* dotted background */}
  <div className="absolute inset-0 opacity-20">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          'radial-gradient(circle at 2px 2px, rgba(248, 250, 252, 0.55) 1px, transparent 0)',
        backgroundSize: '42px 42px',
      }}
    />
  </div>

  {/* animated gold glow */}
  <motion.div
    className="absolute top-16 right-16 w-96 h-96 bg-[#C8965D]/18 rounded-full blur-3xl"
    animate={{
      scale: [1, 1.25, 1],
      opacity: [0.35, 0.8, 0.35],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-6 border border-white/15"
      >
        <Sparkles className="w-4 h-4 text-[#C8965D]" />
        <span style={{ fontFamily: 'Nexa Bold' }}>Our Journey</span>
      </motion.div>

      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-6"
        style={{ fontFamily: 'Nexa Bold' }}
      >
        Our{' '}
        <span className="text-[#C8965D] relative">
          Journey
          <motion.div
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-2 left-0 right-0 h-1 bg-[#C8965D]"
          />
        </span>
      </motion.h2>

      <motion.p className="text-lg text-slate-200 max-w-2xl mx-auto">
        A decade of growth, innovation, and unwavering commitment to client success.
      </motion.p>
    </motion.div>

    {/* Centered timeline with alternating cards */}
    <div className="max-w-4xl mx-auto relative">
      {/* center line */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-[#C8965D] via-white/20 to-transparent opacity-70" />

      <div className="space-y-10">
        {milestones.map((milestone, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={milestone.year}
              initial={{
                opacity: 0,
                y: 40,
                x: isLeft ? -40 : 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                type: 'spring',
                stiffness: 120,
                damping: 20,
              }}
              className={`relative flex items-stretch ${
                isLeft ? 'justify-start pr-8' : 'justify-end pl-8'
              }`}
            >
              {/* dot on the center line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-7 z-10">
                <div className="h-3 w-3 rounded-full bg-[#C8965D]" />
                <div className="h-6 w-6 -mt-4 rounded-full bg-[#C8965D]/25 blur-sm" />
              </div>

              {/* card */}
              <Card className="relative w-full max-w-md bg-white/6 backdrop-blur-md border border-white/15 hover:bg-white/10 transition-all duration-300 rounded-3xl overflow-hidden">
                {/* top accent bar */}
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#C8965D] to-transparent opacity-70" />

                <CardContent className="p-6 flex items-center gap-5">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#C8965D] to-[#B8865D] rounded-2xl flex items-center justify-center shadow-xl">
                    <span
                      className="text-xl font-bold text-[#1a2332]"
                      style={{ fontFamily: 'Nexa Bold' }}
                    >
                      '{milestone.year.slice(-2)}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3
                      className="text-lg font-bold text-white mb-1"
                      style={{ fontFamily: 'Nexa Bold' }}
                    >
                      {milestone.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#C8965D] mb-2">
                      {milestone.year}
                    </p>
                    <p className="text-slate-200 text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
</section>



            {/* CTA Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-[#F7FAFC] to-white overflow-hidden">
  {/* golden grid dots background */}
<motion.div
  className="absolute inset-0 opacity-1000"
  animate={{ backgroundPositionX: ['0px', '32px', '0px'] }}
  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
  style={{
    backgroundImage:
      'radial-gradient(circle at 2px 2px, rgba(160,120,70,0.25  ) 1.5px, transparent 0)',
    backgroundSize: '46px 46px',
  }}
/>


  {/* soft navy blur */}
  <motion.div
    className="absolute top-[-3rem] right-[-4rem] w-[26rem] h-[26rem] bg-[#3B5A7A]/12 rounded-full blur-[80px]"
    animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
    transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
  />

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-4xl mx-auto"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-[#1a2332] px-6 py-3 rounded-full text-sm font-medium mb-6 border border-[#E2E8F0]"
      >
        <Sparkles className="w-4 h-4 text-[#C8965D]" />
        <span style={{ fontFamily: 'Nexa Bold' }}>Let's Work Together</span>
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2332] mb-4"
        style={{ fontFamily: 'Nexa Bold' }}
      >
        Ready to Transform Your{' '}
        <span className="relative inline-block text-[#C8965D]">
          Business?
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute -bottom-1 left-0 h-0.5 bg-[#C8965D]"
          />
        </span>
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed"
      >
        Let's discuss how we can help your business thrive through smart compliance
        and strategic governance.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          className="bg-[#1a2332] hover:bg-[#0f1726] text-white px-10 py-5 rounded-xl text-sm sm:text-base font-bold shadow-[0_18px_45px_rgba(15,22,33,0.3)] transition-all duration-300"
          style={{ fontFamily: 'Nexa Bold' }}
        >
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


