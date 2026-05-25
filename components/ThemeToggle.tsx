"use client";

export default function ContactForm() {
  const handleClick = () => {
    const form = document.getElementById("contact-form") as HTMLFormElement;
    const name = document.getElementById("name") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const message = document.getElementById("message") as HTMLTextAreaElement;
    const result = document.getElementById("form-result") as HTMLParagraphElement;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!name.value || !email.value || !message.value) {
        result.textContent = "Please fill out all fields.";
        result.setAttribute("role", "alert");
        return;
      }

      if (!email.validity.valid) {
        result.textContent = "Please enter a valid email address.";
        result.setAttribute("role", "alert");
        return;
      }

      result.textContent = "Thank you! Your message was submitted.";
      form.reset();
    });
  };

  return (
    <form id="contact-form" onMouseEnter={handleClick} className="space-y-4 max-w-md">
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" className="block border p-2 w-full" />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" className="block border p-2 w-full" />
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" className="block border p-2 w-full" />
      </div>

      <button type="submit" className="border px-4 py-2 rounded">
        Send Message
      </button>

      <p id="form-result" aria-live="polite"></p>
    </form>
  );
}