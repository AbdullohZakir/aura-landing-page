import { site } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-semibold ${className}`}>
      <span
        aria-hidden
        className="relative grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-brand to-accent text-brand-foreground shadow-[var(--shadow-glow)]"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3c2 4 4 6 6 7-2 1-4 3-6 7-2-4-4-6-6-7 2-1 4-3 6-7Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="text-lg tracking-tight">{site.name}</span>
    </span>
  );
}
