import React, { useState } from "react";
import "../css files/Home.css";
import Footer from "../components/Footer";
import ParticleBackground from "../components/StarBg";
import MainNavbar from "../components/MainNavbar";

const Home = () => {
  const [userName] = useState("John Doe"); // Dummy user name
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
        <ParticleBackground />
        
        <div className="home-header">
          <div className="welcome-section">
            <h1>Welcome back, {userName}! 👋</h1>
            <p>Ready to continue your learning journey?</p>
          </div>
          
          <div className="stats-overview">
            <div className="stat-card">
              <div className="stat-value">{progress}%</div>
              <div className="stat-label">Overall Progress</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{streak}</div>
              <div className="stat-label">Day Streak</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">4</div>
              <div className="stat-label">Lessons Available</div>
            </div>
          </div>
        </div>

        <div className="home-content">
          <div className="lessons-section">
            <h2>Your Lessons</h2>
            <div className="lessons-grid">
              {dummyLessons.map((lesson) => (
                <div key={lesson.id} className={`lesson-card ${lesson.completed ? 'completed' : 'available'}`}>
                  <div className="lesson-status">
                    {lesson.completed ? '✅' : '📖'}
                  </div>
                  <h3>{lesson.title}</h3>
                  {lesson.completed ? (
                    <div className="lesson-score">Score: {lesson.score}%</div>
                  ) : (
                    <button className="start-lesson-btn">Start Lesson</button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="achievements-section">
            <h2>Your Achievements</h2>
            <div className="achievements-grid">
              {dummyAchievements.map((achievement) => (
                <div key={achievement.id} className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}>
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-title">{achievement.title}</div>
                  {!achievement.unlocked && <div className="locked-overlay">🔒</div>}
                </div>
              ))}
            </div>
          </div>

          <div className="quick-actions">
            <h2>Quick Actions</h2>
            <div className="actions-grid">
              <button className="action-btn primary">Continue Learning</button>
              <button className="action-btn secondary">Take Practice Test</button>
              <button className="action-btn secondary">View Progress Report</button>
              <button className="action-btn secondary">Settings</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;