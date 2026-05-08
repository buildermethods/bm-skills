# Next.js (app router)

File-based routing — no router config edit required.

The route page lives at the directory matching `__ROUTE_PATH__`. For the default `/admin/design-system`:

```
app/admin/design-system/page.tsx
```

Contents:

```tsx
"use client";

import { DesignSystem } from "@/components/design-system/DesignSystem";

export default function Page() {
  return <DesignSystem />;
}
```

Note: the `DesignSystem` component uses `localStorage` and `IntersectionObserver` (via the theme toggle and sidebar), so the page must be a client component (`"use client"` directive at top).

For non-default routes (e.g. `/styleguide`), the path becomes `app/styleguide/page.tsx` — slashes in `__ROUTE_PATH__` map directly to nested directories.
