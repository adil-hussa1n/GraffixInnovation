import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-800 via-purple-950 to-blue-900 pt-24 flex items-center justify-center"
    >
      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen text-white text-center z-10 relative"
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 animate-text shadow-2xl"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Welcome to <span className="text-yellow-400">Graffix Innovation</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl text-gray-300 z-20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Empowering your business with innovative IT solutions crafted for excellence.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.button
          className="bg-yellow-500 text-indigo-900 px-12 py-4 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-500 transform hover:scale-110 font-semibold relative overflow-hidden z-20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <span className="absolute inset-0 bg-yellow-500 opacity-20 rounded-full animate-ping"></span>
          Get Started
        </motion.button>

        {/* Background Animated Elements */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-yellow-500 to-pink-500 opacity-30 blur-3xl animate-pulse"
            initial={{ scale: 0 }}
            animate={{ scale: 1.5 }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          />
          <motion.div
            className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-purple-500 to-indigo-700 opacity-20 blur-3xl animate-pulse"
            initial={{ scale: 0 }}
            animate={{ scale: 1.8 }}
            transition={{ duration: 2.5, delay: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          />
        </div>

        {/* Subtle Particle Background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 4 + 3}s`,
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
