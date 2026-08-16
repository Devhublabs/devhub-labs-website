import { motion } from "framer-motion";
import { fadeLeft, fadeRight, staggerChildren } from "@/animations/presets.js";
import ProcessStep from "@/components/pages/ProcessStep.jsx";
import Container from "@/components/ui/Container.jsx";
import { cn } from "@/utils/cn.js";

export default function Timeline({ steps = [], className }) {
  return (
    <Container className={cn("relative", className)}>
      <div
        className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[var(--color-primary)]/40 via-[var(--color-divider)] to-transparent sm:left-1/2 sm:block sm:-translate-x-px"
        aria-hidden="true"
      />

      <ol className="relative space-y-8 sm:space-y-12 lg:space-y-16">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.li
              key={step.id}
              className={cn(
                "relative grid grid-cols-1 sm:grid-cols-2 sm:gap-12",
                isEven ? "sm:[&>*:first-child]:col-start-1" : "sm:[&>*:first-child]:col-start-2",
              )}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={isEven ? fadeLeft : fadeRight}
            >
              <div
                className={cn(
                  "hidden sm:flex",
                  isEven ? "justify-end pr-8" : "justify-start pl-8 order-2",
                )}
                aria-hidden="true"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-surface)] font-heading text-sm font-bold text-[var(--color-primary)] shadow-[var(--shadow-glow)]">
                  {step.step}
                </span>
              </div>

              <motion.div variants={staggerChildren} className={cn(isEven ? "sm:pl-8" : "sm:pr-8 sm:order-1")}>
                <ProcessStep
                  step={step.step}
                  title={step.title}
                  summary={step.summary}
                  deliverables={step.deliverables}
                  showStepBadge
                />
              </motion.div>
            </motion.li>
          );
        })}
      </ol>
    </Container>
  );
}
