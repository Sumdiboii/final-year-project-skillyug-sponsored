import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave" aria-hidden="true">
        <svg className="footer-wave-svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="#0a174e" d="M0,64L48,53.3C96,43,192,21,288,26.7C384,32,480,64,576,80C672,96,768,96,864,85.3C960,75,1056,53,1152,53.3C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      <div className="footer-content">
        <div className="footer-section company">
          <h2>Company</h2>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section links">
          <h2>Links</h2>
          <ul>
            <li>FAQ</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund and Cancellation Policy</li>
          </ul>
        </div>
        <div className="footer-section download">
          <h2>Download App</h2>
          <div className="footer-apps">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="footer-app-icon" />
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="footer-app-icon" />
          </div>
        </div>
        <div className="footer-section follow">
          <h2>Follow Us</h2>
          <div className="footer-socials">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="footer-social-icon" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="footer-social-icon" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" className="footer-social-icon" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="footer-social-icon" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2025 All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
