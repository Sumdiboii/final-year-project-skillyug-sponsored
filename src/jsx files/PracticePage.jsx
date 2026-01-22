import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css files/PracticePage.css';
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import ParticleBackground from "../components/StarBg";


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
      type: "coding-decoding",
      explanation: "Each letter is shifted by +1 position in the alphabet. C→D, O→P, D→E, I→J, N→O, G→H. Similarly, F→G, L→M, O→P, W→X, E→F, R→S."
    },
    {
      id: 2,
      question: "Find the odd one out: 3, 7, 11, 14, 17",
      options: ["3", "7", "14", "17"],
      correct: 2,
      type: "classification",
      explanation: "All numbers except 14 are prime numbers. 14 is divisible by 2 and 7, making it a composite number."
    },
    {
      id: 3,
      question: "Complete the series: 2, 6, 12, 20, 30, ?",
      options: ["42", "40", "38", "44"],
      correct: 0,
      type: "series",
      explanation: "The pattern is n×(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42."
    },
    {
      id: 4,
      question: "If North becomes South, East becomes West, what does North-East become?",
      options: ["South-West", "North-West", "South-East", "North-East"],
      correct: 0,
      type: "direction",
      explanation: "When directions are inverted, North becomes South and East becomes West. Therefore, North-East becomes South-West."
    },
    {
      id: 5,
      question: "A is B's brother. B is C's father. How is A related to C?",
      options: ["Father", "Uncle", "Brother", "Son"],
      correct: 1,
      type: "blood-relations",
      explanation: "A is B's brother, and B is C's father. This makes A the brother of C's father, which means A is C's uncle."
    },
    // Generate more questions up to 20
    ...Array.from({ length: 15 }, (_, i) => ({
      id: i + 6,
      question: `Sample question ${i + 6} for ${quizData.title}. This would be dynamically generated based on the quiz type and difficulty level.`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: Math.floor(Math.random() * 4),
      type: "general",
      explanation: `This is a sample explanation for question ${i + 6}. In a real application, this would provide detailed reasoning for the correct answer and help students understand the concept better.`
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
    
    // Save practice log to localStorage
    const score = calculateScore();
    const practiceLog = {
      date: new Date().toISOString(),
      topic: quizData.title,
      score: `${score.correct}/${score.total}`,
      correct: score.correct,
      total: score.total,
      percentage: score.percentage,
      timeTaken: formatTime(30 * 60 - timeLeft)
    };
    
    // Get existing logs or initialize empty array
    const existingLogs = JSON.parse(localStorage.getItem('practiceLogs') || '[]');
    // Add new log at the beginning
    existingLogs.unshift(practiceLog);
    // Save back to localStorage
    localStorage.setItem('practiceLogs', JSON.stringify(existingLogs));
    
    setShowResults(true);
  };

  const handleBackToPractice = () => {
    window.scrollTo(0, 0);
    navigate('/practice');
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
        <div className="pp-practice-page-container">
          <div className="pp-quiz-intro">
            <div className="pp-quiz-intro-content">
              <div className="pp-quiz-intro-header">
                <h1>🎯 {quizData.title}</h1>
                <p className="pp-quiz-subtitle">तुमच्या ज्ञानाची चाचणी घ्यायला तयार व्हा!</p>
              </div>

              <div className="pp-quiz-info-cards">
                <div className="pp-info-card">
                  <div className="pp-info-icon">📝</div>
                  <div className="pp-info-details">
                    <span className="pp-info-label">प्रश्न</span>
                    <span className="pp-info-value">{questions.length}</span>
                  </div>
                </div>
                <div className="pp-info-card">
                  <div className="pp-info-icon">⏱️</div>
                  <div className="pp-info-details">
                    <span className="pp-info-label">कालावधी</span>
                    <span className="pp-info-value">{quizData.duration}</span>
                  </div>
                </div>
              </div>

              <div className="pp-quiz-instructions">
                <h3>📋 सूचना</h3>
                <ul>
                  <li>उत्तर द्यायच्या आधी प्रत्येक प्रश्न काळजीपूर्वक वाचा</li>
                  <li>मागील/पुढील बटणाचा वापर करून तुम्ही प्रश्नांदरम्यान फिरू शकता</li>
                  <li>निवडलेली उत्तरे आपोआप जतन होतात</li>
                  <li>वेळ संपण्याआधी तुमची परीक्षा सबमिट करा</li>
                  <li>सबमिट करण्यापूर्वी तुम्ही उत्तरांचे पुनरावलोकन आणि बदल करू शकता</li>
                </ul>
              </div>

              <div className="pp-quiz-actions">
                <button className="pp-start-quiz-btn" onClick={handleStartQuiz}>
                  <span>परीक्षा सुरू करा</span>
                 
                </button>
                <button className="pp-back-btn-pr" onClick={handleBackToPractice}>
                  <span>मागे जा</span>
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
        <ParticleBackground />
        <div className="pp-practice-page-container">
          <div className="pp-results-container">
            <div className="pp-results-card">
              {/* Header */}
              <div className="pp-results-header-compact">
                <div className="pp-completion-badge">
                  <span className="pp-badge-icon">✓</span>
                  <span className="pp-badge-text">Quiz Completed</span>
                </div>
                <h2 className="pp-quiz-title">{quizData.title}</h2>
              </div>

              {/* Main Score Display */}
              <div className="pp-main-score-section">
                <div className="pp-score-card">
                  <div className="pp-score-label">Your Score</div>
                  <div className="pp-score-big" style={{ color: scoreMessage.color }}>
                    {score.correct}/{score.total}
                  </div>
                  <div className="pp-score-percent" style={{ color: scoreMessage.color }}>
                    {score.percentage}%
                  </div>
                  <div className="pp-verdict-badge" style={{ 
                    backgroundColor: scoreMessage.color + '20',
                    borderColor: scoreMessage.color 
                  }}>
                    <span style={{ color: scoreMessage.color }}>{scoreMessage.message}</span>
                  </div>
                </div>

                {/* Time Display */}
                <div className="pp-time-card">
                  <div className="pp-time-icon">⏱️</div>
                  <div className="pp-time-value">{formatTime(30 * 60 - timeLeft)}</div>
                  <div className="pp-time-label">Time Taken</div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="pp-quick-stats">
                <div className="pp-quick-stat pp-stat-correct">
                  <span className="pp-quick-stat-icon">✓</span>
                  <span className="pp-quick-stat-value">{score.correct}</span>
                  <span className="pp-quick-stat-label">Correct</span>
                </div>
                <div className="pp-quick-stat pp-stat-wrong">
                  <span className="pp-quick-stat-icon">✗</span>
                  <span className="pp-quick-stat-value">{score.total - score.correct}</span>
                  <span className="pp-quick-stat-label">Wrong</span>
                </div>
                <div className="pp-quick-stat pp-stat-accuracy">
                  <span className="pp-quick-stat-icon">📊</span>
                  <span className="pp-quick-stat-value">{score.percentage}%</span>
                  <span className="pp-quick-stat-label">Accuracy</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pp-results-actions-compact">
                <button className="pp-btn-retake" onClick={() => window.location.reload()}>
                  <span className="pp-btn-icon">🔄</span>
                  <span>Retake Quiz</span>
                </button>
                <button className="pp-btn-logs" onClick={() => navigate('/practice-logs')}>
                  <span className="pp-btn-icon">📊</span>
                  <span>Practice Logs</span>
                </button>
                <button className="pp-btn-back" onClick={handleBackToPractice}>
                  <span className="pp-btn-icon">←</span>
                  <span>Back to Practice</span>
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
      <div className="pp-practice-page-container">
        <div className="pp-examtest-container">
          {/* Top Header */}
          <div className="pp-examtest-header">
            <div className="pp-header-brand">
              <img src="/assets/PrepMark.png" alt="PrepMark" className="pp-brand-logo" />
            </div>
            <div className="pp-header-title">
              {quizData.title}
            </div>
            <div className="pp-header-timer">
              <div className="pp-timer-box">
                <span className="pp-timer-icon">⏱</span>
                <span className="pp-timer-value">{formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>

          {/* Main Layout */}
          <div className="pp-examtest-main">
            {/* Left Panel - Questions (60vw) */}
            <div className="pp-examtest-left">
              <div className="pp-question-panel">
                {/* Question Header */}
                <div className="pp-question-header-bar">
                  <span className="pp-question-num">Question {currentQuestion + 1} / {questions.length}</span>
                </div>

                {/* Question Display */}
                <div className="pp-question-display">
                  <h3 className="pp-question-text">{questions[currentQuestion].question}</h3>
                </div>

                {/* Options */}
                <div className="pp-options-container">
                  {questions[currentQuestion].options.map((option, index) => (
                    <div
                      key={index}
                      className={`pp-option-card ${answers[currentQuestion] === index ? 'pp-selected' : ''}`}
                      onClick={() => handleAnswerSelect(index)}
                    >
                      <div className="pp-option-radio">
                        <div className="pp-radio-outer">
                          {answers[currentQuestion] === index && <div className="pp-radio-inner"></div>}
                        </div>
                      </div>
                      <div className="pp-option-label">{String.fromCharCode(65 + index)}</div>
                      <div className="pp-option-content">{option}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="pp-question-nav-footer">
                <button
                  className="pp-nav-button pp-prev-btn"
                  onClick={handlePrevQuestion}
                  disabled={currentQuestion === 0}
                >
                  ← Previous
                </button>
                <button
                  className="pp-nav-button pp-next-btn"
                  onClick={handleNextQuestion}
                  disabled={currentQuestion === questions.length - 1}
                >
                  Next →
                </button>
              </div>
            </div>

            {/* Right Panel - Navigation & Stats */}
            <div className="pp-examtest-right">
              {/* Question Grid */}
              <div className="pp-question-grid-panel">
                <div className="pp-grid-header">Question Navigator</div>
                <div className="pp-question-grid">
                  {questions.map((question, index) => {
                    const isAnswered = answers[index] !== undefined;
                    const isCurrent = index === currentQuestion;
                    
                    return (
                      <button
                        key={index}
                        className={`pp-grid-box ${isCurrent ? 'pp-current' : ''} ${isAnswered ? 'pp-answered' : ''}`}
                        onClick={() => {
                          setCurrentQuestion(index);
                          setSelectedAnswer(answers[index] || '');
                        }}
                      >
                        {isAnswered ? '✓' : index + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Explanation Box */}
              <div className="pp-explanation-panel">
                <div className="pp-explanation-header">
                  <span className="pp-explanation-icon">💡</span>
                  <span className="pp-explanation-title">Explanation</span>
                </div>
                <div className="pp-explanation-content">
                  {answers[currentQuestion] !== undefined ? (
                    <>
                      <div className={`pp-answer-status ${answers[currentQuestion] === questions[currentQuestion].correct ? 'pp-correct' : 'pp-incorrect'}`}>
                        {answers[currentQuestion] === questions[currentQuestion].correct ? (
                          <><span className="pp-status-icon">✓</span> Correct Answer!</>
                        ) : (
                          <><span className="pp-status-icon">✗</span> Incorrect. Correct answer: {String.fromCharCode(65 + questions[currentQuestion].correct)}</>
                        )}
                      </div>
                      <div className="pp-explanation-text">
                        {questions[currentQuestion].explanation}
                      </div>
                    </>
                  ) : (
                    <div className="pp-no-answer">
                      <span className="pp-no-answer-icon">📝</span>
                      <span className="pp-no-answer-text">Select an answer to see the explanation</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Stats Panel */}
              <div className="pp-stats-panel">
                <div className="pp-stats-grid">
                  <div className="pp-stat-item pp-answered-stat">
                    <div className="pp-stat-value">{Object.keys(answers).length}</div>
                    <div className="pp-stat-label">Answered</div>
                  </div>
                  <div className="pp-stat-item pp-unattempted-stat">
                    <div className="pp-stat-value">{questions.length - Object.keys(answers).length}</div>
                    <div className="pp-stat-label">Unattempted</div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button className="pp-submit-button" onClick={handleSubmitQuiz}>
                Submit Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PracticePage;