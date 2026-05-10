import * as React from "react";
import { SectionShell } from "@/components/design-system/SectionShell";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  ChevronsLeft,
  ChevronsRight,
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
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  ChevronsLeft, ChevronsRight, Folder, Home, LogOut, Menu,
  Settings, User, Users, X,
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
      {/* Desktop rail — hidden below lg */}
      <aside
        className={cn(
          "sticky top-0 hidden h-screen shrink-0 flex-col border-r border-hairline bg-page transition-[width] duration-200 lg:flex",
          open ? "w-56" : "w-14",
        )}
      >
        <RailBody open={open} onToggle={() => setOpen(!open)} />
      </aside>

      {/* Mobile drawer — slides in from the left, dismisses on overlay click */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-ink-display/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
          <aside className="absolute left-0 top-0 flex h-full w-64 flex-col bg-page shadow-xl">
            <div className="flex h-14 shrink-0 items-center justify-between border-b border-hairline px-4">
              <span className="font-display text-sm font-semibold text-ink-display">Acme</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-ink-muted hover:bg-surface hover:text-ink-display"
                aria-label="Close navigation"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <RailNav open onClose={() => setMobileOpen(false)} />
            <div className="border-t border-hairline p-2">
              <UserMenu open />
            </div>
          </aside>
        </div>
      )}

      {/* Mobile hamburger — fixed to the top-right corner of the viewport */}
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="fixed right-3 top-3 z-30 inline-flex h-9 w-9 items-center justify-center rounded-md border border-hairline bg-page text-ink-body hover:bg-surface lg:hidden"
        aria-label="Open navigation"
      >
        <Menu className="h-4 w-4" />
      </button>
    </>
  );
}

function RailBody({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <>
      {/* Brand row — when expanded, the collapse chevron sits next to the brand */}
      <div
        className={cn(
          "flex h-14 shrink-0 items-center gap-3 border-b border-hairline px-3",
          open ? "justify-between" : "justify-center",
        )}
      >
        <a
          href="/"
          className="flex min-w-0 items-center gap-2 text-ink-display no-underline"
          aria-label="Home"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-accent-faded font-display text-sm font-semibold text-accent">
            A
          </span>
          {open && (
            <span className="truncate font-display text-sm font-semibold">
              Acme
            </span>
          )}
        </a>
        {open && (
          <button
            type="button"
            onClick={onToggle}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-ink-muted hover:bg-surface hover:text-ink-display"
            aria-label="Collapse sidebar"
          >
            <ChevronsLeft className="h-4 w-4" />
          </button>
        )}
      </div>

      <RailNav open={open} />

      {/* Expand chevron — only renders when collapsed, sits just above the user menu */}
      {!open && (
        <div className="border-t border-hairline p-2">
          <button
            type="button"
            onClick={onToggle}
            className="flex h-9 w-full items-center justify-center rounded-md text-ink-muted hover:bg-surface hover:text-ink-display"
            aria-label="Expand sidebar"
          >
            <ChevronsRight className="h-4 w-4" />
          </button>
        </div>
      )}

      <div className="border-t border-hairline p-2">
        <UserMenu open={open} />
      </div>
    </>
  );
}

function RailNav({ open, onClose }: { open: boolean; onClose?: () => void }) {
  return (
    <nav
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-1 p-2 text-sm",
        open ? "overflow-x-hidden overflow-y-auto" : "overflow-visible",
      )}
    >
      <NavItem href="/dashboard" icon={Home}    label="Dashboard" active open={open} onClick={onClose} />
      <NavItem href="/projects"  icon={Folder}  label="Projects"        open={open} onClick={onClose} />
      <NavItem href="/members"   icon={Users}   label="Members"         open={open} onClick={onClose} />
      <NavItem href="/settings"  icon={Settings} label="Settings"       open={open} onClick={onClose} />
    </nav>
  );
}

function NavItem({ href, icon: Icon, label, active, open, onClick }: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
  open: boolean;
  onClick?: () => void;
}) {
  return (
    <div className="group/nav-item relative">
      <a
        href={href}
        onClick={onClick}
        aria-label={open ? undefined : label}
        className={cn(
          "flex items-center gap-3 rounded-md no-underline",
          open ? "px-3 py-2" : "mx-auto h-9 w-9 justify-center",
          active
            ? "bg-accent-faded text-accent-display"
            : "text-ink-body hover:bg-surface hover:text-ink-display",
        )}
      >
        <Icon className="h-4 w-4 shrink-0" />
        {open && <span className="truncate">{label}</span>}
      </a>
      {!open && (
        // Floating label — pops outside the rail on hover, doesn't expand it
        <span
          role="tooltip"
          className="pointer-events-none absolute left-full top-1/2 z-50 ml-[13px] -translate-y-1/2 whitespace-nowrap rounded-md border border-hairline bg-page px-2 py-1 text-xs font-medium text-ink-display opacity-0 shadow-sm transition-opacity group-hover/nav-item:opacity-100"
        >
          {label}
        </span>
      )}
    </div>
  );
}

function UserMenu({ open }: { open: boolean }) {
  const email = "you@example.com";
  const initial = email.charAt(0).toUpperCase();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label={open ? undefined : email}
          className={cn(
            "group/user relative flex w-full items-center gap-3 rounded-md text-left text-ink-body hover:bg-surface hover:text-ink-display focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
            open ? "px-2 py-2" : "h-10 justify-center",
          )}
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-faded text-xs font-semibold text-accent">
            {initial}
          </span>
          {open ? (
            <span className="min-w-0 flex-1 truncate text-sm">{email}</span>
          ) : (
            <span className="pointer-events-none absolute left-full top-1/2 z-50 ml-2 -translate-y-1/2 whitespace-nowrap rounded-md border border-hairline bg-page px-2 py-1 text-xs font-medium text-ink-display opacity-0 shadow-md transition-opacity group-hover/user:opacity-100">
              {email}
            </span>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="top" align="start" className="w-56">
        <DropdownMenuLabel className="normal-case tracking-normal">
          <span className="block text-[10px] uppercase tracking-wider text-ink-muted">Signed in as</span>
          <span className="block truncate text-xs font-medium text-ink-display">{email}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem><User /> Profile</DropdownMenuItem>
        <DropdownMenuItem><Settings /> Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="px-2 py-2">
          <ThemeToggle block />
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem><LogOut /> Sign out</DropdownMenuItem>
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
  return (
    <div className="group/nav-item relative">
      <span
        className={cn(
          "flex items-center gap-3 rounded-md text-sm",
          open ? "px-3 py-2" : "mx-auto h-9 w-9 justify-center",
          active
            ? "bg-accent-faded text-accent-display"
            : "text-ink-body hover:bg-surface hover:text-ink-display",
        )}
      >
        <Icon className="h-4 w-4 shrink-0" />
        {open && <span className="whitespace-nowrap">{label}</span>}
      </span>
      {!open && (
        <span className="pointer-events-none absolute left-full top-1/2 z-50 ml-2 -translate-y-1/2 whitespace-nowrap rounded-md border border-hairline bg-page px-2 py-1 text-xs font-medium text-ink-display opacity-0 shadow-md transition-opacity group-hover/nav-item:opacity-100">
          {label}
        </span>
      )}
    </div>
  );
}

function PreviewUserMenu({ open }: { open: boolean }) {
  const email = "you@example.com";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label={open ? undefined : email}
          className={cn(
            "group/user relative flex w-full cursor-pointer items-center gap-3 rounded-md text-left text-ink-body hover:bg-surface hover:text-ink-display focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
            open ? "px-2 py-2" : "h-10 justify-center",
          )}
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-faded text-xs font-semibold text-accent">
            Y
          </span>
          {open ? (
            <span className="min-w-0 flex-1 truncate text-sm">{email}</span>
          ) : (
            <span className="pointer-events-none absolute left-full top-1/2 z-50 ml-2 -translate-y-1/2 whitespace-nowrap rounded-md border border-hairline bg-page px-2 py-1 text-xs font-medium text-ink-display opacity-0 shadow-md transition-opacity group-hover/user:opacity-100">
              {email}
            </span>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="top" align="start" className="w-56">
        <DropdownMenuLabel className="normal-case tracking-normal">
          <span className="block text-[10px] uppercase tracking-wider text-ink-muted">
            Signed in as
          </span>
          <span className="block truncate text-xs font-medium text-ink-display">
            {email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User /> Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings /> Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="px-2 py-2">
          <ThemeToggle block />
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
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
        <div
          className={cn(
            "flex h-14 shrink-0 items-center gap-3 border-b border-hairline px-3",
            open ? "justify-between" : "justify-center",
          )}
        >
          <span className="flex min-w-0 items-center gap-2 text-ink-display">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-accent-faded font-display text-sm font-semibold text-accent">
              A
            </span>
            {open && (
              <span className="truncate font-display text-sm font-semibold">
                Acme
              </span>
            )}
          </span>
          {open && (
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-md text-ink-muted hover:bg-surface hover:text-ink-display"
              aria-label="Collapse sidebar"
            >
              <ChevronsLeft className="h-4 w-4" />
            </button>
          )}
        </div>
        <nav className="flex flex-1 flex-col gap-1 p-2 text-sm">
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
              aria-label="Expand sidebar"
            >
              <ChevronsRight className="h-4 w-4" />
            </button>
          </div>
        )}
        <div className="border-t border-hairline p-2">
          <PreviewUserMenu open={open} />
        </div>
      </aside>
      <div className="flex flex-1 items-center justify-center bg-surface px-6 text-center text-xs text-ink-muted">
        {open
          ? "When expanded, the collapse chevron sits next to the brand. State persists to localStorage."
          : "When collapsed, hover an icon to pop a tooltip-style label outside the rail."}
      </div>
    </div>
  );
}

function MobilePreview() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative mx-auto h-96 w-72 overflow-hidden rounded-2xl border border-hairline bg-page shadow-sm">
      {/* Fake page surface with hamburger fixed in the top-right corner */}
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
          <aside className="absolute left-0 top-0 flex h-full w-64 flex-col bg-page shadow-xl">
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
            <nav className="flex flex-1 flex-col gap-1 p-2 text-sm">
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
          A vertical rail at the left edge of the shell. The rail has two
          fixed widths — collapsed (<code>w-14</code>, icons only) and
          expanded (<code>w-56</code>, icons plus labels) — and a chevron
          toggle switches between them. When expanded, the toggle sits in
          the brand row at the top; when collapsed, an expand chevron sits
          just above the user menu at the bottom of the rail. The choice is persisted to{" "}
          <code>localStorage</code>. When collapsed, hovering an item pops a
          tooltip-style label out to the right of the rail without resizing
          it. A user-account dropdown above the bottom edge holds a
          signed-in-as label, Profile / Settings, the theme toggle, and Sign
          out — and shows the avatar plus email when expanded, avatar only
          when collapsed. On screens narrower than <code>lg</code>, the rail
          is hidden in favor of a hamburger button fixed to the top-right
          corner that opens the same nav as a slide-in drawer.
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
              Mobile — hamburger fixed to the top-right corner opens a drawer
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
            <code>localStorage</code> under <code>main-nav-open</code>{" "}
            (rename per app). Hydrate inside <code>useEffect</code> so SSR
            stays deterministic.
          </li>
          <li>
            <strong>Toggle position</strong>: the collapse chevron lives in
            the brand row when the rail is expanded (next to the brand on
            the right). When the rail is collapsed there's no room for it
            there, so the expand chevron sits just above the user menu at
            the bottom of the rail.
          </li>
          <li>
            <strong>Active item highlight (collapsed)</strong>: each item is
            a 36px square pill (<code>h-9 w-9</code>) centered with{" "}
            <code>mx-auto</code> inside the 40px-wide nav column — keeps the{" "}
            <code>bg-accent-faded</code> highlight as a square rather than a
            full-width strip.
          </li>
          <li>
            <strong>Floating labels (collapsed)</strong>: each item is its
            own <code>group/nav-item</code> with an{" "}
            <code>absolute left-full</code> tooltip-style label. The label
            is <code>pointer-events-none</code> and only opacity-toggles, so
            the rail width is never disturbed.
          </li>
          <li>
            <strong>Account menu</strong>: a Radix{" "}
            <code>DropdownMenu</code> with{" "}
            <code>side="top" align="start"</code> so it slides up from the
            bottom-left corner. Contents (top to bottom): signed-in-as
            label, Profile, Settings, separator, the{" "}
            <code>&lt;ThemeToggle block /&gt;</code> primitive, separator,
            Sign out. Trigger shows avatar + email when expanded, avatar
            only when collapsed.
          </li>
          <li>
            <strong>Mobile</strong>: hide the rail with{" "}
            <code>hidden lg:flex</code>, render a hamburger fixed to{" "}
            <code>right-3 top-3</code> with <code>z-30</code> and{" "}
            <code>bg-page</code> so it stays readable while the page
            scrolls. The drawer is <code>w-64</code> with its own brand row
            and close button at the top.
          </li>
        </ul>
      }
    />
  );
}
