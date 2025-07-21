import React from 'react';

const Overview = () => {
  return (
    <section id="overview" className="min-h-[60vh] flex items-center justify-center py-4 w-full bg-transparent">
      <div className="w-full max-w-3xl text-center px-4">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight text-black dark:text-white">
          Empowering the LGBTQ+ Community<br />through Tech & Opportunity
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-200">
          Inclusive training, real projects, and guaranteed placement for trans and LGBTQ+ individuals.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <button
            className="text-white font-semibold rounded-xl px-8 py-3 text-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #ff0000 0%, #ff7f00 50%, #ffff00 100%)',
              border: 'none'
            }}
          >
            Get Started
          </button>
          <button className="border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-xl px-8 py-3 text-lg bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Overview; 