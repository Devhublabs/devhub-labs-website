import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef } from "react";

/**
 * Lightweight magnetic wrapper: the child gently follows the cursor while
 * hovered, then springs back. Purely transform-based (no layout thrash) and
 * fully disabled under prefers-reduced-motion. Intended for signature CTAs.
 */
export default function Magnetic({ children, strength = 0.25, className }) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 16, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 220, damping: 16, mass: 0.3 });

  function handleMove(event) {
    const node = ref.current;
    if (prefersReducedMotion || !node) {
      return;
    }

    const rect = node.getBoundingClientRect();
    const relativeX = event.clientX - (rect.left + rect.width / 2);
    const relativeY = event.clientY - (rect.top + rect.height / 2);
    x.set(relativeX * strength);
    y.set(relativeY * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
