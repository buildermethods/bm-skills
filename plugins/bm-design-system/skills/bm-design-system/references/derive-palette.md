# Palette derivation

Inputs from the user:
- `accent` — a single hex (e.g. `#4f46e5`)
- `signal` — a single hex (e.g. `#d97706`)
- `neutral` — a named family with a 9-step scale (50 / 100 / 200 / 400 / 500 / 700 / 800 / 900 / 950)

Output: ten tokens × two modes (light + dark) = twenty hex values, written into the `@theme` block of `design-system.css`.

## Rules

### Surfaces — driven by `neutral`

| Token       | Light             | Dark              |
|-------------|-------------------|-------------------|
| `page`      | `#ffffff`         | `neutral.950`     |
| `surface`   | `neutral.50`      | `neutral.900`     |
| `hairline`  | `neutral.200`     | `neutral.800`     |

Note: `page` light is pure white (cleaner than `neutral.50`); `page` dark uses `950` for true blackness.

### Text — driven by `neutral`

| Token         | Light          | Dark            |
|---------------|----------------|-----------------|
| `ink-body`    | `neutral.700`  | `neutral.200`   |
| `ink-display` | `neutral.900`  | `neutral.50`    |
| `ink-muted`   | `neutral.500`  | `neutral.400`   |

### Splash — driven by `accent` and `signal`

| Token           | Light                    | Dark                              |
|-----------------|--------------------------|-----------------------------------|
| `accent`        | user accent              | user accent (no shift)            |
| `accent-faded`  | accent mixed 12% on `#ffffff` | accent mixed 18% on `neutral.950` |
| `signal`        | user signal              | user signal (no shift)            |
| `signal-faded`  | signal mixed 12% on `#ffffff` | signal mixed 18% on `neutral.950` |

### Mixing formula

Given a foreground hex `F` and a background hex `B`, mixing `F` at percentage `p` (0..1) on `B`:

```
out.r = round(F.r * p + B.r * (1 - p))
out.g = round(F.g * p + B.g * (1 - p))
out.b = round(F.b * p + B.b * (1 - p))
```

Convert each component to a two-digit hex and concatenate with `#`.

### Worked example

Inputs:
- accent = `#4f46e5` → `(79, 70, 229)`
- neutral = Zinc → `neutral.950` = `#09090b` → `(9, 9, 11)`

`accent-faded` light: `#4f46e5` mixed 12% on `#ffffff`:
- r = round(79*0.12 + 255*0.88) = round(9.48 + 224.4) = 234
- g = round(70*0.12 + 255*0.88) = round(8.4 + 224.4) = 233
- b = round(229*0.12 + 255*0.88) = round(27.48 + 224.4) = 252
- → `#eae9fc`

`accent-faded` dark: `#4f46e5` mixed 18% on `#09090b`:
- r = round(79*0.18 + 9*0.82) = round(14.22 + 7.38) = 22
- g = round(70*0.18 + 9*0.82) = round(12.6 + 7.38) = 20
- b = round(229*0.18 + 11*0.82) = round(41.22 + 9.02) = 50
- → `#161432`

## Fallback

If the user picks a custom accent or signal that is extremely dark (luminance < 0.2) or extremely light (luminance > 0.8), warn them in chat — the faded variants may be hard to distinguish — but do not block. Compute as specified.
