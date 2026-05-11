import { SectionShell } from "@/components/design-system/SectionShell";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Ellipsis,
  LogOut,
  Settings,
  Trash2,
  User,
  Users,
} from "lucide-react";

const code = `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Ellipsis, LogOut, Settings, Trash2, User, Users } from "lucide-react";

{/* Button trigger */}
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="secondary">
      Account <ChevronDown className="h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem><User /> Profile</DropdownMenuItem>
    <DropdownMenuItem><Users /> Team</DropdownMenuItem>
    <DropdownMenuItem><Settings /> Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem><LogOut /> Sign out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

{/* Item settings dropdown — the standard pattern for row-level
    "edit / archive / delete" overflow menus. Bare button (no border or
    background), Ellipsis icon at strokeWidth 1.5, ink-muted with
    hover:ink-body. */}
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
    <DropdownMenuItem destructive><Trash2 /> Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`;

export function DropdownMenuSection() {
  return (
    <SectionShell
      id="dropdown-menu"
      title="Dropdown menu"
      description={
        <>
          A floating menu attached to a trigger element. Trigger can be
          any button or icon. Items support leading icons; horizontal
          dividers (<code>DropdownMenuSeparator</code>) group related items.
          Built on Radix UI primitives — keyboard nav and focus management
          come for free.
        </>
      }
      whenToUse={
        <ul>
          <li>Account / user menus pinned to a header or rail.</li>
          <li>Row-level "more actions" overflow menus on listings.</li>
          <li>Filter / sort / view-mode pickers on dense screens.</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>For form selection — use <code>Select</code>.</li>
          <li>For navigation between top-level destinations — use main navigation.</li>
          <li>For long, scrollable lists — use a <code>Dialog</code> or command palette.</li>
        </ul>
      }
      preview={
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary">
                  Account <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <User /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Users /> Team
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings /> Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut /> Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="text-xs text-ink-muted">Button trigger</span>
          </div>

          <div className="flex flex-col items-center gap-2">
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
                <DropdownMenuItem destructive>
                  <Trash2 /> Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="text-xs text-ink-muted">
              Item settings dropdown
            </span>
          </div>
        </div>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li>
            <strong>Trigger</strong>: wrap any element with{" "}
            <code>DropdownMenuTrigger asChild</code>. Common triggers — a{" "}
            <code>Button</code>, an icon-only button, a label/badge.
          </li>
          <li>
            <strong>Items with icons</strong>: pass a lucide icon as the
            first child of <code>DropdownMenuItem</code>. The primitive
            auto-sizes (<code>h-4 w-4</code>) and tones it to{" "}
            <code>text-ink-muted</code>.
          </li>
          <li>
            <strong>Dividers</strong>: drop in{" "}
            <code>&lt;DropdownMenuSeparator /&gt;</code> between groups for
            a hairline horizontal rule.
          </li>
          <li>
            <strong>Destructive items</strong>: pass{" "}
            <code>destructive</code> to <code>DropdownMenuItem</code> to
            tone it with the signal color.
          </li>
          <li>
            <strong>Alignment</strong>: <code>align="start" | "center" | "end"</code>{" "}
            and <code>side="top" | "right" | "bottom" | "left"</code> on{" "}
            <code>DropdownMenuContent</code>.
          </li>
          <li>
            <strong>Item settings dropdown — standard pattern.</strong> For
            row-level "edit / archive / delete" overflow menus on listings or
            single-item views, always use this exact trigger:{" "}
            <code>Ellipsis</code> icon, <code>strokeWidth={1.5}</code>,
            no border or background, <code>text-ink-muted</code> with{" "}
            <code>hover:text-ink-body</code>. Use <code>h-4 w-4</code> on
            listing rows; bump to <code>h-6 w-6</code> when used in a page
            header for a single-item view.
          </li>
        </ul>
      }
    />
  );
}
