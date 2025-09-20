import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "🎓 What is Skillyug and what does it offer?",
      answer: "Skillyug is an innovative educational platform designed to help students prepare for competitive exams like NMMS and SAT. We offer interactive learning modules, practice tests, progress tracking, and expert guidance to ensure comprehensive exam preparation."
    },
    {
      question: "💰 What are your subscription plans and pricing?",
      answer: "We offer flexible subscription plans including monthly and annual options. Our plans range from basic access to premium features with personalized learning paths, unlimited practice tests, and one-on-one mentoring. Visit our pricing page for detailed information and current offers."
    },
    {
      question: "📱 Can I access Skillyug on mobile devices?",
      answer: "Yes! Skillyug is fully responsive and works seamlessly on all devices including smartphones, tablets, laptops, and desktops. We also have dedicated mobile apps available on both iOS and Android app stores for the best mobile learning experience."
    },
    {
      question: "🎯 How does the progress tracking work?",
      answer: "Our advanced analytics system tracks your learning progress in real-time. You can view detailed statistics on topics covered, time spent studying, quiz scores, strengths and weaknesses, and improvement trends. This helps you focus on areas that need more attention."
    },
    {
      question: "📝 What types of practice tests are available?",
      answer: "We offer comprehensive practice tests that simulate real exam conditions for both NMMS and SAT. This includes full-length mock tests, topic-wise quizzes, timed practice sessions, and adaptive tests that adjust difficulty based on your performance."
    },
    {
      question: "👨‍🏫 Can I get personalized guidance from experts?",
      answer: "Absolutely! Our premium plans include access to experienced educators and subject matter experts. You can get personalized study plans, doubt clearing sessions, performance analysis, and strategic guidance to maximize your exam preparation."
    },
    {
      question: "🔄 What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee for all new subscribers. If you're not satisfied with our services within the first 30 days, you can request a full refund. For detailed terms and conditions, please check our Refund Policy page."
    },
    {
      question: "🆓 Do you offer any free content or trial?",
      answer: "Yes! We provide a free trial period for new users to explore our platform. Additionally, we have free resources including sample questions, study tips, and introductory lessons available to all users without requiring a subscription."
    },
    {
      question: "📊 How often is the content updated?",
      answer: "Our content is regularly updated to reflect the latest exam patterns, syllabus changes, and question trends. We review and refresh our materials quarterly, and immediately update when official exam bodies announce any changes."
    },
    {
      question: "🤝 Is there a community feature for peer learning?",
      answer: "Yes! Skillyug includes community forums where students can interact, share study tips, discuss problems, and motivate each other. You can join study groups, participate in discussions, and learn from peers preparing for similar exams."
    },
    {
      question: "🔒 How secure is my personal information?",
      answer: "We take data security very seriously. All personal information is encrypted and stored securely using industry-standard protocols. We never share your data with third parties without consent and comply with all privacy regulations. Check our Privacy Policy for complete details."
    },
    {
      question: "📞 How can I get technical support?",
      answer: "Our support team is available 24/7 to help you. You can reach us via email at support@skillyug.com, use the live chat feature on our platform, or call our helpline at +91 9876543210. We typically respond to queries within 2-4 hours."
    },
    {
      question: "🌐 Do you offer content in multiple languages?",
      answer: "Currently, our primary content is in English, but we're working on expanding to include Hindi and other regional languages. Some basic navigation and instructions are already available in multiple languages, with more comprehensive translation coming soon."
    },
    {
      question: "📚 Can I download content for offline study?",
      answer: "Yes! Premium subscribers can download select content including PDFs, practice questions, and study guides for offline access. This feature is perfect for studying without internet connectivity or while traveling."
    },
    {
      question: "🎖️ Do you provide certificates upon course completion?",
      answer: "Yes, we provide digital certificates of completion for various courses and milestones. These certificates can be downloaded and shared on social media or included in your academic portfolio as proof of your dedication to learning."
    }
  ];

  return (
    <div className="faq-page">
      <div className="faq-container">
        <header className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about Skillyug</p>
        </header>

        <div className="faq-content">
          <div className="faq-intro">
            <div className="intro-card">
              <h2>💡 Need Help?</h2>
              <p>
                Browse through our most frequently asked questions below. If you can't find 
                what you're looking for, don't hesitate to contact our support team!
              </p>
            </div>
          </div>

          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                <div 
                  className="faq-question" 
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{faq.question}</h3>
                  <span className="faq-toggle">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-footer">
            <div className="contact-support">
              <h2>🤔 Still have questions?</h2>
              <p>Our support team is here to help you succeed!</p>
              <div className="support-options">
                <div className="support-card">
                  <h3>📧 Email Support</h3>
                  <p>support@skillyug.com</p>
                  <small>Response within 24 hours</small>
                </div>
                <div className="support-card">
                  <h3>💬 Live Chat</h3>
                  <p>Available on our platform</p>
                  <small>Mon-Sat, 10 AM - 8 PM IST</small>
                </div>
                <div className="support-card">
                  <h3>📱 Phone Support</h3>
                  <p>+91 9876543210</p>
                  <small>Mon-Fri, 9 AM - 6 PM IST</small>
                </div>
              </div>
            </div>
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

export default FAQ;