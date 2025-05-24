"use client";
import "./products.css";
import Image from "next/image";
import { useState } from "react";

const services = [
  {
    name: "Prior Consultancy",
    desc: "Proactive advice and tax planning strategies to minimize liabilities and ensure compliance.",
    image: "/products/one.png",
    details: "Our Prior Consultancy service offers personalized tax planning and expert review of your financial profile. Whether you're an individual or a small business, we help optimize your tax obligations, structure income sources efficiently, and ensure that you’re legally compliant with changing regulations. This includes portfolio review, deduction planning, and preemptive risk checks."
  },
  {
    name: "Income Tax Notices",
    desc: "Respond to scrutiny, reopening, and search notices with expert guidance and compliance support.",
    image: "/products/two.jpg",
    details: "We assist clients in decoding complex notices received under sections like 143(1), 143(2), 148, and 153C. The service includes drafting suitable responses, collating necessary documentation, legal referencing, and expert review by retired tax officers. We ensure timely compliance to avoid penalties and escalations."
  },
  {
    name: "Second Opinion",
    desc: "Independent verification of tax strategy or compliance advice for greater confidence and clarity.",
    image: "/products/three.jpg",
    details: "Get a fresh pair of expert eyes on your case. This service is ideal for clients already advised by another consultant but seeking validation or alternative perspectives. We re-analyze your documents, filings, or planned actions, and provide written advisory comments backed by real case-law references."
  },
  {
    name: "Appeal to CIT(A)",
    desc: "Draft and file appeals before the Commissioner of Income Tax (Appeals) for dispute resolution.",
    image: "/products/four.jpg",
    details: "We provide full assistance in preparing your appeal under section 246A. Our team drafts the Statement of Facts, Grounds of Appeal, and compiles supporting legal precedents. We also assist in uploading the appeal through e-filing portals and guide you through procedural timelines."
  },
  {
    name: "Appeal to ITAT",
    desc: "Handle second-level appeals before the Income Tax Appellate Tribunal with hybrid representation.",
    image: "/products/five.jpg",
    details: "This service supports taxpayers whose CIT(A) appeals have been rejected. We prepare comprehensive submissions for ITAT, simulate Q&A based on tribunal trends, and partner with qualified ARs or CAs for oral representations. AI assistance is used for pattern detection in similar tribunal rulings."
  },
  {
    name: "Appeal to High Court",
    desc: "Pursue legal points of dispute by appealing ITAT decisions before Hon'ble High Court.",
    image: "/products/six.jpg",
    details: "We coordinate with tax-specialized legal professionals to draft and file Writ Petitions or Special Leave Petitions (SLPs). Our team assists with briefing counsels, compiling certified documents, and tracking court timelines. This service is meant for clients escalating unresolved legal interpretations."
  }
];

export default function ProductPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="product-page">
      <div className="product-hero">
        <h1>Our Services</h1>
        <p>Dedicated to simplifying income tax proceedings and appeals for every Indian.</p>
      </div>
      <div className="product-grid fixed-two-columns">
        {services.map((service, idx) => (
          <div className="product-card" key={idx}>
            <Image
              src={service.image}
              alt={service.name}
              width={100}
              height={100}
              className="product-image"
            />
            <h3>{service.name}</h3>
            <p>{service.desc}</p>
            <button
              className="learn-more"
              onClick={() => setSelected(service)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selected.name}</h2>
            <p>{selected.details}</p>
            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}

      <div className="inquiry-form">
        <h2>Need Help Choosing a Service?</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Tell us what you need help with..." required></textarea>
          <button type="submit">Request Callback</button>
        </form>
      </div>
    </div>
  );
}
