import React from "react";
import Image from "next/image";
import "./ValueAtScale.css";

const stats = [
  { value: "₹1,000Cr+", label: "taxes saved per year", icon: "/icons/cloud.png" },
  { value: "$300B", label: "worth invoices filed", icon: "/icons/factory.png" },
  { value: "$4B+", label: "tax payments in FY20", icon: "/icons/tax.png" },
  { value: "6M+", label: "ITRs filed in 2020", icon: "/icons/itr.png" },
  { value: "10M+", label: "e-Waybills every year", icon: "/icons/ewaybill.png" },
  { value: "1.8M+", label: "man-hours saved", icon: "/icons/time.png" },
];

export default function ValueAtScale() {
  return (
    <section className="value-scale-section">
      <div className="value-scale-text">
        <h2>Creating value <br /> at scale</h2>
        <p>
          Products that perform seamlessly during any kind of surge, so you
          don’t have to worry about up-time and reliability. Upload and process
          any amount of data any time of the month, smoothly.
        </p>
      </div>

      <div className="value-scale-cards">
        {stats.map((stat, idx) => (
          <div key={idx} className="value-scale-card">
            <div>
              <p className="value">{stat.value}</p>
              <p className="label">{stat.label}</p>
            </div>
            <Image src={stat.icon} alt={stat.label} width={36} height={36} />
          </div>
        ))}
      </div>
    </section>
  );
}
