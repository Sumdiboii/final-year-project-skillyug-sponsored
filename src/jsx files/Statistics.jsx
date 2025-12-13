import React, { useState } from 'react';
import '../css files/Statistics.css';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';

const Statistics = () => {
  const [selectedTest, setSelectedTest] = useState(null);
  const [viewMode, setViewMode] = useState('overview'); // overview, gradecards, insights

  // Overall Performance Metrics
  const performanceMetrics = {
    overallScore: 78,
    totalTests: 24,
    testsThisMonth: 8,
    averageTimePerTest: 28,
    improvement: 12,
    rank: 142,
    totalStudents: 1250,
    studyStreak: 12,
    totalStudyHours: 48.5
  };

  // Test Grade Cards with Detailed Analysis
  const testGradeCards = [
    {
      id: 1,
      testName: "MAT - Pattern Recognition",
      testType: "MAT",
      date: "Dec 10, 2025",
      score: 85,
      totalQuestions: 10,
      correctAnswers: 9,
      incorrectAnswers: 1,
      timeSpent: 12,
      averageTime: 15,
      grade: "A",
      percentile: 82,
      strengths: ["Logical Sequences", "Number Patterns", "Visual Recognition"],
      weaknesses: ["Complex Series"],
      recommendations: [
        "Practice more complex arithmetic series problems",
        "Focus on multi-step pattern recognition",
        "Review advanced sequence completion"
      ],
      topicWiseBreakdown: [
        { topic: "Number Series", score: 90, total: 3 },
        { topic: "Visual Patterns", score: 100, total: 4 },
        { topic: "Logical Sequences", score: 66, total: 3 }
      ],
      difficultyAnalysis: {
        easy: { attempted: 4, correct: 4 },
        medium: { attempted: 4, correct: 4 },
        hard: { attempted: 2, correct: 1 }
      }
    },
    {
      id: 2,
      testName: "SAT - Mathematics",
      testType: "SAT",
      date: "Dec 8, 2025",
      score: 70,
      totalQuestions: 10,
      correctAnswers: 7,
      incorrectAnswers: 3,
      timeSpent: 18,
      averageTime: 15,
      grade: "B",
      percentile: 68,
      strengths: ["Basic Arithmetic", "Fractions"],
      weaknesses: ["Algebra", "Word Problems", "Geometry"],
      recommendations: [
        "Strengthen algebra fundamentals - practice linear equations daily",
        "Work on word problem comprehension and translation",
        "Review basic geometry formulas and concepts",
        "Practice time management - currently taking 20% more time than average"
      ],
      topicWiseBreakdown: [
        { topic: "Arithmetic", score: 100, total: 3 },
        { topic: "Algebra", score: 50, total: 4 },
        { topic: "Geometry", score: 66, total: 3 }
      ],
      difficultyAnalysis: {
        easy: { attempted: 4, correct: 4 },
        medium: { attempted: 4, correct: 3 },
        hard: { attempted: 2, correct: 0 }
      }
    },
    {
      id: 3,
      testName: "MAT - Verbal Analogy",
      testType: "MAT",
      date: "Dec 6, 2025",
      score: 90,
      totalQuestions: 10,
      correctAnswers: 9,
      incorrectAnswers: 1,
      timeSpent: 10,
      averageTime: 15,
      grade: "A+",
      percentile: 92,
      strengths: ["Word Relationships", "Logical Connections", "Vocabulary"],
      weaknesses: ["Complex Analogies"],
      recommendations: [
        "Excellent performance! Maintain current study routine",
        "Challenge yourself with higher difficulty analogies",
        "Expand vocabulary with advanced terms"
      ],
      topicWiseBreakdown: [
        { topic: "Simple Analogies", score: 100, total: 5 },
        { topic: "Complex Analogies", score: 75, total: 5 }
      ],
      difficultyAnalysis: {
        easy: { attempted: 3, correct: 3 },
        medium: { attempted: 5, correct: 5 },
        hard: { attempted: 2, correct: 1 }
      }
    },
    {
      id: 4,
      testName: "SAT - General Science",
      testType: "SAT",
      date: "Dec 4, 2025",
      score: 66,
      totalQuestions: 10,
      correctAnswers: 7,
      incorrectAnswers: 3,
      timeSpent: 22,
      averageTime: 15,
      grade: "C",
      percentile: 58,
      strengths: ["Basic Biology", "Scientific Terms"],
      weaknesses: ["Physics Concepts", "Chemistry", "Scientific Method"],
      recommendations: [
        "CRITICAL: Strengthen physics fundamentals - this is a weak area",
        "Review basic chemistry concepts and equations",
        "Practice more science questions daily (at least 10)",
        "Watch educational videos for better concept understanding",
        "Improve speed - currently taking 47% more time than average"
      ],
      topicWiseBreakdown: [
        { topic: "Biology", score: 100, total: 3 },
        { topic: "Physics", score: 33, total: 4 },
        { topic: "Chemistry", score: 66, total: 3 }
      ],
      difficultyAnalysis: {
        easy: { attempted: 4, correct: 4 },
        medium: { attempted: 4, correct: 2 },
        hard: { attempted: 2, correct: 1 }
      }
    },
    {
      id: 5,
      testName: "SAT - English Language",
      testType: "SAT",
      date: "Dec 2, 2025",
      score: 80,
      totalQuestions: 10,
      correctAnswers: 8,
      incorrectAnswers: 2,
      timeSpent: 14,
      averageTime: 15,
      grade: "A-",
      percentile: 78,
      strengths: ["Vocabulary", "Grammar", "Comprehension"],
      weaknesses: ["Synonyms", "Sentence Formation"],
      recommendations: [
        "Good performance overall",
        "Practice more synonym exercises",
        "Work on complex sentence structures",
        "Read more to improve vocabulary naturally"
      ],
      topicWiseBreakdown: [
        { topic: "Vocabulary", score: 100, total: 3 },
        { topic: "Grammar", score: 75, total: 4 },
        { topic: "Comprehension", score: 66, total: 3 }
      ],
      difficultyAnalysis: {
        easy: { attempted: 4, correct: 4 },
        medium: { attempted: 4, correct: 3 },
        hard: { attempted: 2, correct: 1 }
      }
    }
  ];

  // Subject-wise Analytics
  const subjectAnalytics = [
    {
      subject: "MAT - Mental Ability",
      testsGiven: 8,
      averageScore: 83,
      highestScore: 95,
      lowestScore: 70,
      trend: "improving",
      trendPercentage: 15,
      timeSpent: "12.5 hrs",
      lastTestDate: "Dec 10, 2025",
      strengths: ["Pattern Recognition", "Logical Reasoning", "Analogies"],
      areasToImprove: ["Spatial Reasoning", "Complex Series"],
      recommendation: "Consistent performance with steady improvement. Focus on spatial reasoning for better scores."
    },
    {
      subject: "SAT - Mathematics",
      testsGiven: 6,
      averageScore: 72,
      highestScore: 85,
      lowestScore: 58,
      trend: "stable",
      trendPercentage: 2,
      timeSpent: "15.2 hrs",
      lastTestDate: "Dec 8, 2025",
      strengths: ["Basic Arithmetic", "Fractions", "Percentages"],
      areasToImprove: ["Algebra", "Geometry", "Word Problems"],
      recommendation: "NEEDS ATTENTION: Math scores are below target. Dedicate 30 mins daily to algebra practice."
    },
    {
      subject: "SAT - General Science",
      testsGiven: 5,
      averageScore: 68,
      highestScore: 80,
      lowestScore: 56,
      trend: "declining",
      trendPercentage: -8,
      timeSpent: "10.8 hrs",
      lastTestDate: "Dec 4, 2025",
      strengths: ["Biology", "Environmental Science"],
      areasToImprove: ["Physics", "Chemistry", "Scientific Method"],
      recommendation: "CRITICAL: Science scores declining. Immediate intervention needed. Consider extra tutoring for physics."
    },
    {
      subject: "SAT - English Language",
      testsGiven: 5,
      averageScore: 79,
      highestScore: 88,
      lowestScore: 70,
      trend: "improving",
      trendPercentage: 10,
      timeSpent: "10.0 hrs",
      lastTestDate: "Dec 2, 2025",
      strengths: ["Vocabulary", "Reading Comprehension", "Grammar"],
      areasToImprove: ["Sentence Formation", "Advanced Vocabulary"],
      recommendation: "Good progress. Continue reading practice to maintain momentum."
    }
  ];

  // AI-Generated Insights for Parents
  const parentInsights = [
    {
      type: "critical",
      icon: "🚨",
      title: "Immediate Attention Required",
      description: "SAT Science performance is declining (-8% trend). Physics and Chemistry concepts need urgent focus.",
      action: "Consider enrolling in science tutoring or watching educational videos together."
    },
    {
      type: "warning",
      icon: "⚠️",
      title: "Math Needs Improvement",
      description: "Math scores (72% avg) are below the target of 80%. Algebra and word problems are weak areas.",
      action: "Set daily 30-minute algebra practice sessions. Use practice apps or workbooks."
    },
    {
      type: "positive",
      icon: "✅",
      title: "Strong Mental Ability",
      description: "MAT scores are excellent (83% avg) with 15% improvement trend. Student excels in logical thinking.",
      action: "Maintain current study routine. Consider advanced MAT challenges."
    },
    {
      type: "info",
      icon: "💡",
      title: "Time Management",
      description: "Student is taking 20-47% more time than average on some tests, especially science.",
      action: "Practice timed tests to improve speed without compromising accuracy."
    },
    {
      type: "positive",
      icon: "🎯",
      title: "Consistent Study Habit",
      description: "12-day study streak maintained with 48.5 hours total study time this month.",
      action: "Encourage and reward this consistency to maintain motivation."
    },
    {
      type: "info",
      icon: "📊",
      title: "Overall Percentile",
      description: "Student ranks 142 out of 1250 students (Top 12%). Overall performance is above average.",
      action: "With focused effort on weak areas, can improve to top 10%."
    }
  ];

  // Monthly Progress Comparison
  const monthlyProgress = [
    { month: "Sep", score: 65 },
    { month: "Oct", score: 70 },
    { month: "Nov", score: 75 },
    { month: "Dec", score: 78 }
  ];

  // Render Grade Card Details
  const renderGradeCard = (test) => {
    return (
      <div className="grade-card-modal">
        <div className="grade-card-content">
          <button className="close-btn" onClick={() => setSelectedTest(null)}>✕</button>
          
          <div className="grade-card-header">
            <div className="test-title-section">
              <span className="test-type-badge">{test.testType}</span>
              <h2>{test.testName}</h2>
              <p className="test-date">Taken on {test.date}</p>
            </div>
            <div className="grade-display">
              <div className="grade-circle">
                <div className="grade-letter">{test.grade}</div>
                <div className="grade-score">{test.score}%</div>
              </div>
            </div>
          </div>

          <div className="grade-card-body">
            {/* Performance Summary */}
            <div className="performance-summary">
              <div className="summary-item">
                <span className="summary-label">Score</span>
                <span className="summary-value">{test.score}%</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Correct</span>
                <span className="summary-value correct">{test.correctAnswers}/{test.totalQuestions}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Incorrect</span>
                <span className="summary-value incorrect">{test.incorrectAnswers}/{test.totalQuestions}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Time Taken</span>
                <span className="summary-value">{test.timeSpent} min</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Percentile</span>
                <span className="summary-value">{test.percentile}th</span>
              </div>
            </div>

            {/* Topic-wise Breakdown */}
            <div className="analysis-section">
              <h3>📊 Topic-wise Performance</h3>
              <div className="topic-breakdown">
                {test.topicWiseBreakdown.map((topic, idx) => (
                  <div key={idx} className="topic-item">
                    <div className="topic-header">
                      <span className="topic-name">{topic.topic}</span>
                      <span className="topic-score">{topic.score}%</span>
                    </div>
                    <div className="topic-progress-bar">
                      <div 
                        className="topic-progress-fill"
                        style={{ 
                          width: `${topic.score}%`,
                          background: topic.score >= 80 ? '#10b981' : topic.score >= 60 ? '#f59e0b' : '#ef4444'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Difficulty Analysis */}
            <div className="analysis-section">
              <h3>🎯 Difficulty Level Analysis</h3>
              <div className="difficulty-grid">
                <div className="difficulty-card easy">
                  <div className="difficulty-label">Easy</div>
                  <div className="difficulty-stats">
                    {test.difficultyAnalysis.easy.correct}/{test.difficultyAnalysis.easy.attempted}
                  </div>
                  <div className="difficulty-percent">
                    {Math.round((test.difficultyAnalysis.easy.correct / test.difficultyAnalysis.easy.attempted) * 100)}%
                  </div>
                </div>
                <div className="difficulty-card medium">
                  <div className="difficulty-label">Medium</div>
                  <div className="difficulty-stats">
                    {test.difficultyAnalysis.medium.correct}/{test.difficultyAnalysis.medium.attempted}
                  </div>
                  <div className="difficulty-percent">
                    {Math.round((test.difficultyAnalysis.medium.correct / test.difficultyAnalysis.medium.attempted) * 100)}%
                  </div>
                </div>
                <div className="difficulty-card hard">
                  <div className="difficulty-label">Hard</div>
                  <div className="difficulty-stats">
                    {test.difficultyAnalysis.hard.correct}/{test.difficultyAnalysis.hard.attempted}
                  </div>
                  <div className="difficulty-percent">
                    {Math.round((test.difficultyAnalysis.hard.correct / test.difficultyAnalysis.hard.attempted) * 100)}%
                  </div>
                </div>
              </div>
            </div>

            {/* Strengths & Weaknesses */}
            <div className="analysis-section">
              <div className="strengths-weaknesses-grid">
                <div className="strength-section">
                  <h3>💪 Strengths</h3>
                  <ul className="strength-list">
                    {test.strengths.map((strength, idx) => (
                      <li key={idx}>
                        <span className="bullet">✓</span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="weakness-section">
                  <h3>📉 Areas to Improve</h3>
                  <ul className="weakness-list">
                    {test.weaknesses.map((weakness, idx) => (
                      <li key={idx}>
                        <span className="bullet">!</span>
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="analysis-section">
              <h3>💡 Personalized Recommendations</h3>
              <div className="recommendations-list">
                {test.recommendations.map((rec, idx) => (
                  <div key={idx} className="recommendation-item">
                    <span className="rec-number">{idx + 1}</span>
                    <p>{rec}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Time Comparison */}
            <div className="analysis-section">
              <h3>⏱️ Time Analysis</h3>
              <div className="time-comparison">
                <div className="time-bar-container">
                  <div className="time-label">Your Time</div>
                  <div className="time-bar">
                    <div 
                      className="time-bar-fill your-time"
                      style={{ width: `${(test.timeSpent / Math.max(test.timeSpent, test.averageTime)) * 100}%` }}
                    >
                      {test.timeSpent} min
                    </div>
                  </div>
                </div>
                <div className="time-bar-container">
                  <div className="time-label">Average Time</div>
                  <div className="time-bar">
                    <div 
                      className="time-bar-fill avg-time"
                      style={{ width: `${(test.averageTime / Math.max(test.timeSpent, test.averageTime)) * 100}%` }}
                    >
                      {test.averageTime} min
                    </div>
                  </div>
                </div>
              </div>
              {test.timeSpent > test.averageTime && (
                <p className="time-note">
                  ⚠️ You took {Math.round(((test.timeSpent - test.averageTime) / test.averageTime) * 100)}% more time than average. 
                  Practice more to improve speed.
                </p>
              )}
              {test.timeSpent < test.averageTime && (
                <p className="time-note success">
                  ✅ Excellent! You completed {Math.round(((test.averageTime - test.timeSpent) / test.averageTime) * 100)}% faster than average.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <MainNavbar />
      <div className="statistics-section">
        <div className="statistics-container">
          {/* Header */}
          <div className="statistics-header">
            <h1>📊 Learning Analytics</h1>
            <p>Comprehensive performance insights and progress tracking</p>
          </div>

          {/* View Mode Tabs */}
          <div className="view-mode-tabs">
            <button 
              className={`tab-btn ${viewMode === 'overview' ? 'active' : ''}`}
              onClick={() => setViewMode('overview')}
            >
              📈 Overview
            </button>
            <button 
              className={`tab-btn ${viewMode === 'gradecards' ? 'active' : ''}`}
              onClick={() => setViewMode('gradecards')}
            >
              📝 Grade Cards
            </button>
            <button 
              className={`tab-btn ${viewMode === 'insights' ? 'active' : ''}`}
              onClick={() => setViewMode('insights')}
            >
              💡 Parent Insights
            </button>
          </div>

          {/* Overview Tab */}
          {viewMode === 'overview' && (
            <div className="overview-content">
              {/* Performance Metrics */}
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-icon">📊</div>
                  <div className="metric-value">{performanceMetrics.overallScore}%</div>
                  <div className="metric-label">Overall Score</div>
                  <div className="metric-change positive">+{performanceMetrics.improvement}% this month</div>
                </div>
                <div className="metric-card">
                  <div className="metric-icon">📝</div>
                  <div className="metric-value">{performanceMetrics.totalTests}</div>
                  <div className="metric-label">Total Tests</div>
                  <div className="metric-change">{performanceMetrics.testsThisMonth} this month</div>
                </div>
                <div className="metric-card">
                  <div className="metric-icon">🏆</div>
                  <div className="metric-value">#{performanceMetrics.rank}</div>
                  <div className="metric-label">Current Rank</div>
                  <div className="metric-change">out of {performanceMetrics.totalStudents}</div>
                </div>
                <div className="metric-card">
                  <div className="metric-icon">🔥</div>
                  <div className="metric-value">{performanceMetrics.studyStreak}</div>
                  <div className="metric-label">Study Streak</div>
                  <div className="metric-change">days in a row</div>
                </div>
              </div>

              {/* Monthly Progress Chart */}
              <div className="chart-section">
                <h2>📈 Monthly Progress Trend</h2>
                <div className="progress-chart">
                  {monthlyProgress.map((month, idx) => (
                    <div key={idx} className="chart-column">
                      <div className="chart-bar-wrapper">
                        <div 
                          className="chart-bar"
                          style={{ height: `${(month.score / 100) * 200}px` }}
                        >
                          <span className="bar-value">{month.score}%</span>
                        </div>
                      </div>
                      <span className="chart-label">{month.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subject-wise Analytics */}
              <div className="subject-analytics-section">
                <h2>📚 Subject-wise Performance</h2>
                <div className="subject-cards-grid">
                  {subjectAnalytics.map((subject, idx) => (
                    <div key={idx} className="subject-analytics-card">
                      <div className="subject-card-header">
                        <h3>{subject.subject}</h3>
                        <span className={`trend-badge ${subject.trend}`}>
                          {subject.trend === 'improving' && '📈'}
                          {subject.trend === 'declining' && '📉'}
                          {subject.trend === 'stable' && '➡️'}
                          {subject.trend === 'improving' && `+${subject.trendPercentage}%`}
                          {subject.trend === 'declining' && `${subject.trendPercentage}%`}
                          {subject.trend === 'stable' && `${subject.trendPercentage}%`}
                        </span>
                      </div>
                      
                      <div className="subject-stats">
                        <div className="stat-row">
                          <span>Average Score:</span>
                          <span className="stat-value">{subject.averageScore}%</span>
                        </div>
                        <div className="stat-row">
                          <span>Tests Given:</span>
                          <span className="stat-value">{subject.testsGiven}</span>
                        </div>
                        <div className="stat-row">
                          <span>Highest:</span>
                          <span className="stat-value success">{subject.highestScore}%</span>
                        </div>
                        <div className="stat-row">
                          <span>Lowest:</span>
                          <span className="stat-value warning">{subject.lowestScore}%</span>
                        </div>
                        <div className="stat-row">
                          <span>Time Spent:</span>
                          <span className="stat-value">{subject.timeSpent}</span>
                        </div>
                      </div>

                      <div className="subject-details">
                        <div className="detail-section">
                          <strong>💪 Strengths:</strong>
                          <p>{subject.strengths.join(', ')}</p>
                        </div>
                        <div className="detail-section">
                          <strong>📉 Needs Work:</strong>
                          <p>{subject.areasToImprove.join(', ')}</p>
                        </div>
                        <div className="detail-section recommendation">
                          <strong>💡 Recommendation:</strong>
                          <p>{subject.recommendation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Grade Cards Tab */}
          {viewMode === 'gradecards' && (
            <div className="gradecards-content">
              <div className="gradecards-header">
                <h2>📝 Detailed Grade Cards</h2>
                <p>Click on any test to view in-depth analysis</p>
              </div>
              
              <div className="gradecards-grid">
                {testGradeCards.map((test) => (
                  <div 
                    key={test.id} 
                    className="gradecard-preview"
                    onClick={() => setSelectedTest(test)}
                  >
                    <div className="preview-header">
                      <span className="test-type-tag">{test.testType}</span>
                      <span className={`grade-badge grade-${test.grade.replace('+', 'plus').replace('-', 'minus')}`}>
                        {test.grade}
                      </span>
                    </div>
                    
                    <h3>{test.testName}</h3>
                    <p className="preview-date">{test.date}</p>
                    
                    <div className="preview-score-section">
                      <div className="score-circle-preview">
                        <svg width="80" height="80">
                          <circle
                            cx="40"
                            cy="40"
                            r="35"
                            fill="none"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="6"
                          />
                          <circle
                            cx="40"
                            cy="40"
                            r="35"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="6"
                            strokeDasharray={`${(test.score / 100) * 220} 220`}
                            transform="rotate(-90 40 40)"
                            strokeLinecap="round"
                          />
                          <text
                            x="40"
                            y="45"
                            textAnchor="middle"
                            fill="white"
                            fontSize="20"
                            fontWeight="bold"
                          >
                            {test.score}%
                          </text>
                        </svg>
                      </div>
                    </div>
                    
                    <div className="preview-stats">
                      <div className="preview-stat">
                        <span>✓ {test.correctAnswers}</span>
                      </div>
                      <div className="preview-stat">
                        <span>✗ {test.incorrectAnswers}</span>
                      </div>
                      <div className="preview-stat">
                        <span>⏱ {test.timeSpent}m</span>
                      </div>
                    </div>
                    
                    <button className="view-details-btn">View Detailed Analysis →</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Parent Insights Tab */}
          {viewMode === 'insights' && (
            <div className="insights-content">
              <div className="insights-header">
                <h2>💡 Parent Insights & Recommendations</h2>
                <p>AI-powered analysis to help guide your child's learning journey</p>
              </div>

              <div className="insights-grid">
                {parentInsights.map((insight, idx) => (
                  <div key={idx} className={`insight-card ${insight.type}`}>
                    <div className="insight-icon">{insight.icon}</div>
                    <div className="insight-content">
                      <h3>{insight.title}</h3>
                      <p className="insight-description">{insight.description}</p>
                      <div className="insight-action">
                        <strong>Recommended Action:</strong>
                        <p>{insight.action}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary Report for Parents */}
              <div className="parent-summary-section">
                <h2>📋 Executive Summary</h2>
                <div className="summary-card">
                  <div className="summary-row">
                    <span className="summary-icon">🎯</span>
                    <div className="summary-content">
                      <strong>Overall Performance:</strong>
                      <p>Your child is performing above average (78% overall, Top 12%). Strong in logical thinking (MAT), needs improvement in Math and Science.</p>
                    </div>
                  </div>
                  
                  <div className="summary-row">
                    <span className="summary-icon">📈</span>
                    <div className="summary-content">
                      <strong>Progress Trend:</strong>
                      <p>+12% improvement this month. Showing consistent growth in most areas with good study habits (12-day streak).</p>
                    </div>
                  </div>
                  
                  <div className="summary-row">
                    <span className="summary-icon">⚠️</span>
                    <div className="summary-content">
                      <strong>Areas Needing Attention:</strong>
                      <p>Science (declining -8%), Math Algebra (72% avg), Time Management (20-47% slower on some tests).</p>
                    </div>
                  </div>
                  
                  <div className="summary-row">
                    <span className="summary-icon">💪</span>
                    <div className="summary-content">
                      <strong>Key Strengths:</strong>
                      <p>Pattern Recognition, Logical Reasoning, Verbal Analogies, Vocabulary, Basic Math - these are solid foundations to build on.</p>
                    </div>
                  </div>
                  
                  <div className="summary-row">
                    <span className="summary-icon">🎓</span>
                    <div className="summary-content">
                      <strong>Suggested Focus Areas:</strong>
                      <p>1) Science tutoring for physics/chemistry, 2) Daily 30min algebra practice, 3) Timed test practice for speed improvement.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Grade Card Modal */}
        {selectedTest && renderGradeCard(selectedTest)}
      </div>
      <Footer />
    </>
  );
};

export default Statistics;
