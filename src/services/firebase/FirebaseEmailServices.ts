import { db } from "@/configs/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

export default function FirebaseEmailServices() {
  const emailRef = collection(db, "emailRef");

  const addEmail = async (email: string): Promise<void> => {
    await addDoc(emailRef, {
      email,
    });
  };

  return { addEmail };
}
