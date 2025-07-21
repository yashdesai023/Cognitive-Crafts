import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Briefcase, HeartHandshake } from 'lucide-react';

const courses = [
  {
    title: 'Project-Based Web Dev Track',
    icon: <Code size={36} className="text-pink-500 mb-2" />,
    description: 'Learn by doing. Build responsive websites, collaborate on real projects, and create a strong portfolio — no prior experience needed.',
    level: 'Beginner Friendly',
    cta: 'Apply Now',
  },
  {
    title: 'AI for Social Good Bootcamp',
    icon: <Brain size={36} className="text-yellow-500 mb-2" />,
    description: 'Tech with impact. Explore machine learning and AI tools to solve real-world social issues. Focused on ethical AI and inclusion.',
    level: 'Intermediate Level',
    cta: 'Apply Now',
  },
  {
    title: 'Inclusive Workplace Readiness',
    icon: <Briefcase size={36} className="text-green-500 mb-2" />,
    description: 'Be job-ready. Resume building, mock interviews, identity-affirming guidance, and navigating the tech world with confidence.',
    level: 'Career Prep Track',
    cta: 'Apply Now',
  },
  {
    title: 'Soft Skills for LGBTQ+ Individuals',
    icon: <HeartHandshake size={36} className="text-blue-500 mb-2" />,
    description: 'Grow beyond code. Workshops on communication, leadership, mental health, and resilience — all in a safe, affirming space.',
    level: 'Open to All',
    cta: 'Apply Now',
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4"
        >
          Featured Programs
        </motion.h2>
        <p className="text-center text-lg text-gray-700 dark:text-gray-200 mb-12 max-w-2xl mx-auto">
          Practical, inclusive, and proudly built for the LGBTQ+ community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-xl shadow-lg p-8 bg-white/60 dark:bg-white/10 backdrop-blur border border-white/40 dark:border-white/20 flex flex-col items-center text-center"
            >
              {course.icon}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{course.title}</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">{course.description}</p>
              <span className="inline-block mb-4 px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 text-xs font-semibold">
                {course.level}
              </span>
              <button className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold rounded-xl px-6 py-2 text-base shadow-md hover:shadow-lg transition transform hover:scale-105">
                {course.cta}
              </button>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-base text-gray-600 dark:text-gray-300 mt-12 max-w-2xl mx-auto">
          Each program guarantees safe learning, inclusive mentorship, and real career outcomes.
        </p>
      </div>
    </section>
  );
};

export default CoursesSection; 