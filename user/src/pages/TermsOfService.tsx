import { motion } from 'framer-motion';

const TermsOfService = () => {
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
            <h1 className="text-5xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-300">
              Understanding our service agreements
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
                1. Agreement to Terms
              </h2>
              <p>
                By accessing and using the Unfold Finleg Solutions website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this service.
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
                2. Service Description
              </h2>
              <p className="mb-4">
                Unfold Finleg Solutions provides comprehensive company formation and registration services, including:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span>Company incorporation and registration assistance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span>Legal compliance and regulatory documentation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span>Expert consultation and guidance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span>Post-incorporation compliance support</span>
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
                3. User Responsibilities
              </h2>
              <p className="mb-4">As a user of our services, you agree to:</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">✓</span>
                  <span>Provide accurate, complete, and truthful information</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">✓</span>
                  <span>Not use our services for any illegal or unauthorized purpose</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">✓</span>
                  <span>Comply with all applicable laws and regulations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">✓</span>
                  <span>Not engage in any activity that restricts others' use of our services</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">✓</span>
                  <span>Maintain confidentiality of any credentials or information</span>
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
                4. Service Timeline and Delivery
              </h2>
              <p className="mb-4">
                All timelines provided are estimates based on normal processing conditions. Please note:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">→</span>
                  <span>Government processing times may vary based on current workload</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">→</span>
                  <span>We are not responsible for delays caused by government authorities</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">→</span>
                  <span>Additional documentation requests may extend the timeline</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">→</span>
                  <span>We will keep you updated on the progress of your application</span>
                </li>
              </ul>
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
                5. Payment Terms
              </h2>
              <p className="mb-4">
                Payment for our services is due as follows:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span>50% advance payment to initiate service</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span>50% balance on completion or as mutually agreed</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span>Additional government fees (if any) are charged separately</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span>All prices are subject to applicable taxes</span>
                </li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#D4AF37] pl-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                6. Refund Policy
              </h2>
              <p className="mb-4">
                Refunds are processed as follows:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">→</span>
                  <span>Refund requests must be made within 7 days of service initiation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">→</span>
                  <span>Non-refundable charges: Government filing fees and document costs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">→</span>
                  <span>Refund processing takes 7-10 business days</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">→</span>
                  <span>Services already rendered are not refundable</span>
                </li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#D4AF37] pl-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                7. Confidentiality
              </h2>
              <p>
                We maintain strict confidentiality of your business information and documents. All client information is protected and not shared with third parties without explicit consent, except as required by law or to provide our services.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#D4AF37] pl-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                8. Limitation of Liability
              </h2>
              <p>
                Unfold Finleg Solutions is not liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount paid for services. We are not responsible for delays or failures caused by factors beyond our control.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#D4AF37] pl-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                9. Legal Disclaimer
              </h2>
              <p className="mb-4">
                Please note the following:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span>Our services are advisory in nature and not substitute for legal counsel</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span>We recommend consulting with legal professionals for specific legal advice</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span>Government policies and regulations may change</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span>We are not responsible for clients' non-compliance post-registration</span>
                </li>
              </ul>
            </motion.section>        
                
              <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#D4AF37] pl-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                10. Modifications to Terms
              </h2>
              <p>
                Unfold Finleg Solutions reserves the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of our website and services following the posting of revised Terms signifies your acceptance of the revised Terms.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#D4AF37] pl-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                11. Governing Law and Jurisdiction
              </h2>
              <p>
                These Terms of Service and any legal action arising out of or relating to the services shall be governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts located in Noida, Uttar Pradesh.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#D4AF37] pl-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                12. Severability
              </h2>
              <p>
                If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true }}
              className="border-l-4 border-[#D4AF37] pl-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                13. Entire Agreement
              </h2>
              <p>
                These Terms of Service constitute the entire agreement between you and Unfold Finleg Solutions regarding the use of our website and services, and supersede all prior and contemporaneous agreements, proposals, and communications, whether written or oral.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-navy-50 to-gray-50 border-2 border-[#D4AF37]/20 rounded-xl p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                Contact Us
              </h2>
              <p className="mb-6 text-gray-700">
                If you have any questions about these Terms of Service or our services, please contact us at:
              </p>
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

export default TermsOfService;

