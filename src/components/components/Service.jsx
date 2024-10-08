import { motion } from 'framer-motion';
import { FaPaintBrush, FaCode, FaBullhorn } from 'react-icons/fa';

const Service = () => {
  return (
    <section id="services" className="bg-gradient-to-b from-gray-900 to-black py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-80 h-80 bg-gradient-to-r from-indigo-500 to-purple-700 opacity-25 blur-3xl rounded-full top-10 left-16 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-gradient-to-r from-pink-500 to-red-700 opacity-20 blur-3xl rounded-full bottom-20 right-16 animate-pulse"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Service Card 1 */}
          <motion.div
            className="p-8 bg-gray-800 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600"
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1 }}
          >
            <div className="flex items-center mb-4 animate-pulse">
              <FaPaintBrush className="text-pink-400 text-5xl mr-3" />
              <h3 className="text-3xl font-semibold text-gray-200">Graphic Design</h3>
            </div>
            <p className="text-gray-300">
              Creative and engaging designs that represent your brand's identity effectively.
            </p>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            className="p-8 bg-gray-800 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-600"
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1 }}
          >
            <div className="flex items-center mb-4 animate-pulse">
              <FaCode className="text-blue-400 text-5xl mr-3" />
              <h3 className="text-3xl font-semibold text-gray-200">Web Development</h3>
            </div>
            <p className="text-gray-300">
              Building responsive and user-friendly websites that enhance user experience.
            </p>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            className="p-8 bg-gray-800 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-600"
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1 }}
          >
            <div className="flex items-center mb-4 animate-pulse">
              <FaBullhorn className="text-yellow-400 text-5xl mr-3" />
              <h3 className="text-3xl font-semibold text-gray-200">Marketing</h3>
            </div>
            <p className="text-gray-300">
              Comprehensive marketing strategies to effectively reach your target audience.
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          className="mt-16 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-gray-100">Ready to Get Started?</h3>
          <p className="mb-6 text-gray-300 max-w-xl mx-auto">
            Contact us today for a consultation and let us help you achieve your goals.
          </p>
          <motion.button
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full shadow-lg hover:from-purple-700 hover:to-pink-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
