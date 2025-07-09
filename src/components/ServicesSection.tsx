import { motion } from 'framer-motion';
import { Shield, TrendingUp, Users, FileCheck, Scale, Target } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: 'Compliance Advisory',
      description: 'Navigate complex regulatory landscapes with confidence. We ensure your business stays compliant while maintaining operational efficiency.',
      link: '/services/compliance'
    },
    {
      icon: TrendingUp,
      title: 'Strategic Growth Planning',
      description: 'Transform compliance requirements into strategic advantages. We help you scale sustainably while meeting all regulatory obligations.',
      link: '/services/protect-your-business'
    },
    {
      icon: Users,
      title: 'Governance Consulting',
      description: 'Build robust governance frameworks that drive accountability and performance across your organization.',
      link: '/services/virtual-cfo'
    },
    {
      icon: FileCheck,
      title: 'Risk Assessment',
      description: 'Identify and mitigate potential risks before they impact your business. Comprehensive analysis with actionable insights.',
      link: '/services/startup'
    },
    {
      icon: Scale,
      title: 'Regulatory Framework',
      description: 'Develop comprehensive frameworks that align with industry standards and best practices for long-term sustainability.',
      link: '/services/compliance'
    },
    {
      icon: Target,
      title: 'Business Optimization',
      description: 'Optimize your operations through strategic compliance management, turning regulatory requirements into competitive advantages.',
      link: '/services/protect-your-business'
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-light-gray">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Comprehensive solutions designed to help your business thrive in today's complex regulatory environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-0">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              index={index}
            />
          ))}
        </div>
          <Link
            to="/services/more"
            className="inline-block px-6 py-3 bg-gold text-white font-medium rounded-full hover:bg-yellow-600 transition"
          >
            More Services
          </Link>
        </div>
    </section>
  );
}

export default ServicesSection;