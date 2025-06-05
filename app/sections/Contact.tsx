'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <ContactInfo 
                icon={<FaEnvelope />}
                title="Email"
                content="fatimak2816@gmail.com"
                link="mailto:fatimak2816@gmail.com"
              />
              
              <ContactInfo 
                icon={<FaPhone />}
                title="Phone"
                content="+92 309 7275317"
                link="tel:+923097275317"
              />
              
              {/* <ContactInfo 
                icon={<FaMapMarkerAlt />}
                title="Location"
                content="Lahore, Pakistan"
                link="https://maps.google.com/?q=New+York"
              /> */}
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mt-8">
              I'm available for internships, freelance projects, full-time positions, and consultations. Don't hesitate to reach out!
            </p>
          </motion.div>
          
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ 
  icon, 
  title, 
  content, 
  link 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string;
  link: string;
}) => {
  return (
    <a 
      href={link} 
      className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="text-blue-600 dark:text-blue-400 mt-1">
        {icon}
      </div>
      <div>
        <h4 className="text-gray-900 dark:text-white font-medium">
          {title}
        </h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {content}
        </p>
      </div>
    </a>
  );
};

export default Contact;
