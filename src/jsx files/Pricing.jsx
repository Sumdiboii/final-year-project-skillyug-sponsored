import React from "react";
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
  return (
    <>
      <Navbar />
      <div className="pricing-page">
        <ParticleBackground />
        <div className="pricing-title">
          <h1><img src="/assets/PrepMark.png" alt="PrepMark Logo" className="prepmark-logo2" />Pricing Plans</h1>
        </div>
        <div className="pricing-containers">
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
                      <div className="student-details-1-top">
                        <h2>Personalized Dashboard</h2>
                        <p>See your progress, strengths, and next steps at a glance.</p>
                      </div>
                      <div className="student-details-1-bottom">
                        <ul>
                          <li>Track badges and achievements</li>
                          <li>Instant feedback on quizzes</li>
                        </ul>
                      </div>
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
                      <div className="student-details-2-top">
                        <h2>Skill Targeting</h2>
                        <p>Focus on weak areas with personalized challenges and clear goals for steady progress.</p>
                      </div>
                      <div className="student-details-2-bottom">
                        <ul>
                          <li>Adaptive quizzes</li>
                          <li>Goal setting tools</li>
                        </ul>
                      </div>
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
                      <div className="student-details-3-top">
                        <h2>Learning Library</h2>
                        <p>Short, engaging lessons across subjects designed to build understanding step by step.</p>
                      </div>
                      <div className="student-details-3-bottom">
                          <ul>
                            <li>Hundreds of bite-sized lessons</li>
                            <li>Progressive difficulty</li>
                          </ul>
                        </div>
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
                        <div className="student-details-4-top">
                          <h2>Puzzle Mode</h2>
                          <p>Creative puzzles that encourage critical thinking and pattern recognition.</p>
                        </div>
                        <div className="student-details-4-bottom">
                          <ul>
                            <li>Logic puzzles</li>
                            <li>Pattern games</li>
                          </ul>
                        </div>
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
                        <div className="student-details-5-top">
                          <h2>Level-Up Rewards</h2>
                          <p>Unlock badges and rewards as you complete lessons and challenges.</p>
                        </div>
                        <div className="student-details-5-bottom">
                          <ul>
                            <li>Earn badges</li>
                            <li>Unlock new levels</li>
                          </ul>
                        </div>
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
                        <div className="student-details-6-top">
                          <h2>Playful Practice</h2>
                          <p>Practice through games that make learning enjoyable and stress-free.</p>
                        </div>
                        <div className="student-details-6-bottom">
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
                        <div className="guardian-details-1-top">
                          <h2>Progress Tracking</h2>
                          <p>Clear dashboards to monitor growth, strengths, and areas to improve over time.</p>
                        </div>
                        <div className="guardian-details-1-bottom">
                          <ul>
                            <li>Growth charts</li>
                            <li>Strength/weakness analysis</li>
                          </ul>
                        </div>
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
                        <div className="guardian-details-2-top">
                          <h2>Smart Alerts</h2>
                          <p>Helpful notifications to keep you updated on milestones and learning streaks.</p>
                        </div>
                        <div className="guardian-details-2-bottom">
                          <ul>
                            <li>Milestone notifications</li>
                            <li>Learning streak reminders</li>
                          </ul>
                        </div>
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
                        <div className="guardian-details-3-top">
                          <h2>Weekly Reports</h2>
                          <p>Simple summaries of learning time, achievements, and recommended next steps.</p>
                        </div>
                        <div className="guardian-details-3-bottom">
                          <ul>
                            <li>Time spent learning</li>
                            <li>Achievements summary</li>
                          </ul>
                        </div>
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
                        <div className="guardian-details-4-top">
                          <h2>Privacy & Safety</h2>
                          <p>Child-safe design with privacy controls and no distracting or unsafe content.</p>
                        </div>
                        <div className="guardian-details-4-bottom">
                          <ul>
                            <li>Privacy controls</li>
                            <li>No ads or unsafe content</li>
                          </ul>
                        </div>
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
                        <div className="guardian-details-5-top">
                          <h2>Family Goals</h2>
                          <p>Set goals together and celebrate achievements with family-friendly challenges.</p>
                        </div>
                        <div className="guardian-details-5-bottom">
                          <ul>
                            <li>Collaborative goal setting</li>
                            <li>Family challenges</li>
                          </ul>
                        </div>
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
                        <div className="guardian-details-6-top">
                          <h2>Insights</h2>
                          <p>Understand learning patterns with insights that inform better support at home.</p>
                        </div>
                        <div className="guardian-details-6-bottom">
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
      <div className="pricing-container-3">
        <div className="pricing-container-3-top"><h1>Available Plans</h1></div>
          <div className="pricing-container-3-bottom">
            <div className="pricing-container-3-bottom-1">
              <div className="plan-cell">
                <div className="plan-summary">
                  <div className="plan-cell-top" aria-hidden="true">💫</div>
                  <div className="plan-cell-bottom">Free Plan</div>
                </div>
                <div className="plan-details">
                  <h2>Free Plan</h2>
                  <ul>
                    <li>Access to basic games and lessons</li>
                    <li>Daily streak tracking</li>
                    <li>Limited insights</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pricing-container-3-bottom-2">
              <div className="plan-cell">
                <div className="plan-summary">
                  <div className="plan-cell-top" aria-hidden="true">⭐</div>
                  <div className="plan-cell-bottom">Pro Plan</div>
                </div>
                <div className="plan-details">
                  <h2>Pro Plan</h2>
                  <ul>
                    <li>All games and subjects unlocked</li>
                    <li>Personalized paths and analytics</li>
                    <li>Weekly progress reports</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pricing-container-3-bottom-3">
              <div className="plan-cell">
                <div className="plan-summary">
                  <div className="plan-cell-top" aria-hidden="true">👑</div>
                  <div className="plan-cell-bottom">Premium Plan</div>
                </div>
                <div className="plan-details">
                  <h2>Premium Plan</h2>
                  <ul>
                    <li>Everything in Pro</li>
                    <li>Family goals and rewards</li>
                    <li>Priority support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>

      </div>
    </div>
    <Footer />
    </>
  );
};

export default Pricing;
