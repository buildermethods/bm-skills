# Next.js (pages router)

File-based routing — no router config edit required.

The route page lives at the file matching `__ROUTE_PATH__`. For the default `/admin/design-system`:

```
pages/admin/design-system.tsx
```

Contents:

```tsx
import dynamic from "next/dynamic";

// DesignSystem uses browser-only APIs (localStorage, IntersectionObserver).
const DesignSystem = dynamic(
  () => import("@/components/design-system/DesignSystem").then((m) => m.DesignSystem),
  { ssr: false },
);

export default function DesignSystemPage() {
  return <DesignSystem />;
}
```
