'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    // Clear the error for this field when the user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };
  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-xl mx-auto glass dark:glass-dark rounded-xl shadow-lg p-6 sm:p-8 relative overflow-hidden"
      onSubmit={handleSubmit}
    >
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-pastel-purple/20 rounded-full animate-float"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pastel-pink/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      
      <h3 className="text-2xl font-bold mb-6 text-heading-dark relative z-10">Send a Message</h3>
      
      <div className="mb-6 relative z-10">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 glass dark:glass-dark border rounded-lg focus:outline-none transition-all duration-300
            ${errors.name 
              ? 'border-red-400 shadow-lg' 
              : 'border-pastel-purple/30 dark:border-pastel-purple/20 focus:border-pastel-purple focus:shadow-lg'}`}
          placeholder="Your name"
        />
        {errors.name && (
          <motion.p 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-1 text-sm text-pastel-pink"
          >
            {errors.name}
          </motion.p>
        )}
      </div>
      
      <div className="mb-6 relative z-10">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 glass dark:glass-dark border rounded-lg focus:outline-none transition-all duration-300
            ${errors.email 
              ? 'border-red-400 shadow-lg' 
              : 'border-pastel-mint/30 dark:border-pastel-mint/20 focus:border-pastel-mint focus:shadow-lg'}`}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <motion.p 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-1 text-sm text-pastel-pink"
          >
            {errors.email}
          </motion.p>
        )}
      </div>
      
      <div className="mb-6 relative z-10">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 glass dark:glass-dark border rounded-lg focus:outline-none transition-all duration-300
            ${errors.message 
              ? 'border-red-400 shadow-lg' 
              : 'border-pastel-blue/30 dark:border-pastel-blue/20 focus:border-pastel-blue focus:shadow-lg'}`}
          placeholder="Your message..."
        />
        {errors.message && (
          <motion.p 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mt-1 text-sm text-pastel-pink"
          >
            {errors.message}
          </motion.p>
        )}
      </div>
      
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 px-4 font-medium rounded-lg focus:outline-none transition-all duration-300 relative z-10
          ${isSubmitting 
            ? 'bg-gray-400 text-white cursor-not-allowed' 
            : 'bg-pastel-purple hover:bg-pastel-lavender text-white transform hover:-translate-y-1 hover:shadow-lg'}`}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : 'Send Message'}
      </motion.button>
      
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 glass dark:glass-dark border border-green-300 dark:border-green-700 text-green-700 dark:text-green-400 rounded-lg shadow-lg relative z-10"
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Message sent successfully! I&apos;ll get back to you soon.
          </div>
        </motion.div>
      )}
      
      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 glass dark:glass-dark border border-red-300 dark:border-red-700 text-red-700 dark:text-red-400 rounded-lg shadow-lg relative z-10"
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            Failed to send message. Please try again later.
          </div>
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;
