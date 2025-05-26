import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react'; // Icon for the checklist

const AboutSection = () => {
  // Content based on the provided image and additional details for timeline
  const storyTimeline = [
    {
      year: '2023–2024',
      title: 'Early AI Innovations',
      description: 'Before the formal founding of Cognitive Crafts, our journey began with intensive research and experimentation in Artificial Intelligence.\
        Key projects developed during this period include:\
        - COVID-19 Detection System using Convolutional Neural Networks (CNN)\
        - Advanced CCTV Analytics leveraging YOLOv5 for crowd and object tracking\
        - Fighter Jet Surveillance System for defense-grade visual recognition\
        These foundational projects demonstrated the potential of combining AI with scalable software architectures.',
    },
    {
      year: 'January 2025',
      title: 'Founded Cognitive Crafts',
      description: 'Cognitive Crafts was officially established with the mission of merging AI and Java engineering to solve practical, real-world challenges. The company was built on the vision of making advanced technology accessible, scalable, and impactful.',
    },
    {
      year: 'March 2025',
      title: 'Launched DrishyaScan (Web Accessibility Analyzer)',
      description: 'We launched DrishyaScan, our flagship AI-powered platform designed to enhance digital accessibility through automated WCAG compliance analysis.\
        Built using a Java Spring Boot backend and React frontend, DrishyaScan provides website scanning, role-based dashboards, issue reporting, and actionable insights.',
    },
    {
      year: 'April 2025',
      title: 'Expanded into Testing Solutions',
      description: 'We began exploring the intersection of software testing and AI, integrating both manual and automated testing workflows with intelligent analytics.\
        This phase initiated the groundwork for developing smart testing tools that streamline quality assurance.',
    },
    {
      year: 'May 2025',
      title: 'Developed TestAura (AI-Powered Test Case Generator)',
      description: 'We released TestAura, an AI-driven solution that automates test case generation using natural language processing and machine learning.\
        The platform integrates seamlessly with Java-based systems and DevOps pipelines, accelerating software testing and improving test coverage.',
    },
    {
      year: 'Beyond 2025',
      title: 'Ongoing Innovation',
      description: 'Cognitive Crafts is actively expanding its portfolio with advanced AI + Java solutions, including:\
        - AI-driven DevOps Assistants\
        - Smart Document Analysis Engines\
        - Real-time Anomaly Detection Systems\
        Our focus remains on building intelligent, ethical, and impactful technologies that make a difference.',
    },
  ];

  const aiJavaAdvantages = [
    {
      title: 'Enterprise-grade Reliability',
      description: 'Leverage Java\'s mature ecosystem, robust memory management, and strong community support to build applications that are stable, secure, and dependable for large-scale enterprise use.',
    },
    {
      title: 'Modern AI Innovation',
      description: 'Combine the power of leading AI libraries and frameworks (often with Java APIs or integrations) with Java\'s performance and scalability to build intelligent features like machine learning models, natural language processing, and predictive analytics.',
    },
    {
      title: 'Accessibility-first Design',
      description: 'Build applications with accessibility in mind from the ground up, utilizing frameworks and practices that support inclusive design and comply with standards like WCAG.',
    },
    {
      title: 'Rapid, Agile Development',
      description: 'Benefit from Java\'s structured approach, extensive tooling, and the flexibility of modern frameworks to accelerate development cycles and adapt quickly to evolving requirements through agile methodologies.',
    },
    {
      title: 'Seamless Integration',
      description: 'Easily integrate AI functionalities into your existing Java-based enterprise systems and infrastructure, minimizing disruption and maximizing the value of your current technology investments.',
    },
    {
      title: 'Future-proof Scalability',
      description: 'Develop applications that can handle increasing data loads and user traffic, ensuring your solutions remain performant and cost-effective as your business grows.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center"
        >
          About Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Our Story - Timeline Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">Our Story</h3>
            <div className="relative pl-4 md:pl-8">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-4 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>

              {storyTimeline.map((item, index) => (
                <div key={index} className="mb-8 last:mb-0 relative pl-8 md:pl-10">
                  {/* Timeline dot */}
                  <div className="absolute left-[-4px] md:left-0 top-1 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400 z-10"></div>
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">{item.year}</p>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Why AI + Java? Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">Why AI + Java?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Java's proven enterprise reliability, paired with AI's problem-solving power,
              delivers robust, scalable solutions. Our expertise in both ensures high
              performance, seamless integration, and future-proof results for our clients.
            </p>
            <ul className="space-y-4">
              {aiJavaAdvantages.map((advantage, index) => (
                <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                  <CheckCircle size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{advantage.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{advantage.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;