import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css files/Pricing.css";
import ParticleBackground from "../components/StarBg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const features = [
  "Interactive games for fun learning",
  "Personalized analytics to track progress",
  "Adaptive content for every skill level",
  "Safe, child-friendly environment"
];

const Pricing = () => {
  const navigate = useNavigate();
  const [showQRModal, setShowQRModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    let timer;
    if (showQRModal && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [showQRModal, timeLeft]);

  useEffect(() => {
    if (showQRModal) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [showQRModal]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleProceedToPayment = () => {
    setTimeLeft(300);
    setShowQRModal(true);
  };

  const handleCloseModal = () => {
    setShowQRModal(false);
    // Simulate payment verification - navigate to create account
    navigate("/create-account");
  };

  const handleGenerateNewCode = () => {
    setTimeLeft(300);
  };

  return (
    <>
      <Navbar />
      <div className="pricing-page">
        <ParticleBackground />
        <div className="pricing-title">
          <h1><img src="/assets/PrepMark.png" alt="PrepMark Logo" className="prepmark-logo2" />Pricing Plans</h1>
        </div>
        <div className="pricing-containers">
          <div className="pricing-container-3">
        <div className="pricing-container-3-top"><h1>Payment Plan</h1></div>
          <div className="pricing-container-3-bottom">
            <div className="payment-plan-card">
              <div className="payment-price">₹100</div>
              <div className="payment-methods-label">Payment Modes Accepted</div>
              <div className="payment-methods">
                <div className="payment-method-logo" title="Google Pay">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" />
                </div>
                <div className="payment-method-logo" title="PhonePe">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="PhonePe" />
                </div>
                <div className="payment-method-logo" title="BHIM UPI">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="BHIM" />
                </div>
                <div className="payment-method-logo" title="UPI">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="UPI" />
                </div>
              </div>
              <button className="payment-button" onClick={handleProceedToPayment}>Proceed to Payment</button>
            </div>
          </div>
      </div>
          <div className="pricing-container-1">
            <div className="pricing-container-1-top"><h1>What do Students Get?</h1></div>
            <div className="pricing-container-1-bottom">
              <div className="pricing-container-1-bottom-1">
                <div className="pricing-container-1-bottom-1-1">
                  <div className="student-cell">
                    <div className="student-summary">
                      <div className="student-cell-top" aria-hidden="true">🧠</div>
                      <div className="student-cell-bottom">test</div>
                    </div>
                    <div className="student-details">
                      <div className="details-icon">🧠</div>
                      <h2>Personalized Dashboard</h2>
                      <p>See your progress, strengths, and next steps at a glance.</p>
                      <ul>
                        <li>Track badges and achievements</li>
                        <li>Instant feedback on quizzes</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pricing-container-1-bottom-1-2">
                  <div className="student-cell">
                    <div className="student-summary">
                      <div className="student-cell-top" aria-hidden="true">🎯</div>
                      <div className="student-cell-bottom">test</div>
                    </div>
                    <div className="student-details">
                      <div className="details-icon">🎯</div>
                      <h2>Skill Targeting</h2>
                      <p>Focus on weak areas with personalized challenges and clear goals for steady progress.</p>
                      <ul>
                        <li>Adaptive quizzes</li>
                        <li>Goal setting tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pricing-container-1-bottom-2">
                <div className="pricing-container-1-bottom-2-1">
                  <div className="student-cell">
                    <div className="student-summary">
                      <div className="student-cell-top" aria-hidden="true">📚</div>
                      <div className="student-cell-bottom">test</div>
                    </div>
                    <div className="student-details">
                      <div className="details-icon">📚</div>
                      <h2>Learning Library</h2>
                      <p>Short, engaging lessons across subjects designed to build understanding step by step.</p>
                      <ul>
                        <li>Hundreds of bite-sized lessons</li>
                        <li>Progressive difficulty</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pricing-container-1-bottom-2-2">
                  <div className="student-cell">
                    <div className="student-summary">
                      <div className="student-cell-top" aria-hidden="true">🧩</div>
                      <div className="student-cell-bottom">test</div>
                    </div>
                    <div className="student-details">
                      <div className="details-icon">🧩</div>
                      <h2>Puzzle Mode</h2>
                      <p>Creative puzzles that encourage critical thinking and pattern recognition.</p>
                      <ul>
                        <li>Logic puzzles</li>
                        <li>Pattern games</li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
            <div className="pricing-container-1-bottom-3">
                <div className="pricing-container-1-bottom-3-1">
                  <div className="student-cell">
                    <div className="student-summary">
                      <div className="student-cell-top" aria-hidden="true">🚀</div>
                      <div className="student-cell-bottom">test</div>
                    </div>
                    <div className="student-details">
                      <div className="details-icon">🚀</div>
                      <h2>Level-Up Rewards</h2>
                      <p>Unlock badges and rewards as you complete lessons and challenges.</p>
                      <ul>
                        <li>Earn badges</li>
                        <li>Unlock new levels</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pricing-container-1-bottom-3-2">
                  <div className="student-cell">
                    <div className="student-summary">
                      <div className="student-cell-top" aria-hidden="true">🎮</div>
                      <div className="student-cell-bottom">test</div>
                    </div>
                    <div className="student-details">
                      <div className="details-icon">🎮</div>
                      <h2>Playful Practice</h2>
                      <p>Practice through games that make learning enjoyable and stress-free.</p>
                      <ul>
                        <li>Fun mini-games</li>
                        <li>Stress-free practice</li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
       <div className="pricing-container-2">
        <div className="pricing-container-2-top"><h1>What do Guardians Get?</h1></div>
          <div className="pricing-container-2-bottom">
            <div className="pricing-container-2-bottom-1">
                <div className="pricing-container-2-bottom-1-1">
                  <div className="guardian-cell">
                    <div className="guardian-summary">
                      <div className="guardian-cell-top" aria-hidden="true">📈</div>
                      <div className="guardian-cell-bottom">test</div>
                    </div>
                    <div className="guardian-details">
                      <div className="details-icon">📈</div>
                      <h2>Progress Tracking</h2>
                      <p>Clear dashboards to monitor growth, strengths, and areas to improve over time.</p>
                      <ul>
                        <li>Growth charts</li>
                        <li>Strength/weakness analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pricing-container-2-bottom-1-2">
                  <div className="guardian-cell">
                    <div className="guardian-summary">
                      <div className="guardian-cell-top" aria-hidden="true">🔔</div>
                      <div className="guardian-cell-bottom">test</div>
                    </div>
                    <div className="guardian-details">
                      <div className="details-icon">🔔</div>
                      <h2>Smart Alerts</h2>
                      <p>Helpful notifications to keep you updated on milestones and learning streaks.</p>
                      <ul>
                        <li>Milestone notifications</li>
                        <li>Learning streak reminders</li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
            <div className="pricing-container-2-bottom-2">
                <div className="pricing-container-2-bottom-2-1">
                  <div className="guardian-cell">
                    <div className="guardian-summary">
                      <div className="guardian-cell-top" aria-hidden="true">📝</div>
                      <div className="guardian-cell-bottom">test</div>
                    </div>
                    <div className="guardian-details">
                      <div className="details-icon">📝</div>
                      <h2>Weekly Reports</h2>
                      <p>Simple summaries of learning time, achievements, and recommended next steps.</p>
                      <ul>
                        <li>Time spent learning</li>
                        <li>Achievements summary</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pricing-container-2-bottom-2-2">
                  <div className="guardian-cell">
                    <div className="guardian-summary">
                      <div className="guardian-cell-top" aria-hidden="true">🔒</div>
                      <div className="guardian-cell-bottom">test</div>
                    </div>
                    <div className="guardian-details">
                      <div className="details-icon">🔒</div>
                      <h2>Privacy & Safety</h2>
                      <p>Child-safe design with privacy controls and no distracting or unsafe content.</p>
                      <ul>
                        <li>Privacy controls</li>
                        <li>No ads or unsafe content</li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
            <div className="pricing-container-2-bottom-3">
                <div className="pricing-container-2-bottom-3-1">
                  <div className="guardian-cell">
                    <div className="guardian-summary">
                      <div className="guardian-cell-top" aria-hidden="true">👨‍👩‍👧</div>
                      <div className="guardian-cell-bottom">test</div>
                    </div>
                    <div className="guardian-details">
                      <div className="details-icon">👨‍👩‍👧</div>
                      <h2>Family Goals</h2>
                      <p>Set goals together and celebrate achievements with family-friendly challenges.</p>
                      <ul>
                        <li>Collaborative goal setting</li>
                        <li>Family challenges</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pricing-container-2-bottom-3-2">
                  <div className="guardian-cell">
                    <div className="guardian-summary">
                      <div className="guardian-cell-top" aria-hidden="true">📊</div>
                      <div className="guardian-cell-bottom">test</div>
                    </div>
                    <div className="guardian-details">
                      <div className="details-icon">📊</div>
                      <h2>Insights</h2>
                      <p>Understand learning patterns with insights that inform better support at home.</p>
                      <ul>
                        <li>Learning pattern analysis</li>
                        <li>Support recommendations</li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
      
      </div>
    </div>
    <Footer />
    {showQRModal && (
      <div className="qr-modal-overlay" onClick={handleCloseModal}>
        <div className="qr-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="qr-modal-close" onClick={handleCloseModal}>✕</button>
          <h3 className="qr-modal-title">Scan Code for Payment</h3>
          <div className="qr-code-container">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=merchant@upi&pn=SkillyugEducation&am=100&cu=INR" 
              alt="Payment QR Code" 
              className="qr-code-image"
            />
          </div>
          <div className="qr-modal-footer">
            <div className="qr-timer-small">Expires: {formatTime(timeLeft)}</div>
            <button className="generate-new-code-btn-small" onClick={handleGenerateNewCode}>
              New Code
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default Pricing;
