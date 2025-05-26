import React from 'react';
import { motion } from 'framer-motion';

const Overview = () => {
  return (
    <section id="overview" className="max-h-screen py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Welcome to Cognitive Crafts
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are a team of AI enthusiasts and software developers dedicated to creating innovative solutions
            that help businesses thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              AI-Powered Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Leverage the power of artificial intelligence to automate tasks, gain insights, and make data-driven decisions.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Custom Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Tailored software solutions designed to meet your specific business needs and challenges.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Expert Consultation
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get guidance from industry experts to help you navigate the complex world of AI and technology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Overview; 