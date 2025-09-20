import React, { useState } from "react";
import "../css files/Learning.css";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import ParticleBackground from "../components/StarBg";

const Learning = () => {
  const [selectedSubject, setSelectedSubject] = useState("math");
  const [currentLesson, setCurrentLesson] = useState(null);

  const subjects = {
    math: {
      name: "Mathematics",
      icon: "🧮",
      lessons: [
        { id: 1, title: "Basic Arithmetic", completed: true, progress: 100, duration: "15 min" },
        { id: 2, title: "Algebra Fundamentals", completed: true, progress: 100, duration: "20 min" },
        { id: 3, title: "Geometry Basics", completed: false, progress: 60, duration: "25 min" },
        { id: 4, title: "Fractions & Decimals", completed: false, progress: 0, duration: "18 min" },
      ]
    },
    science: {
      name: "Science",
      icon: "🔬",
      lessons: [
        { id: 1, title: "States of Matter", completed: true, progress: 100, duration: "22 min" },
        { id: 2, title: "Solar System", completed: false, progress: 40, duration: "30 min" },
        { id: 3, title: "Human Body Systems", completed: false, progress: 0, duration: "28 min" },
        { id: 4, title: "Chemical Reactions", completed: false, progress: 0, duration: "25 min" },
      ]
    },
    logic: {
      name: "Logic & Reasoning",
      icon: "🧠",
      lessons: [
        { id: 1, title: "Pattern Recognition", completed: true, progress: 100, duration: "12 min" },
        { id: 2, title: "Logical Sequences", completed: false, progress: 80, duration: "15 min" },
        { id: 3, title: "Critical Thinking", completed: false, progress: 20, duration: "20 min" },
        { id: 4, title: "Problem Solving", completed: false, progress: 0, duration: "18 min" },
      ]
    }
  };

  const handleStartLesson = (lesson) => {
    setCurrentLesson(lesson);
    // Mock lesson start logic
    alert(`Starting lesson: ${lesson.title}`);
  };

  return (
    <>
      <MainNavbar />
      <div className="learning-page">
        <ParticleBackground />
        
        <div className="learning-header">
          <h1>Learning Center 📚</h1>
          <p>Continue your educational journey with interactive lessons</p>
        </div>

        <div className="learning-content">
          <div className="subject-selector">
            <h2>Choose Your Subject</h2>
            <div className="subject-tabs">
              {Object.entries(subjects).map(([key, subject]) => (
                <button
                  key={key}
                  className={`subject-tab ${selectedSubject === key ? 'active' : ''}`}
                  onClick={() => setSelectedSubject(key)}
                >
                  <span className="subject-icon">{subject.icon}</span>
                  <span className="subject-name">{subject.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lessons-container">
            <div className="lessons-header">
              <h3>{subjects[selectedSubject].name} Lessons</h3>
              <div className="progress-summary">
                <span>
                  {subjects[selectedSubject].lessons.filter(l => l.completed).length} of {subjects[selectedSubject].lessons.length} completed
                </span>
              </div>
            </div>

            <div className="lessons-grid">
              {subjects[selectedSubject].lessons.map((lesson) => (
                <div key={lesson.id} className={`lesson-card ${lesson.completed ? 'completed' : lesson.progress > 0 ? 'in-progress' : 'not-started'}`}>
                  <div className="lesson-status">
                    {lesson.completed ? '✅' : lesson.progress > 0 ? '⏳' : '🔒'}
                  </div>
                  
                  <div className="lesson-info">
                    <h4>{lesson.title}</h4>
                    <div className="lesson-meta">
                      <span className="duration">⏱️ {lesson.duration}</span>
                      <span className="difficulty">📊 Beginner</span>
                    </div>
                  </div>

                  <div className="lesson-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${lesson.progress}%` }}
                      ></div>
                    </div>
                    <span className="progress-text">{lesson.progress}%</span>
                  </div>

                  <div className="lesson-actions">
                    {lesson.completed ? (
                      <button className="review-btn">Review</button>
                    ) : lesson.progress > 0 ? (
                      <button className="continue-btn" onClick={() => handleStartLesson(lesson)}>
                        Continue
                      </button>
                    ) : (
                      <button className="start-btn" onClick={() => handleStartLesson(lesson)}>
                        Start
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="learning-stats">
            <div className="stat-item">
              <div className="stat-icon">🎯</div>
              <div className="stat-info">
                <div className="stat-value">12</div>
                <div className="stat-label">Lessons Completed</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">⏰</div>
              <div className="stat-info">
                <div className="stat-value">4.5h</div>
                <div className="stat-label">Time Spent Learning</div>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🔥</div>
              <div className="stat-info">
                <div className="stat-value">7</div>
                <div className="stat-label">Day Streak</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Learning;
