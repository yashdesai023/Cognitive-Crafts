import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Hammer, DollarSign, Users } from 'lucide-react';

const steps = [
  {
    title: 'Learn',
    icon: <BookOpen size={36} className="text-pink-500 mb-2" />,
    description: 'Get started with free, beginner-friendly tech training — from Web Development to AI — all designed to be inclusive, flexible, and self-paced.',
  },
  {
    title: 'Build',
    icon: <Hammer size={36} className="text-orange-500 mb-2" />,
    description: 'Work on real-life client and community projects, collaborate in teams, and build a portfolio that shows what you can do — not where you’re from.',
  },
  {
    title: 'Earn',
    icon: <DollarSign size={36} className="text-yellow-500 mb-2" />,
    description: 'Move into paid internships, freelance work, or placement support — with priority given to transgender and non-binary learners.',
  },
  {
    title: 'Empower',
    icon: <Users size={36} className="text-green-500 mb-2" />,
    description: 'Return as a mentor, team lead, or community contributor — helping others rise while you grow further.',
  },
];

const PathSVG = () => (
  <svg
    className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-24 pointer-events-none z-0"
    viewBox="0 0 1000 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="rainbow-gradient" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="transparent" offset="0%" />
        <stop stopColor="#ec4899" offset="8%" />
        <stop stopColor="#f59e42" offset="33%" />
        <stop stopColor="#fde047" offset="66%" />
        <stop stopColor="#4ade80" offset="92%" />
        <stop stopColor="transparent" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M 50 50 Q 200 0 350 50 T 650 50 T 950 50"
      stroke="url(#rainbow-gradient)"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
      opacity="0.7"
    />
  </svg>
);

const PathSVGVertical = () => (
  <svg
    className="block md:hidden absolute left-1/2 -translate-x-1/2 top-0 h-full w-16 pointer-events-none z-0"
    viewBox="0 0 64 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="rainbow-gradient-vert" x1="0" y1="0" x2="0" y2="600" gradientUnits="userSpaceOnUse">
        <stop stopColor="transparent" offset="0%" />
        <stop stopColor="#ec4899" offset="8%" />
        <stop stopColor="#f59e42" offset="33%" />
        <stop stopColor="#fde047" offset="66%" />
        <stop stopColor="#4ade80" offset="92%" />
        <stop stopColor="transparent" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M 32 50 Q 0 150 32 250 Q 64 350 32 450 Q 0 550 32 600"
      stroke="url(#rainbow-gradient-vert)"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
      opacity="0.7"
    />
  </svg>
);

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 relative overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          How It Works?
        </motion.h2>
        <p className="text-center text-lg text-gray-700 dark:text-gray-200 mb-12 max-w-2xl mx-auto">
          A simple path from learning to earning — made for and by the LGBTQ+ community.
        </p>
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 z-10">
          <PathSVG />
          <PathSVGVertical />
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center md:w-1/4 px-4 relative z-10">
              <div className="flex flex-col items-center rounded-xl shadow-lg p-6 bg-white/60 dark:bg-white/10 backdrop-blur border border-white/40 dark:border-white/20">
                {step.icon}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 