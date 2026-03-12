import Link from "next/link";

const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/projects/llm-battle", label: "Chess Arena" },
  { href: "/posts", label: "Posts" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/80 bg-[#0b2545]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-sans text-sm font-extrabold tracking-tight text-slate-50"
        >
          Alex Waldrop
        </Link>
        <nav className="flex items-center gap-4 font-sans text-sm text-slate-200">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

