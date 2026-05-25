
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    let isValid = true;

    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    // Name validation
    if (!name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    // Message validation
    if (!message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setSuccessMessage("Message sent successfully!");
      form.reset();
    } else {
      setSuccessMessage("");
    }
  }

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit} noValidate>
        
        {/* Name */}
        <label>Name</label>
        <br />

        <input
          type="text"
          name="name"
          style={{
            width: "100%",
            padding: "10px",
            border: errors.name ? "2px solid red" : "2px solid gray",
            backgroundColor: errors.name ? "#ffe5e5" : "white",
            marginTop: "5px",
          }}
        />

        {errors.name && (
          <p style={{ color: "red" }}>
            {errors.name}
          </p>
        )}

        {/* Email */}
        <label>Email</label>
        <br />

        <input
          type="email"
          name="email"
          style={{
            width: "100%",
            padding: "10px",
            border: errors.email ? "2px solid red" : "2px solid gray",
            backgroundColor: errors.email ? "#ffe5e5" : "white",
            marginTop: "5px",
          }}
        />

        {errors.email && (
          <p style={{ color: "red" }}>
            {errors.email}
          </p>
        )}

        {/* Message */}
        <label>Message</label>
        <br />

        <textarea
          name="message"
          rows={5}
          style={{
            width: "100%",
            padding: "10px",
            border: errors.message
              ? "2px solid red"
              : "2px solid gray",
            backgroundColor: errors.message
              ? "#ffe5e5"
              : "white",
            marginTop: "5px",
          }}
        />

        {errors.message && (
          <p style={{ color: "red" }}>
            {errors.message}
          </p>
        )}

        <button
          type="submit"
          style={{
            marginTop: "20px",
            padding: "12px 20px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>

        {/* Success Message */}
        {successMessage && (
          <p
            style={{
              color: "green",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            {successMessage}
          </p>
        )}
      </form>
    </div>
  );
}

