'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (    <section id="contact" className="py-20 bg-pastel-peach/10 dark:bg-pastel-peach/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-pastel-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-pastel-mint/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-heading-dark">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I&apos;d love to hear from you!
          </p>
          <div className="w-24 h-1 bg-pastel-purple mx-auto mt-4 rounded-full"></div>
        </motion.div>          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >            <h3 className="text-2xl font-bold text-heading-dark mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <ContactInfo 
                icon={<FaEnvelope size={20} />}
                title="Email"
                content="fatimak2816@gmail.com"
                link="mailto:fatimak2816@gmail.com"
                color="pastel-purple"
              />
              
              <ContactInfo 
                icon={<FaPhone size={20} />}
                title="Phone"
                content="+92 309 7275317"
                link="tel:+923097275317"
                color="pastel-mint"
              />
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mt-8 glass dark:glass-dark p-4 rounded-lg">
              I&apos;m available for internships, freelance projects, full-time positions, and consultations. Don&apos;t hesitate to reach out!
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
  link,
  color
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string;
  link: string;
  color: string;
}) => {  return (
    <motion.a 
      href={link} 
      className={`flex items-start gap-4 p-5 glass dark:glass-dark rounded-xl shadow-lg hover:shadow-${color}/20 transition-all duration-300 group relative overflow-hidden`}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
    >
      <div className={`absolute top-0 left-0 h-1 w-full bg-${color}`}></div>
      <div className={`text-${color} mt-1 text-xl transition-transform duration-300 group-hover:scale-125`}>
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
    </motion.a>
  );
};

export default Contact;
