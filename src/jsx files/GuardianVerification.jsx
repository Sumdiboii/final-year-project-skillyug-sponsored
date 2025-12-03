import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css files/GuardianVerification.css";
import ParticleBackground from "../components/StarBg";

const GuardianVerification = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate OTP sending
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to OTP verification page
      navigate("/verify-otp", { state: { phoneNumber } });
    }, 1000);
  };

  return (
    <div className="guardian-verification-page">
      <ParticleBackground />
      
      <div className="guardian-verification-container">
        <h1 className="guardian-verification-title">Guardian Verification</h1>
        <p className="guardian-verification-subtitle">Enter guardian's phone number to send OTP</p>

        <form className="guardian-verification-form" onSubmit={handleSendOTP}>
          <div className="form-group">
            <label htmlFor="phoneNumber">Guardian's Phone Number *</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter 10-digit phone number"
              pattern="[0-9]{10}"
              maxLength="10"
              required
            />
          </div>

          <button type="submit" className="send-otp-btn" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send OTP"}
          </button>
        </form>

        <button className="guardian-back-btn" onClick={() => navigate("/student-info")}>
          Back
        </button>
      </div>
    </div>
  );
};

export default GuardianVerification;
