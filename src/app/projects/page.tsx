import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { profile } from "@/lib/profile";

const projects = [
  {
    slug: "llm-battle",
    title: "LLM Battle Arena (Chess)",
    summary:
      "Pit LLMs against each other in a chess battle. Watch them think, strategize, and compete.",
    tags: ["Chess", "LLMs", "AI"],
    notesSlug: "llm-battle-engineering-notes",
    kind: "internal" as const,
  },
  {
    slug: "chess-battle",
    title: "chess_battle",
    summary:
      "LLM chess battle system with Stockfish endgame integration (repo).",
    tags: ["Python", "Chess", "LLMs"],
    kind: "external" as const,
    href: `${profile.links.github}/chess_battle`,
  },
  {
    slug: "brochure-generator",
    title: "brochure-generator",
    summary: "Brochure Generator (repo).",
    tags: ["Python"],
    kind: "external" as const,
    href: `${profile.links.github}/brochure-generator`,
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto flex-1 w-full max-w-3xl px-6 py-14">
        <h1 className="font-sans text-4xl font-extrabold tracking-tight text-foreground">
          Projects
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted">
          A small collection of things I’ve built (and a few in progress).
        </p>

        <div className="mt-10 grid gap-4">
          {projects.map((p) => (
            <div
              key={p.slug}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="font-sans text-base font-semibold text-foreground">
                    {p.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">{p.summary}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2 font-sans text-xs text-muted">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-2 py-1"
                      >
                        {t}
                      </span>
                    ))}
                    {"notesSlug" in p && p.notesSlug ? (
                      <Link
                        href={`/posts/${p.notesSlug}`}
                        className="ml-2 text-accent hover:underline"
                      >
                        Engineering notes
                      </Link>
                    ) : null}
                  </div>
                </div>
                {p.kind === "internal" ? (
                  <Link
                    href={`/projects/${p.slug}`}
                    className="shrink-0 rounded-full bg-foreground px-4 py-2 font-sans text-sm font-semibold text-background hover:opacity-95"
                  >
                    Open
                  </Link>
                ) : (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 rounded-full bg-foreground px-4 py-2 font-sans text-sm font-semibold text-background hover:opacity-95"
                  >
                    Repo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

