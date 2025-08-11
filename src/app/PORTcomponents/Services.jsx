'use client';

import { motion } from 'framer-motion';
import { Globe, Zap, Monitor, Layout, ShoppingCart, PenTool, Palette, BarChart2, FileText, Link, Rocket } from 'lucide-react';

const services = [
  {
    title: "Custom Web Applications",
    description: "Bespoke, scalable web apps built from scratch — ideal for platforms, automation tools, and business systems.",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50"
  },
  {
    title: "Low-Code App Development",
    description: "Rapid development using low-code platforms like Bubble.io and FlutterFlow for MVPs, internal tools, and client portals.",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50"
  },
  {
    title: "Website Design & Development",
    description: "Fast, responsive, and conversion-focused websites tailored for business growth across all devices.",
    icon: Monitor,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50"
  },
  {
    title: "WordPress Development",
    description: "Flexible, easy-to-manage WordPress websites — perfect for content-driven platforms, blogs, and corporate sites.",
    icon: Layout,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50"
  },
  {
    title: "eCommerce Store Setup",
    description: "Fully functional Shopify or WooCommerce stores designed for smooth shopping and seamless performance.",
    icon: ShoppingCart,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50"
  },
  {
    title: "UI/UX Design",
    description: "User-first design for websites, apps, and dashboards — clean, modern, and purpose-driven.",
    icon: PenTool,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-50"
  },
  {
    title: "Logo & Brand Identity",
    description: "Professional branding including logo design, color palette, typography, and visual direction.",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50"
  },
  {
    title: "CRM Systems & Admin Dashboards",
    description: "Custom CRMs and internal tools to manage leads, clients, and operations efficiently.",
    icon: BarChart2,
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-50"
  },
  {
    title: "Landing Page Design",
    description: "High-impact landing pages optimized for product launches, ad campaigns, and conversions.",
    icon: FileText,
    color: "from-teal-500 to-emerald-500",
    bgColor: "bg-teal-50"
  },
  {
    title: "API Integrations & Automations",
    description: "Connect third-party tools, automate operations, and scale with custom backend logic.",
    icon: Link,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50"
  },
  {
    title: "Startup Launch Kits",
    description: "All-in-one bundles with branding, design, development, and post-launch support — built for speed and clarity.",
    icon: Rocket,
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50"
  }
];

const Services = () => {
  return (
    <section id='services' className="section-padding  bg-white">
      <div className="container-custom">
        
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} 
            className="text-3xl md:text-4xl font-bold text-dark-900 mb-4"
          >
            Services We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }} 
            className="text-lg text-dark-600 max-w-3xl mx-auto"
          >
            We help startups, businesses, and creators bring their digital ideas to life — from concept to clean execution
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }} 
              className="group"
            >
              <div className={`${service.bgColor} rounded-2xl p-6 h-full border border-gray-100 hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-dark-600 text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
