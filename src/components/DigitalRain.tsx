import React, { useState, useEffect } from 'react';

// Matrix-style digital rain characters (including katakana, numbers, and symbols)
const matrixChars = 'アイウエオカキクケ���サシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾃﾘﾇﾈｼ';

const DigitalRain = ({ intensity = 'normal', className = '' }: { intensity?: 'light' | 'normal' | 'heavy', className?: string }) => {
  const [columns, setColumns] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generateColumns = () => {
      // Increased density based on intensity
      const numCols = intensity === 'light' ? 20 : intensity === 'heavy' ? 60 : 40;
      const newColumns = [];

      for (let i = 0; i < numCols; i++) {
        // Random properties for each rain column
        const speed = 1 + Math.random() * 3; // Variable speed between 1-4
        const left = `${Math.random() * 100}%`;
        const fontSize = `${Math.floor(Math.random() * 8) + 10}px`; // 10-18px font
        const animationDelay = `${Math.random() * 8}s`; // Increased max delay for more variety
        const opacity = 0.3 + Math.random() * 0.7; // 0.3-1.0 opacity for better visibility
        const length = Math.floor(Math.random() * 40) + 15; // Longer columns: 15-55 chars
        
        // Generate random characters for this column with better fading
        let chars = [];
        for (let j = 0; j < length; j++) {
          const isHead = j === 0;
          const isTail = j > length - 5;
          // Enhanced opacity calculation - head is brightest, gradual fade through the tail
          const charOpacity = isHead ? 1 : 
                            isTail ? (1 - ((j - (length - 5)) / 5)) * 0.7 : 
                            (1 - (j / length)) * 0.9;
          
          chars.push(
            <span 
              key={j} 
              className={`${isHead ? 'text-white' : ''}`}
              style={{ 
                opacity: charOpacity,
                textShadow: isHead ? '0 0 8px rgba(0, 255, 65, 1)' : '0 0 4px rgba(0, 255, 65, 0.8)'
              }}
            >
              {matrixChars.charAt(Math.floor(Math.random() * matrixChars.length))}
            </span>
          );
        }
        
        // More variety in animation classes based on speed
        let animationClass = 'animate-digital-rain';
        if (speed < 1.5) {
          animationClass = 'animate-digital-rain-slow';
        } else if (speed > 2.5) {
          animationClass = 'animate-digital-rain-fast';
        }

        newColumns.push(
          <div 
            key={i} 
            className={`digital-rain-column ${animationClass}`} 
            style={{ 
              left,
              animationDelay,
              fontSize,
              opacity
            }}
          >
            <div className="flex flex-col items-center">
              {chars}
            </div>
          </div>
        );
      }
      
      return newColumns;
    };

    // Initial generation
    setColumns(generateColumns());
    
    // Continuous, overlapping regeneration with better continuity
    const interval = setInterval(() => {
      setColumns(prev => {
        // Keep 80% of existing columns for smoother continuity (up from 60%)
        const keptColumns = prev.slice(0, Math.floor(prev.length * 0.8));
        // Generate fewer new columns for a more gradual transition
        const newGeneratedColumns = generateColumns().slice(0, Math.floor(prev.length * 0.2));
        return [...keptColumns, ...newGeneratedColumns];
      });
    }, 3000); // Slightly more frequent updates for smoother transitions

    return () => clearInterval(interval);
  }, [intensity]);

  return (
    <div className={`digital-rain-container ${className}`}>
      {columns}
    </div>
  );
};

export default DigitalRain;
