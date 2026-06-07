"use client";

import { createMessage } from "@/app/actions";

export default function ContactForm() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const nameInput = form.querySelector(
      'input[name="name"]'
    ) as HTMLInputElement;

    const emailInput = form.querySelector(
      'input[name="email"]'
    ) as HTMLInputElement;

    const bodyInput = form.querySelector(
      'textarea[name="body"]'
    ) as HTMLTextAreaElement;

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const bodyError = document.getElementById("bodyError");
    const successMessage =
      document.getElementById("successMessage");

    nameError!.textContent = "";
    emailError!.textContent = "";
    bodyError!.textContent = "";
    successMessage!.textContent = "";

    nameInput.style.border = "2px solid gray";
    emailInput.style.border = "2px solid gray";
    bodyInput.style.border = "2px solid gray";

    let isValid = true;

    if (nameInput.value.trim() === "") {
      nameError!.textContent = "Name is required";
      nameError!.style.color = "red";
      nameInput.style.border = "2px solid red";
      isValid = false;
    }

    if (emailInput.value.trim() === "") {
      emailError!.textContent = "Email is required";
      emailError!.style.color = "red";
      emailInput.style.border = "2px solid red";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
      emailError!.textContent = "Please enter a valid email";
      emailError!.style.color = "red";
      emailInput.style.border = "2px solid red";
      isValid = false;
    }

    if (bodyInput.value.trim() === "") {
      bodyError!.textContent = "Message is required";
      bodyError!.style.color = "red";
      bodyInput.style.border = "2px solid red";
      isValid = false;
    }

    if (!isValid) return;

    const formData = new FormData();
    formData.append("name", nameInput.value);
    formData.append("email", emailInput.value);
    formData.append("body", bodyInput.value);

    await createMessage(formData);

    successMessage!.textContent =
      "Message saved successfully!";
    successMessage!.style.color = "green";
    successMessage!.style.fontWeight = "bold";

    form.reset();
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit} noValidate>
        <label>Name</label>
        <br />

        <input
          type="text"
          name="name"
          style={{
            width: "100%",
            padding: "10px",
            border: "2px solid gray",
            marginTop: "5px",
          }}
        />

        <p id="nameError"></p>

        <label>Email</label>
        <br />

        <input
          type="email"
          name="email"
          style={{
            width: "100%",
            padding: "10px",
            border: "2px solid gray",
            marginTop: "5px",
          }}
        />

        <p id="emailError"></p>

        <label>Message</label>
        <br />

        <textarea
          name="body"
          rows={5}
          style={{
            width: "100%",
            padding: "10px",
            border: "2px solid gray",
            marginTop: "5px",
          }}
        />

        <p id="bodyError"></p>

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

        <p
          id="successMessage"
          style={{
            marginTop: "20px",
          }}
        ></p>
      </form>
    </div>
  );
}