import { SectionShell } from "@/components/design-system/SectionShell";
import { Select } from "@/components/ui/select";

const code = `{/* Mobile (< md): full-width dropdown showing the active tab */}
<div className="md:hidden border-b border-hairline">
  <div className="py-2">
    <Select
      aria-label="Section"
      value={active}
      onChange={(e) => onChange(e.target.value)}
      className="w-full"
    >
      <option value="overview">Overview</option>
      <option value="activity">Activity</option>
      <option value="members">Members</option>
      <option value="billing">Billing</option>
    </Select>
  </div>
</div>

{/* Desktop (md+): horizontal tab strip */}
<nav className="hidden md:flex items-end justify-between gap-4 border-b border-hairline">
  <div className="flex items-center gap-6">
    <a href="#" className="-mb-px cursor-pointer border-b-2 border-accent px-1 py-3 text-sm font-medium text-accent-display no-underline">Overview</a>
    <a href="#" className="-mb-px cursor-pointer border-b-2 border-transparent px-1 py-3 text-sm text-ink-body no-underline hover:text-ink-display">Activity</a>
    <a href="#" className="-mb-px cursor-pointer border-b-2 border-transparent px-1 py-3 text-sm text-ink-body no-underline hover:text-ink-display">Members</a>
    <a href="#" className="-mb-px cursor-pointer border-b-2 border-transparent px-1 py-3 text-sm text-ink-body no-underline hover:text-ink-display">Billing</a>
  </div>

  {/* Optional right-side slot — secondary links, filters, search, etc. */}
  <div className="flex items-center gap-3 pb-2">
    <a href="#" className="text-sm text-ink-muted no-underline hover:text-ink-display">View all</a>
  </div>
</nav>`;

export function SubNavSection() {
  return (
    <SectionShell
      id="sub-navigation"
      title="Sub navigation"
      description={
        <>
          Horizontal tab list for navigating within a single section of the
          app (settings sub-pages, project tabs, profile sections). The
          active tab's underline merges with the row's bottom hairline. An
          optional right-side slot accepts secondary links, filters, search
          fields, or small actions. Below the <code>md</code> breakpoint,
          the tab strip collapses into a full-width dropdown that surfaces
          the active tab — tap to switch sections without horizontal
          scrolling or wrapped rows.
        </>
      }
      whenToUse={
        <ul>
          <li>When a page has 3+ sibling sub-views with stable structure.</li>
          <li>Append to a Page header (see the "with tabs" variant).</li>
          <li>Right-side slot is optional — leave empty when not needed.</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>For 1–2 sub-pages — just link them inline in the page body.</li>
          <li>For dynamic, list-of-things navigation — use a Listing.</li>
          <li>For top-level app destinations — those belong in main navigation.</li>
        </ul>
      }
      preview={
        <div className="space-y-8">
          <div>
            <p className="mb-2 text-xs uppercase tracking-wider text-ink-muted">
              Mobile (&lt; md) — full-width dropdown
            </p>
            <div className="max-w-sm border-b border-hairline">
              <div className="py-2">
                <Select aria-label="Section" defaultValue="overview" className="w-full">
                  <option value="overview">Overview</option>
                  <option value="activity">Activity</option>
                  <option value="members">Members</option>
                  <option value="billing">Billing</option>
                </Select>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-wider text-ink-muted">
              Desktop (md+) — tab strip
            </p>
            <nav className="flex items-end gap-6 border-b border-hairline">
              <span className="-mb-px cursor-pointer border-b-2 border-accent px-1 py-3 text-sm font-medium text-accent-display">
                Overview
              </span>
              <span className="-mb-px cursor-pointer border-b-2 border-transparent px-1 py-3 text-sm text-ink-body">
                Activity
              </span>
              <span className="-mb-px cursor-pointer border-b-2 border-transparent px-1 py-3 text-sm text-ink-body">
                Members
              </span>
              <span className="-mb-px cursor-pointer border-b-2 border-transparent px-1 py-3 text-sm text-ink-body">
                Billing
              </span>
            </nav>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-wider text-ink-muted">
              Desktop — with right-side content
            </p>
            <nav className="flex items-end justify-between gap-4 border-b border-hairline">
              <div className="flex items-center gap-6">
                <span className="-mb-px cursor-pointer border-b-2 border-accent px-1 py-3 text-sm font-medium text-accent-display">
                  Overview
                </span>
                <span className="-mb-px cursor-pointer border-b-2 border-transparent px-1 py-3 text-sm text-ink-body">
                  Activity
                </span>
                <span className="-mb-px cursor-pointer border-b-2 border-transparent px-1 py-3 text-sm text-ink-body">
                  Members
                </span>
              </div>
              <div className="flex items-center gap-3 pb-2">
                <span className="text-sm text-ink-muted">View all</span>
              </div>
            </nav>
          </div>
        </div>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li>
            <strong>Mobile breakpoint</strong>: tabs collapse into a
            full-width <code>&lt;Select&gt;</code> below the <code>md</code>{" "}
            breakpoint. Show the dropdown with{" "}
            <code>md:hidden</code> and the tab strip with{" "}
            <code>hidden md:flex</code>. The dropdown's current value is the
            active tab so users can see and change sections without
            horizontal scrolling.
          </li>
          <li>
            <strong>Active state</strong>:{" "}
            <code>border-b-2 border-accent text-accent-display font-medium</code>{" "}
            on the active tab; <code>-mb-px</code> overlaps the parent's
            hairline so the underlines merge into one line.
          </li>
          <li>
            <strong>Right-side slot</strong>: any flex children — links,
            filters, search fields, small icon buttons. Use{" "}
            <code>pb-2</code> to keep them visually centered against the tab
            text baseline. On mobile, stack right-side content above the
            dropdown trigger (use <code>flex flex-col gap-2</code> on the
            wrapper) so the dropdown remains truly full-width.
          </li>
          <li>
            <strong>Pair with Page header</strong>: drop the parent{" "}
            <code>border-b</code> off the page header, then place this nav
            beneath it. Result: two horizontal lines.
          </li>
          <li>
            <strong>Rich dropdown variant</strong>: when tabs carry icons or
            status indicators that wouldn't survive a native{" "}
            <code>&lt;select&gt;</code>, swap the <code>Select</code> for a{" "}
            <code>DropdownMenu</code> with a full-width trigger and
            matching <code>w-[var(--radix-dropdown-menu-trigger-width)]</code>{" "}
            content width.
          </li>
        </ul>
      }
    />
  );
}
