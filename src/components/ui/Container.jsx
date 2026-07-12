import { cn } from "@/utils/cn.js";

const containerSizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[88rem]",
  full: "max-w-none",
};

export default function Container({
  as: Component = "div",
  size = "lg",
  padded = true,
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        "mx-auto w-full",
        containerSizes[size] ?? containerSizes.lg,
        padded && "px-5 sm:px-6 lg:px-8 2xl:px-10",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
