import { userServiceContext } from "@/hooks/serviceContext";
import axios from "axios";
import { useState } from "react";

export default function emailServices() {
  const { emailState, loadingState } = userServiceContext();

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
      if (res.status === 200) {
        loadingState(false);
        emailState(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const verifyEmail = async (email: string): Promise<any> => {
    try {
      const res = await axios.post(
        "/api/emailVerification",
        { userEmail: email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        loadingState(false);
        emailState(true);
        return true;
      }
    } catch (err) {
      console.error(err);
    }
  };

  return { sendEmail, verifyEmail };
}
