import { SectionShell } from "@/components/design-system/SectionShell";
import { Folder, Home, Settings, User, Users } from "lucide-react";

const code = `<aside className="group flex h-screen w-14 shrink-0 flex-col overflow-hidden border-r border-hairline bg-page transition-[width] duration-200 hover:w-56">
  <a href="/" className="flex h-14 shrink-0 items-center gap-3 border-b border-hairline px-4 text-ink-display no-underline">
    <span className="font-display text-sm font-semibold">A</span>
    <span className="hidden whitespace-nowrap font-display text-sm font-semibold group-hover:inline">Acme</span>
  </a>
  <nav className="flex flex-1 flex-col gap-1 p-2 text-sm">
    <a href="/dashboard" className="flex items-center gap-3 rounded-md bg-accent-faded px-3 py-2 text-accent no-underline">
      <Home className="h-4 w-4 shrink-0" />
      <span className="hidden whitespace-nowrap group-hover:inline">Dashboard</span>
    </a>
    <a href="/projects" className="flex items-center gap-3 rounded-md px-3 py-2 text-ink-body no-underline hover:bg-surface hover:text-ink-display">
      <Folder className="h-4 w-4 shrink-0" />
      <span className="hidden whitespace-nowrap group-hover:inline">Projects</span>
    </a>
    <a href="/members" className="flex items-center gap-3 rounded-md px-3 py-2 text-ink-body no-underline hover:bg-surface hover:text-ink-display">
      <Users className="h-4 w-4 shrink-0" />
      <span className="hidden whitespace-nowrap group-hover:inline">Members</span>
    </a>
    <a href="/settings" className="flex items-center gap-3 rounded-md px-3 py-2 text-ink-body no-underline hover:bg-surface hover:text-ink-display">
      <Settings className="h-4 w-4 shrink-0" />
      <span className="hidden whitespace-nowrap group-hover:inline">Settings</span>
    </a>
  </nav>
  <div className="border-t border-hairline p-2">
    <a href="/account" className="flex items-center gap-3 rounded-md px-3 py-2 text-ink-body no-underline hover:bg-surface hover:text-ink-display">
      <User className="h-4 w-4 shrink-0" />
      <span className="hidden whitespace-nowrap group-hover:inline">Account</span>
    </a>
  </div>
</aside>`;

export function MainNavSection() {
  return (
    <SectionShell
      id="main-navigation"
      title="Main navigation"
      description={
        <>
          A vertical rail at the left edge of the shell. Icons are always
          visible; the whole rail expands on hover to reveal labels. Holds
          the brand mark, primary destinations, and the account affordance
          pinned to the bottom.
        </>
      }
      whenToUse={
        <ul>
          <li>One per shell. Always present and sticky.</li>
          <li>Top-level destinations only — secondary items belong in sub-nav tabs.</li>
          <li>4–8 items max; beyond that, use grouping with hairline separators.</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>For deep, multi-level menus — use sub-nav tabs or a command palette.</li>
          <li>Marketing/landing pages — those use a horizontal top nav.</li>
        </ul>
      }
      preview={
        <div className="flex h-72 overflow-hidden rounded-md border border-hairline">
          <aside className="group flex w-14 shrink-0 flex-col overflow-hidden border-r border-hairline bg-page transition-[width] duration-200 hover:w-56">
            <div className="flex h-14 shrink-0 items-center gap-3 border-b border-hairline px-4">
              <span className="font-display text-sm font-semibold text-ink-display">
                A
              </span>
              <span className="hidden whitespace-nowrap font-display text-sm font-semibold text-ink-display group-hover:inline">
                Acme
              </span>
            </div>
            <nav className="flex flex-1 flex-col gap-1 p-2 text-sm">
              <span className="flex items-center gap-3 rounded-md bg-accent-faded px-3 py-2 text-accent">
                <Home className="h-4 w-4 shrink-0" />
                <span className="hidden whitespace-nowrap group-hover:inline">
                  Dashboard
                </span>
              </span>
              <span className="flex items-center gap-3 rounded-md px-3 py-2 text-ink-body">
                <Folder className="h-4 w-4 shrink-0" />
                <span className="hidden whitespace-nowrap group-hover:inline">
                  Projects
                </span>
              </span>
              <span className="flex items-center gap-3 rounded-md px-3 py-2 text-ink-body">
                <Users className="h-4 w-4 shrink-0" />
                <span className="hidden whitespace-nowrap group-hover:inline">
                  Members
                </span>
              </span>
              <span className="flex items-center gap-3 rounded-md px-3 py-2 text-ink-body">
                <Settings className="h-4 w-4 shrink-0" />
                <span className="hidden whitespace-nowrap group-hover:inline">
                  Settings
                </span>
              </span>
            </nav>
            <div className="border-t border-hairline p-2">
              <span className="flex items-center gap-3 rounded-md px-3 py-2 text-ink-body">
                <User className="h-4 w-4 shrink-0" />
                <span className="hidden whitespace-nowrap group-hover:inline">
                  Account
                </span>
              </span>
            </div>
          </aside>
          <div className="flex flex-1 items-center justify-center bg-surface text-xs text-ink-muted">
            Hover the rail to expand
          </div>
        </div>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li>
            <strong>Width</strong>: <code>w-14</code> collapsed,{" "}
            <code>w-56</code> expanded. Adjust if you have more items.
          </li>
          <li>
            <strong>Icons</strong>: pull from lucide-react. Use{" "}
            <code>h-4 w-4 shrink-0</code> so they don't squeeze when the
            label appears.
          </li>
          <li>
            <strong>Always-expanded variant</strong>: drop the{" "}
            <code>group hover:w-56</code> classes and set a fixed{" "}
            <code>w-56</code> for screens where horizontal space isn't tight.
          </li>
          <li>
            Account/user affordance pins to the bottom via{" "}
            <code>border-t border-hairline</code> on its container.
          </li>
        </ul>
      }
    />
  );
}
