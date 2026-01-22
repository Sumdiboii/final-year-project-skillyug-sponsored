import React, { useState } from 'react';
import '../css files/Profile.css';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  // Student profile data from registration
  const [studentInfo, setStudentInfo] = useState({
    fullName: 'Sumedh Kumar',
    email: 'sumedh.kumar@example.com',
    dateOfBirth: '2010-05-15',
    age: 14,
    grade: '7',
    school: 'Delhi Public School',
    address: '123 Main Street, New Delhi, India',
    guardianName: 'Rajesh Kumar',
    guardianPhone: '9876543210'
  });

  const [tempInfo, setTempInfo] = useState({ ...studentInfo });

  const handleEdit = () => {
    setIsEditing(true);
    setTempInfo({ ...studentInfo });
  };

  const handleSave = () => {
    setStudentInfo({ ...tempInfo });
    setIsEditing(false);
    // TODO: Save to backend
    alert('Profile updated successfully!');
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTempInfo({ ...studentInfo });
  };

  const handleInputChange = (field, value) => {
    setTempInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Auto-calculate age when date of birth changes
  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleDOBChange = (value) => {
    handleInputChange('dateOfBirth', value);
    const newAge = calculateAge(value);
    handleInputChange('age', newAge);
  };

  return (
    <>
      <MainNavbar />
      <div className="profile-page">
        <div className="profile-container">
          
          {/* Profile Header with Avatar and Name */}
          <div className="profile-header-section">
            <div className="profile-avatar-wrapper">
              <div className="profile-avatar">
                <span className="avatar-icon">👤</span>
              </div>
              <h1 className="profile-name">{isEditing ? tempInfo.fullName : studentInfo.fullName}</h1>
              <p className="profile-role">Student • Grade {isEditing ? tempInfo.grade : studentInfo.grade}</p>
            </div>

            <div className="profile-actions">
              {!isEditing ? (
                <button className="edit-profile-btn" onClick={handleEdit}>
                  <span className="btn-icon">✏️</span>
                  Edit Profile
                </button>
              ) : (
                <div className="edit-actions">
                  <button className="save-btn" onClick={handleSave}>
                    <span className="btn-icon">💾</span>
                    Save Changes
                  </button>
                  <button className="cancel-btn" onClick={handleCancel}>
                    <span className="btn-icon">✖️</span>
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Profile Details Cards */}
          <div className="profile-details-grid">
            
            {/* Personal Information */}
            <div className="details-card">
              <h2 className="card-title">📋 Personal Information</h2>
              <div className="info-group">
                <div className="info-item">
                  <label className="info-label">Full Name</label>
                  {!isEditing ? (
                    <p className="info-value">{studentInfo.fullName}</p>
                  ) : (
                    <input
                      type="text"
                      className="info-input"
                      value={tempInfo.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder="Enter full name"
                    />
                  )}
                </div>

                <div className="info-item">
                  <label className="info-label">Email Address</label>
                  {!isEditing ? (
                    <p className="info-value">{studentInfo.email}</p>
                  ) : (
                    <input
                      type="email"
                      className="info-input"
                      value={tempInfo.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter email"
                    />
                  )}
                </div>

                <div className="info-row">
                  <div className="info-item">
                    <label className="info-label">Date of Birth</label>
                    {!isEditing ? (
                      <p className="info-value">{new Date(studentInfo.dateOfBirth).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    ) : (
                      <input
                        type="date"
                        className="info-input"
                        value={tempInfo.dateOfBirth}
                        onChange={(e) => handleDOBChange(e.target.value)}
                      />
                    )}
                  </div>

                  <div className="info-item">
                    <label className="info-label">Age</label>
                    <p className="info-value">{isEditing ? tempInfo.age : studentInfo.age} years</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="details-card">
              <h2 className="card-title">🎓 Academic Information</h2>
              <div className="info-group">
                <div className="info-item">
                  <label className="info-label">Grade</label>
                  {!isEditing ? (
                    <p className="info-value">Grade {studentInfo.grade}</p>
                  ) : (
                    <select
                      className="info-input"
                      value={tempInfo.grade}
                      onChange={(e) => handleInputChange('grade', e.target.value)}
                    >
                      <option value="1">Grade 1</option>
                      <option value="2">Grade 2</option>
                      <option value="3">Grade 3</option>
                      <option value="4">Grade 4</option>
                      <option value="5">Grade 5</option>
                      <option value="6">Grade 6</option>
                      <option value="7">Grade 7</option>
                      <option value="8">Grade 8</option>
                    </select>
                  )}
                </div>

                <div className="info-item">
                  <label className="info-label">School Name</label>
                  {!isEditing ? (
                    <p className="info-value">{studentInfo.school}</p>
                  ) : (
                    <input
                      type="text"
                      className="info-input"
                      value={tempInfo.school}
                      onChange={(e) => handleInputChange('school', e.target.value)}
                      placeholder="Enter school name"
                    />
                  )}
                </div>

                {/* <div className="info-item">
                  <label className="info-label">Address</label>
                  {!isEditing ? (
                    <p className="info-value">{studentInfo.address}</p>
                  ) : (
                    <textarea
                      className="info-input info-textarea"
                      value={tempInfo.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Enter address"
                      rows="3"
                    />
                  )}
                </div> */}
              </div>
            </div>

            {/* Guardian Information */}
            <div className="details-card full-width">
              <h2 className="card-title">👨‍👩‍👦 Guardian Information</h2>
              <div className="info-group">
                <div className="info-row">
                  <div className="info-item">
                    <label className="info-label">Guardian Name</label>
                    {!isEditing ? (
                      <p className="info-value">{studentInfo.guardianName}</p>
                    ) : (
                      <input
                        type="text"
                        className="info-input"
                        value={tempInfo.guardianName}
                        onChange={(e) => handleInputChange('guardianName', e.target.value)}
                        placeholder="Enter guardian name"
                      />
                    )}
                  </div>

                  <div className="info-item">
                    <label className="info-label">Guardian Phone</label>
                    {!isEditing ? (
                      <p className="info-value">{studentInfo.guardianPhone}</p>
                    ) : (
                      <input
                        type="tel"
                        className="info-input"
                        value={tempInfo.guardianPhone}
                        onChange={(e) => handleInputChange('guardianPhone', e.target.value)}
                        placeholder="Enter phone number"
                        pattern="[0-9]{10}"
                        maxLength="10"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;