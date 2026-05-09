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
  LogOut,
  MoreHorizontal,
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
import { Settings, User, Users, LogOut } from "lucide-react";

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
                  className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-hairline text-ink-body hover:bg-surface"
                  aria-label="More actions"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <User /> Assign
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings /> Edit
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem destructive>
                  <Trash2 /> Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="text-xs text-ink-muted">Icon trigger</span>
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
        </ul>
      }
    />
  );
}
