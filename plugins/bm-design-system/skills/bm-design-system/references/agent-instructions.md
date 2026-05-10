<!-- bm-design-system:start -->
## Design system

This codebase has a design system documented at [`__ROUTE_PATH__`](__ROUTE_PATH__). The page previews and explains every primitive — colors, typography, structure, base styles, and elements — and shows the exact markup to use.

When implementing UI:

1. **Always check the design system first.** Before writing any frontend markup or styles, refer to `__ROUTE_PATH__` and the components under `components/ui/` and `components/design-system/sections/`. Use the existing tokens (`bg-page`, `bg-surface`, `text-ink-body`, etc.) and the existing primitives (`<Button>`, `<Input>`, `<Badge>`, `<Select>`, `<Checkbox>`, `<Radio>`, `<RichTextField>`, `<Dialog>`, `<ThemeToggle>` and friends).

2. **Do not invent ad-hoc styles.** Don't reach for raw hex values, raw font sizes, or one-off Tailwind utilities when a token or primitive exists. Don't introduce new variant systems alongside the existing `cva`-based ones.

3. **Use bare semantic HTML for text elements.** Headings (`<h1>`–`<h6>`), paragraphs (`<p>`), anchors (`<a>`), `<strong>`, `<blockquote>`, `<ul>` / `<ol>` / `<li>`, `<hr>`, and form-field labels (`<label htmlFor>` / `<legend>`) already have their size, color, weight, font, letter-spacing, and line-height defined in the base layer of `design-system.css`. **Do not apply Tailwind utilities like `text-xl`, `text-2xl`, `text-sm`, `font-semibold`, `font-medium`, `text-ink-display`, `text-ink-muted`, `tracking-tight`, `leading-tight` to these elements** — write `<h1>Projects</h1>`, not `<h1 className="text-2xl font-semibold text-ink-display">Projects</h1>`, and write `<label htmlFor="email">Email</label>`, not `<label htmlFor="email" className="text-sm font-medium text-ink-display">Email</label>`. Page headers in particular use `<h1>` (not `<h2>`) at the design system's base h1 size. Layout utilities (`mt-1`, `mb-4`, `max-w-md`, `flex`, etc.) are fine. If a usage genuinely needs different text styling, propose adding it to the design system as a class or element variant rather than overriding inline. The base rule applies to all `<label>` and `<legend>` elements; for the special case of a label used as a wrapper around a checkbox/radio (where the visible text is body copy, not a field title), add `font-normal text-ink-body` to override the medium weight and display color.

4. **If a needed UI element is missing, propose it as a design-system addition** before building a one-off. Ask the user something like: "There's no existing primitive for X. Want me to add it to the design system (`components/ui/x.tsx` + a new section on `__ROUTE_PATH__`) so it stays consistent, or do a one-off here?" Default to proposing the system addition.

5. **Re-running the `bm-design-system` skill** is the supported way to add new sections or update tokens. It detects existing setup and merges non-destructively.
<!-- bm-design-system:end -->
