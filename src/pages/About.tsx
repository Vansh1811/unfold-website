import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Users, Target, Heart, Award } from 'lucide-react';

const About = () => {

  const values = [
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We believe in honest, transparent communication and ethical practices in all our client relationships.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for exceptional results and continuous improvement in everything we do.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work alongside our clients as trusted partners, invested in their long-term success.',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We stay ahead of industry trends to provide cutting-edge solutions for modern challenges.',
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
            About <span className="text-gold">Unfold</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We're passionate about helping businesses navigate the complex world of compliance 
            and governance while unlocking their full growth potential.
          </motion.p>
        </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2013, Unfold emerged from a simple yet powerful vision: compliance 
                shouldn't be a barrier to business growth—it should be a catalyst for it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our founders, seasoned professionals with decades of experience in regulatory 
                affairs and business strategy, recognized that many companies were struggling 
                to balance compliance requirements with their growth ambitions. They set out 
                to change that narrative.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we've helped over 200 businesses across 15+ industries transform their 
                approach to compliance and governance, turning regulatory challenges into 
                competitive advantages.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-navy to-blue-800 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gold mb-2">200+</div>
                    <div className="text-sm">Clients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gold mb-2">15+</div>
                    <div className="text-sm">Industries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gold mb-2">98%</div>
                    <div className="text-sm">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gold mb-2">10+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-light-gray">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-500 rounded-xl flex items-center justify-center group-hover:shadow-gold transition-all duration-300">
                    <value.icon className="h-8 w-8 text-navy" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold text-navy mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
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
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Let's discuss how we can help your business thrive through smart compliance 
              and strategic governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gold hover:bg-yellow-500 text-navy font-semibold px-8 py-3">
                Get in Touch
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                View Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;