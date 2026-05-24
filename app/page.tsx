import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";

const features = [
  {
    title: "Reusable Components",
    description: "This page uses one Card component multiple times with different props.",
  },
  {
    title: "React State",
    description: "The form uses useState to manage user input.",
  },
  {
    title: "Persistent Theme",
    description: "The theme toggle uses useEffect and localStorage to save user preference.",
  },
];

export default function Home() {
  return (
    <main>
      <h2>React Component Architecture</h2>

      <section>
        {features.map((feature) => (
          <Card
            key={feature.title}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>

      <ContactForm />
    </main>
  );
}