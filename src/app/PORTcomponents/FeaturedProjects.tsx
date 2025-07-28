'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Code, Smartphone, Globe } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management, payment processing, and admin dashboard.",
    image: "/next.svg",
    category: "Web Development",
    technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Cross-platform mobile banking application with biometric authentication, real-time transactions, and secure messaging.",
    image: "/vercel.svg",
    category: "Mobile Development",
    technologies: ["React Native", "Firebase", "Stripe", "Biometrics"],
    icon: Smartphone,
    color: "from-green-500 to-emerald-500",
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: 3,
    title: "No-Code CRM System",
    description: "Custom CRM built on Bubble.io with advanced automation, lead scoring, and integration with multiple third-party services.",
    image: "/file.svg",
    category: "No-Code",
    technologies: ["Bubble.io", "Zapier", "Airtable", "Stripe"],
    icon: Code,
    color: "from-purple-500 to-pink-500",
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: 4,
    title: "Real Estate Platform",
    description: "Comprehensive real estate platform with virtual tours, mortgage calculator, and advanced search filters.",
    image: "/globe.svg",
    category: "Web Development",
    technologies: ["React.js", "Node.js", "PostgreSQL", "AWS"],
    icon: Globe,
    color: "from-orange-500 to-red-500",
    link: "#",
    github: "#",
    featured: false
  },
  {
    id: 5,
    title: "Food Delivery App",
    description: "Flutter-based food delivery app with real-time tracking, payment integration, and restaurant management system.",
    image: "/window.svg",
    category: "Mobile Development",
    technologies: ["Flutter", "Firebase", "Google Maps", "Stripe"],
    icon: Smartphone,
    color: "from-indigo-500 to-purple-500",
    link: "#",
    github: "#",
    featured: false
  },
  {
    id: 6,
    title: "SaaS Dashboard",
    description: "FlutterFlow-powered SaaS dashboard with analytics, user management, and subscription billing.",
    image: "/next.svg",
    category: "No-Code",
    technologies: ["FlutterFlow", "Firebase", "Stripe", "Analytics"],
    icon: Code,
    color: "from-teal-500 to-blue-500",
    link: "#",
    github: "#",
    featured: false
  }
];

const FeaturedProjects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-dark-900 mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-dark-600 max-w-3xl mx-auto"
          >
            Explore our portfolio of successful projects that demonstrate our expertise 
            in web development, mobile apps, and no-code solutions.
          </motion.p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center`}>
                    <project.icon size={32} className="text-white" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-dark-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-dark-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      className="flex-1 bg-primary text-white text-center py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Eye size={16} />
                      View Project
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 border border-gray-300 text-dark-700 text-center py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">
              More Projects
            </h3>
            <p className="text-dark-600">
              Discover more of our work across different technologies and industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 group-hover:scale-105">
                  {/* Project Image */}
                  <div className="relative h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center`}>
                      <project.icon size={24} className="text-white" />
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-primary text-white text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-dark-900 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-dark-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-dark-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-dark-700 text-xs font-medium rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <a
                        href={project.link}
                        className="flex-1 bg-primary text-white text-center py-2 px-3 rounded-lg hover:bg-primary-700 transition-colors text-sm flex items-center justify-center gap-1"
                      >
                        <Eye size={14} />
                        View
                      </a>
                      <a
                        href={project.github}
                        className="flex-1 border border-gray-300 text-dark-700 text-center py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors text-sm flex items-center justify-center gap-1"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-dark-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help bring your ideas to life with our expertise 
              in modern web development, mobile apps, and no-code solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Start Your Project
              </a>
              <a href="#projects" className="btn-outline">
                View All Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects; 