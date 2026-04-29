import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import { db } from "@/db";
import { decksTable } from "@/db/schema";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/");

  const decks = await db
    .select()
    .from(decksTable)
    .where(eq(decksTable.userId, userId))
    .orderBy(desc(decksTable.updatedAt));

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Your decks
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {decks.length === 0
              ? "You haven't created any decks yet."
              : `You have ${decks.length} deck${decks.length === 1 ? "" : "s"}.`}
          </p>
        </div>
      </div>

      {decks.length > 0 && (
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {decks.map((deck) => (
            <li
              key={deck.id}
              className="rounded-2xl border border-border/60 bg-card/40 p-6 transition-colors hover:border-violet-400/40"
            >
              <h2 className="font-semibold">{deck.title}</h2>
              {deck.description && (
                <p className="mt-2 text-sm text-muted-foreground">
                  {deck.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
