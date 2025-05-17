"use client";
import "./ImpactSection.css";
import Image from "next/image";


export default function ImpactSection() {
  return (
    <section className="impact-section">
      <div className="impact-image">
        <Image src="/india.png" alt="India Map" width={500} height={400} />
      </div>
      <div className="impact-content">
        <h2>$300B+ B2B Invoices Flow Through EZY Tax, Every Year</h2>
        <p>
          With our cutting-edge network and platform, we are building India's most
          trusted tax technology solution. We've touched thousands of MSMEs —
          second only to the Government of India.
        </p>
        <ul>
          <li>✅ #1 GST platform for Enterprises</li>
          <li>✅ #1 tax platform for professionals</li>
          <li>✅ #1 income tax assistance for taxpayers</li>
        </ul>
      </div>
    </section>
  );
}
