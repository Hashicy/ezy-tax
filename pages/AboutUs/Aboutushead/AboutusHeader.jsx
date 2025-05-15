"use client";
import "./AboutusHeader.css";
import Image from "next/image";

export default function AboutHeader() {
  return (
    <section className="about-hero-container">
      <div className="about-content">
        <div className="about-text">
          <p className="section-label">About Us</p>
          <h1>
            We are <span className="highlight">EZY Tax.</span>
          </h1>
          <h2>Connected compliance for Indian taxpayers.</h2>
          <p className="mission">
            Our mission is to simplify taxation, save time and stress for
            millions of Indian citizens and businesses. We are a
            technology-first platform offering transparent, expert-assisted
            scrutiny and appeal services, built to empower every taxpayer.
          </p>
        </div>
        <div className="about-image">
          <Image
            src="/imag.png"
            alt="Financial Illustration"
            width={380}
            height={280}
          />
          <div className="image-caption">
            <p>
              <strong>From disputes to</strong>
              <br />
              <span>confident tax resolution</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
