import { motion } from "framer-motion";
import { staggerContainer } from "@/animations/presets.js";
import Section from "@/components/ui/Section.jsx";
import { cn } from "@/utils/cn.js";

export default function AnimatedSection({
  stagger = false,
  className,
  children,
  ...props
}) {
  if (stagger) {
    return (
      <Section
        as={motion.section}
        reveal={false}
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        {...props}
      >
        {children}
      </Section>
    );
  }

  return (
    <Section className={cn(className)} {...props}>
      {children}
    </Section>
  );
}
