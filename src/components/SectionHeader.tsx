import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: React.ReactNode;
  eyebrow?: string;
  subtitle?: React.ReactNode;
  variant?: "light" | "dark";
  showBadge?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

/**
 * Unified section header used across the site.
 * Renders an optional "K" badge flanked by divider lines, an uppercase
 * eyebrow label, a bold title and an optional subtitle. Supports light
 * (on white) and dark (on navy) variants so every section shares one motif.
 */
export function SectionHeader({
  title,
  eyebrow,
  subtitle,
  variant = "light",
  showBadge = true,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  const isDark = variant === "dark";

  const lineColor = isDark ? "bg-white/20" : "bg-[#1E3A5F]/25";
  const badgeBorder = isDark ? "border-white/20" : "border-[#1E3A5F]/25";
  const badgeBg = isDark ? "bg-white/5" : "bg-white";
  const badgeText = isDark ? "text-white" : "text-[#1E3A5F]";
  const eyebrowColor = isDark ? "text-white/40" : "text-[#1E3A5F]/50";
  const titleColor = isDark ? "text-white" : "text-[#0F1F33]";
  const subtitleColor = isDark ? "text-white/50" : "text-[#666]";

  return (
    <div className={cn("text-center", className)}>
      {showBadge && (
        <div className="mb-4 flex items-center justify-center gap-3">
          <div className={cn("h-px w-8", lineColor)} />
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full border-2",
              badgeBorder,
              badgeBg
            )}
          >
            <span className={cn("text-[9px] font-extrabold tracking-[2px]", badgeText)}>
              K
            </span>
          </div>
          <div className={cn("h-px w-8", lineColor)} />
        </div>
      )}

      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-block text-[11px] font-bold uppercase tracking-[4px]",
            eyebrowColor
          )}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          "text-xl font-bold tracking-[2px] sm:text-2xl md:text-[26px]",
          titleColor,
          titleClassName
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mx-auto mt-3 max-w-xl text-[13px] leading-relaxed sm:text-sm",
            subtitleColor,
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}