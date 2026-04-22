import type { Metadata } from "next";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { ClerkProvider, Show, UserButton } from "@clerk/nextjs";
import { shadcn } from "@clerk/ui/themes";
import { Sparkles } from "lucide-react";
import {
  SignInCtaButton,
  SignUpCtaButton,
} from "@/components/auth-buttons";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "FlashyCardy – Study smarter with flashcards",
  description:
    "Build flashcard decks, master tough topics with spaced repetition, and actually remember what you learn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider
          appearance={{
            theme: shadcn,
            variables: {
              colorPrimary: "oklch(0.65 0.22 310)",
            },
          }}
        >
          <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <Link
                href="/"
                className="group flex items-center gap-2 font-semibold tracking-tight"
              >
                <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 via-violet-500 to-indigo-500 text-white shadow-sm transition-transform group-hover:scale-105">
                  <Sparkles className="size-4" />
                </span>
                <span className="text-base">
                  Flashy<span className="text-violet-400">Cardy</span>
                </span>
              </Link>
              <nav className="flex items-center gap-2">
                <Show when="signed-out">
                  <SignInCtaButton variant="ghost" size="sm">
                    Sign in
                  </SignInCtaButton>
                  <SignUpCtaButton size="sm">Get started</SignUpCtaButton>
                </Show>
                <Show when="signed-in">
                  <UserButton />
                </Show>
              </nav>
            </div>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
