
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

// "use client";

// import { useState } from "react";

// export default function ContactForm() {
//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [successMessage, setSuccessMessage] = useState("");

//   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     const form = e.currentTarget;

//     const formData = new FormData(form);

//     const name = formData.get("name")?.toString().trim() || "";
//     const email = formData.get("email")?.toString().trim() || "";
//     const message = formData.get("message")?.toString().trim() || "";

//     let newErrors = {
//       name: "",
//       email: "",
//       message: "",
//     };

//     let isValid = true;

//     // Name Validation
//     if (!name) {
//       newErrors.name = "Name is required.";
//       isValid = false;
//     }

//     // Email Validation
//     if (!email) {
//       newErrors.email = "Email is required.";
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = "Please enter a valid email address.";
//       isValid = false;
//     }

//     // Message Validation
//     if (!message) {
//       newErrors.message = "Message is required.";
//       isValid = false;
//     } else if (message.length < 10) {
//       newErrors.message = "Message must be at least 10 characters.";
//       isValid = false;
//     }

//     setErrors(newErrors);

//     // Success
//     if (isValid) {
//       setSuccessMessage("✅ Message sent successfully!");
//       form.reset();

//       // Clear errors
//       setErrors({
//         name: "",
//         email: "",
//         message: "",
//       });
//     } else {
//       setSuccessMessage("");
//     }
//   }

//   return (
//     <section className="max-w-2xl mx-auto p-6">
//       <h2 className="text-4xl font-bold mb-8">Contact Details</h2>

//       <form onSubmit={handleSubmit} noValidate>
//         {/* Name */}
//         <div className="mb-6">
//           <label className="block text-xl mb-2">Name</label>

//           <input
//             type="text"
//             name="name"
//             className={`w-full border p-3 rounded ${
//               errors.name ? "border-red-500" : "border-gray-300"
//             }`}
//           />

//           {errors.name && (
//             <p className="text-red-600 mt-2">{errors.name}</p>
//           )}
//         </div>

//         {/* Email */}
//         <div className="mb-6">
//           <label className="block text-xl mb-2">Email</label>

//           <input
//             type="email"
//             name="email"
//             className={`w-full border p-3 rounded ${
//               errors.email ? "border-red-500" : "border-gray-300"
//             }`}
//           />

//           {errors.email && (
//             <p className="text-red-600 mt-2">{errors.email}</p>
//           )}
//         </div>

//         {/* Message */}
//         <div className="mb-6">
//           <label className="block text-xl mb-2">Message</label>

//           <textarea
//             name="message"
//             rows={5}
//             className={`w-full border p-3 rounded ${
//               errors.message ? "border-red-500" : "border-gray-300"
//             }`}
//           />

//           {errors.message && (
//             <p className="text-red-600 mt-2">{errors.message}</p>
//           )}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
//         >
//           Send Message
//         </button>

//         {/* Success Message */}
//         {successMessage && (
//           <p className="text-green-600 text-lg mt-6 font-semibold">
//             {successMessage}
//           </p>
//         )}
//       </form>
//     </section>
//   );
// }

// 2 second works ***

// "use client";

// import { useState } from "react";

// export default function ContactForm() {
//   const [status, setStatus] = useState("");

//   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     const name = formData.get("name")?.toString().trim();
//     const email = formData.get("email")?.toString().trim();
//     const message = formData.get("message")?.toString().trim();

//     if (!name || !email || !message) {
//       setStatus("Please fill out all fields.");
//       return;
//     }

//     setStatus("Message sent successfully!");
//     form.reset();
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Name</label>
//       <input name="name" type="text" />

//       <label>Email</label>
//       <input name="email" type="email" />

//       <label>Message</label>
//       <textarea name="message" />

//       <button type="submit">Send Message</button>

//       {status && (
//         <p role="alert" aria-live="polite">
//           {status}
//         </p>
//       )}
//     </form>
//   );
// }

// This 1 works ******

// "use client";

// export default function ContactForm() {
//   const handleClick = () => {
//     const form = document.getElementById("contact-form") as HTMLFormElement;
//     const name = document.getElementById("name") as HTMLInputElement;
//     const email = document.getElementById("email") as HTMLInputElement;
//     const message = document.getElementById("message") as HTMLTextAreaElement;
//     const result = document.getElementById("form-result") as HTMLParagraphElement;

//     form.addEventListener("submit", (event) => {
//       event.preventDefault();

//       if (!name.value || !email.value || !message.value) {
//         result.textContent = "Please fill out all fields.";
//         result.setAttribute("role", "alert");
//         return;
//       }

//       if (!email.validity.valid) {
//         result.textContent = "Please enter a valid email address.";
//         result.setAttribute("role", "alert");
//         return;
//       }

//       result.textContent = "Thank you! Your message was submitted.";
//       form.reset();
//     });
//   };

//   return (
//     <form id="contact-form" onMouseEnter={handleClick} className="space-y-4 max-w-md">
//       <div>
//         <label htmlFor="name">Name</label>
//         <input id="name" type="text" className="block border p-2 w-full" />
//       </div>

//       <div>
//         <label htmlFor="email">Email</label>
//         <input id="email" type="email" className="block border p-2 w-full" />
//       </div>

//       <div>
//         <label htmlFor="message">Message</label>
//         <textarea id="message" className="block border p-2 w-full" />
//       </div>

//       <button type="submit" className="border px-4 py-2 rounded">
//         Send Message
//       </button>

//       <p id="form-result" aria-live="polite"></p>
//     </form>
//   );
// }
