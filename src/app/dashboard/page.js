"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/LoginPage"); // redirect if not logged in
      }
    });
    return () => unsub();
  }, [router]);

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <p>Logged in as: {user?.email}</p>
    </div>
  );
}
