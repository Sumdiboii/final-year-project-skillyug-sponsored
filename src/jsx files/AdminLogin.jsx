// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../css files/AdminLogin.css";
// import ParticleBackground from "../components/StarBg";

// const AdminLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [adminKey, setAdminKey] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add admin login logic here - for now, directly navigate to Home
//     // In a real app, you would validate admin credentials and admin key
//     if (adminKey.trim() === "") {
//       alert("Please enter the admin key");
//       return;
//     }
//     navigate("/home");
//   };

//   const handleGoogle = () => {
//     // Hook your Google OAuth here for admin
//     alert("Admin Google OAuth - requires additional verification");
//   };

//   return (
//     <div className="admin-login-page">
//       {/* Particles in the background */}
//       <ParticleBackground />
//       <button
//         className="admin-login-back-btn"
//         style={{
//           position: 'absolute',
//           top: 32,
//           left: 32,
//           background: '#fff',
//           color: '#0a174e',
//           border: 'none',
//           borderRadius: '1.5rem',
//           padding: '0.6rem 1.6rem',
//           fontWeight: 600,
//           fontSize: '1rem',
//           boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
//           cursor: 'pointer',
//           zIndex: 1000
//         }}
//         onClick={() => navigate("/login")}
//       >
//         ← Back to Login
//       </button>
//       <div className="admin-login-card">
//         <div className="admin-login-header">
//           <img src="assets/PrepMark.png" alt="Skillyug" className="admin-login-logo" />
//           <div className="admin-badge">
//             <span>🔐 ADMIN ACCESS</span>
//           </div>
//           <h2 className="admin-login-title">Administrator Login</h2>
//           <p className="admin-login-subtitle">Secure access for system administrators</p>
//         </div>

//         <button type="button" className="admin-google-btn" onClick={handleGoogle}>
//           <img
//             className="google-icon"
//             src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
//             alt="Google"
//           />
//           Continue with Google (Admin)
//         </button>

//         <div className="admin-divider"><span>or</span></div>

//         <form className="admin-login-form" onSubmit={handleSubmit}>
//           <label className="admin-login-label" htmlFor="admin-email">Admin Email</label>
//           <input
//             id="admin-email"
//             type="email"
//             placeholder="admin@skillyug.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="admin-login-input"
//             required
//           />

//           <label className="admin-login-label" htmlFor="admin-password">Password</label>
//           <input
//             id="admin-password"
//             type="password"
//             placeholder="••••••••"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="admin-login-input"
//             required
//           />

//           <label className="admin-login-label" htmlFor="admin-key">
//             Admin Access Key
//             <span className="required-indicator">*</span>
//           </label>
//           <input
//             id="admin-key"
//             type="password"
//             placeholder="Enter admin access key"
//             value={adminKey}
//             onChange={(e) => setAdminKey(e.target.value)}
//             className="admin-login-input admin-key-input"
//             required
//           />

//           <div className="admin-login-actions">
//             <label className="admin-remember">
//               <input type="checkbox" />
//               <span>Remember admin session</span>
//             </label>
//             <a href="#" className="admin-forgot-link">Contact IT Support</a>
//           </div>

//           <button type="submit" className="admin-login-btn">
//             <span>🔐</span>
//             Secure Admin Login
//           </button>
//         </form>

//         <div className="admin-security-notice">
//           <p>⚠️ This is a secure admin portal. All access attempts are logged and monitored.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css files/AdminLogin.css";
import ParticleBackground from "../components/StarBg";
import Footer from "../components/Footer";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here - for now, directly navigate to Home
    navigate("/home");
  };

//   const handleGoogle = () => {
//     // Hook your Google OAuth here
//     alert("Continue with Google clicked");
//   };

  const handleUserLogin = () => {
    // Navigate to admin login page
    navigate("/login");
  };

  return (
    <div className="admin-login-page">
      {/* Particles in the background */}
      <ParticleBackground />
     
      <div className="admin-login-card">
        <div className="admin-login-header">
          <img src="assets/blue-skillyug-logo-1.jpg" alt="Skillyug" className="admin-login-logo" />
          <h2 className="admin-login-title" >Admin Login</h2>
          <p className="admin-login-subtitle">Sign in to continue to your dashboard</p>
        </div>

         <button type="button" className="user-btn" onClick={handleUserLogin}>
          <img
            className="user-icon"
            src="assets/skillyug-logo-removebg-preview.png"
            alt="User Logo"
          />
          User Login
        </button>

        {/* <button type="button" className="google-btn" onClick={handleGoogle}>
          <img
            className="google-icon"
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
          />
          Continue with Google
        </button> */}

        <div className="divider"><span>or</span></div>

        <form className="admin-login-form" onSubmit={handleSubmit}>
          <label className="admin-login-label" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="admin-login-input"
            required
          />

          <label className="admin-login-label" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="admin-login-input"
            required
          />

          <label className="login-label" htmlFor="password">Authentication Key</label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="admin-login-input"
            required
          />

          <div className="admin-login-actions">
            <label className="admin-remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="admin-forgot-link">Forgot password?</a>
          </div>

          <button type="submit" className="admin-login-btn">Sign In</button>

        </form>

         <button type="button" className="back-btn" onClick={() => navigate("/")}>
          
          Back 
        </button>

        
      </div>
      
    </div>
  );
};

export default AdminLogin;
