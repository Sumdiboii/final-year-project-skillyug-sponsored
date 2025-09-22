import React, { useState } from "react";
import "../css files/Syllabus.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticleBackground from "../components/StarBg";

const matSyllabus = [
  { icon: "🔗", title: "Analogy", desc: "Word, number, and figure analogies" },
  { icon: "🎯", title: "Classification", desc: "Odd one out - identify the different element" },
  { icon: "🔢", title: "Number & Letter Series", desc: "Complete the sequence patterns" },
  { icon: "�", title: "Coding-Decoding", desc: "Decode patterns and encrypted messages" },
  { icon: "👁️", title: "Pattern Perception", desc: "Identify and complete visual patterns" },
  { icon: "�️", title: "Hidden Figures", desc: "Find embedded shapes and figures" },
  { icon: "👨‍👩‍👧‍👦", title: "Blood Relations", desc: "Family relationship problems" },
  { icon: "🧭", title: "Direction Sense", desc: "Navigation and directional reasoning" },
  { icon: "🧩", title: "Logical & Mathematical Puzzles", desc: "Critical thinking and problem-solving" },
  { icon: "🔄", title: "Spatial Visualization", desc: "Mirror images, folding/unfolding patterns" },
];

const satSyllabus = [
  {
    category: "Mathematics",
    icon: "�",
    topics: [
      "Integers, Fractions, Decimals, Rational Numbers",
      "Exponents & Powers",
      "Algebra (expressions, simple equations, identities)",
      "Geometry (triangles, quadrilaterals, circles, constructions)",
      "Mensuration (perimeter, area, surface area, volume)",
      "Profit & Loss, Percentage, Ratio & Proportion",
      "Simple & Compound Interest",
      "Data Handling (graphs, probability basics)"
    ]
  },
  {
    category: "Science",
    icon: "🔬",
    topics: [
      "Nutrition in Plants & Animals",
      "Heat, Light, Sound",
      "Acids, Bases & Salts",
      "Physical & Chemical Changes",
      "Motion & Time, Force & Pressure",
      "Reproduction in Plants & Animals",
      "Microorganisms",
      "Cell Structure & Human Body Systems",
      "Pollution & Conservation of Environment",
      "Solar System, Stars & Universe"
    ]
  },
  {
    category: "Social Science",
    icon: "🌍",
    topics: [
      "History: Medieval to Modern India, Revolutions, Colonialism",
      "National Movement",
      "Geography: Resources, Agriculture, Industries",
      "Land, Soil, Water, Natural & Human Environment",
      "Civics/Polity: Constitution, Democracy, Rights & Duties",
      "Government & Judiciary, Social Justice",
      "Economics: Basic economic concepts, rural/urban livelihoods",
      "Markets, human resources"
    ]
  }
];

const Syllabus = () => {
  const [activeTab, setActiveTab] = useState("MAT");

  return (
    <div className="syllabus-page">
      <Navbar />
      <ParticleBackground />

      {/* Educational Objective Section */}
      <div className="main-syllabus-cont">
        <div className="objective-content">
          <div className="objective-header">
            <h1 className="objective-title">Educational Objectives</h1>
            <div className="objective-subtitle">Empowering Students Through Quality Education</div>
          </div>
          
          <div className="objectives-grid">
            <div className="objective-card">
              <div className="objective-icon">🎯</div>
              <h3>Academic Excellence</h3>
              <p>Prepare students for competitive examinations like NMMS with comprehensive study materials and practice tests</p>
            </div>
            
            <div className="objective-card">
              <div className="objective-icon">🧠</div>
              <h3>Critical Thinking</h3>
              <p>Develop analytical and logical reasoning skills through structured mental ability training and problem-solving techniques</p>
            </div>
            
            <div className="objective-card">
              <div className="objective-icon">📚</div>
              <h3>Holistic Learning</h3>
              <p>Provide balanced education covering Mathematics, Science, and Social Studies aligned with NCERT curriculum</p>
            </div>
            
            <div className="objective-card">
              <div className="objective-icon">💰</div>
              <h3>Affordable Learning</h3>
              <p>Make quality education accessible to all students through cost-effective learning solutions and scholarship opportunities</p>
            </div>
            
            <div className="objective-card">
              <div className="objective-icon">💻</div>
              <h3>E-Learning Promotion</h3>
              <p>Leverage digital technology to deliver interactive online courses, virtual classrooms, and mobile learning experiences</p>
            </div>
            
            <div className="objective-card">
              <div className="objective-icon">🌟</div>
              <h3>Future Ready</h3>
              <p>Equip students with essential skills and knowledge to excel in higher education and professional careers</p>
            </div>
          </div>
        </div>
      </div>

      {/* NMMS Syllabus Section */}
      <div className="sub1-syllabus-cont">
        <div className="syllabus-content">
          <div className="syllabus-header">
            <h2 className="syllabus-title">📘 NMMS Exam Syllabus</h2>
            <p className="syllabus-description">
              Comprehensive syllabus for National Means-cum-Merit Scholarship examination
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="tab-navigation">
            <button 
              className={`tab-btn ${activeTab === "MAT" ? "active" : ""}`}
              onClick={() => setActiveTab("MAT")}
            >
              🧠 Mental Ability Test (MAT)
            </button>
            <button 
              className={`tab-btn ${activeTab === "SAT" ? "active" : ""}`}
              onClick={() => setActiveTab("SAT")}
            >
              📚 Scholastic Aptitude Test (SAT)
            </button>
          </div>

          {/* MAT Content */}
          {activeTab === "MAT" && (
            <div className="tab-content">
              <div className="tab-description">
                <p>Covers reasoning and problem-solving skills</p>
              </div>
              <div className="syllabus-grid">
                {matSyllabus.map((item, index) => (
                  <div key={index} className="syllabus-card">
                    <div className="card-icon">{item.icon}</div>
                    <h4 className="card-title">{item.title}</h4>
                    <p className="card-description">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SAT Content */}
          {activeTab === "SAT" && (
            <div className="tab-content">
              <div className="tab-description">
                <p>Based on Class 7 & 8 NCERT/State syllabus</p>
              </div>
              <div className="sat-subjects">
                {satSyllabus.map((subject, index) => (
                  <div key={index} className="subject-section">
                    <div className="subject-header">
                      <span className="subject-icon">{subject.icon}</span>
                      <h3 className="subject-title">{subject.category}</h3>
                    </div>
                    <div className="topics-grid">
                      {subject.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="topic-item">
                          <span className="topic-bullet">•</span>
                          <span className="topic-text">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    
      {/* Study Resources & Preparation Tips Section */}
      <div className="sub2-syllabus-cont">
        <div className="resources-content">
          <div className="resources-header">
            <h2 className="resources-title">📚 Study Resources & Preparation Tips</h2>
            <p className="resources-description">
              Essential resources and expert strategies to excel in NMMS examination
            </p>
          </div>

          <div className="resources-grid">
            {/* Study Materials */}
            <div className="resource-category">
              <div className="category-header">
                <div className="category-icon">📖</div>
                <h3 className="category-title">Study Materials</h3>
              </div>
              <div className="resource-items">
                <div className="resource-item">
                  <span className="resource-bullet">📝</span>
                  <span className="resource-text">Comprehensive practice test papers</span>
                </div>
                <div className="resource-item">
                  <span className="resource-bullet">📊</span>
                  <span className="resource-text">Topic-wise question banks</span>
                </div>
                <div className="resource-item">
                  <span className="resource-bullet">📋</span>
                  <span className="resource-text">Previous year solved papers</span>
                </div>
                <div className="resource-item">
                  <span className="resource-bullet">🎯</span>
                  <span className="resource-text">Mock test series with analysis</span>
                </div>
              </div>
            </div>

            {/* Preparation Strategy */}
            <div className="resource-category">
              <div className="category-header">
                <div className="category-icon">🧠</div>
                <h3 className="category-title">Preparation Strategy</h3>
              </div>
              <div className="resource-items">
                <div className="resource-item">
                  <span className="resource-bullet">⏰</span>
                  <span className="resource-text">Create a structured study timetable</span>
                </div>
                <div className="resource-item">
                  <span className="resource-bullet">🔄</span>
                  <span className="resource-text">Regular revision and practice</span>
                </div>
                <div className="resource-item">
                  <span className="resource-bullet">📈</span>
                  <span className="resource-text">Track progress with weekly tests</span>
                </div>
                <div className="resource-item">
                  <span className="resource-bullet">💡</span>
                  <span className="resource-text">Focus on weak areas improvement</span>
                </div>
              </div>
            </div>

            {/* Digital Resources */}
            <div className="resource-category">
              <div className="category-header">
                <div className="category-icon">💻</div>
                <h3 className="category-title">Digital Resources</h3>
              </div>
              <div className="resource-items">
                <div className="resource-item">
                  <span className="resource-bullet">�</span>
                  <span className="resource-text">Mobile app for on-the-go learning</span>
                </div>
                <div className="resource-item">
                  <span className="resource-bullet">🎥</span>
                  <span className="resource-text">Video lectures by expert teachers</span>
                </div>
                <div className="resource-item">
                  <span className="resource-bullet">💬</span>
                  <span className="resource-text">Online doubt clearing sessions</span>
                </div>
                <div className="resource-item">
                  <span className="resource-bullet">📊</span>
                  <span className="resource-text">Performance analytics dashboard</span>
                </div>
              </div>
            </div>

            {/* Exam Tips */}
            <div className="resource-category">
              <div className="category-header">
                <div className="category-icon">🏆</div>
                <h3 className="category-title">Exam Tips</h3>
              </div>
              <div className="resource-items">
                <div className="resource-item">
                  <span className="resource-bullet">⚡</span>
                  <span className="resource-text">Time management techniques</span>
                </div>
                <div className="resource-item">
                  <span className="resource-bullet">✅</span>
                  <span className="resource-text">Smart guessing strategies</span>
                </div>
                <div className="resource-item">
                  <span className="resource-bullet">🎯</span>
                  <span className="resource-text">Question prioritization methods</span>
                </div>
                <div className="resource-item">
                  <span className="resource-bullet">😌</span>
                  <span className="resource-text">Stress management and confidence building</span>
                </div>
              </div>
            </div>

            {/* Expert Guidance */}
            <div className="resource-category">
              <div className="category-header">
                <div className="category-icon">👨‍🏫</div>
                <h3 className="category-title">Expert Guidance</h3>
              </div>
              <div className="resource-items">
                <div className="resource-item">
                  <span className="resource-bullet">🎓</span>
                  <span className="resource-text">One-on-one mentorship sessions</span>
                </div>
                <div className="resource-item">
                  <span className="resource-bullet">👥</span>
                  <span className="resource-text">Group study sessions</span>
                </div>
                <div className="resource-item">
                  <span className="resource-bullet">📞</span>
                  <span className="resource-text">24/7 student support helpline</span>
                </div>
                <div className="resource-item">
                  <span className="resource-bullet">🎤</span>
                  <span className="resource-text">Weekly expert webinars</span>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="resource-category">
              <div className="category-header">
                <div className="category-icon">🌟</div>
                <h3 className="category-title">Success Stories</h3>
              </div>
              <div className="resource-items">
                <div className="resource-item">
                  <span className="resource-bullet">🏅</span>
                  <span className="resource-text">1000+ scholarship winners</span>
                </div>
                <div className="resource-item">
                  <span className="resource-bullet">📈</span>
                  <span className="resource-text">95% success rate in NMMS</span>
                </div>
                <div className="resource-item">
                  <span className="resource-bullet">💬</span>
                  <span className="resource-text">Student testimonials and reviews</span>
                </div>
                <div className="resource-item">
                  <span className="resource-bullet">🎉</span>
                  <span className="resource-text">Alumni network support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="resources-cta">
            <div className="cta-content">
              <h3>Ready to Start Your NMMS Journey?</h3>
              <p>Join thousands of successful students who trusted PrepMark for their exam preparation</p>
              <div className="cta-buttons">
                <button className="cta-btn primary">Download App</button>
                <button className="cta-btn secondary">Start Free Trial</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};export default Syllabus;
