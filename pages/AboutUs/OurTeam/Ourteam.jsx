"use client";
import "./ourteam.css";
import Image from "next/image";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "Pankaj Joshi",
    role: "CEO & Founder",
    image: "https://dummyjson.com/icon/jamesd/128", 
    twitter: "#",
    linkedin: "#",
    bg: "apricot"
  },
  {
    name: "Tanuja Joshi",
    role: "Co-founder",
    image: "https://dummyjson.com/icon/sophiab/128y",
    twitter: "#",
    linkedin: "#",
    bg: "peach"
  },
  {
    name: "Harshita Joshi",
    role: "CTO",
    image: "https://dummyjson.com/icon/sophiab/128y",
    twitter: "#",
    linkedin: "#",
    bg: "lightorange"
  },
  {
    name: "Bhavika Joshi",
    role: "Product Head",
    image: "https://dummyjson.com/icon/sophiab/128y",
    twitter: "#",
    linkedin: "#",
    bg: "mango"
  },
];

export default function TeamSection() {
  return (
    <section className="team-section">
      <h2>Meet Our Core Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, idx) => (
          <div className={`team-card ${member.bg}`} key={idx}>
            <Image
              src={member.image}
              alt={member.name}
              width={100}
              height={100}
              className="profile-pic"
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="social-icons">
              <a href={member.twitter}><FaTwitter /></a>
              <a href={member.linkedin}><FaLinkedin /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
