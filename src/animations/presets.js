export const easing = {
  smooth: [0.22, 1, 0.36, 1],
  crisp: [0.4, 0, 0.2, 1],
};

export const transitions = {
  fast: {
    duration: 0.2,
    ease: easing.smooth,
  },
  base: {
    duration: 0.35,
    ease: easing.smooth,
  },
  slow: {
    duration: 0.6,
    ease: easing.smooth,
  },
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.base,
  },
};

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: 32,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.base,
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: -32,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.base,
  },
};

export const zoom = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.base,
  },
};

export const scale = {
  rest: {
    scale: 1,
  },
  active: {
    scale: 1.02,
    transition: transitions.fast,
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

export const staggerChildren = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.base,
  },
};

export const heroAnimation = {
  hidden: {
    opacity: 0,
    y: 34,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: transitions.slow,
  },
};

export const sectionReveal = {
  initial: "hidden",
  whileInView: "visible",
  viewport: {
    once: true,
    amount: 0.24,
  },
  variants: fadeUp,
};

export const hoverLift = {
  whileHover: {
    y: -6,
    transition: transitions.fast,
  },
};

export const hoverGlow = {
  whileHover: {
    y: -4,
    transition: transitions.fast,
  },
};

export const buttonHover = {
  whileHover: {
    y: -2,
    scale: 1.01,
    transition: transitions.fast,
  },
  whileTap: {
    y: 0,
    scale: 0.98,
    transition: {
      duration: 0.12,
      ease: easing.crisp,
    },
  },
};
