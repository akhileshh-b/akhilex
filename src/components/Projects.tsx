import React from 'react';

const Projects = () => {
  // Project data
  const projectsData = [
    {
      title: 'Vidiwise - Video Processing Platform',
      date: '03/2024',
      description: 'Engineered a FastAPI-based video processing platform handling 50 concurrent requests with 99% uptime and ~300ms latency. Integrated PyTorch, ResNet18, and Whisper for a video analysis pipeline, achieving 92% accuracy in content classification. Deployed on scalable cloud infrastructure.',
      technologies: ['FastAPI', 'PyTorch', 'ResNet18', 'Whisper', 'Cloud Hosting'],
      metrics: ['50 concurrent requests', '99% uptime', '92% accuracy'],
      cta: [
        { label: 'View Code', href: 'https://github.com/akhileshh-b/Vidiwise' },
        { label: 'Live Demo', href: 'https://vidiwise.vercel.app' }
      ]
    },
    {
      title: 'Manahstithi - Mental Health Assessment Platform',
      date: '01/2024',
      description: 'Developed an ensemble ML model for mental health assessment, achieving 85% accuracy across 5000+ user interactions. Built a recommendation engine using collaborative filtering, increasing resource engagement by 65%. Deployed with a user-friendly interface.',
      technologies: ['Python', 'Scikit-learn', 'Collaborative Filtering', 'Flask'],
      metrics: ['85% accuracy', '65% engagement increase'],
      cta: [
        { label: 'View Code', href: 'https://github.com/akhileshh-b/Manahstiti-mental-health-assessment-platform/' },
        { label: 'Live Demo', href: 'https://manahstiti.onrender.com' }
      ]
    },
    {
      title: 'Credit Card Fraud Detection System',
      date: '02/2024',
      description: 'Designed an ML pipeline for fraud detection, achieving a 94% ROC-AUC score on 284,000+ transactions with a 0.1% false positive rate. Optimized performance using SMOTE and feature engineering, improving accuracy by 25%. Tested on real-world financial datasets.',
      technologies: ['Python', 'Scikit-learn', 'SMOTE'],
      metrics: ['94% ROC-AUC', '0.1% false positive rate'],
      cta: [
        { label: 'View Code', href: 'https://github.com/akhileshh-b/CreditCardFraudDetection' }
      ]
    }
  ];

  // Generate random animation delay for staggered animation
  const getRandomDelay = (index: number) => {
    return {
      animationDelay: `${index * 0.3}s`
    };
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title hover:animate-glitch">Code Creations</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={project.title}
              className="cyber-terminal animate-slide-in-bottom"
              style={getRandomDelay(index)}
            >
              {/* Project header */}
              <div className="flex justify-between items-start mb-3 pb-2 border-b border-cyber-green">
                <h3 className="text-lg font-bold text-cyber-green">{project.title}</h3>
                <span className="text-xs font-mono bg-cyber-green text-cyber-black px-2 py-1 rounded">
                  {project.date}
                </span>
              </div>
              
              {/* Project description */}
              <p className="mb-4 text-sm font-roboto-mono leading-relaxed">
                {project.description}
              </p>
              
              {/* Project technologies */}
              <div className="mb-4">
                <h4 className="text-xs uppercase text-cyber-green mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs bg-cyber-dark-gray border border-cyber-green px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project metrics */}
              <div className="mb-4">
                <h4 className="text-xs uppercase text-cyber-green mb-2">Metrics</h4>
                <div className="space-y-1">
                  {project.metrics.map((metric) => (
                    <div 
                      key={metric}
                      className="flex items-center"
                    >
                      <div className="h-2 w-2 bg-cyber-green mr-2"></div>
                      <span className="text-xs">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Project CTAs */}
              <div className="flex gap-3 mt-6">
                {project.cta.map((button) => (
                  <a 
                    key={button.label}
                    href={button.href}
                    className="text-xs cyber-button rounded"
                  >
                    {button.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
