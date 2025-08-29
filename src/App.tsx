import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ChatDemo from './components/ChatDemo';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <ChatDemo />
      <HowItWorks />
      <About />
      <Footer />
    </div>
  );
}

export default App;