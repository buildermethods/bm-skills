---
name: bm-favicon-creator
description: Generate a complete favicon set (SVG, PNGs, multi-resolution .ico, Apple touch icon) from a Lucide icon (default) or another source SVG, then wire the favicon meta tags into the codebase. Use when the user wants to set up a favicon, replace a placeholder favicon, or brand the app icon.
user_invocable: true
---

# Favicon Creator

Generate a complete, cross-device favicon set and wire it into the project's layout so it shows up correctly in every browser, tab, home screen, and pinned shortcut.

The favicon is always rendered as a **square with tight rounded corners**, with the chosen icon **centered** inside on a solid background color.

## Prerequisites

Requires `rsvg-convert` and ImageMagick's `magick` on the system. If either is missing, stop and ask the user to install them (`brew install librsvg imagemagick`). Do not attempt a workaround.

## Step 1 — Gather inputs from the user

Ask each question in order. Wait for an answer before moving on. Do not assume defaults beyond what is specified.

### 1.1 Icon source

Ask: "What icon do you want to use? You can:

- Name a [Lucide](https://lucide.dev/icons) icon (e.g. `rocket`, `sparkles`, `book-open`) — this is the default
- Name an icon from a different icon library (and which library)
- Point me to an existing `.svg` file in the repo
- Describe the icon you want and I'll generate the SVG"

Resolve the answer:

- **Default — Lucide icon by name.** If the user names an icon without naming a library, treat it as a Lucide icon. Fetch the **exact SVG from lucide.dev** for that icon and use it as the source. Lucide icons use `stroke="currentColor"` and `fill="none"`. **Always set `stroke-width="1.5"`** on the root `<svg>` element (override whatever value Lucide ships with). Do not redraw, simplify, or recreate the paths — use the exact paths from Lucide.
- **Other icon library.** If the user names a different library (e.g. Heroicons, Phosphor, Tabler, Material Symbols), fetch the exact SVG from that library's official source.
- **Existing SVG path.** Read the file and confirm the `viewBox` / intrinsic size. If there is no `viewBox`, derive one from `width`/`height`.
- **Described icon.** Generate a minimal SVG matching the description. Keep it geometric and legible at 16×16.

### 1.2 Background color

Ask: "What background color should the favicon square use? (hex, e.g. `#FCF8F2`)"

This fills the rounded square and also becomes the page `theme-color` meta tag value.

### 1.3 Icon color

Ask: "What color should the icon itself be? (hex, e.g. `#22D3EE`)"

For Lucide / stroke-based icons, this becomes the `stroke` color. For filled icons, this becomes the `fill` color.

Confirm both colors back to the user before generating.

## Step 2 — Locate the layout file

Find where favicon `<link>` tags should live. First, read `CLAUDE.md` and/or `AGENTS.md` if they exist — they may declare a convention for where head/meta tags go.

If no convention is declared, check in this order:

- Next.js (app router): `app/layout.tsx` / `app/layout.jsx` — favicons are typically handled via file conventions (`app/icon.*`, `app/apple-icon.*`) and/or a `metadata` export
- Next.js (pages router): `pages/_document.tsx` / `pages/_app.tsx`
- Rails: `app/views/layouts/application.html.erb` (or `.haml`, `.slim`)
- Vite/React (Inertia, SPA): `index.html` or `app/views/layouts/application.html.erb`
- SvelteKit: `src/app.html`
- Astro: `src/layouts/*.astro` or individual page layouts
- Plain HTML: `index.html`

If you can't find the layout, grep for `rel="icon"` or `apple-touch-icon` across the repo. If still ambiguous, ask the user.

## Step 3 — Determine the public asset directory

**Always look for a `public/` folder first.** Most modern frameworks use it, and the four canonical files (`favicon.ico`, `icon.png`, `icon.svg`, `apple-touch-icon.png`) must always land there if it exists.

If the project also has another conventional asset location (e.g. Next.js app router's `app/` directory for file-convention icons), write there in addition — but `public/` is always required.

If neither exists, ask the user where assets should go, then ensure a `public/` equivalent.

## Step 4 — Generate the SVG for browser tabs (rounded square with centered icon)

Write `public/icon.svg` as a **square with tight rounded corners**, the background color filling the square, and the source icon centered inside. After writing it, also copy the same file to `public/favicon.svg` (some browsers and link-preview crawlers look for `favicon.svg` at the site root by name).

Canvas: `80 × 80`. Corner radius: `16` (tight rounded corners — 20% of the canvas).

The inner icon should occupy ~60% of the canvas (safe zone for iOS rounded corner masking). Round offsets to whole pixels.

**Stroke-based icon (Lucide, etc.)** — keep `fill="none"` and apply the icon color via `stroke`. Always use `stroke-width="1.5"` for Lucide:

```svg
<svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <rect width="80" height="80" rx="16" fill="#FCF8F2"/>
  <g transform="translate(Xoff Yoff) scale(N)" stroke="#22D3EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <!-- exact Lucide paths here, fill/stroke attributes stripped from individual paths -->
  </g>
</svg>
```

**Filled icon** — apply the icon color via `fill`:

```svg
<svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
  <rect width="80" height="80" rx="16" fill="#FCF8F2"/>
  <g transform="translate(Xoff Yoff) scale(N)" fill="#22D3EE">
    <!-- source paths, individual fill attributes removed -->
  </g>
</svg>
```

**Centering math** — if the source viewBox is `W × H`, target inner size `T = 48` (60% of 80):

- `N = T / max(W, H)`
- `Xoff = (80 - W * N) / 2`
- `Yoff = (80 - H * N) / 2`

## Step 5 — Generate the raster source SVG

Write a second, scaled-up SVG to `/tmp/favicon-source.svg` — same composition, but at `512 × 512` with corner radius `102` (~20% of 512). This is the source for all PNGs and the ICO.

```svg
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="102" fill="#FCF8F2"/>
  <g transform="translate(Xoff Yoff) scale(N)" stroke="#22D3EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <!-- source paths -->
  </g>
</svg>
```

For Lucide, multiply `stroke-width` by `N` if needed so it renders proportionally at large sizes, OR keep `stroke-width="1.5"` outside the transform and apply `vector-effect="non-scaling-stroke"` on the paths. Simpler: keep the icon's stroke crisp by scaling its stroke-width with `N` (e.g. `stroke-width="${1.5 * N}"`).

Inner-icon target: `T = 308` (~60% of 512). Same offset math as Step 4.

## Step 6 — Rasterize all sizes

Run from the project root, with `$PUBLIC` set to the public directory (usually `public`):

```bash
rsvg-convert -w 512 -h 512 /tmp/favicon-source.svg -o $PUBLIC/icon.png
rsvg-convert -w 192 -h 192 /tmp/favicon-source.svg -o $PUBLIC/icon-192.png
rsvg-convert -w 180 -h 180 /tmp/favicon-source.svg -o $PUBLIC/apple-touch-icon.png
rsvg-convert -w 48  -h 48  /tmp/favicon-source.svg -o /tmp/fav-48.png
rsvg-convert -w 32  -h 32  /tmp/favicon-source.svg -o /tmp/fav-32.png
rsvg-convert -w 16  -h 16  /tmp/favicon-source.svg -o /tmp/fav-16.png
magick /tmp/fav-16.png /tmp/fav-32.png /tmp/fav-48.png $PUBLIC/favicon.ico
```

This produces, in `public/`:

- `favicon.ico` — multi-resolution 16/32/48 for Windows/legacy
- `icon.svg` and `favicon.svg` — the rounded square mark for modern browser tabs
- `icon.png` — 512×512 PNG
- `icon-192.png` — 192×192 PNG for Android
- `apple-touch-icon.png` — 180×180 PNG for iOS home screen

## Step 7 — Wire up the meta tags

Edit the layout file. Inside `<head>`, ensure these tags exist (add or replace — do not duplicate):

```html
<meta name="theme-color" content="#FCF8F2">
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

Notes:

- `theme-color` uses the background color from Step 1.2.
- `favicon.ico` gets `sizes="32x32"` (not `any`) so modern browsers prefer the SVG.
- If the project already has a `<meta name="theme-color">` or any `<link rel="icon">` / `apple-touch-icon`, replace them — don't stack duplicates.
- **Next.js app router:** prefer the file convention. Drop the generated files at `app/icon.svg`, `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico` (rename accordingly) and let Next emit the tags. Still write the same four files to `public/` as well. Only hand-write `<link>` tags if the project already does.

## Step 8 — Report what changed

Summarize for the user:

- The icon source used (Lucide name, library, file path, or description)
- The background and icon colors
- Which files were written
- Which head tags were added or replaced
- A reminder to hard-refresh the browser (or close and reopen the tab) to bust the favicon cache

## Rules

- Do not leave behind a half-generated set. If any step fails, stop and report.
- Do not add a `manifest.json` unless the project already has one.
- Do not commit the changes. This skill only generates assets and edits the layout.
- Do not use emojis in file contents.
- Keep the generated SVGs minimal — no decorative comments, no unused attributes.
- Always preserve the exact Lucide path data when a Lucide icon is requested. Only the stroke width and color may change.
