import React, { useState } from 'react';
import '../Footer Pages/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-us-page">
      <div className="contact-container">
        <header className="contact-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Get in touch with our team.</p>
        </header>

        <div className="contact-content">
          <div className="contact-info">
            <h2>📞 Get in Touch</h2>
            
            <div className="info-card">
              <h3>📧 Email Us</h3>
              <p>support@skillyug.com</p>
              <p>info@skillyug.com</p>
            </div>

            <div className="info-card">
              <h3>📱 Call Us</h3>
              <p>+91 9876543210</p>
              <p>+91 9876543211</p>
            </div>

            <div className="info-card">
              <h3>🏢 Office Address</h3>
              <p>Skillyug Education Hub</p>
              <p>123 Learning Street</p>
              <p>Education City, EC 12345</p>
              <p>India</p>
            </div>

            <div className="info-card">
              <h3>⏰ Office Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>

            <div className="info-card">
              <h3>🌐 Follow Us</h3>
              <div className="social-links">
                <a href="#" target="_blank">Facebook</a>
                <a href="#" target="_blank">Twitter</a>
                <a href="#" target="_blank">LinkedIn</a>
                <a href="#" target="_blank">Instagram</a>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>💬 Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
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
                  <option value="billing">Billing Questions</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message 📤
              </button>
            </form>
          </div>
        </div>

        <div className="back-home">
          <button onClick={() => window.history.back()} className="back-btn">
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
