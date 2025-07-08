import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, TrendingUp, Users, FileCheck, Scale, Target, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Compliance Advisory',
      description: 'Navigate complex regulatory landscapes with confidence.',
      features: [
        'Regulatory compliance audits',
        'Policy development and implementation',
        'Training and education programs',
        'Ongoing compliance monitoring',
      ],
      price: 'Starting at $2,500/month',
    },
    {
      icon: TrendingUp,
      title: 'Strategic Growth Planning',
      description: 'Transform compliance requirements into strategic advantages.',
      features: [
        'Growth strategy development',
        'Market expansion planning',
        'Compliance-driven innovation',
        'Competitive advantage identification',
      ],
      price: 'Starting at $3,500/month',
    },
    {
      icon: Users,
      title: 'Governance Consulting',
      description: 'Build robust governance frameworks for your organization.',
      features: [
        'Board governance optimization',
        'Risk management frameworks',
        'Internal controls design',
        'Performance monitoring systems',
      ],
      price: 'Starting at $3,000/month',
    },
    {
      icon: FileCheck,
      title: 'Risk Assessment',
      description: 'Identify and mitigate potential risks before they impact your business.',
      features: [
        'Comprehensive risk audits',
        'Risk mitigation strategies',
        'Crisis management planning',
        'Business continuity planning',
      ],
      price: 'Starting at $2,000/month',
    },
    {
      icon: Scale,
      title: 'Regulatory Framework',
      description: 'Develop comprehensive frameworks aligned with industry standards.',
      features: [
        'Framework design and implementation',
        'Industry standard alignment',
        'Documentation and procedures',
        'Training and adoption support',
      ],
      price: 'Starting at $4,000/month',
    },
    {
      icon: Target,
      title: 'Business Optimization',
      description: 'Optimize operations through strategic compliance management.',
      features: [
        'Process optimization',
        'Efficiency improvements',
        'Cost reduction strategies',
        'Performance enhancement',
      ],
      price: 'Starting at $2,800/month',
    },
  ];


  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding hero-pattern">
        <div className="container-custom">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our <span className="text-gold">Services</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Comprehensive solutions designed to help your business thrive in today's 
            complex regulatory environment.
          </motion.p>
        </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
                <Card className="h-full bg-white shadow-card hover:shadow-card-hover transition-all duration-300 border-0 group">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-500 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-gold transition-all duration-300">
                        <service.icon className="h-8 w-8 text-navy" />
                      </div>
                    </div>

                    <h3 className="text-xl font-heading font-semibold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-navy">{service.price}</span>
                        <Button
                          size="sm"
                          className="bg-gold hover:bg-yellow-500 text-navy font-medium"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful outcomes for every engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business, challenges, and goals' },
              { step: '02', title: 'Analysis', description: 'Comprehensive assessment of current state and requirements' },
              { step: '03', title: 'Strategy', description: 'Development of tailored solutions and implementation roadmap' },
              { step: '04', title: 'Execution', description: 'Implementation with ongoing support and optimization' },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-navy text-gold text-xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-heading font-semibold text-navy mb-2">
                  {process.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Schedule a free consultation to discuss how our services can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gold hover:bg-yellow-500 text-navy font-semibold px-8 py-3">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;