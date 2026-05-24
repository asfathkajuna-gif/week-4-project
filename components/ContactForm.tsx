"use client";

import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Form submitted successfully!");

    setEmail("");
    setMessage("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Form</h2>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <textarea
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <br />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}