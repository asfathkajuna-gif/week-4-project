"use client";

export default function ThemeToggle() {
  function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  return (
    <button
      onClick={toggleTheme}
      className="border px-4 py-2 rounded"
    >
      Toggle Theme
    </button>
  );
}