import { SectionShell } from "@/components/design-system/SectionShell";
import { Button } from "@/components/ui/button";

const code = `<div className="flex flex-col gap-2 border-b border-hairline pb-6">
  <div className="flex items-start justify-between gap-4">
    <div>
      <h1 className="text-2xl font-semibold text-ink-display">Projects</h1>
      <p className="mt-1 text-sm text-ink-muted">Everything your team is working on.</p>
    </div>
    <Button>New project</Button>
  </div>
</div>`;

export function PageHeadersSection() {
  return (
    <SectionShell
      id="page-headers"
      title="Page headers"
      description={
        <>
          The titled banner at the top of a page's main content area. Holds
          the page title, optional supporting copy, and primary actions.
        </>
      }
      whenToUse={
        <ul>
          <li>Every primary page inside the shell.</li>
          <li>Place primary CTA on the right; secondary actions to its left.</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>Dialog/sheet contents — use DialogTitle instead.</li>
          <li>Dense list views with tightly-packed filters — use a thinner toolbar pattern.</li>
        </ul>
      }
      preview={
        <div className="flex flex-col gap-2 border-b border-hairline pb-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-ink-display">
                Projects
              </h1>
              <p className="mt-1 text-sm text-ink-muted">
                Everything your team is working on.
              </p>
            </div>
            <Button>New project</Button>
          </div>
        </div>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li>
            <strong>With breadcrumb</strong>: prepend a small breadcrumb row
            above the title.
          </li>
          <li>
            <strong>With tabs</strong>: append a horizontal tab list under
            the description.
          </li>
        </ul>
      }
    />
  );
}
