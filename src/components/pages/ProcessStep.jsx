import { CheckCircle2 } from "lucide-react";
import GlassCard from "@/components/pages/GlassCard.jsx";
import { cn } from "@/utils/cn.js";

export default function ProcessStep({
  step,
  title,
  summary,
  deliverables = [],
  showStepBadge = false,
  className,
}) {
  return (
    <GlassCard interactive className={cn("h-full", className)}>
      <div className="flex items-start gap-4">
        {showStepBadge ? (
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] font-heading text-xs font-bold text-white shadow-[var(--shadow-glow)] sm:hidden">
            {step}
          </span>
        ) : null}
        <div className="min-w-0 flex-1">
          <p className="text-small-label mb-2">Step {step}</p>
          <h3 className="text-card-heading">{title}</h3>
          {summary ? <p className="text-paragraph mt-3">{summary}</p> : null}
          {deliverables.length > 0 ? (
            <ul className="mt-5 space-y-2">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-[var(--color-primary)]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </GlassCard>
  );
}
