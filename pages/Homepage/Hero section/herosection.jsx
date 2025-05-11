"use client"
import "./Hero.css";
import { useRouter } from "next/navigation"

export default function Hero() {
  const router = useRouter();
    const handleSignUp= () => {
      router.push("/SignUpPage"); 
    }
  return (
  <div className="hero">
  <h1>Empowering Taxpayers. Building the Nation.</h1>
  <p>Seamless and Transparent Solutions for Every Indian</p>
  <p className="description">EZY Tax is your next-generation platform designed to simplify tax filing, maximize your savings, and ensure complete peace of mind.</p>
  <div className="hero-buttons">
  <button onClick={handleSignUp} className="primary-btn">Get Started</button>
  <button className="secondary-btn">Learn More</button>
  </div>
</div>
  );
}
