import { motion, useReducedMotion } from "framer-motion";
import logoMark from "@/assets/logos/logo.png";

/**
 * Premium loading experience shown beneath the 3D hero logo:
 * a soft glowing orb, a rotating shimmer ring, and a gently
 * pulsing blurred logo silhouette. Replaces the old PNG flash
 * and stays visible until the GLB has rendered its first frame.
 */
export default function HeroLogoPlaceholder() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      aria-hidden="true"
    >
      <motion.div
        className="hero-orb absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        animate={
          prefersReducedMotion
            ? { opacity: 0.65 }
            : { scale: [1, 1.08, 1], opacity: [0.5, 0.82, 0.5] }
        }
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="hero-orb-ring absolute left-1/2 top-1/2 h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-md"
        animate={prefersReducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />

      <motion.img
        src={logoMark}
        alt=""
        draggable={false}
        width="220"
        height="220"
        className="hero-logo-silhouette relative size-[40%] max-w-[13rem] object-contain"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={
          prefersReducedMotion
            ? { opacity: 0.85, scale: 1 }
            : { opacity: [0.45, 0.9, 0.45], scale: [0.97, 1.03, 0.97] }
        }
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
