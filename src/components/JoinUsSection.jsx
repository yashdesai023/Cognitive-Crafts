import React from 'react';

const JoinUsSection = () => {
  return (
    <section id="joinus" className="py-20 bg-white dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">Join Us</h2>
        <p className="text-center text-lg text-gray-700 dark:text-gray-200 mb-12 max-w-2xl mx-auto">
          Whether you want to learn, support, or collaborate — there’s a place for you here.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: For Supporters */}
          <div className="bg-white/60 dark:bg-white/10 backdrop-blur rounded-xl shadow-lg p-8 border border-white/40 dark:border-white/20 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-4">For Supporters</h3>
            <p className="text-gray-700 dark:text-gray-200 mb-6 text-center">Help amplify our mission</p>
            <div className="w-full space-y-6">
              <div className="bg-white/80 dark:bg-white/20 rounded-lg p-4 flex flex-col items-center border border-white/30">
                <span className="font-semibold text-lg text-pink-700 dark:text-pink-300 mb-2">Volunteers</span>
                <span className="text-gray-600 dark:text-gray-200 mb-2 text-center">Mentor, teach, or help us grow</span>
                <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold rounded-xl px-6 py-2 text-base shadow-md hover:shadow-lg transition transform hover:scale-105">Help Us Grow</button>
              </div>
              <div className="bg-white/80 dark:bg-white/20 rounded-lg p-4 flex flex-col items-center border border-white/30">
                <span className="font-semibold text-lg text-yellow-700 dark:text-yellow-300 mb-2">Partners</span>
                <span className="text-gray-600 dark:text-gray-200 mb-2 text-center">Hire skilled LGBTQ+ tech talent</span>
                <button className="bg-gradient-to-r from-yellow-400 to-green-400 text-white font-semibold rounded-xl px-6 py-2 text-base shadow-md hover:shadow-lg transition transform hover:scale-105">Hire from Us</button>
              </div>
              <div className="bg-white/80 dark:bg-white/20 rounded-lg p-4 flex flex-col items-center border border-white/30">
                <span className="font-semibold text-lg text-red-700 dark:text-red-300 mb-2">❤ Donors</span>
                <span className="text-gray-600 dark:text-gray-200 mb-2 text-center">Support inclusive tech training and placements</span>
                <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-xl px-6 py-2 text-base shadow-md hover:shadow-lg transition transform hover:scale-105">Support Our Mission</button>
              </div>
            </div>
          </div>
          {/* Right: For Learners */}
          <div className="bg-white/60 dark:bg-white/10 backdrop-blur rounded-xl shadow-lg p-8 border border-white/40 dark:border-white/20 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">For Learners</h3>
            <p className="text-gray-700 dark:text-gray-200 mb-6 text-center">Become part of our inclusive learning community</p>
            <div className="w-full space-y-6">
              <div className="bg-white/80 dark:bg-white/20 rounded-lg p-4 flex flex-col items-center border border-white/30">
                <span className="font-semibold text-lg text-blue-700 dark:text-blue-300 mb-2">Join as a Student</span>
                <span className="text-gray-600 dark:text-gray-200 mb-2 text-center">Free training, real projects, paid work</span>
                <button className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold rounded-xl px-6 py-2 text-base shadow-md hover:shadow-lg transition transform hover:scale-105">Start Learning</button>
              </div>
              <div className="bg-white/80 dark:bg-white/20 rounded-lg p-4 flex flex-col items-center border border-white/30">
                <span className="font-semibold text-lg text-green-700 dark:text-green-300 mb-2">Become a Volunteer</span>
                <span className="text-gray-600 dark:text-gray-200 mb-2 text-center">Give back and grow with us</span>
                <button className="bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold rounded-xl px-6 py-2 text-base shadow-md hover:shadow-lg transition transform hover:scale-105">Join as Volunteer</button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <span className="text-xl font-semibold text-pink-600 dark:text-pink-400">✨ Your identity is valid. Your future is bright. Your journey starts here.</span>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection; 