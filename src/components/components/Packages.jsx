import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const Packages = () => (
  <section id="packages" className="bg-gradient-to-b from-gray-900 to-black py-20 relative overflow-hidden">
    {/* Decorative Background Elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl rounded-full top-10 left-16 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-gradient-to-r from-green-500 to-blue-500 opacity-20 blur-3xl rounded-full bottom-20 right-16 animate-pulse"></div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto text-center text-white relative z-10"
    >
      <h2 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Our Packages
      </h2>
      <p className="text-lg mb-10 text-gray-300">
        Choose the right package that fits your business needs.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
    >
      {/* Package Card Design */}
      {[
        {
          title: 'Basic Package',
          price: '$299',
          features: ['Responsive Design', 'SEO Optimization', 'Basic Support'],
          bgColor: 'from-blue-600 to-blue-800',
          textColor: 'text-blue-400',
          buttonColor: 'bg-blue-600 hover:bg-blue-700',
        },
        {
          title: 'Pro Package',
          price: '$499',
          features: ['All Basic Package Features', 'Content Management System', 'Advanced SEO Techniques'],
          bgColor: 'from-green-600 to-green-800',
          textColor: 'text-green-400',
          buttonColor: 'bg-green-600 hover:bg-green-700',
        },
        {
          title: 'Premium Package',
          price: '$799',
          features: ['All Pro Package Features', 'Custom Solutions', 'Priority Support'],
          bgColor: 'from-purple-600 to-purple-800',
          textColor: 'text-purple-400',
          buttonColor: 'bg-purple-600 hover:bg-purple-700',
        },
      ].map((pkg, index) => (
        <motion.div
          key={index}
          className={`p-8 bg-gradient-to-r ${pkg.bgColor} shadow-2xl rounded-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl`}
          initial={{ scale: 0.95 }}
          whileHover={{ scale: 1 }}
        >
          <h3 className={`text-3xl font-bold mb-4 ${pkg.textColor}`}>{pkg.title}</h3>
          <p className="text-lg mb-4 text-gray-200">{pkg.title === 'Basic Package' ? 'Ideal for small startups.' : 'For growing businesses.'}</p>
          <p className="text-2xl font-bold mb-4">{pkg.price}</p>
          <ul className="list-none space-y-2 mb-6 text-gray-300">
            {pkg.features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <FaCheckCircle className="text-white mr-2" /> {feature}
              </li>
            ))}
          </ul>
          <button className={`px-6 py-2 rounded-full text-white transition-all duration-300 ${pkg.buttonColor}`}>
            Get Started
          </button>
        </motion.div>
      ))}
    </motion.div>

    {/* Call to Action Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="container mx-auto text-center mt-16 text-white relative z-10"
    >
      <h3 className="text-3xl font-bold mb-4">Not Sure Which Package to Choose?</h3>
      <p className="text-lg mb-6 max-w-lg mx-auto text-gray-300">
        Contact us for a personalized consultation to find the perfect fit for your business!
      </p>
      <button className="px-8 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-all duration-300">
        Contact Us
      </button>
    </motion.div>
  </section>
);

export default Packages;
