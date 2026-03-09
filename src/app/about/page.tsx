import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { profile } from "@/lib/profile";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto flex-1 w-full max-w-3xl px-6 py-14">
        <h1 className="font-sans text-4xl font-extrabold tracking-tight text-foreground">
          About
        </h1>

        <div className="prose prose-slate mt-8 max-w-none prose-headings:font-sans prose-headings:tracking-tight prose-a:text-accent">
          <p>
            I’m a Senior Lead Engineer with 10+ years of experience building,
            supporting and modernizing production systems. I’m especially comfortable in the
            space where architecture meets mitigation: reliability, deployments,
            incident response, and making changes without breaking the world.
          </p>
          <p>
            Day-to-day I’ve led teams, built APIs and integrations, run CI and
            testing practices, and lived inside Linux and the LAMP stack. More
            recently I’ve been going cloud-first (AWS) and building AI/ML
            solutions in Python.
          </p>
          <p>
            Outside of work, I’m a sailor. The ocean keeps me honest.
          </p>

          <h2>What I’m focusing on</h2>
          <ul>
            <li>Leveraging emergent tech like AI/ML to streamline workflows, automate repetitive work, and deliver measurable business value</li>
            <li>Reliability and DevOps: observability, automation, safe change</li>
            <li>Modern web: React/Next.js + TypeScript + good UX</li>
          </ul>

          <h2>What I’m looking for</h2>
          <p>
            Roles where I can build products end-to-end, own outcomes, and work
            with people who take craft seriously.
          </p>

          <h2>Links</h2>
          <ul>
            <li>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

