import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css files/ProfileInfo.css";
import ParticleBackground from "../components/StarBg";

const StudentInfo = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    age: "",
    grade: "",
    school: "",
    address: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Auto-calculate age from date of birth
    if (name === "dateOfBirth" && value) {
      const today = new Date();
      const birthDate = new Date(value);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      setFormData(prev => ({ ...prev, age: age.toString() }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add profile creation logic here
    navigate("/guardian-verification");
  };

  return (
    <div className="profile-info-page">
      <ParticleBackground />
      
      <div className="profile-info-container">
        <h1 className="profile-info-title">Student Information</h1>
        <p className="profile-info-subtitle">Complete your profile details</p>

        <form className="profile-info-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth *</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                readOnly
                placeholder="Auto-calculated"
              />
            </div>

            <div className="form-group">
              <label htmlFor="grade">Grade/Class *</label>
              <select
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                required
              >
                <option value="">Select Grade</option>
                <option value="1">Grade 1</option>
                <option value="2">Grade 2</option>
                <option value="3">Grade 3</option>
                <option value="4">Grade 4</option>
                <option value="5">Grade 5</option>
                <option value="6">Grade 6</option>
                <option value="7">Grade 7</option>
                <option value="8">Grade 8</option>
              </select>
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="school">School Name *</label>
            <input
              type="text"
              id="school"
              name="school"
              value={formData.school}
              onChange={handleChange}
              placeholder="Enter your school name"
              required
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="address">Address *</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your complete address"
              rows="2"
              required
            />
          </div>

          <button type="submit" className="profile-submit-btn">Complete Registration</button>
        </form>

        <button className="profile-back-btn" onClick={() => navigate("/choose-role")}>
          Back
        </button>
      </div>
    </div>
  );
};

export default StudentInfo;
