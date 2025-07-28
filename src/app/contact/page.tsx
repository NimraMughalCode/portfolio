'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar } from 'lucide-react';
import Header from '../PORTcomponents/Header';
import Footer from '../PORTcomponents/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@techflow.agency",
      description: "Send us an email anytime",
      action: "mailto:hello@techflow.agency"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Tech Street, Digital City",
      description: "DC 12345, United States",
      action: "#"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      description: "We'll get back to you quickly",
      action: "#"
    }
  ];

  const projectTypes = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile App Development' },
    { value: 'no-code', label: 'No-Code Solution' },
    { value: 'consulting', label: 'Consulting Services' },
    { value: 'ui-ux', label: 'UI/UX Design' },
    { value: 'other', label: 'Other' }
  ];

  const budgetRanges = [
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k+', label: '$50,000+' }
  ];

  const timelines = [
    { value: '1-2-months', label: '1-2 months' },
    { value: '2-4-months', label: '2-4 months' },
    { value: '4-6-months', label: '4-6 months' },
    { value: '6+months', label: '6+ months' }
  ];

  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-dark-900 mb-6"
            >
              Let's Build Something Amazing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-dark-600 mb-8 leading-relaxed"
            >
              Ready to start your project? Get in touch with us and let's discuss how we can 
              help bring your ideas to life with our expertise in web development, mobile apps, and no-code solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container-custom px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-dark-900 mb-6">
                  Start Your Project
                </h3>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle size={64} className="text-secondary mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-dark-900 mb-2">
                      Thank You!
                    </h4>
                    <p className="text-dark-600">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-dark-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-dark-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-700 mb-2">
                          Project Type *
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        >
                          <option value="">Select Project Type</option>
                          {projectTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-dark-700 mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        >
                          <option value="">Select Budget Range</option>
                          {budgetRanges.map((budget) => (
                            <option key={budget.value} value={budget.value}>
                              {budget.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-700 mb-2">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        >
                          <option value="">Select Timeline</option>
                          {timelines.map((timeline) => (
                            <option key={timeline.value} value={timeline.value}>
                              {timeline.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us about your project, goals, and requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-4">
                    Get in Touch
                  </h3>
                  <p className="text-dark-600 leading-relaxed">
                    Ready to transform your ideas into reality? We're here to help you build 
                    the next big thing. Let's discuss your project and see how we can bring 
                    your vision to life.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.action}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-dark-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-primary font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-dark-600 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 border border-gray-100">
                  <h4 className="text-lg font-bold text-dark-900 mb-3">
                    Why Choose TechFlow?
                  </h4>
                  <ul className="space-y-2 text-dark-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                      Free consultation and project assessment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                      Transparent pricing and timelines
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                      Regular updates and communication
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                      Ongoing support and maintenance
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom px-6">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-dark-900 mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-dark-600 max-w-3xl mx-auto"
            >
              Get quick answers to common questions about working with us.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <h3 className="text-lg font-bold text-dark-900 mb-3">
                How long does a typical project take?
              </h3>
              <p className="text-dark-600">
                Project timelines vary from 2-4 weeks for simple websites to 8-12 weeks for complex applications. 
                We'll provide a detailed timeline during our initial consultation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <h3 className="text-lg font-bold text-dark-900 mb-3">
                What is your pricing structure?
              </h3>
              <p className="text-dark-600">
                We offer flexible pricing including fixed-price projects, time and materials, 
                and retainer agreements. Pricing depends on project scope and complexity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <h3 className="text-lg font-bold text-dark-900 mb-3">
                Do you provide ongoing support?
              </h3>
              <p className="text-dark-600">
                Yes, we offer comprehensive support and maintenance packages including 
                bug fixes, updates, and 24/7 technical support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <h3 className="text-lg font-bold text-dark-900 mb-3">
                Can you work with existing systems?
              </h3>
              <p className="text-dark-600">
                Absolutely! We have extensive experience integrating with existing systems, 
                APIs, and third-party services to ensure seamless functionality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage; 