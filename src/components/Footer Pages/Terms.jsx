import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Footer Pages/Terms.css';
import ParticleBackground from '../StarBg';
import Navbar from '../Navbar';
import Footer from '../Footer';
import MainNavbar from '../MainNavbar';

const Terms = () => {
  const navigate = useNavigate();
  const [expandedSection, setExpandedSection] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const termsData = [
    {
      id: 'acceptance',
      icon: '📋',
      title: 'Acceptance of Terms',
      subtitle: 'Your agreement to use our platform',
      content: {
        overview: 'By accessing and using SkillYug\'s educational platform, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.',
        points: [
          'These terms apply to all users of the platform',
          'You must be at least 13 years old to use our services',
          'Parental consent required for users under 18',
          'You are responsible for maintaining account security'
        ]
      }
    },
    {
      id: 'services',
      icon: '🎓',
      title: 'Educational Services',
      subtitle: 'What we provide to enhance your learning',
      content: {
        overview: 'SkillYug offers comprehensive educational services designed to help you excel in your academic pursuits.',
        services: [
          'Access to MAT and SAT preparation materials',
          'Interactive learning modules and practice tests',
          'Progress tracking and performance analytics',
          'Expert guidance and educational content',
          'Community forums and peer interaction'
        ],
        availability: 'We strive to provide 99.9% uptime, but cannot guarantee uninterrupted service due to maintenance, technical issues, or circumstances beyond our control.'
      }
    },
    {
      id: 'responsibilities',
      icon: '👤',
      title: 'User Responsibilities',
      subtitle: 'Your obligations as a platform user',
      content: {
        overview: 'As a user of our platform, you have certain responsibilities to ensure a safe and productive learning environment.',
        allowed: [
          'Maintain confidentiality of your login credentials',
          'Provide accurate and up-to-date information',
          'Use the platform only for educational purposes',
          'Report any unauthorized use of your account'
        ],
        prohibited: [
          'Sharing account credentials with others',
          'Copying or distributing our content without permission',
          'Using automated tools to access the platform',
          'Attempting to breach security measures',
          'Uploading malicious content or viruses',
          'Harassment or inappropriate behavior'
        ]
      }
    },
    {
      id: 'payment',
      icon: '💳',
      title: 'Subscription & Payment',
      subtitle: 'Billing and subscription information',
      content: {
        overview: 'Our flexible subscription plans are designed to provide you with the best value for your educational investment.',
        subscriptions: [
          'Monthly and annual subscription options available',
          'Free trial period for new users (where applicable)',
          'Automatic renewal unless cancelled',
          'Prices subject to change with 30 days notice'
        ],
        payment: [
          'Payment processed through secure third-party providers',
          'All fees are non-refundable except as stated in our Refund Policy',
          'Failed payments may result in service suspension',
          'You are responsible for applicable taxes'
        ]
      }
    },
    {
      id: 'content',
      icon: '📚',
      title: 'Content & Intellectual Property',
      subtitle: 'Rights and usage of educational materials',
      content: {
        overview: 'All educational materials are owned by SkillYug or our licensors and are protected by copyright laws.',
        rights: [
          'Personal, non-commercial use of our content',
          'Download materials for offline study (where permitted)',
          'Print materials for personal educational use'
        ],
        restrictions: [
          'No redistribution or commercial use of our content',
          'No reverse engineering of our platform',
          'No removal of copyright notices'
        ]
      }
    },
    {
      id: 'privacy',
      icon: '🔒',
      title: 'Privacy & Data Protection',
      subtitle: 'How we protect and handle your information',
      content: {
        overview: 'Your privacy is important to us. Our data collection and usage practices are detailed in our Privacy Policy, which forms part of these terms.',
        protections: [
          'We collect minimal necessary information',
          'Your data is encrypted and securely stored',
          'We do not sell your personal information',
          'You can request data deletion at any time'
        ]
      }
    },
    {
      id: 'liability',
      icon: '⚖️',
      title: 'Limitation of Liability',
      subtitle: 'Understanding service limitations and risks',
      content: {
        overview: 'SkillYug provides educational content "as is" without warranties. While we strive for accuracy, we cannot guarantee specific exam outcomes.',
        limitations: [
          'We are not liable for indirect or consequential damages',
          'Our total liability is limited to the amount you paid for services',
          'We are not responsible for third-party content or services',
          'You use our platform at your own risk'
        ]
      }
    },
    {
      id: 'modifications',
      icon: '🔄',
      title: 'Modifications & Termination',
      subtitle: 'Changes to terms and account management',
      content: {
        overview: 'We may update these terms from time to time. Significant changes will be communicated in advance.',
        changes: 'Changes will be communicated via email or platform notifications at least 30 days in advance.',
        termination: [
          'You may cancel your account at any time',
          'We may suspend accounts for terms violations',
          'Upon termination, access to paid content ceases',
          'Some provisions survive termination'
        ]
      }
    },
    {
      id: 'governing',
      icon: '🌍',
      title: 'Governing Law & Contact',
      subtitle: 'Legal framework and how to reach us',
      content: {
        overview: 'These terms are governed by the laws of India. Any disputes will be resolved through binding arbitration.',
        law: [
          'Indian law governs these terms',
          'Disputes subject to arbitration in New Delhi, India',
          'English language version controls in case of translations'
        ],
        contact: [
          'Email: legal@skillyug.com',
          'Phone: +91 9876543210',
          'Address: SkillYug Education Hub, Bangalore, Karnataka',
          'Business Hours: Monday-Friday, 9:00 AM - 6:00 PM IST'
        ]
      }
    }
  ];

  return (
    <>
      <MainNavbar />
      <div className="terms-page">
        <ParticleBackground />
        <div className="terms-container">
          {/* Hero Section */}
          <section className="terms-hero">
            <div className="hero-content glass-card">
              <div className="hero-icon">⚖️</div>
              <h1 className="hero-title">Terms & Conditions</h1>
              <p className="hero-subtitle">
                Understanding your rights and responsibilities on our platform
              </p>
              <div className="hero-meta">
                <div className="meta-item">
                  <span className="meta-icon">📅</span>
                  <span>Last updated: January 2024</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">⏱️</span>
                  <span>5 min read</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">🌟</span>
                  <span>Clear & Transparent</span>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Navigation */}
          <section className="quick-nav-section">
            <div className="quick-nav glass-card">
              <h3>📍 Quick Navigation</h3>
              <div className="nav-grid">
                {termsData.map((section, index) => (
                  <button
                    key={section.id}
                    className="nav-item"
                    onClick={() => document.getElementById(section.id).scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span className="nav-icon">{section.icon}</span>
                    <span className="nav-title">{section.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Terms Content */}
          <section className="terms-content">
            {termsData.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                className={`terms-section glass-card ${expandedSection === section.id ? 'expanded' : ''}`}
              >
                <div className="section-header" onClick={() => toggleSection(section.id)}>
                  <div className="section-info">
                    <div className="section-icon">{section.icon}</div>
                    <div className="section-titles">
                      <h2 className="section-title">{section.title}</h2>
                      <p className="section-subtitle">{section.subtitle}</p>
                    </div>
                  </div>
                  <div className="expand-icon">
                    {expandedSection === section.id ? '▲' : '▼'}
                  </div>
                </div>

                <div className={`section-content ${expandedSection === section.id ? 'show' : ''}`}>
                  <div className="content-overview">
                    <p>{section.content.overview}</p>
                  </div>

                  {/* Dynamic content rendering based on section */}
                  {section.id === 'acceptance' && (
                    <div className="content-list">
                      <h4>✅ Key Points:</h4>
                      <ul>
                        {section.content.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.id === 'services' && (
                    <>
                      <div className="content-list">
                        <h4>🎯 Our Services:</h4>
                        <ul>
                          {section.content.services.map((service, idx) => (
                            <li key={idx}>{service}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="content-note">
                        <h4>📡 Service Availability:</h4>
                        <p>{section.content.availability}</p>
                      </div>
                    </>
                  )}

                  {section.id === 'responsibilities' && (
                    <>
                      <div className="content-list allowed">
                        <h4>✅ Allowed Activities:</h4>
                        <ul>
                          {section.content.allowed.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="content-list prohibited">
                        <h4>❌ Prohibited Activities:</h4>
                        <ul>
                          {section.content.prohibited.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {section.id === 'payment' && (
                    <>
                      <div className="content-list">
                        <h4>💰 Subscription Plans:</h4>
                        <ul>
                          {section.content.subscriptions.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="content-list">
                        <h4>💳 Payment Terms:</h4>
                        <ul>
                          {section.content.payment.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {section.id === 'content' && (
                    <>
                      <div className="content-list allowed">
                        <h4>✅ Your Rights:</h4>
                        <ul>
                          {section.content.rights.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="content-list prohibited">
                        <h4>🚫 Restrictions:</h4>
                        <ul>
                          {section.content.restrictions.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {section.id === 'privacy' && (
                    <div className="content-list">
                      <h4>🛡️ Our Privacy Commitments:</h4>
                      <ul>
                        {section.content.protections.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.id === 'liability' && (
                    <div className="content-list">
                      <h4>⚠️ Limitation of Damages:</h4>
                      <ul>
                        {section.content.limitations.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.id === 'modifications' && (
                    <>
                      <div className="content-note">
                        <h4>📢 Changes to Terms:</h4>
                        <p>{section.content.changes}</p>
                      </div>
                      <div className="content-list">
                        <h4>🔚 Account Termination:</h4>
                        <ul>
                          {section.content.termination.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  {section.id === 'governing' && (
                    <>
                      <div className="content-list">
                        <h4>⚖️ Legal Framework:</h4>
                        <ul>
                          {section.content.law.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="content-list">
                        <h4>📞 Contact Information:</h4>
                        <ul>
                          {section.content.contact.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </section>

          {/* Summary Section */}
          <section className="terms-summary">
            <div className="summary-content glass-card">
              <div className="summary-header">
                <div className="summary-icon">📝</div>
                <h2>Agreement Summary</h2>
              </div>
              <div className="summary-grid">
                <div className="summary-item">
                  <span className="summary-emoji">🤝</span>
                  <h4>Fair Terms</h4>
                  <p>Clear, transparent terms that protect both parties</p>
                </div>
                <div className="summary-item">
                  <span className="summary-emoji">🛡️</span>
                  <h4>Your Privacy</h4>
                  <p>We respect and protect your personal information</p>
                </div>
                <div className="summary-item">
                  <span className="summary-emoji">🎓</span>
                  <h4>Quality Education</h4>
                  <p>Committed to providing excellent learning resources</p>
                </div>
                <div className="summary-item">
                  <span className="summary-emoji">📞</span>
                  <h4>Support Available</h4>
                  <p>Our team is here to help with any questions</p>
                </div>
              </div>
              <div className="summary-cta">
                <p>Have questions about these terms?</p>
                <button onClick={() => navigate('/contact')} className="contact-btn">
                  Contact Our Legal Team
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

export default Terms;
