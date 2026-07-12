import { cn } from "@/utils/cn.js";

const badgeVariants = {
  primary:
    "border-transparent bg-[var(--color-primary)] text-white shadow-[var(--shadow-glow)]",
  secondary:
    "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-primary)]",
  accent:
    "border-transparent bg-[var(--color-accent)] text-white shadow-[var(--shadow-glow-strong)]",
  glass:
    "border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] text-[var(--color-text-primary)] backdrop-blur-xl",
  success:
    "border-transparent bg-[var(--color-success)] text-white",
  warning:
    "border-transparent bg-[var(--color-warning)] text-white",
};

const badgeSizes = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3 py-1.5 text-sm",
  lg: "px-4 py-2 text-sm",
};

export default function Badge({
  as: Component = "span",
  variant = "secondary",
  size = "md",
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full border font-semibold leading-none",
        badgeVariants[variant] ?? badgeVariants.secondary,
        badgeSizes[size] ?? badgeSizes.md,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
