import AuthButton from "./AuthButton";
import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header>
      <h1>Modern Web Development Portfolio</h1>

      <Nav />

      <ThemeToggle />

      <AuthButton />
    </header>
  );
}