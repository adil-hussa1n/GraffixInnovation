import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Packages from './components/Packages';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Preloader from './components/Preloader'; // Import the Preloader component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (you can adjust the time)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Show preloader for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />; // Show the preloader while loading
  }

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Service />
      <Packages />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
