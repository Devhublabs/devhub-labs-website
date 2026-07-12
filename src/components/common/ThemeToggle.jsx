import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import useTheme from "@/hooks/useTheme.js";
import { cn } from "@/utils/cn.js";

const iconVariants = {
  initial: { opacity: 0, rotate: -90, scale: 0.5 },
  animate: { opacity: 1, rotate: 0, scale: 1 },
  exit: { opacity: 0, rotate: 90, scale: 0.5 },
};

export default function ThemeToggle({ className }) {
  const { isDark, toggleTheme, theme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "theme-toggle group relative inline-flex size-11 items-center justify-center overflow-hidden rounded-lg border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] text-[var(--color-text-primary)] shadow-[var(--shadow-soft)] backdrop-blur-xl transition-[background-color,border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]",
        className,
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className="sr-only" aria-live="polite">
        {isDark ? "Dark mode active" : "Light mode active"}
      </span>
      <span
        className="pointer-events-none absolute inset-0 bg-[var(--gradient-toggle)] opacity-80 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <span className="relative flex size-5 items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.span
              key="moon"
              className="absolute inset-0 flex items-center justify-center text-[var(--color-primary)]"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <Moon aria-hidden="true" className="size-[1.15rem]" strokeWidth={2.25} />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              className="absolute inset-0 flex items-center justify-center text-[var(--color-warning)]"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <Sun aria-hidden="true" className="size-[1.15rem]" strokeWidth={2.25} />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
      <span className="sr-only">{`Current theme: ${theme}`}</span>
    </button>
  );
}
