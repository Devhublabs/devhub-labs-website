import Card from "@/components/ui/Card.jsx";
import { cn } from "@/utils/cn.js";

export default function GradientCard({
  interactive = true,
  glow = true,
  padding = "lg",
  className,
  children,
  ...props
}) {
  return (
    <Card
      variant="feature"
      padding={padding}
      interactive={interactive}
      glow={glow}
      className={cn(className)}
      {...props}
    >
      {children}
    </Card>
  );
}
