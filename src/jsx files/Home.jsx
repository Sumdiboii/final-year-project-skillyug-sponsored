import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css files/Home.css";
import MainNavbar from "../components/MainNavbar";
import ParticleBackground from "../components/StarBg";
import Chatbot from "../components/Chatbot";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  
  // User data
  const [userName] = useState("Sumedh");
  const [streak, setStreak] = useState(12);
  const [xpLevel, setXpLevel] = useState(5);
  const [xpProgress, setXpProgress] = useState(65); // percentage of current level
  const [totalXP, setTotalXP] = useState(() => {
    const saved = localStorage.getItem('totalXP');
    return saved ? parseInt(saved) : 0;
  });
  
  // Quest progress (daily goal)
  const [questProgress, setQuestProgress] = useState(65); // percentage
  const [questTarget] = useState("Complete 5 activities today");
  const [questCompleted, setQuestCompleted] = useState(3);
  const [questTotal] = useState(5);
  
  // Daily Quiz
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [hasCompletedDailyQuiz, setHasCompletedDailyQuiz] = useState(false);
  
  const dailyQuizQuestions = [
    {
      id: 1,
      question: "What is the capital of Maharashtra?",
      options: ["Mumbai", "Pune", "Nagpur", "Nashik"],
      correctAnswer: 0
    },
    {
      id: 2,
      question: "What is 15 × 8?",
      options: ["120", "130", "110", "140"],
      correctAnswer: 0
    },
    {
      id: 3,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "What is the square root of 144?",
      options: ["10", "11", "12", "13"],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      correctAnswer: 1
    }
  ];
  
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showQuizResult, setShowQuizResult] = useState(false);

  // Load daily quiz status from localStorage
  useEffect(() => {
    const today = new Date().toDateString();
    const lastCompleted = localStorage.getItem('dailyQuizDate');
    const streakData = localStorage.getItem('userStreak');
    
    if (lastCompleted === today) {
      setHasCompletedDailyQuiz(true);
    }
    
    if (streakData) {
      setStreak(parseInt(streakData));
    }
  }, []);

  const handleOpenQuiz = () => {
    setShowQuizModal(true);
    setQuizAnswers({});
    setQuizSubmitted(false);
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  };

  const handleQuizAnswerSelect = (questionId, optionIndex) => {
    if (quizSubmitted) return;
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleQuizSubmit = () => {
    let correctCount = 0;
    dailyQuizQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    
    setQuizSubmitted(true);
    
    // Award 5 XP for completing daily quiz
    const newTotalXP = totalXP + 5;
    setTotalXP(newTotalXP);
    localStorage.setItem('totalXP', newTotalXP);
    
    // Update streak if score is good
    if (correctCount >= 3) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem('userStreak', newStreak.toString());
    }
    
    // Mark quiz as completed for today
    const today = new Date().toDateString();
    localStorage.setItem('dailyQuizDate', today);
    setHasCompletedDailyQuiz(true);
  };

  const handleCloseQuizModal = () => {
    setShowQuizModal(false);
    document.body.style.overflow = 'unset';
    document.documentElement.style.overflow = 'unset';
  };

  return (
    <>
      <MainNavbar />
      <div className="home-page">
        <ParticleBackground />
        
        <div className="home-container">
          
          {/* Welcome Message */}
          <div className="welcome-section">
            <h1 className="welcome-title">
              Welcome <span className="username-highlight">{userName}!</span>
            </h1>
            
            <div className="home-buttons">
              <button className="home-btn daily-quiz-btn" onClick={handleOpenQuiz}>
                <img src="/assets/dailyquizpic.png" alt="Daily Quiz" className="daily-quiz-full" />
              </button>
              <button className="home-btn daily-streak-btn">
                <div className="streak-top">
                  <span>Daily Quiz Streak</span>
                </div>
                <div className="streak-bottom">
                  <span className="streak-count">{streak}</span>
                  <span className="streak-label">Days</span>
                </div>
              </button>
              <button className="home-btn quest-btn" onClick={() => navigate('/quest')}>
                <img src="/assets/map.png" alt="Map" className="quest-map-full" />
              </button>
            </div>
            
            <div className="home-buttons-bottom">
              <button className="home-btn fourth-btn">
                <div className="xp-level-star">
                  <span className="xp-level-number">{xpLevel}</span>
                </div>
                <div className="xp-bar-container">
                  <div className="xp-bar-fill" style={{ width: `${xpProgress}%` }}></div>
                </div>
              </button>
            </div>
          </div>

         

        </div>
        
        <Chatbot />
        
        {/* Daily Quiz Modal */}
        {showQuizModal && (
          <div className="quiz-modal-overlay" onClick={handleCloseQuizModal}>
            <div className="quiz-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="quiz-modal-close" onClick={handleCloseQuizModal}>&times;</button>
              {!quizSubmitted ? (
                <>
                  <h2 className="quiz-modal-title">Daily Quiz Challenge</h2>
                  <div className="quiz-questions-container">
                    {dailyQuizQuestions.map((q, index) => (
                      <div key={q.id} className="quiz-question-block">
                        <p className="quiz-question-text">
                          <span className="quiz-q-number">{index + 1}.</span> {q.question}
                        </p>
                        <div className="quiz-options-grid">
                          {q.options.map((option, optIndex) => (
                            <button
                              key={optIndex}
                              className={`quiz-option ${quizAnswers[q.id] === optIndex ? 'selected' : ''}`}
                              onClick={() => handleQuizAnswerSelect(q.id, optIndex)}
                            >
                              <span className="quiz-option-label">{String.fromCharCode(65 + optIndex)}</span>
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button 
                    className="quiz-submit-btn" 
                    onClick={handleQuizSubmit}
                    disabled={Object.keys(quizAnswers).length < dailyQuizQuestions.length}
                  >
                    Submit Quiz
                  </button>
                </>
              ) : (
                <>
                  <h2 className="quiz-modal-title">Quiz Results</h2>
                  <div className="quiz-results-container">
                    <div className="quiz-score-display">
                      <div className="quiz-score-circle">
                        <span className="quiz-score-number">
                          {dailyQuizQuestions.filter(q => quizAnswers[q.id] === q.correctAnswer).length}
                        </span>
                        <span className="quiz-score-total">/ {dailyQuizQuestions.length}</span>
                      </div>
                      <p className="quiz-score-label">
                        {dailyQuizQuestions.filter(q => quizAnswers[q.id] === q.correctAnswer).length >= 3 
                          ? '🎉 Great Job!' 
                          : '💪 Keep Practicing!'}
                      </p>
                    </div>
                    {dailyQuizQuestions.map((q, index) => (
                      <div key={q.id} className="quiz-result-item">
                        <span className="quiz-result-q">Q{index + 1}</span>
                        <span className={`quiz-result-status ${quizAnswers[q.id] === q.correctAnswer ? 'correct' : 'wrong'}`}>
                          {quizAnswers[q.id] === q.correctAnswer ? '✓' : '✗'}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button className="quiz-close-btn" onClick={handleCloseQuizModal}>
                    Close
                  </button>
                </>
              )}
            </div>
          </div>
        )}
        
      </div>
      <Footer />
    </>
  );
};

export default Home;