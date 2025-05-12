"use client";
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react";
import Link from "next/link";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = () => {
    router.push("/LoginPage"); 
  };
  const handleSignUp= () => {
    router.push("/SignUpPage"); 
  }
  const AboutUs= () => {
    router.push("/AboutUs"); 
  }

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">

        <div className="logo">Ezy-tax</div>

        <nav className="nav-center">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Blog</a>
          <a onClick={AboutUs} href="#">About Us</a>
        </nav>

        <div className="nav-right">
          <button className="login-btn" onClick={handleLogin}>Login</button>
          <button className="signup-btn" onClick={handleSignUp}>Sign Up</button>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Blog</a>
          <a href="#">About Us</a>
          <button className="login-btn" onClick={handleLogin}>Login</button>
          <button className="signup-btn" onClick={handleSignUp}>Sign Up</button>
        </div>
      )}
    </header>
  );
}
