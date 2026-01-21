import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import '../css files/ExamTest.css';

const ExamTest = () => {
  const navigate = useNavigate();
  const { examType } = useParams();
  const location = useLocation();
  const { proctored, duration } = location.state || { proctored: true, duration: 60 };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(duration * 60); // Convert minutes to seconds
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set());
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);

  // Generate questions based on exam type: 90 for MAT/SAT, 180 for NMMS
  const generateQuestions = (type) => {
    const questions = [];
    const questionCount = type === 'full' ? 180 : 90;

    if (type === 'mat') {
      // MAT Questions - Mental Ability Test (90 questions)
      const matTopics = [
        { topic: 'Pattern Recognition', questions: 13 },
        { topic: 'Analogies', questions: 13 },
        { topic: 'Classification', questions: 13 },
        { topic: 'Series Completion', questions: 13 },
        { topic: 'Coding-Decoding', questions: 13 },
        { topic: 'Logical Reasoning', questions: 13 },
        { topic: 'Spatial Reasoning', questions: 12 }
      ];

      let qId = 1;
      matTopics.forEach(({ topic, questions: count }) => {
        for (let i = 0; i < count; i++) {
          questions.push({
            id: qId++,
            topic: topic,
            question: `${topic} - Question ${i + 1}: ${getMatQuestionText(topic, i)}`,
            options: generateOptions(topic),
            correct: Math.floor(Math.random() * 4),
            marks: 1
          });
        }
      });
    } else if (type === 'sat') {
      // SAT Questions - Scholastic Aptitude Test (90 questions)
      const satTopics = [
        { topic: 'Mathematics', questions: 22 },
        { topic: 'Physics', questions: 14 },
        { topic: 'Chemistry', questions: 14 },
        { topic: 'Biology', questions: 13 },
        { topic: 'History', questions: 9 },
        { topic: 'Geography', questions: 9 },
        { topic: 'Civics', questions: 9 }
      ];

      let qId = 1;
      satTopics.forEach(({ topic, questions: count }) => {
        for (let i = 0; i < count; i++) {
          questions.push({
            id: qId++,
            topic: topic,
            question: `${topic} - Question ${i + 1}: ${getSatQuestionText(topic, i)}`,
            options: generateOptions(topic),
            correct: Math.floor(Math.random() * 4),
            marks: 1
          });
        }
      });
    } else if (type === 'full') {
      // NMMS Full Exam - MAT + SAT (180 questions total)
      // First 90 questions: MAT
      const matTopics = [
        { topic: 'Pattern Recognition', questions: 13 },
        { topic: 'Analogies', questions: 13 },
        { topic: 'Classification', questions: 13 },
        { topic: 'Series Completion', questions: 13 },
        { topic: 'Coding-Decoding', questions: 13 },
        { topic: 'Logical Reasoning', questions: 13 },
        { topic: 'Spatial Reasoning', questions: 12 }
      ];

      let qId = 1;
      matTopics.forEach(({ topic, questions: count }) => {
        for (let i = 0; i < count; i++) {
          questions.push({
            id: qId++,
            topic: `MAT - ${topic}`,
            question: `${topic} - Question ${i + 1}: ${getMatQuestionText(topic, i)}`,
            options: generateOptions(topic),
            correct: Math.floor(Math.random() * 4),
            marks: 1
          });
        }
      });

      // Next 90 questions: SAT
      const satTopics = [
        { topic: 'Mathematics', questions: 22 },
        { topic: 'Physics', questions: 14 },
        { topic: 'Chemistry', questions: 14 },
        { topic: 'Biology', questions: 13 },
        { topic: 'History', questions: 9 },
        { topic: 'Geography', questions: 9 },
        { topic: 'Civics', questions: 9 }
      ];

      satTopics.forEach(({ topic, questions: count }) => {
        for (let i = 0; i < count; i++) {
          questions.push({
            id: qId++,
            topic: `SAT - ${topic}`,
            question: `${topic} - Question ${i + 1}: ${getSatQuestionText(topic, i)}`,
            options: generateOptions(topic),
            correct: Math.floor(Math.random() * 4),
            marks: 1
          });
        }
      });
    }

    return questions;
  };

  const getMatQuestionText = (topic, index) => {
    const templates = {
      'Pattern Recognition': [
        'Identify the next element in the pattern: 2, 4, 8, 16, ?',
        'What comes next in the sequence: A, C, E, G, ?',
        'Complete the pattern: ▲, ▼, ▲, ▼, ?'
      ],
      'Analogies': [
        'Book is to Reading as Fork is to ?',
        'Day is to Night as Summer is to ?',
        'Teacher is to Student as Doctor is to ?'
      ],
      'Classification': [
        'Find the odd one out: Apple, Mango, Potato, Banana',
        'Which doesn\'t belong: 2, 4, 6, 9, 8',
        'Identify the different item: Red, Blue, Green, Rectangle'
      ],
      'Series Completion': [
        'Complete the series: 3, 6, 9, 12, ?',
        'What comes next: 1, 4, 9, 16, 25, ?',
        'Find the missing number: 5, 10, 20, 40, ?'
      ],
      'Coding-Decoding': [
        'If CAT is coded as DBU, how is DOG coded?',
        'In a certain code, RAIN is written as SBJO. How is SNOW written?',
        'If BOOK = 2151511, then PAGE = ?'
      ],
      'Logical Reasoning': [
        'All roses are flowers. Some flowers are red. Which is definitely true?',
        'If A > B and B > C, then what is the relation between A and C?',
        'John is taller than Mike. Mike is taller than Sarah. Who is the shortest?'
      ],
      'Spatial Reasoning': [
        'How many faces does a cube have?',
        'If you fold this net, what 3D shape will it form?',
        'What is the mirror image of the letter "b"?'
      ]
    };

    return templates[topic]?.[index % templates[topic].length] || `Solve this ${topic} problem.`;
  };

  const getSatQuestionText = (topic, index) => {
    const templates = {
      'Mathematics': [
        'If 3x + 7 = 22, what is the value of x?',
        'What is 15% of 240?',
        'Solve for y: 2y - 5 = 11'
      ],
      'Physics': [
        'What is the SI unit of force?',
        'The speed of light in vacuum is approximately?',
        'Newton\'s first law is also known as?'
      ],
      'Chemistry': [
        'What is the atomic number of Carbon?',
        'H2O is the chemical formula for?',
        'Which gas is most abundant in Earth\'s atmosphere?'
      ],
      'Biology': [
        'What is the powerhouse of the cell?',
        'Photosynthesis occurs in which part of the plant?',
        'DNA stands for?'
      ],
      'History': [
        'Who was the first Prime Minister of India?',
        'In which year did India gain independence?',
        'The Mughal Empire was founded by?'
      ],
      'Geography': [
        'What is the capital of France?',
        'The longest river in the world is?',
        'Mount Everest is located in which mountain range?'
      ],
      'Civics': [
        'How many fundamental rights are there in the Indian Constitution?',
        'Who is known as the Father of the Indian Constitution?',
        'The President of India is elected by?'
      ]
    };

    return templates[topic]?.[index % templates[topic].length] || `Answer this ${topic} question.`;
  };

  const generateOptions = (topic) => {
    const optionSets = {
      'Pattern Recognition': ['32', '30', '24', '20'],
      'Analogies': ['Eating', 'Cooking', 'Plate', 'Kitchen'],
      'Classification': ['Option A', 'Option B', 'Option C', 'Option D'],
      'Series Completion': ['15', '18', '21', '24'],
      'Coding-Decoding': ['EPH', 'FQI', 'DNG', 'CPG'],
      'Logical Reasoning': ['Cannot be determined', 'All roses are red', 'Some roses are red', 'No roses are red'],
      'Spatial Reasoning': ['6', '8', '4', '12'],
      'Mathematics': ['5', '7', '3', '8'],
      'Physics': ['Newton', 'Joule', 'Watt', 'Pascal'],
      'Chemistry': ['6', '8', '12', '14'],
      'Biology': ['Mitochondria', 'Nucleus', 'Ribosome', 'Chloroplast'],
      'History': ['Jawaharlal Nehru', 'Mahatma Gandhi', 'Sardar Patel', 'Subhas Chandra Bose'],
      'Geography': ['Paris', 'London', 'Berlin', 'Rome'],
      'Civics': ['6', '7', '8', '9']
    };

    return optionSets[topic] || ['Option A', 'Option B', 'Option C', 'Option D'];
  };

  const [questions] = useState(() => generateQuestions(examType));
  const currentQuestionData = questions[currentQuestion];

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0 && !testCompleted) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, testCompleted]);

  // Fullscreen monitoring
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !testCompleted) {
        alert('⚠️ Exiting fullscreen is not allowed. Your test will be submitted.');
        handleAutoSubmit();
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, [testCompleted]);

  // Prevent tab switching
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && !testCompleted) {
        alert('⚠️ Tab switching detected. This is not allowed during proctored tests.');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [testCompleted]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (optionIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionData.id]: optionIndex
    }));
  };

  const handleFlagQuestion = () => {
    setFlaggedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(currentQuestionData.id)) {
        newSet.delete(currentQuestionData.id);
      } else {
        newSet.add(currentQuestionData.id);
      }
      return newSet;
    });
  };

  const handleQuestionNavigation = (index) => {
    setCurrentQuestion(index);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmitTest = () => {
    setShowSubmitModal(true);
  };

  const confirmSubmit = () => {
    setTestCompleted(true);
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    calculateResults();
  };

  const handleAutoSubmit = () => {
    setTestCompleted(true);
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    calculateResults();
  };

  const calculateResults = () => {
    const correctAnswers = questions.filter(q => 
      selectedAnswers[q.id] === q.correct
    ).length;
    const wrongAnswers = Object.keys(selectedAnswers).length - correctAnswers;
    const unattempted = questions.length - Object.keys(selectedAnswers).length;
    const score = correctAnswers - (wrongAnswers * 0.25);
    const percentage = ((score / questions.length) * 100).toFixed(2);

    // Store results in state or navigate with results
    navigate('/exam-results', {
      state: {
        examType: examType === 'mat' ? 'Mental Ability Test' : examType === 'sat' ? 'Scholastic Aptitude Test' : 'NMMS Mock Examination',
        totalQuestions: questions.length,
        attempted: Object.keys(selectedAnswers).length,
        correct: correctAnswers,
        wrong: wrongAnswers,
        unattempted: unattempted,
        score: score.toFixed(2),
        percentage: percentage,
        timeSpent: duration * 60 - timeLeft
      }
    });
  };

  const getQuestionStatus = (index) => {
    const question = questions[index];
    const isAnswered = selectedAnswers[question.id] !== undefined;
    const isFlagged = flaggedQuestions.has(question.id);
    const isCurrent = index === currentQuestion;

    if (isCurrent) return 'current';
    if (isFlagged) return 'flagged';
    if (isAnswered) return 'answered';
    return 'unanswered';
  };

  if (testCompleted) {
    return null; // Will navigate to results page
  }

  return (
    <div className="et-examtest-container">
      {/* Top Header */}
      <div className="et-examtest-header">
        <div className="et-header-brand">
          <img src="/assets/PrepMark.png" alt="PrepMark" className="et-brand-logo" />
        </div>
        <div className="et-header-title">
          {examType === 'mat' ? 'Mental Ability Test' : examType === 'sat' ? 'Scholastic Aptitude Test' : 'NMMS Mock Examination'}
        </div>
        <div className="et-header-timer">
          <div className="et-timer-box">
            <span className="et-timer-icon">⏱</span>
            <span className="et-timer-value">{formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="et-examtest-main">
        {/* Left Panel - Questions (60vw) */}
        <div className="et-examtest-left">
          <div className="et-question-panel">
            {/* Question Header */}
            <div className="et-question-header-bar">
              <span className="et-question-num">Question {currentQuestion + 1} / {questions.length}</span>
              <button 
                className={`et-flag-button ${flaggedQuestions.has(currentQuestionData.id) ? 'active' : ''}`}
                onClick={handleFlagQuestion}
              >
                <span className="et-flag-icon">🚩</span>
                <span className="et-flag-text">{flaggedQuestions.has(currentQuestionData.id) ? 'Flagged' : 'Flag'}</span>
              </button>
            </div>

            {/* Question Display */}
            <div className="et-question-display">
              <h3 className="et-question-text">{currentQuestionData.question}</h3>
            </div>

            {/* Options */}
            <div className="et-options-container">
              {currentQuestionData.options.map((option, index) => (
                <div
                  key={index}
                  className={`et-option-card ${selectedAnswers[currentQuestionData.id] === index ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(index)}
                >
                  <div className="et-option-radio">
                    <div className="et-radio-outer">
                      {selectedAnswers[currentQuestionData.id] === index && <div className="et-radio-inner"></div>}
                    </div>
                  </div>
                  <div className="et-option-label">{String.fromCharCode(65 + index)}</div>
                  <div className="et-option-content">{option}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="et-question-nav-footer">
            <button
              className="et-nav-button et-prev-btn"
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
            >
              ← Previous
            </button>
            <button
              className="et-nav-button et-next-btn"
              onClick={handleNextQuestion}
              disabled={currentQuestion === questions.length - 1}
            >
              Next →
            </button>
          </div>
        </div>

        {/* Right Panel - Navigation & Stats */}
        <div className="et-examtest-right">
          {/* Question Grid */}
          <div className="et-question-grid-panel">
            <div className="et-grid-header">Question Navigator</div>
            <div className="et-question-grid">
              {questions.map((question, index) => {
                const isAnswered = selectedAnswers[question.id] !== undefined;
                const isFlagged = flaggedQuestions.has(question.id);
                const isCurrent = index === currentQuestion;
                
                return (
                  <button
                    key={question.id}
                    className={`et-grid-box ${isCurrent ? 'current' : ''} ${isAnswered ? 'answered' : ''} ${isFlagged ? 'flagged' : ''}`}
                    onClick={() => handleQuestionNavigation(index)}
                  >
                    {isAnswered ? '✓' : isFlagged ? '🚩' : index + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stats Panel */}
          <div className="et-stats-panel">
            <div className="et-stats-grid">
              <div className="et-stat-item et-answered-stat">
                <div className="et-stat-value">{Object.keys(selectedAnswers).length}</div>
                <div className="et-stat-label">Answered</div>
              </div>
              <div className="et-stat-item et-flagged-stat">
                <div className="et-stat-value">{flaggedQuestions.size}</div>
                <div className="et-stat-label">Flagged</div>
              </div>
              <div className="et-stat-item et-unattempted-stat">
                <div className="et-stat-value">{questions.length - Object.keys(selectedAnswers).length}</div>
                <div className="et-stat-label">Unattempted</div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button className="et-submit-button" onClick={handleSubmitTest}>
            Submit Test
          </button>
        </div>
      </div>

      {/* Submit Modal */}
      {showSubmitModal && (
        <div className="et-submit-modal-overlay" onClick={() => setShowSubmitModal(false)}>
          <div className="et-submit-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="et-modal-icon">⚠️</div>
            <h2 className="et-modal-heading">Confirm Submission</h2>
            <p className="et-modal-message">Are you sure you want to submit your test?</p>
            <div className="et-modal-summary">
              <div className="et-summary-item">
                <span className="et-summary-label">Answered:</span>
                <span className="et-summary-value">{Object.keys(selectedAnswers).length}</span>
              </div>
              <div className="et-summary-item">
                <span className="et-summary-label">Unattempted:</span>
                <span className="et-summary-value">{questions.length - Object.keys(selectedAnswers).length}</span>
              </div>
            </div>
            <p className="et-modal-note">You cannot change answers after submission</p>
            <div className="et-modal-buttons">
              <button className="et-modal-cancel" onClick={() => setShowSubmitModal(false)}>
                Cancel
              </button>
              <button className="et-modal-confirm" onClick={confirmSubmit}>
                Submit Test
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamTest;
