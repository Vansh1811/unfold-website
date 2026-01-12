import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => (
  <section className="relative overflow-hidden bg-gradient-to-r from-navy-600 via-navy-700 to-navy-800 py-20 sm:py-28 lg:py-36">
    {/* soft pattern overlay */}
    <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />

    {/* decorative blobs */}
    <motion.div
      animate={{ scale: [1, 1.15, 1], rotate: [0, 90, 180], opacity: [0.04, 0.06, 0.04] }}
      transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      className="absolute -top-24 -left-24 h-[22rem] w-[22rem] rounded-full bg-gradient-to-br from-gold-400 to-gold-600 blur-3xl"
    />
    <motion.div
      animate={{ scale: [1, 1.25, 1], rotate: [180, 90, 0], opacity: [0.03, 0.05, 0.03] }}
       transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      className="absolute -bottom-28 -right-28 h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-navy-400 to-navy-600 blur-3xl"
    />

    <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:mb-8 lg:text-5xl"
      >
        Ready to take your business
        <span className="block bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent sm:inline sm:ml-3">
          to the next level?
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-blue-100"
      >
        Join the hundreds of companies turning regulatory challenges into competitive
        advantages with <span className="font-semibold text-white">Unfold Finleg Solutions</span>.
      
      </motion.p>
      <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-900 px-8 py-4 rounded-xl text-lg font-bold shadow-2xl"
                              style={{ fontFamily: 'Nexa Bold' }}>
            <Link to="/contact">Get Consultation</Link>
            <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
            

  
    </div>
  </section>
);

export default CTASection;
