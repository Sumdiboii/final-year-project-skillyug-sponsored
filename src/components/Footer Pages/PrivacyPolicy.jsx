import React from 'react';
import '../Footer Pages/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <div className="privacy-container">
        <header className="privacy-header">
          <h1>Privacy Policy</h1>
          <p>Last updated: January 2024</p>
        </header>

        <div className="privacy-content">
          <section className="policy-section">
            <h2>🔒 Information We Collect</h2>
            <div className="policy-card">
              <h3>Personal Information</h3>
              <ul>
                <li>Name and contact information (email, phone number)</li>
                <li>Educational background and academic preferences</li>
                <li>Profile information and preferences</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>
            </div>
            
            <div className="policy-card">
              <h3>Usage Information</h3>
              <ul>
                <li>Learning progress and performance data</li>
                <li>Course completion rates and quiz scores</li>
                <li>Time spent on different sections of the platform</li>
                <li>Device information and browser type</li>
              </ul>
            </div>
          </section>

          <section className="policy-section">
            <h2>📊 How We Use Your Information</h2>
            <div className="policy-card">
              <ul>
                <li>✅ Provide personalized learning experiences</li>
                <li>✅ Track your academic progress and performance</li>
                <li>✅ Send important updates about courses and features</li>
                <li>✅ Improve our platform and develop new features</li>
                <li>✅ Provide customer support and technical assistance</li>
                <li>✅ Process payments and manage subscriptions</li>
                <li>✅ Ensure platform security and prevent fraud</li>
              </ul>
            </div>
          </section>

          <section className="policy-section">
            <h2>🛡️ Data Protection & Security</h2>
            <div className="policy-card">
              <h3>Security Measures</h3>
              <p>
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul>
                <li>🔐 SSL encryption for all data transmission</li>
                <li>🔐 Secure database storage with encryption</li>
                <li>🔐 Regular security audits and monitoring</li>
                <li>🔐 Limited access to personal data by authorized personnel only</li>
                <li>🔐 Secure payment processing through trusted providers</li>
              </ul>
            </div>
          </section>

          <section className="policy-section">
            <h2>🤝 Information Sharing</h2>
            <div className="policy-card">
              <p>We do NOT sell, trade, or rent your personal information to third parties. We may share information only in these situations:</p>
              <ul>
                <li>📋 With your explicit consent</li>
                <li>📋 To comply with legal obligations</li>
                <li>📋 To protect our rights and prevent fraud</li>
                <li>📋 With trusted service providers who assist in operating our platform</li>
                <li>📋 In case of business transfer or merger (with prior notice)</li>
              </ul>
            </div>
          </section>

          <section className="policy-section">
            <h2>🍪 Cookies and Tracking</h2>
            <div className="policy-card">
              <h3>What are Cookies?</h3>
              <p>
                Cookies are small files stored on your device that help us improve your experience on our platform.
              </p>
              
              <h3>Types of Cookies We Use:</h3>
              <ul>
                <li>🍪 <strong>Essential Cookies:</strong> Required for basic platform functionality</li>
                <li>🍪 <strong>Performance Cookies:</strong> Help us understand how you use our platform</li>
                <li>🍪 <strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li>🍪 <strong>Marketing Cookies:</strong> Used to show relevant content and advertisements</li>
              </ul>
              
              <p>You can control cookie settings through your browser preferences.</p>
            </div>
          </section>

          <section className="policy-section">
            <h2>👤 Your Rights</h2>
            <div className="policy-card">
              <p>You have the following rights regarding your personal information:</p>
              <ul>
                <li>🔍 <strong>Access:</strong> Request a copy of your personal data</li>
                <li>✏️ <strong>Correction:</strong> Update or correct inaccurate information</li>
                <li>🗑️ <strong>Deletion:</strong> Request deletion of your personal data</li>
                <li>📵 <strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li>📦 <strong>Portability:</strong> Request your data in a portable format</li>
                <li>🚫 <strong>Objection:</strong> Object to certain types of data processing</li>
              </ul>
              
              <p>To exercise these rights, contact us at <strong>privacy@skillyug.com</strong></p>
            </div>
          </section>

          <section className="policy-section">
            <h2>👶 Children's Privacy</h2>
            <div className="policy-card">
              <p>
                Our platform is designed for students of all ages. For users under 13 years old, 
                we require parental consent before collecting any personal information. We are 
                committed to protecting children's privacy and comply with COPPA regulations.
              </p>
              <ul>
                <li>👨‍👩‍👧‍👦 Parental consent required for users under 13</li>
                <li>👨‍👩‍👧‍👦 Limited data collection for minors</li>
                <li>👨‍👩‍👧‍👦 Parents can review and delete their child's information</li>
              </ul>
            </div>
          </section>

          <section className="policy-section">
            <h2>🔄 Policy Updates</h2>
            <div className="policy-card">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our 
                practices or legal requirements. We will notify you of significant changes via:
              </p>
              <ul>
                <li>📧 Email notification to registered users</li>
                <li>📢 Prominent notice on our platform</li>
                <li>📅 Updated "Last modified" date at the top of this policy</li>
              </ul>
            </div>
          </section>

          <section className="policy-section">
            <h2>📞 Contact Us</h2>
            <div className="policy-card">
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <ul>
                <li>📧 Email: privacy@skillyug.com</li>
                <li>📱 Phone: +91 9876543210</li>
                <li>🏢 Address: Skillyug Education Hub, 123 Learning Street, Education City, EC 12345, India</li>
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

export default PrivacyPolicy;
