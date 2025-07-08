import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutTeaser = () => {
  return (
    <section className="section-padding bg-light-gray">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy">
              About Unfold
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Unfold, we believe that compliance shouldn't be a barrier to growth—it should be 
              a catalyst for it. With over a decade of experience, we've helped hundreds of businesses 
              transform regulatory challenges into competitive advantages.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Our mission is simple: to unfold your business potential by providing expert guidance 
              in governance, compliance, and strategic growth. We combine deep industry expertise 
              with a human-centered approach that puts your success at the heart of everything we do.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-primary inline-flex items-center group">
                Read Our Story
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="btn-secondary">
                Meet Our Team
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-gradient-to-br from-navy to-blue-800 rounded-2xl p-8 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-2xl" />
              
              <div className="relative z-10 text-center text-white space-y-4">
                <div className="text-4xl font-bold">200+</div>
                <div className="text-lg">Businesses Transformed</div>
                
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/20">
                  <div>
                    <div className="text-2xl font-semibold text-gold">98%</div>
                    <div className="text-sm text-white/80">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-gold">15+</div>
                    <div className="text-sm text-white/80">Industries Served</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-navy/20 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;