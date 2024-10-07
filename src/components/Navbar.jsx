import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons for mobile menu
import logo from '../components/bg.png'; // Adjust the path to your logo image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 fixed w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with link to home */}
        <div className="flex items-center">
          <a href="#home" className="flex items-center">
            <img
              src={logo}
              alt="GraffixInnovation Logo"
              className="h-10 w-auto mr-3" 
            />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-300 hover:text-white transition duration-300">About</a>
          <a href="#services" className="text-gray-300 hover:text-white transition duration-300">Services</a>
          <a href="#packages" className="text-gray-300 hover:text-white transition duration-300">Packages</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition duration-300">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none transition duration-300"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 shadow-md absolute w-full left-0 top-16 py-4">
          <a
            href="#about"
            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition duration-300"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#services"
            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition duration-300"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="#packages"
            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition duration-300"
            onClick={toggleMenu}
          >
            Packages
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition duration-300"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
