import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-5xl font-bold mb-6">
        Contact Details
      </h1>

      {/* <p className="text-lg text-center max-w-xl">
        Welcome to my interactive Next.js project.
      </p> */}
      <ContactForm />
      
    </main>
  );
}


