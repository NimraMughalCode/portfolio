'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const pathname = usePathname();

  // ✅ Smooth scroll logic
  const handleSmoothScroll = (e, href) => {
    if (href.startsWith('/#') || href.startsWith('#')) {
      e.preventDefault();
      const sectionId = href.replace('/#', '').replace('#', '');
      const element = document.getElementById(sectionId);

      if (element && pathname === '/') {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        localStorage.setItem('scrollToSection', sectionId);
        router.push('/');
      }
    }
  };

  const footerLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Our Process', href: '/#process' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Contact Us', href: '/#contact' }
  ];

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      {/* Main Footer */}
      <div className="container-custom px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="ml-3 text-xl font-bold">Trojanix</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We're a team of passionate developers, designers, and strategists
              dedicated to building exceptional digital experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-primary mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-700">info@trojanix.com</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-primary mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-700">+92 320 6011437</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-gray-700">
                    Chenab Rangers, Alrehman Road, Mirza Street, Sialkot Pakistan
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="container-custom px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Trojanix. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/terms" className="text-gray-500 hover:text-primary text-sm transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-gray-500 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
