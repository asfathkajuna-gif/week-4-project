"use client";

import { useEffect, useState } from "react";

export function DataPanel() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function loadData() {
    try {
      setError("");

      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/pikachu"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      setData(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function handleRefresh() {
    setRefreshing(true);
    await loadData();
  }

  if (loading) {
    return (
      <section className="space-y-3 border p-4 rounded">
        <h3>Loading State Screenshot</h3>
        <div className="h-6 w-40 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
        <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse"></div>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <p role="alert">Something went wrong: {error}</p>

        <button onClick={handleRefresh} disabled={refreshing}>
          {refreshing ? "Refreshing..." : "Try Again"}
        </button>
      </section>
    );
  }

  return (
    <section>
      <h3>Async Pokémon Data</h3>

      <p>Name: {data.name}</p>
      <p>Height: {data.height}</p>
      <p>Weight: {data.weight}</p>

      <button onClick={handleRefresh} disabled={refreshing}>
        {refreshing ? "Refreshing..." : "Refresh"}
      </button>
    </section>
  );
}