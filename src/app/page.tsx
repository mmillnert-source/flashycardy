import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import {
  SignInCtaButton,
  SignUpCtaButton,
} from "@/components/auth-buttons";

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
        FlashyCardy
      </h1>
      <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
        Your personal flashcard platform
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
        <SignUpCtaButton size="lg">Sign up</SignUpCtaButton>
        <SignInCtaButton variant="outline" size="lg">
          Sign in
        </SignInCtaButton>
      </div>
    </main>
  );
}
