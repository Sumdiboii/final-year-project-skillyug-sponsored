import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css files/Exam.css';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/StarBg';

const Exam = () => {
  const navigate = useNavigate();
  // TODO: Still working on cooldown feature
  // const [examAttempts, setExamAttempts] = useState({});
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);

  // TODO: Still working on cooldown feature
  // useEffect(() => {
  //   // Load exam attempts from localStorage
  //   const stored = localStorage.getItem('examAttempts');
  //   if (stored) {
  //     setExamAttempts(JSON.parse(stored));
  //   }
  // }, []);

  const examOptions = [
    {
      id: 'mat',
      title: 'Mental Ability  Mock Test',
      duration: '90',
      questions: 90,
      gradient: '#cc4915;',
      description: 'Test your mental aptitude with logical reasoning, pattern recognition, and analytical thinking.',
    },
    {
      id: 'sat',
      title: 'Scholastic Aptitude  Mock Test',
      duration: '90',
      questions: 90,
      gradient: '#cc4915;',
      description: 'Comprehensive assessment of Mathematics, Science, and Social Studies knowledge.',
    },
    {
      id: 'full',
      title: 'NMMS Mock Examination',
      duration: '180',
      questions: 180,
      gradient: '#cc4915;',
      description: 'Complete NMMS examination combining both MAT and SAT assessments.',
    }
  ];

  // TODO: Still working on cooldown feature
  // const canAttemptExam = (examId) => {
  //   const lastAttempt = examAttempts[examId];
  //   if (!lastAttempt) return true;
  //
  //   const daysSinceLastAttempt = (Date.now() - lastAttempt) / (1000 * 60 * 60 * 24);
  //   return daysSinceLastAttempt >= 3;
  // };
  //
  // const getDaysRemaining = (examId) => {
  //   const lastAttempt = examAttempts[examId];
  //   if (!lastAttempt) return 0;
  //
  //   const daysSinceLastAttempt = (Date.now() - lastAttempt) / (1000 * 60 * 60 * 24);
  //   const daysRemaining = Math.ceil(3 - daysSinceLastAttempt);
  //   return daysRemaining > 0 ? daysRemaining : 0;
  // };

  const handleStartExam = (examId) => {
    // TODO: Still working on cooldown feature
    // if (!canAttemptExam(examId)) {
    //   const daysLeft = getDaysRemaining(examId);
    //   alert(`⏳ You can attempt this exam again in ${daysLeft} day${daysLeft !== 1 ? 's' : ''}. Please wait for the cooldown period to complete.`);
    //   return;
    // }

    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen()
        .then(() => {
          // TODO: Still working on cooldown feature
          // // Save attempt timestamp
          // const newAttempts = { ...examAttempts, [examId]: Date.now() };
          // localStorage.setItem('examAttempts', JSON.stringify(newAttempts));
          // setExamAttempts(newAttempts);

          navigate(`/exam-test/${examId}`, { 
            state: { 
              examType: examId,
              proctored: true,
              duration: examId === 'full' ? 180 : 90
            } 
          });
        })
        .catch(() => {
          alert('⚠️ Fullscreen mode is required to start the proctored exam. Please allow fullscreen access and try again.');
        });
    } else {
      alert('⚠️ Your browser does not support fullscreen mode. Please use a modern browser like Chrome, Firefox, or Edge.');
    }
  };

  return (
    <>
      <MainNavbar />
      <div className="exam-page">
        
        {/* Section 1: Exam Dashboard - Full Screen */}
        <section className="exam-dashboard-section">
          <ParticleBackground />
          <div className="exam-dashboard-header">
            <h1>🎯 Exam Dashboard</h1>
            <p>Proctored assessments with real exam conditions</p>
          </div>
          <div className="exam-dashboard-content">
            <div className="exam-dashboard-actions">
              <button className="exam-dashboard-btn exam-primary" onClick={() => {
                document.getElementById('exam-section').scrollIntoView({ behavior: 'smooth' });
              }}>
                Give Exam
              </button>
              <button className="exam-dashboard-btn exam-secondary" onClick={() => {
                navigate('/exam-history');
              }}>
                View Exam History
              </button>
              <button className="exam-dashboard-btn exam-secondary" onClick={() => setShowInstructionsModal(true)}>
                View Instructions
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: Exam Cards - Scrollable */}
        <section className="exam-cards-section" id="exam-section">
          <div className="exam-options-container">
              {examOptions.map((exam) => {
                // TODO: Still working on cooldown feature
                // const canAttempt = canAttemptExam(exam.id);
                // const daysLeft = getDaysRemaining(exam.id);

                return (
                  <div key={exam.id} className="exam-card-modern">
                    {/* Gradient Background Strip */}
                    <div className="exam-card-gradient-strip" style={{ background: exam.gradient }}></div>
                    
                    {/* Card Header */}
                    <div className="exam-card-header">
                      <h3 className="exam-title">{exam.title}</h3>
                      {/* TODO: Still working on cooldown feature */}
                      {/* {!canAttempt && (
                        <div className="exam-locked-badge">
                          <span className="lock-icon">🔒</span>
                          <span className="lock-text">{daysLeft}d</span>
                        </div>
                      )} */}
                    </div>

                    {/* Info Grid */}
                    <div className="exam-info-grid">
                      <div className="exam-info-item">
                       
                        <div className="info-details">
                          <span className="info-value">{exam.duration}</span>
                          <span className="info-label">Minutes</span>
                        </div>
                      </div>
                      <div className="exam-info-item">
                       
                        <div className="info-details">
                          <span className="info-value">{exam.questions}</span>
                          <span className="info-label">Questions</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="exam-card-description">{exam.description}</p>

                    {/* Action Button */}
                    <button 
                      className="exam-action-btn"
                      style={{ 
                        background: exam.gradient,
                        cursor: 'pointer'
                      }}
                      onClick={() => handleStartExam(exam.id)}
                    >
                      <span className="btn-content">
                        <span className="btn-text">Start Test</span>
                      </span>
                    </button>
                    {/* TODO: Still working on cooldown feature */}
                    {/* <button 
                      className={`exam-action-btn ${!canAttempt ? 'btn-disabled' : ''}`}
                      style={{ 
                        background: canAttempt ? exam.gradient : 'rgba(255, 255, 255, 0.1)',
                        cursor: canAttempt ? 'pointer' : 'not-allowed'
                      }}
                      onClick={() => handleStartExam(exam.id)}
                      disabled={!canAttempt}
                    >
                      <span className="btn-content">
                        {canAttempt ? (
                          <>
                            <span className="btn-text">Start Test</span>
                          </>
                        ) : (
                          <>
                            <span className="btn-text">Available in {daysLeft} day{daysLeft !== 1 ? 's' : ''}</span>
                          </>
                        )}
                      </span>
                    </button> */}
                  </div>
                );
              })}
          </div>
        </section>
      </div>

      {/* Exam Instructions Modal */}
      {showInstructionsModal && (
        <div className="exam-rules-modal-overlay" onClick={() => setShowInstructionsModal(false)}>
          <div className="exam-rules-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="exam-rules-modal-header">
              <h2>📋 Exam Instructions & Guidelines</h2>
              <button className="exam-rules-modal-close" onClick={() => setShowInstructionsModal(false)}>
                ✕
              </button>
            </div>
            
            <div className="exam-rules-modal-body">
              <div className="exam-rules-section">
                <h3>📝 Test Instructions</h3>
                <ul className="exam-rules-list">
                  <li><span className="exam-rule-icon">✓</span> Read each question carefully before answering</li>
                  <li><span className="exam-rule-icon">✓</span> You can navigate between questions using Next/Previous buttons</li>
                  <li><span className="exam-rule-icon">✓</span> Mark questions for review if you're unsure</li>
                  <li><span className="exam-rule-icon">✓</span> Submit your exam before time expires</li>
                  <li><span className="exam-rule-icon">✓</span> Ensure stable internet connection throughout the test</li>
                </ul>
              </div>

              <div className="exam-rules-section">
                <h3>🔒 Exam Rules</h3>
                <ul className="exam-rules-list">
                  <li><span className="exam-rule-icon">✓</span> Exam will run in fullscreen mode - exiting will auto-submit</li>
                  <li><span className="exam-rule-icon">✓</span> Only 1 attempt allowed per 3 days for each exam</li>
                  <li><span className="exam-rule-icon">✓</span> No tab switching or window minimizing allowed</li>
                  <li><span className="exam-rule-icon">✓</span> Auto-submit when timer reaches zero</li>
                  <li><span className="exam-rule-icon">✓</span> Results will be shared with your registered guardian</li>
                </ul>
              </div>

              <div className="exam-rules-section">
                <h3>📊 Marking Scheme</h3>
                <ul className="exam-rules-list">
                  <li><span className="exam-rule-icon">+1</span> One mark for each correct answer</li>
                  <li><span className="exam-rule-icon">0</span> No negative marking for wrong answers</li>
                  <li><span className="exam-rule-icon">0</span> Zero marks for unattempted questions</li>
                </ul>
              </div>

              <div className="exam-rules-section">
                <h3>💻 System Requirements</h3>
                <ul className="exam-rules-list">
                  <li><span className="exam-rule-icon">•</span> Stable internet connection (minimum 2 Mbps)</li>
                  <li><span className="exam-rule-icon">•</span> Modern web browser (Chrome, Firefox, or Edge)</li>
                  <li><span className="exam-rule-icon">•</span> Fullscreen mode support required</li>
                  <li><span className="exam-rule-icon">•</span> Laptop/Desktop only (mobile not supported)</li>
                  <li><span className="exam-rule-icon">•</span> Fully charged device or power connected</li>
                </ul>
              </div>

              <div className="exam-rules-warning">
                <span className="exam-warning-icon">⚠️</span>
                <p>Please read all instructions carefully before starting the exam. Once started, the exam cannot be paused or restarted. Make sure you have sufficient time and a quiet environment.</p>
              </div>
            </div>

            <div className="exam-rules-modal-footer">
              <button className="exam-rules-modal-btn" onClick={() => setShowInstructionsModal(false)}>
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Exam;