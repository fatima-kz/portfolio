'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCode, FaDesktop, FaMobile, FaRobot, FaProjectDiagram } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden shadow-xl">              {/* Replace with about image */}
              <Image 
                src="/fatima khalid.jpeg" 
                alt="About Me" 
                fill
                className="object-cover"
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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm Fatima Khalid. A Computer Science student in the end of my 3rd year. I'm a developer who loves solving messy problems with clean code and smart design. I'm obsessed with building things that work, feel intuitive, and occasionally surprise you with how clever they are. From web apps to AI agents, if it makes people's lives easier, I want to build it.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              My experience spans across the MERN stack, Python-based AI tools, and modern frontend frameworks like Next.js and Tailwind. I've worked in startup-style environments like the Forge Internship, contributed to open-source-style projects, and led development from scratch to deployment. My goal? To create seamless digital experiences and intelligent systems and to keep growing every single step of the way.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ServiceCard 
                icon={<FaCode size={24} />}
                title="Full-Stack Development"
                description="From frontend to backend with clean, scalable architecture."
            />

                <ServiceCard 
                icon={<FaRobot size={24} />}
                title="AI Integration"
                description="Building intelligent, multi-turn AI agents, all with context retention and tool use."
            />

                <ServiceCard 
                icon={<FaProjectDiagram size={24} />}
                title="Product Thinking"
                description="Designing, iterating, and deploying projects with real users in mind."
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
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-blue-600 dark:text-blue-400 mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h4>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        {description}
      </p>
    </div>
  );
};

export default About;
