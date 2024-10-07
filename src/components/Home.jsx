import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div id='home' className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-950 to-blue-800 pt-20">
      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-center justify-center h-screen text-white text-center relative z-10"
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Welcome Text */}
        <motion.h1
          className="text-7xl font-extrabold mb-4 z-20 shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 animate-text"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Welcome to <span className="text-yellow-400">Graffix Innovation!</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-xl mb-8 max-w-2xl z-20 text-gray-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          We deliver exceptional IT solutions to enhance your business with creativity and innovation.
        </motion.p>

        {/* Animated Button with Ripple Effect */}
        <motion.button
          className="bg-yellow-500 text-indigo-900 px-10 py-4 rounded-full shadow-2xl hover:bg-yellow-400 hover:shadow-lg transition-transform duration-500 z-20 font-semibold relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <span className="absolute inset-0 bg-yellow-500 opacity-20 rounded-full animate-ping"></span>
          Get Started
        </motion.button>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 opacity-30 filter blur-2xl animate-pulse"
            initial={{ scale: 0 }}
            animate={{ scale: 1.5 }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          />
          <motion.div
            className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-purple-500 to-indigo-700 opacity-20 filter blur-3xl animate-pulse"
            initial={{ scale: 0 }}
            animate={{ scale: 1.8 }}
            transition={{ duration: 2.5, delay: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          />
          <motion.div
            className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-10 filter blur-4xl animate-pulse"
            initial={{ scale: 0 }}
            animate={{ scale: 2 }}
            transition={{ duration: 3, delay: 1.1, repeat: Infinity, repeatType: 'reverse' }}
          />
        </div>

        {/* Floating 3D Icons with Animation */}
        <motion.div
          className="absolute top-20 right-24 bg-yellow-500 text-black font-bold rounded-full p-4 shadow-2xl z-20 transform hover:scale-110 transition-transform animate-bounce"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.8 }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute bottom-28 left-28 bg-blue-500 text-white font-bold rounded-full p-4 shadow-2xl z-20 transform hover:scale-110 transition-transform animate-bounce"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
        >
          🚀
        </motion.div>

        {/* Starry Particle Animation for Background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 5 + 3}s`,
              }}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 10, opacity: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;