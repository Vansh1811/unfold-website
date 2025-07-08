import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy to-blue-900">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, hsl(var(--gold)) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, hsl(var(--gold)) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px, 40px 40px',
              backgroundPosition: '0 0, 30px 30px',
            }}
          />
        </div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gold/10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-gold/5"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to take your business to the next level?
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join hundreds of successful businesses who have transformed their compliance 
            challenges into competitive advantages with Unfold.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              className="bg-gold hover:bg-yellow-500 text-navy font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-gold inline-flex items-center group"
            >
              Contact Our Experts
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 text-lg transition-all duration-300"
            >
              Schedule a Free Consultation
            </Button>
          </motion.div>

          <motion.div
            className="mt-8 text-sm text-white/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>No obligation • Free 30-minute consultation • Expert advice</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;