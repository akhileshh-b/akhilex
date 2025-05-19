
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Publications from '@/components/Publications';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Code } from 'lucide-react';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading to show intro animation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-cyber-black flex flex-col justify-center items-center">
        {/* Loading animation */}
        <div className="text-cyber-green text-6xl mb-6 animate-bounce">
          <Code size={64} />
        </div>
        <div className="cyber-terminal max-w-md w-full p-4">
          <div className="font-mono text-sm text-cyber-green">
            <p className="mb-2">&gt; Loading system components...</p>
            <p className="mb-2">&gt; Initializing interface...</p>
            <p className="animate-pulse">&gt; Ready to launch...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-black text-cyber-light-gray">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Publications />
        <Achievements />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
