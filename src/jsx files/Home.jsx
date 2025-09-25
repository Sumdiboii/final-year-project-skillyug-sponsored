import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css files/Home.css";
import Footer from "../components/Footer";
import ParticleBackground from "../components/StarBg";
import MainNavbar from "../components/MainNavbar";
import Chatbot from "../components/Chatbot";

const Home = () => {
  const navigate = useNavigate();
  const [userName] = useState("Sumedh"); // Dummy user name
  const [progress] = useState(75); // Dummy progress percentage
  const [streak] = useState(12); // Dummy streak count

  const dummyLessons = [
    { id: 1, title: "Mental Math Basics", completed: true, score: 85 },
    { id: 2, title: "Pattern Recognition", completed: true, score: 92 },
    { id: 3, title: "Logical Reasoning", completed: false, score: null },
    { id: 4, title: "Memory Training", completed: false, score: null },
  ];

  const dummyAchievements = [
    { id: 1, title: "First Login", icon: "🎉", unlocked: true },
    { id: 2, title: "Week Streak", icon: "🔥", unlocked: true },
    { id: 3, title: "Math Master", icon: "🧮", unlocked: true },
    { id: 4, title: "Speed Demon", icon: "⚡", unlocked: false },
  ];

  return (
    <>
      <MainNavbar />
      <div className="home-page">
        
        {/* Section 1 - Welcome Dashboard */}
        <div className="home-section-1">
          {/* Stars Background */}
          <div className="stars-container">
            {Array.from({ length: 60 }).map((_, i) => {
              // More scattered distribution with edge bias
              let randomX;
              if (Math.random() < 0.6) { // 60% chance for edge placement
                // Place on left or right edge with wider spread
                if (Math.random() < 0.5) {
                  randomX = Math.random() * 30; // Left edge: 0% to 30%
                } else {
                  randomX = 70 + Math.random() * 30; // Right edge: 70% to 100%
                }
              } else {
                // 40% chance for full width random placement
                randomX = Math.random() * 100; // Complete random: 0% to 100%
              }
              
              const randomY = Math.random() * 100; // Full vertical spread: 0% to 100%
              
              return (
                <div
                  key={i}
                  className="floating-star"
                  style={{
                    left: `${randomX}%`,
                    top: `${randomY}%`,
                    animationDelay: `${Math.random() * 15}s`,
                    animationDuration: `${2.5 + Math.random() * 7}s`,
                    fontSize: `${0.6 + Math.random() * 1}rem`, // Vary size between 0.6rem - 1.6rem
                    opacity: `${0.3 + Math.random() * 0.4}` // Vary opacity between 0.3 - 0.7
                  }}
                >
                  ✦
                </div>
              );
            })}
          </div>
          
          <div className="welcome-dashboard">
            
            {/* Welcome Header */}
            <div className="welcome-header">
              {/* PrepMark Logo */}
              <div className="logo-containerrr">
                <img src="/assets/PrepMark.png" alt="PrepMark" className="prepmark-logooo" />
              </div>
              
              <h1 className="welcome-title">
                Welcome back, <span className="username-highlight">{userName}</span>! 👋
              </h1>
              <p className="welcome-subtitle">Ready to continue your NMMS journey?</p>
              
              {/* Date and Time */}
              <div className="datetime-display">
                <div className="date-info">
                  <span className="date-icon">📅</span>
                  <span className="date-text">
                    {new Date().toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="time-info">
                  <span className="time-icon">�</span>
                  <span className="time-text">
                    {new Date().toLocaleTimeString('en-US', { 
                      hour: '2-digit', 
                      minute: '2-digit',
                      hour12: true 
                    })}
                  </span>
                </div>
              </div>
            </div>

            {/* Login Streak Card */}
            <div className="streak-showcase">
              <div className="streak-card">
                <div className="streak-icon">🔥</div>
                <div className="streak-content">
                  <div className="streak-number">{streak}</div>
                  <div className="streak-label">Day Streak</div>
                  <div className="streak-visual">
                    {Array.from({ length: 7 }).map((_, index) => (
                      <div key={index} className={`streak-dot ${index < streak % 7 ? 'active' : ''}`}>
                        {index < streak % 7 ? '🔥' : '⚪'}
                      </div>
                    ))}
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Quick Access Buttons */}
            <div className="quick-access-section">
              <h2 className="quick-access-title">Quick Access</h2>
              <div className="quick-access-grid">
                <button className="access-btn primary" onClick={() => navigate('/settings')}>
                  <div className="btn-icon">📚</div>
                  <div className="btn-content">
                    <span className="btn-title">Start Learning</span>
                    <span className="btn-subtitle">Continue your lessons</span>
                  </div>
                </button>
                
                <button className="access-btn secondary" onClick={() => navigate('/settings')}>
                  <div className="btn-icon">📝</div>
                  <div className="btn-content">
                    <span className="btn-title">Practice Test</span>
                    <span className="btn-subtitle">Test your knowledge</span>
                  </div>
                </button>
                
                <button className="access-btn secondary" onClick={() => navigate('/settings')}>
                  <div className="btn-icon">📊</div>
                  <div className="btn-content">
                    <span className="btn-title">View Stats</span>
                    <span className="btn-subtitle">Track your progress</span>
                  </div>
                </button>
                
                <button className="access-btn secondary" onClick={() => navigate('/settings')}>
                  <div className="btn-icon">🎯</div>
                  <div className="btn-content">
                    <span className="btn-title">Weak Areas</span>
                    <span className="btn-subtitle">Focus practice</span>
                  </div>
                </button>
                
                <button className="access-btn secondary" onClick={() => navigate('/settings')}>
                  <div className="btn-icon">🏆</div>
                  <div className="btn-content">
                    <span className="btn-title">Achievements</span>
                    <span className="btn-subtitle">View badges</span>
                  </div>
                </button>
                
                <button className="access-btn secondary" onClick={() => navigate('/settings')}>
                  <div className="btn-icon">🎓</div>
                  <div className="btn-content">
                    <span className="btn-title">Study Plan</span>
                    <span className="btn-subtitle">Custom schedule</span>
                  </div>
                </button>
              </div>
            </div>

          </div>
        </div>

        
          
        

      </div>
      <Footer />
      
      {/* Floating Chatbot */}
      <Chatbot />
    </>
  );
};

export default Home;