
import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-cyber-green/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Navigation links */}
        <div className="flex flex-wrap justify-center mb-6 gap-x-6 gap-y-3">
          <a href="#home" className="text-white hover:text-cyber-green hover:text-glow text-sm">
            Home
          </a>
          <a href="#about" className="text-white hover:text-cyber-green hover:text-glow text-sm">
            About
          </a>
          <a href="#skills" className="text-white hover:text-cyber-green hover:text-glow text-sm">
            Skills
          </a>
          <a href="#projects" className="text-white hover:text-cyber-green hover:text-glow text-sm">
            Projects
          </a>
          <a href="#experience" className="text-white hover:text-cyber-green hover:text-glow text-sm">
            Experience
          </a>
          <a href="#publications" className="text-white hover:text-cyber-green hover:text-glow text-sm">
            Publications
          </a>
          <a href="#achievements" className="text-white hover:text-cyber-green hover:text-glow text-sm">
            Achievements
          </a>
          <a href="#contact" className="text-white hover:text-cyber-green hover:text-glow text-sm">
            Contact
          </a>
        </div>
        
        {/* Social links */}
        <div className="flex justify-center mb-6 gap-4">
          <a 
            href="https://linkedin.com/in/akhilesh-bonde" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-cyber-green hover:shadow-neon transition-all p-2 rounded-full"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://github.com/akhileshb-b" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-cyber-green hover:shadow-neon transition-all p-2 rounded-full"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://leetcode.com/u/akhilays" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-cyber-green hover:shadow-neon transition-all p-2 rounded-full"
          >
            <Code size={20} />
          </a>
        </div>
        
        {/* Copyright text */}
        <div className="text-center text-sm text-white/60">
          <p>Designed & Coded by Akhilesh Bonde | © {currentYear}</p>
        </div>
      </div>
      
      {/* Matrix-style binary footer decoration */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-8 opacity-20">
        <div className="whitespace-nowrap font-mono text-xs text-cyber-green animate-marquee">
          {Array(100).fill('01').join(' ')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
