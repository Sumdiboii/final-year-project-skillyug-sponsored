import React from 'react';
import '../Footer Pages/Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      <div className="terms-container">
        <header className="terms-header">
          <h1>Terms & Conditions</h1>
          <p>Last updated: January 2024</p>
        </header>

        <div className="terms-content">
          <section className="terms-section">
            <h2>📋 Acceptance of Terms</h2>
            <div className="terms-card">
              <p>
                By accessing and using Skillyug's educational platform, you agree to be bound by these Terms and Conditions. 
                If you do not agree to these terms, please do not use our services.
              </p>
              <ul>
                <li>✅ These terms apply to all users of the platform</li>
                <li>✅ You must be at least 13 years old to use our services</li>
                <li>✅ Parental consent required for users under 18</li>
                <li>✅ You are responsible for maintaining account security</li>
              </ul>
            </div>
          </section>

          <section className="terms-section">
            <h2>🎓 Educational Services</h2>
            <div className="terms-card">
              <h3>What We Provide</h3>
              <ul>
                <li>📚 Access to NMMS and SAT preparation materials</li>
                <li>📚 Interactive learning modules and practice tests</li>
                <li>📚 Progress tracking and performance analytics</li>
                <li>📚 Expert guidance and educational content</li>
                <li>📚 Community forums and peer interaction</li>
              </ul>
              
              <h3>Service Availability</h3>
              <p>
                We strive to provide 99.9% uptime, but cannot guarantee uninterrupted service due to maintenance, 
                technical issues, or circumstances beyond our control.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <h2>👤 User Responsibilities</h2>
            <div className="terms-card">
              <h3>Account Usage</h3>
              <ul>
                <li>🔐 Maintain confidentiality of your login credentials</li>
                <li>🔐 Provide accurate and up-to-date information</li>
                <li>🔐 Use the platform only for educational purposes</li>
                <li>🔐 Report any unauthorized use of your account</li>
              </ul>
              
              <h3>Prohibited Activities</h3>
              <ul>
                <li>❌ Sharing account credentials with others</li>
                <li>❌ Copying or distributing our content without permission</li>
                <li>❌ Using automated tools to access the platform</li>
                <li>❌ Attempting to breach security measures</li>
                <li>❌ Uploading malicious content or viruses</li>
                <li>❌ Harassment or inappropriate behavior</li>
              </ul>
            </div>
          </section>

          <section className="terms-section">
            <h2>💳 Subscription & Payment</h2>
            <div className="terms-card">
              <h3>Subscription Plans</h3>
              <ul>
                <li>💰 Monthly and annual subscription options available</li>
                <li>💰 Free trial period for new users (where applicable)</li>
                <li>💰 Automatic renewal unless cancelled</li>
                <li>💰 Prices subject to change with 30 days notice</li>
              </ul>
              
              <h3>Payment Terms</h3>
              <ul>
                <li>💳 Payment processed through secure third-party providers</li>
                <li>💳 All fees are non-refundable except as stated in our Refund Policy</li>
                <li>💳 Failed payments may result in service suspension</li>
                <li>💳 You are responsible for applicable taxes</li>
              </ul>
            </div>
          </section>

          <section className="terms-section">
            <h2>📖Content & Intellectual Property</h2>
            <div className="terms-card">
              <h3>Our Content</h3>
              <p>
                All educational materials, including but not limited to text, images, videos, quizzes, and software, 
                are owned by Skillyug or our licensors and are protected by copyright laws.
              </p>
              
              <h3>Your Rights</h3>
              <ul>
                <li>📝 Personal, non-commercial use of our content</li>
                <li>📝 Download materials for offline study (where permitted)</li>
                <li>📝 Print materials for personal educational use</li>
              </ul>
              
              <h3>Restrictions</h3>
              <ul>
                <li>🚫 No redistribution or commercial use of our content</li>
                <li>🚫 No reverse engineering of our platform</li>
                <li>🚫 No removal of copyright notices</li>
              </ul>
            </div>
          </section>

          <section className="terms-section">
            <h2>🔒 Privacy & Data Protection</h2>
            <div className="terms-card">
              <p>
                Your privacy is important to us. Our data collection and usage practices are detailed in our 
                <strong> Privacy Policy</strong>, which forms part of these terms.
              </p>
              <ul>
                <li>🛡️ We collect minimal necessary information</li>
                <li>🛡️ Your data is encrypted and securely stored</li>
                <li>🛡️ We do not sell your personal information</li>
                <li>🛡️ You can request data deletion at any time</li>
              </ul>
            </div>
          </section>

          <section className="terms-section">
            <h2>⚖️ Limitation of Liability</h2>
            <div className="terms-card">
              <h3>Service Disclaimer</h3>
              <p>
                Skillyug provides educational content "as is" without warranties. While we strive for accuracy, 
                we cannot guarantee that our materials will result in specific exam outcomes.
              </p>
              
              <h3>Limitation of Damages</h3>
              <ul>
                <li>⚠️ We are not liable for indirect or consequential damages</li>
                <li>⚠️ Our total liability is limited to the amount you paid for services</li>
                <li>⚠️ We are not responsible for third-party content or services</li>
                <li>⚠️ You use our platform at your own risk</li>
              </ul>
            </div>
          </section>

          <section className="terms-section">
            <h2>🔄 Modifications & Termination</h2>
            <div className="terms-card">
              <h3>Changes to Terms</h3>
              <p>
                We may update these terms from time to time. Significant changes will be communicated via email 
                or platform notifications at least 30 days in advance.
              </p>
              
              <h3>Account Termination</h3>
              <ul>
                <li>🔚 You may cancel your account at any time</li>
                <li>🔚 We may suspend accounts for terms violations</li>
                <li>🔚 Upon termination, access to paid content ceases</li>
                <li>🔚 Some provisions survive termination</li>
              </ul>
            </div>
          </section>

          <section className="terms-section">
            <h2>🌍 Governing Law</h2>
            <div className="terms-card">
              <p>
                These terms are governed by the laws of India. Any disputes will be resolved through binding 
                arbitration in accordance with Indian arbitration laws.
              </p>
              <ul>
                <li>⚖️ Indian law governs these terms</li>
                <li>⚖️ Disputes subject to arbitration in New Delhi, India</li>
                <li>⚖️ English language version controls in case of translations</li>
              </ul>
            </div>
          </section>

          <section className="terms-section">
            <h2>📞 Contact Information</h2>
            <div className="terms-card">
              <p>For questions about these Terms & Conditions, please contact us:</p>
              <ul>
                <li>📧 Email: legal@skillyug.com</li>
                <li>📱 Phone: +91 9876543210</li>
                <li>🏢 Address: Skillyug Education Hub, 123 Learning Street, Education City, EC 12345, India</li>
                <li>⏰ Business Hours: Monday-Friday, 9:00 AM - 6:00 PM IST</li>
              </ul>
            </div>
          </section>
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

export default Terms;
