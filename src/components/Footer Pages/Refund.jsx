import React from 'react';
import '../Footer Pages/Refund.css';

const Refund = () => {
  return (
    <div className="refund-page">
      <div className="refund-container">
        <header className="refund-header">
          <h1>Refund Policy</h1>
          <p>Last updated: January 2024</p>
        </header>

        <div className="refund-content">
          <section className="refund-section">
            <h2>💰 Our Refund Commitment</h2>
            <div className="refund-card">
              <p>
                At Skillyug, we stand behind the quality of our educational services. We offer a fair and 
                transparent refund policy to ensure your satisfaction with our platform.
              </p>
              <div className="highlight-box">
                <h3>🎯 30-Day Money-Back Guarantee</h3>
                <p>
                  If you're not completely satisfied with our services within the first 30 days of your 
                  subscription, we'll provide a full refund, no questions asked.
                </p>
              </div>
            </div>
          </section>

          <section className="refund-section">
            <h2>✅ Eligible Refund Scenarios</h2>
            <div className="refund-card">
              <h3>Full Refund Eligible:</h3>
              <ul>
                <li>🔄 Technical issues preventing platform access for more than 48 hours</li>
                <li>🔄 Significant content errors or missing promised features</li>
                <li>🔄 Accidental duplicate purchases</li>
                <li>🔄 Billing errors or unauthorized charges</li>
                <li>🔄 Platform not meeting advertised specifications</li>
                <li>🔄 Request made within 30 days of initial purchase</li>
              </ul>
              
              <h3>Partial Refund Eligible:</h3>
              <ul>
                <li>🔄 Service disruption lasting more than 7 days</li>
                <li>🔄 Significant feature removal affecting your learning experience</li>
                <li>🔄 Medical or emergency circumstances (case-by-case basis)</li>
              </ul>
            </div>
          </section>

          <section className="refund-section">
            <h2>❌ Non-Refundable Situations</h2>
            <div className="refund-card">
              <p>
                While we strive to accommodate all reasonable refund requests, certain situations 
                are not eligible for refunds:
              </p>
              <ul>
                <li>🚫 Requests made after 30 days from purchase date</li>
                <li>🚫 Change of mind after using the service extensively</li>
                <li>🚫 Failure to achieve desired exam results</li>
                <li>🚫 Account violations or terms of service breaches</li>
                <li>🚫 Requests for services already fully consumed</li>
                <li>🚫 Third-party payment processor fees</li>
                <li>🚫 Promotional or discounted purchases (unless technical issues occur)</li>
              </ul>
            </div>
          </section>

          <section className="refund-section">
            <h2>📋 Refund Process</h2>
            <div className="refund-card">
              <h3>How to Request a Refund:</h3>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>📧 Contact Support</h4>
                    <p>Email us at <strong>refunds@skillyug.com</strong> with your request</p>
                  </div>
                </div>
                
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>📝 Provide Information</h4>
                    <p>Include your account details, purchase date, and reason for refund</p>
                  </div>
                </div>
                
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>⏳ Review Process</h4>
                    <p>We'll review your request within 2-3 business days</p>
                  </div>
                </div>
                
                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>💳 Refund Processing</h4>
                    <p>Approved refunds processed within 5-10 business days</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="refund-section">
            <h2>📝 Required Information</h2>
            <div className="refund-card">
              <p>To process your refund request efficiently, please provide:</p>
              <ul>
                <li>📋 Your registered email address</li>
                <li>📋 Transaction ID or payment confirmation</li>
                <li>📋 Purchase date and amount</li>
                <li>📋 Detailed reason for refund request</li>
                <li>📋 Screenshots of any technical issues (if applicable)</li>
                <li>📋 Account username or ID</li>
              </ul>
            </div>
          </section>

          <section className="refund-section">
            <h2>⏰ Processing Timeline</h2>
            <div className="refund-card">
              <div className="timeline">
                <div className="timeline-item">
                  <h4>📨 Request Received</h4>
                  <p>Immediate acknowledgment via email</p>
                  <span className="time">0-24 hours</span>
                </div>
                
                <div className="timeline-item">
                  <h4>🔍 Review & Verification</h4>
                  <p>Our team reviews your request and account</p>
                  <span className="time">1-3 business days</span>
                </div>
                
                <div className="timeline-item">
                  <h4>✅ Decision Notification</h4>
                  <p>Email notification of approval or denial</p>
                  <span className="time">3-5 business days</span>
                </div>
                
                <div className="timeline-item">
                  <h4>💰 Refund Processing</h4>
                  <p>Money returned to original payment method</p>
                  <span className="time">5-10 business days</span>
                </div>
              </div>
            </div>
          </section>

          <section className="refund-section">
            <h2>💳 Payment Method Specifics</h2>
            <div className="refund-card">
              <h3>Credit/Debit Cards:</h3>
              <ul>
                <li>💳 Refunds appear as credit on your statement</li>
                <li>💳 Processing time: 5-10 business days</li>
                <li>💳 May take 1-2 billing cycles to appear</li>
              </ul>
              
              <h3>Digital Wallets:</h3>
              <ul>
                <li>📱 PayPal, Google Pay, Apple Pay refunds</li>
                <li>📱 Processing time: 3-5 business days</li>
                <li>📱 Direct return to wallet balance</li>
              </ul>
              
              <h3>Bank Transfers:</h3>
              <ul>
                <li>🏦 Direct bank account refunds</li>
                <li>🏦 Processing time: 3-7 business days</li>
                <li>🏦 May require additional verification</li>
              </ul>
            </div>
          </section>

          <section className="refund-section">
            <h2>🤝 Alternative Solutions</h2>
            <div className="refund-card">
              <p>
                Before requesting a refund, consider these alternatives that might better address your concerns:
              </p>
              <ul>
                <li>💡 Account credit for future subscriptions</li>
                <li>💡 Subscription plan change or upgrade</li>
                <li>💡 Extended trial period</li>
                <li>💡 One-on-one support session</li>
                <li>💡 Access to additional study materials</li>
                <li>💡 Technical support to resolve issues</li>
              </ul>
            </div>
          </section>

          <section className="refund-section">
            <h2>📞 Contact Information</h2>
            <div className="refund-card">
              <p>For refund requests or questions about this policy:</p>
              <div className="contact-info">
                <div className="contact-item">
                  <h4>📧 Email Support</h4>
                  <p>refunds@skillyug.com</p>
                  <small>Response within 24 hours</small>
                </div>
                
                <div className="contact-item">
                  <h4>📱 Phone Support</h4>
                  <p>+91 9876543210</p>
                  <small>Mon-Fri, 9:00 AM - 6:00 PM IST</small>
                </div>
                
                <div className="contact-item">
                  <h4>💬 Live Chat</h4>
                  <p>Available on our platform</p>
                  <small>Mon-Sat, 10:00 AM - 8:00 PM IST</small>
                </div>
              </div>
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

export default Refund;
