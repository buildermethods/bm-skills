import { SectionShell } from "@/components/design-system/SectionShell";

export function BaseStylesSection() {
  return (
    <>
      <SectionShell
        id="heading-scale"
        title="Heading scale"
        description="All six heading levels at their base sizes. Headings inherit the display font, semibold weight, and tightened line-height from base styles — no utility classes required."
        whenToUse={
          <ul>
            <li>Use semantic heading levels for document outline.</li>
            <li>Skip-level only when visual hierarchy demands it.</li>
          </ul>
        }
        whenNotToUse={
          <ul>
            <li>Don't override <code>font-family</code> or <code>color</code> on headings.</li>
            <li>Don't use a heading element purely for styling.</li>
          </ul>
        }
        preview={
          <div className="space-y-3">
            <h1>The quick brown fox</h1>
            <h2>The quick brown fox</h2>
            <h3>The quick brown fox</h3>
            <h4>The quick brown fox</h4>
            <h5>The quick brown fox</h5>
            <h6>The quick brown fox</h6>
          </div>
        }
        code={`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}
      />

      <SectionShell
        id="h1"
        title="H1"
        description="Page-level heading. One per page."
        preview={<h1>Page title</h1>}
        code={`<h1>Page title</h1>`}
      />

      <SectionShell
        id="h2"
        title="H2"
        description="Major section heading inside a page."
        preview={<h2>Section heading</h2>}
        code={`<h2>Section heading</h2>`}
      />

      <SectionShell
        id="h3"
        title="H3"
        description="Sub-section heading."
        preview={<h3>Sub-section</h3>}
        code={`<h3>Sub-section</h3>`}
      />

      <SectionShell
        id="h4"
        title="H4"
        description="Minor heading inside a sub-section."
        preview={<h4>Minor heading</h4>}
        code={`<h4>Minor heading</h4>`}
      />

      <SectionShell
        id="h5"
        title="H5"
        description="Card / inline heading."
        preview={<h5>Card title</h5>}
        code={`<h5>Card title</h5>`}
      />

      <SectionShell
        id="h6"
        title="H6"
        description="Eyebrow / label-style heading. Uppercase, tracked, muted color."
        preview={<h6>Eyebrow label</h6>}
        code={`<h6>Eyebrow label</h6>`}
      />

      <SectionShell
        id="anchor"
        title="Anchor (a)"
        description={
          <>
            Inline links use the accent color with no underline. Hover darkens
            the accent slightly.
          </>
        }
        whenToUse={
          <ul>
            <li>Real navigation in prose.</li>
            <li>External references in body copy.</li>
          </ul>
        }
        whenNotToUse={
          <ul>
            <li>For action triggers — use a Button (<code>variant="link"</code>).</li>
            <li>Inside dense UI nav lists — those have their own styles.</li>
          </ul>
        }
        preview={
          <p>
            Read more in <a href="#colors">our color tokens</a> or{" "}
            <a href="#" target="_blank" rel="noreferrer">on the docs site</a>.
          </p>
        }
        code={`<a href="/path">Read more</a>`}
      />

      <SectionShell
        id="paragraph"
        title="Paragraph (p)"
        description="Body text element. Inherits color, font, and line-height from base styles."
        preview={
          <p>
            A paragraph carries the bulk of textual content. Its color is{" "}
            <code>ink-body</code>, its line-height is <code>1.6</code>, and it
            does not need any utility classes for its baseline appearance.
          </p>
        }
        code={`<p>A paragraph of body text.</p>`}
      />

      <SectionShell
        id="strong"
        title="Strong"
        description={
          <>
            Emphasized inline text. Bumps weight to 600 and color to{" "}
            <code>ink-display</code>.
          </>
        }
        preview={
          <p>
            Most of this sentence is body weight, but{" "}
            <strong>this part</strong> is emphasized.
          </p>
        }
        code={`<p>This is <strong>important</strong>.</p>`}
      />

      <SectionShell
        id="lists"
        title="Lists (ul / ol)"
        description={
          <>
            Lists are unstyled by default — no bullets, no numbers, no padding —
            so they're safe to use as semantic containers in nav, sidebars, and
            listings. To get default disc/decimal styling back, wrap the list
            (or its parent) in <code>.body-content</code>.
          </>
        }
        preview={
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <div className="mb-2 text-xs font-mono text-ink-muted">
                ul (default)
              </div>
              <ul>
                <li>Unstyled first item</li>
                <li>Unstyled second item</li>
                <li>Unstyled third item</li>
              </ul>
            </div>
            <div>
              <div className="mb-2 text-xs font-mono text-ink-muted">
                ul inside .body-content
              </div>
              <div className="body-content">
                <ul>
                  <li>Bulleted first item</li>
                  <li>Bulleted second item</li>
                  <li>Bulleted third item</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mb-2 text-xs font-mono text-ink-muted">
                ol (default)
              </div>
              <ol>
                <li>Unstyled first item</li>
                <li>Unstyled second item</li>
                <li>Unstyled third item</li>
              </ol>
            </div>
            <div>
              <div className="mb-2 text-xs font-mono text-ink-muted">
                ol inside .body-content
              </div>
              <div className="body-content">
                <ol>
                  <li>Numbered first item</li>
                  <li>Numbered second item</li>
                  <li>Numbered third item</li>
                </ol>
              </div>
            </div>
          </div>
        }
        code={`{/* unstyled — for nav, sidebars, listings */}
<ul>
  <li>One</li>
  <li>Two</li>
</ul>

{/* default disc/decimal — for prose */}
<div className="body-content">
  <ul>
    <li>One</li>
    <li>Two</li>
  </ul>
</div>`}
      />

      <SectionShell
        id="list-item"
        title="List item (li)"
        description="Individual list item. Unstyled by default; gets disc/decimal markers and indentation only when its parent list is inside .body-content."
        preview={
          <div className="body-content">
            <ul>
              <li>A single list item inside .body-content.</li>
            </ul>
          </div>
        }
        code={`<div className="body-content">
  <ul>
    <li>A single list item.</li>
  </ul>
</div>`}
      />

      <SectionShell
        id="blockquote"
        title="Blockquote"
        description={
          <>
            Pull quote with an accent left border and italic, muted color.
            Use for attribution-style quotes inside body content.
          </>
        }
        preview={
          <blockquote>
            "Make it work, make it right, make it fast — and only after that,
            make it pretty."
          </blockquote>
        }
        code={`<blockquote>"A pithy quote here."</blockquote>`}
      />

      <SectionShell
        id="label"
        title="Label / legend"
        description={
          <>
            Form-field labels (<code>&lt;label&gt;</code>) and{" "}
            <code>&lt;legend&gt;</code> use the design system's standard label
            style by default — small text, medium weight,{" "}
            <code>ink-display</code> color. No utility classes needed. The
            base rule applies to all <code>&lt;label&gt;</code> elements; for
            the special case of a label used as a wrapper around a checkbox
            or radio, add <code>font-normal text-ink-body</code> to override.
          </>
        }
        preview={
          <div className="space-y-2 max-w-sm">
            <label htmlFor="ds-label-example">Email address</label>
            <input
              id="ds-label-example"
              className="form-control"
              placeholder="you@example.com"
              type="email"
            />
          </div>
        }
        code={`<label htmlFor="email">Email address</label>
<Input id="email" type="email" placeholder="you@example.com" />`}
      />

      <SectionShell
        id="hr"
        title="Horizontal rule"
        description={
          <>
            Visual break between content blocks. Renders as a 1px{" "}
            <code>hairline</code> line with vertical margin.
          </>
        }
        preview={
          <div>
            <p>Above the rule.</p>
            <hr />
            <p>Below the rule.</p>
          </div>
        }
        code={`<hr />`}
      />
    </>
  );
}
