import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/unfold-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-navy text-white relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Top Border */}
      <div className="h-1 bg-gradient-to-r from-gold to-yellow-500" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, hsl(var(--gold)) 1px, transparent 1px),
              radial-gradient(circle at 80% 80%, hsl(var(--gold)) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px, 60px 60px',
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Unfold" className="h-8 w-auto" />
              <span className="text-xl font-heading font-bold">Unfold</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Unfolding your business potential through smart compliance and strategic growth.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="text-white/60 hover:text-gold transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
              <motion.a
                href="#"
                className="text-white/60 hover:text-gold transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Twitter"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-gold">Services</h3>
            <ul className="space-y-2">
              {[
                'Compliance Advisory',
                'Strategic Growth Planning',
                'Governance Consulting',
                'Risk Assessment',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-gold transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-gold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                'About Us',
                'Our Team',
                'Case Studies',
                'Blog',
                'Careers',
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-gold transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-gold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-white/80">info@unfoldconsulting.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  123 Business District<br />
                  Suite 400<br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} Unfold Consulting. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;