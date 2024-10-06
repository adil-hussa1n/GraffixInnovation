import { motion } from 'framer-motion';

const Packages = () => (
  <section id="packages" className="bg-gray-900 py-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto text-center text-white"
    >
      <h2 className="text-4xl font-bold mb-8">Our Packages</h2>
      <p className="text-lg mb-10">
        Choose the right package that fits your business needs.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {/* Basic Package */}
      <div className="p-6 bg-gray-800 shadow-lg rounded-lg transition-transform transform hover:scale-105">
        <h3 className="text-2xl font-bold mb-4 text-blue-400">Basic Package</h3>
        <p className="mb-4">Includes basic web development and design services.</p>
        <p className="text-xl font-bold mb-2 text-blue-300">$299</p>
        <ul className="list-disc list-inside mb-4 text-left">
          <li>Responsive Design</li>
          <li>SEO Optimization</li>
          <li>Basic Support</li>
        </ul>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Pro Package */}
      <div className="p-6 bg-gray-800 shadow-lg rounded-lg transition-transform transform hover:scale-105">
        <h3 className="text-2xl font-bold mb-4 text-green-400">Pro Package</h3>
        <p className="mb-4">Includes advanced web development and marketing.</p>
        <p className="text-xl font-bold mb-2 text-green-300">$499</p>
        <ul className="list-disc list-inside mb-4 text-left">
          <li>All Basic Package Features</li>
          <li>Content Management System</li>
          <li>Advanced SEO Techniques</li>
        </ul>
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
          Get Started
        </button>
      </div>

      {/* Premium Package */}
      <div className="p-6 bg-gray-800 shadow-lg rounded-lg transition-transform transform hover:scale-105">
        <h3 className="text-2xl font-bold mb-4 text-purple-400">Premium Package</h3>
        <p className="mb-4">All-inclusive IT solutions for your business.</p>
        <p className="text-xl font-bold mb-2 text-purple-300">$799</p>
        <ul className="list-disc list-inside mb-4 text-left">
          <li>All Pro Package Features</li>
          <li>Custom Solutions</li>
          <li>Priority Support</li>
        </ul>
        <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
          Get Started
        </button>
      </div>
    </motion.div>

    {/* Call to Action Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="container mx-auto text-center mt-16 text-white"
    >
      <h3 className="text-3xl font-bold mb-4">Not Sure Which Package to Choose?</h3>
      <p className="text-lg mb-6">
        Contact us for a personalized consultation to find the perfect fit for your business!
      </p>
      <button className="px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
        Contact Us
      </button>
    </motion.div>
  </section>
);

export default Packages;
