import { motion } from 'framer-motion';
import { FaPaintBrush, FaCode, FaBullhorn } from 'react-icons/fa';

const Service = () => {
  return (
    <section id="services" className="bg-gray-900 py-16">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Service Card 1 */}
          <motion.div
            className="p-6 bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1 }}
          >
            <div className="flex items-center mb-4">
              <FaPaintBrush className="text-purple-400 text-3xl mr-2" />
              <h3 className="text-2xl font-bold text-gray-200">Graphic Design</h3>
            </div>
            <p className="text-gray-300">
              Creative and engaging designs that represent your brand's identity effectively.
            </p>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            className="p-6 bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1 }}
          >
            <div className="flex items-center mb-4">
              <FaCode className="text-purple-400 text-3xl mr-2" />
              <h3 className="text-2xl font-bold text-gray-200">Web Development</h3>
            </div>
            <p className="text-gray-300">
              Building responsive and user-friendly websites that enhance user experience.
            </p>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            className="p-6 bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1 }}
          >
            <div className="flex items-center mb-4">
              <FaBullhorn className="text-purple-400 text-3xl mr-2" />
              <h3 className="text-2xl font-bold text-gray-200">Marketing</h3>
            </div>
            <p className="text-gray-300">
              Comprehensive marketing strategies to effectively reach your target audience.
            </p>
          </motion.div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-gray-200">What Our Clients Say</h3>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Testimonial 1 */}
            <motion.div
              className="p-6 bg-gray-800 shadow-md rounded-lg"
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1 }}
            >
              <p className="text-gray-300 italic">
                "The team at Graffix Innovation transformed our brand identity. Highly recommend!"
              </p>
              <p className="mt-4 font-semibold text-gray-200">- John Doe, CEO of Creative Co.</p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              className="p-6 bg-gray-800 shadow-md rounded-lg"
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1 }}
            >
              <p className="text-gray-300 italic">
                "Our website has never looked better! The web development team was fantastic."
              </p>
              <p className="mt-4 font-semibold text-gray-200">- Jane Smith, Marketing Director at Tech Solutions</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-200">Ready to Get Started?</h3>
          <p className="mb-4 text-gray-300">
            Contact us today for a consultation and let us help you achieve your goals.
          </p>
          <motion.button
            className="bg-purple-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
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
