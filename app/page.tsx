"use client";

import { useState } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
};

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="border rounded-lg p-4 m-2">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main
      className={`min-h-screen p-8 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="border px-3 py-2 rounded"
      >
        Toggle Theme
      </button>

      <h1 className="text-3xl font-bold mt-6">Home</h1>

      <p className="mt-2">Welcome to my site!</p>

      <h2 className="text-2xl font-bold mt-8">My Skills</h2>

      <FeatureCard
        title="HTML"
        description="I use HTML to structure webpages."
      />

      <FeatureCard
        title="CSS"
        description="I use CSS to style and design pages."
      />

      <FeatureCard
        title="React"
        description="I use React to build reusable components."
      />
    </main>
  );
}