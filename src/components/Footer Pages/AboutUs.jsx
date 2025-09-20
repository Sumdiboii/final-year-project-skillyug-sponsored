import React from 'react';
import '../Footer Pages/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="about-container">
        <header className="about-header">
          <h1>About Skillyug</h1>
          <p>Empowering students to achieve their academic goals through innovative learning solutions</p>
        </header>

        <section className="about-content">
          <div className="about-section">
            <h2>🎯 Our Mission</h2>
            <p>
              At Skillyug, we believe that every student has the potential to excel. Our mission is to provide 
              comprehensive, accessible, and engaging educational resources that help students prepare for 
              competitive exams like NMMS and SAT with confidence.
            </p>
          </div>

          <div className="about-section">
            <h2>📚 What We Offer</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>🧠 Interactive Learning</h3>
                <p>Engaging lessons with multimedia content that makes complex concepts easy to understand.</p>
              </div>
              <div className="feature-card">
                <h3>📊 Progress Tracking</h3>
                <p>Advanced analytics to monitor your learning progress and identify areas for improvement.</p>
              </div>
              <div className="feature-card">
                <h3>🎯 Practice Tests</h3>
                <p>Comprehensive mock tests that simulate real exam conditions for better preparation.</p>
              </div>
              <div className="feature-card">
                <h3>👨‍🏫 Expert Guidance</h3>
                <p>Content created by experienced educators and subject matter experts.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>🌟 Our Story</h2>
            <p>
              Founded in 2023, Skillyug was born from the vision of making quality education accessible to all students. 
              Our team of educators, technologists, and learning specialists work together to create an 
              innovative platform that transforms the way students learn and prepare for competitive exams.
            </p>
          </div>

          <div className="about-section">
            <h2>💡 Why Choose Skillyug?</h2>
            <ul className="benefits-list">
              <li>✅ Comprehensive study materials for NMMS and SAT</li>
              <li>✅ Personalized learning paths based on your strengths</li>
              <li>✅ Regular updates with latest exam patterns</li>
              <li>✅ 24/7 access to learning resources</li>
              <li>✅ Affordable pricing plans for all students</li>
              <li>✅ Community support and peer learning</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>👥 Our Team</h2>
            <p>
              We are a passionate team of educators, developers, and innovators committed to revolutionizing 
              online education. Our diverse backgrounds in education, technology, and student psychology 
              help us create learning experiences that truly make a difference.
            </p>
          </div>
        </section>

        <div className="back-home">
          <button onClick={() => window.history.back()} className="back-btn">
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
