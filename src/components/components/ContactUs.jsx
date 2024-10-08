import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
      });
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-gray-900 to-black py-16 relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl rounded-full top-10 left-16 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-pink-500 to-yellow-500 opacity-20 blur-3xl rounded-full bottom-20 right-16 animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between bg-gray-800 shadow-xl rounded-lg overflow-hidden p-8 mt-24 relative z-10">
        {/* Contact Information Cards */}
        <div className="flex-1 mb-8 md:mb-0 md:mr-8 grid grid-cols-1 gap-4">
          {/* Phone Card */}
          <div className="flex items-center bg-gradient-to-r from-purple-700 to-purple-800 p-4 rounded-lg shadow-md">
            <FaPhone className="text-white text-3xl mr-4" />
            <div>
              <h3 className="text-white text-lg font-bold">Phone</h3>
              <p className="text-gray-300">+1 234 567 890</p>
            </div>
          </div>
          
          {/* Email Card */}
          <div className="flex items-center bg-gradient-to-r from-blue-700 to-blue-800 p-4 rounded-lg shadow-md">
            <FaEnvelope className="text-white text-3xl mr-4" />
            <div>
              <h3 className="text-white text-lg font-bold">Email</h3>
              <p className="text-gray-300">info@graffixinnovation.com</p>
            </div>
          </div>
          
          {/* Address Card */}
          <div className="flex items-center bg-gradient-to-r from-green-700 to-green-800 p-4 rounded-lg shadow-md">
            <FaMapMarkerAlt className="text-white text-3xl mr-4" />
            <div>
              <h3 className="text-white text-lg font-bold">Address</h3>
              <p className="text-gray-300">1234 Innovation Street, Tech City</p>
            </div>
          </div>
        </div>

{/* Contact Form */}
<div className="flex-1 bg-gradient-to-bl from-gray-800 to-gray-900 p-8 sm:p-12 lg:p-16 rounded-lg shadow-lg w-full max-w-lg lg:max-w-3xl mx-auto lg:mx-0">
  <h2 className="text-3xl lg:text-4xl text-blue-400 font-extrabold text-center lg:text-left mb-6">Contact Us</h2>
  <form onSubmit={sendEmail} className="space-y-6 lg:space-y-8">
    {/* Name Input */}
    <div className="relative">
      <FaUser className="absolute left-3 top-3 text-gray-400" />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full bg-gray-900 text-white rounded-md py-3 pl-10 pr-4 text-sm border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>

    {/* Email Input */}
    <div className="relative">
      <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full bg-gray-900 text-white rounded-md py-3 pl-10 pr-4 text-sm border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>

    {/* Phone Input */}
    <div className="relative">
      <FaPhone className="absolute left-3 top-3 text-gray-400" />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone No."
        className="w-full bg-gray-900 text-white rounded-md py-3 pl-10 pr-4 text-sm border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Message Input */}
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Message"
      rows="5"
      className="w-full bg-gray-900 text-white rounded-md px-4 py-3 text-sm border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    ></textarea>

    <button
      type="submit"
      className="text-white w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 rounded-full text-lg px-6 py-3 transition-all duration-300 flex items-center justify-center space-x-2"
    >
      <FaPaperPlane className="text-white" />
      <span>Send Message</span>
    </button>
  </form>
</div>

      </div>
    </section>
  );
};

export default ContactUs;
