import { SiteHeader } from "@/components/SiteHeader";

export default function LlmBattlePage() {
  const src = "https://alexanderpw-alexs-llm-battle-area.hf.space";

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <SiteHeader />
      <div className="flex-1 min-h-0 w-full overflow-hidden">
        <iframe
          src={src}
          title="Alex's LLM Chess Battle"
          className="block h-full w-full border-0"
          allow="clipboard-write; fullscreen"
        />
      </div>
    </div>
  );
}

