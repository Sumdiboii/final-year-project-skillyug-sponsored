import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Footer Pages/ContactUs.css';
import ParticleBackground from '../StarBg';
import Navbar from '../Navbar';
import Footer from '../Footer';

const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <>
      <Navbar />
      <div className="contact-us-page">
        <ParticleBackground />
        
        <div className="contact-container">
          {/* Hero Section */}
          <section className="contact-hero">
            <div className="hero-content">
              <h1 className="hero-title">Get in Touch</h1>
              <p className="hero-subtitle">
                We're here to help you succeed. Reach out to us for any questions, support, or feedback.
              </p>
            </div>
          </section>

          {/* Main Contact Section */}
          <section className="contact-main-section">
            <div className="contact-grid">
              
              {/* Contact Information */}
              <div className="contact-info-container glass-card">
                <div className="contact-info-header">
                  <h2>📞 Contact Information</h2>
                  <p>Connect with us through any of these channels</p>
                </div>
                
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <div className="contact-icon">📧</div>
                    <div className="contact-details">
                      <h3>Email Address</h3>
                      <p>support@skillyug.com</p>
                      <p>info@prepmark.skillyug.com</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon">📱</div>
                    <div className="contact-details">
                      <h3>Phone Numbers</h3>
                      <p>+91 9876543210 (Support)</p>
                      <p>+91 9876543211 (General)</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-icon"></div>
                    <div className="contact-details">
                      <h3>Office Address</h3>
                      <p>Skillyug Education Hub</p>
                      <p>123 Innovation Street, Tech City</p>
                      <p>Bangalore, Karnataka 560001</p>
                      <p>India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form-container glass-card">
                <div className="form-header">
                  <h2>💬 Send us a Message</h2>
                  <p>Fill out the form below and we'll get back to you as soon as possible</p>
                </div>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="technical">Technical Support</option>
                        <option value="billing">Billing & Payment</option>
                        <option value="feedback">Feedback & Suggestions</option>
                        <option value="partnership">Business Partnership</option>
                        <option value="academic">Academic Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Please describe your inquiry, question, or feedback in detail..."
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    <span>Send Message</span>
                    <span className="btn-icon">📤</span>
                  </button>
                </form>

                <div className="form-footer">
                  <p>
                    <strong>Response Time:</strong> We typically respond within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Immediate Help Section */}
          <section className="support-section">
            <div className="support-content glass-card">
              <h2>🆘 Need Immediate Help?</h2>
              <div className="support-options">
                <div className="support-option">
                  <div className="support-icon">�</div>
                  <h3>Emergency Support</h3>
                  <p>Call us directly for urgent academic assistance</p>
                  <button 
                    className="support-btn"
                    onClick={() => window.open('tel:+919876543210')}
                  >
                    Call Now
                  </button>
                </div>
                
                <div className="support-option">
                  <div className="support-icon">�</div>
                  <h3>Live Chat</h3>
                  <p>Connect with our support team instantly</p>
                  <button 
                    className="support-btn"
                    onClick={() => alert('Live chat will be available soon!')}
                  >
                    Start Chat
                  </button>
                </div>
                
                <div className="support-option">
                  <div className="support-icon">📚</div>
                  <h3>Quick Help</h3>
                  <p>Browse our FAQ for immediate answers</p>
                  <button 
                    className="support-btn"
                    onClick={() => navigate('/faq')}
                  >
                    Visit FAQ
                  </button>
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

export default ContactUs;
