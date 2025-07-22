"use client";
import "./page.css";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";
import { useRouter } from "next/navigation";
import {
  addTaxQuery,
  addBlogDraft,
  addConsultation,
  fetchUserItems,
} from "./utils/firestoreQueries";

export default function UserDashboard() {
  const [user, setUser] = useState(null);
  const [queryText, setQueryText] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [consultationDesc, setConsultationDesc] = useState("");

  const [queries, setQueries] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [consultations, setConsultations] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (u) {
        setUser(u);
        loadAll(u.uid);
      } else {
        router.push("/LoginPage");
      }
    });
    return () => unsub();
  }, []);

  const loadAll = async (uid) => {
    const [q, b, c] = await Promise.all([
      fetchUserItems("tax_queries", uid),
      fetchUserItems("blog_submissions", uid),
      fetchUserItems("consultations", uid),
    ]);
    setQueries(q);
    setBlogs(b);
    setConsultations(c);
  };

  const handleSubmitQuery = async () => {
    if (!queryText.trim()) return;
    await addTaxQuery(user.uid, user.displayName || "User", user.email, queryText.trim());
    setQueryText("");
    loadAll(user.uid);
  };

  const handleSubmitBlog = async () => {
    if (!blogContent.trim()) return;
    await addBlogDraft(user.uid, user.displayName || "User", user.email, blogContent.trim());
    setBlogContent("");
    loadAll(user.uid);
  };

  const handleSubmitConsultation = async () => {
    if (!preferredTime || !consultationDesc.trim()) return;
    await addConsultation(
      user.uid,
      user.displayName || "User",
      user.email,
      preferredTime,
      consultationDesc.trim()
    );
    setPreferredTime("");
    setConsultationDesc("");
    loadAll(user.uid);
  };

  return (
    <div className="dashboard">
      <h1>Welcome, {user?.email}</h1>

      <section>
        <h2>✍️ Add Tax Query</h2>
        <input
          type="text"
          value={queryText}
          onChange={(e) => setQueryText(e.target.value)}
          placeholder="Your tax query..."
        />
        <button onClick={handleSubmitQuery}>Submit Query</button>
      </section>

      <section>
        <h2>📰 Submit Blog Idea or Draft</h2>
        <textarea
          rows={4}
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
          placeholder="Your blog idea or draft..."
        />
        <button onClick={handleSubmitBlog}>Submit Blog</button>
      </section>

      <section>
        <h2>📞 Request Consultation</h2>
        <input
          type="datetime-local"
          value={preferredTime}
          onChange={(e) => setPreferredTime(e.target.value)}
        />
        <textarea
          rows={2}
          value={consultationDesc}
          onChange={(e) => setConsultationDesc(e.target.value)}
          placeholder="What do you want help with?"
        />
        <button onClick={handleSubmitConsultation}>Request</button>
      </section>

      <section>
        <h2>📜 My Queries</h2>
        <ul>
          {queries.map((q) => (
            <li key={q.id}>
              {q.query} — <em>{q.status}</em>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>📰 My Blog Submissions</h2>
        <ul>
          {blogs.map((b) => (
            <li key={b.id}>{b.blogContent}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>📅 My Consultation Requests</h2>
        <ul>
          {consultations.map((c) => (
            <li key={c.id}>
              {c.preferredTime} — {c.description} — <em>{c.status}</em>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
