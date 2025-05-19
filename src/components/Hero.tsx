import React, { useState, useEffect } from 'react';
import DigitalRain from './DigitalRain';

const Hero = () => {
  const [isTypingDone, setIsTypingDone] = useState(false);
  
  useEffect(() => {
    // Simulate typing effect completion after animation time
    const timer = setTimeout(() => {
      setIsTypingDone(true);
    }, 2500); // slightly longer than the typing animation
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Digital Rain Background - increased to heavy intensity */}
      <DigitalRain intensity="heavy" className="opacity-30" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <div className="max-w-3xl mx-auto">
          {/* Matrix-style glitchy tagline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 overflow-hidden whitespace-nowrap animate-typing">
            <span className="text-glow">Akhilesh Bonde</span>
          </h1>
          
          {/* Subheading with fade-in effect */}
          <div className={`transition-opacity duration-1000 ${isTypingDone ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-xl md:text-2xl mb-8 text-white">
              Software developer, ML Engineering Enthusiast
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
              <a 
                href="#projects" 
                className="cyber-button rounded hover:animate-glitch"
              >
                Dive into Projects
              </a>
              <a 
                href="#contact" 
                className="cyber-button rounded hover:animate-glitch"
              >
                Connect with Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator that scrolls with the page */}
      <div 
        className={`absolute left-1/2 -translate-x-1/2 bottom-16 animate-bounce transition-opacity duration-1000 ${isTypingDone ? 'opacity-70 hover:opacity-100' : 'opacity-0'}`}
        style={{ filter: 'drop-shadow(0 0 8px rgba(0, 255, 65, 0.5))' }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-cyber-green flex justify-center cursor-pointer hover:border-3">
          <div className="w-2.5 h-2.5 bg-cyber-green rounded-full mt-2.5 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
