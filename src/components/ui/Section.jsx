import { motion } from "framer-motion";
import { sectionReveal } from "@/animations/presets.js";
import { cn } from "@/utils/cn.js";

const spacingClasses = {
  none: "",
  sm: "py-14 sm:py-16 lg:py-20",
  md: "py-16 sm:py-20 lg:py-24",
  lg: "py-20 sm:py-24 lg:py-32",
};

const surfaceClasses = {
  default: "",
  muted: "bg-[var(--color-background)]",
  surface: "bg-[var(--color-surface)]",
  gradient: "section-gradient",
};

const motionElements = {
  article: motion.article,
  div: motion.div,
  main: motion.main,
  section: motion.section,
};

export default function Section({
  as = "section",
  spacing = "md",
  surface = "default",
  reveal = true,
  className,
  children,
  ...props
}) {
  const Component = reveal ? (motionElements[as] ?? motion.section) : as;
  const motionProps = reveal ? sectionReveal : {};

  return (
    <Component
      className={cn(
        "relative overflow-hidden",
        spacingClasses[spacing] ?? spacingClasses.md,
        surfaceClasses[surface] ?? surfaceClasses.default,
        className,
      )}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
}
