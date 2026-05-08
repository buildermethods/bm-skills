import { SectionShell } from "@/components/design-system/SectionShell";

const code = `<aside className="w-64 shrink-0 border-r border-hairline bg-page">
  <nav className="flex flex-col gap-1 p-4 text-sm">
    <a href="#" className="rounded-md bg-accent-faded px-2 py-1.5 text-accent no-underline">Overview</a>
    <a href="#" className="rounded-md px-2 py-1.5 text-ink-body no-underline hover:bg-surface">Activity</a>
    <a href="#" className="rounded-md px-2 py-1.5 text-ink-body no-underline hover:bg-surface">Members</a>
  </nav>
</aside>`;

export function SubNavSection() {
  return (
    <SectionShell
      id="sub-navigation"
      title="Sub navigation"
      description={
        <>
          The vertical nav inside a sidebar. Used for navigating within a
          single section of the app (e.g. settings sub-pages, project tabs).
        </>
      }
      whenToUse={
        <ul>
          <li>When a section has 3+ sub-pages with stable structure.</li>
          <li>Pair with the sidebar shell variant.</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>For 1–2 sub-pages — use page-header tabs instead.</li>
          <li>For dynamic, list-of-things navigation — use a Listing.</li>
        </ul>
      }
      preview={
        <aside className="w-56 rounded-md border border-hairline bg-page">
          <nav className="flex flex-col gap-1 p-3 text-sm">
            <span className="rounded-md bg-accent-faded px-2 py-1.5 text-accent">
              Overview
            </span>
            <span className="rounded-md px-2 py-1.5 text-ink-body">
              Activity
            </span>
            <span className="rounded-md px-2 py-1.5 text-ink-body">
              Members
            </span>
            <span className="rounded-md px-2 py-1.5 text-ink-body">
              Billing
            </span>
          </nav>
        </aside>
      }
      code={code}
    />
  );
}
