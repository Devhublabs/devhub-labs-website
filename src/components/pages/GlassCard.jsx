import Card from "@/components/ui/Card.jsx";
import { cn } from "@/utils/cn.js";

export default function GlassCard({
  interactive = false,
  padding = "lg",
  className,
  children,
  ...props
}) {
  return (
    <Card
      variant="glass"
      padding={padding}
      interactive={interactive}
      className={cn(className)}
      {...props}
    >
      {children}
    </Card>
  );
}
