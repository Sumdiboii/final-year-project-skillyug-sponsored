import React from "react";
import { useNavigate } from "react-router-dom";
import "../css files/LandingPage.css";
import Navbar from "../components/Navbar";
import ParticleBackground from "../components/StarBg";
import Footer from "../components/Footer";
import AstronautSVG from "../components/Astronaut";
import Ship from "../components/Astronaut";
import HexagonProfileSlider from "../components/VerticalSlider";


const LandingPage = () => {
    const navigate = useNavigate();
    const [scrolledDown, setScrolledDown] = React.useState(false);
    const lastScroll = React.useRef(window.scrollY);

    React.useEffect(() => {
        const handleScroll = () => {
            const curr = window.scrollY;
            if (curr > lastScroll.current + 10) {
                setScrolledDown(true);
            } else if (curr < lastScroll.current - 10) {
                setScrolledDown(false);
            }
            lastScroll.current = curr;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
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
                                <button className="prepmark-btn get-started" onClick={() => navigate("/pricing")}>Pricing Plans</button>
                            </div>
                            <div className="left-container-landingpage-1-bottom-bottom-2">
                                <button className="prepmark-btn about-us">About Us</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-container-landingpage-1">
                    <div className={`red-scroll-box${scrolledDown ? ' out' : ''}`}>
                        <Ship />
                    </div>
                </div>
            </div>

            <div className="landingpage-2">
                                 <div className="left-container-landingpage-2">
                                     <img src="/assets/skillyug-logo-removebg-preview.png" alt="Skillyug Logo" className="skillyug-logo" />
                                </div>
                <div className="right-container-landingpage-2">
                                    <div className="right-container-landingpage-2-top">
                                        <div className="flipcard">
                                            <div className="flipcard-inner">
                                                <div className="flipcard-front">
                                                    <div className="right-container-landingpage-2-top-1">
                                                        <div className="right-container-landingpage-2-top-1-top">
                                                            <img src="/assets/leaf.png" alt="Brain" className="brain-img" />
                                                        </div>
                                                        <div className="right-container-landingpage-2-top-1-bottom">
                                                            <span className="app-feature-desc">Interactive games for fun learning.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flipcard-back">
                                                    <span className="app-feature-back">Flip for fun fact: Games help boost memory and logic!</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flipcard">
                                            <div className="flipcard-inner">
                                                <div className="flipcard-front">
                                                    <div className="right-container-landingpage-2-top-2">
                                                        <div className="right-container-landingpage-2-top-2-top">
                                                            <img src="/assets/leaf.png" alt="Brain" className="brain-img" />
                                                        </div>
                                                        <div className="right-container-landingpage-2-top-2-bottom">
                                                            <span className="app-feature-desc">Personalized analytics to track progress.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flipcard-back">
                                                    <span className="app-feature-back">Flip for fun fact: Analytics show your improvement over time!</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-container-landingpage-2-bottom">
                                        <div className="flipcard">
                                            <div className="flipcard-inner">
                                                <div className="flipcard-front">
                                                    <div className="right-container-landingpage-2-bottom-1">
                                                        <div className="right-container-landingpage-2-bottom-1-top">
                                                            <img src="/assets/leaf.png" alt="Brain" className="brain-img" />
                                                        </div>
                                                        <div className="right-container-landingpage-2-bottom-1-bottom">
                                                            <span className="app-feature-desc">Adaptive content for every skill level.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flipcard-back">
                                                    <span className="app-feature-back">Flip for fun fact: Content adapts to your learning speed!</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flipcard">
                                            <div className="flipcard-inner">
                                                <div className="flipcard-front">
                                                    <div className="right-container-landingpage-2-bottom-2">
                                                        <div className="right-container-landingpage-2-bottom-2-top">
                                                            <img src="/assets/leaf.png" alt="Brain" className="brain-img" />
                                                        </div>
                                                        <div className="right-container-landingpage-2-bottom-2-bottom">
                                                            <span className="app-feature-desc">Safe, child-friendly environment.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flipcard-back">
                                                    <span className="app-feature-back">Flip for fun fact: Our platform is ad-free and secure!</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                </div>
            </div>

            {/* New section: App video (left) + vertical gallery (right) */}
            <div className="landingpage-2-5">
                 <div className="lp25-right">
                    <HexagonProfileSlider />
                 </div>
                <div className="lp25-left">
                    <div className="vid-title-text">Experience our app in action</div>
                    <div className="lp25-video-wrap">
                        <video
                                                                                    className="lp25-video"
                                                                                    src="/assets/276047_small.mp4"
                                                                                    autoPlay
                                                                                    loop
                                                                                    muted
                                                                                    controls
                                                                                    playsInline
                                                                                    preload="metadata"
                                                                                    poster="/assets/app-poster.jpg"
                                                                                ></video>
                    </div>
                </div>
                <div className="lp25-right">
                    <HexagonProfileSlider />
                </div>
            </div>

                         <div className="landingpage-3">
                                 <ParticleBackground />
                                 <div className="left-container-landingpage-3">
                                        <h2 className="lp3-title">Student Results Comparison</h2>
                                        <div className="lp3-chart-wrap">
                                            <svg className="lp3-chart" viewBox="0 0 420 260" role="img" aria-label="Traditional vs PrepMark scores">
                                                <defs>
                                                    <linearGradient id="pmGrad" x1="0" x2="0" y1="0" y2="1">
                                                        <stop offset="0%" stopColor="#35c7ff" />
                                                        <stop offset="100%" stopColor="#2a5298" />
                                                    </linearGradient>
                                                </defs>
                                                {/* axes */}
                                                <line x1="40" y1="220" x2="400" y2="220" stroke="#ffffff33" strokeWidth="2" />
                                                <line x1="40" y1="30" x2="40" y2="220" stroke="#ffffff33" strokeWidth="2" />
                                                {/* y grid lines */}
                                                {Array.from({length:4}).map((_,i)=>{
                                                    const y = 220 - (i+1)*40;
                                                    return <line key={i} x1="40" y1={y} x2="400" y2={y} stroke="#ffffff18" strokeWidth="1" />
                                                })}
                                                {/* categories */}
                                                {[
                                                    { label: 'Math', t: 60, p: 84 },
                                                    { label: 'Memory', t: 55, p: 88 },
                                                    { label: 'Logic', t: 58, p: 90 },
                                                    { label: 'Speed', t: 50, p: 82 },
                                                ].map((c, idx) => {
                                                    const groupX = 70 + idx * 80;
                                                    const tH = c.t * 1.6; // scale
                                                    const pH = c.p * 1.6;
                                                    return (
                                                        <g key={c.label}>
                                                            {/* Traditional bar */}
                                                            <rect x={groupX} y={220 - tH} width="24" height={tH} fill="#ff715b" rx="4" />
                                                            {/* PrepMark bar */}
                                                            <rect x={groupX + 28} y={220 - pH} width="24" height={pH} fill="url(#pmGrad)" rx="4" />
                                                            {/* label */}
                                                            <text x={groupX + 14} y="240" fill="#fff" fontSize="12" textAnchor="middle">{c.label}</text>
                                                        </g>
                                                    )
                                                })}
                                                {/* legend */}
                                                <g className="lp3-legend">
                                                    <rect x="240" y="34" width="12" height="12" fill="#ff715b" rx="2" />
                                                    <text x="258" y="44" fill="#fff" fontSize="12">Traditional</text>
                                                    <rect x="240" y="54" width="12" height="12" fill="url(#pmGrad)" rx="2" />
                                                    <text x="258" y="64" fill="#fff" fontSize="12">PrepMark</text>
                                                </g>
                                            </svg>
                                        </div>
                                 </div>
                                 <div className="right-container-landingpage-3">
                                     <div className="lp3-stats-grid">
                                         <div className="stat-card">
                                             <div className="stat-value">15</div>
                                             <div className="stat-label">Lessons</div>
                                         </div>
                                         <div className="stat-card">
                                             <div className="stat-value">50k</div>
                                             <div className="stat-label">Users</div>
                                         </div>
                                         <div className="stat-card">
                                             <div className="stat-value">92%</div>
                                             <div className="stat-label">Avg. Score Lift</div>
                                         </div>
                                         <div className="stat-card">
                                             <div className="stat-value">4.8★</div>
                                             <div className="stat-label">App Rating</div>
                                         </div>
                                     </div>
                                 </div>
                        </div>

            <div className="landingpage-4">
                {/* Reviews slider: two rows, opposite directions */}
                {(() => {
                    const fallbackAvatar = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><circle cx="40" cy="40" r="40" fill="#e0e7ff"/></svg>');
                    const reviewsTop = [
                        { name: 'Aarav', img: 'https://i.pravatar.cc/80?img=12', text: 'PrepMark made learning fun—my math scores jumped in 3 weeks!' },
                        { name: 'Diya', img: 'https://i.pravatar.cc/80?img=15', text: 'The games are engaging and the analytics help me improve.' },
                        { name: 'Kabir', img: 'https://i.pravatar.cc/80?img=20', text: 'Love the personalized lessons. I feel more confident now.' },
                        { name: 'Meera', img: 'https://i.pravatar.cc/80?img=31', text: 'Reports are so clear—great for tracking progress!' },
                        { name: 'Ishaan', img: 'https://i.pravatar.cc/80?img=36', text: 'Adaptive content keeps me challenged without being hard.' },
                    ];
                    const reviewsBottom = [
                        { name: 'Parent—Anita', img: 'https://i.pravatar.cc/80?img=47', text: 'My daughter looks forward to lessons. Huge confidence boost.' },
                        { name: 'Parent—Ravi', img: 'https://i.pravatar.cc/80?img=52', text: 'Reliable progress tracking; we know exactly where to help.' },
                        { name: 'Parent—Neha', img: 'https://i.pravatar.cc/80?img=58', text: 'Safe, structured, and effective. Highly recommend.' },
                        { name: 'Parent—Vikram', img: 'https://i.pravatar.cc/80?img=62', text: 'Scores improved and screen time is finally meaningful.' },
                        { name: 'Parent—Simran', img: 'https://i.pravatar.cc/80?img=66', text: 'Great balance of fun and learning; analytics are A+.' },
                    ];
                    const StarRow = () => (
                        <div className="review-stars" aria-label="5 out of 5 stars" title="5 out of 5">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                    );
                    const Card = ({ r }) => (
                        <div className="review-card">
                            <div className="review-card-top">
                                <img
                                    className="review-avatar"
                                    src={r.img}
                                    alt={`${r.name} avatar`}
                                    loading="lazy"
                                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = fallbackAvatar; }}
                                />
                                <div className="review-meta">
                                    <div className="review-name">{r.name}</div>
                                    <StarRow />
                                </div>
                            </div>
                            <p className="review-text">{r.text}</p>
                        </div>
                    );
                    const Track = ({ items, reverse }) => (
                        <div className={`reviews-track${reverse ? ' reverse' : ''}`}>
                            <div className="track-segment">
                                {items.map((r, i) => <Card key={`a-${i}`} r={r} />)}
                            </div>
                            <div className="track-segment" aria-hidden="true">
                                {items.map((r, i) => <Card key={`b-${i}`} r={r} />)}
                            </div>
                        </div>
                    );
                    return (
                        <div className="reviews-section">
                            <div className="reviews-row row-1">
                                <Track items={reviewsTop} />
                            </div>
                            <div className="reviews-row row-2">
                                <Track items={reviewsBottom} reverse />
                            </div>
                        </div>
                    );
                })()}
            </div>

             <div className="landingpage-5">
                  <ParticleBackground />
                  {(() => {
                    const faqs = [
                        { q: 'What ages is PrepMark suitable for?', a: 'PrepMark is designed for students aged 6–16, with adaptive content that matches each learner\'s level.' },
                        { q: 'How long are the lessons?', a: 'Most lessons take 10–15 minutes, perfect for daily practice without overload.' },
                        { q: 'Do parents get progress reports?', a: 'Yes. Parents can track performance via clear dashboards and weekly summaries.' },
                        { q: 'Is it safe for kids?', a: 'Absolutely. We provide a secure, ad-free, child-friendly environment.' },
                    ];
                    const FAQItem = ({ item, idx }) => {
                        const [open, setOpen] = React.useState(idx === 0);
                        return (
                            <div className={`faq-item${open ? ' open' : ''}`}> 
                                <button className="faq-q" onClick={() => setOpen(!open)}>
                                    <span>{item.q}</span>
                                    <span className={`chev${open ? ' up' : ''}`} aria-hidden>⌄</span>
                                </button>
                                <div className="faq-a" aria-hidden={!open}>{item.a}</div>
                            </div>
                        );
                    };
                    const ownerImg = '/assets/owner.jpg';
                    const ownerFallback = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><circle cx="60" cy="60" r="60" fill="#e0e7ff"/></svg>');
                    return (
                        <>
                          <div className="left-container-landingpage-5">
                              <div className="faqs-wrap">
                                  <h2 className="faqs-title">Frequently Asked Questions</h2>
                                  <div className="faqs-list">
                                      {faqs.map((f, i) => <FAQItem key={i} item={f} idx={i} />)}
                                  </div>
                              </div>
                          </div>
                          <div className="right-container-landingpage-5">
                              <div className="owner-note-card">
                                  <img
                                    className="owner-avatar"
                                    src={ownerImg}
                                    alt="Founder portrait"
                                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = ownerFallback; }}
                                    loading="lazy"
                                  />
                                  <blockquote className="owner-quote">“Every child can build a sharper mind with the right practice—one small win each day.”</blockquote>
                                  <p className="owner-speech">Hi, I\'m the founder of PrepMark. We built this platform to make brain training engaging and effective for students. Try a few lessons, watch the progress reports, and you\'ll see confidence grow week by week. Keep learning—your future self will thank you.</p>
                                  <div className="owner-meta">
                                      <div className="owner-name">Rahul Mehta</div>
                                      <div className="owner-role">Founder, PrepMark</div>
                                  </div>
                              </div>
                          </div>
                        </>
                    );
                  })()}
            </div>
           <Footer />
		</div>
	);
};

export default LandingPage;
