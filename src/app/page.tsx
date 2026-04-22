import Link from "next/link";
import { Show } from "@clerk/nextjs";
import {
  ArrowRight,
  Brain,
  Layers,
  Repeat,
  Shuffle,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SignInCtaButton,
  SignUpCtaButton,
} from "@/components/auth-buttons";

const features = [
  {
    icon: Layers,
    title: "Beautiful decks",
    description:
      "Organize everything you're learning into gorgeous, tidy decks you'll actually want to open.",
  },
  {
    icon: Repeat,
    title: "Spaced repetition",
    description:
      "Cards come back exactly when you're about to forget them — so the knowledge sticks for good.",
  },
  {
    icon: Shuffle,
    title: "Smart shuffling",
    description:
      "Mix things up automatically so you're learning the material, not memorizing the order.",
  },
  {
    icon: Brain,
    title: "Active recall",
    description:
      "Built around the study techniques science actually agrees on. No highlighters required.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -top-40 left-1/2 size-[680px] -translate-x-1/2 rounded-full bg-gradient-to-br from-fuchsia-500/25 via-violet-500/20 to-indigo-500/10 blur-3xl" />
        </div>

        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-20 pt-20 text-center sm:pt-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <Sparkles className="size-3.5 text-violet-400" />
            Learn faster. Remember longer.
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Study smarter with{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              flashy flashcards
            </span>
            .
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            FlashyCardy turns whatever you&apos;re trying to learn — a language,
            a certification, your anatomy exam — into beautiful decks that
            actually help you remember.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Show when="signed-out">
              <SignUpCtaButton size="lg" className="h-11 px-5 text-base">
                Get started free
                <ArrowRight />
              </SignUpCtaButton>
              <SignInCtaButton
                variant="outline"
                size="lg"
                className="h-11 px-5 text-base"
              >
                I already have an account
              </SignInCtaButton>
            </Show>
            <Show when="signed-in">
              <Button
                size="lg"
                className="h-11 px-5 text-base"
                nativeButton={false}
                render={<Link href="/dashboard" />}
              >
                Go to my decks
                <ArrowRight />
              </Button>
            </Show>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Free to try. No credit card required.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything you need to actually learn
            </h2>
            <p className="mt-4 text-muted-foreground">
              Thoughtful features backed by how your brain really works —
              wrapped in an interface that stays out of your way.
            </p>
          </div>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }) => (
              <li
                key={title}
                className="group relative flex flex-col rounded-2xl border border-border/60 bg-background/60 p-6 transition-colors hover:border-violet-400/40"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/15 via-violet-500/15 to-indigo-500/15 text-violet-300 ring-1 ring-inset ring-violet-400/20">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60">
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-fuchsia-500/10 via-violet-500/10 to-indigo-500/10 p-10 text-center sm:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-violet-500/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-20 size-64 rounded-full bg-fuchsia-500/20 blur-3xl"
            />

            <Zap className="mx-auto size-6 text-violet-300" />
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to remember everything?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Create your first deck in under a minute. Your future self will
              thank you at their next exam.
            </p>

            <div className="mt-8 flex justify-center">
              <Show when="signed-out">
                <SignUpCtaButton size="lg" className="h-11 px-5 text-base">
                  Create my first deck
                  <ArrowRight />
                </SignUpCtaButton>
              </Show>
              <Show when="signed-in">
                <Button
                  size="lg"
                  className="h-11 px-5 text-base"
                  nativeButton={false}
                  render={<Link href="/dashboard" />}
                >
                  Open my dashboard
                  <ArrowRight />
                </Button>
              </Show>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} FlashyCardy</span>
          <span className="inline-flex items-center gap-1.5">
            Made with <Sparkles className="size-3 text-violet-400" /> for
            lifelong learners
          </span>
        </div>
      </footer>
    </main>
  );
}
