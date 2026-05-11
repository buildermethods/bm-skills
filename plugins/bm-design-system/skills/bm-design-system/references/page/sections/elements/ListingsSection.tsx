import { SectionShell } from "@/components/design-system/SectionShell";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronRight, Ellipsis, Folder } from "lucide-react";

const code = `<ul className="divide-y divide-hairline overflow-hidden rounded-md border border-hairline bg-page">
  {items.map((item) => (
    <li key={item.id}>
      <div className="flex items-center gap-3 px-4 py-3 hover:bg-surface">
        <a href={item.href} className="flex min-w-0 flex-1 items-center gap-3 no-underline">
          <Folder className="h-4 w-4 text-ink-muted" />
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-medium text-ink-display">{item.title}</div>
            <div className="truncate text-xs text-ink-muted">{item.subtitle}</div>
          </div>
          <Badge tone="muted">{item.status}</Badge>
        </a>
        {/* Standard item settings dropdown — see Dropdown menu section. */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              aria-label="Settings"
              className="inline-flex cursor-pointer items-center justify-center text-ink-muted transition-colors hover:text-ink-body focus:outline-none focus-visible:text-ink-body"
            >
              <Ellipsis className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Deactivate</DropdownMenuItem>
            <DropdownMenuItem destructive>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </li>
  ))}
</ul>`;

const ITEMS = [
  { id: 1, title: "Onboarding redesign", subtitle: "Updated 2h ago · Marie", status: "Active" },
  { id: 2, title: "Q2 marketing rollout", subtitle: "Updated yesterday · Jordan", status: "Active" },
  { id: 3, title: "API v2 migration", subtitle: "Updated 3d ago · Priya", status: "Draft" },
  { id: 4, title: "Mobile launch checklist", subtitle: "Archived last week", status: "Archived" },
];

function DemoSettingsMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="Settings"
          className="inline-flex cursor-pointer items-center justify-center text-ink-muted transition-colors hover:text-ink-body focus:outline-none focus-visible:text-ink-body"
        >
          <Ellipsis className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Deactivate</DropdownMenuItem>
        <DropdownMenuItem destructive>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ListingsSection() {
  return (
    <SectionShell
      id="listings"
      title="Listings"
      description={
        <>
          A vertical list of selectable rows — the workhorse of dashboards
          and resource indexes. Each row composes an icon, a title, supporting
          metadata, an optional Badge, a chevron affordance, and (for items
          in a collection) a standard settings dropdown.
        </>
      }
      whenToUse={
        <ul>
          <li>Lists of resources (projects, files, members).</li>
          <li>Search results, recent activity feeds.</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>Dense, multi-column tabular data — use a table.</li>
          <li>Inline option lists in dropdowns — use a menu primitive.</li>
        </ul>
      }
      preview={
        <ul className="divide-y divide-hairline overflow-hidden rounded-md border border-hairline bg-page">
          {ITEMS.map((item) => (
            <li key={item.id}>
              <div className="flex items-center gap-3 px-4 py-3 hover:bg-surface">
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <Folder className="h-4 w-4 text-ink-muted" />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-medium text-ink-display">
                      {item.title}
                    </div>
                    <div className="truncate text-xs text-ink-muted">
                      {item.subtitle}
                    </div>
                  </div>
                  <Badge tone={item.status === "Active" ? "accent" : "muted"}>
                    {item.status}
                  </Badge>
                </div>
                <DemoSettingsMenu />
              </div>
            </li>
          ))}
        </ul>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li>Wrap rows in <code>&lt;a&gt;</code> for navigation, or <code>&lt;button&gt;</code> for in-page selection.</li>
          <li>Drop the chevron when the row is non-navigable.</li>
          <li>Use <code>truncate</code> on title and subtitle to prevent overflow.</li>
          <li>
            <strong>Settings dropdown by default.</strong> When listings render
            items in a collection (the typical case), include our standard
            settings dropdown at the right edge of each row — see{" "}
            <a href="#dropdown-menu">Dropdown menu</a> for the trigger pattern
            (bare <code>Ellipsis</code>, no border).
          </li>
        </ul>
      }
    />
  );
}
