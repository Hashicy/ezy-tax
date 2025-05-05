import React from "react";
import "./WhyChooseUs.css";

const cards = [
  { number: "500+", label: "Tax Appeals Resolved" },
  { number: "1000+", label: "Scrutiny Cases Handled" },
  { number: "50+", label: "Experts Onboarded" },
  { number: "99%", label: "Success Rate in Draft Responses" },
  { number: "24/7", label: "Support Availability" },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="why-container">
        <div className="why-left">
          <h2>Why EZY Tax?</h2>
          <p>
            With a team of retired tax officers and legal experts, EZY Tax helps
            you respond to complex scrutiny, appeals, and litigation – without
            the stress. Trusted by hundreds, backed by real expertise.
          </p>
        </div>
        <div className="why-right">
          {cards.map((card, index) => (
            <div key={index} className={`stat-card card-${index}`}>
              <div className="stat-title">{card.number}</div>
              <div className="stat-desc">{card.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
