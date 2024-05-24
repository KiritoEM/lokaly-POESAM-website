import axios from "axios";
import { useState } from "react";

export default function emailServices() {
  const [loading, setLoading] = useState(false);

  const startLoading = ()=> {
    setLoading(true);
  }

  const sendEmail = async (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    const userName = form["name"].value;
    const userEmail = form["email"].value;
    const userMessage = form["message"].value;
    const phoneNumber = form["phoneNumber"].value;

    const emailData = {
      userName: userName,
      userEmail: userEmail,
      message: userMessage,
      phoneNumber: phoneNumber,
    };

    console.log(emailData);

    try {
      const res = await axios.post("/api/emailContact", emailData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.data.message);
    } catch (err) {
      console.error(err);
    }
  };

  const verifyEmail = async (email: string) => {
    try {
      const res = await axios.post(
        "/api/emailVerification",
        { email: email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data.message);
    } catch (err) {
      console.error(err);
    }
    finally{

    }
  };

  return { sendEmail, verifyEmail };
}
