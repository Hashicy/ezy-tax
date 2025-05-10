"use client";
import React from 'react';
import './GetStarted.css';
import { useRouter } from "next/navigation"

export default function GetStarted() {
  const router = useRouter();
  const handleSignUp= () => {
    router.push("/SignUpPage"); 
  }
  return (
    <section className="get-started-section">
      <div className="get-started-container">
        <h2 className="get-started-heading">Ready to Get Started?</h2>
        <p className="get-started-subtext">
          Let EZY Tax simplify your tax journey with expert guidance and AI-powered solutions.
        </p>
        <a onClick={handleSignUp} className="get-started-button">Get Started</a>
      </div>
    </section>
  );
}
