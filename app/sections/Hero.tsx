'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="grid grid-cols-6 grid-rows-6 h-full">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="border border-gray-200 dark:border-gray-700"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Fatima Khalid
              </span>
              <br />
              Software Developer
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              I'm a developer who cares about building software that feels intuitive and actually helps. Not just polished, but purposeful.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/#projects" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 transform hover:-translate-y-1"
              >
                View My Work
              </Link>
              
              <Link href="/#contact" 
                className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 font-medium rounded-lg transition duration-300 transform hover:-translate-y-1"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden bg-blue-100 dark:bg-blue-900/30 shadow-xl">              {/* Replace with your image */}
              <Image 
                src="/name.jpeg" 
                alt="Developer Profile" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Link href="/#about" 
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
          aria-label="Scroll down to learn more"
        >
          <FaArrowDown className="text-blue-600 dark:text-blue-400" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
