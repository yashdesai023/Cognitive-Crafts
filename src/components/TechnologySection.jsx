import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Coffee, Cloud, GitBranch, Settings, Bug, Brain } from 'lucide-react'; // Example icons

const TechnologySection = () => {
  const technologies = [
    {
      category: 'AI',
      icon: <Sparkles size={32} className="text-primary-600 dark:text-primary-400 mb-2" />,
      items: [
        'Machine Learning',
        'Deep Learning',
        'Natural Language Processing',
        'Computer Vision (e.g., YOLOv5)',
        'AI Integration',
      ],
    },
    {
      category: 'Development',
      icon: <Code size={32} className="text-primary-600 dark:text-primary-400 mb-2" />,
      items: [
        'Java',
        'React',
        'JavaScript/TypeScript',
        'RESTful APIs',
        'Microservices',
        'Frontend/Backend Development',
      ],
    },
    {
      category: 'Java Ecosystem',
      icon: <Coffee size={32} className="text-primary-600 dark:text-primary-400 mb-2" />,
      items: [
        'Java SE/EE',
        'Spring Boot',
        'Hibernate',
        'Maven/Gradle',
        'JUnit/Mockito',
      ],
    },
    {
      category: 'DevOps',
      icon: <Settings size={32} className="text-primary-600 dark:text-primary-400 mb-2" />,
      items: [
        'CI/CD Pipelines',
        'Docker',
        'Kubernetes',
        'Automated Deployments',
        'Infrastructure as Code',
      ],
    },
    {
      category: 'Version Control',
      icon: <GitBranch size={32} className="text-primary-600 dark:text-primary-400 mb-2" />,
      items: [
        'Git',
        'GitHub/GitLab/Bitbucket',
        'Branching Strategies',
      ],
    },
    {
      category: 'Machine Learning Tools',
      icon: <Brain size={32} className="text-primary-600 dark:text-primary-400 mb-2" />,
      items: [
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
        'Keras',
        'Data Preprocessing Tools',
      ],
    },
    {
      category: 'Testing',
      icon: <Bug size={32} className="text-primary-600 dark:text-primary-400 mb-2" />,
      items: [
        'Automated Testing',
        'Manual Testing',
        'Performance Testing',
        'Security Testing',
        'Accessibility Testing (e.g., DrishyaScan)',
        'Test Case Generation (e.g., TestAura)',
      ],
    },
    {
      category: 'Cloud Based Services',
      icon: <Cloud size={32} className="text-primary-600 dark:text-primary-400 mb-2" />,
      items: [
        'AWS',
        'Azure',
        'Google Cloud Platform',
        'Cloud Deployment',
        'Managed Services',
      ],
    },
  ];

  return (
    <section id="technology" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Our Technology Stack
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-dark-900 rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-3">{category.category}</h3>
              </div>
              <ul className="list-none space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                     <span className="text-primary-600 dark:text-primary-400 mr-2">•</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection; 