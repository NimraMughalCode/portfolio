'use client';

import { motion } from 'framer-motion';
import Header from '../PORTcomponents/Header';
import Footer from '../PORTcomponents/Footer';

const TermsPage = () => {
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
              Terms of Service
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
              <h2 className="text-2xl font-bold text-dark-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-dark-600 mb-6">
                By accessing and using Trojanix&apos;s website and services, you accept and agree to be bound 
                by the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-4">2. Services Description</h2>
              <p className="text-dark-600 mb-6">
                Trojanix provides web development, mobile app development, no-code solutions, and 
                consulting services. Our services include but are not limited to:
              </p>
              <ul className="text-dark-600 mb-6 space-y-2">
                <li>• Custom web application development</li>
                <li>• Mobile app development (iOS and Android)</li>
                <li>• No-code platform solutions (Bubble.io, FlutterFlow)</li>
                <li>• UI/UX design services</li>
                <li>• Technical consulting and strategy</li>
                <li>• Maintenance and support services</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-4">3. Project Terms</h2>
              <p className="text-dark-600 mb-6">
                When engaging our services, the following terms apply:
              </p>
              <ul className="text-dark-600 mb-6 space-y-2">
                <li>• Project scope and deliverables will be defined in a separate agreement</li>
                <li>• Payment terms and schedules will be specified in the project agreement</li>
                <li>• Timeline estimates are provided in good faith but may vary based on project complexity</li>
                <li>• Changes to project scope may result in additional costs and timeline adjustments</li>
                <li>• Final deliverables will be provided upon completion of payment obligations</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-4">4. Payment Terms</h2>
              <p className="text-dark-600 mb-6">
                Payment terms are as follows:
              </p>
              <ul className="text-dark-600 mb-6 space-y-2">
                <li>• Invoices are due within 30 days of issue unless otherwise specified</li>
                <li>• Late payments may incur additional fees</li>
                <li>• All prices are quoted in USD unless otherwise stated</li>
                <li>• Payment methods accepted: bank transfer, credit card, and other agreed methods</li>
                <li>• Refunds are handled on a case-by-case basis</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-4">5. Intellectual Property</h2>
              <p className="text-dark-600 mb-6">
                Intellectual property rights are handled as follows:
              </p>
              <ul className="text-dark-600 mb-6 space-y-2">
                <li>• Client retains ownership of their existing intellectual property</li>
                <li>• Custom code and designs created for the client become their property upon final payment</li>
                <li>• Trojanix retains rights to reusable components and frameworks</li>
                <li>• Third-party licenses and assets remain subject to their respective terms</li>
                <li>• Portfolio rights: Trojanix may showcase completed work in our portfolio</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-4">6. Confidentiality</h2>
              <p className="text-dark-600 mb-6">
                We maintain strict confidentiality regarding client information and project details:
              </p>
              <ul className="text-dark-600 mb-6 space-y-2">
                <li>• All client information is treated as confidential</li>
                <li>• Non-disclosure agreements are available upon request</li>
                <li>• Information is only shared with team members directly involved in the project</li>
                <li>• Confidentiality obligations continue after project completion</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-dark-600 mb-6">
                Trojanix&apos;s liability is limited as follows:
              </p>
              <ul className="text-dark-600 mb-6 space-y-2">
                <li>• Our liability is limited to the amount paid for the specific service</li>
                <li>• We are not liable for indirect, incidental, or consequential damages</li>
                <li>• We are not responsible for third-party services or integrations</li>
                <li>• Force majeure events may affect service delivery</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-4">8. Warranty and Support</h2>
              <p className="text-dark-600 mb-6">
                Our warranty and support terms:
              </p>
              <ul className="text-dark-600 mb-6 space-y-2">
                <li>• We provide a 30-day warranty on delivered work</li>
                <li>• Support and maintenance packages are available separately</li>
                <li>• Bug fixes are covered during the warranty period</li>
                <li>• Feature additions and major changes require separate agreements</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-4">9. Termination</h2>
              <p className="text-dark-600 mb-6">
                Either party may terminate services with written notice:
              </p>
              <ul className="text-dark-600 mb-6 space-y-2">
                <li>• 30 days written notice required for termination</li>
                <li>• Outstanding payments remain due upon termination</li>
                <li>• Work completed up to termination date is billable</li>
                <li>• Client data and deliverables will be provided upon final payment</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-4">10. Governing Law</h2>
              <p className="text-dark-600 mb-6">
                These terms are governed by the laws of the jurisdiction where Trojanix is incorporated. 
                Any disputes will be resolved through arbitration or mediation before pursuing legal action.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-4">11. Changes to Terms</h2>
              <p className="text-dark-600 mb-6">
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting on our website. Continued use of our services constitutes 
                acceptance of the modified terms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-4">12. Contact Information</h2>
              <p className="text-dark-600 mb-6">
                For questions about these terms or our services, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-dark-600">
                 <strong>Email:</strong> info@trojanix.com<br />
<strong>Phone:</strong> +92 320 6011437<br />
<strong>Address:</strong> Chenab Rangers, Alrehman Road, Mirza Street, Sialkot Pakistan

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

export default TermsPage; 