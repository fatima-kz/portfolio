'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Floating shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-pastel-pink-subtle blur-3xl"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-pastel-blue-subtle blur-3xl"
          animate={{ 
            x: [0, -20, 0], 
            y: [0, 20, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut" 
          }}
        />
        <div className="grid grid-cols-6 grid-rows-6 h-full opacity-5">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="border border-gray-200 dark:border-gray-700"></div>
          ))}
        </div>
      </div><div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              <motion.span 
                className="block text-heading-dark"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Fatima Khalid
              </motion.span>
              <motion.span 
                className="text-heading-dark mt-2 block"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Software <span className="text-pastel-purple">Developer</span>
              </motion.span>
            </h1>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I&apos;m a developer who cares about building software that feels intuitive and actually helps. Not just polished, but purposeful.
            </motion.p>
              <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >              <Link href="/#projects" 
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                View My Work
              </Link>
              
              <Link href="/#contact" 
                className="px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 font-medium rounded-lg transition duration-300 transform hover:-translate-y-1"
              >
                Contact Me
              </Link>
              
              <a 
                href="/Fatima_Khalid_CV.pdf" 
                download="Fatima_Khalid_CV.pdf"
                className="px-6 py-3 bg-pastel-purple hover:bg-pastel-lavender text-white font-medium rounded-lg transition duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
            <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] overflow-hidden group">
              <div className="absolute inset-0 bg-pastel-lavender rounded-full opacity-70 animate-rotate-slow"></div>
              <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full"></div>
              <div className="absolute inset-3 rounded-full overflow-hidden shadow-2xl shadow-pastel-purple/20 dark:shadow-pastel-blue/20 transition-all duration-500 group-hover:inset-6">
                <Image 
                  src="/name.jpeg" 
                  alt="Developer Profile" 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
              
              <motion.div 
                className="absolute -top-2 -right-2 w-12 h-12 bg-pastel-pink rounded-full shadow-lg shadow-pastel-pink/30"
                animate={{ 
                  y: [0, 8, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut" 
                }}
              />
              
              <motion.div 
                className="absolute -bottom-2 -left-2 w-8 h-8 bg-pastel-blue rounded-full shadow-lg shadow-pastel-blue/30"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  delay: 1,
                  ease: "easeInOut" 
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>        <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Link href="/#about" 
          className="flex items-center justify-center w-14 h-14 rounded-full glass dark:glass-dark shadow-pastel-blue/30 hover:shadow-pastel-purple/40 transition-all duration-300 group"
          aria-label="Scroll down to learn more"
        >
          <FaArrowDown className="text-pastel-blue text-xl group-hover:scale-110 transition-transform duration-300" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
