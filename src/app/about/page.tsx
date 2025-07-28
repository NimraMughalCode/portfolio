'use client';

import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Code, Smartphone, Zap, CheckCircle } from 'lucide-react';
import Header from '../PORTcomponents/Header';
import Footer from '../PORTcomponents/Footer';

const AboutPage = () => {
  const stats = [
    { number: '150+', label: 'Projects Completed', icon: Award },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '5+', label: 'Years Experience', icon: Target },
    { number: '24/7', label: 'Support Available', icon: Globe }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay at the forefront of technology to deliver cutting-edge solutions that drive business growth.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their needs and deliver solutions that exceed expectations.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in every project we undertake.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We focus on creating solutions that make a real difference in our clients\' businesses.'
    }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: '/next.svg',
      bio: '10+ years of experience in web development and digital strategy.'
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Developer',
      image: '/vercel.svg',
      bio: 'Expert in React, Next.js, and modern web technologies.'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Mobile Specialist',
      image: '/file.svg',
      bio: 'Specialized in React Native and cross-platform development.'
    },
    {
      name: 'Emily Davis',
      role: 'No-Code Expert',
      image: '/globe.svg',
      bio: 'Bubble.io and FlutterFlow specialist with 5+ years experience.'
    }
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
              About TechFlow
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-dark-600 mb-8 leading-relaxed"
            >
              We're a team of passionate developers, designers, and strategists dedicated to 
              transforming ideas into powerful digital solutions. Since 2019, we've been helping 
              businesses of all sizes build exceptional web applications, mobile apps, and no-code solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-dark-900 mb-2">{stat.number}</div>
                <div className="text-dark-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-dark-900 mb-6">Our Mission</h2>
              <p className="text-lg text-dark-600 mb-6 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, 
                enhance user experiences, and create lasting impact in the digital landscape.
              </p>
              <p className="text-dark-600 leading-relaxed">
                We believe that technology should be accessible, powerful, and transformative. 
                That's why we combine cutting-edge development practices with user-centered design 
                to create solutions that not only meet today's needs but also scale for tomorrow's challenges.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-dark-900 mb-6">Our Vision</h3>
              <p className="text-dark-600 leading-relaxed mb-6">
                To be the leading digital agency that businesses trust to transform their ideas 
                into powerful, scalable, and user-friendly digital solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-secondary" />
                  <span className="text-dark-700">Innovation-driven development</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-secondary" />
                  <span className="text-dark-700">User-centered design approach</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-secondary" />
                  <span className="text-dark-700">Scalable and maintainable solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-secondary" />
                  <span className="text-dark-700">Long-term partnership focus</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container-custom px-6">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-dark-900 mb-4"
            >
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-dark-600 max-w-3xl mx-auto"
            >
              These core values guide everything we do and shape how we work with our clients.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-3">{value.title}</h3>
                <p className="text-dark-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom px-6">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-dark-900 mb-4"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-dark-600 max-w-3xl mx-auto"
            >
              Our talented team brings together expertise in web development, mobile apps, 
              and no-code solutions to deliver exceptional results.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-dark-900 mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-dark-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 text-center border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-dark-900 mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-dark-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help bring your vision to life 
              with our expertise in modern web development, mobile apps, and no-code solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Start Your Project
              </a>
              <a href="/projects" className="btn-outline">
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage; 