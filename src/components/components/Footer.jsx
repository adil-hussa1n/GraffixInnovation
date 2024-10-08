import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      {/* Company Name and Copyright */}
      <p className="text-center md:text-left text-gray-400 text-sm">
        &copy; 2024 GraffixInnovation. All Rights Reserved.
      </p>

      {/* Social Media Links */}
      <div className="flex space-x-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition duration-300 transform hover:scale-110"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-110"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-600 transition duration-300 transform hover:scale-110"
        >
          <FaLinkedinIn size={20} />
        </a>
      </div>
    </div>

    {/* Decorative Border */}
    <div className="mt-4 border-t border-gray-700 opacity-50"></div>

    {/* Additional Links or Info */}
    <div className="container mx-auto mt-4 text-center text-gray-500 text-xs">
      <p>Designed and Developed by GraffixInnovation</p>
      <p>Follow us for more updates on our latest projects and innovations!</p>
    </div>
  </footer>
);

export default Footer;
