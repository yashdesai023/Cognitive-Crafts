import React from 'react';

const whatWeDo = [
  {
    title: 'Free Tech Training',
    description: 'Self-paced, beginner-friendly programs in web development, design, and AI tailored for marginalized communities.',
    badge: '',
    color: 'green-600',
  },
  {
    title: 'Real Projects, Real Growth',
    description: 'Trainees work on live, impactful projects — from social impact apps to open-source tools — building both skills and portfolios.',
    badge: '',
    color: 'green-600',
  },
  {
    title: 'Paid Opportunities & Job Support',
    description: 'Every deserving learner gets the chance to earn — through freelance work, internships, or placements via our inclusive hiring network.',
    badge: '',
    color: 'green-600',
  },
  {
    title: 'A Safe, Proud Community',
    description: 'We create a gender-affirming learning space that values every voice and identity. You\'re not just included — you\'re celebrated.',
    badge: '',
    color: 'green-600',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 w-full bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-black dark:text-white">Who We Are?</h2>
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-xl font-bold text-black dark:text-white">Mission Statement</span>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
            Cognitive Crafts is an inclusive tech initiative built to empower the transgender and LGBTQ+ community with free education, hands-on training, and sustainable employment in the digital world.
          </p>
          <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
            We believe in a future where gender identity is not a barrier to opportunity. Our platform helps LGBTQ+ individuals break into the tech industry with confidence, dignity, and support.
          </p>
        </div>
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-xl font-bold text-black dark:text-white">What We Do</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-4">
            {whatWeDo.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl shadow p-6 text-left flex flex-col h-full bg-white/60 dark:bg-white/10 backdrop-blur border border-white/40 dark:border-white/20"
              >
                <div className={`text-${item.color} text-2xl mb-2`}>{item.badge}</div>
                <h3 className="font-bold text-lg mb-2 text-black dark:text-white">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-200">{item.description}</p>
                </div>
              ))}
            </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
          <button
            className="text-white font-semibold rounded-xl px-8 py-3 text-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #ff0000 0%, #ff7f00 50%, #ffff00 100%)',
              border: 'none'
            }}
          >
            Join as a Learner
          </button>
          <button className="border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-xl px-8 py-3 text-lg bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;