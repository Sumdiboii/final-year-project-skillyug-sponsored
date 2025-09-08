import React from "react";
import "../css files/LandingPage.css";
import Navbar from "../components/Navbar";
import ParticleBackground from "../components/StarBg";
import Footer from "../components/Footer";


const LandingPage = () => {
	return (
		<div className="landing-page">
            <Navbar />
            
			<div className="landingpage-1">
                <ParticleBackground />
                <div className="left-container-landingpage-1">
                    <div className="left-container-landingpage-1-top">
                        <img src="/assets/PrepMark.png" alt="PrepMark Logo" className="prepmark-logo" />
                    </div>
                    <div className="left-container-landingpage-1-bottom">
                        <div className="left-container-landingpage-1-bottom-top">
                            <span className="prepmark-subtitle">Empowering children with India's #1 aptitude and brain training platform</span>
                        </div>
                        <div className="left-container-landingpage-1-bottom-bottom">
                            <div className="left-container-landingpage-1-bottom-bottom-1">
                                <button className="prepmark-btn get-started">Pricing Plans</button>
                            </div>
                            <div className="left-container-landingpage-1-bottom-bottom-2">
                                <button className="prepmark-btn about-us">About Us</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-container-landingpage-1">
                    
                    <div className="square-1"></div>
                    <div className="square-2"></div>
                    <div className="square-3"></div>
                    <div className="square-4"></div>
                </div>
            </div>

            <div className="landingpage-2">
                                 <div className="left-container-landingpage-2">
                                     <img src="/assets/skillyug-logo-removebg-preview.png" alt="Skillyug Logo" className="skillyug-logo" />
                                </div>
                <div className="right-container-landingpage-2">
                  <div className="right-container-landingpage-2-top">
                    <div className="right-container-landingpage-2-top-1">
                        <div className="right-container-landingpage-2-top-1-top">
                            <img src="/assets/leaf.png" alt="Brain" className="brain-img" />
                        </div>
                        <div className="right-container-landingpage-2-top-1-bottom">
                           
                                <span className="app-feature-desc">Interactive games for fun learning.</span>
                                
                            
                        </div>
                    </div>
                    <div className="right-container-landingpage-2-top-2">
                        <div className="right-container-landingpage-2-top-2-top">
                             <img src="/assets/leaf.png" alt="Brain" className="brain-img" />
                        </div>
                        <div className="right-container-landingpage-2-top-2-bottom">
                            <span className="app-feature-desc">Personalized analytics to track progress.</span>
                                
                        </div>
                    </div>
                  </div>
                  <div className="right-container-landingpage-2-bottom">
                    <div className="right-container-landingpage-2-bottom-1">
                        <div className="right-container-landingpage-2-bottom-1-top">
                             <img src="/assets/leaf.png" alt="Brain" className="brain-img" />
                        </div>
                        <div className="right-container-landingpage-2-bottom-1-bottom">
                            <span className="app-feature-desc">Adaptive content for every skill level.</span>
                               
                        </div>
                    </div>
                    <div className="right-container-landingpage-2-bottom-2">
                        <div className="right-container-landingpage-2-bottom-2-top">
                             <img src="/assets/leaf.png" alt="Brain" className="brain-img" />
                        </div>
                        <div className="right-container-landingpage-2-bottom-2-bottom">
                             <span className="app-feature-desc">Safe, child-friendly environment.</span>
                        </div>
                    </div>
                  </div>
                </div>
            </div>

             <div className="landingpage-3">
                 <ParticleBackground />
                 
            </div>

             <div className="landingpage-4">
                 <div className="left-container-landingpage-4">
                    <p>hello</p>
                </div>
                <div className="right-container-landingpage-4">
                    <p>world</p>
                </div>
            </div>

             <div className="landingpage-5">
                  <ParticleBackground />
            </div>
           <Footer />
		</div>
	);
};

export default LandingPage;
