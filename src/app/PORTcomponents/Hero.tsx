"use client"


import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const Hero = () => {
  const typedRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();


  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Vision', 'Precision', 'Clarity'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => typed.destroy();
  }, []);

  const features = [
    'Custom Web Applications',
    'Low-Code Development',
    'eCommerce Development',
    'UI/UX Design',
    'Brand Identity',
    'API Integrations'
  ];

  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, href: string) => {
      if (href.startsWith('/#')) {
        e.preventDefault();
        const sectionId = href.split('#')[1];
        const element = document.getElementById(sectionId);

        if (element && pathname === '/') {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          localStorage.setItem('scrollToSection', sectionId);
          router.push('/');
        }
      }
    },
    [pathname, router]
  );


  return (
    <section className="hero relative w-full min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        {/* Optional watermark - uncomment if needed */}
        {/*
        <div className="absolute inset-0 flex justify-center items-center opacity-5 pointer-events-none">
          <img src="/watermark-tech.png" alt="Tech Watermark" className="max-w-[600px]" />
        </div>
        */}
      </div>

      <div className="relative z-10 container-custom px-10 py-6">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <CheckCircle size={16} className="mr-2" />
              Trusted by Startups & Businesses
            </div>

            <h1 className="text-3xl lg:text-5xl font-bold text-dark-900 mb-6 leading-tight">
              Build with Confidence.
              <br />
              Launch with{' '}
              <span className="text-primary">
                <span ref={typedRef}></span>
              </span>
            </h1>

            <p className="text-xl text-dark-600 mb-8 leading-relaxed">
              Web apps, websites, and design solutions — built to perform, crafted to impress. 
              Trojanix helps you go from concept to clean execution with speed and clarity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              {/* Email Button */}
              <motion.a
                // href="/#contact"

                 onClick={(e) => handleSmoothScroll(e, '/#contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center group cursor-pointer"
              >
                Get a Free Quote
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </motion.a>

              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/923206011437"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline flex items-center justify-center group"
              >
                <Play size={20} className="mr-2" />
                Let’s Talk
              </motion.a>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center text-dark-600 text-sm"
                >
                  <CheckCircle size={16} className="text-secondary mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-dark-300 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-dark-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
