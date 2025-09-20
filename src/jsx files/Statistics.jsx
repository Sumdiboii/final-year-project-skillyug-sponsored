import React from 'react';
import '../css files/Statistics.css';

const Statistics = () => {
  const overviewStats = [
    {
      icon: '📊',
      value: '87%',
      label: 'Overall Progress',
      change: '+5% this week',
      trend: 'positive'
    },
    {
      icon: '⏱️',
      value: '156',
      label: 'Study Hours',
      change: '+12 hours',
      trend: 'positive'
    },
    {
      icon: '🎯',
      value: '23',
      label: 'Tests Completed',
      change: '+3 this week',
      trend: 'positive'
    },
    {
      icon: '⭐',
      value: '94%',
      label: 'Average Score',
      change: 'No change',
      trend: 'neutral'
    }
  ];

  const weeklyProgress = [
    { day: 'Mon', value: 85, hours: 2.5 },
    { day: 'Tue', value: 92, hours: 3.2 },
    { day: 'Wed', value: 78, hours: 2.1 },
    { day: 'Thu', value: 95, hours: 3.8 },
    { day: 'Fri', value: 88, hours: 2.9 },
    { day: 'Sat', value: 91, hours: 3.5 },
    { day: 'Sun', value: 87, hours: 2.7 }
  ];

  const subjectPerformance = [
    { subject: 'Mathematics', score: 92, color: '#4CAF50' },
    { subject: 'Science', score: 88, color: '#2196F3' },
    { subject: 'Logic Reasoning', score: 85, color: '#FF9800' },
    { subject: 'General Knowledge', score: 90, color: '#9C27B0' }
  ];

  const studyTimeBreakdown = [
    { subject: 'Mathematics', time: '45h 32m' },
    { subject: 'Science', time: '38h 15m' },
    { subject: 'Logic Reasoning', time: '42h 28m' },
    { subject: 'General Knowledge', time: '29h 45m' }
  ];

  const recentTests = [
    {
      name: 'Math - Algebra Quiz',
      date: '2 days ago',
      score: 95,
      category: 'excellent'
    },
    {
      name: 'Science - Physics Test',
      date: '4 days ago',
      score: 87,
      category: 'good'
    },
    {
      name: 'Logic - Pattern Recognition',
      date: '1 week ago',
      score: 92,
      category: 'excellent'
    },
    {
      name: 'GK - Current Affairs',
      date: '1 week ago',
      score: 78,
      category: 'needs-improvement'
    },
    {
      name: 'Math - Geometry Quiz',
      date: '2 weeks ago',
      score: 89,
      category: 'good'
    }
  ];

  const maxValue = Math.max(...weeklyProgress.map(item => item.value));

  return (
    <div className="statistics-page">
      <div className="statistics-container">
        {/* Header */}
        <div className="statistics-header">
          <h1>📈 Your Learning Statistics</h1>
          <p>Track your progress and analyze your performance</p>
        </div>

        {/* Overview Stats */}
        <div className="stats-overview">
          {overviewStats.map((stat, index) => (
            <div key={index} className="overview-card">
              <div className="overview-icon">{stat.icon}</div>
              <div className="overview-value">{stat.value}</div>
              <div className="overview-label">{stat.label}</div>
              <div className={`overview-change ${stat.trend}`}>
                {stat.change}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="stats-content">
          {/* Progress Chart */}
          <div className="chart-section">
            <h2>📊 Weekly Progress</h2>
            <div className="chart-container">
              <div className="progress-chart">
                <div className="chart-bars">
                  {weeklyProgress.map((day, index) => (
                    <div key={index} className="chart-bar">
                      <div 
                        className="bar"
                        style={{ height: `${(day.value / maxValue) * 100}%` }}
                      >
                        <div className="bar-value">{day.value}%</div>
                      </div>
                      <div className="bar-label">{day.day}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Subject Performance */}
          <div className="performance-breakdown">
            <h2>🎯 Subject Performance</h2>
            <div className="subject-performance">
              {subjectPerformance.map((subject, index) => (
                <div key={index} className="subject-item">
                  <div className="subject-header">
                    <span className="subject-name">{subject.subject}</span>
                    <span className="subject-score">{subject.score}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ 
                        width: `${subject.score}%`,
                        background: subject.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Statistics */}
        <div className="detailed-stats">
          {/* Study Time Breakdown */}
          <div className="study-time-section">
            <h2>⏰ Study Time Breakdown</h2>
            <div className="time-breakdown">
              {studyTimeBreakdown.map((item, index) => (
                <div key={index} className="time-item">
                  <span className="time-subject">{item.subject}</span>
                  <span className="time-duration">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Test Results */}
          <div className="test-results-section">
            <h2>📝 Recent Test Results</h2>
            <div className="test-grid">
              {recentTests.map((test, index) => (
                <div key={index} className={`test-item ${test.category}`}>
                  <div className="test-info">
                    <h4>{test.name}</h4>
                    <p>{test.date}</p>
                  </div>
                  <div className={`test-score ${test.category}`}>
                    {test.score}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;