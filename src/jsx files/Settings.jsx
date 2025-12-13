import React, { useState } from 'react';
import '../css files/Settings.css';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';

const Settings = () => {
  const [settings, setSettings] = useState({
    // Notifications
    emailNotifications: true,
    pushNotifications: true,
    studyReminders: true,
    achievementAlerts: true,
    weeklyReports: true,
    testResultsNotif: true,
    streakReminders: true,
    
    // Study Preferences
    dailyGoal: 60,
    reminderTime: '18:00',
    difficulty: 'medium',
    autoPlay: false,
    soundEffects: true,
    showHints: true,
    skipIntro: false,
    autoSubmit: false,
    
    // Display Settings
    fontSize: 'medium',
    animations: true,
    reducedMotion: false,
    highContrast: false,
    language: 'english',
    
    // Account & Privacy
    profileVisibility: 'friends',
    dataSharing: false,
    autoSave: true,
    twoFactorAuth: false,
    sessionTimeout: 30,
    showEmail: false,
    showProgress: true,
    
    // Test/Learning Settings
    questionsPerTest: 10,
    timePerQuestion: 60,
    showCorrectAnswer: true,
    allowReview: true,
    randomizeQuestions: true,
    pauseTests: true,
    
    // Performance
    diagnostics: false,
    analytics: true,
    cacheSize: 100,
    autoBackup: true,
    offlineMode: false,
    
    // Accessibility
    screenReader: false,
    keyboardNav: true,
    voiceAssist: false,
    textToSpeech: false
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
    localStorage.setItem('appSettings', JSON.stringify(settings));
    alert('✅ Settings saved successfully!');
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all settings to default?')) {
      const defaultSettings = {
        emailNotifications: true,
        pushNotifications: true,
        studyReminders: true,
        achievementAlerts: true,
        weeklyReports: true,
        testResultsNotif: true,
        streakReminders: true,
        dailyGoal: 60,
        reminderTime: '18:00',
        difficulty: 'medium',
        autoPlay: false,
        soundEffects: true,
        showHints: true,
        skipIntro: false,
        autoSubmit: false,
        fontSize: 'medium',
        animations: true,
        reducedMotion: false,
        highContrast: false,
        language: 'english',
        profileVisibility: 'friends',
        dataSharing: false,
        autoSave: true,
        twoFactorAuth: false,
        sessionTimeout: 30,
        showEmail: false,
        showProgress: true,
        questionsPerTest: 10,
        timePerQuestion: 60,
        showCorrectAnswer: true,
        allowReview: true,
        randomizeQuestions: true,
        pauseTests: true,
        diagnostics: false,
        analytics: true,
        cacheSize: 100,
        autoBackup: true,
        offlineMode: false,
        screenReader: false,
        keyboardNav: true,
        voiceAssist: false,
        textToSpeech: false
      };
      setSettings(defaultSettings);
      alert('✅ Settings reset to default values!');
    }
  };

  const handleExportData = () => {
    const dataStr = JSON.stringify(settings, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'settings-backup.json';
    link.click();
    alert('✅ Settings exported successfully!');
  };

  const handleClearCache = () => {
    if (window.confirm('This will clear all cached data. Continue?')) {
      localStorage.removeItem('cachedData');
      alert('✅ Cache cleared successfully!');
    }
  };

  return (
    <>
      <MainNavbar />
      <div className="settings-section">
        <div className="settings-container">
          {/* Header */}
          <div className="settings-header">
            <h1>⚙️ Settings</h1>
            <p>Customize your learning experience</p>
          </div>

          <div className="settings-content">
            {/* Notifications Section */}
            <div className="settings-category">
              <div className="category-header">
                <span className="category-icon">🔔</span>
                <h2>Notifications</h2>
              </div>
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
                    <div className="setting-description">Receive weekly progress summaries via email</div>
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

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">Test Results</div>
                    <div className="setting-description">Notify when test results are available</div>
                  </div>
                  <div className="setting-control">
                    <div 
                      className={`toggle-switch ${settings.testResultsNotif ? 'active' : ''}`}
                      onClick={() => handleToggle('testResultsNotif')}
                    >
                      <div className="toggle-slider"></div>
                    </div>
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">Streak Reminders</div>
                    <div className="setting-description">Remind me when my streak is about to break</div>
                  </div>
                  <div className="setting-control">
                    <div 
                      className={`toggle-switch ${settings.streakReminders ? 'active' : ''}`}
                      onClick={() => handleToggle('streakReminders')}
                    >
                      <div className="toggle-slider"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Study Preferences Section */}
            <div className="settings-category">
              <div className="category-header">
                <span className="category-icon">📚</span>
                <h2>Study Preferences</h2>
              </div>
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

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">Show Hints</div>
                    <div className="setting-description">Display helpful hints during tests</div>
                  </div>
                  <div className="setting-control">
                    <div 
                      className={`toggle-switch ${settings.showHints ? 'active' : ''}`}
                      onClick={() => handleToggle('showHints')}
                    >
                      <div className="toggle-slider"></div>
                    </div>
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">Skip Intro Screens</div>
                    <div className="setting-description">Skip tutorial and intro messages</div>
                  </div>
                  <div className="setting-control">
                    <div 
                      className={`toggle-switch ${settings.skipIntro ? 'active' : ''}`}
                      onClick={() => handleToggle('skipIntro')}
                    >
                      <div className="toggle-slider"></div>
                    </div>
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">Auto-Submit Tests</div>
                    <div className="setting-description">Automatically submit when time runs out</div>
                  </div>
                  <div className="setting-control">
                    <div 
                      className={`toggle-switch ${settings.autoSubmit ? 'active' : ''}`}
                      onClick={() => handleToggle('autoSubmit')}
                    >
                      <div className="toggle-slider"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Display Settings Section */}
            <div className="settings-category">
              <div className="category-header">
                <span className="category-icon">🎨</span>
                <h2>Display Settings</h2>
              </div>
              <div className="settings-grid">
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
                      <option value="extra-large">Extra Large</option>
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

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">Reduced Motion</div>
                    <div className="setting-description">Minimize animations for accessibility</div>
                  </div>
                  <div className="setting-control">
                    <div 
                      className={`toggle-switch ${settings.reducedMotion ? 'active' : ''}`}
                      onClick={() => handleToggle('reducedMotion')}
                    >
                      <div className="toggle-slider"></div>
                    </div>
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">High Contrast Mode</div>
                    <div className="setting-description">Increase contrast for better visibility</div>
                  </div>
                  <div className="setting-control">
                    <div 
                      className={`toggle-switch ${settings.highContrast ? 'active' : ''}`}
                      onClick={() => handleToggle('highContrast')}
                    >
                      <div className="toggle-slider"></div>
                    </div>
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">Language</div>
                    <div className="setting-description">Select your preferred language</div>
                  </div>
                  <div className="setting-control">
                    <select
                      value={settings.language}
                      onChange={(e) => handleSelectChange('language', e.target.value)}
                      className="dropdown-select"
                    >
                      <option value="english">English</option>
                      <option value="hindi">हिन्दी (Hindi)</option>
                      <option value="bengali">বাংলা (Bengali)</option>
                      <option value="tamil">தமிழ் (Tamil)</option>
                      <option value="telugu">తెలుగు (Telugu)</option>
                      <option value="marathi">मराठी (Marathi)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Test/Learning Settings Section */}
            <div className="settings-category">
              <div className="category-header">
                <span className="category-icon">📝</span>
                <h2>Test Settings</h2>
              </div>
              <div className="settings-grid">
                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">Questions Per Test</div>
                    <div className="setting-description">Number of questions in each test</div>
                  </div>
                  <div className="setting-control">
                    <select
                      value={settings.questionsPerTest}
                      onChange={(e) => handleSelectChange('questionsPerTest', e.target.value)}
                      className="dropdown-select"
                    >
                      <option value="5">5 Questions</option>
                      <option value="10">10 Questions</option>
                      <option value="15">15 Questions</option>
                      <option value="20">20 Questions</option>
                    </select>
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">Time Per Question</div>
                    <div className="setting-description">Time limit for each question (seconds)</div>
                  </div>
                  <div className="setting-control">
                    <div className="slider-control">
                      <input
                        type="range"
                        min="30"
                        max="180"
                        step="15"
                        value={settings.timePerQuestion}
                        onChange={(e) => handleSliderChange('timePerQuestion', e.target.value)}
                        className="range-slider"
                      />
                      <div className="slider-value">{settings.timePerQuestion}s</div>
                    </div>
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">Show Correct Answer</div>
                    <div className="setting-description">Display correct answer after submission</div>
                  </div>
                  <div className="setting-control">
                    <div 
                      className={`toggle-switch ${settings.showCorrectAnswer ? 'active' : ''}`}
                      onClick={() => handleToggle('showCorrectAnswer')}
                    >
                      <div className="toggle-slider"></div>
                    </div>
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">Allow Review</div>
                    <div className="setting-description">Review answers before final submission</div>
                  </div>
                  <div className="setting-control">
                    <div 
                      className={`toggle-switch ${settings.allowReview ? 'active' : ''}`}
                      onClick={() => handleToggle('allowReview')}
                    >
                      <div className="toggle-slider"></div>
                    </div>
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">Randomize Questions</div>
                    <div className="setting-description">Shuffle question order in each test</div>
                  </div>
                  <div className="setting-control">
                    <div 
                      className={`toggle-switch ${settings.randomizeQuestions ? 'active' : ''}`}
                      onClick={() => handleToggle('randomizeQuestions')}
                    >
                      <div className="toggle-slider"></div>
                    </div>
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">Pause Tests</div>
                    <div className="setting-description">Allow pausing during tests</div>
                  </div>
                  <div className="setting-control">
                    <div 
                      className={`toggle-switch ${settings.pauseTests ? 'active' : ''}`}
                      onClick={() => handleToggle('pauseTests')}
                    >
                      <div className="toggle-slider"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Account & Privacy Section */}
            <div className="settings-category">
              <div className="category-header">
                <span className="category-icon">🔒</span>
                <h2>Account & Privacy</h2>
              </div>
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

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">Session Timeout</div>
                    <div className="setting-description">Auto-logout after inactivity (minutes)</div>
                  </div>
                  <div className="setting-control">
                    <select
                      value={settings.sessionTimeout}
                      onChange={(e) => handleSelectChange('sessionTimeout', e.target.value)}
                      className="dropdown-select"
                    >
                      <option value="15">15 Minutes</option>
                      <option value="30">30 Minutes</option>
                      <option value="60">1 Hour</option>
                      <option value="120">2 Hours</option>
                    </select>
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">Show Email</div>
                    <div className="setting-description">Display email on profile</div>
                  </div>
                  <div className="setting-control">
                    <div 
                      className={`toggle-switch ${settings.showEmail ? 'active' : ''}`}
                      onClick={() => handleToggle('showEmail')}
                    >
                      <div className="toggle-slider"></div>
                    </div>
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">Show Progress</div>
                    <div className="setting-description">Display progress on public profile</div>
                  </div>
                  <div className="setting-control">
                    <div 
                      className={`toggle-switch ${settings.showProgress ? 'active' : ''}`}
                      onClick={() => handleToggle('showProgress')}
                    >
                      <div className="toggle-slider"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance & Storage Section */}
            <div className="settings-category">
              <div className="category-header">
                <span className="category-icon">⚡</span>
                <h2>Performance & Storage</h2>
              </div>
              <div className="settings-grid">
                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">Diagnostics</div>
                    <div className="setting-description">Enable diagnostic data collection for troubleshooting</div>
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
                        min="50"
                        max="500"
                        step="50"
                        value={settings.cacheSize}
                        onChange={(e) => handleSliderChange('cacheSize', e.target.value)}
                        className="range-slider"
                      />
                      <div className="slider-value">{settings.cacheSize}MB</div>
                    </div>
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">Auto-Backup</div>
                    <div className="setting-description">Automatically backup data to cloud</div>
                  </div>
                  <div className="setting-control">
                    <div 
                      className={`toggle-switch ${settings.autoBackup ? 'active' : ''}`}
                      onClick={() => handleToggle('autoBackup')}
                    >
                      <div className="toggle-slider"></div>
                    </div>
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">Offline Mode</div>
                    <div className="setting-description">Enable offline access to downloaded content</div>
                  </div>
                  <div className="setting-control">
                    <div 
                      className={`toggle-switch ${settings.offlineMode ? 'active' : ''}`}
                      onClick={() => handleToggle('offlineMode')}
                    >
                      <div className="toggle-slider"></div>
                    </div>
                  </div>
                </div>

                <div className="setting-item full-width">
                  <button className="action-btn clear-cache-btn" onClick={handleClearCache}>
                    🗑️ Clear Cache
                  </button>
                </div>
              </div>
            </div>

            {/* Accessibility Section */}
            <div className="settings-category">
              <div className="category-header">
                <span className="category-icon">♿</span>
                <h2>Accessibility</h2>
              </div>
              <div className="settings-grid">
                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">Screen Reader Support</div>
                    <div className="setting-description">Optimize for screen reader compatibility</div>
                  </div>
                  <div className="setting-control">
                    <div 
                      className={`toggle-switch ${settings.screenReader ? 'active' : ''}`}
                      onClick={() => handleToggle('screenReader')}
                    >
                      <div className="toggle-slider"></div>
                    </div>
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">Keyboard Navigation</div>
                    <div className="setting-description">Enable full keyboard navigation</div>
                  </div>
                  <div className="setting-control">
                    <div 
                      className={`toggle-switch ${settings.keyboardNav ? 'active' : ''}`}
                      onClick={() => handleToggle('keyboardNav')}
                    >
                      <div className="toggle-slider"></div>
                    </div>
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">Voice Assistant</div>
                    <div className="setting-description">Enable voice commands and assistance</div>
                  </div>
                  <div className="setting-control">
                    <div 
                      className={`toggle-switch ${settings.voiceAssist ? 'active' : ''}`}
                      onClick={() => handleToggle('voiceAssist')}
                    >
                      <div className="toggle-slider"></div>
                    </div>
                  </div>
                </div>

                <div className="setting-item">
                  <div className="setting-info">
                    <div className="setting-title">Text-to-Speech</div>
                    <div className="setting-description">Read questions and content aloud</div>
                  </div>
                  <div className="setting-control">
                    <div 
                      className={`toggle-switch ${settings.textToSpeech ? 'active' : ''}`}
                      onClick={() => handleToggle('textToSpeech')}
                    >
                      <div className="toggle-slider"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Management Section */}
            <div className="settings-category">
              <div className="category-header">
                <span className="category-icon">💾</span>
                <h2>Data Management</h2>
              </div>
              <div className="settings-grid">
                <div className="setting-item full-width">
                  <button className="action-btn export-btn" onClick={handleExportData}>
                    📤 Export Settings
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="settings-actions">
            <button className="save-btn" onClick={handleSave}>
              💾 Save All Settings
            </button>
            <button className="reset-btn" onClick={handleReset}>
              🔄 Reset to Default
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Settings;
