import { motion } from "framer-motion";
import { hoverLift } from "@/animations/presets.js";
import { cn } from "@/utils/cn.js";

export default function TechnologyBadge({
  label,
  variant = "default",
  className,
}) {
  const variants = {
    default:
      "border-[var(--color-border)] bg-[var(--color-glass-bg)] text-[var(--color-text-primary)] shadow-sm",
    practice: "badge-practice text-[var(--color-text-primary)] shadow-[var(--shadow-card)]",
    accent:
      "border-transparent bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
  };

  return (
    <motion.span
      className={cn(
        "inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
        variants[variant] ?? variants.default,
        className,
      )}
      {...hoverLift}
    >
      {label}
    </motion.span>
  );
}
