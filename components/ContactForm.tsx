
"use client";

export default function ContactForm() {

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Get form values
    const form = e.currentTarget;

    const nameInput = form.querySelector(
      'input[name="name"]'
    ) as HTMLInputElement;

    const emailInput = form.querySelector(
      'input[name="email"]'
    ) as HTMLInputElement;

    const messageInput = form.querySelector(
      'textarea[name="message"]'
    ) as HTMLTextAreaElement;

    // Error message elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    // Reset previous errors
    nameError!.textContent = "";
    emailError!.textContent = "";
    messageError!.textContent = "";
    successMessage!.textContent = "";

    // Reset styles
    nameInput.style.border = "2px solid gray";
    emailInput.style.border = "2px solid gray";
    messageInput.style.border = "2px solid gray";

    nameInput.style.backgroundColor = "white";
    emailInput.style.backgroundColor = "white";
    messageInput.style.backgroundColor = "white";

    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === "") {
      nameError!.textContent = "Name is required";
      nameError!.style.color = "red";

      nameInput.style.border = "2px solid red";
      nameInput.style.backgroundColor = "#ffe5e5";

      isValid = false;
    }

    // Email validation
    if (emailInput.value.trim() === "") {
      emailError!.textContent = "Email is required";
      emailError!.style.color = "red";

      emailInput.style.border = "2px solid red";
      emailInput.style.backgroundColor = "#ffe5e5";

      isValid = false;

    } else if (
      !/\S+@\S+\.\S+/.test(emailInput.value)
    ) {
      emailError!.textContent =
        "Please enter a valid email";

      emailError!.style.color = "red";

      emailInput.style.border = "2px solid red";
      emailInput.style.backgroundColor = "#ffe5e5";

      isValid = false;
    }

    // Message validation
    if (messageInput.value.trim() === "") {
      messageError!.textContent =
        "Message is required";

      messageError!.style.color = "red";

      messageInput.style.border = "2px solid red";
      messageInput.style.backgroundColor = "#ffe5e5";

      isValid = false;
    }

    // Success message
    if (isValid) {
      successMessage!.textContent =
        "Message sent successfully!";

      successMessage!.style.color = "green";
      successMessage!.style.fontWeight = "bold";

      form.reset();
    }
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

        {/* Name */}
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

        {/* Email */}
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

        {/* Message */}
        <label>Message</label>
        <br />

        <textarea
          name="message"
          rows={5}
          style={{
            width: "100%",
            padding: "10px",
            border: "2px solid gray",
            marginTop: "5px",
          }}
        />

        <p id="messageError"></p>

        {/* Submit Button */}
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
