import React, { useState } from "react";
import "../css files/Login.css";
import ParticleBackground from "../components/StarBg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    alert("Login submitted!");
  };

  const handleGoogle = () => {
    // Hook your Google OAuth here
    alert("Continue with Google clicked");
  };

  return (
    <div className="login-page">
      {/* Particles in the background */}
      
        <ParticleBackground />
     

      <div className="login-card">
        <div className="login-header">
          <img src="assets/PrepMark.png" alt="Skillyug" className="login-logo" />
          <h2 className="login-title">Welcome back</h2>
          <p className="login-subtitle">Sign in to continue to your dashboard</p>
        </div>

        <button type="button" className="google-btn" onClick={handleGoogle}>
          <img
            className="google-icon"
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
          />
          Continue with Google
        </button>

        <div className="divider"><span>or</span></div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-label" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            required
          />

          <label className="login-label" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />

          <div className="login-actions">
            <label className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">Sign In</button>
        </form>

        <p className="login-hint">Don’t have an account? <a href="#">Sign up</a></p>
      </div>
    </div>
  );
};

export default Login;
