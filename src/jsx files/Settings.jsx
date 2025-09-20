import React, { useState } from 'react';
import '../css files/Settings.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    // Notifications
    emailNotifications: true,
    pushNotifications: false,
    studyReminders: true,
    achievementAlerts: true,
    weeklyReports: true,
    
    // Study Preferences
    dailyGoal: 60,
    reminderTime: '18:00',
    difficulty: 'medium',
    autoPlay: false,
    soundEffects: true,
    
    // Appearance
    darkMode: false,
    fontSize: 'medium',
    theme: 'blue',
    animations: true,
    
    // Account
    profileVisibility: 'friends',
    dataSharing: false,
    autoSave: true,
    twoFactorAuth: false,
    
    // Advanced
    diagnostics: false,
    analytics: true,
    cacheSize: 50
  });

  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleSliderChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: parseInt(value)
    }));
  };

  const handleSelectChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handleTimeChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handleSave = () => {
    // Here you would typically save to backend
    alert('Settings saved successfully!');
  };

  const handleReset = () => {
    // Reset to default values
    if (window.confirm('Are you sure you want to reset all settings to default?')) {
      setSettings({
        emailNotifications: true,
        pushNotifications: false,
        studyReminders: true,
        achievementAlerts: true,
        weeklyReports: true,
        dailyGoal: 60,
        reminderTime: '18:00',
        difficulty: 'medium',
        autoPlay: false,
        soundEffects: true,
        darkMode: false,
        fontSize: 'medium',
        theme: 'blue',
        animations: true,
        profileVisibility: 'friends',
        dataSharing: false,
        autoSave: true,
        twoFactorAuth: false,
        diagnostics: false,
        analytics: true,
        cacheSize: 50
      });
    }
  };

  return (
    <div className="settings-page">
      <div className="settings-container">
        {/* Header */}
        <div className="settings-header">
          <h1>⚙️ Settings</h1>
          <p>Customize your learning experience</p>
        </div>

        <div className="settings-content">
          {/* Notifications Section */}
          <div className="settings-section">
            <h2>🔔 Notifications</h2>
            <div className="settings-grid">
              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-title">Email Notifications</div>
                  <div className="setting-description">Receive updates and announcements via email</div>
                </div>
                <div className="setting-control">
                  <div 
                    className={`toggle-switch ${settings.emailNotifications ? 'active' : ''}`}
                    onClick={() => handleToggle('emailNotifications')}
                  >
                    <div className="toggle-slider"></div>
                  </div>
                </div>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-title">Push Notifications</div>
                  <div className="setting-description">Get instant notifications on your device</div>
                </div>
                <div className="setting-control">
                  <div 
                    className={`toggle-switch ${settings.pushNotifications ? 'active' : ''}`}
                    onClick={() => handleToggle('pushNotifications')}
                  >
                    <div className="toggle-slider"></div>
                  </div>
                </div>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-title">Study Reminders</div>
                  <div className="setting-description">Daily reminders to maintain your study streak</div>
                </div>
                <div className="setting-control">
                  <div 
                    className={`toggle-switch ${settings.studyReminders ? 'active' : ''}`}
                    onClick={() => handleToggle('studyReminders')}
                  >
                    <div className="toggle-slider"></div>
                  </div>
                </div>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-title">Achievement Alerts</div>
                  <div className="setting-description">Get notified when you unlock achievements</div>
                </div>
                <div className="setting-control">
                  <div 
                    className={`toggle-switch ${settings.achievementAlerts ? 'active' : ''}`}
                    onClick={() => handleToggle('achievementAlerts')}
                  >
                    <div className="toggle-slider"></div>
                  </div>
                </div>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-title">Weekly Reports</div>
                  <div className="setting-description">Receive weekly progress summaries</div>
                </div>
                <div className="setting-control">
                  <div 
                    className={`toggle-switch ${settings.weeklyReports ? 'active' : ''}`}
                    onClick={() => handleToggle('weeklyReports')}
                  >
                    <div className="toggle-slider"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Study Preferences Section */}
          <div className="settings-section">
            <h2>📚 Study Preferences</h2>
            <div className="settings-grid">
              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-title">Daily Study Goal</div>
                  <div className="setting-description">Target study time per day (minutes)</div>
                </div>
                <div className="setting-control">
                  <div className="slider-control">
                    <input
                      type="range"
                      min="15"
                      max="240"
                      step="15"
                      value={settings.dailyGoal}
                      onChange={(e) => handleSliderChange('dailyGoal', e.target.value)}
                      className="range-slider"
                    />
                    <div className="slider-value">{settings.dailyGoal}m</div>
                  </div>
                </div>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-title">Study Reminder Time</div>
                  <div className="setting-description">When to send daily study reminders</div>
                </div>
                <div className="setting-control">
                  <input
                    type="time"
                    value={settings.reminderTime}
                    onChange={(e) => handleTimeChange('reminderTime', e.target.value)}
                    className="time-input"
                  />
                </div>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-title">Default Difficulty</div>
                  <div className="setting-description">Starting difficulty for new topics</div>
                </div>
                <div className="setting-control">
                  <select
                    value={settings.difficulty}
                    onChange={(e) => handleSelectChange('difficulty', e.target.value)}
                    className="dropdown-select"
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-title">Auto-play Videos</div>
                  <div className="setting-description">Automatically play lesson videos</div>
                </div>
                <div className="setting-control">
                  <div 
                    className={`toggle-switch ${settings.autoPlay ? 'active' : ''}`}
                    onClick={() => handleToggle('autoPlay')}
                  >
                    <div className="toggle-slider"></div>
                  </div>
                </div>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-title">Sound Effects</div>
                  <div className="setting-description">Play sounds for interactions and achievements</div>
                </div>
                <div className="setting-control">
                  <div 
                    className={`toggle-switch ${settings.soundEffects ? 'active' : ''}`}
                    onClick={() => handleToggle('soundEffects')}
                  >
                    <div className="toggle-slider"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Appearance Section */}
          <div className="settings-section">
            <h2>🎨 Appearance</h2>
            <div className="settings-grid">
              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-title">Dark Mode</div>
                  <div className="setting-description">Switch to dark theme for better viewing</div>
                </div>
                <div className="setting-control">
                  <div 
                    className={`toggle-switch ${settings.darkMode ? 'active' : ''}`}
                    onClick={() => handleToggle('darkMode')}
                  >
                    <div className="toggle-slider"></div>
                  </div>
                </div>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-title">Font Size</div>
                  <div className="setting-description">Adjust text size for better readability</div>
                </div>
                <div className="setting-control">
                  <select
                    value={settings.fontSize}
                    onChange={(e) => handleSelectChange('fontSize', e.target.value)}
                    className="dropdown-select"
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-title">Theme Color</div>
                  <div className="setting-description">Choose your preferred color scheme</div>
                </div>
                <div className="setting-control">
                  <select
                    value={settings.theme}
                    onChange={(e) => handleSelectChange('theme', e.target.value)}
                    className="dropdown-select"
                  >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="purple">Purple</option>
                    <option value="orange">Orange</option>
                  </select>
                </div>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-title">Animations</div>
                  <div className="setting-description">Enable smooth transitions and effects</div>
                </div>
                <div className="setting-control">
                  <div 
                    className={`toggle-switch ${settings.animations ? 'active' : ''}`}
                    onClick={() => handleToggle('animations')}
                  >
                    <div className="toggle-slider"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Account & Privacy Section */}
          <div className="settings-section">
            <h2>🔒 Account & Privacy</h2>
            <div className="settings-grid">
              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-title">Profile Visibility</div>
                  <div className="setting-description">Who can see your profile and progress</div>
                </div>
                <div className="setting-control">
                  <select
                    value={settings.profileVisibility}
                    onChange={(e) => handleSelectChange('profileVisibility', e.target.value)}
                    className="dropdown-select"
                  >
                    <option value="public">Public</option>
                    <option value="friends">Friends Only</option>
                    <option value="private">Private</option>
                  </select>
                </div>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-title">Data Sharing</div>
                  <div className="setting-description">Share anonymous usage data to improve the app</div>
                </div>
                <div className="setting-control">
                  <div 
                    className={`toggle-switch ${settings.dataSharing ? 'active' : ''}`}
                    onClick={() => handleToggle('dataSharing')}
                  >
                    <div className="toggle-slider"></div>
                  </div>
                </div>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-title">Auto-save Progress</div>
                  <div className="setting-description">Automatically save your learning progress</div>
                </div>
                <div className="setting-control">
                  <div 
                    className={`toggle-switch ${settings.autoSave ? 'active' : ''}`}
                    onClick={() => handleToggle('autoSave')}
                  >
                    <div className="toggle-slider"></div>
                  </div>
                </div>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-title">Two-Factor Authentication</div>
                  <div className="setting-description">Add extra security to your account</div>
                </div>
                <div className="setting-control">
                  <div 
                    className={`toggle-switch ${settings.twoFactorAuth ? 'active' : ''}`}
                    onClick={() => handleToggle('twoFactorAuth')}
                  >
                    <div className="toggle-slider"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Section */}
          <div className="settings-section">
            <h2>🔧 Advanced</h2>
            <div className="settings-grid">
              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-title">Diagnostics</div>
                  <div className="setting-description">Enable diagnostic data collection</div>
                </div>
                <div className="setting-control">
                  <div 
                    className={`toggle-switch ${settings.diagnostics ? 'active' : ''}`}
                    onClick={() => handleToggle('diagnostics')}
                  >
                    <div className="toggle-slider"></div>
                  </div>
                </div>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-title">Analytics</div>
                  <div className="setting-description">Track learning analytics and patterns</div>
                </div>
                <div className="setting-control">
                  <div 
                    className={`toggle-switch ${settings.analytics ? 'active' : ''}`}
                    onClick={() => handleToggle('analytics')}
                  >
                    <div className="toggle-slider"></div>
                  </div>
                </div>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <div className="setting-title">Cache Size</div>
                  <div className="setting-description">Amount of data to store offline (MB)</div>
                </div>
                <div className="setting-control">
                  <div className="slider-control">
                    <input
                      type="range"
                      min="10"
                      max="500"
                      step="10"
                      value={settings.cacheSize}
                      onChange={(e) => handleSliderChange('cacheSize', e.target.value)}
                      className="range-slider"
                    />
                    <div className="slider-value">{settings.cacheSize}MB</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Save Settings */}
        <div className="save-settings">
          <button className="save-btn" onClick={handleSave}>
            💾 Save Settings
          </button>
          <button className="reset-btn" onClick={handleReset}>
            🔄 Reset to Default
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;