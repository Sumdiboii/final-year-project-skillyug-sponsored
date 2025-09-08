import React from "react";
import "../css files/Pricing.css";
import ParticleBackground from "../components/StarBg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const features = [
  "Interactive games for fun learning",
  "Personalized analytics to track progress",
  "Adaptive content for every skill level",
  "Safe, child-friendly environment"
];

const Pricing = () => {
  return (
    <div className="pricing-page">
        <Navbar />
         <ParticleBackground />
    <div className="pricing-title">
        <h1><img src="/assets/PrepMark.png" alt="PrepMark Logo" className="prepmark-logo2" />Pricing Plans</h1>
      
    </div>
         <div className="pricing-containers">
      <div className="pricing-container-1">
         <div className="pricing-container-1-top"><h1>What do Students Get?</h1></div>
          <div className="pricing-container-1-bottom">
            <div className="pricing-container-1-bottom-1">
                <div className="pricing-container-1-bottom-1-1">s</div>
                <div className="pricing-container-1-bottom-1-2">s</div>
            </div>
            <div className="pricing-container-1-bottom-2">
                <div className="pricing-container-1-bottom-2-1">s</div>
                <div className="pricing-container-1-bottom-2-2">s</div>
            </div>
            <div className="pricing-container-1-bottom-3">
                <div className="pricing-container-1-bottom-3-1">s</div>
                <div className="pricing-container-1-bottom-3-2">s</div>
            </div>
          </div>
      </div>
       <div className="pricing-container-2">
        <div className="pricing-container-2-top"><h1>What do Guardians Get?</h1></div>
          <div className="pricing-container-2-bottom">
            <div className="pricing-container-2-bottom-1">
                <div className="pricing-container-2-bottom-1-1">s</div>
                <div className="pricing-container-2-bottom-1-2">s</div>
            </div>
            <div className="pricing-container-2-bottom-2">
                <div className="pricing-container-2-bottom-1-1">s</div>
                <div className="pricing-container-2-bottom-1-2">s</div>
            </div>
            <div className="pricing-container-2-bottom-3">
                <div className="pricing-container-2-bottom-1-1">s</div>
                <div className="pricing-container-2-bottom-1-2">s</div>
            </div>
          </div>
      </div>
      <div className="pricing-container-3">
        <div className="pricing-container-3-top"><h1>Available Plans</h1></div>
          <div className="pricing-container-3-bottom">
            <div className="pricing-container-3-bottom-1">s</div>
            <div className="pricing-container-3-bottom-2">s</div>
            <div className="pricing-container-3-bottom-3">s</div>
          </div>
      </div>
      </div>
        .

      <Footer />
    </div>
  );
};

export default Pricing;
