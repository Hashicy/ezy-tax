"use client";
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react";
import "./Header.css";

export default function Header({ pageupd }) {
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
  const handleSignUp = () => {
    router.push("/SignUpPage");
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">Ezy-tax</div>

        <nav className="nav-center">
          <a href="#" onClick={() => pageupd("Home")}>Home</a>
          <a href="#" onClick={() => pageupd("Products")}>Products</a>
          <a href="#" onClick={() => pageupd("Blogs")}>Blog</a>
          <a href="#" onClick={() => pageupd("AboutUs")}>About Us</a>
          
          <a href="https://umeedometre.streamlit.app/" target="_blank" rel="noopener noreferrer">
            Prediction Metre
          </a>
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
          <a href="#" onClick={() => pageupd("Home")}>Home</a>
          <a href="#" onClick={() => pageupd("Products")}>Products</a>
          <a href="#" onClick={() => pageupd("Blogs")}>Blog</a>
          <a href="#" onClick={() => pageupd("AboutUs")}>About Us</a>
          
          <a href="https://umeedometre.streamlit.app/" target="_blank" rel="noopener noreferrer">
            Prediction Metre
          </a>

          <button className="login-btn" onClick={handleLogin}>Login</button>
          <button className="signup-btn" onClick={handleSignUp}>Sign Up</button>
        </div>
      )}
    </header>
  );
}
