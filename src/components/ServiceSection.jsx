import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Users, ShieldCheck, Search, FlaskConical } from 'lucide-react'; // Example icons

const ServiceSection = () => {
  const services = [
    {
      title: 'AI Development',
      icon: <Brain size={40} className="text-primary-600 dark:text-primary-400 mb-4" />,
      description: 'Develop custom AI models and integrate machine learning solutions to automate processes, analyze data, and enhance decision-making.',
    },
    {
      title: 'Java Engineering',
      icon: <Code size={40} className="text-primary-600 dark:text-primary-400 mb-4" />,
      description: 'Build robust, scalable, and secure enterprise applications using Java and modern frameworks like Spring Boot.',
    },
    {
      title: 'AI + Java Integration',
      icon: <Users size={40} className="text-primary-600 dark:text-primary-400 mb-4" />,
      description: 'Seamlessly combine the power of AI with Java\'s reliability for intelligent and efficient software solutions.',
    },
    {
      title: 'Digital Accessibility',
      icon: <ShieldCheck size={40} className="text-primary-600 dark:text-primary-400 mb-4" />,
      description: 'Ensure your digital products are accessible to everyone by integrating automated testing and compliance solutions like DrishyaScan.',
    },
    {
      title: 'Automated Testing',
      icon: <FlaskConical size={40} className="text-primary-600 dark:text-primary-400 mb-4" />,
      description: 'Implement AI-powered testing strategies and tools like TestAura to accelerate QA cycles and improve software quality.',
    },
    {
      title: 'Technology Consulting',
      icon: <Search size={40} className="text-primary-600 dark:text-primary-400 mb-4" />,
      description: 'Provide expert guidance on AI adoption, technology strategy, and software development best practices.',
    },
  ];

  return (
    <section id="service" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-800 rounded-lg shadow-lg p-6 text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection; 