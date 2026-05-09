// bm-design-system: badge primitive
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-medium leading-none",
  {
    variants: {
      tone: {
        neutral: "bg-surface text-ink-body border border-hairline",
        accent: "bg-accent-faded text-accent",
        signal: "bg-signal-faded text-signal-darker",
        muted: "bg-transparent text-ink-muted border border-hairline",
        solid: "bg-accent text-page",
      },
    },
    defaultVariants: {
      tone: "neutral",
    },
  },
);

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
