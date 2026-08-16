import GradientCard from "@/components/pages/GradientCard.jsx";
import { cn } from "@/utils/cn.js";

export default function ValueCard({ title, description, icon, className }) {
  return (
    <GradientCard className={cn("h-full", className)}>
      {icon ? (
        <div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white shadow-[var(--shadow-glow)]">
          {icon}
        </div>
      ) : null}
      <h3 className="text-card-heading">{title}</h3>
      {description ? <p className="text-paragraph mt-3">{description}</p> : null}
    </GradientCard>
  );
}
