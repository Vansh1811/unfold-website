import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/unfold-logo.png';

// Parent service categories used in the footer
const serviceCategories = [
  {
    label: 'Company Formation & Registration',
    slug: 'company-formation-registration',
    to: '/services/company-formation-registration',
  },
  {
    label: 'Virtual CFO (vCFO) Services',
    slug: 'Virtual CFO (vCFO) Services',
    to: '/services/virtual-cfo-services',
  },
  {
    label: 'FEMA & Foreign Investment Advisory',
    slug: 'FEMA & Foreign Investment Advisory',
    to: '/services/foreign-investment-fcra',
  },
  {
    label: 'US Incorporation, Compliance & Advisory',
    slug: 'US Incorporation, Compliance & Advisory',
    to: '/services/us-incorporation-compliance',
  },
  
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Blogs', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/unfold-finleg-solutions/posts/?feedView=all',
      icon: Linkedin,
      color: 'hover:text-blue-600',
    },
    { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:text-blue-700' },
    {  
      name: 'Instagram',
      href: 'https://www.instagram.com/unfoldfinlegsolutions/',
      icon: Instagram,
      color: 'hover:text-pink-600' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-navy-400 rounded-full blur-3xl" />
      </div>

      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Unfold" className="w-10 h-10" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Unfold
              </h3>
            </div>
            <p className="text-blue-100 leading-relaxed mb-6 text-sm sm:text-base">
              Unfolding your business potential through smart compliance and strategic
              growth solutions.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center transition-colors duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-white mb-4">Our Services</h4>
            <ul className="space-y-3 mb-6">
              {serviceCategories.map((service, index) => (
                <motion.li
                  key={service.slug}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    to={service.to}
                    className="text-blue-100 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {service.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* More Services Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-0.5 px-4 py-2.5 bg-white/20 hover:bg-gold/30 text-navy-800 hover:text-navy-900 rounded-lg transition-all duration-300 group font-medium text-sm"
              >
                <span>MORE SERVICES</span>
                <ArrowRight className="w-5 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-blue-100 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@unfoldfinlegsolutions.com"
                    className="text-blue-100 hover:text-white transition-colors duration-200 text-sm break-all"
                  >
                    info@unfoldfinlegsolutions.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div className="text-blue-100 text-sm">
                  <a
                    href="tel:+919958978970"
                    className="hover:text-white transition-colors duration-200 block"
                  >
                    +91 999-966-7207
                  </a>
                  <a
                    href="tel:+919599399662"
                    className="hover:text-white transition-colors duration-200 block"
                  >
                    +91 995-389-7897
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div className="text-blue-100 text-sm leading-relaxed">
                  B-145, Ground Floor
                  <br />
                  Sector-51
                  <br />
                  Noida, Uttar Pradesh 201301
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-blue-100 text-sm text-center sm:text-left">
                © {currentYear} Unfold Finleg Solutions LLP. All rights reserved.
              </p>

              <div className="flex flex-wrap gap-4 sm:gap-6">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-blue-100 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
