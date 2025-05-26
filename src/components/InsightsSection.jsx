import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Code, Brain, Users, BarChart, Lightbulb } from 'lucide-react';

const InsightsSection = () => {
  const insights = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "AI Market Growth",
      description: "The global AI market is projected to reach $1.8 trillion by 2030, with a CAGR of 37.3% from 2023 to 2030.",
      category: "Market Trends"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Java's Enterprise Dominance",
      description: "Java remains the #1 programming language for enterprise applications, with over 9 million developers worldwide.",
      category: "Technology"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Integration",
      description: "85% of enterprises are planning to integrate AI into their operations by 2025, creating new opportunities for AI-Java solutions.",
      category: "Industry Insights"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Developer Demand",
      description: "Demand for Java developers with AI expertise has increased by 40% in the last year, with competitive salary packages.",
      category: "Career"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Performance Metrics",
      description: "Java-based AI solutions show 30% better performance in enterprise environments compared to other technology stacks.",
      category: "Technology"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation Trends",
      description: "The combination of Java and AI is driving innovation in areas like automated testing, predictive maintenance, and intelligent automation.",
      category: "Innovation"
    }
  ];

  return (
    <section id="insights" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Industry Insights
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay informed about the latest trends and developments in AI and Java development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
                  {insight.icon}
                </div>
                <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                  {insight.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {insight.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {insight.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            These insights are based on industry reports and market research, helping you make informed decisions about technology adoption and career development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InsightsSection; 