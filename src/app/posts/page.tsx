import Link from "next/link";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getAllPosts } from "@/lib/posts";

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto flex-1 w-full max-w-3xl px-6 py-14">
        <h1 className="font-sans text-4xl font-extrabold tracking-tight text-foreground">
          Posts
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted">
          Notes on engineering, mitigation, and shipping.
        </p>

        <div className="mt-10 grid gap-4">
          {posts.map((p) => (
            <div
              key={p.slug}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <div className="font-sans text-base font-semibold text-foreground">
                <Link href={`/posts/${p.slug}`} className="hover:underline">
                  {p.frontmatter.title}
                </Link>
              </div>
              <div className="mt-1 font-sans text-xs uppercase tracking-wide text-muted">
                {new Date(p.frontmatter.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
              {p.frontmatter.summary ? (
                <p className="mt-3 text-sm leading-6 text-muted">
                  {p.frontmatter.summary}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

