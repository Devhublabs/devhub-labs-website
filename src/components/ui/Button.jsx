import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { buttonHover } from "@/animations/presets.js";
import { cn } from "@/utils/cn.js";

const buttonVariants = {
  primary:
    "border-transparent purple-gradient text-white shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-glow-strong)]",
  secondary:
    "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-primary)] shadow-sm hover:border-[var(--color-primary)] hover:bg-[var(--color-hover-surface)]",
  ghost:
    "border-transparent bg-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-hover-surface)] hover:text-[var(--color-primary)]",
  outline:
    "border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
  glow: "border-[var(--color-glass-border)] purple-gradient text-white shadow-[var(--shadow-glow-strong)] ring-1 ring-[var(--color-glass-border)]",
};

const buttonSizes = {
  sm: "h-10 gap-2 px-4 text-sm",
  md: "h-12 gap-2.5 px-5 text-[0.9375rem]",
  lg: "h-14 gap-3 px-7 text-base",
  icon: "size-11 p-0",
};

export default function Button({
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  loadingText,
  disabled = false,
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}) {
  const isDisabled = disabled || loading;

  return (
    <motion.button
      type={type}
      className={cn(
        "text-button inline-flex shrink-0 items-center justify-center rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-55",
        buttonVariants[variant] ?? buttonVariants.primary,
        buttonSizes[size] ?? buttonSizes.md,
        fullWidth && "w-full",
        className,
      )}
      disabled={isDisabled}
      aria-busy={loading}
      {...(!isDisabled ? buttonHover : {})}
      {...props}
    >
      {loading ? (
        <Loader2 aria-hidden="true" className="size-4 animate-spin" />
      ) : (
        leftIcon
      )}
      {loading && loadingText ? loadingText : children}
      {!loading ? rightIcon : null}
    </motion.button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}) {
  return (
    <motion.a
      href={href}
      className={cn(
        "text-button inline-flex shrink-0 items-center justify-center rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]",
        buttonVariants[variant] ?? buttonVariants.primary,
        buttonSizes[size] ?? buttonSizes.md,
        fullWidth && "w-full",
        className,
      )}
      {...buttonHover}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </motion.a>
  );
}
