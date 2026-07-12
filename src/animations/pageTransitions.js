import { transitions } from "@/animations/presets.js";

export const pageTransition = {
  ...transitions.base,
};

export const pageFadeIn = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: pageTransition,
};
