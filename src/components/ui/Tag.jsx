import { cn } from "@/utils/cn.js";

export default function Tag({
  as: Component = "span",
  active = false,
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        "inline-flex w-fit items-center rounded-full border px-3 py-1.5 text-sm font-semibold leading-none transition-colors",
        active
          ? "border-transparent bg-[var(--color-primary)] text-white shadow-[var(--shadow-glow)]"
          : "border-[var(--color-border)] bg-[var(--color-glass-bg)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
