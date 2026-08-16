import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, ImageIcon } from "lucide-react";
import { hoverGlow } from "@/animations/presets.js";
import Badge from "@/components/ui/Badge.jsx";
import Chip from "@/components/ui/Chip.jsx";
import { cn } from "@/utils/cn.js";

function getDisplayUrl(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function ProjectCard({
  title,
  category,
  summary,
  image,
  url,
  highlights = [],
  technologies = [],
  featured = false,
  className,
}) {
  const Component = url ? motion.a : motion.article;
  const linkProps = url
    ? {
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Visit ${title} live site`,
      }
    : {};

  return (
    <Component
      className={cn(
        "group relative block overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-card)] shadow-[var(--shadow-card)]",
        featured && "border-[var(--color-glass-border)]",
        url && "cursor-pointer transition-[box-shadow] duration-300 hover:shadow-[var(--shadow-hover-glow)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]",
        className,
      )}
      {...(url ? {} : hoverGlow)}
      {...linkProps}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-icon-surface)]">
        {image ? (
          <img
            src={image}
            alt={`${title} project preview`}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="purple-gradient flex size-full items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <ImageIcon aria-hidden="true" className="size-12 text-white/80" />
          </div>
        )}

        <div className="project-overlay absolute inset-0 flex flex-col justify-end gap-4 p-6 opacity-0 transition-opacity duration-400 group-hover:opacity-100 sm:p-8">
          {highlights.length > 0 ? (
            <ul className="space-y-2">
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center gap-2 text-sm font-medium text-white/90"
                >
                  <span className="size-1.5 rounded-full bg-[var(--color-secondary)]" />
                  {highlight}
                </li>
              ))}
            </ul>
          ) : null}
          {url ? (
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              <ExternalLink aria-hidden="true" className="size-4" />
              Visit Live Site
            </span>
          ) : null}
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {category ? (
              <Badge variant="secondary" size="sm">
                {category}
              </Badge>
            ) : null}
            {url ? (
              <Badge variant="glass" size="sm">
                Live
              </Badge>
            ) : null}
          </div>
          <ArrowUpRight
            aria-hidden="true"
            className="size-5 text-[var(--color-primary)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
        <h3 className="text-card-heading">{title}</h3>
        {summary ? <p className="text-paragraph mt-3">{summary}</p> : null}
        {url ? (
          <p className="mt-3 text-sm font-medium text-[var(--color-primary)] transition-colors group-hover:underline">
            {getDisplayUrl(url)}
          </p>
        ) : null}
        {technologies.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <Chip key={technology}>{technology}</Chip>
            ))}
          </div>
        ) : null}
      </div>
    </Component>
  );
}
