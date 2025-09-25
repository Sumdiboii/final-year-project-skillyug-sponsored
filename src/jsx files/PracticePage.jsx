import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css files/PracticePage.css';
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import ParticleBackground from '../components/StarBg';

const PracticePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get quiz data from navigation state
  const quizData = location.state?.quizData || {
    title: 'Practice Quiz',
    questions: 25,
    duration: '30 min',
    difficulty: 'Medium'
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample questions - In real app, this would come from API based on quiz type
  const questions = [
    {
      id: 1,
      question: "If CODING is written as DPEJOH, how is FLOWER written?",
      options: ["GMPXFS", "GMPXFR", "GMPWFS", "HMPXFS"],
      correct: 0,
      type: "coding-decoding"
    },
    {
      id: 2,
      question: "Find the odd one out: 3, 7, 11, 14, 17",
      options: ["3", "7", "14", "17"],
      correct: 2,
      type: "classification"
    },
    {
      id: 3,
      question: "Complete the series: 2, 6, 12, 20, 30, ?",
      options: ["42", "40", "38", "44"],
      correct: 0,
      type: "series"
    },
    {
      id: 4,
      question: "If North becomes South, East becomes West, what does North-East become?",
      options: ["South-West", "North-West", "South-East", "North-East"],
      correct: 0,
      type: "direction"
    },
    {
      id: 5,
      question: "A is B's brother. B is C's father. How is A related to C?",
      options: ["Father", "Uncle", "Brother", "Son"],
      correct: 1,
      type: "blood-relations"
    },
    // Generate more questions up to 25
    ...Array.from({ length: 20 }, (_, i) => ({
      id: i + 6,
      question: `Sample question ${i + 6} for ${quizData.title}. This would be dynamically generated based on the quiz type and difficulty level.`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: Math.floor(Math.random() * 4),
      type: "general"
    }))
  ];

  // Timer effect
  useEffect(() => {
    let timer;
    if (quizStarted && !quizCompleted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleSubmitQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [quizStarted, quizCompleted, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: answerIndex
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(answers[currentQuestion + 1] || '');
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || '');
    }
  };

  const handleSubmitQuiz = () => {
    setQuizCompleted(true);
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correct) {
        correct++;
      }
    });
    return { correct, total: questions.length, percentage: Math.round((correct / questions.length) * 100) };
  };

  const getScoreMessage = (percentage) => {
    if (percentage >= 90) return { message: "Excellent! Outstanding performance! 🏆", color: "#10b981" };
    if (percentage >= 80) return { message: "Great job! Very good score! 🎉", color: "#059669" };
    if (percentage >= 70) return { message: "Good work! Keep it up! 👍", color: "#0891b2" };
    if (percentage >= 60) return { message: "Not bad! Room for improvement. 📚", color: "#0284c7" };
    return { message: "Keep practicing! You'll get better! 💪", color: "#dc2626" };
  };

  if (!quizStarted) {
    return (
      <>
        <MainNavbar />
        <div className="practice-page-container">
          <div className="quiz-intro">
            <ParticleBackground />
            <div className="quiz-intro-content">
              <div className="quiz-intro-header">
                <h1>🎯 {quizData.title}</h1>
                <p className="quiz-subtitle">Get ready to test your knowledge!</p>
              </div>

              <div className="quiz-info-cards">
                <div className="info-card">
                  <div className="info-icon">📝</div>
                  <div className="info-details">
                    <span className="info-label">Questions</span>
                    <span className="info-value">{questions.length}</span>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon">⏱️</div>
                  <div className="info-details">
                    <span className="info-label">Duration</span>
                    <span className="info-value">{quizData.duration}</span>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon">📊</div>
                  <div className="info-details">
                    <span className="info-label">Difficulty</span>
                    <span className="info-value">{quizData.difficulty}</span>
                  </div>
                </div>
              </div>

              <div className="quiz-instructions">
                <h3>📋 Instructions</h3>
                <ul>
                  <li>Read each question carefully before answering</li>
                  <li>You can navigate between questions using Previous/Next buttons</li>
                  <li>Selected answers are automatically saved</li>
                  <li>Submit your quiz before time runs out</li>
                  <li>You can review and change answers before submitting</li>
                </ul>
              </div>

              <div className="quiz-actions">
                <button className="start-quiz-btn" onClick={handleStartQuiz}>
                  <span>Start Quiz</span>
                  <span className="btn-icon">🚀</span>
                </button>
                <button className="back-btn-pr" onClick={() => navigate('/practice')}>
                  <span>← Back to Practice</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const scoreMessage = getScoreMessage(score.percentage);

    return (
      <>
        <MainNavbar />
        <div className="practice-page-container">
          <div className="quiz-results">
            <div className="results-content">
              <div className="results-header">
                <h1>🎉 Quiz Completed!</h1>
                <p>Here's how you performed on {quizData.title}</p>
              </div>

              <div className="score-display">
                <div className="score-circle">
                  <div className="score-percentage" style={{ color: scoreMessage.color }}>
                    {score.percentage}%
                  </div>
                  <div className="score-fraction">
                    {score.correct}/{score.total}
                  </div>
                </div>
                <div className="score-message" style={{ color: scoreMessage.color }}>
                  {scoreMessage.message}
                </div>
              </div>

              <div className="results-stats">
                <div className="stat-item correct">
                  <div className="stat-icon">✅</div>
                  <div className="stat-details">
                    <span className="stat-value">{score.correct}</span>
                    <span className="stat-label">Correct</span>
                  </div>
                </div>
                <div className="stat-item incorrect">
                  <div className="stat-icon">❌</div>
                  <div className="stat-details">
                    <span className="stat-value">{score.total - score.correct}</span>
                    <span className="stat-label">Incorrect</span>
                  </div>
                </div>
                <div className="stat-item time">
                  <div className="stat-icon">⏱️</div>
                  <div className="stat-details">
                    <span className="stat-value">{formatTime(30 * 60 - timeLeft)}</span>
                    <span className="stat-label">Time Taken</span>
                  </div>
                </div>
              </div>

              <div className="results-actions">
                <button className="action-btn primary" onClick={() => navigate('/practice')}>
                  <span>Back to Practice</span>
                </button>
                <button className="action-btn secondary" onClick={() => window.location.reload()}>
                  <span>Retake Quiz</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <MainNavbar />
      <div className="practice-page-container">
        <div className="quiz-interface">
          {/* Quiz Header */}
          <div className="quiz-header">
            <div className="quiz-progress">
              <div className="progress-info">
                <span className="question-counter">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="timer">
                <span className="timer-icon">⏰</span>
                <span className="timer-text">{formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>

          {/* Question Content */}
          <div className="question-section">
            <div className="question-card">
              <div className="question-header">
                <span className="question-number">Q{currentQuestion + 1}</span>
                <span className="question-type">{questions[currentQuestion].type}</span>
              </div>
              <h3 className="question-text">{questions[currentQuestion].question}</h3>
              
              <div className="options-list">
                {questions[currentQuestion].options.map((option, index) => (
                  <div 
                    key={index} 
                    className={`option-item ${selectedAnswer === index ? 'selected' : ''}`}
                    onClick={() => handleAnswerSelect(index)}
                  >
                    <div className="option-radio">
                      <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                    </div>
                    <span className="option-text">{option}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="quiz-navigation">
            <div className="nav-buttons">
              <button 
                className="nav-btn prev" 
                onClick={handlePrevQuestion}
                disabled={currentQuestion === 0}
              >
                ← Previous
              </button>
              
              {currentQuestion === questions.length - 1 ? (
                <button className="nav-btn submit" onClick={handleSubmitQuiz}>
                  Submit Quiz 🎯
                </button>
              ) : (
                <button 
                  className="nav-btn next" 
                  onClick={handleNextQuestion}
                >
                  Next →
                </button>
              )}
            </div>

            {/* Question Navigator */}
            <div className="question-navigator">
              <div className="navigator-grid">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    className={`nav-dot ${index === currentQuestion ? 'current' : ''} ${
                      answers[index] !== undefined ? 'answered' : ''
                    }`}
                    onClick={() => {
                      setCurrentQuestion(index);
                      setSelectedAnswer(answers[index] || '');
                    }}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PracticePage;