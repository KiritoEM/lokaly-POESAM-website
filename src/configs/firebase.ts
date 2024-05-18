import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase-config";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
