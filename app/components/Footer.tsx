'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
              Portfolio
            </Link>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
              Bringing creative ideas to life through elegant and functional solutions.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <SocialLink href="https://github.com/fatima-kz" aria-label="GitHub">
              <FaGithub size={24} />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/fatimakz" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </SocialLink>
          </div>
        </div>
        
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ 
  href, 
  children,
  ...props
}: { 
  href: string; 
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <Link 
      href={href} 
      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </Link>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link 
      href={href} 
      className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition duration-300"
    >
      {children}
    </Link>
  );
};

export default Footer;
