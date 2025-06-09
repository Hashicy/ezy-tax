import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-oVLm_rT0FpWS3pbOWGfJ9OsPCLjTWU0",
  authDomain: "ezy-tax-8894c.firebaseapp.com",
  projectId: "ezy-tax-8894c",
  storageBucket: "ezy-tax-8894c.firebasestorage.app",
  messagingSenderId: "478023635340",
  appId: "1:478023635340:web:3a6f879a68de93513ac6a9",
  measurementId: "G-RLZ6MS94GR"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
