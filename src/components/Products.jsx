import React from 'react';
import { motion } from 'framer-motion';
import { Eye, FlaskConical, Clock, Lightbulb, FileText } from 'lucide-react'; // Placeholder icons, you might want to replace these

const Products = () => {
  const products = [
    {
      name: 'DrishyaScan',
      icon: <Eye size={32} className="text-primary-600 dark:text-primary-400" />,
      screenshotPlaceholder: 'Web Accessibility Analyzer Screenshot',
      features: [
        'AI-powered accessibility detection & reporting',
        'Supports WCAG and global standards',
        'Actionable insights for dev teams',
        'Improves user experience for all',
      ],
      learnMoreLink: '#', // Replace with actual link
    },
    {
      name: 'TestAura',
      icon: <FlaskConical size={32} className="text-primary-600 dark:text-primary-400" />,
      screenshotPlaceholder: 'Test Case Generator Screenshot',
      features: [
        'AI-driven test case generation',
        'Integrates with leading frameworks',
        'Accelerates QA cycles',
        'Enhances coverage and reliability',
      ],
      learnMoreLink: '#', // Replace with actual link
    },
  ];

  const upcomingProjects = [
    {
      name: 'Intelligent code review assistant',
      icon: <Lightbulb size={20} className="text-primary-600 dark:text-primary-400" />,
    },
    {
      name: 'AI-driven document summarizer',
      icon: <FileText size={20} className="text-primary-600 dark:text-primary-400" />,
    },
    {
      name: 'Automated compliance analyzer',
      icon: <Clock size={20} className="text-primary-600 dark:text-primary-400" />,
    },
  ];

  return (
    <section id="products" className="pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          Our Products & Solutions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-dark-800 rounded-lg shadow-lg p-6 flex flex-col"
            >
              <div className="flex items-center mb-4">
                {product.icon}
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white ml-4">
                  {product.name}
                </h3>
              </div>
              {/* Screenshot Placeholder */}
              <div className="w-full h-48 bg-gray-300 dark:bg-dark-700 flex items-center justify-center rounded-md mb-6 text-gray-700 dark:text-gray-400">
                {product.screenshotPlaceholder}
              </div>
              <ul className="list-none space-y-2 mb-6 flex-grow">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-primary-600 dark:text-primary-400 mr-2">{'>'}</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href={product.learnMoreLink} className="text-primary-600 dark:text-primary-400 font-medium hover:underline self-start">
                Learn more
              </a>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: products.length * 0.2 }}
          className="mt-16"
        >
           <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center md:text-left">
            Upcoming Projects
          </h3>
          <ul className="list-none space-y-4 max-w-2xl mx-auto md:mx-0">
            {upcomingProjects.map((project, index) => (
              <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                 {project.icon}
                 <span className="ml-3 text-lg">{project.name}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Products; 