'use client';

import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background change on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Handle active section detection
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const sectionPositions = sections.map(section => {
        const element = document.getElementById(section);
        return element ? { 
          id: section, 
          position: element.offsetTop - 100
        } : null;
      }).filter(Boolean);
        const currentPosition = window.scrollY;
      
      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        const sectionPos = sectionPositions[i];
        if (sectionPos && currentPosition >= sectionPos.position) {
          setActiveSection(sectionPos.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'glass-nav dark:glass-nav-dark shadow-pastel-blue/20 py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative group">
            <motion.span
              className="text-2xl font-bold text-pastel-lavender relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 group-hover:w-full transition-all duration-500"></span>
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-2">
            <NavLink href="/#home" isActive={activeSection === 'home'}>Home</NavLink>
            <NavLink href="/#about" isActive={activeSection === 'about'}>About</NavLink>
            <NavLink href="/#projects" isActive={activeSection === 'projects'}>Projects</NavLink>
            <NavLink href="/#skills" isActive={activeSection === 'skills'}>Skills</NavLink>
            <NavLink href="/#experience" isActive={activeSection === 'experience'}>Experience</NavLink>
            <NavLink href="/#contact" isActive={activeSection === 'contact'}>Contact</NavLink>
          </nav>          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full glass dark:glass-dark text-gray-800 dark:text-white focus:outline-none shadow-neon-purple/30"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            {isOpen ? <FiX size={20} className="text-pink-500" /> : <FiMenu size={20} className="text-cyan-500" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.nav 
            className="md:hidden pt-6 pb-4 flex flex-col space-y-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavLink href="/#home" onClick={toggleMenu} isActive={activeSection === 'home'}>Home</MobileNavLink>
            <MobileNavLink href="/#about" onClick={toggleMenu} isActive={activeSection === 'about'}>About</MobileNavLink>
            <MobileNavLink href="/#projects" onClick={toggleMenu} isActive={activeSection === 'projects'}>Projects</MobileNavLink>
            <MobileNavLink href="/#skills" onClick={toggleMenu} isActive={activeSection === 'skills'}>Skills</MobileNavLink>
            <MobileNavLink href="/#experience" onClick={toggleMenu} isActive={activeSection === 'experience'}>Experience</MobileNavLink>
            <MobileNavLink href="/#contact" onClick={toggleMenu} isActive={activeSection === 'contact'}>Contact</MobileNavLink>
          </motion.nav>
        )}      </div>
    </header>
  );
};

const NavLink = ({ 
  href, 
  children, 
  isActive 
}: { 
  href: string; 
  children: React.ReactNode;
  isActive?: boolean;
}) => {  return (
    <Link 
      href={href} 
      className={`relative px-4 py-2 font-medium transition duration-300 overflow-hidden rounded-full group ${
        isActive 
          ? 'text-pastel-lavender' 
          : 'text-gray-700 hover:text-pastel-purple dark:text-gray-200 dark:hover:text-pastel-blue'
      }`}
    >
      <span className="relative z-10">{children}</span>
      <span className={`absolute inset-0 rounded-full -translate-y-full transition-transform duration-300 ${
        isActive 
          ? 'bg-pastel-lavender/20 dark:bg-pastel-lavender/30 translate-y-0'
          : 'bg-pastel-purple/10 dark:bg-pastel-blue/20 group-hover:translate-y-0'
      }`}></span>
      {isActive && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-pastel-lavender animate-pulse"></span>
      )}
    </Link>
  );
};

const MobileNavLink = ({ 
  href, 
  children, 
  onClick,
  isActive
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
}) => {
  return (    <Link 
      href={href} 
      className={`w-full px-4 py-3 rounded-lg transition-all duration-300 flex items-center ${
        isActive
          ? 'glass dark:glass-dark shadow-pastel-purple/20 text-pastel-lavender'
          : 'bg-pastel-purple/5 dark:bg-pastel-blue/10 text-gray-700 hover:text-pastel-purple dark:text-gray-200 dark:hover:text-pastel-blue hover:glass hover:dark:glass-dark hover:shadow-pastel-blue/10'
      }`}
      onClick={onClick}
    >
      {isActive && <span className="w-1 h-5 bg-pastel-lavender rounded-full mr-2 animate-pulse"></span>}
      {children}
    </Link>
  );
};

export default Navbar;
