
import React from 'react';

const Experience = () => {
  // Experience data
  const experienceData = [
    {
      organization: 'theDevArmy Community',
      role: 'Graphic Designer & Community Manager',
      period: '10/2023 - Present',
      description: 'Grew Discord community from 100 to 1,000+ members, achieving 70% retention through strategic engagement. Developed and led 15+ technical workshops, designed social media campaigns with 50K+ impressions, increasing engagement by 40%.',
      metrics: ['1,000+ members', '70% retention', '50K+ impressions']
    },
    {
      organization: 'Raisina Hacks',
      role: 'Hacker Experience Lead',
      period: '05/2024 - 12/2024',
      description: 'Built and managed a 500+ member Discord community with 60%+ active engagement. Optimized server workflows with automation bots, reducing response time by 40% and enhancing collaboration for hackathon participants.',
      metrics: ['500+ members', '60% engagement', '40% faster response']
    },
    {
      organization: 'GeeksForGeeks RCOEM',
      role: 'Technical Team Member',
      period: '09/2023 - 02/2024',
      description: 'Organized 3+ technical events, attracting 200+ participants and boosting engagement by 40%. Collaborated with a 5-member team to design interactive coding challenges and workshops, enhancing technical learning outcomes.',
      metrics: ['200+ participants', '40% engagement increase']
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title hover:animate-glitch">Mission Logs</h2>

        <div className="relative">
          {/* Timeline connector line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-cyber-green opacity-30 hidden md:block"></div>
          
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div 
                key={exp.organization}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-cyber-green shadow-neon"></div>
                
                {/* Content card */}
                <div className={`cyber-terminal md:w-5/12 ${
                  index % 2 === 0 ? 'md:ml-auto animate-slide-in-left' : 'animate-slide-in-right'
                }`}>
                  {/* Header */}
                  <div className="mb-3 pb-2 border-b border-cyber-green">
                    <h3 className="text-lg font-bold text-cyber-green">{exp.organization}</h3>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-sm font-roboto-mono">{exp.role}</p>
                      <span className="text-xs bg-cyber-green text-cyber-black px-2 py-1 rounded">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="mb-4 text-sm font-roboto-mono">
                    {exp.description}
                  </p>
                  
                  {/* Metrics */}
                  <div>
                    <h4 className="text-xs uppercase text-cyber-green mb-2">Impact</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.metrics.map((metric) => (
                        <span 
                          key={metric}
                          className="text-xs bg-cyber-dark-gray border border-cyber-green px-2 py-1 rounded"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
