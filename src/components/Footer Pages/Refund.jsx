import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import MainNavbar from '../MainNavbar';

import '../Footer Pages/Refund.css';

const Refund = () => {
  const navigate = useNavigate();
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const refundSections = [
    {
      id: 'policy',
      icon: '🚫',
      title: 'No Refund Policy',
      subtitle: 'All payments are final and non-refundable',
      content: {
        type: 'policy',
        overview: 'At Skillyug, all payments made for our educational services are final and non-refundable. This policy ensures fair pricing for all users and allows us to maintain high-quality educational content and platform services.',
        policy: {
          title: 'Final Payment Policy',
          description: 'Once a payment is successfully processed, it cannot be reversed, refunded, or credited back to your account under any circumstances.',
          points: [
            'All sales are final upon successful payment processing',
            'No refunds will be issued for any reason after payment completion',
            'Digital services are considered delivered immediately upon payment',
            'Course access and premium features are activated instantly',
            'Payment confirmation constitutes acceptance of this no-refund policy'
          ]
        }
      }
    },
    {
      id: 'reasons',
      icon: '💡',
      title: 'Why No Refunds?',
      subtitle: 'Understanding our policy reasoning',
      content: {
        type: 'reasons',
        overview: 'Our no-refund policy is implemented for several important reasons that benefit both our platform and all users.',
        reasons: [
          {
            icon: '🎓',
            title: 'Instant Access to Digital Content',
            description: 'You receive immediate access to all educational materials, practice tests, and premium features upon payment.'
          },
          {
            icon: '💰',
            title: 'Competitive Pricing',
            description: 'Our no-refund policy allows us to offer the most competitive prices in the market for premium educational content.'
          },
          {
            icon: '🛡️',
            title: 'Fair Usage Prevention',
            description: 'Prevents misuse of our platform where users might consume content and then request refunds.'
          },
          {
            icon: '⚡',
            title: 'Operational Efficiency',
            description: 'Eliminates refund processing costs, allowing us to invest more in platform improvements and content quality.'
          },
          {
            icon: '🎯',
            title: 'Commitment to Learning',
            description: 'Encourages serious commitment to your educational journey and maximizes learning outcomes.'
          }
        ]
      }
    },
    {
      id: 'exceptions',
      icon: '⚠️',
      title: 'No Exceptions',
      subtitle: 'This policy applies to all situations',
      content: {
        type: 'exceptions',
        overview: 'Our no-refund policy is absolute and applies to all circumstances without exception.',
        situations: [
          {
            icon: '❌',
            title: 'Technical Issues',
            description: 'We provide technical support to resolve any issues, but refunds are not available.'
          },
          {
            icon: '❌',
            title: 'Change of Mind',
            description: 'Personal decisions or changes in plans do not qualify for refunds.'
          },
          {
            icon: '❌',
            title: 'Exam Results',
            description: 'Performance in exams or tests does not affect the final payment policy.'
          },
          {
            icon: '❌',
            title: 'Duplicate Payments',
            description: 'Accidental duplicate payments will be converted to account credits, not refunded.'
          },
          {
            icon: '❌',
            title: 'Unused Services',
            description: 'Not utilizing purchased services does not qualify for any refund or credit.'
          },
          {
            icon: '❌',
            title: 'Billing Disputes',
            description: 'All billing disputes must be resolved through account credits or service extensions.'
          }
        ]
      }
    },
    {
      id: 'alternatives',
      icon: '🔄',
      title: 'Alternative Solutions',
      subtitle: 'What we offer instead of refunds',
      content: {
        type: 'alternatives',
        overview: 'While we cannot provide refunds, we offer various alternative solutions to address your concerns.',
        solutions: [
          {
            icon: '💳',
            title: 'Account Credits',
            description: 'For billing errors or duplicate payments, we provide account credits for future use.',
            availability: 'Available for billing errors only'
          },
          {
            icon: '🛠️',
            title: 'Technical Support',
            description: 'Comprehensive support to resolve any platform or content-related issues.',
            availability: 'Available 24/7'
          },
          {
            icon: '📚',
            title: 'Extended Access',
            description: 'In exceptional cases, we may provide extended access periods instead of refunds.',
            availability: 'Case-by-case basis'
          },
          {
            icon: '🎯',
            title: 'Plan Upgrades',
            description: 'Option to upgrade your current plan by paying the difference.',
            availability: 'Always available'
          }
        ]
      }
    },
    {
      id: 'before-purchase',
      icon: '🛒',
      title: 'Before You Purchase',
      subtitle: 'Important considerations',
      content: {
        type: 'before-purchase',
        overview: 'Please carefully consider these points before making any payment to avoid disappointment.',
        checklist: [
          {
            icon: '✅',
            title: 'Review Course Content',
            description: 'Thoroughly review all course descriptions, syllabus, and included features.'
          },
          {
            icon: '✅',
            title: 'Check System Requirements',
            description: 'Ensure your device and internet connection meet our platform requirements.'
          },
          {
            icon: '✅',
            title: 'Understand the Policy',
            description: 'Fully read and understand this no-refund policy before proceeding.'
          },
          {
            icon: '✅',
            title: 'Try Free Content',
            description: 'Utilize our free resources and trial content to evaluate the platform quality.'
          },
          {
            icon: '✅',
            title: 'Contact Support',
            description: 'Ask any questions before purchase through our support channels.'
          }
        ]
      }
    },
    {
      id: 'contact',
      icon: '📞',
      title: 'Questions & Support',
      subtitle: 'Get help before and after purchase',
      content: {
        type: 'contact',
        overview: 'If you have any questions about this policy or need support, please contact us before making a purchase.',
        support: [
          {
            icon: '📧',
            title: 'Email Support',
            method: 'support@skillyug.com',
            availability: 'Response within 24 hours',
            note: 'For general inquiries and policy questions'
          },
          {
            icon: '💬',
            title: 'Live Chat',
            method: 'Available on platform',
            availability: 'Mon-Sat, 10:00 AM - 8:00 PM IST',
            note: 'For immediate assistance and pre-purchase questions'
          },
          {
            icon: '📱',
            title: 'Phone Support',
            method: '+91 9876543210',
            availability: 'Mon-Fri, 9:00 AM - 6:00 PM IST',
            note: 'For urgent technical support only'
          }
        ]
      }
    }
  ];

  return (
    <div className="refund-page">
      
      <MainNavbar />
      
      <div className="refund-container">
        {/* Hero Section */}
        <div className="glass-card refund-hero">
          <div className="hero-content">
            <div className="hero-icon">🚫</div>
            <h1 className="hero-title">Refund Policy</h1>
            <p className="hero-subtitle">
              All payments are final and non-refundable. Please read our complete policy before making any purchase.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-icon">⚡</div>
                <div className="stat-info">
                  <span className="stat-label">Policy Type</span>
                  <span className="stat-value">No Refunds</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">🔒</div>
                <div className="stat-info">
                  <span className="stat-label">All Payments</span>
                  <span className="stat-value">Final</span>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">📅</div>
                <div className="stat-info">
                  <span className="stat-label">Last Updated</span>
                  <span className="stat-value">Jan 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Overview */}
        <div className="glass-card policy-overview">
          <div className="overview-header">
            <h2>Policy Overview</h2>
            <p>Understanding our no-refund commitment</p>
          </div>
          <div className="policy-grid">
            <div className="policy-item">
              <div className="policy-icon">🛡️</div>
              <h4>All Sales Final</h4>
              <p>Every payment is processed as a final transaction with no possibility of reversal.</p>
            </div>
            <div className="policy-item">
              <div className="policy-icon">⏰</div>
              <h4>Instant Access</h4>
              <p>Digital content and services are delivered immediately upon successful payment.</p>
            </div>
            <div className="policy-item">
              <div className="policy-icon">💰</div>
              <h4>Fair Pricing</h4>
              <p>Our no-refund policy enables competitive pricing for premium educational content.</p>
            </div>
            <div className="policy-item">
              <div className="policy-icon">🎯</div>
              <h4>Quality Commitment</h4>
              <p>We focus resources on delivering exceptional educational experiences instead of processing refunds.</p>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="refund-content">
          {refundSections.map((section) => (
            <div 
              key={section.id} 
              className={`glass-card refund-section ${expandedSection === section.id ? 'expanded' : ''}`}
            >
              <div 
                className="section-header" 
                onClick={() => toggleSection(section.id)}
              >
                <div className="section-info">
                  <div className="section-icon">{section.icon}</div>
                  <div className="section-titles">
                    <h3 className="section-title">{section.title}</h3>
                    <p className="section-subtitle">{section.subtitle}</p>
                  </div>
                </div>
                <div className="expand-icon">
                  {expandedSection === section.id ? '▼' : '▶'}
                </div>
              </div>
              
              <div className={`section-content ${expandedSection === section.id ? 'show' : ''}`}>
                <div className="content-overview">
                  <p>{section.content.overview}</p>
                </div>
                
                {section.content.type === 'policy' && (
                  <div className="policy-details">
                    <div className="policy-highlight">
                      <h4>{section.content.policy.title}</h4>
                      <p>{section.content.policy.description}</p>
                    </div>
                    <div className="policy-points">
                      <h4>Key Points:</h4>
                      <ul className="policy-list">
                        {section.content.policy.points.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                {section.content.type === 'reasons' && (
                  <div className="reasons-grid">
                    {section.content.reasons.map((reason, index) => (
                      <div key={index} className="reason-item">
                        <div className="reason-icon">{reason.icon}</div>
                        <div className="reason-info">
                          <h5>{reason.title}</h5>
                          <p>{reason.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {section.content.type === 'exceptions' && (
                  <div className="exceptions-grid">
                    {section.content.situations.map((situation, index) => (
                      <div key={index} className="exception-item">
                        <div className="exception-icon">{situation.icon}</div>
                        <div className="exception-info">
                          <h5>{situation.title}</h5>
                          <p>{situation.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {section.content.type === 'alternatives' && (
                  <div className="alternatives-grid">
                    {section.content.solutions.map((solution, index) => (
                      <div key={index} className="alternative-item">
                        <div className="alternative-header">
                          <div className="alternative-icon">{solution.icon}</div>
                          <h5>{solution.title}</h5>
                        </div>
                        <p>{solution.description}</p>
                        <div className="availability">{solution.availability}</div>
                      </div>
                    ))}
                  </div>
                )}
                
                {section.content.type === 'before-purchase' && (
                  <div className="checklist-grid">
                    {section.content.checklist.map((item, index) => (
                      <div key={index} className="checklist-item">
                        <div className="checklist-icon">{item.icon}</div>
                        <div className="checklist-info">
                          <h5>{item.title}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {section.content.type === 'contact' && (
                  <div className="contact-options">
                    {section.content.support.map((contact, index) => (
                      <div key={index} className="contact-option">
                        <div className="contact-icon">{contact.icon}</div>
                        <div className="contact-info">
                          <h4>{contact.title}</h4>
                          <p>{contact.method}</p>
                          <span className="availability">{contact.availability}</span>
                          <div className="contact-note">{contact.note}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Final Warning */}
        <div className="glass-card final-warning">
          <div className="warning-content">
            <div className="warning-icon">⚠️</div>
            <h2>Important Notice</h2>
            <p>
              By proceeding with any payment on our platform, you acknowledge that you have read, 
              understood, and agree to this no-refund policy. All payments are final and cannot be 
              reversed under any circumstances.
            </p>
            <div className="warning-actions">
              <button 
                onClick={() => navigate('/')} 
                className="home-btn"
              >
                Return to Home
              </button>
              <button 
                onClick={() => navigate('/contact')} 
                className="contact-btn"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Refund;
