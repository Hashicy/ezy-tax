"use client";
import React, { useEffect, useState } from "react";
import "./page.css";
import { auth, db } from "../../../firebase/firebaseConfig";
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [queries, setQueries] = useState([]);
  const [filteredQueries, setFilteredQueries] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newQuery, setNewQuery] = useState({
    name: "",
    email: "",
    question: "",
  });

  const router = useRouter();

  const fetchQueries = async () => {
    try {
      const snapshot = await getDocs(collection(db, "queries"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setQueries(data);
      setFilteredQueries(data);
    } catch (err) {
      console.error("Error fetching queries:", err.message);
    }
  };

  const fetchWorkers = async () => {
    try {
      const snapshot = await getDocs(collection(db, "workers"));
      setWorkers(snapshot.docs.map((doc) => doc.data().name));
    } catch (err) {
      console.error("Error fetching workers:", err.message);
    }
  };

  useEffect(() => {
    fetchQueries();
    fetchWorkers();
  }, []);

  const handleAssign = async (queryId, workerName) => {
    await updateDoc(doc(db, "queries", queryId), { assignedTo: workerName });
    fetchQueries();
  };

  const handleDelete = async (queryId) => {
    await deleteDoc(doc(db, "queries", queryId));
    fetchQueries();
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = queries.filter(
      (q) =>
        q.name.toLowerCase().includes(term) ||
        q.question.toLowerCase().includes(term) ||
        q.email.toLowerCase().includes(term)
    );
    setFilteredQueries(filtered);
  };

  const handleAddQuery = async () => {
    if (!newQuery.name || !newQuery.email || !newQuery.question) return;
    await addDoc(collection(db, "queries"), newQuery);
    setNewQuery({ name: "", email: "", question: "" });
    fetchQueries();
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/LoginPage");
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>EzyTax Admin Panel</h1>
        <input
          type="text"
          placeholder="🔍 Search queries..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-box"
        />
        <button className="logout-btn" onClick={handleLogout}>🚪 Logout</button>
      </div>

      <main>
        <h2>📋 Client Queries</h2>
        <table className="query-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Question</th>
              <th>Email</th>
              <th>Assigned To</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredQueries.length > 0 ? (
              filteredQueries.map((query) => (
                <tr key={query.id}>
                  <td>{query.name}</td>
                  <td>{query.question}</td>
                  <td>{query.email}</td>
                  <td>
                    <select
                      value={query.assignedTo || ""}
                      onChange={(e) => handleAssign(query.id, e.target.value)}
                    >
                      <option value="">-- Assign --</option>
                      {workers.map((w) => (
                        <option key={w} value={w}>
                          {w}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(query.id)}>✅ Resolve</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No queries found.</td>
              </tr>
            )}
          </tbody>
        </table>

        <h2 style={{ marginTop: "2rem" }}>➕ Add New Query</h2>
        <div className="add-query-form">
          <input
            type="text"
            placeholder="Name"
            value={newQuery.name}
            onChange={(e) =>
              setNewQuery((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <input
            type="email"
            placeholder="Email"
            value={newQuery.email}
            onChange={(e) =>
              setNewQuery((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <input
            type="text"
            placeholder="Question"
            value={newQuery.question}
            onChange={(e) =>
              setNewQuery((prev) => ({ ...prev, question: e.target.value }))
            }
          />
          <button onClick={handleAddQuery}>Add Query</button>
        </div>
      </main>
    </div>
  );
}
