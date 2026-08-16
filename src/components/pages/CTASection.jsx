import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/pages/AnimatedSection.jsx";
import Container from "@/components/ui/Container.jsx";
import SectionHeading from "@/components/ui/SectionHeading.jsx";
import { ROUTE_PATHS } from "@/routes/paths.js";
import { cn } from "@/utils/cn.js";

const buttonClasses =
  "btn-cta-primary group inline-flex h-14 items-center justify-center gap-3 rounded-lg px-7 text-sm font-bold transition-[transform,box-shadow] duration-[400ms] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]";

const secondaryButtonClasses =
  "btn-cta-secondary inline-flex h-14 items-center justify-center gap-3 rounded-lg px-7 text-sm font-bold transition-[background-color,transform,box-shadow] duration-[400ms] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]";

function isExternalPath(path) {
  return /^(https?:\/\/|mailto:|tel:)/.test(path);
}

function CTAButton({ path, label }) {
  if (isExternalPath(path)) {
    return (
      <a href={path} className={buttonClasses}>
        {label}
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
    );
  }

  return (
    <Link to={path} className={buttonClasses}>
      {label}
      <ArrowRight
        aria-hidden="true"
        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
}

export default function CTASection({
  eyebrow = "Let's Build Together",
  title = "Ready to bring your next project to life?",
  description = "Tell us about your goals and we'll help you design, build, and launch software that creates real value.",
  primaryLabel = "Start a Conversation",
  primaryPath = ROUTE_PATHS.contact,
  secondaryLabel,
  secondaryPath,
  className,
}) {
  return (
    <AnimatedSection spacing="lg" surface="gradient" className={className}>
      <Container>
        <div
          className={cn(
            "surface-glass relative overflow-hidden rounded-[var(--radius-xl)] border px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16",
          )}
        >
          <div
            className="cta-panel-gradient pointer-events-none absolute inset-0"
            aria-hidden="true"
          />
          <div className="relative z-10 flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
              align="left"
              width="lg"
              className="mb-0"
            />
            <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row lg:w-auto">
              <CTAButton path={primaryPath} label={primaryLabel} />
              {secondaryLabel && secondaryPath ? (
                isExternalPath(secondaryPath) ? (
                  <a href={secondaryPath} className={secondaryButtonClasses}>
                    {secondaryLabel}
                  </a>
                ) : (
                  <Link to={secondaryPath} className={secondaryButtonClasses}>
                    {secondaryLabel}
                  </Link>
                )
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
