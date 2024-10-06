import { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../components/contactAnimation.json'; 
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

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
    <section id="contact" className="bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between bg-gray-800 shadow-lg rounded-lg overflow-hidden p-8 mt-24">
        {/* Lottie Animation */}
        <div className="flex-1 mb-8 md:mb-0 md:mr-8">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-gray-700 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl text-blue-300 font-bold text-center mb-6">Contact Us</h2>
          <form onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full bg-gray-900 text-white rounded-md py-3 px-4 text-sm border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full bg-gray-900 text-white rounded-md py-3 px-4 text-sm border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone No."
              className="w-full bg-gray-900 text-white rounded-md py-3 px-4 text-sm border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="5"
              className="w-full bg-gray-900 text-white rounded-md px-4 text-sm border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>

            <button
              type="submit"
              className="text-white w-full bg-blue-500 hover:bg-blue-600 rounded-md text-lg px-6 py-3 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
