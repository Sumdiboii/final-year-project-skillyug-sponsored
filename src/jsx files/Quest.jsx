import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import '../css files/Quest.css';

const Quest = () => {
  const navigate = useNavigate();
  
  // Generate 75 checkpoints spread across the map
  const generateCheckpoints = () => {
    const checkpoints = [];
    const names = ["Math", "Science", "History", "English", "Logic", "Physics", "Chemistry", "Biology", "Geography", "Literature"];
    const locations = ["Mountain", "Valley", "Hill", "Bay", "Lake", "Forest", "River", "Peak", "Cave", "Island"];
    
    for (let i = 0; i < 75; i++) {
      // Distribute vertically across the map
      const yPos = (i / 75) * 95 + 2.5; // 2.5% to 97.5%
      
      // Winding path pattern
      let xPos;
      if (i % 4 === 0) xPos = 20 + Math.random() * 8;
      else if (i % 4 === 1) xPos = 45 + Math.random() * 8;
      else if (i % 4 === 2) xPos = 70 + Math.random() * 8;
      else xPos = 35 + Math.random() * 8;
      
      const name = `${names[i % names.length]} ${locations[Math.floor(i / 10) % locations.length]}`;
      
      checkpoints.push({
        id: i + 1,
        name: name,
        x: xPos,
        y: yPos,
        completed: false,
        xp: 20,
        locked: i !== 0
      });
    }
    return checkpoints;
  };
  
  const [checkpoints, setCheckpoints] = useState(generateCheckpoints());
  const [selectedCheckpoint, setSelectedCheckpoint] = useState(null);
  
  const [totalXP, setTotalXP] = useState(() => {
    const saved = localStorage.getItem('totalXP');
    return saved ? parseInt(saved) : 0;
  });

  const handleCheckpointClick = (checkpoint) => {
    if (!checkpoint.locked) {
      setSelectedCheckpoint(checkpoint);
    }
  };

  const handleCompleteCheckpoint = () => {
    if (selectedCheckpoint) {
      const updatedCheckpoints = checkpoints.map((cp, index) => {
        if (cp.id === selectedCheckpoint.id) {
          const newTotalXP = totalXP + selectedCheckpoint.xp;
          setTotalXP(newTotalXP);
          localStorage.setItem('totalXP', newTotalXP);
          
          if (index < checkpoints.length - 1) {
            checkpoints[index + 1].locked = false;
          }
          
          return { ...cp, completed: true, locked: false };
        }
        return cp;
      });
      
      setCheckpoints(updatedCheckpoints);
      setSelectedCheckpoint(null);
    }
  };

  const handleCloseModal = () => {
    setSelectedCheckpoint(null);
  };

  return (
    <>
      <MainNavbar />
      <div className="quest-container">
        <div className="quest-header">
          <h1 className="quest-title">Quest Map</h1>
          
        </div>

        <div className="quest-map">
          <img src="/assets/xpbar.png" alt="Quest Path 1" className="quest-map-segment" />
          <img src="/assets/xpbar.png" alt="Quest Path 2" className="quest-map-segment" />
          <img src="/assets/xpbar.png" alt="Quest Path 3" className="quest-map-segment" />
          <img src="/assets/xpbar.png" alt="Quest Path 4" className="quest-map-segment" />
          <img src="/assets/xpbar.png" alt="Quest Path 5" className="quest-map-segment" />
           <img src="/assets/xpbar.png" alt="Quest Path 6" className="quest-map-segment" />
            <img src="/assets/xpbar.png" alt="Quest Path 7" className="quest-map-segment" />
             <img src="/assets/xpbar.png" alt="Quest Path 8" className="quest-map-segment" />
             <img src="/assets/xpbar.png" alt="Quest Path 9" className="quest-map-segment" />
             <img src="/assets/xpbar.png" alt="Quest Path 10" className="quest-map-segment" />
             <img src="/assets/xpbar.png" alt="Quest Path 11" className="quest-map-segment" />
             <img src="/assets/xpbar.png" alt="Quest Path 12" className="quest-map-segment" />
             <img src="/assets/xpbar.png" alt="Quest Path 13" className="quest-map-segment" />
             <img src="/assets/xpbar.png" alt="Quest Path 14" className="quest-map-segment" />
             <img src="/assets/xpbar.png" alt="Quest Path 15" className="quest-map-segment" />

          {/* Dotted lines connecting checkpoints */}
          <svg className="quest-path-svg">
            {checkpoints.map((cp, index) => {
              if (index < checkpoints.length - 1) {
                const nextCp = checkpoints[index + 1];
                return (
                  <line
                    key={`line-${cp.id}`}
                    x1={`${cp.x}%`}
                    y1={`${cp.y}%`}
                    x2={`${nextCp.x}%`}
                    y2={`${nextCp.y}%`}
                    className={cp.completed ? "quest-path-completed" : "quest-path-locked"}
                  />
                );
              }
              return null;
            })}
          </svg>

          {/* Checkpoints */}
          {checkpoints.map((checkpoint) => (
            <div
              key={checkpoint.id}
              className={`quest-checkpoint ${checkpoint.completed ? 'completed' : ''} ${checkpoint.locked ? 'locked' : ''}`}
              style={{ left: `${checkpoint.x}%`, top: `${checkpoint.y}%` }}
              onClick={() => handleCheckpointClick(checkpoint)}
            >
              <div className="checkpoint-marker">
                {checkpoint.completed ? '✓' : checkpoint.locked ? '🔒' : checkpoint.id}
              </div>
              <span className="checkpoint-name">{checkpoint.name}</span>
            </div>
          ))}
        </div>

        {/* Checkpoint Modal */}
        {selectedCheckpoint && (
          <div className="quest-modal-overlay" onClick={handleCloseModal}>
            <div className="quest-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="quest-modal-close" onClick={handleCloseModal}>&times;</button>
              <h2 className="quest-modal-title">{selectedCheckpoint.name}</h2>
              <div className="quest-modal-body">
                <div className="quest-challenge-info">
                  <p className="quest-challenge-description">
                    Complete this challenge to earn <strong>{selectedCheckpoint.xp} XP</strong>!
                  </p>
                  <div className="quest-challenge-tasks">
                    <h3>Tasks:</h3>
                    <ul>
                      <li>Answer 5 questions correctly</li>
                      <li>Complete within 10 minutes</li>
                      <li>Achieve 80% accuracy or higher</li>
                    </ul>
                  </div>
                </div>
                <div className="quest-modal-actions">
                  <button className="quest-btn-start" onClick={handleCompleteCheckpoint}>
                    Complete Challenge
                  </button>
                  <button className="quest-btn-cancel" onClick={handleCloseModal}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Quest;
