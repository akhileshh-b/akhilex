
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Publications', href: '#publications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-cyber py-2' : 'py-4 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-cyber-green text-xl md:text-2xl font-bold hover:text-glow">
          &lt;AkhileshB/&gt;
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-cyber-green hover:text-glow"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-cyber-light-gray hover:text-cyber-green hover:text-glow transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full glass-cyber py-4 md:hidden">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-cyber-light-gray hover:text-cyber-green hover:text-glow transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
