import { SectionShell } from "@/components/design-system/SectionShell";
import { ColorSwatch } from "@/components/design-system/ColorSwatch";
import { SURFACES, TEXT, SPLASH } from "@/components/design-system/palette";

const code = `<div className="bg-page text-ink-body">
  <div className="bg-surface border border-hairline">
    <h2 className="text-ink-display">Headline</h2>
    <p className="text-ink-muted">Quiet supporting copy.</p>
    <button className="bg-accent text-page">Primary action</button>
  </div>
</div>`;

export function ColorsSection() {
  return (
    <SectionShell
      id="colors"
      title="Colors"
      description={
        <>
          Ten semantic tokens, each defined for light and dark mode. Use the
          token names — never raw hex. Each swatch shows the value for the
          mode you're currently viewing; both hex codes are listed below the
          swatch and click-to-copy.
        </>
      }
      whenToUse={
        <ul>
          <li>Always reach for a token first.</li>
          <li>
            Use <code>page</code> / <code>surface</code> for layered
            backgrounds.
          </li>
          <li>
            Use <code>ink-display</code> for headlines and emphasized
            content.
          </li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>
            Never use raw hex values (<code>#1f2937</code>) in components.
          </li>
          <li>
            Don't introduce new color names ad-hoc — extend the system
            instead.
          </li>
        </ul>
      }
      preview={
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-ink-display">
              Surfaces
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {SURFACES.map((c) => (
                <ColorSwatch key={c.name} {...c} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-ink-display">
              Text
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {TEXT.map((c) => (
                <ColorSwatch key={c.name} {...c} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-ink-display">
              Splash
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {SPLASH.map((c) => (
                <ColorSwatch key={c.name} {...c} />
              ))}
            </div>
          </div>
        </div>
      }
      code={code}
    />
  );
}
