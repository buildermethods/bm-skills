import { SectionShell } from "@/components/design-system/SectionShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Ellipsis, Search } from "lucide-react";

const code = `{/* Basic — title row only */}
<div className="border-b border-hairline pb-6">
  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
    <div>
      <h1>Projects</h1>
      <p className="mt-1">Everything your team is working on.</p>
    </div>

    {/* Right-side slot — buttons, icons, search, links */}
    <div className="flex items-center gap-2">
      <button type="button" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-hairline text-ink-body hover:bg-surface" aria-label="Notifications">
        <Bell className="h-4 w-4" />
      </button>
      <Button variant="secondary">Filter</Button>
      <Button>New project</Button>
    </div>
  </div>
</div>

{/* Single-item view — page title with the standard item settings dropdown
    in the right slot. The Ellipsis trigger uses h-6 w-6 here (larger
    than the h-4 w-4 used in listing rows). */}
<div className="border-b border-hairline pb-6">
  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
    <div className="min-w-0 flex-1">
      <h1>Onboarding redesign</h1>
    </div>
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            aria-label="Settings"
            className="inline-flex cursor-pointer items-center justify-center text-ink-muted transition-colors hover:text-ink-body focus:outline-none focus-visible:text-ink-body"
          >
            <Ellipsis className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Deactivate</DropdownMenuItem>
          <DropdownMenuItem destructive>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
</div>

{/* With tabs — appends sub-navigation, results in two horizontal lines */}
<div>
  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between border-b border-hairline pb-6">
    <div>
      <h1>Acme Inc.</h1>
      <p className="mt-1">Workspace settings and billing.</p>
    </div>
    <div className="flex items-center gap-2">
      <Button>Save</Button>
    </div>
  </div>
  <nav className="flex items-end justify-between gap-4 border-b border-hairline">
    <div className="flex items-center gap-6">
      <a href="#" className="-mb-px cursor-pointer border-b-2 border-accent px-1 py-3 text-sm font-medium text-accent-display no-underline">Overview</a>
      <a href="#" className="-mb-px cursor-pointer border-b-2 border-transparent px-1 py-3 text-sm text-ink-body no-underline hover:text-ink-display">Members</a>
      <a href="#" className="-mb-px cursor-pointer border-b-2 border-transparent px-1 py-3 text-sm text-ink-body no-underline hover:text-ink-display">Billing</a>
    </div>
    <div className="flex items-center gap-3 pb-2">
      <a href="#" className="text-sm text-ink-muted no-underline hover:text-ink-display">View audit log</a>
    </div>
  </nav>
</div>`;

export function PageHeadersSection() {
  return (
    <SectionShell
      id="page-headers"
      title="Page headers"
      description={
        <>
          The titled banner at the top of a page's main content area. Holds
          the page title, optional supporting copy, and a flexible right-side
          slot for actions. Optionally appends sub-navigation tabs below the
          title row to produce a two-line header.
        </>
      }
      whenToUse={
        <ul>
          <li>Every primary page inside the shell.</li>
          <li>Right-side slot accepts buttons, icons, search inputs, links — use it for primary and secondary page actions.</li>
          <li>Use the "with tabs" variant when the page has sub-views (settings, profile, project sections).</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>Dialog/sheet contents — use DialogTitle instead.</li>
          <li>Dense list views with tightly-packed filters — use a thinner toolbar pattern.</li>
        </ul>
      }
      preview={
        <div className="space-y-10">
          <div>
            <p className="mb-2 text-xs uppercase tracking-wider text-ink-muted">
              Basic — with right-side actions
            </p>
            <div className="border-b border-hairline pb-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h1>Projects</h1>
                  <p className="mt-1">Everything your team is working on.</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-hairline text-ink-body hover:bg-surface"
                    aria-label="Notifications"
                  >
                    <Bell className="h-4 w-4" />
                  </button>
                  <Button variant="secondary">Filter</Button>
                  <Button>New project</Button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-wider text-ink-muted">
              With search in the right slot
            </p>
            <div className="border-b border-hairline pb-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h1>Members</h1>
                  <p className="mt-1">
                    Manage who has access to this workspace.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
                    <Input className="pl-8" placeholder="Search members" />
                  </div>
                  <Button>Invite</Button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-wider text-ink-muted">
              Single-item view — title with settings dropdown (the standard
              layout for viewing one item from a collection)
            </p>
            <div className="border-b border-hairline pb-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <h1>Onboarding redesign</h1>
                </div>
                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        type="button"
                        aria-label="Settings"
                        className="inline-flex cursor-pointer items-center justify-center text-ink-muted transition-colors hover:text-ink-body focus:outline-none focus-visible:text-ink-body"
                      >
                        <Ellipsis
                          className="h-6 w-6"
                          strokeWidth={1.5}
                        />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Deactivate</DropdownMenuItem>
                      <DropdownMenuItem destructive>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-wider text-ink-muted">
              With sub-navigation tabs (two horizontal lines)
            </p>
            <div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between border-b border-hairline pb-6">
                <div>
                  <h1>Acme Inc.</h1>
                  <p className="mt-1">Workspace settings and billing.</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button>Save</Button>
                </div>
              </div>
              <nav className="flex items-end justify-between gap-4 border-b border-hairline">
                <div className="flex items-center gap-6">
                  <span className="-mb-px cursor-pointer border-b-2 border-accent px-1 py-3 text-sm font-medium text-accent-display">
                    Overview
                  </span>
                  <span className="-mb-px cursor-pointer border-b-2 border-transparent px-1 py-3 text-sm text-ink-body">
                    Members
                  </span>
                  <span className="-mb-px cursor-pointer border-b-2 border-transparent px-1 py-3 text-sm text-ink-body">
                    Billing
                  </span>
                </div>
                <div className="flex items-center gap-3 pb-2">
                  <span className="text-sm text-ink-muted">View audit log</span>
                </div>
              </nav>
            </div>
          </div>
        </div>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li>
            <strong>Right-side slot</strong>: a flex row that accepts any
            mix of buttons, icon buttons, links, badges, or search inputs.
            Place primary CTA at the far right; secondary actions to its
            left.
          </li>
          <li>
            <strong>With breadcrumb</strong>: prepend a small breadcrumb row
            above the title.
          </li>
          <li>
            <strong>With tabs</strong>: append the Sub navigation pattern
            below the title row's <code>border-b</code> — the tabs row gets
            its own <code>border-b</code>, producing two horizontal lines
            with the active tab's underline merging into the lower one.
          </li>
          <li>
            <strong>Single-item view</strong>: when viewing one item from a
            collection, the right slot should hold our standard settings
            dropdown — see <a href="#dropdown-menu">Dropdown menu</a>. Use{" "}
            <code>h-6 w-6</code> on the <code>Ellipsis</code> here
            (one size larger than in listing rows) to match the page
            header's heavier visual weight.
          </li>
        </ul>
      }
    />
  );
}
