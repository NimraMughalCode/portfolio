"use client";

import { motion } from "framer-motion";
import Header from "../PORTcomponents/Header";
import Footer from "../PORTcomponents/Footer";

const PrivacyPage = () => {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="mt-[80px] pt-20 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-dark-900 mb-6"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-dark-600 mb-8 leading-relaxed"
            >
              Last updated: {new Date().toLocaleDateString()}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-custom px-6">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-dark-600 mb-6">
                We collect information you provide directly to us, such as when
                you contact us, request a quote, or fill out forms on our
                website. This may include:
              </p>
              <ul className="text-dark-600 mb-6 space-y-2">
                <li>• Name and contact information (email, phone number)</li>
                <li>• Company information</li>
                <li>• Project requirements and specifications</li>
                <li>• Communication preferences</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-dark-600 mb-6">
                We use the information we collect to:
              </p>
              <ul className="text-dark-600 mb-6 space-y-2">
                <li>• Provide and improve our services</li>
                <li>• Communicate with you about projects and services</li>
                <li>• Send you marketing materials (with your consent)</li>
                <li>• Comply with legal obligations</li>
                <li>• Protect our rights and prevent fraud</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                3. Information Sharing
              </h2>
              <p className="text-dark-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except in the
                following circumstances:
              </p>
              <ul className="text-dark-600 mb-6 space-y-2">
                <li>• With your explicit consent</li>
                <li>• To comply with legal requirements</li>
                <li>• To protect our rights and safety</li>
                <li>
                  • With trusted service providers who assist us in operating
                  our business
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                4. Data Security
              </h2>
              <p className="text-dark-600 mb-6">
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction. These measures include:
              </p>
              <ul className="text-dark-600 mb-6 space-y-2">
                <li>• Encryption of sensitive data</li>
                <li>• Regular security assessments</li>
                <li>• Access controls and authentication</li>
                <li>• Secure data transmission protocols</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                5. Your Rights
              </h2>
              <p className="text-dark-600 mb-6">You have the right to:</p>
              <ul className="text-dark-600 mb-6 space-y-2">
                <li>• Access your personal information</li>
                <li>• Correct inaccurate information</li>
                <li>• Request deletion of your information</li>
                <li>• Object to processing of your information</li>
                <li>• Withdraw consent at any time</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                6. Cookies and Tracking
              </h2>
              <p className="text-dark-600 mb-6">
                We use cookies and similar technologies to enhance your
                experience on our website. These technologies help us:
              </p>
              <ul className="text-dark-600 mb-6 space-y-2">
                <li>• Remember your preferences</li>
                <li>• Analyze website traffic</li>
                <li>• Improve our services</li>
                <li>• Provide personalized content</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                7. Third-Party Services
              </h2>
              <p className="text-dark-600 mb-6">
                Our website may contain links to third-party websites or
                services. We are not responsible for the privacy practices of
                these third parties. We encourage you to review their privacy
                policies before providing any personal information.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                8. Children&apos;s Privacy
              </h2>
              <p className="text-dark-600 mb-6">
                Our services are not intended for children under the age of 13.
                We do not knowingly collect personal information from children
                under 13. If you believe we have collected information from a
                child under 13, please contact us immediately.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                9. Changes to This Policy
              </h2>
              <p className="text-dark-600 mb-6">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-4">
                10. Contact Us
              </h2>
              <p className="text-dark-600 mb-6">
                If you have any questions about this Privacy Policy or our
                privacy practices, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-dark-600">
                  <strong>Email:</strong> info@trojanix.com
                  <br />
                  <strong>Phone:</strong> +92 320 6011437
                  <br />
                  <strong>Address:</strong> Chenab Rangers, Alrehman Road, Mirza
                  Street, Sialkot Pakistan
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
