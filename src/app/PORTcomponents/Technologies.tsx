'use client';

import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Zap } from 'lucide-react';

const technologies = [
  {
    category: "No-Code Platforms",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    items: [
      { name: "Bubble.io", description: "Visual programming platform for web applications" },
      { name: "FlutterFlow", description: "No-code app builder for mobile and web" },
      { name: "Webflow", description: "Visual website builder with CMS" },
      { name: "Airtable", description: "Database and automation platform" }
    ]
  },
  {
    category: "Frontend Development",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    items: [
      { name: "React.js", description: "JavaScript library for building user interfaces" },
      { name: "Next.js", description: "React framework for production" },
      { name: "TypeScript", description: "Typed JavaScript for better development" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework" }
    ]
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    items: [
      { name: "React Native", description: "Cross-platform mobile app development" },
      { name: "Flutter", description: "Google's UI toolkit for mobile apps" },
      { name: "Ionic", description: "Hybrid mobile app framework" },
      { name: "Progressive Web Apps", description: "Web apps that work like native apps" }
    ]
  },
  {
    category: "Backend & Cloud",
    icon: Code,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    items: [
      { name: "Node.js", description: "JavaScript runtime for server-side development" },
      { name: "Firebase", description: "Google's mobile and web app platform" },
      { name: "AWS", description: "Cloud computing services" },
      { name: "Vercel", description: "Deployment platform for web applications" }
    ]
  }
];

const Technologies = () => {
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
            Technologies We Master
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-dark-600 max-w-3xl mx-auto"
          >
            We stay at the forefront of technology to deliver cutting-edge solutions. 
            From no-code platforms to custom development, we have the expertise to bring your vision to life.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className={`${tech.bgColor} rounded-2xl p-6 h-full border border-gray-100 hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mb-4`}>
                  <tech.icon size={24} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-dark-900 mb-4">
                  {tech.category}
                </h3>
                
                <div className="space-y-3">
                  {tech.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (itemIndex * 0.05) }}
                      className="group/item"
                    >
                      <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors">
                        <div className={`w-2 h-2 bg-gradient-to-r ${tech.color} rounded-full mt-2 flex-shrink-0`} />
                        <div>
                          <h4 className="font-semibold text-dark-900 text-sm">
                            {item.name}
                          </h4>
                          <p className="text-dark-600 text-xs mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">
              And Many More...
            </h3>
            <p className="text-dark-600">
              Our expertise extends to a wide range of modern technologies and tools
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "MongoDB", "PostgreSQL", "GraphQL", "REST APIs", "Docker", "Kubernetes",
              "Git", "CI/CD", "Jest", "Cypress", "Figma", "Adobe XD",
              "Stripe", "PayPal", "SendGrid", "Twilio", "Google Analytics", "Hotjar"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <span className="text-sm font-medium text-dark-700">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies; 