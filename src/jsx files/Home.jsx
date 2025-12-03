import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css files/Home.css";
import Footer from "../components/Footer";
import MainNavbar from "../components/MainNavbar";
import Chatbot from "../components/Chatbot";

const Home = () => {
  const navigate = useNavigate();
  
  // Dynamic user data (replace with actual user data from backend/authentication)
  const [userData] = useState({
    userName: "Sumedh",
    grade: "Grade 7",
    totalProgress: 68,
    rank: 142,
    points: 2850,
    streak: 12,
    subjects: [
      { id: 1, name: "Mathematics", icon: "🔢", progress: 75, chapters: 8, completed: 6, color: "#6366f1" },
      { id: 2, name: "Science", icon: "🔬", progress: 82, chapters: 10, completed: 8, color: "#10b981" },
      { id: 3, name: "English", icon: "📖", progress: 60, chapters: 12, completed: 7, color: "#f59e0b" },
      { id: 4, name: "Social Studies", icon: "🌍", progress: 55, chapters: 9, completed: 5, color: "#ec4899" }
    ],
    recentActivities: [
      { id: 1, type: "lesson", title: "Algebra - Quadratic Equations", time: "2 hours ago", icon: "✅", status: "completed" },
      { id: 2, type: "test", title: "Science Quiz - Chapter 5", time: "5 hours ago", icon: "📝", score: 85 },
      { id: 3, type: "achievement", title: "Earned 'Week Warrior' Badge", time: "1 day ago", icon: "🏆" },
      { id: 4, type: "lesson", title: "English - Grammar Basics", time: "2 days ago", icon: "✅", status: "completed" }
    ],
    upcomingTasks: [
      { id: 1, title: "Complete Geometry Chapter", subject: "Mathematics", dueDate: "Today", priority: "high", icon: "🔢" },
      { id: 2, title: "Science Lab Report", subject: "Science", dueDate: "Tomorrow", priority: "medium", icon: "🔬" },
      { id: 3, title: "English Essay Submission", subject: "English", dueDate: "In 3 days", priority: "low", icon: "📖" }
    ],
    recommendations: [
      { id: 1, title: "Practice More Algebra", description: "Strengthen your weak areas", icon: "💪", type: "practice" },
      { id: 2, title: "Science Video: Cell Structure", description: "Visual learning supplement", icon: "🎥", type: "video" },
      { id: 3, title: "English Reading Challenge", description: "Improve comprehension skills", icon: "📚", type: "challenge" }
    ],
    weeklyGoals: [
      { id: 1, goal: "Complete 5 lessons", current: 3, target: 5, icon: "📚" },
      { id: 2, goal: "Score 80%+ in tests", current: 2, target: 3, icon: "🎯" },
      { id: 3, goal: "Study 10 hours", current: 7, target: 10, icon: "⏰" }
    ]
  });

  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  // Update date every minute
  useEffect(() => {
    const dateInterval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => clearInterval(dateInterval);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (time) => {
    return time.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  return (
    <>
      <MainNavbar />
      <div className="home-page">
        
        {/* Main Dashboard Section */}
        <section className="home-section-1">
          <div className="welcome-dashboard">
            
            {/* Hero Header */}
            <div className="dashboard-hero">
              <div className="hero-content">
                <h1 className="hero-title">
                  Welcome Back, <span className="username-highlight">{userData.userName}!</span>
                </h1>
                <p className="hero-subtitle">{userData.grade} • Let's make today count! 🚀</p>
                
                {/* Date and Time Display */}
                <div className="datetime-display">
                  <div className="date-info">
                    <span className="date-icon">📅</span>
                    <span>{formatDate(currentDate)}</span>
                  </div>
                  <div className="time-info">
                    <span className="time-icon">🕐</span>
                    <span>{formatTime(currentTime)}</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats Cards */}
              <div className="quick-stats">
                <div className="stat-box">
                  <div className="stat-icon">🔥</div>
                  <div className="stat-info">
                    <div className="stat-value">{userData.streak}</div>
                    <div className="stat-label">Day Streak</div>
                  </div>
                </div>
                <div className="stat-box">
                  <div className="stat-icon">⭐</div>
                  <div className="stat-info">
                    <div className="stat-value">{userData.points}</div>
                    <div className="stat-label">Points</div>
                  </div>
                </div>
                <div className="stat-box">
                  <div className="stat-icon">🏆</div>
                  <div className="stat-info">
                    <div className="stat-value">#{userData.rank}</div>
                    <div className="stat-label">Rank</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="dashboard-grid">
              
              {/* Left Column - Main Content */}
              <div className="dashboard-main-column">
                
                {/* Overall Progress Card */}
                <div className="progress-overview-card">
                  <div className="card-header-flex">
                    <h3 className="card-title">📊 Overall Progress</h3>
                    <span className="progress-percentage-badge">{userData.totalProgress}%</span>
                  </div>
                  <div className="progress-bar-large">
                    <div 
                      className="progress-fill-large" 
                      style={{ width: `${userData.totalProgress}%` }}
                    ></div>
                  </div>
                  <p className="progress-description">
                    You're doing great! Keep up the momentum to reach your goals.
                  </p>
                </div>

                {/* Subjects Grid */}
                <div className="subjects-section">
                  <h3 className="section-title">📚 Your Subjects</h3>
                  <div className="subjects-grid">
                    {userData.subjects.map(subject => (
                      <div 
                        key={subject.id} 
                        className="subject-card"
                        onClick={() => navigate('/settings')}
                      >
                        <div className="subject-header-flex">
                          <span className="subject-icon">{subject.icon}</span>
                          <h4 className="subject-name">{subject.name}</h4>
                        </div>
                        <div className="subject-progress-info">
                          <span className="chapters-info">
                            {subject.completed}/{subject.chapters} Chapters
                          </span>
                          <span className="progress-percent">{subject.progress}%</span>
                        </div>
                        <div className="subject-progress-bar">
                          <div 
                            className="subject-progress-fill" 
                            style={{ 
                              width: `${subject.progress}%`,
                              background: subject.color
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="recent-activity-section">
                  <h3 className="section-title">📋 Recent Activity</h3>
                  <div className="activity-list">
                    {userData.recentActivities.map(activity => (
                      <div key={activity.id} className="activity-item">
                        <div className="activity-icon-circle">{activity.icon}</div>
                        <div className="activity-content">
                          <h4 className="activity-title">{activity.title}</h4>
                          <span className="activity-time">{activity.time}</span>
                        </div>
                        {activity.score && (
                          <div className="activity-score">Score: {activity.score}%</div>
                        )}
                        {activity.status && (
                          <div className="activity-status">{activity.status}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="dashboard-sidebar">
                
                {/* Upcoming Tasks */}
                <div className="upcoming-tasks-card">
                  <h3 className="card-title">📌 Upcoming Tasks</h3>
                  <div className="tasks-list">
                    {userData.upcomingTasks.map(task => (
                      <div key={task.id} className="task-item">
                        <div className="task-priority-indicator" style={{ background: getPriorityColor(task.priority) }}></div>
                        <div className="task-info">
                          <span className="task-icon">{task.icon}</span>
                          <div className="task-details">
                            <h5 className="task-title">{task.title}</h5>
                            <span className="task-subject">{task.subject}</span>
                          </div>
                        </div>
                        <span className="task-due">{task.dueDate}</span>
                      </div>
                    ))}
                  </div>
                  <button className="view-all-btn" onClick={() => navigate('/settings')}>
                    View All Tasks →
                  </button>
                </div>

                {/* Weekly Goals */}
                <div className="weekly-goals-card">
                  <h3 className="card-title">🎯 Weekly Goals</h3>
                  <div className="goals-list">
                    {userData.weeklyGoals.map(goal => (
                      <div key={goal.id} className="goal-item">
                        <div className="goal-header">
                          <span className="goal-icon">{goal.icon}</span>
                          <span className="goal-text">{goal.goal}</span>
                        </div>
                        <div className="goal-progress-container">
                          <div className="goal-progress-bar">
                            <div 
                              className="goal-progress-fill" 
                              style={{ width: `${(goal.current / goal.target) * 100}%` }}
                            ></div>
                          </div>
                          <span className="goal-count">{goal.current}/{goal.target}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="recommendations-card">
                  <h3 className="card-title">💡 Recommended for You</h3>
                  <div className="recommendations-list">
                    {userData.recommendations.map(rec => (
                      <div 
                        key={rec.id} 
                        className="recommendation-item"
                        onClick={() => navigate('/settings')}
                      >
                        <span className="rec-icon">{rec.icon}</span>
                        <div className="rec-content">
                          <h5 className="rec-title">{rec.title}</h5>
                          <p className="rec-description">{rec.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="dashboard-cta">
              <button className="continue-learning-btn" onClick={() => navigate('/settings')}>
                <span>Continue Learning</span>
                <span className="btn-icon">→</span>
              </button>
            </div>
          </div>
        </section>

      </div>
      <Footer />
      
      {/* Floating Chatbot */}
      <Chatbot />
    </>
  );
};

export default Home;