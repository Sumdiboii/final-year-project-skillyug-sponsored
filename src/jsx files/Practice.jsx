import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css files/Practice.css';
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import ParticleBackground from '../components/StarBg';

const Practice = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('quick');
  const [syllabusTab, setSyllabusTab] = useState('mat'); // For MAT/SAT tabs in Section 2
  const [satSubTab, setSatSubTab] = useState('math'); // For SAT sub-categories

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

  // MAT Quiz Data - Based on Syllabus.jsx
  const matQuizzes = [
    {
      id: 1,
      title: 'Analogy',
      description: 'Master word, number, and figure analogies with comprehensive practice',
      questions: 15,
      duration: '20 min',
      difficulty: 'Medium',
      topics: ['Word Analogies', 'Number Analogies', 'Figure Analogies', 'Mixed Patterns'],
      icon: '🔗'
    },
    {
      id: 2,
      title: 'Classification',
      description: 'Identify the odd one out and classify elements effectively',
      questions: 20,
      duration: '25 min',
      difficulty: 'Easy',
      topics: ['Word Classification', 'Number Classification', 'Figure Classification', 'Mixed Groups'],
      icon: '🎯'
    },
    {
      id: 3,
      title: 'Number & Letter Series',
      description: 'Complete sequence patterns in numbers and alphabets',
      questions: 25,
      duration: '30 min',
      difficulty: 'Medium',
      topics: ['Number Series', 'Letter Series', 'Mixed Series', 'Complex Patterns'],
      icon: '🔢'
    },
    {
      id: 4,
      title: 'Coding-Decoding',
      description: 'Decode patterns and encrypted messages using various techniques',
      questions: 18,
      duration: '25 min',
      difficulty: 'Medium',
      topics: ['Letter Coding', 'Number Coding', 'Symbol Coding', 'Mixed Coding'],
      icon: '🔐'
    },
    {
      id: 5,
      title: 'Pattern Perception',
      description: 'Identify and complete visual and logical patterns',
      questions: 20,
      duration: '30 min',
      difficulty: 'Hard',
      topics: ['Visual Patterns', 'Number Patterns', 'Shape Patterns', 'Complex Sequences'],
      icon: '👁️'
    },
    {
      id: 6,
      title: 'Hidden Figures',
      description: 'Find embedded shapes and figures within complex designs',
      questions: 15,
      duration: '20 min',
      difficulty: 'Hard',
      topics: ['Embedded Figures', 'Shape Recognition', 'Visual Analysis', 'Spatial Reasoning'],
      icon: '🕵️'
    },
    {
      id: 7,
      title: 'Blood Relations',
      description: 'Solve family relationship problems and genealogical puzzles',
      questions: 20,
      duration: '25 min',
      difficulty: 'Medium',
      topics: ['Family Trees', 'Relationship Chains', 'Generation Problems', 'Complex Relations'],
      icon: '👨‍👩‍👧‍👦'
    },
    {
      id: 8,
      title: 'Direction Sense',
      description: 'Master navigation and directional reasoning problems',
      questions: 18,
      duration: '20 min',
      difficulty: 'Easy',
      topics: ['Compass Directions', 'Distance Calculations', 'Path Finding', 'Movement Tracking'],
      icon: '🧭'
    },
    {
      id: 9,
      title: 'Logical & Mathematical Puzzles',
      description: 'Critical thinking and advanced problem-solving techniques',
      questions: 22,
      duration: '35 min',
      difficulty: 'Hard',
      topics: ['Logic Puzzles', 'Math Puzzles', 'Reasoning Problems', 'Critical Analysis'],
      icon: '🧩'
    },
    {
      id: 10,
      title: 'Spatial Visualization',
      description: 'Mirror images, folding/unfolding patterns and 3D reasoning',
      questions: 16,
      duration: '25 min',
      difficulty: 'Hard',
      topics: ['Mirror Images', 'Paper Folding', 'Cube Problems', '3D Visualization'],
      icon: '🔄'
    }
  ];

  // SAT Quiz Data - Based on Syllabus.jsx (Mathematics)
  const satMathQuizzes = [
    {
      id: 1,
      title: 'Integers, Fractions & Decimals',
      description: 'Master basic number systems and rational numbers',
      questions: 20,
      duration: '25 min',
      difficulty: 'Easy',
      topics: ['Integers', 'Fractions', 'Decimals', 'Rational Numbers'],
      icon: '🔢'
    },
    {
      id: 2,
      title: 'Exponents & Powers',
      description: 'Understanding exponential expressions and power rules',
      questions: 15,
      duration: '20 min',
      difficulty: 'Medium',
      topics: ['Laws of Exponents', 'Powers', 'Scientific Notation', 'Applications'],
      icon: '⚡'
    },
    {
      id: 3,
      title: 'Algebra Fundamentals',
      description: 'Algebraic expressions, equations, and identities',
      questions: 25,
      duration: '30 min',
      difficulty: 'Medium',
      topics: ['Expressions', 'Simple Equations', 'Identities', 'Factorization'],
      icon: '📊'
    },
    {
      id: 4,
      title: 'Geometry Basics',
      description: 'Triangles, quadrilaterals, circles, and constructions',
      questions: 20,
      duration: '30 min',
      difficulty: 'Medium',
      topics: ['Triangles', 'Quadrilaterals', 'Circles', 'Constructions'],
      icon: '📐'
    },
    {
      id: 5,
      title: 'Mensuration',
      description: 'Calculate perimeter, area, surface area, and volume',
      questions: 18,
      duration: '25 min',
      difficulty: 'Medium',
      topics: ['Perimeter', 'Area', 'Surface Area', 'Volume'],
      icon: '📏'
    },
    {
      id: 6,
      title: 'Profit & Loss',
      description: 'Commercial mathematics and business calculations',
      questions: 15,
      duration: '20 min',
      difficulty: 'Easy',
      topics: ['Profit & Loss', 'Percentage', 'Ratio & Proportion', 'Unitary Method'],
      icon: '💰'
    },
    {
      id: 7,
      title: 'Simple & Compound Interest',
      description: 'Interest calculations and financial mathematics',
      questions: 12,
      duration: '18 min',
      difficulty: 'Medium',
      topics: ['Simple Interest', 'Compound Interest', 'Applications', 'Time & Work'],
      icon: '🏦'
    },
    {
      id: 8,
      title: 'Data Handling',
      description: 'Graphs, charts, and basic probability concepts',
      questions: 16,
      duration: '22 min',
      difficulty: 'Easy',
      topics: ['Bar Graphs', 'Pie Charts', 'Probability', 'Data Interpretation'],
      icon: '📈'
    }
  ];

  // SAT Science Quiz Data
  const satScienceQuizzes = [
    {
      id: 1,
      title: 'Nutrition in Plants & Animals',
      description: 'Understanding how plants and animals obtain and use nutrients',
      questions: 20,
      duration: '25 min',
      difficulty: 'Easy',
      topics: ['Photosynthesis', 'Animal Nutrition', 'Digestive System', 'Nutrients'],
      icon: '🌱'
    },
    {
      id: 2,
      title: 'Heat, Light & Sound',
      description: 'Physical properties and behavior of heat, light, and sound',
      questions: 18,
      duration: '22 min',
      difficulty: 'Medium',
      topics: ['Heat Transfer', 'Light Properties', 'Sound Waves', 'Energy'],
      icon: '🔥'
    },
    {
      id: 3,
      title: 'Acids, Bases & Salts',
      description: 'Chemical properties and reactions of acids, bases, and salts',
      questions: 15,
      duration: '20 min',
      difficulty: 'Medium',
      topics: ['Acid Properties', 'Base Properties', 'Salt Formation', 'pH Scale'],
      icon: '🧪'
    },
    {
      id: 4,
      title: 'Physical & Chemical Changes',
      description: 'Distinguish between physical and chemical transformations',
      questions: 16,
      duration: '20 min',
      difficulty: 'Easy',
      topics: ['Physical Changes', 'Chemical Changes', 'Reactions', 'Properties'],
      icon: '⚗️'
    },
    {
      id: 5,
      title: 'Motion, Force & Pressure',
      description: 'Understanding motion, forces, and pressure in physics',
      questions: 20,
      duration: '25 min',
      difficulty: 'Medium',
      topics: ['Types of Motion', 'Force', 'Pressure', 'Friction'],
      icon: '🏃‍♂️'
    },
    {
      id: 6,
      title: 'Reproduction in Living Organisms',
      description: 'Reproductive processes in plants and animals',
      questions: 18,
      duration: '22 min',
      difficulty: 'Medium',
      topics: ['Plant Reproduction', 'Animal Reproduction', 'Life Cycles', 'Growth'],
      icon: '🌸'
    },
    {
      id: 7,
      title: 'Microorganisms',
      description: 'Study of microbes and their impact on life',
      questions: 12,
      duration: '15 min',
      difficulty: 'Easy',
      topics: ['Bacteria', 'Viruses', 'Fungi', 'Beneficial Microbes'],
      icon: '🦠'
    },
    {
      id: 8,
      title: 'Cell Structure & Human Body',
      description: 'Cell biology and human body systems',
      questions: 22,
      duration: '28 min',
      difficulty: 'Medium',
      topics: ['Cell Parts', 'Tissues', 'Organs', 'Body Systems'],
      icon: '🧬'
    },
    {
      id: 9,
      title: 'Environment & Conservation',
      description: 'Environmental science and conservation principles',
      questions: 16,
      duration: '20 min',
      difficulty: 'Easy',
      topics: ['Pollution', 'Conservation', 'Ecosystems', 'Natural Resources'],
      icon: '🌍'
    },
    {
      id: 10,
      title: 'Solar System & Universe',
      description: 'Astronomy and space science fundamentals',
      questions: 14,
      duration: '18 min',
      difficulty: 'Medium',
      topics: ['Planets', 'Stars', 'Solar System', 'Universe'],
      icon: '🌌'
    }
  ];

  // SAT Social Science Quiz Data
  const satSocialQuizzes = [
    {
      id: 1,
      title: 'Medieval to Modern India',
      description: 'Indian history from medieval period to independence',
      questions: 25,
      duration: '30 min',
      difficulty: 'Medium',
      topics: ['Medieval India', 'Mughal Empire', 'British Rule', 'Freedom Struggle'],
      icon: '🏛️'
    },
    {
      id: 2,
      title: 'National Movement',
      description: 'India\'s struggle for independence and freedom fighters',
      questions: 20,
      duration: '25 min',
      difficulty: 'Medium',
      topics: ['Freedom Fighters', 'Movements', 'Revolutionary Activities', 'Independence'],
      icon: '🇮🇳'
    },
    {
      id: 3,
      title: 'Geography - Resources & Agriculture',
      description: 'Natural resources, agriculture, and industries',
      questions: 22,
      duration: '28 min',
      difficulty: 'Easy',
      topics: ['Natural Resources', 'Agriculture', 'Industries', 'Economic Geography'],
      icon: '🌾'
    },
    {
      id: 4,
      title: 'Land, Soil & Water Resources',
      description: 'Environmental geography and resource management',
      questions: 18,
      duration: '22 min',
      difficulty: 'Easy',
      topics: ['Land Resources', 'Soil Types', 'Water Resources', 'Conservation'],
      icon: '🏔️'
    },
    {
      id: 5,
      title: 'Constitution & Democracy',
      description: 'Indian constitution, democratic principles, and governance',
      questions: 20,
      duration: '25 min',
      difficulty: 'Medium',
      topics: ['Constitution', 'Democracy', 'Rights', 'Fundamental Duties'],
      icon: '⚖️'
    },
    {
      id: 6,
      title: 'Government & Judiciary',
      description: 'Structure of government and judicial system',
      questions: 18,
      duration: '22 min',
      difficulty: 'Medium',
      topics: ['Government Structure', 'Judiciary', 'Laws', 'Justice System'],
      icon: '🏛️'
    },
    {
      id: 7,
      title: 'Economics - Basic Concepts',
      description: 'Fundamental economic principles and concepts',
      questions: 16,
      duration: '20 min',
      difficulty: 'Easy',
      topics: ['Economic Systems', 'Markets', 'Money', 'Banking'],
      icon: '💼'
    },
    {
      id: 8,
      title: 'Rural & Urban Livelihoods',
      description: 'Economic activities in rural and urban areas',
      questions: 15,
      duration: '18 min',
      difficulty: 'Easy',
      topics: ['Rural Economy', 'Urban Economy', 'Employment', 'Livelihoods'],
      icon: '🏘️'
    }
  ];

  const startQuiz = (quiz, examType, subCategory = null) => {
    // Navigate to PracticePage with quiz data
    navigate('/practice-quiz', {
      state: {
        quizData: {
          ...quiz,
          examType: examType,
          subCategory: subCategory
        }
      }
    });
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
    <>
      <MainNavbar />
      <div className="practice-page">
        
        {/* Section 1: Practice Dashboard */}
        <section className="practice-dashboard-section">
          <ParticleBackground />
          <div className="dashboard-header">
            <h1>🎯 Practice Dashboard</h1>
            <p>Track your progress, recent activity, and jump into practice!</p>
          </div>
          <div className="dashboard-content">
            {/* Example stats and quick access (replace with real data as needed) */}
            <div className="dashboard-stats">
              <div className="stat-card">
                <div className="stat-label">Current Streak</div>
                <div className="stat-value">7 days 🔥</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Total Quizzes</div>
                <div className="stat-value">42</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Best Score</div>
                <div className="stat-value">98%</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Last Practiced</div>
                <div className="stat-value">2 hours ago</div>
              </div>
            </div>
            <div className="dashboard-actions">
              <button className="dashboard-btn primary">Start Quick Practice</button>
              <button className="dashboard-btn secondary">View All Results</button>
            </div>
          </div>
        </section>

        {/* Section 2: MAT/SAT Quiz Container */}
        <section className="quiz-syllabus-section">
          <div className="syllabus-header">
            <h2>📚 Syllabus-Based Quizzes</h2>
            <p>Choose your exam type and practice with structured quiz sets</p>
          </div>

          {/* MAT/SAT Tabs */}
          <div className="syllabus-tabs">
            <button 
              className={`syllabus-tab ${syllabusTab === 'mat' ? 'active' : ''}`}
              onClick={() => setSyllabusTab('mat')}
            >
              <span className="tab-icon">🧠</span>
              <span className="tab-text">MAT (Mental Ability Test)</span>
            </button>
            <button 
              className={`syllabus-tab ${syllabusTab === 'sat' ? 'active' : ''}`}
              onClick={() => setSyllabusTab('sat')}
            >
              <span className="tab-icon">🎓</span>
              <span className="tab-text">SAT (Scholastic Assessment)</span>
            </button>
          </div>

          {/* Quiz Content */}
          <div className="quiz-content">
            {syllabusTab === 'mat' && (
              <div className="mat-quizzes">
                <div className="quiz-grid">
                  {matQuizzes.map((quiz) => (
                    <div key={quiz.id} className="quiz-card">
                      <div className="quiz-header">
                        <div className="quiz-icon">{quiz.icon}</div>
                        <div className="quiz-info">
                          <h3 className="quiz-title">{quiz.title}</h3>
                          <p className="quiz-description">{quiz.description}</p>
                        </div>
                      </div>

                      <div className="quiz-stats">
                        <div className="quiz-stat">
                          <span className="stat-label">Questions</span>
                          <span className="stat-value">{quiz.questions}</span>
                        </div>
                        <div className="quiz-stat">
                          <span className="stat-label">Duration</span>
                          <span className="stat-value">{quiz.duration}</span>
                        </div>
                        <div className="quiz-stat">
                          <span className="stat-label">Level</span>
                          <span className={`stat-value difficulty-${quiz.difficulty.toLowerCase()}`}>
                            {quiz.difficulty}
                          </span>
                        </div>
                      </div>

                      <div className="quiz-topics">
                        <h4>Topics Covered:</h4>
                        <div className="topics-list">
                          {quiz.topics.map((topic, index) => (
                            <span key={index} className="topic-tag">{topic}</span>
                          ))}
                        </div>
                      </div>

                      <div className="quiz-actions">
                        <button 
                          className="quiz-btn start-btn"
                          onClick={() => startQuiz(quiz, 'MAT')}
                        >
                          Start Quiz
                        </button>
                        <button className="quiz-btn preview-btn">Preview</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {syllabusTab === 'sat' && (
              <div className="sat-quizzes">
                {/* SAT Sub-tabs */}
                <div className="sat-sub-tabs">
                  <button 
                    className={`sat-sub-tab ${satSubTab === 'math' ? 'active' : ''}`}
                    onClick={() => setSatSubTab('math')}
                  >
                    📊 Mathematics
                  </button>
                  <button 
                    className={`sat-sub-tab ${satSubTab === 'science' ? 'active' : ''}`}
                    onClick={() => setSatSubTab('science')}
                  >
                    🔬 Science
                  </button>
                  <button 
                    className={`sat-sub-tab ${satSubTab === 'social' ? 'active' : ''}`}
                    onClick={() => setSatSubTab('social')}
                  >
                    🌍 Social Science
                  </button>
                </div>

                {/* SAT Math Quizzes */}
                {satSubTab === 'math' && (
                  <div className="quiz-grid">
                    {satMathQuizzes.map((quiz) => (
                      <div key={quiz.id} className="quiz-card">
                        <div className="quiz-header">
                          <div className="quiz-icon">{quiz.icon}</div>
                          <div className="quiz-info">
                            <h3 className="quiz-title">{quiz.title}</h3>
                            <p className="quiz-description">{quiz.description}</p>
                          </div>
                        </div>

                        <div className="quiz-stats">
                          <div className="quiz-stat">
                            <span className="stat-label">Questions</span>
                            <span className="stat-value">{quiz.questions}</span>
                          </div>
                          <div className="quiz-stat">
                            <span className="stat-label">Duration</span>
                            <span className="stat-value">{quiz.duration}</span>
                          </div>
                          <div className="quiz-stat">
                            <span className="stat-label">Level</span>
                            <span className={`stat-value difficulty-${quiz.difficulty.toLowerCase()}`}>
                              {quiz.difficulty}
                            </span>
                          </div>
                        </div>

                        <div className="quiz-topics">
                          <h4>Topics Covered:</h4>
                          <div className="topics-list">
                            {quiz.topics.map((topic, index) => (
                              <span key={index} className="topic-tag">{topic}</span>
                            ))}
                          </div>
                        </div>

                        <div className="quiz-actions">
                          <button 
                            className="quiz-btn start-btn"
                            onClick={() => startQuiz(quiz, 'SAT', 'Math')}
                          >
                            Start Quiz
                          </button>
                          <button className="quiz-btn preview-btn">Preview</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* SAT Science Quizzes */}
                {satSubTab === 'science' && (
                  <div className="quiz-grid">
                    {satScienceQuizzes.map((quiz) => (
                      <div key={quiz.id} className="quiz-card">
                        <div className="quiz-header">
                          <div className="quiz-icon">{quiz.icon}</div>
                          <div className="quiz-info">
                            <h3 className="quiz-title">{quiz.title}</h3>
                            <p className="quiz-description">{quiz.description}</p>
                          </div>
                        </div>

                        <div className="quiz-stats">
                          <div className="quiz-stat">
                            <span className="stat-label">Questions</span>
                            <span className="stat-value">{quiz.questions}</span>
                          </div>
                          <div className="quiz-stat">
                            <span className="stat-label">Duration</span>
                            <span className="stat-value">{quiz.duration}</span>
                          </div>
                          <div className="quiz-stat">
                            <span className="stat-label">Level</span>
                            <span className={`stat-value difficulty-${quiz.difficulty.toLowerCase()}`}>
                              {quiz.difficulty}
                            </span>
                          </div>
                        </div>

                        <div className="quiz-topics">
                          <h4>Topics Covered:</h4>
                          <div className="topics-list">
                            {quiz.topics.map((topic, index) => (
                              <span key={index} className="topic-tag">{topic}</span>
                            ))}
                          </div>
                        </div>

                        <div className="quiz-actions">
                          <button 
                            className="quiz-btn start-btn"
                            onClick={() => startQuiz(quiz, 'SAT', 'Science')}
                          >
                            Start Quiz
                          </button>
                          <button className="quiz-btn preview-btn">Preview</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* SAT Social Science Quizzes */}
                {satSubTab === 'social' && (
                  <div className="quiz-grid">
                    {satSocialQuizzes.map((quiz) => (
                      <div key={quiz.id} className="quiz-card">
                        <div className="quiz-header">
                          <div className="quiz-icon">{quiz.icon}</div>
                          <div className="quiz-info">
                            <h3 className="quiz-title">{quiz.title}</h3>
                            <p className="quiz-description">{quiz.description}</p>
                          </div>
                        </div>

                        <div className="quiz-stats">
                          <div className="quiz-stat">
                            <span className="stat-label">Questions</span>
                            <span className="stat-value">{quiz.questions}</span>
                          </div>
                          <div className="quiz-stat">
                            <span className="stat-label">Duration</span>
                            <span className="stat-value">{quiz.duration}</span>
                          </div>
                          <div className="quiz-stat">
                            <span className="stat-label">Level</span>
                            <span className={`stat-value difficulty-${quiz.difficulty.toLowerCase()}`}>
                              {quiz.difficulty}
                            </span>
                          </div>
                        </div>

                        <div className="quiz-topics">
                          <h4>Topics Covered:</h4>
                          <div className="topics-list">
                            {quiz.topics.map((topic, index) => (
                              <span key={index} className="topic-tag">{topic}</span>
                            ))}
                          </div>
                        </div>

                        <div className="quiz-actions">
                          <button 
                            className="quiz-btn start-btn"
                            onClick={() => startQuiz(quiz, 'SAT', 'Social')}
                          >
                            Start Quiz
                          </button>
                          <button className="quiz-btn preview-btn">Preview</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Section 3 will be added next */}
      </div>
      <Footer />
    </>
  );
};

export default Practice;