# Rails + Inertia

Two pieces are needed: the React page component and the Rails route + controller action that renders it.

## 1. React page component

Place the page at the project's Inertia pages convention. Common roots are `app/frontend/pages/` or `app/javascript/pages/`. For the default `__ROUTE_PATH__`:

```
app/frontend/pages/admin/design-system.tsx
```

Contents:

```tsx
import { DesignSystem } from "@/components/design-system/DesignSystem";

export default function AdminDesignSystem() {
  return <DesignSystem />;
}
```

## 2. Rails route

Add to `config/routes.rb`:

```ruby
get "__ROUTE_PATH__", to: "design_system#show"
```

## 3. Controller

Create `app/controllers/design_system_controller.rb`:

```ruby
class DesignSystemController < ApplicationController
  def show
    render inertia: "admin/design-system"
  end
end
```

Adjust the controller's authentication / authorization to match the rest of the admin section (e.g. `before_action :require_admin`).

If the project uses a different path convention for Inertia pages (e.g. `app/javascript/Pages/`), match the existing pattern rather than the example above.

## 4. Tailwind v4 explicit `@source`

Rails + Inertia commonly splits the source roots: page components in `app/javascript/pages/` and shared components in `app/frontend/`. Tailwind v4's auto-detection doesn't reliably walk both, so add an explicit `@source` line in the entry CSS (typically `app/javascript/entrypoints/application.css`):

```css
@import "tailwindcss";

/* Tailwind v4 auto-detection doesn't reliably reach both `app/javascript/`
   and `app/frontend/` in this Rails+Inertia setup, so declare them explicitly. */
@source "../../**/*.{ts,tsx,js,jsx}";

/* bm-design-system:start */
@import "./design-system.css";
/* bm-design-system:end */
```

Without this line, Tailwind quietly drops every class used inside `app/frontend/**` from the build and those components render unstyled.
