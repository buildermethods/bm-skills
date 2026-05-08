<!-- bm-design-system:start -->
## Design system

This codebase has a design system documented at [`__ROUTE_PATH__`](__ROUTE_PATH__). The page previews and explains every primitive — colors, typography, structure, base styles, and elements — and shows the exact markup to use.

When implementing UI:

1. **Always check the design system first.** Before writing any frontend markup or styles, refer to `__ROUTE_PATH__` and the components under `components/ui/` and `components/design-system/sections/`. Use the existing tokens (`bg-page`, `bg-surface`, `text-ink-body`, etc.) and the existing primitives (`<Button>`, `<Input>`, `<Label>`, `<Dialog>` and friends).

2. **Do not invent ad-hoc styles.** Don't reach for raw hex values, raw font sizes, or one-off Tailwind utilities when a token or primitive exists. Don't introduce new variant systems alongside the existing `cva`-based ones.

3. **If a needed UI element is missing, propose it as a design-system addition** before building a one-off. Ask the user something like: "There's no existing primitive for X. Want me to add it to the design system (`components/ui/x.tsx` + a new section on `__ROUTE_PATH__`) so it stays consistent, or do a one-off here?" Default to proposing the system addition.

4. **Re-running the `bm-design-system` skill** is the supported way to add new sections or update tokens. It detects existing setup and merges non-destructively.
<!-- bm-design-system:end -->
