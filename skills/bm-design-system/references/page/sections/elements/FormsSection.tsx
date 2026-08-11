import { SectionShell } from "@/components/design-system/SectionShell";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Radio, RadioGroup } from "@/components/ui/radio";
import { Select } from "@/components/ui/select";
import { RichTextField } from "@/components/ui/rich-text-field";

const code = `import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Radio, RadioGroup } from "@/components/ui/radio";
import { Select } from "@/components/ui/select";
import { RichTextField } from "@/components/ui/rich-text-field";

<form className="space-y-4">
  {/* Text input */}
  <div className="space-y-2">
    <label htmlFor="email">Email</label>
    <Input id="email" type="email" placeholder="you@example.com" />
    <p className="text-xs text-ink-muted">We'll only use this for account notifications.</p>
  </div>

  {/* Select */}
  <div className="space-y-2">
    <label htmlFor="country">Country</label>
    <Select id="country" defaultValue="">
      <option value="" disabled>Choose one…</option>
      <option value="us">United States</option>
      <option value="ca">Canada</option>
      <option value="uk">United Kingdom</option>
    </Select>
  </div>

  {/* Radio group */}
  <fieldset className="space-y-2">
    <legend>Plan</legend>
    <RadioGroup>
      <label className="flex items-center gap-2 text-sm font-normal text-ink-body">
        <Radio name="plan" value="free" defaultChecked />
        Free
      </label>
      <label className="flex items-center gap-2 text-sm font-normal text-ink-body">
        <Radio name="plan" value="pro" />
        Pro
      </label>
      <label className="flex items-center gap-2 text-sm font-normal text-ink-body">
        <Radio name="plan" value="team" />
        Team
      </label>
    </RadioGroup>
  </fieldset>

  {/* Checkbox */}
  <label className="flex items-start gap-2 text-sm font-normal text-ink-body">
    <Checkbox id="newsletter" defaultChecked className="mt-0.5" />
    <span>
      <span className="font-medium text-ink-display">Send me product updates</span>
      <span className="block text-xs text-ink-muted">Roughly one email per month.</span>
    </span>
  </label>

  {/* Rich text (milkdown) */}
  <div className="space-y-2">
    <label htmlFor="bio">Bio</label>
    <RichTextField placeholder="Tell us about yourself…" />
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
          Forms compose <code>&lt;Input&gt;</code>, <code>&lt;Select&gt;</code>,
          <code>&lt;Checkbox&gt;</code>, <code>&lt;Radio&gt;</code>,{" "}
          <code>&lt;RichTextField&gt;</code> (milkdown), native HTML labels,
          helper text, and <code>&lt;Button&gt;</code>. Vertical spacing between
          fields uses <code>space-y-4</code>; spacing inside a field uses{" "}
          <code>space-y-2</code>.
        </>
      }
      whenToUse={
        <ul>
          <li>All data-entry surfaces.</li>
          <li>Wrap fields with their own <code>&lt;label&gt;</code> for accessibility.</li>
          <li>Use <code>&lt;fieldset&gt;</code> + <code>&lt;legend&gt;</code> around radio groups.</li>
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
          <div className="space-y-2">
            <label htmlFor="ds-form-email">Email</label>
            <Input
              id="ds-form-email"
              type="email"
              placeholder="you@example.com"
            />
            <p className="text-xs text-ink-muted">
              We'll only use this for account notifications.
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="ds-form-country">Country</label>
            <Select id="ds-form-country" defaultValue="">
              <option value="" disabled>
                Choose one…
              </option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
            </Select>
          </div>

          <fieldset className="space-y-2">
            <legend>Plan</legend>
            <RadioGroup>
              <label className="flex items-center gap-2 text-sm font-normal text-ink-body">
                <Radio name="ds-form-plan" value="free" defaultChecked />
                Free
              </label>
              <label className="flex items-center gap-2 text-sm font-normal text-ink-body">
                <Radio name="ds-form-plan" value="pro" />
                Pro
              </label>
              <label className="flex items-center gap-2 text-sm font-normal text-ink-body">
                <Radio name="ds-form-plan" value="team" />
                Team
              </label>
            </RadioGroup>
          </fieldset>

          <label className="flex items-start gap-2 text-sm font-normal text-ink-body">
            <Checkbox
              id="ds-form-newsletter"
              defaultChecked
              className="mt-0.5"
            />
            <span>
              <span className="font-medium text-ink-display">
                Send me product updates
              </span>
              <span className="block text-xs text-ink-muted">
                Roughly one email per month.
              </span>
            </span>
          </label>

          <div className="space-y-2">
            <label htmlFor="ds-form-bio">Bio</label>
            <RichTextField placeholder="Tell us about yourself…" />
          </div>

          <Button type="submit">Save</Button>
        </form>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li>Use HTML <code>&lt;label htmlFor&gt;</code> with the field's <code>id</code> for accessibility.</li>
          <li>Helper text uses <code>text-xs text-ink-muted</code> directly under the field.</li>
          <li>Error states: render a <code>text-xs text-danger-display</code> message in the same slot as helper text and add <code>aria-invalid</code> to the field.</li>
          <li>Radio groups: wrap in <code>&lt;fieldset&gt;</code> + <code>&lt;legend&gt;</code> and share a <code>name</code> across all <code>&lt;Radio&gt;</code> inputs.</li>
          <li>Selects: use a disabled empty <code>&lt;option&gt;</code> as a placeholder when no default makes sense.</li>
          <li>Rich text: <code>&lt;RichTextField&gt;</code> wraps milkdown's Crepe — emits markdown via <code>onChange</code>. Requires <code>@milkdown/crepe</code>.</li>
        </ul>
      }
    />
  );
}
