"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.body.style.backgroundColor =
      theme === "dark" ? "#111" : "#fff";

    document.body.style.color =
      theme === "dark" ? "#fff" : "#000";
  }, [theme]);

  return (
    <button
      onClick={() =>
        setTheme(theme === "light" ? "dark" : "light")
      }
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}