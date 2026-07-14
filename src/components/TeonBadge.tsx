import { cn } from "@/lib/utils";

type TeonBadgeTone = "navy" | "slate";

interface TeonBadgeProps {
  tone?: TeonBadgeTone;
  className?: string;
}

/**
 * Unified TEON brand badge: a circular "T" mark paired with the TEON wordmark.
 * Replaces the previous "KREI" pill badges across the site for consistent branding.
 * `tone="navy"` matches the navy (#1E3A5F) sections; `tone="slate"` matches the
 * gray (#4C5154) search results theme.
 */
export function TeonBadge({ tone = "navy", className }: TeonBadgeProps) {
  const isNavy = tone === "navy";

  const circleBg = isNavy ? "bg-[#1E3A5F]" : "bg-[#4C5154]";
  const wordColor = isNavy ? "text-[#1E3A5F]" : "text-[#4C5154]";

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur-sm",
        className
      )}
    >
      <div className={cn("flex h-5 w-5 items-center justify-center rounded-full", circleBg)}>
        <span className="text-[7px] font-bold text-white">T</span>
      </div>
      <span className={cn("text-[9px] font-bold tracking-[2px]", wordColor)}>TEON</span>
    </div>
  );
}