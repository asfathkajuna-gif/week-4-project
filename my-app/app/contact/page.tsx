// "use client";

// export default function ContactPage() {
//   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     const name = document.getElementById("name") as HTMLInputElement;
//     const email = document.getElementById("email") as HTMLInputElement;
//     const message = document.getElementById("message") as HTMLTextAreaElement;
//     const result = document.getElementById("form-result") as HTMLParagraphElement;

//     if (!name.value || !email.value || !message.value) {
//       result.textContent = "Please fill in all fields.";
//       result.setAttribute("role", "alert");
//       return;
//     }

//     if (!email.validity.valid) {
//       result.textContent = "Please enter a valid email address.";
//       result.setAttribute("role", "alert");
//       return;
//     }

//     result.textContent = "Message sent successfully!";
//     result.setAttribute("role", "status");

//     name.value = "";
//     email.value = "";
//     message.value = "";
//   }

//   return (
//     <main className="flex flex-col items-center min-h-screen p-8">
//       <h1 className="text-4xl font-bold mb-4">Contact</h1>

//       <p className="mb-8 text-center">Send me a message below:</p>

//       <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg">
//         <div>
//           <label htmlFor="name">Name</label>
//           <input id="name" type="text" className="block border p-2 w-full text-black" />
//         </div>

//         <div>
//           <label htmlFor="email">Email</label>
//           <input id="email" type="email" className="block border p-2 w-full text-black" />
//         </div>

//         <div>
//           <label htmlFor="message">Message</label>
//           <textarea id="message" className="block border p-2 w-full text-black" />
//         </div>

//         <button type="submit" className="border px-4 py-2 rounded">
//           Send Message
//         </button>

//         <p id="form-result" aria-live="polite"></p>
//       </form>
//     </main>
//   );
// }
