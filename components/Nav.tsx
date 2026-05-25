import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <nav className="flex items-center justify-center gap-6 py-6">
      {/* <div>Helloe</div> */}
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}