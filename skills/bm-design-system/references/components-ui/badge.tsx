// bm-design-system: badge primitive
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva("badge", {
  variants: {
    tone: {
      neutral: "badge-neutral",
      accent: "badge-accent",
      signal: "badge-signal",
      muted: "badge-muted",
      solid: "badge-solid",
    },
  },
  defaultVariants: {
    tone: "neutral",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, tone, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ tone, className }))}
        {...props}
      />
    );
  },
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
