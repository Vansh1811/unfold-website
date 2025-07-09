import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { clientTestimonials } from '@/data/servicesData';
import { Star } from 'lucide-react';

const PortfolioSection = () => {
  return (
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
            Trusted by Leading Clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our clients say about their experience working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientTestimonials.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-white shadow-card hover:shadow-card-hover transition-all duration-300 border-0">
                <CardContent className="p-6">
                  {/* Client Logo/Initials */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-navy to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {client.initials}
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">{client.clientName}</h3>
                      <p className="text-sm text-muted-foreground">{client.company}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Testimonial */}
                  <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                    "{client.testimonial}"
                  </blockquote>

                  {/* Industry */}
                  <div className="pt-4 border-t border-gray-100">
                    <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-medium rounded-full">
                      {client.industry}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div>
            <div className="text-3xl font-bold text-navy mb-2">200+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-navy mb-2">15+</div>
            <div className="text-muted-foreground">Industries</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-navy mb-2">98%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-navy mb-2">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;