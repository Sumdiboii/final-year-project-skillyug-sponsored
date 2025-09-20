import React, { useEffect, useState } from 'react';
import './QuizFireworks.css';

const QuizFireworks = () => {
  const [fireworks, setFireworks] = useState([]);

  const colors = [
    '#00d4aa', '#00cec9', '#feca57', '#ff6b6b', '#54a0ff', 
    '#5f27cd', '#ff9f43', '#10ac84', '#f368e0', '#45b7d1'
  ];

  const createCelebrationBurst = () => {
    // Create 5 fireworks simultaneously for celebration - more coverage
    const positions = ['15%', '35%', '50%', '65%', '85%'];
    
    positions.forEach((position, index) => {
      setTimeout(() => {
        const id = Date.now() + Math.random() + index;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const burstHeight = 20 + Math.random() * 50; // 20-70% from top - much taller range
        const particles = 18 + Math.random() * 12; // 18-30 particles - more particles
        
        const newFirework = {
          id,
          position,
          color,
          burstHeight,
          particles,
          stage: 'launch'
        };

        setFireworks(prev => [...prev, newFirework]);

        // Burst stage
        setTimeout(() => {
          setFireworks(prev => 
            prev.map(fw => 
              fw.id === id ? { ...fw, stage: 'burst' } : fw
            )
          );
        }, 800);

        // Remove firework - longer duration
        setTimeout(() => {
          setFireworks(prev => prev.filter(fw => fw.id !== id));
        }, 4500);
      }, index * 100); // Faster staggering
    });
  };

  const createExtraFireworks = () => {
    // Additional random fireworks for fuller effect
    const extraPositions = ['10%', '30%', '70%', '90%'];
    
    extraPositions.forEach((position, index) => {
      setTimeout(() => {
        const id = Date.now() + Math.random() + index + 1000;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const burstHeight = 15 + Math.random() * 60; // 15-75% from top
        const particles = 12 + Math.random() * 10; // 12-22 particles
        
        const newFirework = {
          id,
          position,
          color,
          burstHeight,
          particles,
          stage: 'launch'
        };

        setFireworks(prev => [...prev, newFirework]);

        setTimeout(() => {
          setFireworks(prev => 
            prev.map(fw => 
              fw.id === id ? { ...fw, stage: 'burst' } : fw
            )
          );
        }, 700);

        setTimeout(() => {
          setFireworks(prev => prev.filter(fw => fw.id !== id));
        }, 4000);
      }, index * 200 + 500); // Delayed start
    });
  };

  useEffect(() => {
    // Start celebration immediately
    createCelebrationBurst();
    
    // Create extra fireworks
    createExtraFireworks();
    
    // Create second wave after 1.2 seconds
    const secondBurst = setTimeout(() => {
      createCelebrationBurst();
    }, 1200);

    // Create third wave after 2.5 seconds
    const thirdBurst = setTimeout(() => {
      createExtraFireworks();
    }, 2500);

    // Final burst after 3.5 seconds
    const finalBurst = setTimeout(() => {
      createCelebrationBurst();
    }, 3500);

    return () => {
      clearTimeout(secondBurst);
      clearTimeout(thirdBurst);
      clearTimeout(finalBurst);
    };
  }, []);

  return (
    <div className="quiz-fireworks-container">
      {fireworks.map(firework => (
        <div key={firework.id} className="quiz-firework" style={{ left: firework.position }}>
          {firework.stage === 'launch' && (
            <div 
              className="quiz-rocket"
              style={{ 
                '--rocket-color': firework.color,
                '--burst-height': `${firework.burstHeight}%`
              }}
            >
              <div className="quiz-rocket-trail"></div>
            </div>
          )}
          
          {firework.stage === 'burst' && (
            <div 
              className="quiz-burst"
              style={{ 
                bottom: `${100 - firework.burstHeight}%`,
                '--burst-color': firework.color
              }}
            >
              {Array.from({ length: firework.particles }).map((_, i) => (
                <div
                  key={i}
                  className="quiz-particle"
                  style={{
                    '--angle': `${(360 / firework.particles) * i}deg`,
                    '--delay': `${Math.random() * 0.1}s`,
                    '--distance': `${50 + Math.random() * 30}px`,
                    '--particle-color': firework.color
                  }}
                ></div>
              ))}
              
              {/* Golden sparkles for extra celebration */}
              {Array.from({ length: Math.floor(firework.particles / 3) }).map((_, i) => (
                <div
                  key={`gold-${i}`}
                  className="quiz-particle gold-sparkle"
                  style={{
                    '--angle': `${(360 / Math.floor(firework.particles / 3)) * i + 45}deg`,
                    '--delay': `${0.05 + Math.random() * 0.1}s`,
                    '--distance': `${40 + Math.random() * 20}px`,
                    '--particle-color': '#ffd700'
                  }}
                ></div>
              ))}
            </div>
          )}
        </div>
      ))}
      
      {/* Success message sparkles - more coverage */}
      <div className="success-sparkles">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="success-sparkle"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 4}s`,
              '--sparkle-color': colors[Math.floor(Math.random() * colors.length)]
            }}
          ></div>
        ))}
      </div>
      
      {/* Additional floating sparkles for full screen effect */}
      <div className="floating-sparkles">
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className="floating-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              '--sparkle-color': colors[Math.floor(Math.random() * colors.length)]
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default QuizFireworks;