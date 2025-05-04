"use client";

import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Prior Consultancy",
      description: "Plan ahead with expert advice before any tax proceedings begin. Avoid surprises.",
    },
    {
      title: "Income Tax Notice",
      description: "Respond confidently to tax notices with AI-assisted drafting and expert review.",
    },
    {
      title: "Second Opinion",
      description: "Unsure about existing advice? Get a reliable second opinion from seasoned professionals.",
    },
    {
      title: "Income Tax Appeal – CIT(A)",
      description: "Draft and file effective appeals before the Commissioner of Income Tax (Appeals).",
    },
    {
      title: "Appeal before Hon. ITAT",
      description: "Get support for complex litigation at the Income Tax Appellate Tribunal level.",
    },
    {
      title: "Appeal before Hon. High Court",
      description: "Access qualified representation and coordination for High Court tax appeals.",
    },
  ];

  return (

    <section id="Services" className="services">
      <h2>Our Services</h2>
      <p className="services-subtitle">
        Expert-driven tax solutions tailored for every stage of your journey.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
