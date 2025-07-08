import { motion } from 'framer-motion';
import { Award, Heart, Lightbulb } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: '10+ Years Experience',
      description: 'Proven track record of helping businesses navigate complex compliance challenges with expert guidance and innovative solutions.',
    },
    {
      icon: Lightbulb,
      title: 'Tailored Solutions',
      description: 'Every business is unique. We create customized strategies that align with your specific industry requirements and business goals.',
    },
    {
      icon: Heart,
      title: 'Ethical & Transparent',
      description: 'Built on trust and integrity. We believe in honest communication and ethical practices in everything we do.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
            Why Choose Unfold?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine deep expertise with a human-centered approach to deliver exceptional results for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="mb-6 flex justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gold to-yellow-500 rounded-full flex items-center justify-center group-hover:shadow-gold transition-all duration-300">
                  <feature.icon className="h-10 w-10 text-navy" />
                </div>
              </motion.div>

              <h3 className="text-xl font-heading font-semibold text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;