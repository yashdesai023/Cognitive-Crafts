import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react'; // Assuming these might be used in the footer

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-800 text-gray-300 py-10 dark:bg-dark-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {currentYear} Cognitive Crafts. All rights reserved.</p>
        {/* Optional: Add social links or other footer content here */}
        {/*
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Github size={24} />
          </a>
        </div>
        */}
      </div>
    </motion.footer>
  );
};

export default Footer; 