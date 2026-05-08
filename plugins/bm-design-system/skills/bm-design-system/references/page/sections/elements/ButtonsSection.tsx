import { SectionShell } from "@/components/design-system/SectionShell";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const code = `import { Button } from "@/components/ui/button";

<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="soft">Soft</Button>
<Button variant="danger">Danger</Button>
<Button variant="link">Link</Button>

<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="icon" aria-label="Add"><Plus className="h-4 w-4" /></Button>`;

export function ButtonsSection() {
  return (
    <SectionShell
      id="buttons"
      title="Buttons"
      description={
        <>
          The <code>&lt;Button&gt;</code> primitive supports six variants and
          four sizes. Use <code>asChild</code> to render as a different element
          (e.g. an <code>&lt;a&gt;</code>) while keeping the styling.
        </>
      }
      whenToUse={
        <ul>
          <li>Any clickable action — submit, save, navigate, open modal.</li>
          <li>One <code>primary</code> per scope; <code>secondary</code>/<code>ghost</code> for the rest.</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>For inline links inside prose — use <code>&lt;a&gt;</code>.</li>
          <li>Three or more primary buttons in the same view — collapse to one.</li>
        </ul>
      }
      preview={
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="soft">Soft</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Add">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button>
              <Plus className="h-4 w-4" /> With icon
            </Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li><code>variant</code>: <code>primary</code> (default) | <code>secondary</code> | <code>ghost</code> | <code>soft</code> | <code>danger</code> | <code>link</code></li>
          <li><code>size</code>: <code>sm</code> | <code>md</code> (default) | <code>lg</code> | <code>icon</code></li>
          <li><code>asChild</code>: render as a Slot — pass a single child element to inherit the styles.</li>
        </ul>
      }
    />
  );
}
