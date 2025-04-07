// src/lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwIvvO49tpmpDauL8uPKlg1B-trVLSqL0",
  authDomain: "portfolio-dimas-d8664.firebaseapp.com",
  projectId: "portfolio-dimas-d8664",
  storageBucket: "portfolio-dimas-d8664.firebasestorage.app",
  messagingSenderId: "992491936883",
  appId: "1:992491936883:web:70cc1a57e9377fd2045e06",
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const db = getFirestore(app);