import { SectionShell } from "@/components/design-system/SectionShell";

const code = `<footer className="border-t border-hairline bg-page">
  <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
    <span>© 2026 Acme</span>
    <nav className="flex gap-4">
      <a href="/privacy" className="no-underline hover:text-ink-display">Privacy</a>
      <a href="/terms" className="no-underline hover:text-ink-display">Terms</a>
    </nav>
  </div>
</footer>`;

export function FootersSection() {
  return (
    <SectionShell
      id="footers"
      title="Footers"
      description={
        <>
          The bottom edge of a shell. Quiet, low-contrast. Holds the
          copyright, legal links, and (sparingly) secondary navigation.
        </>
      }
      whenToUse={
        <ul>
          <li>Public-facing or marketing pages.</li>
          <li>Authenticated screens that have natural scroll endings.</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>Dense app screens (dashboards, editors) — they don't need a footer.</li>
          <li>Modals.</li>
        </ul>
      }
      preview={
        <footer className="rounded-md border border-hairline bg-page">
          <div className="flex flex-col gap-2 px-4 py-6 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Acme</span>
            <nav className="flex gap-4">
              <span>Privacy</span>
              <span>Terms</span>
            </nav>
          </div>
        </footer>
      }
      code={code}
    />
  );
}
