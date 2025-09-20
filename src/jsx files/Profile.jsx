import React, { useState } from 'react';
import '../css files/Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    school: 'Central High School',
    grade: '10th Grade',
    joinDate: 'September 2023'
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReports: true,
    achievementAlerts: true,
    studyReminders: true,
    darkMode: false
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original values if needed
  };

  const handleInputChange = (field, value) => {
    setUserInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePreferenceChange = (pref) => {
    setPreferences(prev => ({
      ...prev,
      [pref]: !prev[pref]
    }));
  };

  const stats = [
    { icon: '📚', value: '45', label: 'Lessons Completed' },
    { icon: '🎯', value: '12', label: 'Tests Passed' },
    { icon: '🔥', value: '23', label: 'Day Streak' },
    { icon: '⭐', value: '1,250', label: 'Points Earned' }
  ];

  const achievements = [
    { icon: '🏆', title: 'First Test Pass', description: 'Passed your first practice test', unlocked: true },
    { icon: '📖', title: 'Study Streak', description: 'Studied for 7 consecutive days', unlocked: true },
    { icon: '🎯', title: 'Perfect Score', description: 'Got 100% on a practice test', unlocked: true },
    { icon: '⚡', title: 'Speed Demon', description: 'Complete a test in under 15 minutes', unlocked: false },
    { icon: '🌟', title: 'Rising Star', description: 'Reach 2000 total points', unlocked: false },
    { icon: '🔥', title: 'Fire Streak', description: 'Maintain a 30-day study streak', unlocked: false }
  ];

  const recentActivity = [
    { icon: '📝', action: 'Completed Math Practice Test', time: '2 hours ago' },
    { icon: '📚', action: 'Studied Algebra - Linear Equations', time: '1 day ago' },
    { icon: '🎯', action: 'Achieved 95% on Science Quiz', time: '2 days ago' },
    { icon: '⭐', action: 'Earned "Study Streak" achievement', time: '3 days ago' },
    { icon: '📖', action: 'Started Logic Reasoning course', time: '4 days ago' },
    { icon: '🔥', action: 'Extended study streak to 23 days', time: '5 days ago' }
  ];

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar-section">
            <img 
              src="/api/placeholder/120/120" 
              alt="Profile Avatar" 
              className="profile-avatar"
            />
            <button className="change-avatar-btn" title="Change Avatar">
              📷
            </button>
          </div>
          
          <div className="profile-info">
            {!isEditing ? (
              <>
                <h1>{userInfo.name}</h1>
                <p className="profile-email">{userInfo.email}</p>
                <p className="profile-detail">📱 {userInfo.phone}</p>
                <p className="profile-detail">📍 {userInfo.location}</p>
                <p className="profile-detail">🏫 {userInfo.school}</p>
                <p className="profile-detail">🎓 {userInfo.grade}</p>
                <p className="profile-detail">📅 Joined {userInfo.joinDate}</p>
              </>
            ) : (
              <>
                <input
                  className="profile-input"
                  value={userInfo.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Full Name"
                />
                <input
                  className="profile-input"
                  value={userInfo.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Email"
                />
                <input
                  className="profile-input"
                  value={userInfo.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Phone"
                />
                <input
                  className="profile-input"
                  value={userInfo.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="Location"
                />
                <input
                  className="profile-input"
                  value={userInfo.school}
                  onChange={(e) => handleInputChange('school', e.target.value)}
                  placeholder="School"
                />
                <input
                  className="profile-input"
                  value={userInfo.grade}
                  onChange={(e) => handleInputChange('grade', e.target.value)}
                  placeholder="Grade"
                />
              </>
            )}
          </div>
          
          <div className="profile-actions">
            {!isEditing ? (
              <button className="edit-btn" onClick={handleEdit}>
                ✏️ Edit Profile
              </button>
            ) : (
              <>
                <button className="save-btn" onClick={handleSave}>
                  💾 Save
                </button>
                <button className="cancel-btn" onClick={handleCancel}>
                  ❌ Cancel
                </button>
              </>
            )}
          </div>
        </div>

        <div className="profile-content">
          {/* Stats Section */}
          <div className="profile-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Achievements and Activity */}
          <div className="profile-sections">
            <div className="achievements-section">
              <h2>🏆 Achievements</h2>
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`achievement-item ${achievement.unlocked ? 'unlocked' : 'locked'}`}
                  >
                    <div className="achievement-icon">{achievement.icon}</div>
                    <div className="achievement-info">
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                    </div>
                    {!achievement.unlocked && (
                      <div className="locked-overlay">🔒</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="activity-section">
              <h2>📈 Recent Activity</h2>
              <div className="activity-list">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="activity-item">
                    <div className="activity-icon">{activity.icon}</div>
                    <div className="activity-info">
                      <p>{activity.action}</p>
                      <div className="activity-time">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="preferences-section">
            <h2>⚙️ Preferences</h2>
            <div className="preferences-grid">
              <div className="preference-item">
                <label>📧 Email Notifications</label>
                <input
                  type="checkbox"
                  checked={preferences.emailNotifications}
                  onChange={() => handlePreferenceChange('emailNotifications')}
                />
              </div>
              <div className="preference-item">
                <label>📱 Push Notifications</label>
                <input
                  type="checkbox"
                  checked={preferences.pushNotifications}
                  onChange={() => handlePreferenceChange('pushNotifications')}
                />
              </div>
              <div className="preference-item">
                <label>📊 Weekly Reports</label>
                <input
                  type="checkbox"
                  checked={preferences.weeklyReports}
                  onChange={() => handlePreferenceChange('weeklyReports')}
                />
              </div>
              <div className="preference-item">
                <label>🏆 Achievement Alerts</label>
                <input
                  type="checkbox"
                  checked={preferences.achievementAlerts}
                  onChange={() => handlePreferenceChange('achievementAlerts')}
                />
              </div>
              <div className="preference-item">
                <label>⏰ Study Reminders</label>
                <input
                  type="checkbox"
                  checked={preferences.studyReminders}
                  onChange={() => handlePreferenceChange('studyReminders')}
                />
              </div>
              <div className="preference-item">
                <label>🌙 Dark Mode</label>
                <input
                  type="checkbox"
                  checked={preferences.darkMode}
                  onChange={() => handlePreferenceChange('darkMode')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;