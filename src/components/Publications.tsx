
import React from 'react';

const Publications = () => {
  return (
    <section id="publications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title hover:animate-glitch">Research Archives</h2>
        
        <div className="cyber-terminal max-w-3xl mx-auto animate-fade-in">
          {/* Publication header */}
          <div className="mb-4 pb-2 border-b border-cyber-green">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-cyber-green">
                Multimodal Deep Learning Framework for Intelligent Video Querying
              </h3>
              <span className="text-xs bg-cyber-green text-cyber-black px-2 py-1 rounded">
                2025
              </span>
            </div>
            <p className="text-sm mt-2 text-cyber-green">
              Advances in Nonlinear Variational Inequalities
            </p>
          </div>
          
          {/* Publication details */}
          <div className="space-y-3 font-roboto-mono text-sm">
            <p>
              <span className="text-cyber-green">e-ISSN:</span> 1092-910X
            </p>
            <p>
              <span className="text-cyber-green">DOI:</span> 10.52783/anvi.v28.3500
            </p>
            <p className="py-2">
              Developed an end-to-end framework integrating ResNet18, Whisper, and computer vision 
              algorithms for intelligent video querying, peer-reviewed and published in a reputed journal.
            </p>
            
            {/* Publication CTA */}
            <div className="mt-6">
              <a 
                href="#" 
                className="cyber-button rounded inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Read Paper
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
