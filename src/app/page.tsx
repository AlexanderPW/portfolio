import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { profile } from "@/lib/profile";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto flex-1 w-full max-w-3xl px-6 py-14">
        <div className="mb-10">
          <div className="font-sans text-xs font-semibold uppercase tracking-widest text-muted">
            Ahoy there.
          </div>
          <h1 className="mt-3 font-sans text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            I’m Alex.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            I’m a Senior Lead Engineer with 10+ years of experience designing and
            shipping enterprise systems. I build reliable, cloud-first software and
            large-scale applications. Lately I’ve been diving deep into AI/ML,
            exploring how emerging technology can create real business value. I’m
            also a sailor. If I’m not coding, I’m probably thinking about the ocean.
          </p>
          <p className="mt-4 text-base leading-7 text-muted">
            Recent work: leading engineering on a large-scale enterprise application
            with material revenue impact, along with DevOps, CI/CD pipelines, APIs,
            and cloud architecture.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 font-sans text-sm">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-full bg-foreground px-5 py-2 text-background hover:opacity-95"
            >
              See projects
            </Link>
            <Link
              href="/posts"
              className="inline-flex items-center rounded-full border border-border bg-surface px-5 py-2 text-foreground hover:bg-background"
            >
              Read posts
            </Link>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-border bg-surface px-5 py-2 text-foreground hover:bg-background"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <section className="mt-16">
          <div className="font-sans text-sm font-bold tracking-wide text-foreground">
            Featured
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="group rounded-2xl border border-border bg-surface p-5 shadow-sm transition-colors hover:border-accent/60">
              <div className="font-sans text-base font-semibold text-foreground">
                LLM Battle Arena (Chess)
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">
                Pit LLMs against each other in a chess arena. Watch them reason,
                strategize, and compete.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 font-sans text-xs text-muted">
                <span className="rounded-full border border-border px-2 py-1">
                  Chess
                </span>
                <span className="rounded-full border border-border px-2 py-1">
                  LLMs
                </span>
                <span className="rounded-full border border-border px-2 py-1">
                  AI
                </span>
              </div>
              <div className="mt-4">
                <Link
                  href="/projects/llm-battle"
                  className="font-sans text-sm font-semibold text-accent hover:underline"
                >
                  See it live →
                </Link>
              </div>
            </div>

            <div className="group rounded-2xl border border-border bg-surface p-5 shadow-sm transition-colors hover:border-accent/60">
              <div className="font-sans text-base font-semibold text-foreground">
                Engineering Notes
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">
                Notes on building reliable systems, AI/ML, DevOps, and automation.
              </p>
              <div className="mt-4">
                <Link
                  href="/posts"
                  className="font-sans text-sm font-semibold text-accent hover:underline"
                >
                  Browse posts →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <div className="font-sans text-sm font-bold text-foreground">
            A few things I care about
          </div>
          <div className="mt-4 rounded-2xl border border-border bg-surface p-6">
            <ul className="list-disc space-y-2 pl-5 text-muted">
              <li>Finding real business value in emerging technology — AI, cloud, and automation.</li>
              <li>Turning complex systems into things people can rely on.</li>
              <li>Transforming legacy systems into solutions that scale.</li>
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
