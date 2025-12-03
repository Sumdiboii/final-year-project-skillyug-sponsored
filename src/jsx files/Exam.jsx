import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css files/Exam.css';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/StarBg';

const Exam = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(120 * 60); // 2 hours in seconds
  const [examStarted, setExamStarted] = useState(false);
  const [examCompleted, setExamCompleted] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set());
  const [sectionIndex, setSectionIndex] = useState(0);

  // Get exam data from navigation state or use default
  const examData = location.state?.examData || {
    title: 'MAT Mock Test 2024',
    duration: '120 minutes',
    sections: 5,
    totalQuestions: 100,
    maxMarks: 400
  };

  // Mock exam questions organized by sections
  const examSections = [
    {
      id: 'lang-comp',
      title: 'Language Comprehension',
      duration: 25,
      questions: [
        {
          id: 1,
          question: "Choose the word that is most similar in meaning to 'ELOQUENT':",
          options: ['Fluent', 'Silent', 'Harsh', 'Confused'],
          correct: 0,
          marks: 4
        },
        {
          id: 2,
          question: "Fill in the blank: The speaker's _______ delivery captivated the entire audience.",
          options: ['monotonous', 'articulate', 'hesitant', 'aggressive'],
          correct: 1,
          marks: 4
        },
        {
          id: 3,
          question: "Choose the correctly spelled word:",
          options: ['Accomodation', 'Accommodation', 'Acommodation', 'Acomodation'],
          correct: 1,
          marks: 4
        }
      ]
    },
    {
      id: 'math-skills',
      title: 'Mathematical Skills',
      duration: 30,
      questions: [
        {
          id: 4,
          question: "If 3x + 7 = 22, what is the value of x?",
          options: ['3', '5', '7', '9'],
          correct: 1,
          marks: 4
        },
        {
          id: 5,
          question: "What is 15% of 240?",
          options: ['32', '36', '38', '42'],
          correct: 1,
          marks: 4
        },
        {
          id: 6,
          question: "The ratio of 3:5 is equivalent to:",
          options: ['6:10', '9:12', '12:15', '15:20'],
          correct: 0,
          marks: 4
        }
      ]
    },
    {
      id: 'data-analysis',
      title: 'Data Analysis & Sufficiency',
      duration: 25,
      questions: [
        {
          id: 7,
          question: "A company's profit increased by 20% in the first quarter. If the initial profit was ₹50,000, what is the new profit?",
          options: ['₹55,000', '₹60,000', '₹65,000', '₹70,000'],
          correct: 1,
          marks: 4
        },
        {
          id: 8,
          question: "Based on the data: Sales in Q1: 100 units, Q2: 150 units, Q3: 120 units. What is the average quarterly sales?",
          options: ['120 units', '123.33 units', '125 units', '130 units'],
          correct: 1,
          marks: 4
        }
      ]
    },
    {
      id: 'intelligence',
      title: 'Intelligence & Critical Reasoning',
      duration: 25,
      questions: [
        {
          id: 9,
          question: "If all roses are flowers and some flowers are red, which conclusion is definitely true?",
          options: ['All roses are red', 'Some roses are red', 'No roses are red', 'Cannot be determined'],
          correct: 3,
          marks: 4
        },
        {
          id: 10,
          question: "Complete the series: 2, 6, 12, 20, 30, ?",
          options: ['40', '42', '44', '46'],
          correct: 1,
          marks: 4
        }
      ]
    },
    {
      id: 'indian-global',
      title: 'Indian & Global Environment',
      duration: 15,
      questions: [
        {
          id: 11,
          question: "Which Indian state is known as the 'Silicon Valley of India'?",
          options: ['Maharashtra', 'Karnataka', 'Tamil Nadu', 'Telangana'],
          correct: 1,
          marks: 4
        },
        {
          id: 12,
          question: "The headquarters of the World Health Organization (WHO) is located in:",
          options: ['Geneva', 'New York', 'Paris', 'London'],
          correct: 0,
          marks: 4
        }
      ]
    }
  ];

  const currentSection = examSections[sectionIndex];
  const allQuestions = examSections.flatMap(section => section.questions);
  const currentQuestionData = allQuestions[currentQuestion];

  // Timer effect
  useEffect(() => {
    if (examStarted && timeLeft > 0 && !examCompleted) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setExamCompleted(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [examStarted, timeLeft, examCompleted]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (optionIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionData.id]: optionIndex
    }));
  };

  const handleQuestionNavigation = (questionIndex) => {
    setCurrentQuestion(questionIndex);
  };

  const handleFlagQuestion = () => {
    const questionId = currentQuestionData.id;
    setFlaggedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < allQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleStartExam = () => {
    setShowInstructions(false);
    setExamStarted(true);
  };

  const handleSubmitExam = () => {
    setExamCompleted(true);
    // Calculate results
    const correctAnswers = allQuestions.filter(q => 
      selectedAnswers[q.id] === q.correct
    ).length;
    alert(`Exam submitted! You answered ${correctAnswers} out of ${allQuestions.length} questions correctly.`);
  };

  const getQuestionStatus = (questionIndex) => {
    const question = allQuestions[questionIndex];
    const isAnswered = selectedAnswers[question.id] !== undefined;
    const isFlagged = flaggedQuestions.has(question.id);
    const isCurrent = questionIndex === currentQuestion;
    
    if (isCurrent) return 'current';
    if (isFlagged) return 'flagged';
    if (isAnswered) return 'answered';
    return 'unanswered';
  };

  if (showInstructions) {
    return (
      <div className="exam-page">
        <ParticleBackground />
        <MainNavbar />
        
        <div className="exam-container">
          <div className="glass-card exam-instructions">
            <div className="instructions-header">
              <div className="exam-icon">📝</div>
              <h1 className="exam-title">{examData.title}</h1>
              <p className="exam-subtitle">Mock Test Instructions</p>
            </div>
            
            <div className="exam-info">
              <div className="info-grid">
                <div className="info-item">
                  <div className="info-icon">⏰</div>
                  <div className="info-details">
                    <span className="info-label">Duration</span>
                    <span className="info-value">{examData.duration}</span>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">📊</div>
                  <div className="info-details">
                    <span className="info-label">Questions</span>
                    <span className="info-value">{examData.totalQuestions}</span>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">🎯</div>
                  <div className="info-details">
                    <span className="info-label">Max Marks</span>
                    <span className="info-value">{examData.maxMarks}</span>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">📋</div>
                  <div className="info-details">
                    <span className="info-label">Sections</span>
                    <span className="info-value">{examData.sections}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="instructions-content">
              <h3>General Instructions:</h3>
              <ul className="instructions-list">
                <li>This exam contains 5 sections with a total of 12 demo questions</li>
                <li>Each question carries 4 marks, no negative marking</li>
                <li>Time limit is 2 hours (120 minutes)</li>
                <li>You can navigate between questions using the question palette</li>
                <li>Flag important questions for review</li>
                <li>Ensure stable internet connection throughout the exam</li>
                <li>Do not refresh the browser during the exam</li>
                <li>Submit the exam before time runs out</li>
              </ul>
              
              <h3>Section Details:</h3>
              <div className="sections-grid">
                {examSections.map((section, index) => (
                  <div key={section.id} className="section-card">
                    <h4>{section.title}</h4>
                    <p>{section.questions.length} Questions</p>
                    <span>{section.duration} minutes</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="exam-actions">
              <button 
                onClick={() => navigate('/practice')} 
                className="back-btn"
              >
                Back to Practice
              </button>
              <button 
                onClick={handleStartExam} 
                className="start-exam-btn"
              >
                Start Exam
              </button>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  if (examCompleted) {
    const correctAnswers = allQuestions.filter(q => 
      selectedAnswers[q.id] === q.correct
    ).length;
    const totalQuestions = allQuestions.length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    return (
      <div className="exam-page">
        <ParticleBackground />
        <MainNavbar />
        
        <div className="exam-container">
          <div className="glass-card exam-results">
            <div className="results-header">
              <div className="success-icon">🎉</div>
              <h1>Exam Completed!</h1>
              <p>Your performance summary</p>
            </div>
            
            <div className="results-stats">
              <div className="stat-card">
                <div className="stat-icon">✅</div>
                <div className="stat-info">
                  <span className="stat-value">{correctAnswers}</span>
                  <span className="stat-label">Correct</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">❌</div>
                <div className="stat-info">
                  <span className="stat-value">{totalQuestions - correctAnswers}</span>
                  <span className="stat-label">Incorrect</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📊</div>
                <div className="stat-info">
                  <span className="stat-value">{percentage}%</span>
                  <span className="stat-label">Score</span>
                </div>
              </div>
            </div>
            
            <div className="results-actions">
              <button 
                onClick={() => navigate('/practice')} 
                className="practice-btn"
              >
                More Practice
              </button>
              <button 
                onClick={() => navigate('/home')} 
                className="home-btn"
              >
                Dashboard
              </button>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="exam-page">
      <ParticleBackground />
      <MainNavbar />
      
      <div className="exam-interface">
        {/* Header with timer and exam info */}
        <div className="exam-header">
          <div className="exam-info-bar">
            <div className="exam-title-section">
              <h2>{examData.title}</h2>
              <span className="section-name">{currentSection.title}</span>
            </div>
            <div className="timer-section">
              <div className="timer">
                <span className="timer-icon">⏰</span>
                <span className="timer-value">{formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="exam-content">
          {/* Question Panel */}
          <div className="question-panel">
            <div className="glass-card question-card">
              <div className="question-header">
                <div className="question-number">
                  Question {currentQuestion + 1} of {allQuestions.length}
                </div>
                <div className="question-actions">
                  <button 
                    onClick={handleFlagQuestion}
                    className={`flag-btn ${flaggedQuestions.has(currentQuestionData.id) ? 'flagged' : ''}`}
                  >
                    🚩 {flaggedQuestions.has(currentQuestionData.id) ? 'Flagged' : 'Flag'}
                  </button>
                </div>
              </div>
              
              <div className="question-content">
                <h3 className="question-text">{currentQuestionData.question}</h3>
                
                <div className="options-container">
                  {currentQuestionData.options.map((option, index) => (
                    <div 
                      key={index} 
                      className={`option ${
                        selectedAnswers[currentQuestionData.id] === index ? 'selected' : ''
                      }`}
                      onClick={() => handleAnswerSelect(index)}
                    >
                      <div className="option-marker">{String.fromCharCode(65 + index)}</div>
                      <span className="option-text">{option}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="question-navigation">
                <button 
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                  className="nav-btn prev-btn"
                >
                  ← Previous
                </button>
                
                <div className="question-info">
                  <span>Marks: {currentQuestionData.marks}</span>
                </div>
                
                <button 
                  onClick={handleNextQuestion}
                  disabled={currentQuestion === allQuestions.length - 1}
                  className="nav-btn next-btn"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
          
          {/* Question Palette */}
          <div className="question-palette">
            <div className="glass-card palette-card">
              <div className="palette-header">
                <h3>Questions</h3>
                <button 
                  onClick={handleSubmitExam}
                  className="submit-exam-btn"
                >
                  Submit Exam
                </button>
              </div>
              
              <div className="palette-legend">
                <div className="legend-item">
                  <div className="legend-indicator answered"></div>
                  <span>Answered</span>
                </div>
                <div className="legend-item">
                  <div className="legend-indicator flagged"></div>
                  <span>Flagged</span>
                </div>
                <div className="legend-item">
                  <div className="legend-indicator current"></div>
                  <span>Current</span>
                </div>
                <div className="legend-item">
                  <div className="legend-indicator unanswered"></div>
                  <span>Not Answered</span>
                </div>
              </div>
              
              <div className="palette-grid">
                {allQuestions.map((question, index) => (
                  <button
                    key={question.id}
                    onClick={() => handleQuestionNavigation(index)}
                    className={`palette-btn ${getQuestionStatus(index)}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              
              <div className="exam-summary">
                <div className="summary-stat">
                  <span>Answered: {Object.keys(selectedAnswers).length}</span>
                </div>
                <div className="summary-stat">
                  <span>Flagged: {flaggedQuestions.size}</span>
                </div>
                <div className="summary-stat">
                  <span>Remaining: {allQuestions.length - Object.keys(selectedAnswers).length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Exam;