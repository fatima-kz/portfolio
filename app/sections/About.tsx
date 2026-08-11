'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaProjectDiagram } from 'react-icons/fa';

const About = () => {
  return (    <section id="about" className="py-20 bg-pastel-pink/10 dark:from-indigo-950 dark:to-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-pastel-pink/20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-pastel-lavender/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-heading-dark">
            About Me
          </h2>
          <div className="w-24 h-1 bg-pastel-pink mx-auto rounded-full"></div>
        </motion.div><div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-xl overflow-hidden shadow-neon-purple/20 group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:opacity-70 transition-opacity duration-500 z-10 opacity-0"></div>
              <Image 
                src="/fatima.JPEG" 
                alt="About Me" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 border-4 border-white/20 dark:border-white/5 rounded-xl z-20"></div>
              
              <motion.div 
                className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full shadow-lg z-30 opacity-80"
                animate={{ 
                  y: [0, 5, 0],
                  x: [0, 5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut" 
                }}
              />
              
              <motion.div 
                className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-lg z-30 opacity-80"
                animate={{ 
                  y: [0, -5, 0],
                  x: [0, -5, 0]
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
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gradient-cyan-blue mb-4">
              Who I Am
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I am a fresh graduate in Computer Science and a developer who enjoys building things that are useful, practical, and thoughtfully designed. My work sits at the intersection of web development and AI, where I like turning ideas into products people can actually use. From full stack web apps to intelligent assistants and automation systems, I am most excited by projects that solve real problems in a simple way.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Through my projects and experience, I have worked with technologies like Next.js, React, Node.js, Python, LangGraph, and modern AI tools. I have built everything from startup style MVPs to AI powered platforms, and I am always interested in learning the right tools for the job. What matters most to me is creating clean solutions, writing code that scales, and building experiences that feel natural and helpful.
            </p>              
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <ServiceCard 
                icon={<FaCode size={28} />}
                title="Full-Stack Development"
                description="From frontend to backend with clean, scalable architecture."
                color="from-cyan-500 to-blue-500"
              />

              <ServiceCard 
                icon={<FaRobot size={28} />}
                title="AI Integration"
                description="Building intelligent, multi-turn AI agents, all with context retention and tool use."
                color="from-purple-500 to-pink-500"
              />

              <ServiceCard 
                icon={<FaProjectDiagram size={28} />}
                title="Product Thinking"
                description="Designing, iterating, and deploying projects with real users in mind."
                color="from-green-500 to-cyan-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ 
  icon, 
  title, 
  description,
  color
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  color: string;
}) => {
  return (
    <motion.div 
      className="glass dark:glass-dark p-6 rounded-xl shadow-lg hover:shadow-neon-cyan/20 transition-all duration-300 relative overflow-hidden group"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${color}`}></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-full -mr-10 -mb-10 group-hover:scale-150 transition-transform duration-700"></div>
      
      <div className={`text-gradient-${(color.split(' ')[0]?.substring(5) || 'cyan')}-${(color.split(' ')[1]?.substring(3) || 'blue')} mb-4 relative z-10`}>
        {icon}
      </div>
      
      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 relative z-10">
        {title}
      </h4>
      
      <p className="text-gray-600 dark:text-gray-400 text-sm relative z-10">
        {description}
      </p>
    </motion.div>
  );
};

export default About;
