import React, { useState, useEffect } from 'react';
import '../css files/Statistics.css';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/StarBg';

const Statistics = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('month'); // week, month, year, all
  const [selectedSubject, setSelectedSubject] = useState('all');

  // Comprehensive Analytics Data
  const analyticsData = {
    overview: {
      totalTests: 156,
      totalPractice: 89,
      studyHours: 245.5,
      currentStreak: 18,
      longestStreak: 32,
      averageScore: 78.5,
      improvement: 15.2,
      rank: 142,
      totalStudents: 2450,
      percentile: 94
    },
    
    weeklyProgress: [
      { week: 'Week 1', score: 65, tests: 4, hours: 8 },
      { week: 'Week 2', score: 70, tests: 5, hours: 10 },
      { week: 'Week 3', score: 73, tests: 6, hours: 12 },
      { week: 'Week 4', score: 78, tests: 7, hours: 14 }
    ],
    
    monthlyProgress: [
      { month: 'Aug', score: 62, tests: 18, hours: 42 },
      { month: 'Sep', score: 68, tests: 22, hours: 51 },
      { month: 'Oct', score: 72, tests: 25, hours: 58 },
      { month: 'Nov', score: 75, tests: 28, hours: 62 },
      { month: 'Dec', score: 78, tests: 31, hours: 68 },
      { month: 'Jan', score: 80, tests: 32, hours: 70 }
    ],
    
    subjectPerformance: [
      { subject: 'Mathematics', score: 82, tests: 45, improvement: 18, trend: 'up', color: '#3b82f6' },
      { subject: 'Science', score: 76, tests: 38, improvement: 12, trend: 'up', color: '#10b981' },
      { subject: 'English', score: 85, tests: 42, improvement: 8, trend: 'up', color: '#f59e0b' },
      { subject: 'Social Studies', score: 74, tests: 31, improvement: 15, trend: 'up', color: '#8b5cf6' }
    ],
    
    topicStrengths: [
      { topic: 'Algebra', mastery: 92, tests: 28 },
      { topic: 'Geometry', mastery: 88, tests: 24 },
      { topic: 'Logical Reasoning', mastery: 95, tests: 32 },
      { topic: 'Vocabulary', mastery: 90, tests: 26 },
      { topic: 'Reading Comprehension', mastery: 86, tests: 22 }
    ],
    
    topicWeaknesses: [
      { topic: 'Physics - Mechanics', mastery: 58, tests: 15 },
      { topic: 'Chemistry - Equations', mastery: 62, tests: 12 },
      { topic: 'Trigonometry', mastery: 65, tests: 18 },
      { topic: 'Grammar', mastery: 68, tests: 14 }
    ],
    
    timeAnalysis: {
      peakPerformanceTime: '10 AM - 12 PM',
      averageStudySession: 45,
      totalSessions: 156,
      weekdayAvg: 52,
      weekendAvg: 38,
      hourlyDistribution: [
        { hour: '6-8 AM', sessions: 12, score: 72 },
        { hour: '8-10 AM', sessions: 28, score: 76 },
        { hour: '10-12 PM', sessions: 35, score: 82 },
        { hour: '2-4 PM', sessions: 22, score: 74 },
        { hour: '4-6 PM', sessions: 18, score: 70 },
        { hour: '6-8 PM', sessions: 25, score: 78 },
        { hour: '8-10 PM', sessions: 16, score: 73 }
      ]
    },
    
    accuracyTrends: {
      overall: 78.5,
      easy: 94.2,
      medium: 76.8,
      hard: 58.3,
      timeVsAccuracy: [
        { time: '< 1 min', accuracy: 92 },
        { time: '1-2 min', accuracy: 85 },
        { time: '2-3 min', accuracy: 78 },
        { time: '3-5 min', accuracy: 72 },
        { time: '> 5 min', accuracy: 65 }
      ]
    },
    
    recentTests: [
      { id: 1, name: 'MAT - Full Mock Test', date: '2026-01-20', score: 85, rank: 125, percentile: 95 },
      { id: 2, name: 'SAT Math Practice', date: '2026-01-18', score: 82, rank: 142, percentile: 92 },
      { id: 3, name: 'Science Quiz', date: '2026-01-15', score: 78, rank: 158, percentile: 90 },
      { id: 4, name: 'English Comprehension', date: '2026-01-12', score: 88, rank: 98, percentile: 96 },
      { id: 5, name: 'MAT - Reasoning', date: '2026-01-10', score: 80, rank: 135, percentile: 93 }
    ],
    
    achievements: [
      { id: 1, title: '100 Tests Completed', icon: '🎯', date: '2025-12-15', rarity: 'gold' },
      { id: 2, title: '30-Day Streak', icon: '🔥', date: '2025-11-20', rarity: 'platinum' },
      { id: 3, title: 'Top 10% Student', icon: '⭐', date: '2026-01-01', rarity: 'diamond' },
      { id: 4, title: 'Perfect Score Master', icon: '💯', date: '2025-12-28', rarity: 'gold' },
      { id: 5, title: '200+ Study Hours', icon: '📚', date: '2026-01-15', rarity: 'silver' }
    ],
    
    recommendations: [
      {
        type: 'urgent',
        title: 'Physics Mechanics Needs Attention',
        description: 'Your performance in Physics Mechanics has dropped to 58%. Consider booking a tutoring session.',
        action: 'Schedule Tutoring'
      },
      {
        type: 'improvement',
        title: 'Trigonometry Practice',
        description: 'Regular practice in Trigonometry can boost your score by 15-20%.',
        action: 'Start Practice'
      },
      {
        type: 'strength',
        title: 'Maintain Logical Reasoning Excellence',
        description: 'You\'re in the top 5% for Logical Reasoning. Keep up the great work!',
        action: 'View Details'
      }
    ]
  };

  // Progress Chart Component (SVG-based)
  const ProgressChart = ({ data, type = 'line' }) => {
    const maxScore = 100;
    const chartHeight = 200;
    const chartWidth = 600;
    const padding = 40;
    
    const points = data.map((item, index) => {
      const x = (chartWidth - 2 * padding) / (data.length - 1) * index + padding;
      const y = chartHeight - (item.score / maxScore * (chartHeight - 2 * padding)) - padding;
      return `${x},${y}`;
    }).join(' ');
    
    return (
      <svg className="progress-chart" viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map(value => {
          const y = chartHeight - (value / maxScore * (chartHeight - 2 * padding)) - padding;
          return (
            <g key={value}>
              <line
                x1={padding}
                y1={y}
                x2={chartWidth - padding}
                y2={y}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
              <text x={padding - 10} y={y + 5} fill="rgba(255,255,255,0.5)" fontSize="12" textAnchor="end">
                {value}
              </text>
            </g>
          );
        })}
        
        {/* Line chart */}
        <polyline
          points={points}
          fill="none"
          stroke="#cc4915"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Gradient fill */}
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#cc4915" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#cc4915" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon
          points={`${padding},${chartHeight - padding} ${points} ${chartWidth - padding},${chartHeight - padding}`}
          fill="url(#chartGradient)"
        />
        
        {/* Data points */}
        {data.map((item, index) => {
          const x = (chartWidth - 2 * padding) / (data.length - 1) * index + padding;
          const y = chartHeight - (item.score / maxScore * (chartHeight - 2 * padding)) - padding;
          return (
            <g key={index}>
              <circle cx={x} cy={y} r="5" fill="#cc4915" stroke="white" strokeWidth="2" />
              <text x={x} y={chartHeight - padding + 20} fill="rgba(255,255,255,0.7)" fontSize="12" textAnchor="middle">
                {item.month || item.week || index + 1}
              </text>
            </g>
          );
        })}
      </svg>
    );
  };

  // Bar Chart Component
  const BarChart = ({ data, metric = 'score' }) => {
    const maxValue = Math.max(...data.map(item => item[metric]));
    const chartHeight = 250;
    
    return (
      <div className="bar-chart">
        {data.map((item, index) => (
          <div key={index} className="bar-item">
            <div className="bar-container">
              <div 
                className="bar-fill" 
                style={{ 
                  height: `${(item[metric] / maxValue) * 100}%`,
                  backgroundColor: item.color || '#cc4915'
                }}
              >
                <span className="bar-value">{item[metric]}{metric === 'mastery' ? '%' : ''}</span>
              </div>
            </div>
            <span className="bar-label">{item.subject || item.topic}</span>
          </div>
        ))}
      </div>
    );
  };

  // Circular Progress Component
  const CircularProgress = ({ value, max = 100, size = 120, label }) => {
    const percentage = (value / max) * 100;
    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    
    return (
      <div className="circular-progress">
        <svg width={size} height={size} viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#cc4915"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
            style={{ transition: 'stroke-dashoffset 1s ease' }}
          />
          <text
            x="50"
            y="50"
            textAnchor="middle"
            dy="7"
            fontSize="20"
            fontWeight="bold"
            fill="white"
          >
            {Math.round(percentage)}%
          </text>
        </svg>
        {label && <p className="progress-label">{label}</p>}
      </div>
    );
  };

  return (
    <>
      <MainNavbar />
      <ParticleBackground />
      <div className="stats-container">
        <div className="stats-content">
          
          {/* Header */}
          <div className="stats-header">
            <div className="stats-header-left">
              <h1 className="stats-title">Performance Analytics</h1>
              <p className="stats-subtitle">Comprehensive insights into your learning journey</p>
            </div>
            <div className="stats-header-right">
              <select 
                className="time-range-select" 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
                <option value="all">All Time</option>
              </select>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="stats-tabs">
            <button 
              className={`stats-tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <span className="tab-icon">📊</span>
              Overview
            </button>
            <button 
              className={`stats-tab ${activeTab === 'performance' ? 'active' : ''}`}
              onClick={() => setActiveTab('performance')}
            >
              <span className="tab-icon">📈</span>
              Performance
            </button>
            <button 
              className={`stats-tab ${activeTab === 'subjects' ? 'active' : ''}`}
              onClick={() => setActiveTab('subjects')}
            >
              <span className="tab-icon">📚</span>
              Subjects
            </button>
            <button 
              className={`stats-tab ${activeTab === 'insights' ? 'active' : ''}`}
              onClick={() => setActiveTab('insights')}
            >
              <span className="tab-icon">💡</span>
              Insights
            </button>
          </div>

          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="stats-section">
              
              {/* Key Metrics */}
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-icon">🎯</div>
                  <div className="metric-content">
                    <h3 className="metric-value">{analyticsData.overview.totalTests}</h3>
                    <p className="metric-label">Total Tests</p>
                    <span className="metric-change positive">+12 this month</span>
                  </div>
                </div>
                
                <div className="metric-card">
                  <div className="metric-icon">📝</div>
                  <div className="metric-content">
                    <h3 className="metric-value">{analyticsData.overview.totalPractice}</h3>
                    <p className="metric-label">Practice Sessions</p>
                    <span className="metric-change positive">+8 this week</span>
                  </div>
                </div>
                
                <div className="metric-card">
                  <div className="metric-icon">⏱️</div>
                  <div className="metric-content">
                    <h3 className="metric-value">{analyticsData.overview.studyHours}h</h3>
                    <p className="metric-label">Study Hours</p>
                    <span className="metric-change positive">+15h this month</span>
                  </div>
                </div>
                
                <div className="metric-card">
                  <div className="metric-icon">🔥</div>
                  <div className="metric-content">
                    <h3 className="metric-value">{analyticsData.overview.currentStreak}</h3>
                    <p className="metric-label">Day Streak</p>
                    <span className="metric-info">Best: {analyticsData.overview.longestStreak} days</span>
                  </div>
                </div>
                
                <div className="metric-card highlighted">
                  <div className="metric-icon">⭐</div>
                  <div className="metric-content">
                    <h3 className="metric-value">{analyticsData.overview.averageScore}%</h3>
                    <p className="metric-label">Average Score</p>
                    <span className="metric-change positive">+{analyticsData.overview.improvement}% improvement</span>
                  </div>
                </div>
                
                <div className="metric-card highlighted">
                  <div className="metric-icon">🏆</div>
                  <div className="metric-content">
                    <h3 className="metric-value">#{analyticsData.overview.rank}</h3>
                    <p className="metric-label">Your Rank</p>
                    <span className="metric-info">Top {analyticsData.overview.percentile}%</span>
                  </div>
                </div>
              </div>

              {/* Progress Chart */}
              <div className="chart-card">
                <div className="chart-header">
                  <h3 className="chart-title">Score Progression</h3>
                  <p className="chart-subtitle">Your performance trend over the last 6 months</p>
                </div>
                <ProgressChart data={analyticsData.monthlyProgress} />
              </div>

              {/* Recent Achievements */}
              <div className="achievements-section">
                <h3 className="section-title">🏅 Recent Achievements</h3>
                <div className="achievements-grid">
                  {analyticsData.achievements.map(achievement => (
                    <div key={achievement.id} className={`achievement-card ${achievement.rarity}`}>
                      <div className="achievement-icon">{achievement.icon}</div>
                      <h4 className="achievement-title">{achievement.title}</h4>
                      <p className="achievement-date">{new Date(achievement.date).toLocaleDateString()}</p>
                      <span className={`achievement-badge ${achievement.rarity}`}>{achievement.rarity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PERFORMANCE TAB */}
          {activeTab === 'performance' && (
            <div className="stats-section">
              
              {/* Accuracy Analysis */}
              <div className="performance-overview">
                <div className="accuracy-card">
                  <h3 className="card-title">Overall Accuracy</h3>
                  <CircularProgress 
                    value={analyticsData.accuracyTrends.overall} 
                    size={150}
                    label="Average Accuracy"
                  />
                </div>
                
                <div className="difficulty-breakdown">
                  <h3 className="card-title">Difficulty-wise Accuracy</h3>
                  <div className="difficulty-bars">
                    <div className="difficulty-item">
                      <span className="diff-label">Easy</span>
                      <div className="diff-bar-container">
                        <div className="diff-bar" style={{ width: `${analyticsData.accuracyTrends.easy}%`, backgroundColor: '#10b981' }}>
                          <span className="diff-value">{analyticsData.accuracyTrends.easy}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="difficulty-item">
                      <span className="diff-label">Medium</span>
                      <div className="diff-bar-container">
                        <div className="diff-bar" style={{ width: `${analyticsData.accuracyTrends.medium}%`, backgroundColor: '#f59e0b' }}>
                          <span className="diff-value">{analyticsData.accuracyTrends.medium}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="difficulty-item">
                      <span className="diff-label">Hard</span>
                      <div className="diff-bar-container">
                        <div className="diff-bar" style={{ width: `${analyticsData.accuracyTrends.hard}%`, backgroundColor: '#ef4444' }}>
                          <span className="diff-value">{analyticsData.accuracyTrends.hard}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Time Analysis */}
              <div className="chart-card">
                <div className="chart-header">
                  <h3 className="chart-title">⏰ Peak Performance Time</h3>
                  <p className="chart-subtitle">Your best performance is at {analyticsData.timeAnalysis.peakPerformanceTime}</p>
                </div>
                <div className="time-distribution">
                  {analyticsData.timeAnalysis.hourlyDistribution.map((slot, index) => (
                    <div key={index} className="time-slot">
                      <div className="slot-header">
                        <span className="slot-time">{slot.hour}</span>
                        <span className="slot-score">{slot.score}%</span>
                      </div>
                      <div className="slot-bar-container">
                        <div 
                          className="slot-bar" 
                          style={{ 
                            width: `${(slot.sessions / 35) * 100}%`,
                            backgroundColor: slot.score >= 80 ? '#10b981' : slot.score >= 70 ? '#f59e0b' : '#ef4444'
                          }}
                        >
                          <span className="slot-sessions">{slot.sessions} sessions</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Tests Table */}
              <div className="recent-tests-card">
                <h3 className="card-title">📋 Recent Test Results</h3>
                <div className="tests-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Test Name</th>
                        <th>Date</th>
                        <th>Score</th>
                        <th>Rank</th>
                        <th>Percentile</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {analyticsData.recentTests.map(test => (
                        <tr key={test.id}>
                          <td className="test-name">{test.name}</td>
                          <td>{new Date(test.date).toLocaleDateString()}</td>
                          <td className="test-score">{test.score}%</td>
                          <td>#{test.rank}</td>
                          <td className="test-percentile">{test.percentile}%</td>
                          <td>
                            <span className={`status-badge ${test.score >= 80 ? 'excellent' : test.score >= 60 ? 'good' : 'needs-work'}`}>
                              {test.score >= 80 ? '🌟 Excellent' : test.score >= 60 ? '👍 Good' : '📈 Practice'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* SUBJECTS TAB */}
          {activeTab === 'subjects' && (
            <div className="stats-section">
              
              {/* Subject Performance */}
              <div className="chart-card">
                <div className="chart-header">
                  <h3 className="chart-title">Subject-wise Performance</h3>
                  <p className="chart-subtitle">Overall performance across all subjects</p>
                </div>
                <BarChart data={analyticsData.subjectPerformance} metric="score" />
              </div>

              {/* Strengths and Weaknesses */}
              <div className="strengths-weaknesses-grid">
                <div className="strengths-card">
                  <h3 className="card-title">💪 Your Strengths</h3>
                  <div className="topic-list">
                    {analyticsData.topicStrengths.map((topic, index) => (
                      <div key={index} className="topic-item strength">
                        <div className="topic-header">
                          <span className="topic-name">{topic.topic}</span>
                          <span className="topic-mastery">{topic.mastery}%</span>
                        </div>
                        <div className="topic-progress-bar">
                          <div 
                            className="topic-progress-fill" 
                            style={{ width: `${topic.mastery}%`, backgroundColor: '#10b981' }}
                          ></div>
                        </div>
                        <span className="topic-tests">{topic.tests} tests completed</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="weaknesses-card">
                  <h3 className="card-title">🎯 Areas to Improve</h3>
                  <div className="topic-list">
                    {analyticsData.topicWeaknesses.map((topic, index) => (
                      <div key={index} className="topic-item weakness">
                        <div className="topic-header">
                          <span className="topic-name">{topic.topic}</span>
                          <span className="topic-mastery">{topic.mastery}%</span>
                        </div>
                        <div className="topic-progress-bar">
                          <div 
                            className="topic-progress-fill" 
                            style={{ width: `${topic.mastery}%`, backgroundColor: '#ef4444' }}
                          ></div>
                        </div>
                        <span className="topic-tests">{topic.tests} tests completed</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Subject Cards Grid */}
              <div className="subject-cards-grid">
                {analyticsData.subjectPerformance.map((subject, index) => (
                  <div key={index} className="subject-detail-card" style={{ borderTopColor: subject.color }}>
                    <div className="subject-card-header">
                      <h4 className="subject-card-title">{subject.subject}</h4>
                      <span className={`subject-trend ${subject.trend}`}>
                        {subject.trend === 'up' ? '📈' : '📉'} {subject.improvement}%
                      </span>
                    </div>
                    <div className="subject-card-body">
                      <CircularProgress value={subject.score} size={100} />
                      <div className="subject-stats">
                        <div className="subject-stat">
                          <span className="stat-label">Tests Taken</span>
                          <span className="stat-value">{subject.tests}</span>
                        </div>
                        <div className="subject-stat">
                          <span className="stat-label">Improvement</span>
                          <span className="stat-value positive">+{subject.improvement}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* INSIGHTS TAB */}
          {activeTab === 'insights' && (
            <div className="stats-section">
              
              {/* AI Recommendations */}
              <div className="recommendations-section">
                <h3 className="section-title">🤖 Personalized Recommendations</h3>
                <div className="recommendations-grid">
                  {analyticsData.recommendations.map((rec, index) => (
                    <div key={index} className={`recommendation-card ${rec.type}`}>
                      <div className="rec-header">
                        <span className={`rec-badge ${rec.type}`}>
                          {rec.type === 'urgent' ? '⚠️ Urgent' : rec.type === 'improvement' ? '📈 Improve' : '✨ Strength'}
                        </span>
                      </div>
                      <h4 className="rec-title">{rec.title}</h4>
                      <p className="rec-description">{rec.description}</p>
                      <button className="rec-action-btn">{rec.action} →</button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Study Patterns */}
              <div className="study-patterns-card">
                <h3 className="card-title">📊 Study Patterns Analysis</h3>
                <div className="patterns-grid">
                  <div className="pattern-item">
                    <div className="pattern-icon">⏱️</div>
                    <div className="pattern-content">
                      <h4 className="pattern-value">{analyticsData.timeAnalysis.averageStudySession} min</h4>
                      <p className="pattern-label">Avg Session Length</p>
                      <span className="pattern-insight">Optimal: 45-60 minutes</span>
                    </div>
                  </div>
                  
                  <div className="pattern-item">
                    <div className="pattern-icon">📅</div>
                    <div className="pattern-content">
                      <h4 className="pattern-value">{analyticsData.timeAnalysis.totalSessions}</h4>
                      <p className="pattern-label">Total Sessions</p>
                      <span className="pattern-insight">Great consistency!</span>
                    </div>
                  </div>
                  
                  <div className="pattern-item">
                    <div className="pattern-icon">🌅</div>
                    <div className="pattern-content">
                      <h4 className="pattern-value">{analyticsData.timeAnalysis.weekdayAvg} min</h4>
                      <p className="pattern-label">Weekday Average</p>
                      <span className="pattern-insight">vs {analyticsData.timeAnalysis.weekendAvg} min weekend</span>
                    </div>
                  </div>
                  
                  <div className="pattern-item">
                    <div className="pattern-icon">🎯</div>
                    <div className="pattern-content">
                      <h4 className="pattern-value">{analyticsData.timeAnalysis.peakPerformanceTime}</h4>
                      <p className="pattern-label">Peak Time</p>
                      <span className="pattern-insight">Schedule important tests here</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guardian Summary */}
              <div className="guardian-summary-card">
                <h3 className="card-title">👨‍👩‍👧 Guardian Summary Report</h3>
                <div className="summary-content">
                  <div className="summary-section">
                    <h4 className="summary-section-title">📈 Overall Progress</h4>
                    <p className="summary-text">
                      Your child has shown <strong className="highlight-positive">+{analyticsData.overview.improvement}% improvement</strong> over the past month. 
                      They've completed <strong>{analyticsData.overview.totalTests} tests</strong> and maintained a <strong>{analyticsData.overview.currentStreak}-day study streak</strong>. 
                      Current rank: <strong>#{analyticsData.overview.rank}</strong> out of {analyticsData.overview.totalStudents} students (Top {analyticsData.overview.percentile}%).
                    </p>
                  </div>
                  
                  <div className="summary-section">
                    <h4 className="summary-section-title">💪 Key Strengths</h4>
                    <ul className="summary-list">
                      {analyticsData.topicStrengths.slice(0, 3).map((topic, index) => (
                        <li key={index}>
                          <strong>{topic.topic}</strong> - {topic.mastery}% mastery ({topic.tests} tests)
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="summary-section">
                    <h4 className="summary-section-title">🎯 Areas Needing Attention</h4>
                    <ul className="summary-list warning">
                      {analyticsData.topicWeaknesses.slice(0, 3).map((topic, index) => (
                        <li key={index}>
                          <strong>{topic.topic}</strong> - {topic.mastery}% (Needs practice)
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="summary-section">
                    <h4 className="summary-section-title">💡 Recommendations</h4>
                    <ul className="summary-list">
                      <li>Schedule regular practice sessions for weaker topics (30 min daily)</li>
                      <li>Maintain current study streak - consistency is key</li>
                      <li>Focus on {analyticsData.timeAnalysis.peakPerformanceTime} for important tests</li>
                      <li>Consider tutoring for Physics and Chemistry topics</li>
                    </ul>
                  </div>
                  
                  <button className="download-report-btn">
                    📄 Download Detailed PDF Report
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Statistics;
