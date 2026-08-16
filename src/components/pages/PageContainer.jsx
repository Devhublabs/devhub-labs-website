import { cn } from "@/utils/cn.js";

export default function PageContainer({ className, children, ...props }) {
  return (
    <div className={cn("relative", className)} {...props}>
      {children}
    </div>
  );
}
