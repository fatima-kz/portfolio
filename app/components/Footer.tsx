'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (    <footer className="bg-white dark:bg-gray-900 py-16 relative overflow-hidden border-t border-gray-200 dark:border-gray-800">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-pastel-purple-subtle blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-pastel-mint-subtle blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >            <Link href="/" className="text-xl font-bold text-heading-dark">
              Portfolio
            </Link>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
              Bringing creative ideas to life through elegant and functional solutions.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SocialLink href="https://github.com/fatima-kz" aria-label="GitHub">
              <FaGithub size={22} />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/fatimakz" aria-label="LinkedIn">
              <FaLinkedin size={22} />
            </SocialLink>
          </motion.div>
        </div>
          <motion.div 
          className="border-t border-pastel-lavender/30 dark:border-pastel-lavender/20 mt-8 pt-8 flex flex-col md:flex-row justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
            © {currentYear} <span className="text-pastel-purple">Portfolio</span>. All rights reserved.
          </p>
        </motion.div>
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
  [key: string]: unknown;
}) => {
  return (    <Link 
      href={href} 
      className="w-12 h-12 flex items-center justify-center rounded-full glass dark:glass-dark text-gray-600 hover:text-pastel-purple dark:text-gray-400 transition duration-300 group hover:shadow-lg"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <motion.span
        whileHover={{ scale: 1.2, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {children}
      </motion.span>
    </Link>
  );
};

export default Footer;
