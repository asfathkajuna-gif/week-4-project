import { auth, signIn, signOut } from "@/auth";

export default async function AuthButton() {
  const session = await auth();

  if (session?.user) {
    return (
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        <span>Hi, {session.user.name}</span>
        <button type="submit">Sign out</button>
      </form>
    );
  }

  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/messages" });
      }}
    >
      <button type="submit">Sign in with GitHub</button>
    </form>
  );
}