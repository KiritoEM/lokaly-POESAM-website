import axios from "axios";

type emailData = {
  userEmail: string;
  message: string;
  phoneNumber: string;
  userName: string;
};

export default function emailServices(emailData: emailData) {
  const sendEmail = async (e: any) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/sendEmail", emailData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert(res.data.message);
    } catch (err) {
      console.error(err);
    }
  };

  return { sendEmail };
}
