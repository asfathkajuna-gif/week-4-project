import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import Card from "../components/Card";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <ThemeToggle />

      <h1>Home</h1>
      <p>Welcome to my site!</p>

      <section>
        <Card title="Web Design" description="We build websites." />
        <Card title="App Development" description="We create apps." />
        <Card title="SEO Services" description="We improve rankings." />
      </section>

      <Link href="/contact">Go to Contact Page</Link>
    </main>
  );
}