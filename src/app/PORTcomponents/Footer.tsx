'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const pathname = usePathname();

  // ✅ Smooth scroll logic copied from Header
  const handleSmoothScroll = (e, href) => {
    if (href.startsWith('/#') || href.startsWith('#')) {
      e.preventDefault();
      const sectionId = href.replace('/#', '').replace('#', '');
      const element = document.getElementById(sectionId);

      if (element && pathname === '/') {
        // Already on homepage → scroll directly
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Navigate first, then scroll after load
        localStorage.setItem('scrollToSection', sectionId);
        router.push('/');
      }
    }
  };

  const footerLinks = {
    services: [
      { name: 'Web Development', href: '#web-development' },
      { name: 'Mobile Apps', href: '#mobile-apps' },
      { name: 'No-Code Solutions', href: '#no-code' },
      { name: 'Consulting', href: '#consulting' },
      { name: 'UI/UX Design', href: '#design' }
    ],
    company: [
      { name: 'About Us', href: '/#about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press', href: '/press' }
    ],
    resources: [
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Support', href: '/support' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/trojanix' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/trojanix' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/trojanix' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/trojanix' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/trojanix' }
  ];

  return (
    <footer className="bg-dark-900 text-white">
      {/* Main Footer */}
      <div className="container-custom px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="ml-3 text-xl font-bold">Trojanix</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We're a team of passionate developers, designers, and strategists dedicated 
              to building exceptional digital experiences that drive business growth and 
              user engagement.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Mail size={20} className="text-primary" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-gray-300">info@trojanix.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={20} className="text-primary" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-gray-300">+92 320 6011437</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={20} className="text-primary" />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-gray-300"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Trojanix. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Made by Trojanix</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
