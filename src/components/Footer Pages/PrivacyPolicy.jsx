import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Footer Pages/PrivacyPolicy.css';
import ParticleBackground from '../StarBg';
import Navbar from '../Navbar';
import Footer from '../Footer';

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const [expandedSection, setExpandedSection] = useState(null);
  const [privacyScore, setPrivacyScore] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    // Animate privacy score
    const timer = setTimeout(() => {
      setPrivacyScore(95);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const privacyData = [
    {
      id: 'collection',
      icon: '🔍',
      title: 'Information We Collect',
      subtitle: 'What data we gather and why',
      color: '#6366f1',
      content: {
        overview: 'We collect only the information necessary to provide you with the best educational experience while respecting your privacy.',
        categories: [
          {
            type: 'Personal Information',
            icon: '👤',
            items: [
              'Name and contact information (email, phone)',
              'Educational background and academic preferences',
              'Profile information and learning goals',
              'Account credentials (securely encrypted)'
            ]
          },
          {
            type: 'Usage Information',
            icon: '📊',
            items: [
              'Learning progress and performance data',
              'Course completion rates and quiz scores',
              'Time spent on different platform sections',
              'Device information and browser preferences'
            ]
          },
          {
            type: 'Payment Information',
            icon: '💳',
            items: [
              'Billing address and payment method',
              'Transaction history and subscription status',
              'Payment processed through secure third-party providers',
              'We never store full credit card numbers'
            ]
          }
        ]
      }
    },
    {
      id: 'usage',
      icon: '🎯',
      title: 'How We Use Your Data',
      subtitle: 'Purposes and benefits of data processing',
      color: '#10b981',
      content: {
        overview: 'Your data helps us create personalized learning experiences and improve our educational platform.',
        purposes: [
          'Provide personalized learning recommendations',
          'Track your academic progress and achievements',
          'Send important course updates and notifications',
          'Improve platform features and user experience',
          'Provide customer support and technical assistance',
          'Process payments and manage subscriptions',
          'Ensure platform security and prevent fraud',
          'Conduct research to enhance educational outcomes'
        ]
      }
    },
    {
      id: 'protection',
      icon: '🛡️',
      title: 'Data Protection & Security',
      subtitle: 'How we keep your information safe',
      color: '#f59e0b',
      content: {
        overview: 'We implement industry-leading security measures to protect your personal information at all times.',
        measures: [
          {
            category: 'Encryption & Storage',
            icon: '🔐',
            details: [
              'End-to-end SSL/TLS encryption for all data transmission',
              'AES-256 encryption for database storage',
              'Secure cloud infrastructure with regular backups',
              'Data centers with physical security controls'
            ]
          },
          {
            category: 'Access Controls',
            icon: '🚪',
            details: [
              'Role-based access control for team members',
              'Multi-factor authentication requirements',
              'Regular access reviews and audits',
              'Immediate access revocation when needed'
            ]
          },
          {
            category: 'Monitoring & Auditing',
            icon: '👁️',
            details: [
              '24/7 security monitoring and threat detection',
              'Regular security audits and penetration testing',
              'Incident response procedures and logging',
              'Compliance with international security standards'
            ]
          }
        ]
      }
    },
    {
      id: 'sharing',
      icon: '🤝',
      title: 'Information Sharing',
      subtitle: 'When and how we share your data',
      color: '#ef4444',
      content: {
        overview: 'We NEVER sell your personal information. We only share data in specific, limited circumstances with your best interests in mind.',
        policy: 'We do NOT sell, trade, or rent your personal information to third parties.',
        situations: [
          {
            title: 'With Your Consent',
            icon: '✅',
            description: 'Only when you explicitly give us permission'
          },
          {
            title: 'Service Providers',
            icon: '🔧',
            description: 'Trusted partners who help us operate the platform'
          },
          {
            title: 'Legal Requirements',
            icon: '⚖️',
            description: 'To comply with laws, regulations, or court orders'
          },
          {
            title: 'Safety & Security',
            icon: '🚨',
            description: 'To protect our users and prevent fraud'
          },
          {
            title: 'Business Transfer',
            icon: '🏢',
            description: 'In case of merger or acquisition (with prior notice)'
          }
        ]
      }
    },
    {
      id: 'cookies',
      icon: '🍪',
      title: 'Cookies & Tracking',
      subtitle: 'How we use cookies to enhance your experience',
      color: '#8b5cf6',
      content: {
        overview: 'Cookies help us provide a better, more personalized experience on our platform.',
        definition: 'Cookies are small files stored on your device that remember your preferences and help improve your experience.',
        types: [
          {
            name: 'Essential Cookies',
            icon: '⚡',
            purpose: 'Required for basic platform functionality',
            canDisable: false
          },
          {
            name: 'Performance Cookies',
            icon: '📈',
            purpose: 'Help us understand platform usage and performance',
            canDisable: true
          },
          {
            name: 'Preference Cookies',
            icon: '⚙️',
            purpose: 'Remember your settings and customizations',
            canDisable: true
          },
          {
            name: 'Marketing Cookies',
            icon: '🎯',
            purpose: 'Show relevant content and educational recommendations',
            canDisable: true
          }
        ],
        control: 'You can control cookie settings through your browser preferences or our cookie management tool.'
      }
    },
    {
      id: 'rights',
      icon: '👑',
      title: 'Your Privacy Rights',
      subtitle: 'Control over your personal information',
      color: '#06b6d4',
      content: {
        overview: 'You have complete control over your personal information. Here are your rights under privacy laws.',
        rights: [
          {
            right: 'Right to Access',
            icon: '🔍',
            description: 'Request a copy of all personal data we hold about you',
            action: 'Download your data anytime from your account settings'
          },
          {
            right: 'Right to Correction',
            icon: '✏️',
            description: 'Update or correct any inaccurate information',
            action: 'Edit your profile information directly in your account'
          },
          {
            right: 'Right to Deletion',
            icon: '🗑️',
            description: 'Request complete deletion of your personal data',
            action: 'Contact our privacy team or use account deletion option'
          },
          {
            right: 'Right to Opt-out',
            icon: '📵',
            description: 'Unsubscribe from marketing communications',
            action: 'Use unsubscribe links or update email preferences'
          },
          {
            right: 'Right to Portability',
            icon: '📦',
            description: 'Get your data in a portable, machine-readable format',
            action: 'Export your learning data from account settings'
          },
          {
            right: 'Right to Object',
            icon: '🚫',
            description: 'Object to certain types of data processing',
            action: 'Contact privacy team to discuss specific objections'
          }
        ]
      }
    },
    {
      id: 'children',
      icon: '👶',
      title: 'Children\'s Privacy',
      subtitle: 'Special protections for young learners',
      color: '#f97316',
      content: {
        overview: 'We take extra care to protect the privacy of children and comply with all applicable children\'s privacy laws.',
        agePolicy: 'Our platform serves students of all ages with appropriate privacy protections for each age group.',
        protections: [
          {
            ageGroup: 'Under 13 Years',
            icon: '👶',
            requirements: [
              'Parental consent required before account creation',
              'Limited data collection - only educational essentials',
              'No behavioral advertising or marketing',
              'Parents can review and delete child\'s information'
            ]
          },
          {
            ageGroup: '13-17 Years',
            icon: '🧒',
            requirements: [
              'Parental notification of account creation',
              'Enhanced privacy settings by default',
              'Educational focus with limited data sharing',
              'Special consent for certain features'
            ]
          },
          {
            ageGroup: '18+ Years',
            icon: '🧑',
            requirements: [
              'Full control over privacy settings',
              'Complete access to all platform features',
              'Standard data processing practices',
              'Ability to manage all privacy preferences'
            ]
          }
        ]
      }
    },
    {
      id: 'updates',
      icon: '🔄',
      title: 'Policy Updates',
      subtitle: 'How we communicate changes',
      color: '#ec4899',
      content: {
        overview: 'We may update this Privacy Policy to reflect changes in our practices, technology, or legal requirements.',
        commitment: 'We will always notify you of significant changes before they take effect.',
        notifications: [
          {
            method: 'Email Notification',
            icon: '📧',
            description: 'Direct email to all registered users',
            timing: '30 days before major changes'
          },
          {
            method: 'Platform Notice',
            icon: '📢',
            description: 'Prominent banner on our platform',
            timing: 'Immediate notice of any changes'
          },
          {
            method: 'Updated Date',
            icon: '📅',
            description: 'Last modified date at top of policy',
            timing: 'Updated immediately when changes are made'
          }
        ]
      }
    }
  ];

  return (
    <>
      <Navbar />
      <div className="privacy-policy-page">
        <ParticleBackground />
        <div className="privacy-container">
          {/* Hero Section */}
          <section className="privacy-hero">
            <div className="hero-content glass-card">
              <div className="hero-icon">🔒</div>
              <h1 className="hero-title">Privacy Policy</h1>
              <p className="hero-subtitle">
                Your privacy is our priority. Learn how we protect and handle your personal information.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-icon">📅</div>
                  <div className="stat-info">
                    <span className="stat-label">Last Updated</span>
                    <span className="stat-value">January 2024</span>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">⏱️</div>
                  <div className="stat-info">
                    <span className="stat-label">Read Time</span>
                    <span className="stat-value">8 min read</span>
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">🛡️</div>
                  <div className="stat-info">
                    <span className="stat-label">Privacy Score</span>
                    <div className="privacy-score">
                      <span className="score-value">{privacyScore}%</span>
                      <div className="score-bar">
                        <div 
                          className="score-fill" 
                          style={{width: `${privacyScore}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Overview */}
          <section className="privacy-overview">
            <div className="overview-content glass-card">
              <div className="overview-header">
                <h2>🌟 Our Privacy Promise</h2>
                <p>We believe privacy is a fundamental right. Here's our commitment to you:</p>
              </div>
              <div className="promise-grid">
                <div className="promise-item">
                  <div className="promise-icon">🚫</div>
                  <h4>No Data Selling</h4>
                  <p>We never sell your personal information to third parties</p>
                </div>
                <div className="promise-item">
                  <div className="promise-icon">🔐</div>
                  <h4>Secure Storage</h4>
                  <p>All data encrypted with industry-standard protection</p>
                </div>
                <div className="promise-item">
                  <div className="promise-icon">🎯</div>
                  <h4>Educational Purpose</h4>
                  <p>Data used solely to enhance your learning experience</p>
                </div>
                <div className="promise-item">
                  <div className="promise-icon">👑</div>
                  <h4>Your Control</h4>
                  <p>Complete control over your personal information</p>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy Sections */}
          <section className="privacy-content">
            {privacyData.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                className={`privacy-section glass-card ${expandedSection === section.id ? 'expanded' : ''}`}
              >
                <div className="section-header" onClick={() => toggleSection(section.id)}>
                  <div className="section-info">
                    <div className="section-icon" style={{color: section.color}}>
                      {section.icon}
                    </div>
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
                  {section.id === 'collection' && (
                    <div className="data-categories">
                      {section.content.categories.map((category, idx) => (
                        <div key={idx} className="data-category">
                          <div className="category-header">
                            <span className="category-icon">{category.icon}</span>
                            <h4>{category.type}</h4>
                          </div>
                          <ul className="category-items">
                            {category.items.map((item, itemIdx) => (
                              <li key={itemIdx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.id === 'usage' && (
                    <div className="usage-purposes">
                      <h4>✨ How Your Data Benefits You:</h4>
                      <div className="purposes-grid">
                        {section.content.purposes.map((purpose, idx) => (
                          <div key={idx} className="purpose-item">
                            <span className="purpose-check">✓</span>
                            <span>{purpose}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.id === 'protection' && (
                    <div className="security-measures">
                      {section.content.measures.map((measure, idx) => (
                        <div key={idx} className="security-category">
                          <div className="category-header">
                            <span className="category-icon">{measure.icon}</span>
                            <h4>{measure.category}</h4>
                          </div>
                          <ul className="security-details">
                            {measure.details.map((detail, detailIdx) => (
                              <li key={detailIdx}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.id === 'sharing' && (
                    <>
                      <div className="sharing-policy">
                        <div className="policy-highlight">
                          <h4>🚫 Our No-Selling Promise:</h4>
                          <p>{section.content.policy}</p>
                        </div>
                      </div>
                      <div className="sharing-situations">
                        <h4>📋 Limited Sharing Situations:</h4>
                        <div className="situations-grid">
                          {section.content.situations.map((situation, idx) => (
                            <div key={idx} className="situation-item">
                              <div className="situation-icon">{situation.icon}</div>
                              <div className="situation-info">
                                <h5>{situation.title}</h5>
                                <p>{situation.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {section.id === 'cookies' && (
                    <>
                      <div className="cookies-definition">
                        <h4>🍪 What Are Cookies?</h4>
                        <p>{section.content.definition}</p>
                      </div>
                      <div className="cookie-types">
                        <h4>📊 Types of Cookies We Use:</h4>
                        {section.content.types.map((cookie, idx) => (
                          <div key={idx} className="cookie-type">
                            <div className="cookie-header">
                              <span className="cookie-icon">{cookie.icon}</span>
                              <h5>{cookie.name}</h5>
                              <span className={`cookie-control ${cookie.canDisable ? 'optional' : 'required'}`}>
                                {cookie.canDisable ? 'Optional' : 'Required'}
                              </span>
                            </div>
                            <p>{cookie.purpose}</p>
                          </div>
                        ))}
                      </div>
                      <div className="cookie-control">
                        <h4>⚙️ Cookie Control:</h4>
                        <p>{section.content.control}</p>
                      </div>
                    </>
                  )}

                  {section.id === 'rights' && (
                    <div className="privacy-rights">
                      <h4>👑 Your Rights Include:</h4>
                      <div className="rights-grid">
                        {section.content.rights.map((right, idx) => (
                          <div key={idx} className="right-item">
                            <div className="right-header">
                              <span className="right-icon">{right.icon}</span>
                              <h5>{right.right}</h5>
                            </div>
                            <p className="right-description">{right.description}</p>
                            <div className="right-action">
                              <strong>How to exercise:</strong> {right.action}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="rights-contact">
                        <p>To exercise any of these rights, contact us at <strong>privacy@skillyug.com</strong></p>
                      </div>
                    </div>
                  )}

                  {section.id === 'children' && (
                    <>
                      <div className="age-policy">
                        <h4>👶 Age-Based Protection:</h4>
                        <p>{section.content.agePolicy}</p>
                      </div>
                      <div className="age-groups">
                        {section.content.protections.map((group, idx) => (
                          <div key={idx} className="age-group">
                            <div className="group-header">
                              <span className="group-icon">{group.icon}</span>
                              <h5>{group.ageGroup}</h5>
                            </div>
                            <ul className="group-requirements">
                              {group.requirements.map((req, reqIdx) => (
                                <li key={reqIdx}>{req}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {section.id === 'updates' && (
                    <>
                      <div className="update-commitment">
                        <h4>📢 Our Commitment:</h4>
                        <p>{section.content.commitment}</p>
                      </div>
                      <div className="notification-methods">
                        <h4>📨 How We'll Notify You:</h4>
                        <div className="methods-grid">
                          {section.content.notifications.map((method, idx) => (
                            <div key={idx} className="method-item">
                              <div className="method-icon">{method.icon}</div>
                              <div className="method-info">
                                <h5>{method.method}</h5>
                                <p>{method.description}</p>
                                <span className="method-timing">{method.timing}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </section>

          {/* Contact Section */}
          <section className="privacy-contact">
            <div className="contact-content glass-card">
              <div className="contact-header">
                <h2>📞 Privacy Questions?</h2>
                <p>We're here to help you understand and control your privacy</p>
              </div>
              <div className="contact-options">
                <div className="contact-option">
                  <div className="contact-icon">📧</div>
                  <div className="contact-info">
                    <h4>Email Our Privacy Team</h4>
                    <p>privacy@skillyug.com</p>
                    <span>Response within 24 hours</span>
                  </div>
                </div>
                <div className="contact-option">
                  <div className="contact-icon">💬</div>
                  <div className="contact-info">
                    <h4>Live Privacy Chat</h4>
                    <p>Available during business hours</p>
                    <button 
                      className="privacy-chat-btn"
                      onClick={() => alert('Privacy chat will be available soon!')}
                    >
                      Start Chat
                    </button>
                  </div>
                </div>
                <div className="contact-option">
                  <div className="contact-info">
                    <h4>Need Help Exercising Your Rights?</h4>
                    <p>Our privacy team can guide you through the process</p>
                    <button 
                      className="rights-help-btn"
                      onClick={() => navigate('/contact')}
                    >
                      Get Help
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
