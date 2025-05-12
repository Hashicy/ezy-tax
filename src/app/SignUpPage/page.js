'use client';

import Link from "next/link";
import "./page.css";

export default function SignUpPage() {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Create Your Account</h2>
        <p>Sign up to get started with EZY Tax</p>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <div className="signup-redirect">
          Already have an account? <Link href="/LoginPage">Login</Link>
        </div>
      </div>
    </div>
  );
}
