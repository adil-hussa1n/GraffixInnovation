import { motion } from 'framer-motion';
import { FaUserFriends, FaClipboardList, FaHandsHelping } from 'react-icons/fa';

const About = () => (
  <section id="about" className="bg-gradient-to-b from-gray-900 to-black py-16">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto text-center text-gray-200"
    >
     
      <h2 className="text-5xl font-extrabold mb-4">About Us</h2>
      <p className="text-lg mb-6">
        GraffixInnovation is a cutting-edge IT company providing services like Web Development, Graphic Design, and Marketing.
      </p>
    </motion.div>

    {/* Mission Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="container mx-auto mt-10"
    >
      <h3 className="text-4xl font-bold mb-4 text-gray-100">Our Mission</h3>
      <p className="text-lg mb-8 text-gray-300">
        To empower businesses with innovative technology solutions that drive growth and success.
      </p>
    </motion.div>

    {/* Values Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-10"
    >
      {/* Value Card 1 */}
      <div className="p-6 bg-gray-800 rounded-lg shadow-2xl transform transition hover:scale-105 hover:shadow-lg">
        <FaHandsHelping className="text-yellow-400 text-5xl mb-4" />
        <h4 className="text-2xl font-semibold mb-2 text-gray-100">Customer Focus</h4>
        <p className="text-gray-300">
          We prioritize our clients' needs and strive to deliver exceptional service.
        </p>
      </div>

      {/* Value Card 2 */}
      <div className="p-6 bg-gray-800 rounded-lg shadow-2xl transform transition hover:scale-105 hover:shadow-lg">
        <FaUserFriends className="text-yellow-400 text-5xl mb-4" />
        <h4 className="text-2xl font-semibold mb-2 text-gray-100">Teamwork</h4>
        <p className="text-gray-300">
          Our success is built on collaboration and strong partnerships.
        </p>
      </div>

      {/* Value Card 3 */}
      <div className="p-6 bg-gray-800 rounded-lg shadow-2xl transform transition hover:scale-105 hover:shadow-lg">
        <FaClipboardList className="text-yellow-400 text-5xl mb-4" />
        <h4 className="text-2xl font-semibold mb-2 text-gray-100">Innovation</h4>
        <p className="text-gray-300">
          We embrace change and continuously seek creative solutions to challenges.
        </p>
      </div>
    </motion.div>

    {/* Team Introduction Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="container mx-auto mt-10 text-center"
    >
      <h3 className="text-4xl font-bold mb-4 text-gray-100">Meet Our Team</h3>
      <p className="text-lg mb-8 text-gray-300">
        Our team is composed of experienced professionals dedicated to achieving excellence.
      </p>
    </motion.div>

    {/* Team Members Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-10"
    >
      {/* Team Member 1 */}
      <div className="p-6 bg-gray-800 rounded-lg shadow-2xl transform transition hover:scale-105 hover:shadow-lg">
        <img src="/team-member1.jpg" alt="Team Member 1" className="w-full h-48 object-cover rounded-t-lg" />
        <h4 className="text-2xl font-semibold mt-2 text-gray-100">Alice Johnson</h4>
        <p className="text-gray-300">Graphic Designer</p>
      </div>

      {/* Team Member 2 */}
      <div className="p-6 bg-gray-800 rounded-lg shadow-2xl transform transition hover:scale-105 hover:shadow-lg">
        <img src="/team-member2.jpg" alt="Team Member 2" className="w-full h-48 object-cover rounded-t-lg" />
        <h4 className="text-2xl font-semibold mt-2 text-gray-100">Bob Smith</h4>
        <p className="text-gray-300">Web Developer</p>
      </div>

      {/* Team Member 3 */}
      <div className="p-6 bg-gray-800 rounded-lg shadow-2xl transform transition hover:scale-105 hover:shadow-lg">
        <img src="/team-member3.jpg" alt="Team Member 3" className="w-full h-48 object-cover rounded-t-lg" />
        <h4 className="text-2xl font-semibold mt-2 text-gray-100">Charlie Brown</h4>
        <p className="text-gray-300">Marketing Specialist</p>
      </div>
    </motion.div>
  </section>
);

export default About;
