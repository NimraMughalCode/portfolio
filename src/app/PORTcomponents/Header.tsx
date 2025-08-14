'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/#about', label: 'About Us' },
  { href: '/#contact', label: 'Contact' },
];

// 🔹 Hook to detect active section
function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-100px 0px 0px 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return activeSection;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const activeSection = useActiveSection();

  // Detect scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const sectionId = href.split('#')[1];
      const element = document.getElementById(sectionId);

      if (element && pathname === '/') {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push(`/#${sectionId}`);
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
          <Image
            src="TROJANIX.png"
            alt="Trojanix Logo"
            width={200}
            height={50}
            priority
          />
        </Link>

        {/* Mobile menu button */}
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

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 ml-auto">
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              pathname={pathname}
              activeSection={activeSection}
              onClick={handleSmoothScroll}
            >
              {link.label}
            </NavItem>
          ))}
          <a
            href="https://wa.me/923206011437"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 lg:hidden"
            >
              <div className="px-6 py-4 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <NavItem
                    key={link.href}
                    href={link.href}
                    pathname={pathname}
                    activeSection={activeSection}
                    onClick={handleSmoothScroll}
                    setIsOpen={setIsOpen}
                  >
                    {link.label}
                  </NavItem>
                ))}
                <div className="pt-4">
                  <a
                    href="https://wa.me/923206011437"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center block"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

// 🔹 NavItem with underline animation & active state
type NavItemProps = {
  href: string;
  pathname: string | null;
  activeSection: string | null;
  children: React.ReactNode;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

function NavItem({
  href,
  pathname,
  activeSection,
  children,
  setIsOpen,
  onClick,
}: NavItemProps) {
  const sectionId = href.startsWith('/#') ? href.split('#')[1] : null;
  const isActive =
    pathname === href || (pathname === '/' && activeSection === sectionId);

  return (
    <Link
      href={href}
      onClick={(e) => {
        onClick(e, href);
        setIsOpen && setIsOpen(false);
      }}
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
