import { SectionShell } from "@/components/design-system/SectionShell";
import { Badge } from "@/components/ui/badge";

const code = `import { Badge } from "@/components/ui/badge";

<Badge tone="neutral">Draft</Badge>
<Badge tone="accent">New</Badge>
<Badge tone="signal">Warning</Badge>
<Badge tone="muted">Archived</Badge>
<Badge tone="solid">Pro</Badge>`;

export function BadgesSection() {
  return (
    <SectionShell
      id="badges"
      title="Badges"
      description={
        <>
          Small inline tag/badge for status or category. Five tones cover most
          needs. Always use the primitive — never reach for ad-hoc pill
          markup.
        </>
      }
      whenToUse={
        <ul>
          <li>Status indicators (Draft, Published, Archived).</li>
          <li>Category tags on a list item.</li>
          <li>Plan or tier badges (Pro, Free).</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>For form field labels — use a real <code>&lt;label&gt;</code>.</li>
          <li>For navigation — use a button or anchor.</li>
        </ul>
      }
      preview={
        <div className="flex flex-wrap items-center gap-3">
          <Badge tone="neutral">Draft</Badge>
          <Badge tone="accent">New</Badge>
          <Badge tone="signal">Warning</Badge>
          <Badge tone="muted">Archived</Badge>
          <Badge tone="solid">Pro</Badge>
        </div>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li><code>tone</code>: <code>neutral</code> (default) | <code>accent</code> | <code>signal</code> | <code>muted</code> | <code>solid</code></li>
          <li>Pair with a small lucide icon as the first child for richer status badges.</li>
        </ul>
      }
    />
  );
}
