import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const labelVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-medium leading-none",
  {
    variants: {
      tone: {
        neutral: "bg-surface text-ink-body border border-hairline",
        accent: "bg-accent-faded text-accent",
        signal: "bg-signal-faded text-signal",
        muted: "bg-transparent text-ink-muted border border-hairline",
        solid: "bg-accent text-page",
      },
    },
    defaultVariants: {
      tone: "neutral",
    },
  },
);

export interface LabelProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof labelVariants> {}

const Label = React.forwardRef<HTMLSpanElement, LabelProps>(
  ({ className, tone, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(labelVariants({ tone, className }))}
        {...props}
      />
    );
  },
);
Label.displayName = "Label";

export { Label, labelVariants };
