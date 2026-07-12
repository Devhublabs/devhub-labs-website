import { cn } from "@/utils/cn.js";

export function HeroHeading({
  as: Component = "h1",
  className,
  children,
  ...props
}) {
  return (
    <Component className={cn("text-hero-heading", className)} {...props}>
      {children}
    </Component>
  );
}

export function SectionTitle({
  as: Component = "h2",
  className,
  children,
  ...props
}) {
  return (
    <Component className={cn("text-section-heading", className)} {...props}>
      {children}
    </Component>
  );
}

export function CardTitle({
  as: Component = "h3",
  className,
  children,
  ...props
}) {
  return (
    <Component className={cn("text-card-heading", className)} {...props}>
      {children}
    </Component>
  );
}

export function Paragraph({
  as: Component = "p",
  className,
  children,
  ...props
}) {
  return (
    <Component className={cn("text-paragraph", className)} {...props}>
      {children}
    </Component>
  );
}

export function SmallLabel({
  as: Component = "p",
  className,
  children,
  ...props
}) {
  return (
    <Component className={cn("text-small-label", className)} {...props}>
      {children}
    </Component>
  );
}

export function ButtonText({
  as: Component = "span",
  className,
  children,
  ...props
}) {
  return (
    <Component className={cn("text-button", className)} {...props}>
      {children}
    </Component>
  );
}
