'use client';

import "./AboutPage.css";


export default function AboutPage() {
  return (
    <div>
      <section className="about-us-section">
        <div className="about-us-container">
          <h1 className="about-us-heading">About Us</h1>
          <p className="about-us-description">
            At EZY Tax, we provide AI-assisted services designed to make tax compliance, appeals, and litigation support more manageable and accessible. Our approach leverages expertise from retired tax officers and cutting-edge technology to guide taxpayers through complex legal processes.
          </p>

          <h2 className="about-us-subheading">Our Mission</h2>
          <p className="about-us-text">
            Our mission is to simplify the often overwhelming process of tax compliance and litigation. We aim to empower individuals and businesses with personalized, accurate, and reliable support while using AI and human expertise to streamline the process.
          </p>

          <h2 className="about-us-subheading">Our Vision</h2>
          <p className="about-us-text">
            We envision a world where taxpayers can effortlessly navigate the complex scrutiny and appellate processes, ensuring transparency, fairness, and timely resolutions for all.
          </p>

          <h2 className="about-us-subheading">Our Values</h2>
          <ul className="about-us-values">
            <li><strong>Integrity:</strong> Upholding the highest ethical standards in everything we do.</li>
            <li><strong>Innovation:</strong> Continuously leveraging technology to improve the tax compliance experience.</li>
            <li><strong>Customer-Centricity:</strong> Putting our customers first by providing personalized solutions.</li>
            <li><strong>Transparency:</strong> Offering clear, straightforward guidance every step of the way.</li>
          </ul>

          <h2 className="about-us-subheading">Meet the Team</h2>
          <div className="team-container">
            <div className="team-member">
    
              <h3 className="team-member-name">John Doe</h3>
              <p className="team-member-role">Co-Founder & CEO</p>
              <p className="team-member-description">
                John brings years of experience in the tax industry, having worked in various governmental and corporate roles. His leadership and passion for innovation drive the company's commitment to customer-centric services.
              </p>
            </div>


            <div className="team-member">
            
              <h3 className="team-member-name">Jane Smith</h3>
              <p className="team-member-role">Co-Founder & CTO</p>
              <p className="team-member-description">
                Jane is a tech visionary with a deep background in AI and machine learning. She leads the development of our innovative AI-driven solutions, ensuring that our services remain on the cutting edge of technology.
              </p>
            </div>


            <div className="team-member">
              
              <h3 className="team-member-name">Michael Brown</h3>
              <p className="team-member-role">Tax Expert</p>
              <p className="team-member-description">
                Michael is a retired tax officer with over 30 years of experience. His deep expertise in tax law and compliance is a cornerstone of our services, helping our customers navigate even the most complex tax situations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};