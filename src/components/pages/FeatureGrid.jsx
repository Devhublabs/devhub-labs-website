import { motion } from "framer-motion";
import { staggerChildren, staggerContainer } from "@/animations/presets.js";
import { cn } from "@/utils/cn.js";

const columnClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export default function FeatureGrid({
  columns = 3,
  gap = "gap-6 lg:gap-8",
  className,
  children,
}) {
  return (
    <motion.div
      className={cn("grid", columnClasses[columns] ?? columnClasses[3], gap, className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function FeatureGridItem({ className, children, ...props }) {
  return (
    <motion.div className={className} variants={staggerChildren} {...props}>
      {children}
    </motion.div>
  );
}
