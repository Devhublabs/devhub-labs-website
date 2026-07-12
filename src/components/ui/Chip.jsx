import { X } from "lucide-react";
import { cn } from "@/utils/cn.js";

export default function Chip({
  as: Component = "span",
  removable = false,
  onRemove,
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-sm font-medium text-[var(--color-text-secondary)] shadow-sm",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {removable ? (
        <button
          type="button"
          className="rounded-full text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
          onClick={onRemove}
          aria-label={`Remove ${children}`}
        >
          <X aria-hidden="true" className="size-3.5" />
        </button>
      ) : null}
    </Component>
  );
}
