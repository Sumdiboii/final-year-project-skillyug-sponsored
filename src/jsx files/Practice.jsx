import React, { useState } from 'react';
import '../css files/Practice.css';

const Practice = () => {
  const [activeTab, setActiveTab] = useState('quick');

  const quickPracticeOptions = [
    {
      icon: '⚡',
      title: 'Quick Quiz',
      description: '5 random questions from mixed topics',
      questions: 5,
      time: '5 min',
      difficulty: 'Mixed'
    },
    {
      icon: '🎯',
      title: 'Focus Mode',
      description: 'Practice specific weak areas',
      questions: 10,
      time: '10 min',
      difficulty: 'Adaptive'
    },
    {
      icon: '🏃',
      title: 'Speed Round',
      description: 'Answer as many as you can in time',
      questions: '∞',
      time: '3 min',
      difficulty: 'Mixed'
    },
    {
      icon: '🧠',
      title: 'Brain Teaser',
      description: 'Challenging logic puzzles',
      questions: 3,
      time: '15 min',
      difficulty: 'Hard'
    }
  ];

  const mockTests = [
    {
      icon: '📚',
      title: 'NMMS Practice Test 1',
      description: 'Complete mock test covering all NMMS topics',
      questions: 90,
      time: 120,
      difficulty: 'medium',
      subjects: ['Math', 'Science', 'Social Science', 'Mental Ability']
    },
    {
      icon: '🔬',
      title: 'SAT Subject Test - Math',
      description: 'Mathematics Level 2 practice test',
      questions: 50,
      time: 60,
      difficulty: 'hard',
      subjects: ['Algebra', 'Geometry', 'Trigonometry', 'Statistics']
    },
    {
      icon: '📖',
      title: 'NMMS Mental Ability Test',
      description: 'Focus on reasoning and logical thinking',
      questions: 45,
      time: 45,
      difficulty: 'medium',
      subjects: ['Pattern Recognition', 'Logical Reasoning', 'Spatial Ability']
    },
    {
      icon: '🧮',
      title: 'SAT Math Practice',
      description: 'Calculator and no-calculator sections',
      questions: 58,
      time: 80,
      difficulty: 'hard',
      subjects: ['Algebra', 'Problem Solving', 'Advanced Math']
    },
    {
      icon: '🌍',
      title: 'General Knowledge Quiz',
      description: 'Current affairs and general awareness',
      questions: 30,
      time: 30,
      difficulty: 'easy',
      subjects: ['Current Affairs', 'History', 'Geography', 'Science']
    },
    {
      icon: '🔢',
      title: 'Quick Math Challenge',
      description: 'Speed math problems for competitive exams',
      questions: 25,
      time: 20,
      difficulty: 'medium',
      subjects: ['Arithmetic', 'Algebra', 'Geometry']
    }
  ];

  const skillsData = [
    { name: 'Algebra', level: 85, color: '#4CAF50', icon: '📊' },
    { name: 'Geometry', level: 72, color: '#2196F3', icon: '📐' },
    { name: 'Logic', level: 90, color: '#FF9800', icon: '🧩' },
    { name: 'Physics', level: 68, color: '#9C27B0', icon: '⚛️' },
    { name: 'Chemistry', level: 75, color: '#f44336', icon: '🧪' },
    { name: 'Biology', level: 82, color: '#4CAF50', icon: '🧬' },
    { name: 'History', level: 77, color: '#795548', icon: '🏛️' },
    { name: 'Geography', level: 80, color: '#607D8B', icon: '🌍' }
  ];

  const getDifficultyDots = (difficulty) => {
    const levels = { easy: 1, medium: 2, hard: 3 };
    const level = levels[difficulty] || 1;
    
    return Array.from({ length: 3 }, (_, i) => (
      <div 
        key={i} 
        className={`difficulty-dot ${i < level ? `filled ${difficulty}` : ''}`}
      ></div>
    ));
  };

  const startQuickPractice = (practice) => {
    alert(`Starting ${practice.title}! This would navigate to the practice session.`);
  };

  const startTest = (test) => {
    alert(`Starting ${test.title}! This would navigate to the full test.`);
  };

  const previewTest = (test) => {
    alert(`Preview for ${test.title}: This would show sample questions and test format.`);
  };

  const startSkillAssessment = (skill) => {
    alert(`Starting ${skill.name} skill assessment! This would test your current level.`);
  };

  return (
    <div className="practice-page">
      <div className="practice-container">
        {/* Header */}
        <div className="practice-header">
          <h1>🎯 Practice Center</h1>
          <p>Sharpen your skills with quizzes, tests, and assessments</p>
        </div>

        {/* Navigation Tabs */}
        <div className="practice-tabs">
          <button 
            className={`tab-button ${activeTab === 'quick' ? 'active' : ''}`}
            onClick={() => setActiveTab('quick')}
          >
            ⚡ Quick Practice
          </button>
          <button 
            className={`tab-button ${activeTab === 'tests' ? 'active' : ''}`}
            onClick={() => setActiveTab('tests')}
          >
            📝 Mock Tests
          </button>
          <button 
            className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            📊 Skills Assessment
          </button>
        </div>

        <div className="practice-content">
          {/* Quick Practice Tab */}
          {activeTab === 'quick' && (
            <div className="quick-practice-section">
              <h2>⚡ Quick Practice Sessions</h2>
              <div className="quick-practice-grid">
                {quickPracticeOptions.map((practice, index) => (
                  <div key={index} className="quick-practice-card">
                    <div className="practice-icon">{practice.icon}</div>
                    <div className="practice-title">{practice.title}</div>
                    <div className="practice-description">{practice.description}</div>
                    <div className="practice-stats">
                      <div className="stat-item">
                        <div className="stat-value">{practice.questions}</div>
                        <div className="stat-label">Questions</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-value">{practice.time}</div>
                        <div className="stat-label">Duration</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-value">{practice.difficulty}</div>
                        <div className="stat-label">Level</div>
                      </div>
                    </div>
                    <button 
                      className="start-practice-btn"
                      onClick={() => startQuickPractice(practice)}
                    >
                      Start Practice
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mock Tests Tab */}
          {activeTab === 'tests' && (
            <div className="tests-grid">
              {mockTests.map((test, index) => (
                <div key={index} className="test-card">
                  <div className="test-header">
                    <div className="test-type-icon">{test.icon}</div>
                    <div className="test-info">
                      <h3>{test.title}</h3>
                      <p>{test.description}</p>
                    </div>
                  </div>
                  
                  <div className="test-details">
                    <div className="detail-item">
                      <div className="detail-value">{test.questions}</div>
                      <div className="detail-label">Questions</div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-value">{test.time}</div>
                      <div className="detail-label">Minutes</div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-value">{test.subjects.length}</div>
                      <div className="detail-label">Subjects</div>
                    </div>
                  </div>

                  <div className="difficulty-indicator">
                    <span className="difficulty-label">Difficulty:</span>
                    <div className="difficulty-dots">
                      {getDifficultyDots(test.difficulty)}
                    </div>
                  </div>

                  <div className="test-actions">
                    <button 
                      className="action-btn primary-btn"
                      onClick={() => startTest(test)}
                    >
                      Start Test
                    </button>
                    <button 
                      className="action-btn secondary-btn"
                      onClick={() => previewTest(test)}
                    >
                      Preview
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills Assessment Tab */}
          {activeTab === 'skills' && (
            <div className="skills-assessment">
              <h2>📊 Skills Assessment</h2>
              <p style={{ color: '#666', marginBottom: '2rem' }}>
                Test yourself in specific subject areas to identify strengths and areas for improvement
              </p>
              <div className="skills-grid">
                {skillsData.map((skill, index) => (
                  <div 
                    key={index} 
                    className="skill-item"
                    onClick={() => startSkillAssessment(skill)}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-level">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${skill.level}%`,
                          background: skill.color
                        }}
                      ></div>
                    </div>
                    <div className="skill-percentage">{skill.level}% Mastery</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Practice;