"use client";

import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        {/* Left: Logo */}
        <div className="logo">Ezy-tax</div>

        {/* Center: Navigation */}
        <nav className="nav-center">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Blog</a>
          <a href="#">About Us</a>
        </nav>

        {/* Right: Logout */}
        <div className="nav-right">
          <button className="logout-btn">Login</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Blog</a>
          <a href="#">About Us</a>
          <button className="logout-btn">Login</button>
        </div>
      )}
    </header>
  );
}