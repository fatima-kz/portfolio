'use client';

import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
            Portfolio
          </Link>

          {/* Desktop Menu */}          <nav className="hidden md:flex space-x-10">
            <NavLink href="/#home">Home</NavLink>
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/#projects">Projects</NavLink>
            <NavLink href="/#skills">Skills</NavLink>
            <NavLink href="/#experience">Experience</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 dark:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (          <nav className="md:hidden pt-4 pb-3 flex flex-col space-y-3">
            <MobileNavLink href="/#home" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink href="/#about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink href="/#projects" onClick={toggleMenu}>Projects</MobileNavLink>
            <MobileNavLink href="/#skills" onClick={toggleMenu}>Skills</MobileNavLink>
            <MobileNavLink href="/#experience" onClick={toggleMenu}>Experience</MobileNavLink>
            <MobileNavLink href="/#contact" onClick={toggleMenu}>Contact</MobileNavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link 
      href={href} 
      className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 font-medium transition duration-300"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <Link 
      href={href} 
      className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 py-2 font-medium transition duration-300"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
