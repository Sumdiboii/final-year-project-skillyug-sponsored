import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css files/CreateAccount.css";
import ParticleBackground from "../components/StarBg";
import Footer from "../components/Footer";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate passwords match
    if (password !== rePassword) {
      alert("Passwords do not match!");
      return;
    }
    
    // Add account creation logic here - for now, navigate to ChooseRole
    navigate("/choose-role");
  };

  const handleGoogle = () => {
    // Hook your Google OAuth here
    alert("Continue with Google clicked");
  };

  return (
    <div className="create-account-page">
      {/* Particles in the background */}
      <ParticleBackground />
      
      <div className="create-account-card">
        <div className="create-account-header">
          <img src="assets/blue-skillyug-logo-1.jpg" alt="Skillyug" className="create-account-logo" />
          <h2 className="create-account-title">Create Account</h2>
          <p className="create-account-subtitle">Sign up to start your learning journey</p>
        </div>

        <button type="button" className="create-account-google-btn" onClick={handleGoogle}>
          <img
            className="create-account-google-icon"
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
          />
          Continue with Google
        </button>

        <div className="create-account-divider"><span>or</span></div>

        <form className="create-account-form" onSubmit={handleSubmit}>
          <label className="create-account-label" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="create-account-input"
            required
          />

          <label className="create-account-label" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="create-account-input"
            required
          />

          <label className="create-account-label" htmlFor="repassword">Re-enter Password</label>
          <input
            id="repassword"
            type="password"
            placeholder="••••••••"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            className="create-account-input"
            required
          />

          <button type="submit" className="create-account-btn">Continue</button>
        </form>

        <button type="button" className="create-account-back-btn" onClick={() => { navigate("/"); window.scrollTo(0, 0); }}>
          Back 
        </button>
      </div>
      
    </div>
  );
};

export default CreateAccount;
