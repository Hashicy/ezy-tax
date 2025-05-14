'use client';
import { useEffect, useState } from 'react';
import './AboutPage.css';

export default function AboutUsPage() {
  const [clients, setClients] = useState(0);
  const [years, setYears] = useState(0);
  const [experts, setExperts] = useState(0);

  useEffect(() => {
    const animate = (setValue, target) => {
      let count = 0;
      const speed = target < 50 ? 100 : 3; // Slower for small numbers

      const interval = setInterval(() => {
        count++;
        setValue(count);
        if (count >= target) clearInterval(interval);
      }, speed);
    };
  
    animate(setClients, 1500);
    animate(setYears, 10);
    animate(setExperts, 25);
  }, []);

  return (
    <div className="about-page">
      <section className="about-hero-banner">
        <div className="about-hero-text">
          <h1>ABOUT US</h1>
          <p>Empowering Taxpayers. Building the Nation.</p>
        </div>
      </section>

      <section className="about-section about-vision-mission">
        <div className="section-block">
          <h2>OUR VISION</h2>
          <p>
            To revolutionize tax compliance for every Indian through transparent, tech-driven, and human-centric solutions. We aim to bridge the gap between the taxpayer and the system with empathy and innovation.
          </p>
        </div>

        <div className="section-block">
          <h2>OUR MISSION</h2>
          <p>
            To empower individuals and businesses with AI-backed support, expert guidance, and seamless assistance in scrutiny, appeals, and compliance — ensuring peace of mind at every step.
          </p>
        </div>
      </section>

      <section className="about-section stats-section">
        <h2>OUR IMPACT</h2>
        <div className="stats">
          <div className="stat-box">
            <h3>{clients}+</h3>
            <p>Taxpayers Served</p>
          </div>
          <div className="stat-box">
            <h3>{years}+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat-box">
            <h3>{experts}+</h3>
            <p>Expert Advisors</p>
          </div>
        </div>
      </section>

      <section className="about-section about-team">
        <h2>MEET THE TEAM</h2>
        <div className="team-members">
          <div className="team-card">
            <div className="avatar"></div>
            <h4>Anil Verma</h4>
            <p>Retd. Income Tax Commissioner</p>
          </div>
          <div className="team-card">
            <div className="avatar"></div>
            <h4>Sneha Roy</h4>
            <p>Head of Compliance Tech</p>
          </div>
          <div className="team-card">
            <div className="avatar"></div>
            <h4>Ravi Sharma</h4>
            <p>Lead AI Developer</p>
          </div>
        </div>
      </section>

      <section className="about-section about-values">
        <h2>OUR CORE VALUES</h2>
        <ul>
          <li>🛡️ Integrity in Service</li>
          <li>🤝 Transparency and Trust</li>
          <li>⚖️ Legal Expertise Simplified</li>
          <li>💡 Smart, AI-Assisted Guidance</li>
          <li>🇮🇳 Citizen-Centric Innovation</li>
        </ul>
      </section>

      <section className="about-section testimonials">
        <h2>WHAT OUR USERS SAY</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>"EZY Tax saved me hours of confusion. Their support during scrutiny was top-notch!"</p>
            <h5>— Priya Mehra</h5>
          </div>
          <div className="testimonial">
            <p>"Never thought tax issues could be resolved so easily. A blessing for startups!"</p>
            <h5>— Amit Desai</h5>
          </div>
        </div>
      </section>
    </div>
  );
}
