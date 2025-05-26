"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { auth, db } from "../../../firebase/firebaseConfig"; // Adjust path as needed
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import "./page.css";

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCred.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        email,
        phone,
        createdAt: new Date(),
      });

      console.log("✅ Sign up successful. Redirecting...");
      router.push("/dashboard");
    } catch (err) {
      console.error("❌ Signup failed:", err);
      setError(err.message || "Signup failed.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Create Your Account</h2>
        <p>Sign up to get started with EZY Tax</p>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Sign Up</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <p className="signup-redirect">
          Already have an account? <Link href="/LoginPage">Login</Link>
        </p>
      </div>
    </div>
  );
}
