

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import LandingPage from "./jsx files/LandingPage";
import Pricing from "./jsx files/Pricing";
import Syllabus from "./jsx files/Syllabus";
import Login from "./jsx files/Login";
import Home from "./jsx files/Home";

import './App.css';
import Loader from "./components/Loader";
import Profile from "./jsx files/Profile";
import Statistics from "./jsx files/Statistics";
import Settings from "./jsx files/Settings";
import Practice from "./jsx files/Practice";
import Learning from "./jsx files/Learning";
import AdminLogin from "./jsx files/AdminLogin";

function AppRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Loader duration
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </>
  );
}


function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
