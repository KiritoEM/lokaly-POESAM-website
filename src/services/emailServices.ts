import axios from "axios";

export default function emailServices() {
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
      const res = await axios.post("/api/sendEmail", emailData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert(res.data.message);
      console.log(res.data.message);
    } catch (err) {
      console.error(err);
    }
  };

  return { sendEmail };
}
