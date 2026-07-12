import { motion } from "framer-motion";
import { pageFadeIn } from "@/animations/pageTransitions.js";

export default function PagePlaceholder({ title }) {
  return (
    <motion.section
      className="mx-auto flex min-h-[calc(100vh-9rem)] w-full max-w-7xl flex-col justify-center px-6 py-16"
      {...pageFadeIn}
    >
      <p className="text-small-label mb-3">DevHub Labs</p>
      <h1 className="text-hero-heading">{title}</h1>
      <p className="text-paragraph mt-4 max-w-2xl">
        This page route is configured. Content, layout sections, and visual
        design will be added in the next implementation phase.
      </p>
    </motion.section>
  );
}
