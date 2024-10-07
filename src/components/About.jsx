import { motion } from 'framer-motion';
import { FaUserFriends, FaClipboardList, FaHandsHelping } from 'react-icons/fa';

const About = () => (
  <section id="about" className="bg-gradient-to-b from-gray-900 to-black py-20 relative overflow-hidden">
    {/* Decorative Background Elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-700 opacity-20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-500 to-green-700 opacity-20 blur-3xl rounded-full bottom-20 right-20 animate-pulse"></div>
    </div>

    {/* About Us Section */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto text-center text-gray-200 z-10 relative"
    >
      <h2 className="text-5xl font-extrabold mb-6 text-yellow-400 shadow-lg">About Us</h2>
      <p className="text-lg mb-10 max-w-3xl mx-auto text-gray-300">
        GraffixInnovation is a cutting-edge IT company providing services like Web Development, Graphic Design, and Marketing.
      </p>
    </motion.div>

    {/* Mission Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="container mx-auto mt-16 relative z-10"
    >
      <h3 className="text-4xl font-bold mb-4 text-yellow-400 text-center">Our Mission</h3>
      <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
        To empower businesses with innovative technology solutions that drive growth and success.
      </p>
    </motion.div>

    {/* Values Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 relative z-10"
    >
      {/* Value Card 1 */}
      <motion.div
        className="p-6 bg-gray-800 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600"
        whileHover={{ scale: 1.05 }}
      >
        <FaHandsHelping className="text-yellow-400 text-6xl mb-4 animate-bounce" />
        <h4 className="text-2xl font-semibold mb-2 text-gray-100">Customer Focus</h4>
        <p className="text-gray-300">
          We prioritize our clients' needs and strive to deliver exceptional service.
        </p>
      </motion.div>

      {/* Value Card 2 */}
      <motion.div
        className="p-6 bg-gray-800 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-600"
        whileHover={{ scale: 1.05 }}
      >
        <FaUserFriends className="text-yellow-400 text-6xl mb-4 animate-bounce" />
        <h4 className="text-2xl font-semibold mb-2 text-gray-100">Teamwork</h4>
        <p className="text-gray-300">
          Our success is built on collaboration and strong partnerships.
        </p>
      </motion.div>

      {/* Value Card 3 */}
      <motion.div
        className="p-6 bg-gray-800 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-600"
        whileHover={{ scale: 1.05 }}
      >
        <FaClipboardList className="text-yellow-400 text-6xl mb-4 animate-bounce" />
        <h4 className="text-2xl font-semibold mb-2 text-gray-100">Innovation</h4>
        <p className="text-gray-300">
          We embrace change and continuously seek creative solutions to challenges.
        </p>
      </motion.div>
    </motion.div>
  </section>
);

export default About;
