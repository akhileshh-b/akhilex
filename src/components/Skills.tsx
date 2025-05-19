
import React from 'react';

const Skills = () => {
  // Skills grouped by category
  const skillsData = [
    {
      category: 'Programming Languages',
      skills: ['C', 'C++ (OOPS, DSA)', 'Python', 'Java']
    },
    {
      category: 'ML/DL Frameworks',
      skills: ['PyTorch', 'TensorFlow', 'ResNet18', 'Scikit-learn']
    },
    {
      category: 'Web Development',
      skills: ['FastAPI', 'Flask', 'React.js', 'Node.js', 'REST APIs']
    },
    {
      category: 'Tools',
      skills: ['Git', 'Docker', 'MongoDB', 'SQLite', 'OpenCV']
    }
  ];

  // Generate random animation delay for staggered animation
  const getRandomDelay = (index: number) => {
    return {
      animationDelay: `${index * 0.1}s`
    };
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title hover:animate-glitch">System Specs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, categoryIndex) => (
            <div 
              key={category.category}
              className="cyber-terminal h-full animate-fade-in"
              style={getRandomDelay(categoryIndex)}
            >
              <h3 className="text-xl text-cyber-green mb-3 border-b border-cyber-green pb-2">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill} 
                    className="skill-node flex items-center"
                    style={getRandomDelay(skillIndex + categoryIndex + 1)}
                  >
                    {/* Hexagonal marker */}
                    <div className="inline-flex mr-3">
                      <div className="h-3 w-3 bg-cyber-green rotate-45 transform"></div>
                    </div>
                    
                    <span className="font-roboto-mono">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
