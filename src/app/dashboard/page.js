"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";
import { useRouter } from "next/navigation";
import "./page.css";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u) setUser(u);
      else router.push("/LoginPage");
    });
    return () => unsub();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  return (
    <div className="dashboard-wrapper">
      <aside className="sidebar">
        <h2>🧾 EzyTax</h2>
        <nav>
          <a href="#">📄 My Cases</a>
          <a href="#">📬 Notices</a>
          <a href="#">🧾 Appeal Status</a>
          <a href="#">🔔 Notifications</a>
          <a href="#">💡 Help & Support</a>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Hello, {user?.email}</h1>
          <button onClick={handleLogout}>Logout</button>
        </header>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h2>📄 My Cases</h2>
            <p>Track the progress of your ongoing scrutiny or appellate cases in real time.</p>
          </div>
          <div className="dashboard-card">
            <h2>📬 Notices</h2>
            <p>Review and respond to tax notices efficiently with AI support.</p>
          </div>
          <div className="dashboard-card">
            <h2>🧾 Appeal Status</h2>
            <p>View status updates for cases filed before CIT(A), ITAT, or High Court.</p>
          </div>
          <div className="dashboard-card">
            <h2>💡 Help & Support</h2>
            <p>Connect with experts or raise a query related to your tax issue.</p>
          </div>
          <div className="dashboard-card">
            <h2>🔔 Notifications</h2>
            <p>Stay updated with new notices, deadlines, and feature updates.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
