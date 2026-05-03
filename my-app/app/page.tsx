import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <ThemeToggle />

      <h1>Home</h1>
      <p>Welcome to my site!</p>

      <nav>
        <Link href="/contact">Go to Contact Page</Link>
      </nav>
    </main>
  );
}