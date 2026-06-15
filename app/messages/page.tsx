import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function MessagesPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/api/auth/signin");
  }

  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Saved Messages</h1>

      <p className="mb-4">
        Welcome, {session.user.name}
      </p>

      <ul className="space-y-4">
        {messages.map((message) => (
          <li key={message.id} className="border p-4 rounded-lg">
            <p><strong>Name:</strong> {message.name}</p>
            <p><strong>Email:</strong> {message.email}</p>
            <p><strong>Message:</strong> {message.body}</p>
            <p className="text-sm mt-2">
              {message.createdAt.toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}