"use client";

import React from "react";
import "./Services.css";

const services = [
  {
    title: "Prior Consultancy",
    description: "Expert advice before you make any tax-related decisions.",
  },
  {
    title: "Income Tax Notice",
    description: "Professional help in understanding and responding to IT notices.",
  },
  {
    title: "Second Opinion",
    description: "Reassess your current tax strategy or case with expert input.",
  },
  {
    title: "Income Tax Appeal - CIT(A)",
    description: "File appeals before the Commissioner of Income Tax (Appeals) efficiently.",
  },
  {
    title: "Appeal before Hon. ITAT",
    description: "Strong representation before the Income Tax Appellate Tribunal.",
  },
  {
    title: "Appeal before Hon. High Court",
    description: "Navigate complex legal proceedings with the support of senior legal professionals.",
  },
];

export default function Services() {
  return (
    <section className="services-section" id="Services">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>{service.title}</h3>
              </div>
              <div className="flip-card-back">
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
