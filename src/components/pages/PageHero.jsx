import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container.jsx";
import { cn } from "@/utils/cn.js";

export default function PageHero({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  children,
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className={cn(
        "page-hero-section relative isolate overflow-hidden border-b pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="page-hero-gradient absolute inset-0" />
        <div className="hero-grid absolute inset-0 opacity-50" />
        <motion.div
          className="hero-blob-1 absolute -left-24 top-8 h-72 w-72 rounded-full blur-3xl sm:h-96 sm:w-96"
          animate={
            prefersReducedMotion
              ? undefined
              : { x: [0, 20, 0], y: [0, 14, 0], scale: [1, 1.04, 1] }
          }
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero-blob-2 absolute right-[-12rem] top-[-6rem] h-80 w-80 rounded-full blur-3xl sm:h-[28rem] sm:w-[28rem]"
          animate={
            prefersReducedMotion
              ? undefined
              : { x: [0, -24, 0], y: [0, 18, 0], scale: [1.02, 0.97, 1.02] }
          }
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="page-hero-radial absolute inset-0" />
      </div>

      <Container className="relative z-10">
        <motion.div
          className={cn(
            "mx-auto flex max-w-4xl flex-col gap-5",
            align === "center" && "items-center text-center",
            align === "left" && "items-start text-left",
          )}
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow ? (
            <p className="eyebrow-pill inline-flex rounded-full px-4 py-2 text-small-label">
              {eyebrow}
            </p>
          ) : null}
          {title ? <h1 className="text-hero-heading">{title}</h1> : null}
          {description ? (
            <p className="text-paragraph max-w-3xl text-lg">{description}</p>
          ) : null}
          {children}
        </motion.div>
      </Container>
    </section>
  );
}
