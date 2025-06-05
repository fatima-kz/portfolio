'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Minas Code",
      location: "Islamabad, Pakistan",
      period: "July 2024 - Aug 2024",
      description: "An internship program focused on entrepreneurship and product development. Interns worked in teams to build and launch startup products using the MERN stack, gaining practical experience in both technology and business.",
      type: "work",
    },
    {
      title: "Bachelor of Science in Computer Science",
      company: "Comsats University Islamabad",
      location: "Lahore, Pakistan",
      period: "2022 - Present",
      description: "Currently pursuing bachelor's degree in Computer Science. My course works include Machine Learning, Computer Vision, Web Technologies, and Parallel Computing. Eager to delve deeper into the field of machine learning to explore its applications.",
      type: "education",
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Experience Journey</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A timeline of my professional experience and educational background that has shaped my career.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="md:w-5/12 p-6">
                  <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">
                        {exp.type === 'work' ? (
                          <FaBriefcase className="text-blue-600 dark:text-blue-300" />
                        ) : (
                          <FaGraduationCap className="text-blue-600 dark:text-blue-300" />
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    </div>
                    <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {exp.company}
                    </h4>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-1">
                      <FaMapMarkerAlt className="mr-1" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                      <FaCalendarAlt className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </div>
                </div>
                
                {/* Circle in the middle */}
                <div className="md:w-2/12 flex justify-center items-center py-4">
                  <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-gray-800 z-10"></div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
          >
            Let&apos;s Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
