import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';
import ParticleBackground from '../StarBg';
import Footer from '../Footer';
import Navbar from '../Navbar';

const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <>
      <Navbar />
      <div className="about-us-page">
        <ParticleBackground />

        <main className="about-wrap">
          <header className="about-hero">
            <img src="/assets/PrepMark.png" alt="PrepMark logo" className="about-logo" />
            <h1 className="about-title">by Skillyug Education</h1>
            <p className="about-sub">Simple, effective learning tools that build confidence and outcomes for every student.</p>
          </header>

          <section className="about-cards">
            <article className="about-card">
              <h3>About PrepMark</h3>
              <p>PrepMark provides focused aptitude and scholastic practice designed to prepare students for scholarship exams and strengthen core reasoning skills.</p>
            </article>

            <article className="about-card">
              <h3>Skillyug Education</h3>
              <p>Skillyug brings together educators and technologists to create learning experiences that are accessible, engaging, and measurable.</p>
            </article>

            <article className="about-card">
              <h3>Our Values</h3>
              <p>Equity • Quality • Integrity • Continuous Improvement • Ethicality</p>
            </article>
          </section>

          <section className="about-actions">
            <button className="btn primary" onClick={() => handleNavigation('/pricing')}>See Pricing</button>
            <button className="btn" onClick={() => handleNavigation('/')}>Back to Home</button>
          </section>
        </main>

      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
