// bm-design-system: data table primitive
import * as React from "react";
import { cn } from "@/lib/utils";

const DataTable = React.forwardRef<
  HTMLDListElement,
  React.HTMLAttributes<HTMLDListElement>
>(({ className, ...props }, ref) => (
  <dl
    ref={ref}
    className={cn("divide-y divide-hairline border-y border-hairline", className)}
    {...props}
  />
));
DataTable.displayName = "DataTable";

export interface DataRowProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  children: React.ReactNode;
}

const DataRow = React.forwardRef<HTMLDivElement, DataRowProps>(
  ({ className, title, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "grid gap-1 py-4 md:grid-cols-4 md:gap-6 xl:grid-cols-5",
        className,
      )}
      {...props}
    >
      <dt className="text-sm font-medium text-ink-muted md:col-span-1 md:pt-0.5">
        {title}
      </dt>
      <dd className="text-ink-body md:col-span-3 xl:col-span-4">{children}</dd>
    </div>
  ),
);
DataRow.displayName = "DataRow";

export { DataTable, DataRow };
