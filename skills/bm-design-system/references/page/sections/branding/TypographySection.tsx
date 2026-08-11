import { SectionShell } from "@/components/design-system/SectionShell";
import { FONTS } from "@/components/design-system/palette";

const code = `// Set in design-system.css via @theme:
//   --font-display: 'Stack Sans Text', ui-sans-serif, system-ui, sans-serif;
//   --font-sans: 'DM Sans', ui-sans-serif, system-ui, sans-serif;

<h1 className="font-display">Display headline</h1>
<p className="font-sans">Body paragraph.</p>`;

export function TypographySection() {
  return (
    <SectionShell
      id="typography"
      title="Typography"
      description={
        <>
          Two families. Headlines use <code>{FONTS.display}</code>, body copy
          uses <code>{FONTS.body}</code>. Both load from Google Fonts via{" "}
          <code>&lt;link&gt;</code> tags in the app's HTML <code>&lt;head&gt;</code>.
        </>
      }
      whenToUse={
        <ul>
          <li>
            Use <code>font-display</code> for headings only. Headings already
            inherit it via base styles.
          </li>
          <li>
            Use <code>font-sans</code> for everything else — also already the
            default.
          </li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>
            Don't import additional font families — propose adding to the
            system instead.
          </li>
          <li>Don't override <code>font-family</code> inline.</li>
        </ul>
      }
      preview={
        <div className="space-y-6">
          <div>
            <div className="mb-1 text-xs font-mono text-ink-muted">
              Display — {FONTS.display}
            </div>
            <div className="font-display text-4xl font-semibold text-ink-display">
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
          <div>
            <div className="mb-1 text-xs font-mono text-ink-muted">
              Body — {FONTS.body}
            </div>
            <div className="font-sans text-base text-ink-body">
              The quick brown fox jumps over the lazy dog. 0123456789. The
              five boxing wizards jump quickly.
            </div>
          </div>
        </div>
      }
      code={code}
    />
  );
}
