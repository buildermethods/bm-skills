import * as React from "react";
import { SectionShell } from "@/components/design-system/SectionShell";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronsLeft,
  ChevronsRight,
  ChevronUp,
  Folder,
  Home,
  LogOut,
  Menu,
  Settings,
  User,
  Users,
  X,
} from "lucide-react";

const STORAGE_KEY = "bm-ds-main-nav-open";

const code = `// app/components/MainNav.tsx
"use client";
import * as React from "react";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronsLeft, ChevronsRight, ChevronUp, Folder, Home,
  LogOut, Menu, Settings, User, Users, X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "main-nav-open";

function useMainNavOpen() {
  // SSR-safe: default to true, then hydrate from localStorage on mount.
  const [open, setOpen] = React.useState(true);
  React.useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored !== null) setOpen(stored === "true");
  }, []);
  React.useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, String(open));
  }, [open]);
  return [open, setOpen] as const;
}

export function MainNav() {
  const [open, setOpen] = useMainNavOpen();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      {/* Mobile hamburger — pin to the top-right of your page header on < md */}
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="fixed right-4 top-4 z-30 inline-flex h-9 w-9 items-center justify-center rounded-md border border-hairline bg-page text-ink-body md:hidden"
        aria-label="Open navigation"
      >
        <Menu className="h-4 w-4" />
      </button>

      {/* Desktop rail — fixed-width, hidden on < md */}
      <aside
        className={cn(
          "hidden shrink-0 flex-col border-r border-hairline bg-page transition-[width] duration-200 md:flex",
          open ? "w-56" : "w-14",
        )}
      >
        <RailContents
          open={open}
          onToggle={() => setOpen(!open)}
        />
      </aside>

      {/* Mobile drawer — slides in from the left, dismisses on overlay click */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-ink-display/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute left-0 top-0 flex h-full w-64 flex-col border-r border-hairline bg-page shadow-xl">
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-md text-ink-muted hover:bg-surface"
              aria-label="Close navigation"
            >
              <X className="h-4 w-4" />
            </button>
            <RailContents open onToggle={undefined} />
          </aside>
        </div>
      )}
    </>
  );
}

function RailContents({ open, onToggle }: {
  open: boolean;
  onToggle?: () => void;
}) {
  return (
    <>
      <a href="/" className="flex h-14 shrink-0 items-center gap-3 border-b border-hairline px-4 text-ink-display no-underline">
        <span className="font-display text-sm font-semibold">A</span>
        {open && <span className="font-display text-sm font-semibold">Acme</span>}
      </a>
      <nav className="flex flex-1 flex-col gap-1 p-2">
        <NavItem href="/dashboard" icon={Home} label="Dashboard" active open={open} />
        <NavItem href="/projects" icon={Folder} label="Projects" open={open} />
        <NavItem href="/members" icon={Users} label="Members" open={open} />
        <NavItem href="/settings" icon={Settings} label="Settings" open={open} />
      </nav>
      {/* Bottom stack — when collapsed, the expand toggle sits ABOVE the
         account button so the chevron is the first thing the cursor reaches
         on its way down the rail. When expanded, the larger account row sits
         on top and the collapse chevron tucks underneath. */}
      {onToggle && !open && (
        <div className="border-t border-hairline p-2">
          <button
            type="button"
            onClick={onToggle}
            className="flex h-9 w-full cursor-pointer items-center justify-center rounded-md text-ink-muted hover:bg-surface hover:text-ink-display"
            aria-label="Expand navigation"
          >
            <ChevronsRight className="h-4 w-4" />
          </button>
        </div>
      )}
      <div className="border-t border-hairline p-2">
        <UserMenu open={open} />
      </div>
      {onToggle && open && (
        <div className="border-t border-hairline p-2">
          <button
            type="button"
            onClick={onToggle}
            className="flex h-9 w-full cursor-pointer items-center justify-center rounded-md text-ink-muted hover:bg-surface hover:text-ink-display"
            aria-label="Collapse navigation"
          >
            <ChevronsLeft className="h-4 w-4" />
          </button>
        </div>
      )}
    </>
  );
}

function NavItem({ href, icon: Icon, label, active, open }: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
  open: boolean;
}) {
  const cls = cn(
    "group/nav-item relative flex items-center rounded-md text-sm no-underline",
    open ? "gap-3 px-3 py-2" : "h-9 justify-center",
    active
      ? "bg-accent-faded text-accent"
      : "text-ink-body hover:bg-surface hover:text-ink-display",
  );
  return (
    <a href={href} className={cls}>
      <Icon className="h-4 w-4 shrink-0" />
      {open ? (
        <span className="whitespace-nowrap">{label}</span>
      ) : (
        // Floating label — pops outside the rail on hover, doesn't expand it
        <span className="pointer-events-none absolute left-full top-1/2 z-50 ml-2 -translate-y-1/2 whitespace-nowrap rounded-md border border-hairline bg-page px-2 py-1 text-xs font-medium text-ink-display opacity-0 shadow-md transition-opacity group-hover/nav-item:opacity-100 group-focus-within/nav-item:opacity-100">
          {label}
        </span>
      )}
    </a>
  );
}

function UserMenu({ open }: { open: boolean }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "group/user relative flex w-full cursor-pointer items-center rounded-md text-sm text-ink-body hover:bg-surface hover:text-ink-display",
            open ? "gap-3 px-2 py-1.5" : "h-9 justify-center",
          )}
          aria-label="Account menu"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-faded text-xs font-semibold text-accent">
            BC
          </span>
          {open ? (
            <>
              <span className="min-w-0 flex-1 truncate text-left">bc@test.com</span>
              <ChevronUp className="h-4 w-4 shrink-0 opacity-60" />
            </>
          ) : (
            <span className="pointer-events-none absolute left-full top-1/2 z-50 ml-2 -translate-y-1/2 whitespace-nowrap rounded-md border border-hairline bg-page px-2 py-1 text-xs font-medium text-ink-display opacity-0 shadow-md transition-opacity group-hover/user:opacity-100">
              Account
            </span>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="top" align="start" sideOffset={8} className="w-56">
        <DropdownMenuItem><User /> Profile</DropdownMenuItem>
        <DropdownMenuItem><Settings /> Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem destructive><LogOut /> Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`;

function useMainNavOpen() {
  const [open, setOpen] = React.useState<boolean>(true);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored !== null) setOpen(stored === "true");
  }, []);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, String(open));
  }, [open]);
  return [open, setOpen] as const;
}

function PreviewNavItem({
  icon: Icon,
  label,
  active,
  open,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
  open: boolean;
}) {
  const cls = cn(
    "group/nav-item relative flex items-center rounded-md text-sm",
    open ? "gap-3 px-3 py-2" : "h-9 justify-center",
    active
      ? "bg-accent-faded text-accent"
      : "text-ink-body hover:bg-surface hover:text-ink-display",
  );
  return (
    <span className={cls}>
      <Icon className="h-4 w-4 shrink-0" />
      {open ? (
        <span className="whitespace-nowrap">{label}</span>
      ) : (
        <span className="pointer-events-none absolute left-full top-1/2 z-50 ml-2 -translate-y-1/2 whitespace-nowrap rounded-md border border-hairline bg-page px-2 py-1 text-xs font-medium text-ink-display opacity-0 shadow-md transition-opacity group-hover/nav-item:opacity-100">
          {label}
        </span>
      )}
    </span>
  );
}

function PreviewUserMenu({ open }: { open: boolean }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "group/user relative flex w-full cursor-pointer items-center rounded-md text-sm text-ink-body hover:bg-surface hover:text-ink-display",
            open ? "gap-3 px-2 py-1.5" : "h-9 justify-center",
          )}
          aria-label="Account menu"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-faded text-xs font-semibold text-accent">
            BC
          </span>
          {open ? (
            <>
              <span className="min-w-0 flex-1 truncate text-left">bc@test.com</span>
              <ChevronUp className="h-4 w-4 shrink-0 opacity-60" />
            </>
          ) : (
            <span className="pointer-events-none absolute left-full top-1/2 z-50 ml-2 -translate-y-1/2 whitespace-nowrap rounded-md border border-hairline bg-page px-2 py-1 text-xs font-medium text-ink-display opacity-0 shadow-md transition-opacity group-hover/user:opacity-100">
              Account
            </span>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="top" align="start" sideOffset={8} className="w-56">
        <DropdownMenuItem>
          <User /> Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings /> Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem destructive>
          <LogOut /> Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DesktopPreview() {
  const [open, setOpen] = useMainNavOpen();
  return (
    <div className="relative flex h-96 overflow-hidden rounded-md border border-hairline">
      <aside
        className={cn(
          "flex shrink-0 flex-col border-r border-hairline bg-page transition-[width] duration-200",
          open ? "w-56" : "w-14",
        )}
      >
        <div className="flex h-14 shrink-0 items-center gap-3 border-b border-hairline px-4">
          <span className="font-display text-sm font-semibold text-ink-display">
            A
          </span>
          {open && (
            <span className="font-display text-sm font-semibold text-ink-display">
              Acme
            </span>
          )}
        </div>
        <nav className="flex flex-1 flex-col gap-1 p-2">
          <PreviewNavItem icon={Home} label="Dashboard" active open={open} />
          <PreviewNavItem icon={Folder} label="Projects" open={open} />
          <PreviewNavItem icon={Users} label="Members" open={open} />
          <PreviewNavItem icon={Settings} label="Settings" open={open} />
        </nav>
        {!open && (
          <div className="border-t border-hairline p-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-9 w-full cursor-pointer items-center justify-center rounded-md text-ink-muted hover:bg-surface hover:text-ink-display"
              aria-label="Expand navigation"
            >
              <ChevronsRight className="h-4 w-4" />
            </button>
          </div>
        )}
        <div className="border-t border-hairline p-2">
          <PreviewUserMenu open={open} />
        </div>
        {open && (
          <div className="border-t border-hairline p-2">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-9 w-full cursor-pointer items-center justify-center rounded-md text-ink-muted hover:bg-surface hover:text-ink-display"
              aria-label="Collapse navigation"
            >
              <ChevronsLeft className="h-4 w-4" />
            </button>
          </div>
        )}
      </aside>
      <div className="flex flex-1 items-center justify-center bg-surface px-6 text-center text-xs text-ink-muted">
        {open
          ? "Click the chevron at the bottom of the rail to collapse it. The state persists to localStorage."
          : "Hover an icon — its label pops out beside the rail without expanding it."}
      </div>
    </div>
  );
}

function MobilePreview() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative mx-auto h-96 w-72 overflow-hidden rounded-2xl border border-hairline bg-page shadow-sm">
      {/* Fake page header with hamburger pinned right */}
      <div className="flex h-14 items-center justify-between border-b border-hairline px-4">
        <span className="font-display text-sm font-semibold text-ink-display">
          Acme
        </span>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-hairline text-ink-body hover:bg-surface"
          aria-label="Open navigation"
        >
          <Menu className="h-4 w-4" />
        </button>
      </div>
      <div className="flex h-[calc(100%-3.5rem)] items-center justify-center bg-surface text-xs text-ink-muted">
        Tap the menu to open the drawer
      </div>

      {open && (
        <div className="absolute inset-0 z-40">
          <div
            className="absolute inset-0 bg-ink-display/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute left-0 top-0 flex h-full w-56 flex-col border-r border-hairline bg-page shadow-xl">
            <div className="flex h-14 shrink-0 items-center justify-between border-b border-hairline px-4">
              <span className="font-display text-sm font-semibold text-ink-display">
                Acme
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-ink-muted hover:bg-surface hover:text-ink-display"
                aria-label="Close navigation"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 p-2">
              <PreviewNavItem icon={Home} label="Dashboard" active open />
              <PreviewNavItem icon={Folder} label="Projects" open />
              <PreviewNavItem icon={Users} label="Members" open />
              <PreviewNavItem icon={Settings} label="Settings" open />
            </nav>
            <div className="border-t border-hairline p-2">
              <PreviewUserMenu open />
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

export function MainNavSection() {
  return (
    <SectionShell
      id="main-navigation"
      title="Main navigation"
      description={
        <>
          A vertical rail at the left edge of the shell. The rail width is
          fixed in either state — never animated by hover. A toggle at the
          bottom switches between collapsed (icons only) and expanded (icons
          plus labels); the choice is remembered in <code>localStorage</code>.
          When collapsed, hovering an item pops its label out to the right of
          the rail without resizing the rail itself. A user-account dropdown
          pinned just above the toggle opens upward. On screens narrower than{" "}
          <code>md</code>, the rail is replaced by a hamburger button in the
          page header that opens the same nav as a slide-in drawer.
        </>
      }
      whenToUse={
        <ul>
          <li>One per shell. Always present and sticky on desktop.</li>
          <li>Top-level destinations only — secondary items belong in sub-nav tabs.</li>
          <li>4–8 items max; beyond that, group with hairline separators.</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>For deep, multi-level menus — use sub-nav tabs or a command palette.</li>
          <li>Marketing/landing pages — those use a horizontal top nav.</li>
        </ul>
      }
      preview={
        <div className="space-y-10">
          <div>
            <p className="mb-2 text-xs uppercase tracking-wider text-ink-muted">
              Desktop — toggle between collapsed and expanded
            </p>
            <DesktopPreview />
          </div>
          <div>
            <p className="mb-2 text-xs uppercase tracking-wider text-ink-muted">
              Mobile — hamburger in the top-right opens a drawer
            </p>
            <MobilePreview />
          </div>
        </div>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li>
            <strong>Width</strong>: <code>w-14</code> collapsed,{" "}
            <code>w-56</code> expanded. Both are fixed; only the user-toggle
            changes between them.
          </li>
          <li>
            <strong>Persistence</strong>: open/closed state is written to{" "}
            <code>localStorage</code> under{" "}
            <code>main-nav-open</code> (rename the key per app). Hydrate
            inside <code>useEffect</code> to stay SSR-safe.
          </li>
          <li>
            <strong>Floating labels (collapsed)</strong>: each item is its own{" "}
            <code>group/nav-item</code> with an{" "}
            <code>absolute left-full</code> tooltip-style label. The label is{" "}
            <code>pointer-events-none</code> and only opacity-toggles, so the
            rail width is never disturbed.
          </li>
          <li>
            <strong>Account menu</strong>: a Radix{" "}
            <code>DropdownMenu</code> with{" "}
            <code>side="top" align="start"</code> so it slides up from the
            bottom-left corner. Trigger shows an avatar plus email when
            expanded, avatar only when collapsed.
          </li>
          <li>
            <strong>Mobile</strong>: hide the rail with{" "}
            <code>hidden md:flex</code>, render a hamburger pinned to the
            top-right (or in your page header's right-side slot) that toggles
            a fixed-position drawer overlay containing the same{" "}
            <code>RailContents</code>.
          </li>
        </ul>
      }
    />
  );
}
