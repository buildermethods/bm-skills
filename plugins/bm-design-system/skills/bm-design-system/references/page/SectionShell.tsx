import * as React from "react";
import { CodeBlock } from "./CodeBlock";

interface SectionShellProps {
  id: string;
  title: string;
  description?: React.ReactNode;
  whenToUse?: React.ReactNode;
  whenNotToUse?: React.ReactNode;
  preview: React.ReactNode;
  code?: string;
  options?: React.ReactNode;
  children?: React.ReactNode;
}

export function SectionShell({
  id,
  title,
  description,
  whenToUse,
  whenNotToUse,
  preview,
  code,
  options,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className="border-b border-hairline pb-16 pt-8 first:pt-0"
    >
      <header className="mb-6">
        <h2 className="text-2xl font-semibold text-ink-display">{title}</h2>
        {description && (
          <p className="mt-2 max-w-2xl text-ink-muted">{description}</p>
        )}
      </header>

      <div className="rounded-lg border border-hairline bg-transparent p-6">
        {preview}
      </div>

      {(whenToUse || whenNotToUse) && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {whenToUse && (
            <div className="rounded-md border border-hairline bg-page p-4">
              <h3 className="text-sm font-semibold text-ink-display">
                When to use
              </h3>
              <div className="mt-2 text-sm text-ink-body [&_ul]:mt-1 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-0.5">
                {whenToUse}
              </div>
            </div>
          )}
          {whenNotToUse && (
            <div className="rounded-md border border-hairline bg-page p-4">
              <h3 className="text-sm font-semibold text-ink-display">
                When not to use
              </h3>
              <div className="mt-2 text-sm text-ink-body [&_ul]:mt-1 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-0.5">
                {whenNotToUse}
              </div>
            </div>
          )}
        </div>
      )}

      {code && (
        <div className="mt-6">
          <h3 className="mb-2 text-sm font-semibold text-ink-display">
            Sample code
          </h3>
          <CodeBlock code={code} />
        </div>
      )}

      {options && (
        <div className="mt-6">
          <h3 className="mb-2 text-sm font-semibold text-ink-display">
            Options & variations
          </h3>
          <div className="text-sm text-ink-body">{options}</div>
        </div>
      )}

      {children}
    </section>
  );
}
