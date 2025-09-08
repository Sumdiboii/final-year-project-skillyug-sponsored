import React from "react";
import "../css files/Syllabus.css";

const syllabusList = [
  "Mental Aptitude",
  "Analytical Skills",
  "Verbal Reasoning",
  "Critical Thinking",
  "Problem Solving"
];

const Syllabus = () => {
  return (
    <div className="syllabus-page">
      <h1 className="syllabus-title">Syllabus Overview</h1>
      <ul className="syllabus-list">
        {syllabusList.map((item, idx) => (
          <li key={idx} className="syllabus-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Syllabus;
