import React from 'react';
import './GetStarted.css';

export default function GetStarted() {
  return (
    <section className="get-started-section">
      <div className="get-started-container">
        <h2 className="get-started-heading">Ready to Get Started?</h2>
        <p className="get-started-subtext">
          Let EZY Tax simplify your tax journey with expert guidance and AI-powered solutions.
        </p>
        <a href="#services" className="get-started-button">Get Started</a>
      </div>
    </section>
  );
}
