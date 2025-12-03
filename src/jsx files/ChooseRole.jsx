import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css files/ChooseRole.css";
import ParticleBackground from "../components/StarBg";

const ChooseRole = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const roles = {
    student: {
      title: "Student",
      icon: "🎓",
      permissions: [
        "Access interactive learning games",
        "Track personal progress and analytics",
        "Take adaptive quizzes and tests",
        "Earn badges and rewards",
        "Access learning library",
        "Participate in puzzle challenges"
      ]
    },
    admin: {
      title: "Admin",
      icon: "👨‍💼",
      permissions: [
        "Manage student accounts",
        "Create and modify course content",
        "View detailed analytics and reports",
        "Manage assessments and grades",
        "Configure system settings",
        "Monitor platform activity"
      ]
    }
  };

  const handleRoleClick = (role) => {
    setSelectedRole(selectedRole === role ? null : role);
  };

  const handleContinue = () => {
    if (selectedRole) {
      // Navigate to profile info page based on selected role
      navigate(selectedRole === "student" ? "/student-info" : "/admin-info");
    }
  };

  return (
    <div className="choose-role-page">
      <ParticleBackground />
      
      <div className="choose-role-container">
        <h1 className="choose-role-title">Choose a Role</h1>
        
        <div className="role-panels">
          <div 
            className={`role-panel ${selectedRole === "student" ? "selected" : ""}`}
            onClick={() => handleRoleClick("student")}
          >
            <div className="role-panel-header">
              <span className="role-icon">{roles.student.icon}</span>
              <h2>{roles.student.title}</h2>
            </div>
            <div className="role-permissions">
              <h3>What you can do:</h3>
              <ul>
                {roles.student.permissions.map((permission, index) => (
                  <li key={index}>{permission}</li>
                ))}
              </ul>
            </div>
          </div>

          <div 
            className={`role-panel ${selectedRole === "admin" ? "selected" : ""}`}
            onClick={() => handleRoleClick("admin")}
          >
            <div className="role-panel-header">
              <span className="role-icon">{roles.admin.icon}</span>
              <h2>{roles.admin.title}</h2>
            </div>
            <div className="role-permissions">
              <h3>What you can do:</h3>
              <ul>
                {roles.admin.permissions.map((permission, index) => (
                  <li key={index}>{permission}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <button 
          className="continue-role-btn" 
          onClick={handleContinue}
          disabled={!selectedRole}
        >
          Continue
        </button>

        <button 
          className="back-role-btn" 
          onClick={() => navigate("/create-account")}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ChooseRole;
