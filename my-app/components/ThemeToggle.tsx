"use client";

export default function ThemeToggle() {
  function toggleTheme() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }

  return <button onClick={toggleTheme}>Toggle Theme</button>;
}