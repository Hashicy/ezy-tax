"use client";

import { useState } from "react";
import "./page.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";
import { useRouter } from "next/navigation"
  
  export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const router = useRouter();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        router.push("/dashboard"); 
      } catch (err) {
        setError("Invalid Login Credentials");
      }
    };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Login to your EZY Tax account</p>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <p className="signup-redirect">
          Don't have an account? <a href="/SignUpPage">Sign up</a>
        </p>
      </div>
    </div>
  );
}
