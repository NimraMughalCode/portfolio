'use client';

import { motion } from 'framer-motion';
import { Users, Layers, Monitor, Zap, Palette, CheckCircle } from 'lucide-react';

const AboutUs = () => {
  const strengths = [
    { icon: Layers, text: 'Scalable Solutions' },
    { icon: Palette, text: 'Clean, Modern Aesthetics' },
    { icon: Monitor, text: 'Cross-Platform Compatibility' },
    { icon: Users, text: 'Trusted Talent Network' },
    { icon: Zap, text: 'Flexible Tech Stack' },
    { icon: CheckCircle, text: 'On-Time Delivery' },
  ];

  return (
    <section id="about" className="relative py-20 gradient-bg">
      <div className="container-custom px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-dark-900 text-center mb-6"
        >
          About <span className="text-primary">Us</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-center text-dark-600 mb-12 leading-relaxed"
        >
          We’re a digital product team built for startups, brands, and businesses ready to grow.
          With a trusted network of expert designers and developers behind us, we craft clean, scalable,
          and user-focused solutions — from websites and web apps to branding and launch kits.
          No bloated processes, no confusing tech talk — just solid work, delivered with clarity.
        </motion.p>

        {/* Strengths Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {strengths.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-md flex items-center space-x-4"
            >
              <item.icon className="text-primary w-8 h-8 flex-shrink-0" />
              <span className="text-dark-700 font-medium">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
