import { motion } from 'framer-motion';

const CookiePolicy = () => {
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
            <h1 className="text-5xl font-bold text-white mb-4">Cookie Policy</h1>
            <p className="text-xl text-gray-300">How we use cookies and tracking technologies</p>
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
                1. What Are Cookies?
              </h2>
              <p>
                Cookies are small text files that are placed on your computer, mobile device, or other equipment when you visit our website. These files enable us to recognize your device, remember your preferences, and enhance your browsing experience. Cookies can be either "persistent" (stored on your device until you delete them) or "session" (deleted when you close your browser).
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
                2. Types of Cookies We Use
              </h2>
              <p className="mb-6">We use the following types of cookies on our website:</p>
              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-[#D4AF37]">→</span>
                    Essential/Necessary Cookies
                  </h3>
                  <p className="ml-6">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas. Without these cookies, our website cannot function correctly.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-[#D4AF37]">→</span>
                    Analytical/Performance Cookies
                  </h3>
                  <p className="ml-6">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information. This includes data about page views, bounce rates, and traffic sources, allowing us to improve our website's performance.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-[#D4AF37]">→</span>
                    Functional Cookies
                  </h3>
                  <p className="ml-6">
                    These cookies remember your preferences and settings (such as language, username, and password) to provide a more personalized experience during your visits.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="text-[#D4AF37]">→</span>
                    Marketing/Targeting Cookies
                  </h3>
                  <p className="ml-6">
                    These cookies track your browsing behavior and interests to deliver targeted advertisements and marketing content that may be relevant to you. They may also be used by third-party advertising networks.
                  </p>
                </div>
              </div>
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
                3. Third-Party Cookies
              </h2>
              <p>
                In addition to our own cookies, we may allow third-party service providers (such as Google Analytics, marketing partners, and analytics providers) to place cookies on your device. These third parties may use cookies for analytics, advertising, and other purposes. These third parties have their own privacy policies governing their use of cookies.
              </p>
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
                4. How We Use Cookies
              </h2>
              <p className="mb-4">We use cookies for the following purposes:</p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span>To personalize your experience and remember your preferences</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span>To provide essential website functionality and security</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span>To analyze website traffic and user behavior through analytics</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span>To deliver targeted advertisements and marketing content</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span>To improve our website features and user experience</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span>To track conversions and measure marketing campaign effectiveness</span>
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
                5. Cookie Duration
              </h2>
              <p className="mb-4">
                The duration for which cookies are stored on your device varies:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">→</span>
                  <span><strong>Session Cookies:</strong> Deleted automatically when you close your browser</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">→</span>
                  <span><strong>Persistent Cookies:</strong> Stored for a specified period (ranging from a few weeks to several years)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">→</span>
                  <span><strong>You Control:</strong> You can delete cookies manually through your browser settings at any time</span>
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
                6. Controlling Cookies
              </h2>
              <p className="mb-4">
                You have the right to control and manage cookies on your device:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span>Most web browsers allow you to refuse cookies or alert you when cookies are being sent</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span>You can disable cookies through your browser's privacy settings</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span>You can delete existing cookies from your device at any time</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span>Please note: Disabling cookies may affect the functionality of our website</span>
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
                7. Tracking Technologies
              </h2>
              <p className="mb-4">
                In addition to cookies, we may use other tracking technologies:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">→</span>
                  <span><strong>Pixels/Beacons:</strong> Small code snippets that track user interactions and page visits</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">→</span>
                  <span><strong>Local Storage:</strong> Browser storage that persists user preferences and data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37]">→</span>
                  <span><strong>Analytics Tools:</strong> Services like Google Analytics to monitor website performance</span>
                </li>
              </ul>
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
                8. Do Not Track
              </h2>
              <p>
                Some browsers include a "Do Not Track" feature. While we respect this preference, our website may not respond to Do Not Track signals as our advertising partners and analytics providers may not honor such requests. Please review your browser settings for more information.
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
                9. Legal Basis for Cookies
              </h2>
              <p>
                We use cookies based on legitimate business interests (analytics, functionality improvements) and with your consent for marketing and targeting cookies. Your continued use of our website constitutes consent to the use of cookies as described in this policy.
              </p>
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
                9. Legal Basis for Cookies
              </h2>
              <p>
                We use cookies based on legitimate business interests (analytics, functionality improvements) and with your consent for marketing and targeting cookies. Your continued use of our website constitutes consent to the use of cookies as described in this policy.
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
                10. Changes to Cookie Policy
              </h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. Any changes will be posted on this page with an updated "Last updated" date. Your continued use of our website following such modifications constitutes your acceptance of the updated Cookie Policy.
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
                11. How to Manage Cookies by Browser
              </h2>
              <p className="mb-4">
                Here are instructions for managing cookies in popular browsers:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies and Site Data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span><strong>Edge:</strong> Settings → Privacy, search, and services → Clear browsing data</span>
                </li>
              </ul>
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
                12. Third-Party Cookie Policy Links
              </h2>
              <p className="mb-4">
                To learn more about cookies used by third-party services, please visit their privacy policies:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span><strong>Google Analytics:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">Google Privacy Policy</a></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span><strong>Google Ads:</strong> <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">Google Ads Privacy</a></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-bold">•</span>
                  <span><strong>Facebook Pixel:</strong> <a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">Facebook Cookie Policy</a></span>
                </li>
              </ul>
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
                If you have any questions about our Cookie Policy or the cookies we use, please contact us at:
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

export default CookiePolicy;
