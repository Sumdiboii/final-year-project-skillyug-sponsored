import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Footer Pages/AboutUs.css';
import ParticleBackground from '../StarBg';

import Footer from '../Footer';
import MainNavbar from '../MainNavbar';

const AboutUs = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <>
      <MainNavbar />
      <div className="about-us-page">
        <ParticleBackground />
      
      <div className="about-container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-content">
            <div className="company-logo">
              <img src="/assets/skillyug-rebrand-logo.png" alt="Skillyug Logo" className="about-logo" />
            </div>
            <h1 className="hero-title">About PrepMark by Skillyug</h1>
            <p className="hero-subtitle">
              Empowering the next generation through innovative educational technology and personalized learning experiences
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Students</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">Success Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Practice Tests</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="mission-vision-section">
          <div className="section-cards">
            <div className="mission-card glass-card">
              <div className="card-icon">🎯</div>
              <h2>Our Mission</h2>
              <p>
                To democratize quality education by providing accessible, engaging, and comprehensive 
                learning solutions that help students achieve their academic goals and unlock their full potential.
              </p>
            </div>
            <div className="vision-card glass-card">
              <div className="card-icon">🌟</div>
              <h2>Our Vision</h2>
              <p>
                To become India's leading educational technology platform, transforming how students 
                learn and prepare for competitive exams through innovation, personalization, and excellence.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="what-we-do-section">
          <div className="section-header">
            <h2>What We Do</h2>
            <p>Comprehensive learning solutions designed for student success</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card glass-card">
              <div className="service-icon">🧠</div>
              <h3>Mental Ability Training</h3>
              <p>Develop critical thinking, logical reasoning, and problem-solving skills through interactive exercises and practice tests.</p>
              <ul className="service-features">
                <li>Pattern Recognition</li>
                <li>Logical Reasoning</li>
                <li>Spatial Intelligence</li>
              </ul>
            </div>
            
            <div className="service-card glass-card">
              <div className="service-icon">📚</div>
              <h3>Scholastic Assessment</h3>
              <p>Master core subjects with comprehensive study materials, practice questions, and detailed explanations.</p>
              <ul className="service-features">
                <li>Mathematics</li>
                <li>Science</li>
                <li>Social Studies</li>
              </ul>
            </div>
            
            <div className="service-card glass-card">
              <div className="service-icon">📊</div>
              <h3>Progress Analytics</h3>
              <p>Track your learning journey with detailed analytics, performance insights, and personalized recommendations.</p>
              <ul className="service-features">
                <li>Performance Tracking</li>
                <li>Weakness Analysis</li>
                <li>Study Recommendations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="story-section">
          <div className="story-content glass-card">
            <div className="story-header">
              <h2>🌟 Our Story</h2>
            </div>
            <div className="story-text">
              <p>
                PrepMark by Skillyug was founded with a simple yet powerful vision: to make quality 
                education accessible to every student, regardless of their background or location. 
                Our journey began when we recognized the gap between traditional learning methods 
                and the evolving needs of modern students.
              </p>
              <p>
                With a team of passionate educators, technologists, and learning specialists, we've 
                created an innovative platform that combines proven pedagogical approaches with 
                cutting-edge technology. Our focus on the NMMS (National Means-cum-Merit Scholarship) 
                program reflects our commitment to supporting students who aspire to achieve academic 
                excellence and secure their educational future.
              </p>
              <p>
                Today, we're proud to serve thousands of students across India, helping them build 
                confidence, master complex concepts, and achieve their academic goals. Our continuous 
                innovation and student-first approach drive us to constantly improve and expand our offerings.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-section">
          <div className="section-header">
            <h2>Why Choose PrepMark?</h2>
            <p>Discover what makes us the preferred choice for thousands of students</p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-item glass-card">
              <div className="benefit-icon">✅</div>
              <h3>Comprehensive Content</h3>
              <p>Complete syllabus coverage for NMMS with detailed explanations and examples</p>
            </div>
            
            <div className="benefit-item glass-card">
              <div className="benefit-icon">🎯</div>
              <h3>Personalized Learning</h3>
              <p>Adaptive learning paths that adjust to your pace and learning style</p>
            </div>
            
            <div className="benefit-item glass-card">
              <div className="benefit-icon">📱</div>
              <h3>Multi-Platform Access</h3>
              <p>Learn anywhere, anytime with our web and mobile applications</p>
            </div>
            
            <div className="benefit-item glass-card">
              <div className="benefit-icon">👨‍🏫</div>
              <h3>Expert Guidance</h3>
              <p>Content created and reviewed by experienced educators and subject experts</p>
            </div>
            
            <div className="benefit-item glass-card">
              <div className="benefit-icon">🔄</div>
              <h3>Regular Updates</h3>
              <p>Stay current with the latest exam patterns and syllabus changes</p>
            </div>
            
            <div className="benefit-item glass-card">
              <div className="benefit-icon">💰</div>
              <h3>Affordable Pricing</h3>
              <p>Quality education at accessible prices with flexible payment options</p>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="contact-cta-section">
          <div className="cta-content glass-card">
            <h2>Ready to Start Your Learning Journey?</h2>
            <p>Join thousands of students who are already achieving their academic goals with PrepMark</p>
            <div className="cta-buttons">
              <button className="cta-btn primary" onClick={() => navigate('/pricing')}>
                View Pricing Plans
              </button>
              <button className="cta-btn secondary" onClick={() => navigate('/contact-us')}>
                Contact Us
              </button>
            </div>
          </div>
        </section>

        
      </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
