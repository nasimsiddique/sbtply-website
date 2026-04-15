import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // ✅ ADD THIS

const firebaseConfig = {
  apiKey: "AIzaSyAaYrD2NlgY185CHMmxe62UQ0AS3US0BnY",
  authDomain: "sbtply-admin.firebaseapp.com",
  projectId: "sbtply-admin",
  storageBucket: "sbtply-admin.firebasestorage.app",
  messagingSenderId: "670178226895",
  appId: "1:670178226895:web:4e894911b77d64d285bdba"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

// ✅ ADD THIS
export const storage = getStorage(app);