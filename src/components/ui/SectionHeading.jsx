import { cn } from "@/utils/cn.js";

const alignClasses = {
  left: "items-start text-left",
  center: "mx-auto items-center text-center",
  right: "items-end text-right",
};

const widthClasses = {
  sm: "max-w-2xl",
  md: "max-w-3xl",
  lg: "max-w-4xl",
  full: "max-w-none",
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  width = "md",
  actions,
  className,
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        alignClasses[align] ?? alignClasses.left,
        widthClasses[width] ?? widthClasses.md,
        className,
      )}
    >
      {eyebrow ? <p className="text-small-label">{eyebrow}</p> : null}
      {title ? <h2 className="text-section-heading">{title}</h2> : null}
      {description ? (
        <p className="text-paragraph max-w-3xl">{description}</p>
      ) : null}
      {actions ? <div className="mt-2 flex flex-wrap gap-3">{actions}</div> : null}
    </div>
  );
}
