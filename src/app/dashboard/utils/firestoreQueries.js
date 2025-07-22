import { db } from "../../../../firebase/firebaseConfig";
import { collection, addDoc, getDocs, query, where, serverTimestamp } from "firebase/firestore";

export const addTaxQuery = async (uid, name, email, queryText) => {
  await addDoc(collection(db, "tax_queries"), {
    uid,
    name,
    email,
    query: queryText,
    status: "pending",
    timestamp: serverTimestamp(),
  });
};

export const addBlogDraft = async (uid, name, email, blogContent) => {
  await addDoc(collection(db, "blog_submissions"), {
    uid,
    name,
    email,
    blogContent,
    timestamp: serverTimestamp(),
  });
};

export const addConsultation = async (uid, name, email, preferredTime, description) => {
  await addDoc(collection(db, "consultations"), {
    uid,
    name,
    email,
    preferredTime,
    description,
    status: "pending",
    timestamp: serverTimestamp(),
  });
};

export const fetchUserItems = async (collectionName, uid) => {
  const q = query(collection(db, collectionName), where("uid", "==", uid));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
