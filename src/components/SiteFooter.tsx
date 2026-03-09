import { profile } from "@/lib/profile";

export function SiteFooter() {
  return (
    <footer
      className="border-t border-white/10"
      style={{
        backgroundColor: "var(--footer-bg)",
        color: "var(--footer-text)",
      }}
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-2 px-6 py-10 text-sm">
        <div
          className="font-sans text-xs uppercase tracking-wide"
          style={{ color: "var(--footer-muted)" }}
        >
          Sailor • builder • writer
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <a
            className="hover:opacity-100 opacity-90"
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="hover:opacity-100 opacity-90"
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <div
          className="text-xs"
          style={{ color: "var(--footer-muted)" }}
        >
          © {new Date().getFullYear()} Alex Waldrop
        </div>
      </div>
    </footer>
  );
}

