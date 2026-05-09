import { SectionShell } from "@/components/design-system/SectionShell";

const code = `<div className="flex min-h-screen bg-page text-ink-body">
  {/* Main navigation rail — see Main navigation section. Hidden below lg;
     a hamburger fixed to the top-right opens the mobile drawer instead. */}
  <MainNav />
  <main className="min-w-0 flex-1 px-6 py-8 sm:px-10">
    <div className="mx-auto max-w-4xl">
      {/* Page header (optional with sub-nav tabs) → page content */}
    </div>
  </main>
</div>`;

export function ShellsSection() {
  return (
    <SectionShell
      id="shells"
      title="Shells"
      description={
        <>
          The outermost page frame. A shell is a full-bleed{" "}
          <code>bg-page</code> container with the main-navigation rail on
          the left and a content area on the right. The rail toggles
          between collapsed (<code>w-14</code>) and expanded (<code>w-56</code>)
          via a chevron button (state persisted to <code>localStorage</code>),
          and is hidden entirely below the <code>lg</code> breakpoint in
          favor of a fixed hamburger and slide-in drawer. Sub-navigation
          lives inside page headers as horizontal tabs (not in the shell).
        </>
      }
      whenToUse={
        <ul>
          <li>Every authenticated screen.</li>
          <li>Pair with a Page header at the top of the main content area.</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>Marketing/landing pages — those use a dedicated marketing shell with a horizontal top nav.</li>
          <li>Modals/sheets — they layer on top of the shell, not replace it.</li>
        </ul>
      }
      preview={
        <div className="overflow-hidden rounded-md border border-hairline">
          <div className="flex h-44">
            <div className="w-10 shrink-0 border-r border-hairline bg-page p-2">
              <div className="mb-2 h-6 w-6 rounded bg-accent-faded" />
              <div className="space-y-1.5">
                <div className="h-4 w-6 rounded bg-surface" />
                <div className="h-4 w-6 rounded bg-surface" />
                <div className="h-4 w-6 rounded bg-surface" />
              </div>
            </div>
            <div className="flex-1 bg-surface p-3">
              <div className="mb-3 border-b border-hairline pb-2">
                <div className="h-3 w-24 rounded bg-page" />
              </div>
              <div className="space-y-1.5">
                <div className="h-2 w-3/4 rounded bg-page" />
                <div className="h-2 w-1/2 rounded bg-page" />
                <div className="h-2 w-2/3 rounded bg-page" />
              </div>
            </div>
          </div>
        </div>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li>
            <strong>Rail-only</strong>: just the main-nav rail and a content
            column. Default for app screens.
          </li>
          <li>
            <strong>With sub-nav</strong>: page header inside{" "}
            <code>main</code> appends sub-navigation tabs — see Page headers
            "with tabs" variant. No second sidebar needed.
          </li>
          <li>
            <strong>Content max-width</strong>: wrap children in{" "}
            <code>mx-auto max-w-4xl</code> so long-form content stays
            readable. The shell itself is full-bleed; the constraint lives
            on the inner container.
          </li>
          <li>
            <strong>Mobile</strong>: hide the rail with{" "}
            <code>hidden lg:flex</code> and render a hamburger fixed to the
            top-right of the viewport (<code>fixed right-3 top-3 z-30</code>)
            that opens the same nav as a slide-in drawer overlay.
          </li>
        </ul>
      }
    />
  );
}
