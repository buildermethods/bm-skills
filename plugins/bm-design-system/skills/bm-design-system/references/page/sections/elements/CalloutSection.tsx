import { SectionShell } from "@/components/design-system/SectionShell";

const code = `<div className="callout">
  <p>
    Heads up — this is a callout. Wrap any content that needs a
    visual container (warning, tip, summary, side note) in
    <code>.callout</code>.
  </p>
</div>`;

export function CalloutSection() {
  return (
    <SectionShell
      id="callout"
      title="Callout"
      description={
        <>
          A simple bordered container for emphasizing a chunk of content
          inside a longer page. Apply <code>.callout</code> to any element
          to get a hairline border, rounded corners, and comfortable
          padding.
        </>
      }
      whenToUse={
        <ul>
          <li>Tips, notes, warnings, or summary boxes inside long-form content.</li>
          <li>Pull-out info that should feel separate from surrounding paragraphs.</li>
          <li>Empty states or zero-data prompts in a panel.</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>Modal or dialog content — use the <code>Dialog</code> primitive.</li>
          <li>Items in a list — use the <code>Listings</code> pattern.</li>
          <li>Form field grouping — use a fieldset, not a callout.</li>
        </ul>
      }
      preview={
        <div className="callout">
          <p className="text-ink-body">
            Heads up — this is a callout. Wrap any content that needs a
            visual container (warning, tip, summary, side note) in{" "}
            <code>.callout</code>.
          </p>
        </div>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li>
            <code>.callout</code> is intentionally minimal: hairline border,
            rounded corners, padding. No background or color tone — pair
            with <code>bg-surface</code> or <code>bg-accent-faded</code> if
            you want emphasis.
          </li>
          <li>
            Compose with text utilities (<code>text-ink-display</code>,{" "}
            <code>text-ink-muted</code>) and inline icons for richer
            variants (warning, info, success).
          </li>
        </ul>
      }
    />
  );
}
