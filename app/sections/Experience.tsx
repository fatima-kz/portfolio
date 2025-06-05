'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaCode, FaLaptopCode } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

const Experience = () => {  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Minas Code",
      location: "Islamabad, Pakistan",
      period: "July 2024 - Aug 2024",
      description: "An internship program focused on entrepreneurship and product development. Interns worked in teams to build and launch startup products using the MERN stack, gaining practical experience in both technology and business.",
      type: "work",
      skills: ["MERN", "Product Development", "Entrepreneurship"],
      techIcons: [SiMongodb, SiExpress, SiReact, SiNodedotjs],
      color: "pastel-purple",
      bgColor: "bg-pastel-purple/10 dark:bg-pastel-purple/5",
    },
    {
      title: "Bachelor of Science in Computer Science",
      company: "Comsats University Islamabad",
      location: "Lahore, Pakistan",
      period: "2022 - Present",
      description: "Currently pursuing bachelor's degree in Computer Science. My course works include Machine Learning, Computer Vision, Web Technologies, and Parallel Computing. Eager to delve deeper into the field of machine learning to explore its applications.",
      type: "education",
      skills: ["Machine Learning", "Computer Vision", "Web Technologies", "Parallel Computing"],
      techIcons: [FaCode, FaLaptopCode],
      color: "pastel-blue",
      bgColor: "bg-pastel-blue/10 dark:bg-pastel-blue/5",
    }
  ];return (    <section id="experience" className="py-16 bg-pastel-lavender/10 dark:bg-pastel-lavender/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-pastel-purple/20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-pastel-blue/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">            <h2 className="text-3xl md:text-4xl font-bold relative z-10">
              <span className="text-heading-dark">
                My Experience
              </span>
              <span className="absolute -bottom-3 left-0 w-full h-1 bg-pastel-purple rounded-full"></span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A creative journey through my professional experience and education that has shaped my skills and perspective.
          </p>
        </motion.div>        <div className="relative">
          {/* Vertical Line - hidden on mobile, shown on larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-pastel-mint rounded-full"></div>
          
          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >                {/* Content */}
                <div className="md:w-5/12 p-4 sm:p-6 w-full">
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    className={`${exp.bgColor} backdrop-blur-sm rounded-xl shadow-xl p-4 sm:p-6 border border-white/20 dark:border-white/10`}
                  >                    <div className="flex items-center mb-4">
                      <div className={`bg-${exp.color} p-3 rounded-full mr-3`}>
                        {exp.type === 'work' ? (
                          <FaBriefcase className="text-white text-xl" />
                        ) : (
                          <FaGraduationCap className="text-white text-xl" />
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    </div>
                    
                    <h4 className={`text-lg font-semibold text-${exp.color} mb-3`}>
                      {exp.company}
                    </h4>
                    
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                      <FaMapMarkerAlt className="mr-1" />
                      <span className="font-medium">{exp.location}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                      <FaCalendarAlt className="mr-1" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="mt-4">                      <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                        {exp.skills.map((skill, idx) => (
                          <span 
                            key={idx}
                            className={`text-xs px-2 py-1 rounded-full bg-${exp.color}/20 text-${exp.color} font-medium border border-${exp.color}/30`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-3 mt-3">
                        {exp.techIcons.map((Icon, idx) => (
                          <Icon 
                            key={idx} 
                            className={`text-xl opacity-70 hover:opacity-100 transition-opacity text-${exp.color}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>                  {/* Circle in the middle - smaller on mobile */}
                <div className="md:w-2/12 flex justify-center items-center py-3 md:py-4">
                  <div className={`relative w-8 h-8 md:w-10 md:h-10 rounded-full bg-${exp.color} border-4 border-white dark:border-gray-900 z-10 shadow-lg`}>
                    <div className="absolute inset-0 rounded-full animate-ping-slow bg-white opacity-30"></div>
                  </div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-pastel-purple hover:bg-pastel-pink text-white font-medium rounded-full shadow-lg hover:shadow-pastel-purple/40 transform transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
          >
            <span className="relative z-10">Let&apos;s Create Something Amazing</span>
            <span className="absolute top-0 left-0 w-full h-full bg-pastel-mint opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
          </a>
          
          <div className="mt-6">
            <motion.div 
              className="inline-block"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <span className="text-sm text-pastel-blue font-medium">Scroll to see more</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
