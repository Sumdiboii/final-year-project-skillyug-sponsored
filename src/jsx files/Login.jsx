import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css files/Login.css";
import ParticleBackground from "../components/StarBg";
import Footer from "../components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here - for now, directly navigate to Home
    navigate("/home");
  };

  const handleGoogle = () => {
    // Hook your Google OAuth here
    alert("Continue with Google clicked");
  };

  const handleAdminLogin = () => {
    // Navigate to admin login page
    navigate("/admin-login");
  };

  return (
    <div className="lgn-login-page">
      {/* Particles in the background */}
      <ParticleBackground />
      
      <div className="lgn-login-card">
        <div className="lgn-login-header">
          <img src="assets/blue-skillyug-logo-1.jpg" alt="Skillyug" className="lgn-login-logo" />
          <h2 className="lgn-login-title" >Welcome back</h2>
          <p className="lgn-login-subtitle">Sign in to continue to your dashboard</p>
        </div>

         <button type="button" className="lgn-admin-btn" onClick={handleAdminLogin}>
          <img
            className="lgn-admin-icon"
            src="assets/skillyug-logo-removebg-preview.png"
            alt="Admin Logo"
          />
          Administrator Login
        </button>

        <button type="button" className="lgn-google-btn" onClick={handleGoogle}>
          <img
            className="lgn-google-icon"
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
          />
          Continue with Google
        </button>

        <div className="lgn-divider"><span>or</span></div>

        <form className="lgn-login-form" onSubmit={handleSubmit}>
          <label className="lgn-login-label" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="lgn-login-input"
            required
          />

          <label className="lgn-login-label" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="lgn-login-input"
            required
          />

          <div className="lgn-login-actions">
            <label className="lgn-remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="lgn-forgot-link">Forgot password?</a>
          </div>

          <button type="submit" className="lgn-login-btn">Sign In</button>

        </form>

         <button type="button" className="lgn-back1-btn" onClick={() => { navigate("/"); window.scrollTo(0, 0); }}>
          
          Back 
        </button>

        <p className="lgn-login-hint">Don't have an account? <a href="/pricing">Sign up</a></p>
      </div>
      
    </div>
  );
};

export default Login;
