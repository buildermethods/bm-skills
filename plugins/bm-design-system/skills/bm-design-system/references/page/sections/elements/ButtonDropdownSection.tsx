import { SectionShell } from "@/components/design-system/SectionShell";
import { ButtonDropdown } from "@/components/ui/button-dropdown";
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ArrowRight, Copy, Pause, Trash2 } from "lucide-react";

const code = `import { ButtonDropdown } from "@/components/ui/button-dropdown";
import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ArrowRight, Pause, Trash2 } from "lucide-react";

<ButtonDropdown
  action={<>Greenlight <ArrowRight className="h-4 w-4" /></>}
  onClick={() => doPrimary()}
>
  <DropdownMenuItem onSelect={() => doPark()}>
    <Pause /> Park
  </DropdownMenuItem>
  <DropdownMenuSeparator />
  <DropdownMenuItem destructive onSelect={() => doDiscard()}>
    <Trash2 /> Discard
  </DropdownMenuItem>
</ButtonDropdown>

<ButtonDropdown
  variant="secondary"
  action="Duplicate"
  onClick={() => doDuplicate()}
>
  <DropdownMenuItem onSelect={() => doDuplicateAs()}>
    Duplicate as draft
  </DropdownMenuItem>
  <DropdownMenuItem onSelect={() => doExport()}>
    Export
  </DropdownMenuItem>
</ButtonDropdown>`;

export function ButtonDropdownSection() {
  return (
    <SectionShell
      id="button-dropdown"
      title="Button dropdown"
      description={
        <>
          A split button — a primary action on the left and a chevron end-cap
          on the right that opens a dropdown of related secondary actions. The
          two halves render as one shape with a thin currentColor-tinted
          divider between them, so it works on any variant (and on custom
          backgrounds set via <code>className</code>). The menu uses the same
          dropdown primitive documented below.
        </>
      }
      whenToUse={
        <ul>
          <li>
            One action is the obvious next step but a small set of related
            secondary actions belong in the same spot.
          </li>
          <li>
            Page-header action boxes where the primary action lives next to
            "park / discard / reset"-style alternates.
          </li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>
            The actions don't share intent — use separate buttons (or a plain{" "}
            <code>DropdownMenu</code> if none of them is the obvious primary).
          </li>
          <li>
            There's only the main action — use a plain <code>Button</code>.
          </li>
          <li>
            The menu is a list of navigation destinations rather than
            secondary actions — use a plain <code>DropdownMenu</code>.
          </li>
        </ul>
      }
      preview={
        <div className="flex flex-wrap items-center gap-4">
          <ButtonDropdown
            action={
              <>
                Greenlight <ArrowRight className="h-4 w-4" />
              </>
            }
            onClick={() => {}}
          >
            <DropdownMenuItem onSelect={() => {}}>
              <Pause /> Park
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem destructive onSelect={() => {}}>
              <Trash2 /> Discard
            </DropdownMenuItem>
          </ButtonDropdown>

          <ButtonDropdown
            variant="secondary"
            action={
              <>
                <Copy className="h-4 w-4" /> Duplicate
              </>
            }
            onClick={() => {}}
          >
            <DropdownMenuItem onSelect={() => {}}>
              Duplicate as draft
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => {}}>Export</DropdownMenuItem>
          </ButtonDropdown>

          <ButtonDropdown
            variant="danger"
            action="Delete"
            onClick={() => {}}
          >
            <DropdownMenuItem onSelect={() => {}}>
              Move to trash
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => {}}>Archive</DropdownMenuItem>
          </ButtonDropdown>
        </div>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li>
            <code>action</code>: content of the left (primary) button. String
            or any ReactNode.
          </li>
          <li>
            <code>onClick</code>: handler for the primary action. The toggle
            (chevron) opens the menu and is independent.
          </li>
          <li>
            <code>variant</code>: any <code>Button</code> variant —{" "}
            <code>primary</code> (default), <code>secondary</code>,{" "}
            <code>ghost</code>, <code>soft</code>, <code>danger</code>,{" "}
            <code>link</code>.
          </li>
          <li>
            <code>size</code>: <code>sm</code> | <code>md</code> (default) |{" "}
            <code>lg</code>.
          </li>
          <li>
            <code>className</code> / <code>toggleClassName</code>: extra
            classes for each half. Useful for custom-colored buttons (e.g.
            stage-color buttons in this app). <code>toggleClassName</code>{" "}
            defaults to mirror <code>className</code>.
          </li>
          <li>
            <code>menuAlign</code>: <code>start | center | end</code> (default{" "}
            <code>end</code>) — forwarded to <code>DropdownMenuContent</code>.
          </li>
          <li>
            <code>toggleAriaLabel</code>: aria-label for the chevron half.
            Default <code>"More actions"</code>.
          </li>
          <li>
            <strong>Children</strong>: pass{" "}
            <code>DropdownMenuItem</code> /{" "}
            <code>DropdownMenuSeparator</code> children — the standard
            dropdown-menu primitives.
          </li>
        </ul>
      }
    />
  );
}
