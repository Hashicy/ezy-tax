"use client";

import { useState } from "react";
import "./page.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.data();
      console.log("Fetched User Data:", userData);


      if (userData?.isAdmin) {
        router.push("/admin-dashboard");
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      console.error("Login failed", err);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-glass">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Access your EZY Tax account</p>
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
          {error && <p className="error-text">{error}</p>}
        </form>
        <p className="signup-redirect">
          Don't have an account? <a href="/SignUpPage">Sign up</a>
        </p>
      </div>
    </div>
  );
}
