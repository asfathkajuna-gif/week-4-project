"use client";

import Link from "next/link";
import ThemeToggle from "../../components/ThemeToggle";

export default function ContactPage() {
  function handleSubmit(e: any) {
    e.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLTextAreaElement).value;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!email.includes("@")) {
      alert("Enter a valid email.");
      return;
    }

    alert("Message sent successfully!");
  }

  return (
    <main style={{ padding: "20px" }}>
      <ThemeToggle />

      <nav>
        <Link href="/">Back to Home</Link>
      </nav>

      <h1>Contact</h1>

      <p>Send me a message below:</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input type="text" id="name" />
        </div>

        <br />

        <div>
          <label>Email:</label><br />
          <input type="email" id="email" />
        </div>

        <br />

        <div>
          <label>Message:</label><br />
          <textarea id="message" />
        </div>

        <br />

        <button type="submit">Send</button>
      </form>
    </main>
  );
}