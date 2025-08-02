'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
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
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@techflow.agency",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Tech Street, Digital City",
      description: "DC 12345, United States"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      description: "We'll get back to you quickly"
    }
  ];

  return (
    <section id='contact' className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} 
            className="text-3xl md:text-4xl font-bold text-dark-900 mb-4"
          >
            Let's Build Something Amazing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }} 
            className="text-lg text-dark-600 max-w-3xl mx-auto"
          >
            Ready to start your project? Get in touch with us and let's discuss how we can 
            help bring your ideas to life with our expertise in web development, mobile apps, and no-code solutions.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} 
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
                  viewport={{ once: true }} 
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
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      >
                        <option value="">Select Project Type</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile App</option>
                        <option value="no-code">No-Code Solution</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

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
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
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
            viewport={{ once: true }} 
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
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }} 
                    className="flex items-start gap-4"
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
                  </motion.div>
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
  );
};

export default Contact;
  