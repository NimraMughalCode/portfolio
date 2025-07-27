'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#my-projects', label: 'My Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed h-[75px] w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-medium'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="#"
          className="flex items-center hover:scale-105 transition-transform duration-300"
        >
          <Image
            src="/image.jpg"
            alt="Nimra Asif Logo"
            width={48}
            height={48}
            className="h-10 w-10 rounded-full object-cover border-2 border-primary"
          />
          <span className="ml-3 text-xl font-semibold text-secondary">
            Nimra Asif
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={28} className="text-textmain" />
          ) : (
            <Menu size={28} className="text-textmain" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 ml-auto">
          {navLinks.map((link) => (
            <NavItem key={link.href} href={link.href} pathname={pathname}>
              {link.label}
            </NavItem>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-medium lg:hidden flex flex-col items-center gap-2 py-4"
            >
              {navLinks.map((link) => (
                <NavItem
                  key={link.href}
                  href={link.href}
                  pathname={pathname}
                  setIsOpen={setIsOpen}
                >
                  {link.label}
                </NavItem>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

// ✅ Type-safe version works in both JS and TS
type NavItemProps = {
  href: string;
  pathname: string;
  children: React.ReactNode;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavItem({ href, pathname, children, setIsOpen }: NavItemProps) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={() => setIsOpen && setIsOpen(false)}
      className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
        isActive ? 'text-secondary font-semibold' : 'text-textmain hover:text-primary'
      }`}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        layoutId="nav-underline"
        className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-cta rounded-full transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      />
    </Link>
  );
}
