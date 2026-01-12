import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-300">
              Your privacy is important to us
            </p>
            <p className="text-gray-400 mt-4"></p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12 text-gray-700 leading-relaxed">
            
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#D4AF37] pl-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                Introduction
              </h2>
              <p>
                Unfold Finleg Solutions ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#D4AF37] pl-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                Information We Collect
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <div>
                    <strong>Personal Information:</strong> Name, email, phone number, company details provided through inquiries or service requests
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <div>
                    <strong>Service Information:</strong> Details about the services you inquire about or receive
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <div>
                    <strong>Technical Information:</strong> IP address, browser type, device information via analytics
                  </div>
                </li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#D4AF37] pl-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                How We Use Your Information
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">✓</span>
                  <span>To provide and improve our company formation and registration services</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">✓</span>
                  <span>To communicate about your service inquiries and provide support</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">✓</span>
                  <span>To comply with legal and regulatory requirements</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">✓</span>
                  <span>To analyze website usage and improve our platform</span>
                </li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#D4AF37] pl-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                Data Security
              </h2>
              <p>
                We implement comprehensive security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and restricted access to personal data.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#D4AF37] pl-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                Your Rights
              </h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">→</span>
                  <span>Access, update, or delete your personal information</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">→</span>
                  <span>Opt-out of promotional communications</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">→</span>
                  <span>Request confirmation of data processing</span>
                </li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-navy-50 to-gray-50 border-2 border-[#D4AF37]/20 rounded-xl p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                Contact Us
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900 text-lg">Unfold Finleg Solutions</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#D4AF37] text-xl">✉</span>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold text-gray-900">info@unfoldfinleg.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#D4AF37] text-xl">📞</span>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-semibold text-gray-900">+91-8076543210</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#D4AF37] text-xl">📍</span>
                  <div>
                    <p className="text-sm text-gray-600">Address</p>
                    <p className="font-semibold text-gray-900">B-145, Ground Floor, Sector-51</p>
                    <p className="font-semibold text-gray-900">Noida, Uttar Pradesh 201301, India</p>
                  </div>
                </div>
              </div>
            </motion.section>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
