import React from 'react';
import logo from '../components/bg.png'; // Adjust the path to your logo image

const Navbar = () => (
  <nav className="bg-gray-800 p-4 fixed w-full z-10 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo with link to home */}
      <div className="flex items-center">
        <a href="#home" className="flex items-center">
          <img
            src={logo} // Use your logo path here
            alt="GraffixInnovation Logo"
            className="h-8 w-auto mr-3" // Adjust height as necessary
          />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-4">
        <a href="#about" className="text-gray-300 hover:text-white">About</a>
        <a href="#services" className="text-gray-300 hover:text-white">Services</a>
        <a href="#packages" className="text-gray-300 hover:text-white">Packages</a>
        <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-white focus:outline-none">
          {/* Add an icon for mobile menu here if desired */}
          &#9776; {/* Simple hamburger icon */}
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
