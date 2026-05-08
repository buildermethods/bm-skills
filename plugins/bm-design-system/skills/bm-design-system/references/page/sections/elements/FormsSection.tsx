import { SectionShell } from "@/components/design-system/SectionShell";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const code = `import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

<form className="space-y-4">
  <div className="space-y-1.5">
    <label htmlFor="email" className="text-sm font-medium text-ink-display">
      Email
    </label>
    <Input id="email" type="email" placeholder="you@example.com" />
    <p className="text-xs text-ink-muted">We'll only use this for account notifications.</p>
  </div>
  <Button type="submit">Save</Button>
</form>`;

export function FormsSection() {
  return (
    <SectionShell
      id="forms"
      title="Forms"
      description={
        <>
          Forms compose <code>&lt;Input&gt;</code>, native HTML labels, helper
          text, and Buttons. Vertical spacing between fields uses{" "}
          <code>space-y-4</code>; spacing inside a field uses{" "}
          <code>space-y-1.5</code>.
        </>
      }
      whenToUse={
        <ul>
          <li>All data-entry surfaces.</li>
          <li>Wrap fields with their own <code>&lt;label&gt;</code> for accessibility.</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>Inline filters in toolbars — use compact controls instead.</li>
          <li>Single-button calls to action — those don't need a form wrapper unless they POST.</li>
        </ul>
      }
      preview={
        <form
          className="max-w-md space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-1.5">
            <label
              htmlFor="ds-form-email"
              className="text-sm font-medium text-ink-display"
            >
              Email
            </label>
            <Input
              id="ds-form-email"
              type="email"
              placeholder="you@example.com"
            />
            <p className="text-xs text-ink-muted">
              We'll only use this for account notifications.
            </p>
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="ds-form-name"
              className="text-sm font-medium text-ink-display"
            >
              Display name
            </label>
            <Input id="ds-form-name" placeholder="Ada Lovelace" />
          </div>
          <Button type="submit">Save</Button>
        </form>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li>Use HTML <code>&lt;label htmlFor&gt;</code> with the input's <code>id</code> for accessibility.</li>
          <li>Helper text uses <code>text-xs text-ink-muted</code> directly under the input.</li>
          <li>Error states: render a <code>text-xs text-signal</code> message in the same slot as helper text and add <code>aria-invalid</code> to the input.</li>
        </ul>
      }
    />
  );
}
