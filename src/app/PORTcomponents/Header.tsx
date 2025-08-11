'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X /*, ChevronDown */ } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
    { href: '/#services', label: 'Services' },
  { href: '/#about', label: 'About Us' },

  // {
  //   href: '#services',
  //   label: 'Services',
  //   dropdown: [
  //     { href: '#web-development', label: 'Web Development' },
  //     { href: '#mobile-apps', label: 'Mobile Apps' },
  //     { href: '#no-code', label: 'No-Code Solutions' },
  //     { href: '#consulting', label: 'Consulting' },
  //   ]
  // },
  // { href: '/#projects', label: 'Projects' },
  // { href: '/#technologies', label: 'Technologies' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Smooth scroll logic
// ✅ Smooth scroll logic
const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith('/#')) {
    e.preventDefault();
    const sectionId = href.split('#')[1];
    const element = document.getElementById(sectionId);

    if (element && pathname === '/') {
      // ✅ Already on homepage → scroll directly
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // ✅ Navigate first, then scroll after page loads
      localStorage.setItem('scrollToSection', sectionId);
      router.push('/');
    }

    setIsOpen(false);
  }
};


  return (
    <header
      className={`fixed h-20 w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center hover:scale-105 transition-transform duration-300"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <span className="ml-3 text-xl font-bold text-dark-900">
            TROJANIX
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} className="text-dark-700" />
          ) : (
            <Menu size={24} className="text-dark-700" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 ml-auto">
          {navLinks.map((link) => (
            <div key={link.href} className="relative">
              {/* Dropdown logic commented out */}
              {/* {link.dropdown ? (
                <div
                  className="flex items-center gap-1 cursor-pointer group"
                  onMouseEnter={() => setActiveDropdown(link.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span className="px-4 py-2 font-medium text-dark-700 hover:text-primary transition-colors">
                    {link.label}
                  </span>
                  <ChevronDown size={16} className="text-dark-500 group-hover:text-primary transition-colors" />
                  
                  <AnimatePresence>
                    {activeDropdown === link.href && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-dark-700 hover:text-primary hover:bg-gray-50 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : ( */}
                <NavItem key={link.href} href={link.href} pathname={pathname} onClick={handleSmoothScroll}>
                  {link.label}
                </NavItem>
              {/* )} */}
            </div>
          ))}
          <Link href="/#contact" className="btn-primary" onClick={(e) => handleSmoothScroll(e, '/#contact')}>
            Get Started
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 lg:hidden"
            >
              <div className="px-6 py-4 space-y-4">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    {/* Dropdown commented for mobile as well */}
                    {/* {link.dropdown ? (
                      <div>
                        <div className="font-medium text-dark-700 mb-2">{link.label}</div>
                        <div className="ml-4 space-y-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="block text-dark-600 hover:text-primary transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : ( */}
                      <NavItem
                        href={link.href}
                        pathname={pathname}
                        onClick={handleSmoothScroll}
                        setIsOpen={setIsOpen}
                      >
                        {link.label}
                      </NavItem>
                    {/* )} */}
                  </div>
                ))}
                <div className="pt-4">
                  <Link href="/#contact" className="btn-primary w-full text-center block" onClick={(e) => handleSmoothScroll(e, '/#contact')}>
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

type NavItemProps = {
  href: string;
  pathname: string | null;
  children: React.ReactNode;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

function NavItem({ href, pathname, children, setIsOpen, onClick }: NavItemProps) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={(e) => onClick(e, href)}
      className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
        isActive ? 'text-primary font-semibold' : 'text-dark-700 hover:text-primary'
      }`}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        layoutId="nav-underline"
        className={`absolute left-0 bottom-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      />
    </Link>
  );
}
