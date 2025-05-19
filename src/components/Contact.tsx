
import React, { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { Mail, Github, Linkedin, Code } from 'lucide-react';

const Contact = () => {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message sent',
        description: 'Thank you! Your message has been received.',
      });
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title hover:animate-glitch">Open Connection</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact details */}
          <div className="cyber-terminal h-full">
            <h3 className="text-xl text-cyber-green mb-6">Contact Details</h3>
            
            <div className="space-y-4 font-roboto-mono">
              {/* Simulate a terminal with typing effect */}
              <div className="flex items-start">
                <span className="text-cyber-green mr-2">&gt;</span>
                <div>
                  <span className="text-cyber-green">Email:</span>
                  <p>akhileshbonde02@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-cyber-green mr-2">&gt;</span>
                <div>
                  <span className="text-cyber-green">Phone:</span>
                  <p>+917385438605</p>
                </div>
              </div>
              
              {/* Social links with icons */}
              <div className="pt-6">
                <h4 className="text-cyber-green mb-4">Connect:</h4>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://linkedin.com/in/akhilesh-bonde" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cyber-button rounded"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                  
                  <a 
                    href="https://github.com/akhileshb-b" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cyber-button rounded"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  
                  <a 
                    href="https://leetcode.com/u/akhilays" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cyber-button rounded"
                  >
                    <Code size={16} />
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="cyber-terminal">
            <h3 className="text-xl text-cyber-green mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="text-sm text-cyber-green mb-1 block">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="cyber-input w-full"
                    placeholder="Enter your name"
                  />
                </div>
                
                {/* Email field */}
                <div>
                  <label htmlFor="email" className="text-sm text-cyber-green mb-1 block">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="cyber-input w-full"
                    placeholder="Enter your email"
                  />
                </div>
                
                {/* Message field */}
                <div>
                  <label htmlFor="message" className="text-sm text-cyber-green mb-1 block">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="cyber-input w-full min-h-[120px]"
                    placeholder="Type your message here..."
                  />
                </div>
                
                {/* Submit button */}
                <div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`cyber-button rounded w-full flex justify-center items-center ${
                      isSubmitting ? 'animate-pulse' : 'hover:animate-glitch'
                    }`}
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Mail size={16} className="mr-2" />
                        Send Signal
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
