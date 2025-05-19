
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title hover:animate-glitch">Behind the Code</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Profile Information */}
          <div className="cyber-terminal animate-slide-in-left">
            <p className="mb-6 font-roboto-mono">
              I'm Akhilesh Bonde, a B.Tech student in Computer Science and Engineering (AI/ML) at 
              Shri Ramdeobaba College of Engineering and Management, Nagpur. With a CGPA of 8.38/10, 
              I specialize in building intelligent systems using machine learning, computer vision, 
              and web development. My projects, like a 92% accurate video processing platform and a 
              mental health assessment tool, reflect my drive to solve real-world challenges. 
              Beyond coding, I lead tech communities, design workshops, and publish research in 
              peer-reviewed journals.
            </p>
          </div>
          
          {/* Stats Cards */}
          <div className="space-y-6">
            {/* Education Stat */}
            <div className="cyber-terminal h-full overflow-hidden">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-cyber-green mr-2"></div>
                <span className="text-cyber-green">System.Education</span>
              </div>
              <div className="font-roboto-mono text-sm">
                <p className="typing-effect text-cyber-green">&gt; B.Tech AI/ML, CGPA 8.38/10 (2022–Present)</p>
              </div>
            </div>
            
            {/* Research Stat */}
            <div className="cyber-terminal h-full overflow-hidden">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-cyber-green mr-2"></div>
                <span className="text-cyber-green">System.Research</span>
              </div>
              <div className="font-roboto-mono text-sm">
                <p className="typing-effect text-cyber-green">&gt; Published in Advances in Nonlinear Variational Inequalities (2025)</p>
              </div>
            </div>
            
            {/* Hackathon Stat */}
            <div className="cyber-terminal h-full overflow-hidden">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-cyber-green mr-2"></div>
                <span className="text-cyber-green">System.Achievements</span>
              </div>
              <div className="font-roboto-mono text-sm">
                <p className="typing-effect text-cyber-green">&gt; 1st Place, Technorollix-2024 (O.P Jindal University)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
