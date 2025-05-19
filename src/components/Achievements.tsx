
import React from 'react';

const Achievements = () => {
  // Achievement data
  const achievements = [
    {
      title: "1st Place, Technorollix-2024",
      description: "Won 1st place among 50+ teams at O.P Jindal University's Technorollix-2024.",
      icon: "🏆"
    },
    {
      title: "Published Research",
      description: "Published research in Advances in Nonlinear Variational Inequalities (e-ISSN: 1092-910X).",
      icon: "📚"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title hover:animate-glitch">System Upgrades</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className="cyber-terminal relative overflow-hidden hover:shadow-neon-strong transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Hexagonal badge shape in background */}
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-cyber-green/10 rotate-45 transform"></div>
              
              {/* Icon in top right */}
              <div className="absolute right-4 top-4 text-3xl">
                {achievement.icon}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-cyber-green mb-4">{achievement.title}</h3>
                <p className="text-sm font-roboto-mono">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
