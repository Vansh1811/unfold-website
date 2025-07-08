import { motion } from 'framer-motion';
import { Shield, TrendingUp, Users, FileCheck, Scale, Target } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: 'Compliance Advisory',
      description: 'Navigate complex regulatory landscapes with confidence. We ensure your business stays compliant while maintaining operational efficiency.',
    },
    {
      icon: TrendingUp,
      title: 'Strategic Growth Planning',
      description: 'Transform compliance requirements into strategic advantages. We help you scale sustainably while meeting all regulatory obligations.',
    },
    {
      icon: Users,
      title: 'Governance Consulting',
      description: 'Build robust governance frameworks that drive accountability and performance across your organization.',
    },
    {
      icon: FileCheck,
      title: 'Risk Assessment',
      description: 'Identify and mitigate potential risks before they impact your business. Comprehensive analysis with actionable insights.',
    },
    {
      icon: Scale,
      title: 'Regulatory Framework',
      description: 'Develop comprehensive frameworks that align with industry standards and best practices for long-term sustainability.',
    },
    {
      icon: Target,
      title: 'Business Optimization',
      description: 'Optimize your operations through strategic compliance management, turning regulatory requirements into competitive advantages.',
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to help your business thrive in today's complex regulatory environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;