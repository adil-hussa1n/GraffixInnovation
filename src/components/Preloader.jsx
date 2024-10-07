import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-400 to-blue-600 opacity-50 filter blur-3xl animate-pulse"
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-green-500 opacity-40 filter blur-2xl animate-pulse"
          initial={{ scale: 0 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      {/* Spinner */}
      <div className="flex items-center mb-4">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-transparent border-blue-600"></div>
      </div>

      {/* Welcome Message with CSS Animation */}
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-2 animate-fade-slide">
        Welcome to GraffixInnovation!
      </h1>
    </div>
  );
};

export default Preloader;
