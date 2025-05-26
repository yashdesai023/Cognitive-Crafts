import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Rocket } from 'lucide-react'; // Example icons

const ApproachSection = () => {
  return (
    <section id="approach" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Our Approach
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Approach Item 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center p-6"
          >
            <Code size={48} className="text-primary-600 dark:text-primary-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Innovation & Technology</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We leverage the latest advancements in AI and technology to build forward-thinking solutions.
            </p>
          </motion.div>

          {/* Approach Item 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center p-6"
          >
            <Users size={48} className="text-primary-600 dark:text-primary-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Client-Centric Collaboration</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We work closely with you to understand your unique challenges and deliver tailored solutions.
            </p>
          </motion.div>

          {/* Approach Item 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center p-6"
          >
            <Rocket size={48} className="text-primary-600 dark:text-primary-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Driving Growth & Efficiency</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our goal is to empower your business with tools that drive growth and improve operational efficiency.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection; 