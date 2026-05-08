import { SectionShell } from "@/components/design-system/SectionShell";

const code = `<article className="body-content">
  <h2>Section heading</h2>
  <p>Lead paragraph introducing the section.</p>
  <p>Continued prose with consistent vertical rhythm.</p>
  <h3>Sub-section</h3>
  <p>Each h2/h3/h4 inside .body-content gets pt-4 unless it's the first child.</p>
  <ul>
    <li>List items use the base styles defined globally.</li>
    <li>No extra utility classes needed.</li>
  </ul>
  <blockquote>And blockquotes look the same wherever they appear.</blockquote>
</article>`;

export function BodyContentSection() {
  return (
    <SectionShell
      id="body-content"
      title="Body content"
      description={
        <>
          Wrap any long-form prose (articles, marketing copy, doc pages) in
          <code>.body-content</code> to get consistent vertical rhythm
          (<code>space-y-6</code>) and breathing room above sub-headings.
          We do <em>not</em> use Tailwind's typography plugin.
        </>
      }
      whenToUse={
        <ul>
          <li>Articles, blog posts, documentation pages.</li>
          <li>Anywhere you have a sequence of paragraphs and headings.</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>UI chrome — buttons, forms, navs, cards.</li>
          <li>Tightly-spaced layouts where you control gaps explicitly.</li>
        </ul>
      }
      preview={
        <article className="body-content text-ink-body">
          <h2>Section heading</h2>
          <p>
            Lead paragraph introducing the section. The body font and base
            type sizes come from the global stylesheet.
          </p>
          <p>
            A second paragraph shows the consistent vertical rhythm given
            by <code>.body-content &gt; * + *</code> with{" "}
            <code>margin-top: 1.5rem</code>.
          </p>
          <h3>Sub-section</h3>
          <p>
            Each <code>h2</code>, <code>h3</code>, or <code>h4</code> inside
            <code>.body-content</code> gets <code>pt-4</code> unless it's
            the first child.
          </p>
          <ul>
            <li>Lists inherit base styles globally.</li>
            <li>No extra Tailwind utility classes are needed.</li>
          </ul>
          <blockquote>
            And blockquotes look the same wherever they appear.
          </blockquote>
        </article>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li>
            <code>.body-content</code> applies vertical spacing only — no
            font or color overrides. Type comes from base styles.
          </li>
          <li>
            Custom widths are fine: pair with{" "}
            <code>max-w-prose</code> or your own constraint.
          </li>
        </ul>
      }
    />
  );
}
