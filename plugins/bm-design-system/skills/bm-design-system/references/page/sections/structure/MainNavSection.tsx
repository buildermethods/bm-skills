import { SectionShell } from "@/components/design-system/SectionShell";

const code = `<header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-hairline bg-page px-4 sm:px-6">
  <div className="flex items-center gap-6">
    <a href="/" className="font-display text-sm font-semibold text-ink-display no-underline">
      Acme
    </a>
    <nav className="flex items-center gap-4">
      <a href="/dashboard" className="text-sm text-ink-body no-underline hover:text-ink-display">Dashboard</a>
      <a href="/projects" className="text-sm text-ink-body no-underline hover:text-ink-display">Projects</a>
      <a href="/settings" className="text-sm text-ink-body no-underline hover:text-ink-display">Settings</a>
    </nav>
  </div>
  <button className="h-9 w-9 cursor-pointer rounded-full bg-accent-faded" aria-label="Account" />
</header>`;

export function MainNavSection() {
  return (
    <SectionShell
      id="main-navigation"
      title="Main navigation"
      description={
        <>
          The top-level horizontal nav inside the shell header. Holds the
          brand mark, primary destinations, and the account/user affordance.
        </>
      }
      whenToUse={
        <ul>
          <li>One per shell. Always present and sticky.</li>
          <li>Top-level destinations only — secondary items belong in sub-nav.</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>For deep, multi-level menus — use sub-nav or a command palette.</li>
        </ul>
      }
      preview={
        <header className="flex h-14 items-center justify-between rounded-md border border-hairline bg-page px-4">
          <div className="flex items-center gap-6">
            <span className="font-display text-sm font-semibold text-ink-display">
              Acme
            </span>
            <nav className="flex items-center gap-4 text-sm">
              <span className="text-ink-display">Dashboard</span>
              <span className="text-ink-body">Projects</span>
              <span className="text-ink-body">Settings</span>
            </nav>
          </div>
          <div className="h-8 w-8 rounded-full bg-accent-faded" />
        </header>
      }
      code={code}
    />
  );
}
