'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What services does TechFlow offer?",
    answer: "We specialize in web development, mobile app development, and no-code solutions. Our services include custom web applications, cross-platform mobile apps, e-commerce platforms, SaaS applications, and consulting services. We work with modern technologies like React, Next.js, React Native, Flutter, Bubble.io, and FlutterFlow."
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 8-12 weeks. Mobile apps typically take 6-10 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the development process."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, security updates, performance optimization, feature additions, and 24/7 technical support. We also provide hosting and server management services to ensure your application runs smoothly."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing options including fixed-price projects, time and materials, and retainer agreements. Pricing depends on project scope, complexity, and timeline. We provide detailed quotes after understanding your requirements and can work within various budgets."
  },
  {
    question: "Can you work with existing systems and integrate with third-party services?",
    answer: "Absolutely! We have extensive experience integrating with existing systems, APIs, and third-party services. We can work with your current tech stack, migrate data, and ensure seamless integration with tools like payment gateways, CRMs, marketing platforms, and more."
  },
  {
    question: "What makes TechFlow different from other development agencies?",
    answer: "We combine technical expertise with business understanding. Our team stays current with the latest technologies, we provide transparent communication throughout the process, and we focus on delivering solutions that drive real business value. We also offer expertise in both traditional development and no-code platforms."
  },
  {
    question: "Do you provide hosting and deployment services?",
    answer: "Yes, we offer complete hosting and deployment solutions. We can set up hosting on platforms like AWS, Google Cloud, Vercel, or Netlify. We handle SSL certificates, domain configuration, CDN setup, and ongoing server management to ensure optimal performance and security."
  },
  {
    question: "What happens after the project is completed?",
    answer: "After project completion, we provide comprehensive documentation, training sessions for your team, and ongoing support. We offer maintenance packages and can help with future enhancements. We also provide analytics and performance monitoring to ensure your application continues to meet your business needs."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-dark-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-dark-600 max-w-3xl mx-auto"
          >
            Get answers to common questions about our services, process, and what makes us different.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-dark-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp size={20} className="text-primary" />
                    ) : (
                      <ChevronDown size={20} className="text-dark-500" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-dark-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-dark-600 mb-6 max-w-2xl mx-auto">
              We're here to help! Contact us for a free consultation and let's discuss 
              how we can bring your project to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Get in Touch
              </a>
              <a href="/about" className="btn-outline">
                Learn More About Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 