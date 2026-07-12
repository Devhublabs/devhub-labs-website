import { motion } from "framer-motion";
import { ArrowUpRight, ImageIcon, Sparkles, Users } from "lucide-react";
import { hoverGlow, hoverLift } from "@/animations/presets.js";
import Badge from "@/components/ui/Badge.jsx";
import Chip from "@/components/ui/Chip.jsx";
import Tag from "@/components/ui/Tag.jsx";
import { cn } from "@/utils/cn.js";

const cardVariants = {
  standard:
    "border-[var(--color-border)] bg-[var(--color-card)] shadow-[var(--shadow-card)]",
  glass: "surface-glass",
  feature:
    "feature-card-gradient shadow-[var(--shadow-card)]",
  flat: "border-[var(--color-border)] bg-[var(--color-surface)]",
};

const cardPadding = {
  none: "p-0",
  sm: "p-5",
  md: "p-6",
  lg: "p-7 sm:p-8",
};

const motionElements = {
  article: motion.article,
  div: motion.div,
  li: motion.li,
};

function getInitials(value = "") {
  return value
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function Card({
  as = "div",
  variant = "standard",
  padding = "md",
  interactive = false,
  glow = false,
  className,
  children,
  ...props
}) {
  const Component = motionElements[as] ?? motion.div;
  const motionProps = interactive ? (glow ? hoverGlow : hoverLift) : {};

  return (
    <Component
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-xl)] border transition-colors",
        cardVariants[variant] ?? cardVariants.standard,
        cardPadding[padding] ?? cardPadding.md,
        interactive && "interactive-card will-change-transform",
        className,
      )}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardHeader({ className, children }) {
  return <div className={cn("mb-5 flex items-start gap-4", className)}>{children}</div>;
}

export function CardBody({ className, children }) {
  return <div className={cn("space-y-4", className)}>{children}</div>;
}

export function CardFooter({ className, children }) {
  return <div className={cn("mt-6 flex flex-wrap gap-3", className)}>{children}</div>;
}

export function FeatureCard({
  eyebrow,
  title,
  description,
  icon,
  children,
  className,
}) {
  return (
    <Card variant="feature" padding="lg" interactive glow className={className}>
      <CardHeader>
        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white shadow-[var(--shadow-glow)]">
          {icon ?? <Sparkles aria-hidden="true" className="size-5" />}
        </div>
        <div>
          {eyebrow ? <p className="text-small-label mb-2">{eyebrow}</p> : null}
          <h3 className="text-card-heading">{title}</h3>
        </div>
      </CardHeader>
      {description ? <p className="text-paragraph">{description}</p> : null}
      {children}
    </Card>
  );
}

export function ServiceCard({
  title,
  summary,
  description,
  icon,
  capabilities = [],
  outcomes = [],
  className,
}) {
  const items = capabilities.length > 0 ? capabilities : outcomes;

  return (
    <Card as="article" variant="standard" padding="lg" interactive className={className}>
      <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-[var(--color-icon-surface)] text-[var(--color-primary)]">
        {icon ?? <Sparkles aria-hidden="true" className="size-5" />}
      </div>
      <h3 className="text-card-heading">{title}</h3>
      <p className="text-paragraph mt-3">{summary ?? description}</p>
      {items.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {items.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
      ) : null}
    </Card>
  );
}

export function TechnologyCard({
  title,
  technologies = [],
  icon,
  className,
}) {
  return (
    <Card as="article" variant="glass" padding="lg" interactive className={className}>
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex size-11 items-center justify-center rounded-2xl bg-[var(--color-surface-elevated)] text-[var(--color-primary)] shadow-sm">
          {icon ?? <Sparkles aria-hidden="true" className="size-5" />}
        </div>
        <Badge variant="glass" size="sm">
          {technologies.length} tools
        </Badge>
      </div>
      <h3 className="text-card-heading">{title}</h3>
      {technologies.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <Chip key={technology}>{technology}</Chip>
          ))}
        </div>
      ) : null}
    </Card>
  );
}

export function ProjectCard({
  title,
  category,
  summary,
  image,
  metrics = [],
  technologies = [],
  featured = false,
  className,
}) {
  return (
    <Card as="article" variant={featured ? "feature" : "standard"} padding="none" interactive glow={featured} className={className}>
      <div className="aspect-[16/10] overflow-hidden bg-[var(--color-icon-surface)]">
        {image ? (
          <img src={image} alt="" className="size-full object-cover" loading="lazy" />
        ) : (
          <div className="purple-gradient flex size-full items-center justify-center text-white">
            <ImageIcon aria-hidden="true" className="size-10 opacity-80" />
          </div>
        )}
      </div>
      <div className="p-6 sm:p-7">
        <div className="mb-4 flex items-center justify-between gap-3">
          {category ? <Badge variant="secondary" size="sm">{category}</Badge> : null}
          <ArrowUpRight aria-hidden="true" className="size-5 text-[var(--color-primary)]" />
        </div>
        <h3 className="text-card-heading">{title}</h3>
        {summary ? <p className="text-paragraph mt-3">{summary}</p> : null}
        {metrics.length > 0 ? (
          <div className="mt-6 grid grid-cols-2 gap-3">
            {metrics.map((metric) => (
              <div
                key={`${metric.label}-${metric.value}`}
                className="border-l border-[var(--color-border)] pl-3"
              >
                <p className="font-heading text-2xl font-bold text-[var(--color-text-primary)]">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        ) : null}
        {technologies.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <Chip key={technology}>{technology}</Chip>
            ))}
          </div>
        ) : null}
      </div>
    </Card>
  );
}

export function TeamCard({
  name,
  role,
  bio,
  image,
  socials = [],
  className,
}) {
  return (
    <Card as="article" variant="standard" padding="lg" interactive className={className}>
      <div className="mb-6 aspect-square overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-icon-surface)]">
        {image ? (
          <img src={image} alt={name} className="size-full object-cover" loading="lazy" />
        ) : (
          <div className="flex size-full items-center justify-center bg-[var(--gradient-feature-card)] text-[var(--color-primary)]">
            {name ? (
              <span className="font-heading text-4xl font-bold">{getInitials(name)}</span>
            ) : (
              <Users aria-hidden="true" className="size-10" />
            )}
          </div>
        )}
      </div>
      <h3 className="text-card-heading">{name}</h3>
      {role ? <p className="mt-2 font-semibold text-[var(--color-primary)]">{role}</p> : null}
      {bio ? <p className="text-paragraph mt-3">{bio}</p> : null}
      {socials.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {socials.map((social) => (
            <Badge key={social.id ?? social.label} variant="secondary" size="sm">
              {social.label}
            </Badge>
          ))}
        </div>
      ) : null}
    </Card>
  );
}

export function StatisticCard({
  value,
  label,
  description,
  className,
}) {
  return (
    <Card variant="glass" padding="lg" interactive className={className}>
      <p className="font-heading text-4xl font-bold leading-none text-[var(--color-primary)] sm:text-5xl">
        {value}
      </p>
      <h3 className="mt-4 font-heading text-xl font-semibold text-[var(--color-text-primary)]">
        {label}
      </h3>
      {description ? <p className="text-paragraph mt-3">{description}</p> : null}
    </Card>
  );
}
