import React, { useState } from "react";
import "../css files/Syllabus.css";

const nmmsSyllabus = [
  { icon: "🧠", title: "Mental Ability", desc: "Analogy, Classification, Series, Pattern Perception, Hidden Figures, Coding-Decoding, Mathematical Operations, etc." },
  { icon: "📚", title: "Scholastic Aptitude", desc: "Mathematics, Science, Social Science (Class 7 & 8 level): Algebra, Geometry, Data Handling, Physics, Chemistry, History, Civics, Geography." },
  { icon: "🔢", title: "Arithmetic Skills", desc: "Number Systems, Fractions, Decimals, Ratio & Proportion, Percentages, Profit & Loss, Time & Work, Mensuration." },
  { icon: "📝", title: "Language Skills", desc: "Reading Comprehension, Synonyms/Antonyms, Sentence Formation, Grammar, Vocabulary." },
];

const satSyllabus = [
  { icon: "📐", title: "Mathematics", desc: "Algebra, Problem Solving, Data Analysis, Advanced Math, Geometry, Trigonometry." },
  { icon: "📖", title: "Reading", desc: "Comprehension, Command of Evidence, Words in Context, Analysis in History/Social Studies & Science." },
  { icon: "✍️", title: "Writing & Language", desc: "Expression of Ideas, Standard English Conventions, Punctuation, Sentence Structure." },
  { icon: "🔬", title: "Science (SAT)", desc: "Interpreting Data, Experimental Results, Problem Solving in Science Contexts." },
];

const Syllabus = () => {
  const [tab, setTab] = useState("NMMS");
  const syllabus = tab === "NMMS" ? nmmsSyllabus : satSyllabus;
  return (
    <div className="syllabus-page themed-bg">
      <div className="syllabus-hero">
        <h1 className="syllabus-title">Syllabus Overview</h1>
        <p className="syllabus-subtitle">Comprehensive coverage for NMMS & SAT exams, designed for real success.</p>
      </div>
      <div className="syllabus-tabs">
        <button className={`syllabus-tab${tab === "NMMS" ? " active" : ""}`} onClick={() => setTab("NMMS")}>NMMS</button>
        <button className={`syllabus-tab${tab === "SAT" ? " active" : ""}`} onClick={() => setTab("SAT")}>SAT</button>
      </div>
      <div className="syllabus-cards-wrap">
        {syllabus.map((item, idx) => (
          <div className="syllabus-card" key={item.title}>
            <div className="syllabus-card-icon">{item.icon}</div>
            <div className="syllabus-card-title">{item.title}</div>
            <div className="syllabus-card-desc">{item.desc}</div>
          </div>
        ))}
      </div>
      <div className="syllabus-info-block">
        <h2>Why this syllabus?</h2>
        <ul>
          <li>Curated by expert educators for NMMS & SAT success</li>
          <li>Focus on conceptual clarity, problem-solving, and real exam patterns</li>
          <li>Interactive lessons, quizzes, and practice tests for every topic</li>
          <li>Adaptive learning paths for every student</li>
        </ul>
      </div>
      <div className="syllabus-cta-wrap">
        <button className="syllabus-cta-btn" onClick={() => window.location.href = '/pricing'}>Start Learning Now</button>
      </div>
    </div>
  );
};

export default Syllabus;
