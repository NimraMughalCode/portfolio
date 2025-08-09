'use client';

import { motion } from 'framer-motion';
import { Search, Map, Layout, Code, CheckSquare, Rocket } from 'lucide-react';

const OurProcess = () => {
  const steps = [
    { icon: Search, title: 'Discovery & Requirements', desc: 'We understand your goals, target users, and project scope to plan the right approach.' },
    { icon: Map, title: 'Planning & Strategy', desc: 'We define the tech stack, structure the roadmap, and map out user experience flows.' },
    { icon: Layout, title: 'Design Phase', desc: 'Clean, intuitive, and modern UI/UX design tailored to your brand and audience.' },
    { icon: Code, title: 'Development', desc: 'Whether custom-coded or built on low-code platforms, we bring your idea to life — fast and stable.' },
    { icon: CheckSquare, title: 'Review & Testing', desc: 'We review everything with you, test across devices, and fine-tune for performance and reliability.' },
    { icon: Rocket, title: 'Launch & Handover', desc: 'Smooth deployment, full handover, and post-launch support to make sure you\'re ready to grow.' },
  ];

  return (
    <section className="relative py-20 bg-white">
      <div className="container-custom px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-dark-900 text-center mb-6"
        >
          Our <span className="text-primary">Process</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-center text-dark-600 mb-12 leading-relaxed"
        >
          We keep things simple, strategic, and streamlined — so you always know what’s happening and why.
        </motion.p>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <step.icon className="text-primary w-10 h-10 mr-3" />
                <h3 className="text-lg font-semibold text-dark-900">{step.title}</h3>
              </div>
              <p className="text-dark-600 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;