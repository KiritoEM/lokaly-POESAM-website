import { db } from "@/configs/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function FirebaseEmailServices() {
  const emailRef = collection(db, "emailRef");

  const addEmail = async (email: string): Promise<void> => {
    console.log("fonction appelé");
    const res = await addDoc(emailRef, {
      email,
    });

    console.log(res);

    if (res) {
      console.log("Email ajouté avec succés");
    } else {
      console.log("Email non ajouté");
    }
  };

  return { addEmail };
}
