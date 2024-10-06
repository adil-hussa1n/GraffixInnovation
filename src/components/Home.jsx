import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div id='home' className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center relative overflow-hidden"
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Welcome Text */}
        <motion.h1
          className="text-6xl font-extrabold mb-4"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Welcome to <span className="text-yellow-300">Graffix Innovation!</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg mb-8 max-w-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          We deliver exceptional IT solutions to enhance your business with creativity and innovation.
        </motion.p>

        {/* Animated Button */}
        <motion.button
          className="bg-white text-purple-600 px-8 py-3 rounded-full shadow-lg hover:bg-purple-100 transition duration-300"
          whileHover={{ scale: 1.1, backgroundColor: '#e5e7eb' }}
          whileTap={{ scale: 0.9 }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Get Started
        </motion.button>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-64 h-64 rounded-full bg-yellow-300 opacity-20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.div
            className="w-96 h-96 rounded-full bg-purple-300 opacity-20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
