# Vite + react-router-dom

Add the route to the project's existing `<Routes>` block. The skill should:

1. Find the file containing the top-level `<Routes>` element. Common locations: `src/main.tsx`, `src/App.tsx`, `src/router.tsx`.
2. Add this import near the top:

```tsx
import { DesignSystem } from "@/admin/design-system/page";
```

3. Add this route alongside the existing ones:

```tsx
<Route path="__ROUTE_PATH__" element={<DesignSystem />} />
```

If `<Routes>` cannot be located confidently (e.g. the project uses `createBrowserRouter` instead), print the snippet and tell the user to register it manually.

For `createBrowserRouter`:

```tsx
import { DesignSystem } from "@/admin/design-system/page";

const router = createBrowserRouter([
  // …existing routes…
  { path: "__ROUTE_PATH__", element: <DesignSystem /> },
]);
```
