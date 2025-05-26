import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Code, Brain, Cloud, Users } from 'lucide-react'; // Icons
import profileImage from '../assets/images/profileimage.png'; // Import the profile image

const LeadershipSection = () => {
  const linkedinUrl = 'https://www.linkedin.com/in/yash-s-desai-/';
  const githubUrl = 'https://github.com/yashdesai023';

  return (
    <section id="leadership" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Leadership
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Left Column: Image and Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            {/* Placeholder for image - replace with actual image later */}
            <div className="w-40 h-40 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center overflow-hidden mb-6">
              {/* You can add an <img> tag here */}
              <img src={profileImage} alt="Yash Desai" className="w-full h-full object-cover" />
              {/* <Briefcase size={60} className="text-gray-600 dark:text-gray-300" /> {/* Example placeholder icon */}
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Yash Desai</h3>
            <p className="text-primary-600 dark:text-primary-400 mb-6">Final-year B.Tech student specializing in Computer Science (AI)</p>

            <div className="flex space-x-6">
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Linkedin size={28} />
              </a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Github size={28} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 text-gray-700 dark:text-gray-300"
          >
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About Yash</h4>
            <p className="mb-6">
              I'm a final-year B.Tech student specializing in Computer Science (AI) at PCET's NCER, with a strong interest in building real-world software solutions that solve meaningful problems. My core strength lies in Java backend development, with hands-on experience in Spring Boot, MySQL, and writing clean, modular code using OOP principles.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technical Expertise</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center"><Code size={20} className="mr-2 text-primary-600 dark:text-primary-400" /> Java (Spring Boot, JPA, Microservices)</div>
              <div className="flex items-center"><Brain size={20} className="mr-2 text-primary-600 dark:text-primary-400" /> AI/ML: NLP, computer vision, data pipelines</div>
              <div className="flex items-center"><Cloud size={20} className="mr-2 text-primary-600 dark:text-primary-400" /> System architecture & cloud</div>
              <div className="flex items-center"><Users size={20} className="mr-2 text-primary-600 dark:text-primary-400" /> Leading cross-functional teams</div>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Projects</h4>
            <ul className="list-disc list-inside mb-6">
              <li>DrishyaScan (Web Accessibility Analyzer) - Full-stack project (Java Spring Boot backend, React frontend), covering REST API development to deployment using Docker and Jenkins.</li>
              <li>Java-based Ticket Booking System</li>
              <li>COVID-19 detection using CNN (research-oriented)</li>
              {/* Add other relevant projects here */}
            </ul>

            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Seeking Opportunities & Collaboration</h4>
            <p className="mb-6">
              I'm always open to learning and collaborating on impactful tech projects. Actively seeking opportunities as a Java Developer, SDET, or DevOps Engineer to contribute, grow, and make a difference.
            </p>
            <p>
              📬 Feel free to connect or message me to collaborate or discuss opportunities.
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection; 