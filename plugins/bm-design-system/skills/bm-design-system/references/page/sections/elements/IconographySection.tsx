import { SectionShell } from "@/components/design-system/SectionShell";
import {
  Activity,
  ArrowRight,
  Bell,
  Check,
  ChevronRight,
  Folder,
  Plus,
  Search,
  Settings,
  Trash2,
  User,
  X,
} from "lucide-react";

const code = `import { Plus } from "lucide-react";

<Plus className="h-4 w-4" />`;

const ICONS = [
  { Icon: Activity, name: "Activity" },
  { Icon: ArrowRight, name: "ArrowRight" },
  { Icon: Bell, name: "Bell" },
  { Icon: Check, name: "Check" },
  { Icon: ChevronRight, name: "ChevronRight" },
  { Icon: Folder, name: "Folder" },
  { Icon: Plus, name: "Plus" },
  { Icon: Search, name: "Search" },
  { Icon: Settings, name: "Settings" },
  { Icon: Trash2, name: "Trash2" },
  { Icon: User, name: "User" },
  { Icon: X, name: "X" },
];

export function IconographySection() {
  return (
    <SectionShell
      id="iconography"
      title="Iconography"
      description={
        <>
          Icons come from <code>lucide-react</code>. Default size is{" "}
          <code>h-4 w-4</code> for inline use; <code>h-5 w-5</code> in
          buttons; <code>h-6 w-6</code> for standalone visual anchors.
        </>
      }
      whenToUse={
        <ul>
          <li>Reinforce a button's label or status.</li>
          <li>Visually anchor empty states and section headers.</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>Decoratively, with no semantic value.</li>
          <li>Replacing a label entirely (icon-only buttons need an aria-label).</li>
        </ul>
      }
      preview={
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {ICONS.map(({ Icon, name }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 rounded-md border border-hairline bg-page p-3"
            >
              <Icon className="h-5 w-5 text-ink-display" />
              <span className="font-mono text-[10px] text-ink-muted">
                {name}
              </span>
            </div>
          ))}
        </div>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li>Pick from the full lucide set: https://lucide.dev/icons</li>
          <li>Use <code>text-ink-muted</code> for icons that recede; <code>text-accent</code> when emphasizing.</li>
          <li>Always pair icon-only buttons with <code>aria-label</code>.</li>
        </ul>
      }
    />
  );
}
