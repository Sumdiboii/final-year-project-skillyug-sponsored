

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import LandingPage from "./jsx files/LandingPage";
import Pricing from "./jsx files/Pricing";
import Syllabus from "./jsx files/Syllabus";
import Login from "./jsx files/Login";
import './App.css';
import Loader from "./components/Loader";

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
