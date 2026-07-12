import { cn } from "@/utils/cn.js";

const dividerVariants = {
  line: "h-px bg-[var(--color-border)]",
  gradient:
    "h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/40 to-transparent",
  glow: "h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/70 to-transparent shadow-[var(--shadow-glow)]",
};

export default function Divider({
  variant = "line",
  decorative = true,
  className,
}) {
  return (
    <div
      className={cn("w-full", dividerVariants[variant], className)}
      role={decorative ? "presentation" : "separator"}
      aria-hidden={decorative}
    />
  );
}
