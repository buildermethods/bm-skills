import * as React from "react";
import { SectionShell } from "@/components/design-system/SectionShell";

const code = `// Class-based: pair .toggle-button with .toggle-button-on for the active state
<button type="button" className="toggle-button toggle-button-on">All</button>
<button type="button" className="toggle-button">Active</button>
<button type="button" className="toggle-button">Archived</button>

// Or drive the on state from aria-pressed (preferred for screen readers)
<button type="button" className="toggle-button" aria-pressed={true}>All</button>
<button type="button" className="toggle-button" aria-pressed={false}>Active</button>
<button type="button" className="toggle-button" aria-pressed={false}>Archived</button>`;

function PreviewGroup() {
  const [value, setValue] = React.useState<string>("all");
  const items = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "archived", label: "Archived" },
  ];
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          className="toggle-button"
          aria-pressed={value === item.value}
          onClick={() => setValue(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export function ToggleButtonsSection() {
  return (
    <SectionShell
      id="toggle-buttons"
      title="Toggle buttons"
      description={
        <>
          Pill-shaped buttons with an on/off state. Use them as a small,
          inline filter or segmented control where one or more options can
          be active. Built as a base class so any{" "}
          <code>&lt;button&gt;</code> can adopt the look — no React
          primitive required.
        </>
      }
      whenToUse={
        <ul>
          <li>Filter chips above a list ("All / Active / Archived").</li>
          <li>Small segmented choices inside a toolbar.</li>
          <li>Multi-select tag pickers where each pill toggles independently.</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>For primary actions — use <code>&lt;Button&gt;</code>.</li>
          <li>For yes/no settings — use a switch or checkbox.</li>
          <li>For navigation — use anchors styled as tabs.</li>
        </ul>
      }
      preview={<PreviewGroup />}
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li>
            <code>.toggle-button</code> — base pill (off state). Renders on
            any <code>&lt;button&gt;</code>.
          </li>
          <li>
            <code>.toggle-button-on</code> <em>or</em>{" "}
            <code>aria-pressed="true"</code> — active state. Both selectors
            are wired up; prefer <code>aria-pressed</code> for assistive
            tech.
          </li>
          <li>
            Pair with a small lucide icon as the first child for
            icon+label pills.
          </li>
          <li>
            Disabled state is handled automatically via{" "}
            <code>disabled</code>.
          </li>
        </ul>
      }
    />
  );
}
