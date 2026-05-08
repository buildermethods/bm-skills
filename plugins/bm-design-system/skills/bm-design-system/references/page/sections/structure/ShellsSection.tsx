import { SectionShell } from "@/components/design-system/SectionShell";

const code = `<div className="min-h-screen bg-page text-ink-body">
  <header className="border-b border-hairline bg-page">{/* nav */}</header>
  <div className="mx-auto flex max-w-7xl">
    <aside className="hidden w-64 shrink-0 border-r border-hairline lg:block">
      {/* sub nav */}
    </aside>
    <main className="min-w-0 flex-1 p-6">{/* content */}</main>
  </div>
</div>`;

export function ShellsSection() {
  return (
    <SectionShell
      id="shells"
      title="Shells"
      description={
        <>
          The outermost page frame. A shell is a full-bleed{" "}
          <code>bg-page</code> container with a sticky header and either a
          centered content column or a sidebar + main split.
        </>
      }
      whenToUse={
        <ul>
          <li>Every authenticated screen.</li>
          <li>
            Use sidebar shell when the screen has stable sub-navigation; use
            single-column shell otherwise.
          </li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>Marketing/landing pages — those use a dedicated marketing shell.</li>
          <li>Modals/sheets — they layer on top of the shell, not replace it.</li>
        </ul>
      }
      preview={
        <div className="overflow-hidden rounded-md border border-hairline">
          <div className="flex h-8 items-center border-b border-hairline bg-page px-3 text-xs text-ink-muted">
            Header
          </div>
          <div className="flex h-40">
            <div className="hidden w-32 border-r border-hairline bg-surface p-3 text-xs text-ink-muted sm:block">
              Sidebar
            </div>
            <div className="flex-1 p-3 text-xs text-ink-muted">Main</div>
          </div>
        </div>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li>
            <strong>Single-column</strong>: omit <code>&lt;aside&gt;</code>,
            wrap content in a centered <code>max-w-3xl</code> container.
          </li>
          <li>
            <strong>Sidebar + main</strong>: as shown above. Sidebar collapses
            to a sheet on <code>&lt; lg</code>.
          </li>
        </ul>
      }
    />
  );
}
